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
              <h2 className="text-xl font-bold text-cloud mb-2">Angaben gemäß § 5 DDG</h2>
              <p className="text-ash leading-relaxed">
                Paul Prediger<br />
                Franz-Reiche-Ring 15<br />
                90478 Nürnberg<br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-cloud mb-2">Kontakt</h2>
              <p className="text-ash leading-relaxed">E-Mail: info@cardfinder24.de</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-cloud mb-2">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
              <p className="text-ash leading-relaxed">
                Paul Prediger<br />
                Franz-Reiche-Ring 15<br />
                90478 Nürnberg
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-cloud mb-2">Haftung für Inhalte</h2>
              <p className="text-ash leading-relaxed text-sm">
                Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich. Die Konditionen der vorgestellten Karten
                können sich jederzeit ändern. Maßgeblich sind allein die aktuellen Bedingungen direkt
                beim jeweiligen Anbieter. Die Inhalte stellen keine Finanz-, Anlage- oder
                Steuerberatung dar.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-cloud mb-2">Haftung für Links</h2>
              <p className="text-ash leading-relaxed text-sm">
                Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                Einfluss haben. Für diese fremden Inhalte ist stets der jeweilige Anbieter oder
                Betreiber der Seiten verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden
                wir derartige Links umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-cloud mb-2">Affiliate-Hinweis</h2>
              <p className="text-ash leading-relaxed text-sm">
                cardfinder24 enthält Werbung in Form von Affiliate-Links. Beantragt ein Nutzer über
                diese Links eine Karte, erhalten wir vom jeweiligen Anbieter eine Provision über das
                Netzwerk Financeads. Für den Nutzer entstehen dadurch keine zusätzlichen Kosten.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-cloud mb-2">Verbraucherstreitbeilegung</h2>
              <p className="text-ash leading-relaxed text-sm">
                Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
