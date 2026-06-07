'use client';

// Mobile-Ersatz für Hover: die Detail-Karte mit dem größten Sichtanteil bekommt
// den Mint-Rahmen + leichten Lift („is-focused"). Wandert automatisch beim Scrollen mit.
// Nur auf Touch-Devices aktiv (Desktop hat echten Hover).

import { useEffect } from 'react';

export function ScrollFocus() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const cards = Array.from(
      document.querySelectorAll<HTMLElement>('article[id^="karte-"]')
    );
    if (cards.length === 0) return;

    // Nur auf Mobile/Tablet aktiv. Desktop (ab 1024 px) nutzt den echten :hover.
    const isMobileLike = () =>
      window.innerWidth < 1024 || window.matchMedia('(hover: none)').matches;
    if (!isMobileLike()) return;

    const ratios = new Map<Element, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => ratios.set(e.target, e.intersectionRatio));

        let topCard: Element | null = null;
        let topRatio = 0;
        for (const card of cards) {
          const r = ratios.get(card) ?? 0;
          if (r > topRatio) {
            topRatio = r;
            topCard = card;
          }
        }

        cards.forEach((card) => {
          if (card === topCard && topRatio >= 0.5) {
            card.classList.add('is-focused');
          } else {
            card.classList.remove('is-focused');
          }
        });
      },
      { threshold: [0, 0.25, 0.5, 0.75, 0.9, 1] }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return null;
}
