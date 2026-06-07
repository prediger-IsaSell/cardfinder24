export type CardId = 'amex-payback' | 'n26' | 'easybank-visa';

export type Card = {
  id: CardId;
  name: string;
  shortName: string;
  issuer: string;
  cardType: string;
  imagePath: string;
  tagline: string; // Schwartz-Hook
  benefits: string[]; // max. 3, Outcome-fokussiert (Hormozi)
  annualFee: string; // einheitliche Aussage
  bonus?: string; // Neukunden-Bonus = stärkstes Argument
  note?: string; // ehrliches Kleingedrucktes
  ctaText: string;
  affiliateUrl: string; // Platzhalter bis Financeads-Freischaltung
};

export const CARDS: Card[] = [
  {
    id: 'amex-payback',
    name: 'PAYBACK American Express',
    shortName: 'Amex PAYBACK',
    issuer: 'American Express',
    cardType: 'Kreditkarte',
    imagePath: '/cards/amex-payback.svg',
    tagline: 'Lass dich für Einkäufe belohnen, die du sowieso machst.',
    benefits: [
      'Dauerhaft 0 €, auch jede Zusatzkarte',
      'PAYBACK Punkte bei jedem Einkauf, doppelt bei Partnern',
      'Gesammelte Punkte verfallen nicht, sie gehören dir.',
    ],
    annualFee: 'Dauerhaft kostenlos',
    note: 'Standard-Bonitätsprüfung · 2 % Fremdwährungsentgelt',
    ctaText: 'Jetzt sichern',
    affiliateUrl: 'https://example.com/placeholder-amex',
  },
  {
    id: 'easybank-visa',
    name: 'easybank Visa',
    shortName: 'easybank Visa',
    issuer: 'easybank (ehemals Barclays)',
    cardType: 'Kreditkarte',
    imagePath: '/cards/easybank-visa.svg',
    tagline: 'Eine richtige Kreditkarte ohne Gebühren.',
    benefits: [
      'Weltweit gebührenfrei bezahlen & Geld abheben',
      'Volle Kostenkontrolle direkt in der App',
      'In wenigen Minuten online beantragt',
    ],
    annualFee: 'Dauerhaft kostenlos',
    bonus: '60 € Startguthaben',
    note: 'Bonus bei 100 € Umsatz in den ersten 4 Wochen · ehemals „Barclays Visa"',
    ctaText: 'Jetzt sichern',
    affiliateUrl: 'https://example.com/placeholder-easybank',
  },
  {
    id: 'n26',
    name: 'N26 Standard',
    shortName: 'N26',
    issuer: 'N26 Bank',
    cardType: 'Girokonto + Mastercard Debit',
    imagePath: '/cards/n26.svg',
    tagline: 'Deine Bank passt in die Hosentasche. Ganz ohne Papierkram.',
    benefits: [
      'Kostenloses Girokonto, in Minuten per App eröffnet',
      'Virtuelle Karte sofort aktiv, direkt in Apple/Google Wallet',
      'Weltweit gebührenfrei in Fremdwährung bezahlen',
    ],
    annualFee: 'Dauerhaft kostenlos',
    note: 'Physische Karte einmalig 10 € · Debit-Karte, keine Kreditkarte',
    ctaText: 'Jetzt sichern',
    affiliateUrl: 'https://example.com/placeholder-n26',
  },
];

export function getCardById(id: string): Card | undefined {
  return CARDS.find((card) => card.id === id);
}
