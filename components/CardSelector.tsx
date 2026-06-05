'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CARDS } from '@/lib/cards';

export function CardSelector() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    const next = openId === id ? null : id;
    setOpenId(next);
    if (next) {
      setTimeout(() => {
        document.getElementById(`karte-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {CARDS.map((card) => {
        const isOpen = openId === card.id;
        const redirectUrl = `/api/go/${card.id}?from=home`;

        return (
          <div
            key={card.id}
            id={`karte-${card.id}`}
            className={`rounded-3xl glass overflow-hidden scroll-mt-24 transition-all duration-300 ${
              isOpen ? 'border-mint/40 shadow-glow' : 'hover:border-mint/25'
            }`}
          >
            {/* Auswahl-Zeile: zeigt die Karte */}
            <button
              onClick={() => toggle(card.id)}
              aria-expanded={isOpen}
              className="w-full flex items-center gap-4 p-4 sm:p-5 text-left"
            >
              <Image
                src={card.imagePath}
                alt={card.name}
                width={360}
                height={227}
                className="w-28 sm:w-36 h-auto rounded-xl ring-1 ring-white/10 flex-shrink-0 shadow-float"
              />
              <div className="flex-1 min-w-0">
                <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] text-ash">
                  {card.cardType}
                </p>
                <h3 className="mt-0.5 text-base sm:text-lg font-bold text-cloud leading-tight">{card.name}</h3>
                {card.bonus ? (
                  <span className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-gold/15 px-2 py-0.5 text-[11px] font-bold text-gold">
                    ★ {card.bonus}
                  </span>
                ) : (
                  <span className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-mint/10 px-2 py-0.5 text-[11px] font-semibold text-mint">
                    ✓ Dauerhaft 0 €
                  </span>
                )}
              </div>
              <span
                className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-hairline text-cloud transition-transform duration-300 ${
                  isOpen ? 'rotate-45 border-mint/50 text-mint' : ''
                }`}
                aria-hidden="true"
              >
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </button>

            {/* Optionen: klappen bei Auswahl auf */}
            {isOpen && (
              <div className="px-5 sm:px-6 pb-6 animate-fade-up">
                <div className="h-px bg-hairline mb-5" />
                <p className="text-[15px] text-ash leading-relaxed">{card.tagline}</p>

                <ul className="mt-4 space-y-3">
                  {card.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-[15px] text-cloud/90">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-mint/10 text-mint">
                        <svg width="12" height="12" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                          <path d="M16.5 5L7.5 14.5L3.5 10.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="leading-snug">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <span className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-mint/25 bg-mint/10 px-3 py-1 text-sm font-semibold text-mint">
                  ✓ {card.annualFee}
                </span>

                <a href={redirectUrl} rel="sponsored nofollow noopener" className="btn-primary w-full mt-5">
                  {card.ctaText}
                </a>

                {card.note && <p className="mt-3 text-[11px] leading-relaxed text-ash/70 text-center">{card.note}</p>}
                <p className="mt-1 text-[11px] text-ash/60 text-center">Anzeige · Weiterleitung zum Anbieter</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
