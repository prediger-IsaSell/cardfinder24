import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata = { title: 'Impressum' };

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main>
        <div className="container-narrow py-24 max-w-3xl">
          <Link href="/" className="text-sm text-mint hover:text-mint-bright font-semibold inline-flex items-center gap-1 mb-8">
            ← Zurück
          </Link>

          <h1 className="text-4xl font-extrabold text-cloud mb-8">Impressum</h1>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-bold text-cloud mb-2">Angaben gemäß § 5 TMG</h2>
              <p className="text-ash leading-relaxed">
                [Vor- und Nachname]<br />[Straße und Hausnummer]<br />[PLZ und Ort]<br />Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-cloud mb-2">Kontakt</h2>
              <p className="text-ash leading-relaxed">E-Mail: [kontakt@cardfinder24.de oder andere Adresse]</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-cloud mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p className="text-ash leading-relaxed">[Vor- und Nachname]<br />[Adresse]</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-cloud mb-2">Haftungsausschluss</h2>
              <p className="text-ash leading-relaxed text-sm">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                Die Konditionen der vorgestellten Karten können sich ändern, bitte prüfe immer die
                aktuellen Bedingungen direkt beim Anbieter.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-cloud mb-2">Affiliate-Hinweis</h2>
              <p className="text-ash leading-relaxed text-sm">
                cardfinder24 enthält Werbung in Form von Affiliate-Links. Beantragt ein Nutzer über
                diese Links eine Karte, erhalten wir vom jeweiligen Anbieter eine Provision. Für den
                Nutzer entstehen dadurch keine zusätzlichen Kosten.
              </p>
            </section>

            <p className="text-xs text-ash/70 italic border-t border-hairline pt-6 mt-8">
              Platzhalter — bitte vor Veröffentlichung mit echten Daten ersetzen.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
