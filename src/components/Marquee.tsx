const MARQUEE_ITEMS = [
  "MECÁNICA",
  "CHAPA Y PINTURA",
  "TUNING",
  "OLOT · GIRONA",
  "SERVICIO PREMIUM",
  "ALTO RENDIMIENTO",
];

function MarqueeTrack() {
  return (
    <div className="flex items-center shrink-0">
      {MARQUEE_ITEMS.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="font-display font-bold uppercase tracking-[0.2em] text-sm md:text-base text-white/90 px-6 whitespace-nowrap">
            {item}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="absolute bottom-0 left-0 w-full z-20 overflow-hidden bg-[#0a0a0c]/80 backdrop-blur-sm border-t border-purple-500/30 py-3">
      <div className="flex animate-marquee">
        <MarqueeTrack />
        <MarqueeTrack />
      </div>
    </div>
  );
}
