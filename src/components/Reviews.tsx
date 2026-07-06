import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { REVIEWS, WORKSHOP_INFO } from "../data";

export function Reviews() {
  return (
    <section id="reseñas" className="py-24 relative bg-[#0a0a0c]">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-8 h-8 ${i < Math.floor(WORKSHOP_INFO.rating) ? 'fill-yellow-500' : 'fill-yellow-500/20'}`} />
              ))}
            </div>
            <span className="font-display font-bold text-4xl text-white">{WORKSHOP_INFO.rating}</span>
          </motion.div>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl font-bold uppercase tracking-wide text-white"
          >
            Reseñas de Clientes
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mt-2"
          >
            Basado en {WORKSHOP_INFO.reviewCount} opiniones
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
              className="bg-[#151519] border border-white/5 rounded-2xl p-8 relative group hover:border-purple-500/30 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-purple-500/10 transition-colors" />
              <div className="flex mb-4 text-yellow-500">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic line-clamp-4">"{review.text}"</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center font-display font-bold text-white uppercase">
                  {review.author.charAt(0)}
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
