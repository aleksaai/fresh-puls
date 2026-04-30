#!/usr/bin/env bash
# =============================================================================
# Voice-Samples-Generator für Stimmen-Galerie (/stimmen)
# =============================================================================
# Generiert für jede der 10 Stimmen aus src/config/voices.ts ein MP3-Sample
# über die ElevenLabs TTS-API mit dem eleven_v3 Modell.
#
# Voraussetzungen:
#   - ELEVENLABS_API_KEY als ENV-Variable gesetzt
#   - jq + curl installiert
#
# Nutzung:
#   export ELEVENLABS_API_KEY=sk_...
#   ./scripts/generate-voice-samples.sh
#
# Output: public/audio/voices/{id}.mp3
# =============================================================================
set -e

if [ -z "$ELEVENLABS_API_KEY" ]; then
  echo "ERROR: ELEVENLABS_API_KEY env var not set"
  echo "Run: export ELEVENLABS_API_KEY=sk_..."
  exit 1
fi

SAMPLE_TEXT="Hallo, ich bin Ihr persönlicher KI-Assistent und freue mich darauf, Sie heute bei Ihrem Anliegen zu unterstützen."
# eleven_turbo_v2_5 = matches what Patricia + Kati use in production for German
MODEL_ID="eleven_turbo_v2_5"
OUTPUT_DIR="public/audio/voices"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_DIR"
mkdir -p "$OUTPUT_DIR"

# id|voice_id pairs — sync with src/config/voices.ts
VOICES=(
  # Weibliche Stimmen
  "susi|v3V1d2rk6528UrLKRuy8"
  "doreen|mDRP1h6KfUD1XAUJxqr0"
  "ela|NE7AIW5DoJ7lUosXV2KR"
  "irene|NkMe1eztMQReztnhYfeX"
  "berta|CoFoB7a7PXA8RBsMHbua"
  # Männliche Stimmen
  "finn|1J0wWp4zPQIvsK7Xwh34"
  "felix|MbbPUteESkJWr4IAaW35"
  "ben|MMwckqU477oQxnAk1SgA"
  "elias|1h6gHcRvQugDNZgdAo9N"
  "benjamin|buUrS4YSeOZtlCKnzwkC"
)

generate_one() {
  local id="$1"
  local voice_id="$2"
  local output_file="$OUTPUT_DIR/${id}.mp3"

  if [ -z "$voice_id" ]; then
    echo "  SKIP $id — voice_id missing"
    return
  fi

  if [ -f "$output_file" ]; then
    echo "  EXISTS $id"
    return
  fi

  echo "  GEN $id (voice_id=$voice_id)..."

  curl -sS -X POST "https://api.elevenlabs.io/v1/text-to-speech/${voice_id}" \
    -H "xi-api-key: $ELEVENLABS_API_KEY" \
    -H "Content-Type: application/json" \
    -H "Accept: audio/mpeg" \
    -d "$(cat <<EOF
{
  "text": "$SAMPLE_TEXT",
  "model_id": "$MODEL_ID",
  "voice_settings": {
    "stability": 0.5,
    "similarity_boost": 0.85,
    "style": 0.0,
    "use_speaker_boost": true
  }
}
EOF
)" \
    --output "$output_file"

  # Verify the file is actually audio (not a JSON error)
  if file "$output_file" | grep -q "JSON\|ASCII\|empty"; then
    echo "    ERROR: API returned JSON/error instead of audio:"
    cat "$output_file" | head -c 500
    echo ""
    rm "$output_file"
    return 1
  fi

  size=$(wc -c < "$output_file" | tr -d ' ')
  echo "    OK ($size bytes)"
}

echo "Generating 10 voice samples to $OUTPUT_DIR/..."
for entry in "${VOICES[@]}"; do
  IFS='|' read -r id voice_id <<< "$entry"
  generate_one "$id" "$voice_id"
done

echo ""
echo "Done. Files in $OUTPUT_DIR/:"
ls -lh "$OUTPUT_DIR/" | tail -n +2
