import Image from 'next/image';
import type { Card } from '@/lib/cards';
import { PaymentBadges } from './PaymentBadges';

export function CardItem({ card, source }: { card: Card; source: string }) {
  const redirectUrl = `/api/go/${card.id}?from=${encodeURIComponent(source)}`;

  return (
    <article
      id={`karte-${card.id}`}
      className="relative flex flex-col rounded-3xl glass p-7 sm:p-8 transition-all duration-300 scroll-mt-28"
    >
      <div className="flex flex-col items-center py-3">
        <Image
          src={card.imagePath}
          alt={card.name}
          width={360}
          height={227}
          className="w-full max-w-[260px] h-auto rounded-2xl shadow-float ring-1 ring-white/10"
        />
        <PaymentBadges />
      </div>

      <div className="mt-4 flex flex-col flex-1">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ash">{card.cardType}</p>
        <h3 className="mt-1.5 text-xl font-bold text-cloud">{card.name}</h3>
        <p className="mt-2 text-[15px] text-ash leading-relaxed">{card.tagline}</p>

        <ul className="mt-5 space-y-3">
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

        {/* Status-Block: kostenlos + (falls vorhanden) goldenes Bonus-Badge nah am Button */}
        <div className="mt-7 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-mint/25 bg-mint/10 px-3 py-1 text-sm font-semibold text-mint">
            ✓ {card.annualFee}
          </span>
          {card.bonus && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-sm font-bold text-night shadow-float">
              ★ {card.bonus}
            </span>
          )}
        </div>

        {/* CTA-Block immer am unteren Ende (mt-auto), identische Form auf allen Karten */}
        <div className="mt-auto pt-6">
          <a href={redirectUrl} rel="sponsored nofollow noopener" className="btn-primary w-full">
            {card.ctaText}
          </a>

          {card.note && <p className="mt-3 text-[11px] leading-relaxed text-ash/70 text-center">{card.note}</p>}
          <p className="mt-1 text-[11px] text-ash/60 text-center">Anzeige · Weiterleitung zum Anbieter</p>
        </div>
      </div>
    </article>
  );
}
