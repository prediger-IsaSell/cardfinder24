import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata = { title: 'Datenschutz' };

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main>
        <div className="container-narrow py-24 max-w-3xl">
          <Link href="/" className="text-sm text-mint hover:text-mint-bright font-semibold inline-flex items-center gap-1 mb-8">
            ← Zurück
          </Link>

          <h1 className="text-4xl font-extrabold text-cloud mb-3">Datenschutzerklärung</h1>
          <p className="text-xs text-ash/70 mb-10">Stand: Juni 2026</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold text-cloud mb-2">1. Verantwortlicher</h2>
              <p className="text-ash leading-relaxed text-sm">
                Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:<br /><br />
                Paul Prediger<br />
                Franz-Reiche-Ring 15<br />
                90478 Nürnberg<br />
                E-Mail: info@cardfinder24.de
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-cloud mb-2">2. Grundsätzliches &amp; Umfang der Datenverarbeitung</h2>
              <p className="text-ash leading-relaxed text-sm">
                Diese Website ist eine reine Informations- und Vergleichsseite. Es gibt keine
                Registrierung, kein Nutzerkonto, kein Kontaktformular und keinen Newsletter. Wir
                erheben über diese Website keine Daten, die du aktiv eingibst. Verarbeitet werden
                ausschließlich die technisch notwendigen Daten, die beim Aufruf der Seite anfallen
                (siehe Ziffer 4).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-cloud mb-2">3. Hosting (Vercel) &amp; Datenübermittlung in die USA</h2>
              <p className="text-ash leading-relaxed text-sm">
                Diese Website wird gehostet von Vercel Inc., 340 Pine Street, Suite 700,
                San Francisco, CA 94104, USA. Vercel verarbeitet in unserem Auftrag die unter
                Ziffer 4 genannten Server-Daten. Mit Vercel besteht ein Vertrag zur Auftrags­ver­arbeitung
                gemäß Art. 28 DSGVO.
                <br /><br />
                Da Vercel ein US-Unternehmen ist, kann es zu einer Übermittlung personenbezogener
                Daten (insbesondere der IP-Adresse) in die USA kommen. Vercel ist unter dem
                <strong> EU-U.S. Data Privacy Framework (DPF)</strong> zertifiziert; für die USA liegt
                ein Angemessenheitsbeschluss der EU-Kommission vor (Art. 45 DSGVO). Ergänzend hat
                Vercel die EU-Standardvertragsklauseln (Art. 46 DSGVO) abgeschlossen. Damit ist ein
                angemessenes Datenschutzniveau gewährleistet.
                <br /><br />
                Rechtsgrundlage für das Hosting ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
                am sicheren, stabilen Betrieb der Website).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-cloud mb-2">4. Server-Logfiles</h2>
              <p className="text-ash leading-relaxed text-sm">
                Beim Aufruf dieser Website werden automatisch Informationen erfasst, die dein Browser
                übermittelt und die technisch erforderlich sind, um dir die Seite anzuzeigen. Dies sind:
              </p>
              <ul className="mt-3 space-y-1 text-sm text-ash list-disc list-inside">
                <li>IP-Adresse des anfragenden Geräts</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>aufgerufene Seite / Datei</li>
                <li>Referrer-URL (zuvor besuchte Seite)</li>
                <li>verwendeter Browsertyp und Betriebssystem</li>
              </ul>
              <p className="mt-3 text-ash leading-relaxed text-sm">
                Diese Daten werden nicht mit anderen Datenquellen zusammengeführt und dienen
                ausschließlich der technischen Auslieferung, Stabilität und Sicherheit der Website.
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht, sobald sie
                für den Zweck der Erhebung nicht mehr erforderlich sind; spätestens nach kurzer Frist
                im Rahmen der serverseitigen Protokollierung durch unseren Hoster.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-cloud mb-2">5. Affiliate-Links &amp; Financeads</h2>
              <p className="text-ash leading-relaxed text-sm">
                Diese Website finanziert sich über Affiliate-Links. Klickst du auf eine der
                vorgestellten Karten („Jetzt sichern" o. ä.), wirst du über das deutsche
                Affiliate-Netzwerk <strong>financeAds GmbH &amp; Co. KG, Karlstraße 9,
                90403 Nürnberg</strong>, zum jeweiligen Kartenanbieter weitergeleitet.
                <br /><br />
                Erst durch deinen Klick auf einen solchen Link wird die Weiterleitung ausgelöst.
                Dabei kann Financeads technische Informationen (z. B. eine Klick-/Tracking-ID,
                Zeitstempel, ggf. die IP-Adresse) verarbeiten, um die Vermittlung einer Karte
                korrekt einer Provision zuzuordnen. cardfinder24 selbst erhält dabei keine
                personenbezogenen Daten über dich und kann dich nicht identifizieren.
                <br /><br />
                Rechtsgrundlage für die Weiterleitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
                Interesse an der Finanzierung des kostenlosen Angebots). Für die anschließende
                Datenverarbeitung durch Financeads und den jeweiligen Kartenanbieter gelten deren
                eigene Datenschutzerklärungen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-cloud mb-2">6. Cookies, Analyse &amp; Tracking</h2>
              <p className="text-ash leading-relaxed text-sm">
                cardfinder24 setzt <strong>keine eigenen Cookies</strong> und nutzt <strong>keine
                Analyse-, Tracking- oder Werbedienste</strong> (kein Google Analytics, kein Meta-/
                Facebook-Pixel, keine Werbe-Netzwerke). Es ist daher keine Einwilligung nach
                § 25 TDDDG erforderlich und es wird kein Cookie-Banner angezeigt. Sollten zukünftig
                einwilligungspflichtige Dienste eingesetzt werden, holen wir vorab deine
                ausdrückliche Einwilligung ein.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-cloud mb-2">7. SSL-/TLS-Verschlüsselung</h2>
              <p className="text-ash leading-relaxed text-sm">
                Diese Website nutzt aus Sicherheitsgründen eine TLS-Verschlüsselung (erkennbar am
                „https://" und dem Schloss-Symbol in der Adresszeile). Dadurch sind die übertragenen
                Daten für Dritte nicht mitlesbar.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-cloud mb-2">8. Keine automatisierte Entscheidungsfindung</h2>
              <p className="text-ash leading-relaxed text-sm">
                Eine automatisierte Entscheidungsfindung oder ein Profiling im Sinne des Art. 22 DSGVO
                findet nicht statt.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-cloud mb-2">9. Deine Rechte als betroffene Person</h2>
              <p className="text-ash leading-relaxed text-sm">
                Dir stehen nach der DSGVO folgende Rechte zu:
              </p>
              <ul className="mt-3 space-y-1 text-sm text-ash list-disc list-inside">
                <li>Auskunft über deine verarbeiteten Daten (Art. 15)</li>
                <li>Berichtigung unrichtiger Daten (Art. 16)</li>
                <li>Löschung (Art. 17)</li>
                <li>Einschränkung der Verarbeitung (Art. 18)</li>
                <li>Datenübertragbarkeit (Art. 20)</li>
                <li>Widerspruch gegen die Verarbeitung (Art. 21)</li>
              </ul>
              <p className="mt-3 text-ash leading-relaxed text-sm">
                <strong>Widerspruchsrecht:</strong> Soweit wir Daten auf Grundlage berechtigter
                Interessen (Art. 6 Abs. 1 lit. f DSGVO) verarbeiten, hast du das Recht, aus Gründen,
                die sich aus deiner besonderen Situation ergeben, jederzeit Widerspruch einzulegen.
                <br /><br />
                Zur Ausübung deiner Rechte genügt eine formlose Nachricht an: info@cardfinder24.de
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-cloud mb-2">10. Beschwerderecht bei der Aufsichtsbehörde</h2>
              <p className="text-ash leading-relaxed text-sm">
                Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Für uns
                zuständig ist:<br /><br />
                Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br />
                Promenade 18, 91522 Ansbach
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-cloud mb-2">11. Minderjährige</h2>
              <p className="text-ash leading-relaxed text-sm">
                Dieses Angebot richtet sich nicht an Kinder. Personen unter 18 Jahren sollten ohne
                Zustimmung der Erziehungsberechtigten keine Anträge bei den verlinkten Anbietern
                stellen.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
