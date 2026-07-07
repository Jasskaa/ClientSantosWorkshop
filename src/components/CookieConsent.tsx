import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "santos-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(STORAGE_KEY);
      if (!consent) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const respond = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* noop */
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          className="fixed bottom-0 left-0 w-full z-[90] px-4 pb-4 sm:pb-6"
        >
          <div className="max-w-3xl mx-auto bg-[#111114]/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4">
            <Cookie className="w-6 h-6 text-cyan-400 shrink-0" />
            <p className="text-sm text-gray-300 flex-1 text-center sm:text-left">
              Usamos cookies técnicas y, si las aceptas, analíticas para mejorar la web.
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={() => respond("rejected")}
                className="text-sm text-gray-400 hover:text-white px-4 py-2 rounded-lg border border-white/10 transition-colors"
              >
                Rechazar
              </button>
              <button
                onClick={() => respond("accepted")}
                className="text-sm bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg font-medium shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-colors"
              >
                Aceptar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
