import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ResponsiveImage from "./ResponsiveImage";

export default function SpeakerSection() {
  return (
    <section className="py-24 md:py-32 bg-surface-dark">
      <div className="container max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-20 grid md:grid-cols-12 gap-8 items-end"
        >
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-widest text-white/40 mb-4">Speaker</p>
            <h2 className="font-display text-white uppercase leading-[0.95] text-[clamp(2.5rem,7vw,4.25rem)]">
              Charlas que mueven<br />
              <span className="text-white/45">algo adentro.</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:text-right">
            <p className="text-sm md:text-base text-white/60 font-light leading-relaxed max-w-md md:ml-auto">
              Una conversación bien diseñada cambia algo adentro. Ese es el oficio.
            </p>
          </div>
        </motion.div>

        {/* Photo Grid — asymmetric editorial */}
        <div className="grid md:grid-cols-12 gap-3 md:gap-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 aspect-[4/3] md:aspect-[16/10] relative overflow-hidden rounded-lg"
          >
            <ResponsiveImage
              slug="speaker-podium-wide"
              alt="Juanita López facilitando una conversación en atril"
              sizes="(min-width: 768px) 66vw, 100vw"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
              <p className="text-white text-sm md:text-base font-light max-w-md">
                Facilitación abierta · Bogotá, abril 2026
              </p>
            </div>
          </motion.div>

          {/* En móvil solo se muestra la foto principal — feedback Juanita jul 2026 */}
          <div className="hidden md:grid md:col-span-4 md:grid-cols-1 md:gap-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="aspect-[3/4] md:aspect-auto md:flex-1 relative overflow-hidden rounded-lg"
            >
              <ResponsiveImage
                slug="speaker-hands-open"
                alt="Juanita López — gesto de manos abiertas durante una charla"
                sizes="(min-width: 768px) 33vw, 50vw"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="aspect-[3/4] md:aspect-auto md:flex-1 relative overflow-hidden rounded-lg"
            >
              <ResponsiveImage
                slug="speaker-emphasis"
                alt="Juanita López — énfasis verbal en una sesión"
                sizes="(min-width: 768px) 33vw, 50vw"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Topics + Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <div className="flex flex-wrap gap-2.5">
            {["Cambio vs. Transición", "Fealdad organizacional", "Orquestar la complejidad", "Liderazgo regenerativo"].map((topic) => (
              <span
                key={topic}
                className="px-4 py-2 rounded-full border border-white/15 text-sm text-white/65 font-light"
              >
                {topic}
              </span>
            ))}
          </div>

          <Link
            to="/speaker"
            className="inline-flex items-center gap-2 text-musgo-light hover:gap-4 transition-all duration-300 flex-shrink-0 min-h-[44px]"
          >
            <span className="text-sm font-medium">Ver más</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
