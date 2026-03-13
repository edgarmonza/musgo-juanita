import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import doselHero from "@/assets/dosel-hero.jpg";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 0.55]);

  return (
    <section ref={containerRef} className="h-screen relative overflow-hidden">
      {/* Background Image - Dosel (canopy) with Parallax */}
      <motion.div style={{ scale: imageScale }} className="absolute inset-0">
        <img
          src={doselHero}
          alt="Luz filtrándose por el dosel del bosque — Musgo"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Subtle overlay — lets canopy light breathe */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-black"
      />

      {/* Radial glow — mimics light filtering through the canopy center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,transparent_20%,rgba(0,0,0,0.4)_70%)]" />

      {/* Bottom gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-24">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0, 1] }}
              className="font-display text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-white leading-[0.85] tracking-tight uppercase"
            >
              La evolución<br />
              también sucede<br />
              <span className="text-primary">adentro.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.1, 0, 1] }}
              className="text-base lg:text-lg text-white/70 font-light leading-relaxed max-w-lg"
            >
              Acompaño la transición entre la estrategia que proyectas
              y la transformación que tu equipo necesita vivir.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0, 1] }}
              className="flex flex-col sm:flex-row gap-3 pt-4"
            >
              <a
                href="#contacto"
                className="rounded-full text-center text-xs px-8 py-3.5 bg-primary text-primary-foreground hover:brightness-110 transition-all duration-200 ease-out uppercase tracking-wider font-medium"
              >
                Conversemos
              </a>
              <a
                href="#servicios"
                className="rounded-full text-center text-xs px-8 py-3.5 border border-white/30 text-white hover:bg-white/10 transition-all duration-200 ease-out uppercase tracking-wider font-medium"
              >
                Explorar
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
        <div className="w-px h-10 bg-white/20 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-0 h-1/2 bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
