import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, User, Phone, Car, Wrench, Send } from "lucide-react";
import { WORKSHOP_INFO } from "../data";

const SERVICES = ["Mecánica", "Chapa y Pintura", "Tuning", "Revisión / Diagnóstico", "Otro"];

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

export function BookingModal({ open, onClose }: BookingModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [car, setCar] = useState("");
  const [service, setService] = useState(SERVICES[0]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = [
      `Hola, quiero reservar una cita en Santo's Olot Autoworks.`,
      `Nombre: ${name}`,
      `Teléfono: ${phone}`,
      `Fecha deseada: ${date}`,
      `Vehículo: ${car}`,
      `Servicio: ${service}`,
      message ? `Detalles: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const waLink = `https://wa.me/34${WORKSHOP_INFO.phone.replace(/\s/g, "")}?text=${encodeURIComponent(text)}`;
    window.open(waLink, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-10"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="relative w-full max-w-lg bg-[#111114] border border-purple-500/30 rounded-2xl shadow-[0_0_60px_rgba(168,85,247,0.25)] max-h-[90vh] overflow-y-auto"
          >
            {/* Neon top border */}
            <div className="h-1 w-full bg-gradient-to-r from-purple-600 via-cyan-400 to-purple-600" />

            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                    Reservar Cita
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Rellena tus datos y te contactaremos por WhatsApp.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                  aria-label="Cerrar"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre completo"
                    className="w-full bg-[#1a1a1f] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400/60 focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Teléfono de contacto"
                    className="w-full bg-[#1a1a1f] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400/60 focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400 pointer-events-none" />
                    <input
                      required
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#1a1a1f] border border-white/10 rounded-xl py-3 pl-11 pr-3 text-white focus:outline-none focus:border-cyan-400/60 focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all [color-scheme:dark]"
                    />
                  </div>
                  <div className="relative">
                    <Car className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
                    <input
                      required
                      value={car}
                      onChange={(e) => setCar(e.target.value)}
                      placeholder="Vehículo"
                      className="w-full bg-[#1a1a1f] border border-white/10 rounded-xl py-3 pl-11 pr-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400/60 focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Wrench className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400 pointer-events-none" />
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full appearance-none bg-[#1a1a1f] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:border-cyan-400/60 focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all"
                  >
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Cuéntanos brevemente qué necesitas (opcional)"
                  rows={3}
                  className="w-full bg-[#1a1a1f] border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400/60 focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all resize-none"
                />

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-display uppercase tracking-wider py-3.5 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]"
                >
                  <Send className="w-4 h-4" />
                  Enviar por WhatsApp
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
