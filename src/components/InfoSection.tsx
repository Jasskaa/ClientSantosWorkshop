import { motion } from "motion/react";
import { Clock } from "lucide-react";
import { WORKSHOP_INFO } from "../data";
import toolsImage from "../assets/images/mechanic_tools_neon_1783325773368.jpg";

export function InfoSection() {
  return (
    <section id="vista-general" className="py-24 relative bg-[#0f0f11] overflow-hidden">
      {/* Ambient neon glows */}
      <div className="absolute -left-32 top-1/3 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -right-32 bottom-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Image */}
          <motion.div
            className="relative"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl blur opacity-30" />
            <img
              src={toolsImage}
              alt="Santo's Olot Autoworks Interior"
              referrerPolicy="no-referrer"
              className="relative rounded-2xl border border-white/10 shadow-2xl w-full object-cover aspect-[4/3] grayscale-[20%] contrast-125"
            />
          </motion.div>

          {/* Right Column: Text + Hours */}
          <motion.div
            className="flex flex-col space-y-8"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide text-white mb-2">
                Información del Taller
              </h2>
              <div className="w-16 h-1 bg-cyan-400 mb-6 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
              <p className="text-gray-400 text-lg">
                Servicio premium de tuning, mantenimiento y preparación de vehículos de alto rendimiento. Confianza, rapidez y profesionalidad en cada ajuste.
              </p>
            </div>

            {/* Hours */}
            <div className="bg-[#1a1a1f]/60 p-6 rounded-xl border border-cyan-400/20 flex items-center gap-4 shadow-[0_0_20px_rgba(34,211,238,0.08)]">
              <div className="bg-purple-500/10 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-purple-400" />
              </div>
              <span className="font-medium text-white text-base">{WORKSHOP_INFO.status}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
