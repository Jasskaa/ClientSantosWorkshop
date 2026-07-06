import { motion } from "motion/react";
import { Star, MapPin } from "lucide-react";
import { WORKSHOP_INFO } from "../data";
import { Marquee } from "./Marquee";
import heroImage from "../assets/images/gta_garage_hero_1783325759182.jpg";

export function Hero() {
  return (
    <div id="inicio" className="relative pt-20 pb-32 flex content-center items-center justify-center min-h-[90vh]">
      <div 
        className="absolute top-0 w-full h-full bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f11]/80 via-[#0f0f11]/60 to-[#0f0f11] pointer-events-none" />
      </div>

      <div className="container relative mx-auto px-4 pt-16 z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <span className="font-display inline-block py-1 px-3 uppercase rounded-full bg-cyan-900/40 border border-cyan-400/50 text-cyan-300 text-sm tracking-widest font-semibold mb-6 shadow-[0_0_10px_rgba(34,211,238,0.3)]">
            {WORKSHOP_INFO.subtitle}
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tight text-white mb-6 drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          Santo's Olot <span className="text-purple-500 drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]">Autoworks</span>
        </motion.h1>

        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-6 mt-6 bg-[#1a1a1f]/80 backdrop-blur-md px-8 py-4 rounded-xl border border-white/5 shadow-2xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <div className="bg-yellow-500/20 p-2 rounded-lg">
              <Star className="text-yellow-500 w-6 h-6 fill-yellow-500" />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-display font-bold text-2xl text-white leading-none">{WORKSHOP_INFO.rating}</span>
              <span className="text-sm text-gray-400">{WORKSHOP_INFO.reviewCount} reseñas</span>
            </div>
          </div>
          
          <div className="hidden sm:block w-px h-12 bg-white/10" />
          
          <div className="flex items-center gap-3">
            <div className="bg-cyan-500/20 p-2 rounded-lg">
              <MapPin className="text-cyan-400 w-6 h-6" />
            </div>
            <div className="flex flex-col items-start text-left max-w-xs">
              <span className="font-medium text-gray-200 text-sm truncate w-full">{WORKSHOP_INFO.address.split(',')[0]}</span>
              <span className="text-xs text-gray-400">{WORKSHOP_INFO.address.split(',').slice(1).join(',')}</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative neon bottom line */}
      <div className="absolute bottom-[52px] md:bottom-[46px] left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent shadow-[0_0_15px_rgba(168,85,247,0.8)]" />

      <Marquee />
    </div>
  );
}
