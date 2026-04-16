import { motion } from "motion/react"

export function DatenschutzPage() {
  return (
    <section className="min-h-screen bg-surface">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-foreground mb-12">
            Datenschutzerklärung
          </h1>

          <div className="space-y-10 text-foreground-muted leading-relaxed">
            {/* 1. Verantwortlicher */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                1. Verantwortlicher
              </h2>
              <p>
                Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="mt-3">
                Thomas Luderer
                <br />
                Fresh Puls Solution
                <br />
                Hainbrunnenstr. 31
                <br />
                91301 Forchheim
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

            {/* 2. Erhebung und Speicherung */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                2. Erhebung und Speicherung personenbezogener Daten
              </h2>
              <p>
                Beim Besuch unserer Website werden automatisch Informationen allgemeiner
                Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die
                Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres
                Internet-Service-Providers, Ihre IP-Adresse und Ähnliches. Sie werden
                insbesondere zu folgenden Zwecken verarbeitet:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Sicherstellung eines problemlosen Verbindungsaufbaus der Website</li>
                <li>Sicherstellung einer reibungslosen Nutzung unserer Website</li>
                <li>Auswertung der Systemsicherheit und -stabilität</li>
                <li>Weitere administrative Zwecke</li>
              </ul>
              <p className="mt-3">
                Ihre Daten werden nicht dazu verwendet, Rückschlüsse auf Ihre Person zu
                ziehen. Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1
                lit. f DSGVO. Unser berechtigtes Interesse folgt aus den oben
                aufgelisteten Zwecken zur Datenerhebung.
              </p>
            </div>

            {/* 3. Nutzung der Daten */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                3. Nutzung der Daten
              </h2>
              <p>
                Wir verwenden die erhobenen Daten ausschließlich zur Erbringung unserer
                Dienstleistungen, zur Beantwortung Ihrer Anfragen und zur Verbesserung
                unseres Angebots. Eine Weitergabe an Dritte erfolgt nur, wenn dies zur
                Vertragserfüllung erforderlich ist oder Sie ausdrücklich eingewilligt
                haben.
              </p>
            </div>

            {/* 4. Weitergabe von Daten */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                4. Weitergabe von Daten
              </h2>
              <p>
                Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den
                im Folgenden aufgeführten Zwecken findet nicht statt. Wir geben Ihre
                persönlichen Daten nur an Dritte weiter, wenn Sie Ihre ausdrückliche
                Einwilligung dazu erteilt haben, die Weitergabe zur Geltendmachung,
                Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist und kein
                Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges
                Interesse an der Nichtweitergabe Ihrer Daten haben, oder für den Fall,
                dass für die Weitergabe eine gesetzliche Verpflichtung besteht.
              </p>
            </div>

            {/* 5. Cookies */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Cookies</h2>
              <p>
                Unsere Website verwendet Cookies. Dabei handelt es sich um kleine
                Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies
                helfen uns dabei, unser Angebot nutzerfreundlicher und effektiver zu
                gestalten. Einige Cookies sind &quot;Session-Cookies&quot; und werden nach
                Ende Ihrer Browser-Sitzung automatisch gelöscht. Andere Cookies bleiben
                auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Diese Cookies
                ermöglichen es uns, Ihren Browser beim nächsten Besuch
                wiederzuerkennen. Sie können Ihren Browser so einstellen, dass Sie über
                das Setzen von Cookies informiert werden und Cookies nur im Einzelfall
                erlauben.
              </p>
            </div>

            {/* 6. Kontaktformular */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                6. Kontaktformular
              </h2>
              <p>
                Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen,
                werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
                angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
                von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne
                Ihre Einwilligung weiter. Die Verarbeitung der in das Kontaktformular
                eingegebenen Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
              </p>
            </div>

            {/* 7. SSL-Verschlüsselung */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                7. SSL-Verschlüsselung
              </h2>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
                vertraulicher Inhalte eine SSL-Verschlüsselung. Eine verschlüsselte
                Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
                &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem
                Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </div>

            {/* 8. Rechte der betroffenen Person */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                8. Rechte der betroffenen Person
              </h2>
              <p className="mb-3">
                Sie haben das Recht:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Auskunft</strong> über Ihre von uns
                  verarbeiteten personenbezogenen Daten zu verlangen (Art. 15 DSGVO).
                </li>
                <li>
                  <strong className="text-foreground">Berichtigung</strong> unrichtiger
                  oder unvollständiger Daten zu verlangen (Art. 16 DSGVO).
                </li>
                <li>
                  <strong className="text-foreground">Löschung</strong> Ihrer bei uns
                  gespeicherten personenbezogenen Daten zu verlangen (Art. 17 DSGVO).
                </li>
                <li>
                  <strong className="text-foreground">Einschränkung</strong> der
                  Verarbeitung Ihrer personenbezogenen Daten zu verlangen (Art. 18
                  DSGVO).
                </li>
                <li>
                  <strong className="text-foreground">Widerspruch</strong> gegen die
                  Verarbeitung Ihrer personenbezogenen Daten einzulegen (Art. 21 DSGVO).
                </li>
              </ul>
            </div>

            {/* 9. Beschwerderecht */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                9. Beschwerderecht bei einer Aufsichtsbehörde
              </h2>
              <p>
                Unbeschadet eines anderweitigen verwaltungsrechtlichen oder
                gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei
                einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat Ihres
                Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen
                Verstoßes, zu, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie
                betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
