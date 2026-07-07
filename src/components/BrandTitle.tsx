interface ArchTextProps {
  text: string;
  archDeg?: number;
  className?: string;
}

/**
 * Renderiza texto con un ligero efecto de arco letra a letra,
 * inspirado en la composición del logo real (SANTO'S arqueado).
 */
function ArchText({ text, archDeg = 34, className = "" }: ArchTextProps) {
  const letters = text.split("");
  const mid = (letters.length - 1) / 2;

  return (
    <span className={`inline-flex ${className}`}>
      {letters.map((char, i) => {
        const offset = i - mid;
        const rotate = (offset / mid) * (archDeg / 2);
        const lift = Math.cos((offset / mid) * (Math.PI / 4)) * 14 - 14;
        return (
          <span
            key={i}
            style={{
              transform: `rotate(${rotate}deg) translateY(${-lift}px)`,
              display: "inline-block",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </span>
  );
}

export function BrandTitle() {
  return (
    <div className="flex flex-col items-center select-none">
      <h1 className="font-display font-bold uppercase text-5xl md:text-7xl lg:text-8xl tracking-tight text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]">
        <ArchText text="Santo's" />
      </h1>
      <span
        className="font-script text-4xl md:text-6xl -mt-2 md:-mt-4 text-emerald-400 drop-shadow-[0_0_18px_rgba(52,211,153,0.7)]"
        style={{ fontFamily: "var(--font-script)" }}
      >
        Olot
      </span>
      <div className="w-40 md:w-56 h-[3px] bg-emerald-400 -mt-1 mb-2 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
      <h2 className="font-display font-bold uppercase text-2xl md:text-4xl tracking-[0.15em] text-purple-500 drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]">
        Autoworks
      </h2>
    </div>
  );
}
