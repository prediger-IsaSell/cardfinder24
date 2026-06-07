// Dezente Apple Pay + Google Pay Marker unter dem CTA.
// Signalisiert: Karte ist sofort in der Apple/Google Wallet einsetzbar.

export function PaymentBadges() {
  return (
    <div
      className="mt-3 flex items-center justify-center gap-2.5"
      aria-label="Apple Pay und Google Pay unterstützt"
    >
      <span
        className="inline-flex items-center gap-1.5 rounded-md border border-white/12 bg-white/[0.04] px-2.5 py-1 text-cloud/85"
        aria-label="Apple Pay"
      >
        <svg width="11" height="13" viewBox="0 0 14 17" fill="currentColor" aria-hidden="true">
          <path d="M11.06 9.04c-.02-2.05 1.68-3.04 1.76-3.09-.96-1.4-2.45-1.59-2.99-1.61-1.27-.13-2.48.75-3.13.75-.65 0-1.65-.73-2.71-.71-1.39.02-2.67.81-3.38 2.05C-.78 8.9.27 12.51 1.65 14.5c.68.98 1.49 2.07 2.55 2.03 1.03-.04 1.41-.66 2.65-.66 1.24 0 1.58.66 2.66.64 1.1-.02 1.79-.99 2.46-1.97.78-1.13 1.09-2.23 1.11-2.29-.02-.01-2.13-.82-2.16-3.21M9.07 3.12c.56-.69.95-1.65.84-2.6-.81.03-1.8.54-2.39 1.22-.52.6-.98 1.59-.86 2.52.91.07 1.84-.46 2.41-1.14"/>
        </svg>
        <span className="text-[11px] font-semibold leading-none">Pay</span>
      </span>

      <span
        className="inline-flex items-center gap-1.5 rounded-md border border-white/12 bg-white/[0.04] px-2.5 py-1 text-cloud/85"
        aria-label="Google Pay"
      >
        <svg width="13" height="13" viewBox="0 0 18 18" aria-hidden="true">
          <path d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.61z" fill="#4285F4"/>
          <path d="M9 18c2.43 0 4.47-.81 5.96-2.19l-2.92-2.26c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.95v2.33A9 9 0 0 0 9 18z" fill="#34A853"/>
          <path d="M3.97 10.71A5.41 5.41 0 0 1 3.68 9c0-.59.1-1.17.29-1.71V4.96H.95A9 9 0 0 0 0 9c0 1.45.35 2.83.95 4.04l3.02-2.33z" fill="#FBBC05"/>
          <path d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.59C13.46.89 11.43 0 9 0A9 9 0 0 0 .95 4.96L3.97 7.29C4.68 5.17 6.66 3.58 9 3.58z" fill="#EA4335"/>
        </svg>
        <span className="text-[11px] font-semibold leading-none">Pay</span>
      </span>
    </div>
  );
}
