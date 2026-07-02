import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ResponsiveImage from "./ResponsiveImage";

export default function CTASection() {
  return (
    <section id="contacto" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ResponsiveImage
          slug="juanita-thoughtful"
          alt=""
          aria-hidden="true"
          sizes="100vw"
          className="w-full h-full object-cover object-top"
        />
        {/* Overlay verde primary */}
        <div className="absolute inset-0 bg-musgo/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-4xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
          className="text-center space-y-8"
        >
          <h2 className="font-display text-white leading-none uppercase text-[clamp(2.5rem,7vw,4.5rem)]">
            El primer paso es conversar.
          </h2>

          <p className="text-lg md:text-xl text-white/85 font-light max-w-xl mx-auto">
            Cuéntame dónde estás y exploramos juntos la ruta.
          </p>

          <div className="pt-4">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center min-h-[48px] border-2 border-white text-white px-10 py-4 rounded-full text-sm font-medium uppercase tracking-wider hover:bg-white hover:text-musgo transition-all duration-300"
            >
              Conversemos →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
