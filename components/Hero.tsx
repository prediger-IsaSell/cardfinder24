import { CardChooser } from './CardChooser';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-10 sm:pt-28 sm:pb-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-80 w-[40rem] max-w-[95vw] rounded-full bg-mint/15 blur-[110px] animate-glow-pulse"
      />

      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mt-4 text-[2.6rem] leading-[0.95] sm:text-[5rem] font-extrabold">
            Deine Karte.
            <br />
            <span className="text-mint-gradient">Null Gebühren.</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-ash">
            Dauerhaft kostenlos.
          </p>
        </div>

        {/* Mobil: gestapelt (alle 3 passen) · Desktop: nebeneinander */}
        <CardChooser />
      </div>
    </section>
  );
}
