'use client';

import Image from 'next/image';
import { CARDS } from '@/lib/cards';

export function CardChooser() {
  const goTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const card = document.getElementById(`karte-${id}`);
    if (!card) return;

    const btn = card.querySelector('.btn-primary') as HTMLElement | null;

    // Karte zentrieren, dann etwas höher schieben, damit unten nichts abgeschnitten ist
    const rect = card.getBoundingClientRect();
    const vh = window.innerHeight;
    const cardTopAbs = rect.top + window.scrollY;
    const centered = cardTopAbs - Math.max(0, vh - rect.height) / 2;
    const y = Math.max(0, centered);
    window.scrollTo({ top: y, behavior: 'smooth' });

    if (!btn) return;

    let fired = false;
    const pulse = () => {
      if (fired) return;
      fired = true;
      window.removeEventListener('scrollend', pulse);
      btn.classList.remove('pulse-cta');
      void btn.offsetWidth; // Reflow → Animation sicher neu starten
      btn.classList.add('pulse-cta');
      setTimeout(() => btn.classList.remove('pulse-cta'), 1000);
    };

    if ('onscrollend' in window) {
      window.addEventListener('scrollend', pulse, { once: true });
      setTimeout(pulse, 1300); // Fallback, falls scrollend nicht feuert
    } else {
      setTimeout(pulse, 650);
    }
  };

  return (
    <div id="auswahl" className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 max-w-[260px] md:max-w-3xl mx-auto scroll-mt-24">
      {CARDS.map((card) => (
        <a
          key={card.id}
          href={`#karte-${card.id}`}
          aria-label={`${card.shortName} ansehen`}
          onClick={(e) => goTo(e, card.id)}
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
  );
}
