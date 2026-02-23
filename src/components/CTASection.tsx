import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import juanitaThoughtful from "@/assets/juanita-thoughtful.jpg";

export default function CTASection() {
  return (
    <section id="contacto" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={juanitaThoughtful}
          alt=""
          className="w-full h-full object-cover object-top"
        />
        {/* Overlay verde primary */}
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
          className="text-center space-y-8"
        >
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-none uppercase">
            El primer paso es conversar.
          </h2>

          <p className="text-xl text-primary-foreground/80 font-light max-w-xl mx-auto">
            Cuéntame dónde estás y exploramos juntos la ruta.
          </p>

          <div className="pt-4">
            <Link
              to="/contacto"
              className="inline-block border-2 border-primary-foreground text-primary-foreground px-10 py-4 rounded-full text-sm font-medium uppercase tracking-wider hover:bg-primary-foreground hover:text-primary transition-all duration-300"
            >
              Conversemos →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
