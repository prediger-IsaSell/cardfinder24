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

          <h1 className="text-4xl font-extrabold text-cloud mb-8">Datenschutzerklärung</h1>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-bold text-cloud mb-2">1. Verantwortlicher</h2>
              <p className="text-ash leading-relaxed text-sm">
                Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist der
                im Impressum genannte Betreiber.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-cloud mb-2">2. Erhebung personenbezogener Daten</h2>
              <p className="text-ash leading-relaxed text-sm">
                Beim Besuch dieser Website werden vom Server automatisch Informationen in
                Server-Log-Dateien gespeichert, die dein Browser übermittelt. Dies sind: IP-Adresse,
                Datum und Uhrzeit der Anfrage, Referrer-URL, aufgerufene Seite, verwendeter Browser und
                Betriebssystem. Diese Daten dienen ausschließlich der technischen Bereitstellung und
                Sicherheit der Website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-cloud mb-2">3. Affiliate-Links</h2>
              <p className="text-ash leading-relaxed text-sm">
                Diese Website enthält Affiliate-Links zu externen Anbietern. Klickst du auf einen
                solchen Link, wirst du zur Website des jeweiligen Anbieters weitergeleitet. Welche Daten
                der Anbieter dabei erhebt, regelt dessen Datenschutzerklärung. Wir geben keine
                personenbezogenen Daten an Affiliate-Partner weiter.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-cloud mb-2">4. Cookies</h2>
              <p className="text-ash leading-relaxed text-sm">
                Diese Website setzt aktuell keine eigenen Tracking-Cookies. Sollte sich das ändern,
                wirst du beim ersten Besuch um deine Zustimmung gebeten.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-cloud mb-2">5. Deine Rechte</h2>
              <p className="text-ash leading-relaxed text-sm">
                Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der
                Verarbeitung deiner personenbezogenen Daten. Wende dich dafür an die im Impressum
                angegebene Kontaktadresse.
              </p>
            </section>

            <p className="text-xs text-ash/70 italic border-t border-hairline pt-6 mt-8">
              Platzhalter — bitte vor Veröffentlichung rechtlich prüfen lassen oder
              Datenschutz-Generator (z.B. eRecht24) nutzen.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
