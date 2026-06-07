import { CardChooser } from './CardChooser';
import { CardCloud } from './CardCloud';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-8 sm:pt-28 sm:pb-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-80 w-[40rem] max-w-[95vw] rounded-full bg-mint/15 blur-[110px] animate-glow-pulse"
      />

      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mt-2 sm:mt-4 text-[2.6rem] leading-[0.95] sm:text-[4.4rem] md:text-[5rem] lg:text-[5.6rem] font-extrabold">
            Deine Karte.
            <br />
            <span className="text-mint-gradient">Null Gebühren.</span>
          </h1>

          <p className="mt-3 sm:mt-5 text-[15px] sm:text-lg text-ash">Keine Jahresgebühr, dauerhaft 0 €.</p>
        </div>

        {/* Auswahl: Wolke ragt links/rechts über den Chooser raus (Hafen-Atmosphäre),
            beide skalieren aber gemeinsam mit dem Viewport. */}
        <div className="relative mt-5 sm:mt-8">
          {/* Cloud-Layer, breiter als der Chooser, dadurch sichtbare Mini-Karten am Rand */}
          <div className="pointer-events-none absolute inset-0 mx-auto w-full max-w-[360px] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
            <CardCloud />
          </div>
          {/* Chooser-Layer, komfortabel groß, aber Cloud bleibt links/rechts sichtbar */}
          <div className="relative z-10 mx-auto w-full max-w-[252px] sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            <CardChooser />
          </div>
        </div>
      </div>
    </section>
  );
}
