import { motion } from "motion/react";
import { Wrench } from "lucide-react";

export function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-[#0f0f11]/80 backdrop-blur-md border-b border-purple-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center border border-purple-500/50 group-hover:bg-purple-500/40 transition-colors duration-300 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              <Wrench className="w-5 h-5 text-purple-400 group-hover:text-cyan-400 transition-colors duration-300" />
            </div>
            <span className="font-display font-bold text-xl tracking-widest uppercase text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
              Santo's <span className="text-cyan-400">Olot</span>
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Inicio', 'Vista General', 'Reseñas', 'Contacto'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="font-display uppercase tracking-wider text-sm font-medium text-gray-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
             <button className="bg-purple-600 hover:bg-purple-500 text-white font-display uppercase tracking-wider px-6 py-2.5 text-sm font-bold transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] skew-x-[-10deg]">
                <div className="skew-x-[10deg]">Reservar Cita</div>
             </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
