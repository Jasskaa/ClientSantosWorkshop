import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { WORKSHOP_INFO } from "../data";

type Tab = "legal" | "privacidad" | "cookies";

const CONTENT: Record<Tab, { title: string; body: string }> = {
  legal: {
    title: "Aviso Legal",
    body: `En cumplimiento de la Ley 34/2002 de Servicios de la Sociedad de la Información (LSSI-CE), se informa que este sitio web es titularidad de ${WORKSHOP_INFO.name}, con domicilio en ${WORKSHOP_INFO.address}.

El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación de las condiciones aquí recogidas. ${WORKSHOP_INFO.name} se reserva el derecho a modificar los contenidos sin previo aviso.

Este texto es una plantilla orientativa. Recomendamos revisarlo con un asesor legal para adaptarlo con los datos fiscales completos (CIF, inscripción registral, etc.) antes de publicarlo.`,
  },
  privacidad: {
    title: "Política de Privacidad",
    body: `De acuerdo con el Reglamento (UE) 2016/679 (RGPD) y la LOPDGDD, los datos personales facilitados a través de los formularios de esta web (nombre, teléfono, y demás datos de contacto) serán tratados por ${WORKSHOP_INFO.name} con la finalidad de gestionar la solicitud de cita o consulta realizada.

No se cederán datos a terceros salvo obligación legal. Puedes ejercer tus derechos de acceso, rectificación, supresión y oposición contactando por WhatsApp o teléfono (${WORKSHOP_INFO.phone}).

Este texto es una plantilla orientativa. Recomendamos completarlo con el responsable del tratamiento, base legal detallada y plazos de conservación reales antes de publicarlo.`,
  },
  cookies: {
    title: "Política de Cookies",
    body: `Este sitio web puede utilizar cookies técnicas necesarias para su funcionamiento y, en su caso, cookies analíticas para entender cómo se usa la web y mejorar la experiencia.

Puedes aceptar o rechazar las cookies no esenciales desde el aviso mostrado al entrar en la web. Rechazarlas no impide navegar por el sitio, aunque puede limitar ciertas funcionalidades.

Este texto es una plantilla orientativa. Si se añade Google Analytics u otra herramienta de medición, debe detallarse aquí junto con el mecanismo real de consentimiento previo.`,
  },
};

interface LegalModalProps {
  open: Tab | null;
  onClose: () => void;
}

export function LegalModal({ open, onClose }: LegalModalProps) {
  const [tab, setTab] = useState<Tab>(open ?? "legal");

  const activeTab = open ?? tab;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-10"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-2xl bg-[#111114] border border-white/10 rounded-2xl shadow-2xl max-h-[85vh] overflow-y-auto"
          >
            <div className="h-1 w-full bg-gradient-to-r from-purple-600 via-cyan-400 to-purple-600" />
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex gap-4">
                  {(Object.keys(CONTENT) as Tab[]).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTab(t)}
                      className={`text-sm font-display uppercase tracking-wider pb-1 border-b-2 transition-colors ${
                        activeTab === t
                          ? "text-cyan-400 border-cyan-400"
                          : "text-gray-500 border-transparent hover:text-gray-300"
                      }`}
                    >
                      {CONTENT[t].title}
                    </button>
                  ))}
                </div>
                <button onClick={onClose} className="text-gray-400 hover:text-white p-1" aria-label="Cerrar">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                {CONTENT[activeTab].body}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
