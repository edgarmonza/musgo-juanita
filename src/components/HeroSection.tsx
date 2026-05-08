import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import ResponsiveImage from "./ResponsiveImage";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 1.12]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 0.55]);

  return (
    <section
      ref={containerRef}
      className="relative h-[100svh] min-h-[36rem] overflow-hidden"
    >
      <motion.div style={{ scale: imageScale }} className="absolute inset-0 motion-reduce:!scale-100">
        <ResponsiveImage
          slug="dosel-hero"
          alt="Luz filtrándose por el dosel del bosque — Musgo"
          priority
          sizes="100vw"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-black"
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,transparent_20%,rgba(0,0,0,0.4)_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-24">
        <div className="container max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-4xl space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0, 1] }}
              className="font-display text-white leading-[0.85] tracking-tight uppercase text-[clamp(2.75rem,11vw,9rem)]"
            >
              La evolución<br />
              también sucede<br />
              <span className="text-musgo-light">adentro.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.1, 0, 1] }}
              className="text-base md:text-lg text-white/75 font-light leading-relaxed max-w-lg"
            >
              Acompaño la transición entre la estrategia que proyectas
              y la transformación que tu equipo necesita vivir.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0, 1] }}
              className="flex flex-col sm:flex-row gap-3 pt-4"
            >
              <a
                href="/contacto"
                className="inline-flex items-center justify-center min-h-[48px] rounded-full text-center text-xs px-8 py-3.5 bg-white text-foreground hover:bg-musgo-light hover:text-white transition-colors duration-300 ease-out uppercase tracking-wider font-medium"
              >
                Conversemos
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center min-h-[48px] rounded-full text-center text-xs px-8 py-3.5 border border-white/40 text-white hover:bg-white/10 transition-colors duration-300 ease-out uppercase tracking-wider font-medium"
              >
                Explorar
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 z-20"
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
        <div className="w-px h-10 bg-white/20 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-0 h-1/2 bg-musgo-light"
          />
        </div>
      </motion.div>
    </section>
  );
}
