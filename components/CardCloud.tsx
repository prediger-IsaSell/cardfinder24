// Hintergrund-„Hafen" aus vielen Karten, Premium-Metall-Look:
// Schwarz, Silber, Grau, Gold (wie echte Metall-/Premium-Karten). Keine echten Logos.

type Mini = { from: string; to: string };
type Placed = Mini & { top: string; left: string; rot: number; w: number };

const CHIP = '#b89a5e'; // gedämpftes Gold (Karten-Chip)

const CARDS_BG: Placed[] = [
  { top: '-2%', left: '-4%', rot: -17, w: 78, from: '#2c2c31', to: '#0d0d0f' }, // Schwarz
  { top: '19%', left: '6%', rot: 12, w: 58, from: '#6b2a37', to: '#3d1822' }, // Bordeaux
  { top: '44%', left: '-6%', rot: -9, w: 66, from: '#cda24e', to: '#8a6e2f' }, // Gold
  { top: '67%', left: '4%', rot: 15, w: 56, from: '#3a3f47', to: '#1b1f25' }, // Graphit
  { top: '87%', left: '-4%', rot: -13, w: 62, from: '#4a505b', to: '#23272e' }, // Gunmetal
  { top: '0%', left: '82%', rot: 16, w: 74, from: '#1f1f23', to: '#0a0a0c' }, // Schwarz
  { top: '22%', left: '92%', rot: -12, w: 56, from: '#cdb27a', to: '#9a8050' }, // Champagner-Gold
  { top: '47%', left: '88%', rot: 10, w: 66, from: '#5a2430', to: '#311420' }, // dunkles Weinrot
  { top: '70%', left: '94%', rot: -15, w: 54, from: '#33373e', to: '#16191e' }, // Anthrazit
  { top: '88%', left: '82%', rot: 12, w: 60, from: '#2a2a2e', to: '#0c0c0f' }, // Schwarz
  { top: '33%', left: '45%', rot: -6, w: 48, from: '#b08d57', to: '#7a5f34' }, // Bronze-Gold
  { top: '61%', left: '52%', rot: 8, w: 46, from: '#33373e', to: '#16191e' }, // Anthrazit
];

function MiniCard({ from, to }: Mini) {
  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-[6px] ring-1 ring-white/5"
      style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <div className="absolute left-[12%] top-[42%] h-[26%] w-[20%] rounded-[2px] opacity-80" style={{ background: CHIP }} />
      <div className="absolute left-[36%] top-[44%] h-[22%] w-[10%] rounded-full border-r-2 border-white/20" />
      <div className="absolute bottom-[14%] right-[10%] flex items-center">
        <span className="block rounded-full bg-white/25" style={{ width: 6, height: 6 }} />
        <span className="-ml-[3px] block rounded-full bg-black/30" style={{ width: 6, height: 6 }} />
      </div>
    </div>
  );
}

export function CardCloud() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-visible blur-[0.8px]">
      {CARDS_BG.map((c, i) => (
        <div
          key={i}
          className="absolute aspect-[1.586/1] opacity-[0.55]"
          style={{ top: c.top, left: c.left, width: c.w, transform: `rotate(${c.rot}deg)` }}
        >
          <MiniCard from={c.from} to={c.to} />
        </div>
      ))}
    </div>
  );
}
