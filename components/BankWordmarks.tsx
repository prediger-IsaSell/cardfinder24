// Subtile „Karten von …"-Leiste mit Bank-Namen als Text.
// Keine Logos, daher rechtlich unbedenklich vor Financeads-Freischaltung.
// Später: Texte gegen offizielle Bank-Logos (von Financeads bereitgestellt) tauschen.

export function BankWordmarks() {
  return (
    <section aria-label="Anbieter der gelisteten Karten" className="py-8 sm:py-10">
      <div className="container-narrow">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ash/80">
            Antrag direkt bei
          </span>

          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-cloud/80">
            <span className="font-sans text-lg font-bold tracking-tight">
              easybank
            </span>
            <span aria-hidden="true" className="text-ash/30">·</span>
            <span className="font-sans text-[15px] font-bold uppercase tracking-[0.14em]">
              American Express
            </span>
            <span aria-hidden="true" className="text-ash/30">·</span>
            <span className="font-sans text-xl font-extrabold tracking-tighter">
              N26
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
