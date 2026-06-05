import Image from 'next/image';
import { CARDS } from '@/lib/cards';

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
            Dauerhaft kostenlos. Kein Kleingedrucktes.
          </p>
        </div>

        {/* Mobil: gestapelt (alle 3 passen) · Desktop: nebeneinander (füllt die Breite) */}
        <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 max-w-[260px] md:max-w-3xl mx-auto">
          {CARDS.map((card) => (
            <a
              key={card.id}
              href={`#karte-${card.id}`}
              aria-label={`${card.shortName} ansehen`}
              className="block group focus:outline-none"
            >
              <Image
                src={card.imagePath}
                alt={card.name}
                width={360}
                height={227}
                priority
                className="w-full h-auto rounded-2xl shadow-float ring-1 ring-white/10 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:ring-mint/50 group-hover:shadow-glow"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
