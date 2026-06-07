import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'cardfinder24 · Deine Karte. Null Gebühren.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background:
            'radial-gradient(60% 50% at 50% 0%, rgba(52,229,194,0.18), transparent 70%), linear-gradient(180deg, #0B1120, #070B16)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 80,
          color: '#F2F5FA',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 18,
            marginBottom: 48,
          }}
        >
          <div
            style={{
              width: 52,
              height: 32,
              borderRadius: 6,
              background: 'linear-gradient(135deg, #F0D6A0, #C99A4E)',
            }}
          />
          <div style={{ fontSize: 36, fontWeight: 700 }}>
            cardfinder
            <span style={{ color: '#34E5C2' }}>24</span>
            <span style={{ color: '#94A3B8' }}>.de</span>
          </div>
        </div>

        <div
          style={{
            fontSize: 116,
            fontWeight: 900,
            lineHeight: 1,
            textAlign: 'center',
            letterSpacing: '-0.02em',
          }}
        >
          Deine Karte.
        </div>
        <div
          style={{
            fontSize: 116,
            fontWeight: 900,
            lineHeight: 1,
            textAlign: 'center',
            letterSpacing: '-0.02em',
            color: '#34E5C2',
            marginTop: 8,
          }}
        >
          Null Gebühren.
        </div>

        <div
          style={{
            fontSize: 32,
            color: '#94A3B8',
            marginTop: 48,
          }}
        >
          Drei kostenlose Karten · vorausgewählt
        </div>
      </div>
    ),
    { ...size }
  );
}
