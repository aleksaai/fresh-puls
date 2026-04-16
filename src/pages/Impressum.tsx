import { motion } from "motion/react"

export function ImpressumPage() {
  return (
    <section className="min-h-screen bg-surface">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-foreground mb-12">Impressum</h1>

          <div className="space-y-10 text-foreground-muted leading-relaxed">
            {/* Angaben gemäß § 5 TMG */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Angaben gemäß § 5 TMG
              </h2>
              <p>
                Thomas Luderer
                <br />
                Fresh Puls Solution
                <br />
                Hainbrunnenstr. 31
                <br />
                91301 Forchheim
              </p>
            </div>

            {/* Kontakt */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Kontakt</h2>
              <p>
                Telefon: +49 15563 035374
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:info@fp-solution.de"
                  className="text-brand-500 hover:text-brand-600 transition-colors"
                >
                  info@fp-solution.de
                </a>
              </p>
            </div>

            {/* Verantwortlich */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p>
                Thomas Luderer
                <br />
                Hainbrunnenstr. 31
                <br />
                91301 Forchheim
              </p>
            </div>

            {/* Haftungsausschluss */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Haftungsausschluss
              </h2>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">
                Haftung für Inhalte
              </h3>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
                Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
                keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG
                für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch
                nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
                überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
                Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
                der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
                von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
                entfernen.
              </p>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">
                Haftung für Links
              </h3>
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
                Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
                Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
                Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
                verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung
                auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
                Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
                einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">
                Urheberrecht
              </h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
                Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
                Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
                jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
                nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die
                Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als
                solche gekennzeichnet. Sollten Sie trotzdem auf eine
                Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
                wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
