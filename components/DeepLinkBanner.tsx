'use client';

import { useEffect, useState } from 'react';
import { detectInAppBrowser, detectPlatform, buildEscapeUrl } from '@/lib/inAppBrowser';

export function DeepLinkBanner() {
  const [show, setShow] = useState(false);
  const [escapeUrl, setEscapeUrl] = useState<string | null>(null);
  const [hint, setHint] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    const inApp = detectInAppBrowser(ua);
    if (!inApp) return;
    setShow(true);
    setEscapeUrl(buildEscapeUrl(window.location.href, detectPlatform(ua)));
  }, []);

  if (!show) return null;

  const handleOpen = () => {
    if (escapeUrl) {
      window.location.href = escapeUrl;
      // Fallback-Hinweis, falls der Sprung nicht klappt
      setTimeout(() => setHint(true), 1200);
    } else {
      setHint(true);
    }
  };

  return (
    <div className="relative z-50 bg-mint text-night">
      <div className="container-narrow flex items-center justify-between gap-3 py-2.5">
        <p className="text-sm font-semibold leading-tight flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="flex-shrink-0">
            <path d="M6 9V6a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            <rect x="4" y="9" width="12" height="9" rx="1.6" stroke="currentColor" strokeWidth="1.7" />
          </svg>
          Im Browser öffnen, sicher beantragen
        </p>
        <button
          onClick={handleOpen}
          className="flex-shrink-0 rounded-full bg-night px-4 py-2 text-sm font-bold text-mint hover:bg-night-700 transition"
        >
          Öffnen
        </button>
      </div>
      {hint && (
        <div className="container-narrow pb-2.5 -mt-1">
          <p className="text-xs text-night/80">
            Klappt es nicht? Tippe oben rechts auf <strong>•••</strong> → <strong>„Im Browser öffnen"</strong>.
          </p>
        </div>
      )}
    </div>
  );
}
