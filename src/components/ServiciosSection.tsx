import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import juanitaRiendo from "@/assets/juanita-riendo.png";
import mossCloseup from "@/assets/moss-closeup.jpg";
import mossStream from "@/assets/moss-stream.jpg";

const servicios = [
  {
    id: "conversaciones-regenerativas",
    title: "Conversaciones Regenerativas",
    subtitle: "Para VPs y Directivos",
    description: "Facilito las conversaciones que los equipos necesitan pero nunca tienen. Escucha real, conexión profunda y la claridad que sale cuando la gente para y se mira a los ojos.",
    link: "/servicios/conversaciones-regenerativas",
    image: juanitaRiendo,
    imageAlt: "Juanita facilitando una conversación regenerativa",
    icon: null,
    gradient: "",
  },
  {
    id: "regeneracion-360",
    title: "Regeneración 360°",
    subtitle: "Para CEOs y Líderes",
    description: "Acompaño organizaciones a alinear lo que dicen con lo que viven adentro. Mapeamos juntos, sincronizamos equipos y hacemos que la estrategia cobre vida en las personas.",
    link: "/servicios/regeneracion-360",
    image: mossCloseup,
    imageAlt: "Musgo regenerativo — textura natural",
    icon: null,
    gradient: "",
  },
  {
    id: "transiciones",
    title: "Transiciones Conscientes",
    subtitle: "Para personas en transición",
    description: "Acompañamiento para integrar cambios de vida y carrera. Procesamos lo que sueltas, lo que traes y quién quieres ser. El cambio se hace real, no solo situacional.",
    link: "/servicios/transiciones",
    image: mossStream,
    imageAlt: "Arroyo con musgo — flujo natural",
    icon: null,
    gradient: "",
  },
];

export default function ServiciosSection() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-muted">
      <div className="container max-w-7xl mx-auto px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Cómo trabajo</p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground max-w-3xl uppercase leading-none">
            Tres formas de acompañarte.<br />
            <span className="text-muted-foreground">Según dónde estés.</span>
          </h2>
        </motion.div>

        {/* 3-Column Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <motion.div
              key={servicio.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Link
                to={servicio.link}
                className="group block h-full"
              >
                <div className="h-full flex flex-col">
                  {/* Image / Gradient Card */}
                  <div className="aspect-[4/3] mb-6 relative overflow-hidden rounded-lg">
                    <img
                      src={servicio.image}
                      alt={servicio.imageAlt}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <p className="text-xs uppercase tracking-widest text-primary mb-2">
                    {servicio.subtitle}
                  </p>

                  <h3 className="font-display text-3xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300 uppercase leading-none">
                    {servicio.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6 flex-grow">
                    {servicio.description}
                  </p>

                  <div className="flex items-center gap-2 text-primary group-hover:gap-4 transition-all duration-300">
                    <span className="text-sm font-medium">Explorar</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
