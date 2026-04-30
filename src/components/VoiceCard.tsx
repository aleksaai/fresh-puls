import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import { Play, Pause, Loader2 } from "lucide-react"
import type { Voice } from "../config/voices"

const AGE_LABELS: Record<Voice["age"], string> = {
  young: "Jung",
  middle_aged: "Mittel",
  old: "Reif",
}

interface VoiceCardProps {
  voice: Voice
  isActive: boolean
  onPlay: (id: string) => void
  onStop: () => void
  index: number
}

export function VoiceCard({ voice, isActive, onPlay, onStop, index }: VoiceCardProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  const isPending = !voice.audioUrl
  const initial = voice.name.charAt(0).toUpperCase()

  // Stop audio when another card becomes active
  useEffect(() => {
    if (!isActive && audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setProgress(0)
      setIsLoading(false)
    }
  }, [isActive])

  function handleToggle() {
    if (isPending || !voice.audioUrl) return
    const audio = audioRef.current
    if (!audio) return

    if (isActive) {
      audio.pause()
      audio.currentTime = 0
      setProgress(0)
      onStop()
      return
    }

    onPlay(voice.id)
    setIsLoading(true)
    audio.currentTime = 0
    audio.play().catch(() => {
      setIsLoading(false)
      onStop()
    })
  }

  function handleEnded() {
    setProgress(0)
    onStop()
  }

  function handleTimeUpdate() {
    const a = audioRef.current
    if (!a || !a.duration) return
    setProgress((a.currentTime / a.duration) * 100)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05 * index, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`glass-card rounded-2xl p-5 sm:p-6 flex flex-col gap-4 transition-shadow duration-300 ${
        isActive ? "shadow-[0_20px_60px_rgba(38,92,242,0.18)]" : "hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)]"
      } ${isPending ? "opacity-60" : ""}`}
    >
      {/* Avatar + Name + Age */}
      <div className="flex items-start gap-4">
        <div className="relative shrink-0">
          <div
            className={`absolute inset-[-4px] rounded-full transition-all ${
              isActive
                ? "bg-brand-500/30 animate-[pulse-glow_1.5s_ease-in-out_infinite]"
                : "bg-brand-500/0"
            }`}
          />
          <div
            className={`relative w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-[0_4px_12px_rgba(38,92,242,0.25)] ${
              voice.gender === "female"
                ? "bg-gradient-to-br from-brand-400 to-brand-600"
                : "bg-gradient-to-br from-brand-600 to-brand-800"
            }`}
          >
            {initial}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-foreground leading-tight truncate">
            {voice.name}
          </h3>
          <p className="text-xs font-medium text-foreground-subtle uppercase tracking-wider mt-1">
            {AGE_LABELS[voice.age]}
            {isPending && " · Demnächst"}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-foreground-muted leading-relaxed line-clamp-3 min-h-[60px]">
        {voice.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {voice.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-medium text-brand-700 bg-brand-50 rounded-full px-2.5 py-1"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Waveform (active only) */}
      <div className="flex items-center justify-center gap-[2px] h-8">
        {Array.from({ length: 28 }).map((_, i) => (
          <div
            key={i}
            className={`w-[2px] rounded-full transition-colors ${
              isActive ? "bg-brand-500" : "bg-brand-500/15"
            }`}
            style={{
              height: isActive ? "100%" : "30%",
              animation: isActive
                ? `waveform ${0.5 + Math.random() * 0.5}s ease-in-out ${i * 0.04}s infinite`
                : "none",
            }}
          />
        ))}
      </div>

      {/* Play button + progress */}
      <div className="space-y-2">
        <button
          onClick={handleToggle}
          disabled={isPending}
          className={`w-full flex items-center justify-center gap-2.5 rounded-xl py-3 text-sm font-semibold transition-all ${
            isPending
              ? "bg-black/[0.04] text-foreground-subtle cursor-not-allowed"
              : isActive
              ? "bg-foreground text-white hover:bg-foreground/90 cursor-pointer"
              : "btn-glass-accent cursor-pointer"
          }`}
        >
          {isLoading && !isActive ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : isActive ? (
            <>
              <Pause className="w-4 h-4" />
              Stoppen
            </>
          ) : (
            <>
              <Play className="w-4 h-4" />
              {isPending ? "In Vorbereitung" : "Anhören"}
            </>
          )}
        </button>

        {/* Progress bar */}
        <div className="h-0.5 w-full bg-black/[0.05] rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-500 transition-[width] duration-100 ease-linear"
            style={{ width: isActive ? `${progress}%` : "0%" }}
          />
        </div>
      </div>

      {/* Hidden audio element */}
      {voice.audioUrl && (
        <audio
          ref={audioRef}
          src={voice.audioUrl}
          preload="metadata"
          onLoadedData={() => setIsLoading(false)}
          onCanPlay={() => setIsLoading(false)}
          onEnded={handleEnded}
          onTimeUpdate={handleTimeUpdate}
        />
      )}
    </motion.div>
  )
}
