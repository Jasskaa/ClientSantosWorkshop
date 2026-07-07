import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { BookingModal } from "./BookingModal";
import logo from "../assets/images/logo_santos.png";

const NAV_ITEMS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Vista General", href: "#vista-general" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#galeria" },
  { label: "Reseñas", href: "#reseñas" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 bg-[#0f0f11]/80 backdrop-blur-md border-b border-purple-500/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-md group-hover:bg-cyan-400/30 transition-colors duration-300" />
                <img src={logo} alt="Santo's Olot Autoworks" className="relative w-11 h-11 object-contain drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
              </div>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="font-display uppercase tracking-wider text-sm font-medium text-gray-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] transition-all duration-300"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <button
                onClick={() => setBookingOpen(true)}
                className="bg-purple-600 hover:bg-purple-500 text-white font-display uppercase tracking-wider px-6 py-2.5 text-sm font-bold transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] skew-x-[-10deg]"
              >
                <div className="skew-x-[10deg]">Reservar Cita</div>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden text-white p-2"
              aria-label="Abrir menú"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav panel */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-purple-500/20 bg-[#0f0f11]/95 backdrop-blur-md"
            >
              <div className="flex flex-col px-6 py-6 gap-5">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-display uppercase tracking-wider text-base font-medium text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setBookingOpen(true);
                  }}
                  className="mt-2 bg-purple-600 hover:bg-purple-500 text-white font-display uppercase tracking-wider px-6 py-3 text-sm font-bold rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                >
                  Reservar Cita
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
