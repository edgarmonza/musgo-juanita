import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ResponsiveImage from "./ResponsiveImage";

const principios = [
  {
    label: "Escucha",
    detail: "Antes de proponer, sentir lo que está vivo en el sistema.",
  },
  {
    label: "Pausa",
    detail: "Crear espacios donde el grupo se piensa a sí mismo.",
  },
  {
    label: "Traducción",
    detail: "Conectar lo estratégico con lo humano, lo personal con lo sistémico.",
  },
  {
    label: "Tránsito",
    detail: "Acompañar lo que está en movimiento, sin forzar el destino.",
  },
];

export default function SobreMiSection() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-muted">
      <div className="container max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Image - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
              <ResponsiveImage
                slug="speaker-warm-smile"
                alt="Juanita López Peláez"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7 space-y-10"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-5">
                Sobre Mí
              </p>
              <h2 className="font-display text-foreground leading-[0.95] uppercase text-[clamp(2.25rem,5.5vw,3.75rem)]">
                20 años conectando lo estratégico con lo humano.
              </h2>
            </div>

            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-xl">
              He operado en la intersección del cambio sistémico en tres mundos: sector público, sector privado e innovación social. Eso me dio una mirada que conecta lo estratégico con lo humano.
            </p>

            {/* Editorial list — no side stripes, numbered + tight */}
            <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-6 pt-2">
              {principios.map((item, idx) => (
                <div key={item.label} className="flex gap-4 items-baseline">
                  <span
                    className="font-display text-musgo text-sm tracking-widest pt-1"
                    aria-hidden="true"
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <dt className="font-medium text-foreground mb-1">
                      {item.label}
                    </dt>
                    <dd className="text-sm text-muted-foreground font-light leading-relaxed">
                      {item.detail}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <Link
              to="/sobre"
              className="inline-flex items-center gap-2 text-musgo hover:gap-4 transition-all duration-300 pt-2 min-h-[44px]"
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
