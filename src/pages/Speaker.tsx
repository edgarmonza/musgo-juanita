import { motion } from "framer-motion";
import ResponsiveImage from "@/components/ResponsiveImage";

const temas = [
  {
    title: "Cambio vs. Transición",
    description: "Por qué las organizaciones cambian pero no se transforman. El proceso psicológico que falta para que el cambio sea real.",
  },
  {
    title: "La Brecha Interna",
    description: "Cómo cerrar la distancia entre lo que una organización proyecta hacia afuera y lo que vive adentro.",
  },
  {
    title: "Liderazgo Regenerativo",
    description: "Liderar desde la coherencia. No se trata de hacer más, sino de integrar lo humano en las decisiones estratégicas.",
  },
  {
    title: "Transiciones Organizacionales",
    description: "Cómo acompañar equipos en momentos de cambio complejo: fusiones, reestructuras, pivots culturales.",
  },
];

const formatos = [
  { title: "Keynote", duration: "45-60 min", description: "Para eventos, conferencias y aperturas." },
  { title: "Taller", duration: "3-4 horas", description: "Experiencia práctica con ejercicios y output concreto." },
  { title: "Panel / Conversatorio", duration: "Flexible", description: "Diálogo abierto con otros speakers o con el público." },
];

const enAccion = [
  { slug: "speaker-mid-gesture", alt: "Juanita López en gesto medio durante una intervención", caption: "Manos que acompañan la palabra" },
  { slug: "speaker-listening", alt: "Juanita López en escucha activa frente a su atril", caption: "Escucha antes de responder" },
  { slug: "speaker-full-smile", alt: "Juanita López sonriendo en plano completo", caption: "Lo personal sostiene lo estratégico" },
];

export default function SpeakerPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-24 md:pb-40">
        <div className="max-w-5xl mx-auto px-5 md:px-8 space-y-20 md:space-y-28">

          {/* Hero — text + lead photo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
            className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end"
          >
            <div className="lg:col-span-7 space-y-7">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Speaker</p>
              <h1 className="font-display text-foreground leading-[0.9] uppercase text-[clamp(3rem,9vw,6.5rem)]">
                Charlas que mueven<br />algo adentro.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light max-w-xl">
                20 años de experiencia en transiciones reales, traducidos en charlas que conectan lo estratégico con lo humano.
              </p>
            </div>
            <div className="lg:col-span-5 aspect-[4/5] relative overflow-hidden rounded-lg">
              <ResponsiveImage
                slug="speaker-hands-open"
                alt="Juanita López con las manos abiertas durante una conversación"
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* En acción — editorial gallery, three vertical frames with captions */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="space-y-8 md:space-y-10"
            aria-labelledby="speaker-en-accion"
          >
            <header className="flex items-end justify-between gap-6">
              <h2 id="speaker-en-accion" className="font-display text-3xl md:text-4xl text-foreground uppercase leading-none">
                En acción
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground font-light hidden sm:block">
                Sesión Bogotá · Abril 2026
              </p>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-5">
              {enAccion.map((photo) => (
                <figure key={photo.slug} className="space-y-3">
                  <div className="aspect-[3/4] relative overflow-hidden rounded-md">
                    <ResponsiveImage
                      slug={photo.slug}
                      alt={photo.alt}
                      sizes="(min-width: 640px) 30vw, 100vw"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <figcaption className="text-xs uppercase tracking-widest text-muted-foreground">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </motion.section>

          {/* Temas */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="space-y-12"
            aria-labelledby="speaker-temas"
          >
            <h2 id="speaker-temas" className="font-display text-3xl md:text-5xl text-foreground uppercase leading-none">
              Temas
            </h2>
            <ul className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              {temas.map((tema, idx) => (
                <li key={tema.title} className="flex gap-5">
                  <span className="font-display text-musgo text-sm tracking-widest pt-1.5">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="space-y-3">
                    <h3 className="font-display text-xl md:text-2xl text-foreground uppercase leading-none">{tema.title}</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">{tema.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Formatos */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="space-y-10"
            aria-labelledby="speaker-formatos"
          >
            <h2 id="speaker-formatos" className="font-display text-3xl md:text-5xl text-foreground uppercase leading-none">
              Formatos
            </h2>
            <div className="grid md:grid-cols-3 gap-10 md:gap-14">
              {formatos.map((formato) => (
                <div key={formato.title} className="space-y-3">
                  <p className="text-xs uppercase tracking-widest text-musgo">{formato.duration}</p>
                  <h3 className="font-display text-xl md:text-2xl text-foreground uppercase leading-none">{formato.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{formato.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Portrait + Quote — editorial spread */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center py-12 md:py-16 border-y border-border"
          >
            <div className="lg:col-span-5 aspect-[4/5] relative overflow-hidden rounded-lg">
              <ResponsiveImage
                slug="speaker-emphasis"
                alt="Juanita López hablando con énfasis"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 space-y-7">
              <blockquote className="font-display text-foreground uppercase leading-[0.95] text-[clamp(1.875rem,4.5vw,3rem)]">
                No confronto.<br />
                Habilito.
              </blockquote>
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-md">
                No polarizo: integro. No moralizo: traduzco.
                Una práctica que prioriza la conexión sobre el enfrentamiento.
              </p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                — Manifiesto Musgo
              </p>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="text-center space-y-8 pt-4"
          >
            <h2 className="font-display text-foreground uppercase leading-none text-[clamp(2rem,5vw,3rem)]">
              Llevemos esta conversación a tu evento
            </h2>
            <a
              href="/contacto"
              className="btn-editorial rounded-full inline-flex items-center gap-2 min-h-[48px]"
            >
              Conversemos →
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
