import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="container-narrow py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Image src="/logo.svg" alt="cardfinder24" width={200} height={38} className="h-8 w-auto" />
            <p className="mt-4 text-sm text-ash leading-relaxed max-w-xs">
              Vorausgewählte Karten statt endloser Vergleichslisten.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-cloud mb-3">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/impressum" className="text-ash hover:text-mint transition">Impressum</Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-ash hover:text-mint transition">Datenschutz</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-cloud mb-3">Transparenz</h4>
            <p className="text-xs text-ash leading-relaxed">
              cardfinder24 enthält Werbung. Beantragst du über uns eine Karte, erhalten wir vom
              Anbieter eine Provision. Für dich entstehen keine Kosten.
            </p>
          </div>
        </div>

        <div className="border-t border-hairline mt-10 pt-6 text-xs text-ash flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} cardfinder24</span>
          <span>Made in Germany</span>
        </div>
      </div>
    </footer>
  );
}
