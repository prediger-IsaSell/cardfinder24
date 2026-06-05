const FAQS = [
  {
    q: 'Wie wählt ihr die Karten aus?',
    a: 'Wir überprüfen den Markt der in Deutschland erhältlichen Karten und Konten, über 100 an der Zahl, und nehmen nur die auf, die dauerhaft kostenlos sind und die wir selbst nutzen würden. Geprüft haben wir unter anderem: N26, Revolut, Vivid, bunq, Wise, Tomorrow, C24 Bank, comdirect, DKB, ING, Consorsbank, Trade Republic, Openbank, norisbank, 1822direkt, Hanseatic GenialCard, American Express (Blue, PAYBACK, Gold, Platinum), easybank (ehemals Barclays), Santander BestCard, TARGOBANK, Advanzia Gebührenfrei Mastercard Gold, awa7, TF Bank, Klarna, PayPal, Curve, Crypto.com, Miles & More und viele weitere.',
  },
  {
    q: 'Ist cardfinder24 wirklich kostenlos für mich?',
    a: 'Ja, vollständig. Wir bekommen eine Provision vom Anbieter, wenn du dich für eine Karte entscheidest. Du zahlst nichts an uns.',
  },
  {
    q: 'Warum nur drei Karten?',
    a: 'Weil über 100 Karten zu vergleichen niemanden weiterbringt. Wir filtern vor und zeigen nur die, die wir selbst gut finden.',
  },
  {
    q: 'Bekomme ich die Karte garantiert?',
    a: 'Das entscheidet der Anbieter. Die meisten Karten setzen eine reguläre Bonitätsprüfung voraus.',
  },
  {
    q: 'Was passiert, wenn ich klicke?',
    a: 'Du wirst direkt zum Antrag des Anbieters weitergeleitet. Den Antrag stellst du dort. Wir sehen deine Daten nicht.',
  },
  {
    q: 'Kann ich mehrere Karten beantragen?',
    a: 'Grundsätzlich ja. Mehrere Anfragen in kurzer Zeit können deine Bonität aber kurzfristig drücken. Wähle also gezielt.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28 scroll-mt-20">
      <div className="container-narrow max-w-3xl">
        <div className="text-center mb-12">
          <span className="eyebrow">Gut zu wissen</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-cloud">Bevor du klickst.</h2>
        </div>

        <div className="divide-y divide-hairline">
          {FAQS.map((faq) => (
            <details key={faq.q} className="group py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-semibold text-cloud hover:text-mint transition-colors">
                <span>{faq.q}</span>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="flex-shrink-0 text-ash transition-transform group-open:rotate-45 group-open:text-mint"
                  aria-hidden="true"
                >
                  <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <p className="pb-4 pr-8 text-[15px] text-ash leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
