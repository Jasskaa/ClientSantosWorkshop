import { Phone, Globe, MessageCircle } from "lucide-react";
import { WORKSHOP_INFO } from "../data";

export function Footer() {
  return (
    <footer className="relative bg-[#050505] py-12 border-t border-purple-500/20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-display font-bold text-xl tracking-widest uppercase text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
            Santo's <span className="text-purple-500">Olot</span>
          </span>
          <p className="text-sm text-gray-500 mt-2 text-center md:text-left">
            El taller definitivo para alto rendimiento.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${WORKSHOP_INFO.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <Phone className="w-4 h-4" /> {WORKSHOP_INFO.phone}
          </a>
          <a
            href={`https://wa.me/34${WORKSHOP_INFO.phone.replace(/\s/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
          <a
            href={`https://${WORKSHOP_INFO.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors"
          >
            <Globe className="w-4 h-4" /> {WORKSHOP_INFO.website}
          </a>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm uppercase tracking-wider font-display">Términos</a>
          <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm uppercase tracking-wider font-display">Privacidad</a>
        </div>
      </div>
    </footer>
  );
}
