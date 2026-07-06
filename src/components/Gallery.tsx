import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImagePlus, ArrowLeftRight } from "lucide-react";

const CATEGORIES = ["Todos", "Mecánica", "Chapa y Pintura", "Tuning"] as const;
type Category = (typeof CATEGORIES)[number];

interface GalleryItem {
  id: number;
  category: Exclude<Category, "Todos">;
  title: string;
}

// Placeholders — sustituir por fotos reales de trabajos (antes/después) del taller.
const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, category: "Chapa y Pintura", title: "Restauración de carrocería" },
  { id: 2, category: "Mecánica", title: "Puesta a punto de motor" },
  { id: 3, category: "Tuning", title: "Preparación de suspensión" },
  { id: 4, category: "Chapa y Pintura", title: "Reparación de golpe lateral" },
  { id: 5, category: "Mecánica", title: "Cambio de frenos y discos" },
  { id: 6, category: "Tuning", title: "Kit estético y llantas" },
];

function PlaceholderCard({ item }: { item: GalleryItem }) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-2xl overflow-hidden border border-white/5 bg-[#151519] aspect-[4/3]"
    >
      {/* Placeholder visual — reemplazar con <img> real cuando haya fotos */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-3 transition-all duration-500 ${
          showAfter
            ? "bg-gradient-to-br from-cyan-950/60 to-[#0f0f11]"
            : "bg-gradient-to-br from-purple-950/60 to-[#0f0f11]"
        }`}
      >
        <ImagePlus className="w-8 h-8 text-white/20" />
        <span className="text-white/30 text-xs uppercase tracking-widest font-display">
          {showAfter ? "Después — Sube tu foto" : "Antes — Sube tu foto"}
        </span>
      </div>

      {/* Overlay info */}
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <span className="text-[10px] uppercase tracking-wider text-cyan-400 font-display font-semibold">
          {item.category}
        </span>
        <h3 className="text-white font-medium text-sm mt-0.5">{item.title}</h3>
      </div>

      {/* Toggle antes/después */}
      <button
        onClick={() => setShowAfter((v) => !v)}
        className="absolute top-3 right-3 flex items-center gap-1.5 bg-[#0f0f11]/80 backdrop-blur-sm border border-white/10 text-white text-[11px] font-display uppercase tracking-wider px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:border-cyan-400/50"
      >
        <ArrowLeftRight className="w-3 h-3" />
        {showAfter ? "Ver Antes" : "Ver Después"}
      </button>
    </motion.div>
  );
}

export function Gallery() {
  const [active, setActive] = useState<Category>("Todos");

  const filtered =
    active === "Todos"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === active);

  return (
    <section id="galeria" className="py-24 relative bg-[#0a0a0c]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide text-white mb-2">
            Nuestros Trabajos
          </h2>
          <div className="w-16 h-1 bg-purple-500 mb-6 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
          <p className="text-gray-400 text-lg max-w-2xl">
            Antes y después de algunos de nuestros proyectos. Pasa el ratón sobre
            cada tarjeta para comparar.
          </p>
        </div>

        {/* Filtros de categoría */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-display uppercase tracking-wider text-xs px-5 py-2.5 rounded-full border transition-all duration-300 ${
                active === cat
                  ? "bg-purple-600 border-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                  : "bg-white/5 border-white/10 text-gray-400 hover:border-cyan-400/40 hover:text-cyan-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <PlaceholderCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
