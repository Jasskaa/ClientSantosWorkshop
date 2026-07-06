import { motion } from "motion/react";
import { Phone, Globe, MessageCircle, Clock, Heart, Navigation as NavIcon } from "lucide-react";
import { WORKSHOP_INFO } from "../data";
import toolsImage from "../assets/images/mechanic_tools_neon_1783325773368.jpg";

export function InfoSection() {
  return (
    <section id="informacion" className="py-24 relative bg-[#0f0f11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Image & Visuals */}
          <motion.div 
            className="relative"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl blur opacity-30"></div>
            <img 
              src={toolsImage} 
              alt="Santo's Olot Autoworks Interior" 
              referrerPolicy="no-referrer"
              className="relative rounded-2xl border border-white/10 shadow-2xl w-full object-cover aspect-[4/3] grayscale-[20%] contrast-125"
            />
            
            {/* Tag Overlay */}
            <div className="absolute -bottom-6 -right-6 bg-[#1a1a1f] p-4 rounded-xl border border-white/5 shadow-2xl flex items-center gap-3">
               <Heart className="w-5 h-5 text-pink-500 fill-pink-500/20" />
               <span className="text-sm font-medium text-gray-200">{WORKSHOP_INFO.tags[0]}</span>
            </div>
          </motion.div>

          {/* Right Column: Info Details */}
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
              <div className="w-16 h-1 bg-cyan-400 mb-6 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
              <p className="text-gray-400 text-lg">
                Servicio premium de tuning, mantenimiento y preparación de vehículos de alto rendimiento. Confianza, rapidez y profesionalidad en cada ajuste.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Hours */}
              <div className="bg-[#1a1a1f]/50 p-5 rounded-xl border border-white/5 flex flex-col gap-2 hover:bg-[#1a1a1f] transition-colors">
                <Clock className="w-6 h-6 text-purple-400" />
                <span className="font-medium text-white text-sm">{WORKSHOP_INFO.status}</span>
              </div>
              
              {/* Phone */}
              <div className="bg-[#1a1a1f]/50 p-5 rounded-xl border border-white/5 flex flex-col gap-2 hover:bg-[#1a1a1f] transition-colors group">
                <Phone className="w-6 h-6 text-cyan-400 group-hover:animate-pulse" />
                <a href={`tel:${WORKSHOP_INFO.phone.replace(/\s/g,'')}`} className="font-display font-bold text-xl text-white tracking-widest">{WORKSHOP_INFO.phone}</a>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Llamar Ahora</span>
              </div>

              {/* WhatsApp */}
              <div className="bg-[#1a1a1f]/50 p-5 rounded-xl border border-white/5 flex flex-col gap-2 hover:bg-[#1a1a1f] transition-colors group">
                <MessageCircle className="w-6 h-6 text-green-400 group-hover:animate-bounce" />
                <a href={`https://${WORKSHOP_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="font-medium text-white">{WORKSHOP_INFO.whatsapp}</a>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Enviar Mensaje</span>
              </div>

              {/* Website */}
              <div className="bg-[#1a1a1f]/50 p-5 rounded-xl border border-white/5 flex flex-col gap-2 hover:bg-[#1a1a1f] transition-colors group">
                <Globe className="w-6 h-6 text-purple-400 group-hover:rotate-12 transition-transform" />
                <a href={`https://${WORKSHOP_INFO.website}`} target="_blank" rel="noopener noreferrer" className="font-medium text-white">{WORKSHOP_INFO.website}</a>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Visitar Web</span>
              </div>
            </div>

            {/* Address CTA */}
            <button className="flex items-center justify-center gap-3 w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-display uppercase tracking-wider py-4 rounded-xl transition-all duration-300">
              <NavIcon className="w-5 h-5 text-cyan-400" />
              <span>Cómo Llegar: {WORKSHOP_INFO.plusCode}</span>
            </button>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
