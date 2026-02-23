import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import juanitaGreenWall from "@/assets/juanita-green-wall.jpg";

export default function SobreMiSection() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-muted">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
          <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
              <img
                src={juanitaGreenWall}
                alt="Juanita López Peláez"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-8"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Sobre Mí</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-none uppercase">
                20 años conectando lo estratégico con lo humano.
              </h2>
            </div>

            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              He operado en la intersección del cambio sistémico en tres mundos: sector público, sector privado e innovación social. Eso me dio una mirada que conecta lo estratégico con lo humano.
            </p>

            {/* Bullet Points - Elegant Style */}
            <div className="space-y-6 pt-2">
              <div className="flex gap-4">
                <div className="w-1 bg-primary/30 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-foreground mb-1">Sector Público</p>
                  <p className="text-muted-foreground font-light">
                    Gramalote — Fondo Adaptación (USD 120M, 1.000 familias).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1 bg-primary/30 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-foreground mb-1">Sector Privado</p>
                  <p className="text-muted-foreground font-light">
                    KPMG — Consultoría estratégica, cobertura Sudamérica.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1 bg-primary/30 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-foreground mb-1">Innovación Social</p>
                  <p className="text-muted-foreground font-light">
                    Mundo Común — +83.000 personas impactadas.
                  </p>
                </div>
              </div>
            </div>

            <Link
              to="/sobre"
              className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all duration-300 pt-2"
            >
              <span className="text-sm font-medium">Conocer mi historia</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
