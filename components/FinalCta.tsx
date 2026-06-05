'use client';

export function FinalCta() {
  const toTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="pb-24">
      <div className="container-narrow">
        <div className="relative overflow-hidden rounded-[2rem] glass px-8 py-16 sm:py-20 text-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[34rem] max-w-[90%] rounded-full bg-mint/25 blur-[90px] animate-glow-pulse"
          />
          <div className="relative max-w-xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-cloud leading-[1.05]">
              Bereit? Such dir <span className="text-mint-gradient">deine Karte</span> aus.
            </h2>
            <p className="mt-5 text-lg text-ash">
              Drei kostenlose Karten, ein Klick zum Antrag. Mehr braucht es nicht.
            </p>
            <a href="#top" onClick={toTop} className="btn-primary mt-8">
              Jetzt Karte wählen
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M10 16V4M5 9l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
