import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { REVIEWS, WORKSHOP_INFO } from "../data";

export function Reviews() {
  return (
    <section id="reseñas" className="py-24 relative bg-[#0a0a0c] overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      {/* Ambient glows */}
      <div className="absolute left-1/4 top-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4 bg-[#151519]/80 border border-white/10 px-5 py-2.5 rounded-full shadow-[0_0_25px_rgba(168,85,247,0.15)]"
          >
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < Math.floor(WORKSHOP_INFO.rating) ? 'fill-yellow-500' : 'fill-yellow-500/20'}`} />
              ))}
            </div>
            <span className="font-display font-bold text-2xl text-white">{WORKSHOP_INFO.rating}</span>
          </motion.div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-5xl font-bold uppercase tracking-wide text-white drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]"
          >
            Reseñas de <span className="text-cyan-400">Clientes</span>
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mt-3"
          >
            Basado en {WORKSHOP_INFO.reviewCount} opiniones en Google
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="relative bg-gradient-to-b from-[#17171c] to-[#101013] border border-white/5 rounded-2xl p-8 group hover:border-transparent transition-colors duration-300"
            >
              {/* Neon border glow on hover */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-40 blur transition-opacity duration-300 -z-10" />

              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-purple-500/20 transition-colors" />
              <div className="flex mb-5 text-yellow-500">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 drop-shadow-[0_0_4px_rgba(234,179,8,0.6)]" />
                ))}
              </div>
              <p className="text-gray-300 mb-8 italic leading-relaxed line-clamp-4">"{review.text}"</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 p-[1.5px] shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                  <div className="w-full h-full rounded-full bg-[#101013] flex items-center justify-center font-display font-bold text-white uppercase">
                    {review.author.charAt(0)}
                  </div>
                </div>
                <span className="font-medium text-white text-sm">{review.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
