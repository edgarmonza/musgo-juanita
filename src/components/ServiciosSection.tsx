import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ResponsiveImage from "./ResponsiveImage";

const servicios = [
  {
    number: "01",
    id: "conversaciones-regenerativas",
    title: "Conversaciones Regenerativas",
    audience: "VPs y Directivos",
    description:
      "Facilito las conversaciones que los equipos necesitan pero nunca tienen. Escucha real, conexión profunda y la claridad que sale cuando la gente para y se mira a los ojos.",
    link: "/servicios/conversaciones-regenerativas",
    image: "speaker-warm-smile",
    imageAlt: "Juanita facilitando una conversación regenerativa",
  },
  {
    number: "02",
    id: "regeneracion-360",
    title: "Regeneración 360°",
    audience: "CEOs y Líderes",
    description:
      "Acompaño organizaciones a alinear lo que dicen con lo que viven adentro. Mapeamos juntos, sincronizamos equipos y hacemos que la estrategia cobre vida en las personas.",
    link: "/servicios/regeneracion-360",
    image: "moss-closeup",
    imageAlt: "Musgo regenerativo — textura natural",
  },
  {
    number: "03",
    id: "transiciones",
    title: "Transiciones Conscientes",
    audience: "Personas en transición",
    description:
      "Acompañamiento para integrar cambios de vida y carrera. Procesamos lo que sueltas, lo que traes y quién quieres ser. El cambio se hace real, no solo situacional.",
    link: "/servicios/transiciones",
    image: "moss-stream",
    imageAlt: "Arroyo con musgo — flujo natural",
  },
];

export default function ServiciosSection() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-muted">
      <div className="container max-w-7xl mx-auto px-5 md:px-8">
        {/* Section header — left-aligned, no centered card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 grid md:grid-cols-12 gap-8 items-end"
        >
          <div className="md:col-span-8">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-5">
              Cómo trabajo
            </p>
            <h2 className="font-display text-foreground uppercase leading-[0.95] text-[clamp(2.5rem,7vw,4.25rem)]">
              Tres formas de acompañarte.<br />
              <span className="text-muted-foreground">Según dónde estés.</span>
            </h2>
          </div>
          <p className="md:col-span-4 text-base text-muted-foreground font-light leading-relaxed">
            Cada práctica responde a un momento distinto del cambio.
            La conversación inicial define cuál te corresponde hoy.
          </p>
        </motion.div>

        {/* Editorial index — asymmetric, numbered, no card grid */}
        <ul className="divide-y divide-foreground/10 border-y border-foreground/10">
          {servicios.map((servicio, index) => (
            <motion.li
              key={servicio.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
            >
              <Link
                to={servicio.link}
                className="group block py-8 md:py-10 grid grid-cols-12 gap-4 md:gap-8 items-start hover:bg-foreground/[0.02] transition-colors duration-500 -mx-4 px-4 md:-mx-6 md:px-6 rounded-sm"
                aria-label={`${servicio.title} — para ${servicio.audience}`}
              >
                {/* Number */}
                <span className="col-span-2 md:col-span-1 font-display text-2xl md:text-3xl text-musgo tracking-wider">
                  {servicio.number}
                </span>

                {/* Title + audience */}
                <div className="col-span-10 md:col-span-4 space-y-2">
                  <h3 className="font-display text-2xl md:text-4xl text-foreground uppercase leading-[0.95] group-hover:text-musgo transition-colors duration-500">
                    {servicio.title}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Para {servicio.audience}
                  </p>
                </div>

                {/* Image — small thumbnail, asymmetric placement */}
                <div className="hidden md:block md:col-span-3 aspect-[4/3] relative overflow-hidden rounded-md">
                  <ResponsiveImage
                    slug={servicio.image}
                    alt={servicio.imageAlt}
                    sizes="(min-width: 768px) 25vw, 100vw"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>

                {/* Description */}
                <p className="col-span-12 md:col-span-3 text-sm text-muted-foreground font-light leading-relaxed">
                  {servicio.description}
                </p>

                {/* Arrow */}
                <span className="col-span-12 md:col-span-1 md:justify-self-end flex items-center gap-2 text-musgo pt-1 group-hover:gap-3 transition-all duration-500">
                  <span className="md:hidden text-sm font-medium">Explorar</span>
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
