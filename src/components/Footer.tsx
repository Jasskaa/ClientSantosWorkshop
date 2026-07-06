export function Footer() {
  return (
    <footer className="bg-[#050505] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-display font-bold text-xl tracking-widest uppercase text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
            Santo's <span className="text-purple-500">Olot</span>
          </span>
          <p className="text-sm text-gray-500 mt-2 text-center md:text-left">
            El taller definitivo para alto rendimiento.
          </p>
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm uppercase tracking-wider font-display">Términos</a>
          <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm uppercase tracking-wider font-display">Privacidad</a>
        </div>
      </div>
    </footer>
  );
}
