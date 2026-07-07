import { motion } from "motion/react";
import { Instagram, Music2, ArrowUpRight } from "lucide-react";
import { SOCIALS } from "../data";

export function SocialSection() {
  return (
    <section id="redes" className="py-24 relative bg-[#0f0f11] overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide text-white mb-2">
            Síguenos en Redes
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mb-6 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
          <p className="text-gray-400 text-lg max-w-xl">
            Contenido diario de nuestros trabajos, antes/después y vida en el taller.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Instagram */}
          <motion.a
            href={`https://instagram.com/${SOCIALS.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-[#1a1030] to-[#151519] p-8 flex items-center gap-5"
          >
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-30 blur transition-opacity duration-300 -z-10" />
            <div className="w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(217,70,239,0.4)]">
              <Instagram className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-bold text-lg text-white uppercase tracking-wide">Instagram</h3>
              <p className="text-gray-400 text-sm">@{SOCIALS.instagram}</p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
          </motion.a>

          {/* TikTok */}
          <motion.a
            href={`https://tiktok.com/@${SOCIALS.tiktok}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-[#0a1a1f] to-[#151519] p-8 flex items-center gap-5"
          >
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-30 blur transition-opacity duration-300 -z-10" />
            <div className="w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br from-cyan-400 to-[#111] flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.4)]">
              <Music2 className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-bold text-lg text-white uppercase tracking-wide">TikTok</h3>
              <p className="text-gray-400 text-sm">@{SOCIALS.tiktok}</p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
          </motion.a>
        </div>

        <p className="text-center text-xs text-gray-600 mt-8">
          * Enlaces de ejemplo — sustituir por los @handles reales en <code>src/data.ts</code>
        </p>
      </div>
    </section>
  );
}
