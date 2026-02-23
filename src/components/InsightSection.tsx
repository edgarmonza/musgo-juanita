import { motion } from "framer-motion";

export default function InsightSection() {
  return (
    <section className="py-32 md:py-48 bg-background">
      <div className="container max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
          className="max-w-4xl mx-auto text-center space-y-16"
        >
          {/* Thin divider line */}
          <div className="w-16 h-px bg-primary mx-auto"></div>

          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-none uppercase">
            Tres formas de acompañarte
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            Según dónde estés y qué necesites mover.
          </p>

          {/* Thin divider line */}
          <div className="w-16 h-px bg-border mx-auto"></div>
        </motion.div>
      </div>
    </section>
  );
}
