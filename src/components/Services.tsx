import { motion } from "motion/react";
import { Wrench, PaintBucket, Gauge, Check } from "lucide-react";

// TODO: ajustar servicios y precios reales del taller
const SERVICES = [
  {
    icon: Wrench,
    name: "Mecánica",
    price: "Desde 45€",
    color: "purple" as const,
    items: ["Revisión y diagnóstico", "Cambio de aceite y filtros", "Frenos y suspensión", "Puesta a punto"],
  },
  {
    icon: PaintBucket,
    name: "Chapa y Pintura",
    price: "Desde 120€",
    color: "cyan" as const,
    items: ["Reparación de golpes", "Pintura al horno", "Pulido y detailing", "Presupuesto sin compromiso"],
  },
  {
    icon: Gauge,
    name: "Tuning",
    price: "Desde 90€",
    color: "emerald" as const,
    items: ["Preparación de suspensión", "Kits estéticos", "Llantas y neumáticos", "Puesta a punto de motor"],
  },
];

const COLOR_MAP = {
  purple: {
    border: "hover:border-purple-500/40",
    icon: "bg-purple-500/10 text-purple-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]",
    price: "text-purple-400",
  },
  cyan: {
    border: "hover:border-cyan-400/40",
    icon: "bg-cyan-500/10 text-cyan-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]",
    price: "text-cyan-400",
  },
  emerald: {
    border: "hover:border-emerald-400/40",
    icon: "bg-emerald-500/10 text-emerald-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(52,211,153,0.25)]",
    price: "text-emerald-400",
  },
};

export function Services() {
  return (
    <section id="servicios" className="py-24 relative bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide text-white mb-2">
            Nuestros Servicios
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mb-6 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
          <p className="text-gray-400 text-lg max-w-2xl">
            Precios orientativos — presupuesto exacto sin compromiso por WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const colors = COLOR_MAP[service.color];
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className={`group bg-[#151519] border border-white/5 rounded-2xl p-8 transition-all duration-300 ${colors.border} ${colors.glow}`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${colors.icon}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-xl uppercase tracking-wide text-white mb-1">
                  {service.name}
                </h3>
                <p className={`font-display font-bold text-2xl mb-6 ${colors.price}`}>{service.price}</p>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                      <Check className="w-4 h-4 text-gray-600 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-xs text-gray-600 mt-10">
          * Precios de ejemplo — sustituir por las tarifas reales en <code>src/components/Services.tsx</code>
        </p>
      </div>
    </section>
  );
}
