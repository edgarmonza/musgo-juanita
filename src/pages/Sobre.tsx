import { motion } from "framer-motion";
import ResponsiveImage from "@/components/ResponsiveImage";

const valores = [
  { title: "Coherencia", description: "Lo que digo, lo que hago y lo que soy están alineados." },
  { title: "Regeneración", description: "No se trata de no dañar. Se trata de generar vida." },
  { title: "Traducción", description: "Conecto mundos que no se hablan: lo estratégico y lo humano, lo corporativo y lo orgánico." },
];

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-24 md:pb-40">
        <div className="max-w-5xl mx-auto px-5 md:px-8 space-y-20 md:space-y-24">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div className="space-y-8">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Sobre Mí</p>
              <h1 className="font-display text-foreground leading-[0.9] uppercase text-[clamp(3.25rem,11vw,6rem)]">
                Juanita<br />López<br />Peláez
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                He pasado 20 años en la intersección del cambio sistémico. Esa frontera donde lo que se decide afuera tiene que volverse experiencia adentro. Eso me dio una mirada que conecta lo estratégico con lo humano.
              </p>
            </div>
            <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
              <ResponsiveImage
                slug="juanita-full-green"
                alt="Juanita López Peláez"
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* La Pregunta */}
          <motion.blockquote
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="py-16 border-y border-border text-center"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl text-foreground italic leading-snug max-w-4xl mx-auto">
              "¿Cómo regeneramos nuestra relación con el sistema para crear formas de vida prósperas?"
            </p>
            <p className="text-muted-foreground font-light mt-6">
              Esta pregunta guía todo lo que hago.
            </p>
          </motion.blockquote>

          {/* Photo break */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="aspect-[21/9] relative overflow-hidden rounded-lg"
          >
            <ResponsiveImage
              slug="speaker-room-wide"
              alt="Juanita López en una sesión de facilitación"
              sizes="100vw"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Valores */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground uppercase leading-none">Lo que me mueve</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {valores.map((valor) => (
                <div key={valor.title} className="space-y-4">
                  <h3 className="font-display text-2xl text-primary uppercase leading-none">{valor.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{valor.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Manifiesto */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="py-16 border-y border-border space-y-8 text-center"
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground uppercase leading-none">Cómo trabajo</h2>
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                No confronto: habilito.
              </p>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                No polarizo: integro.
              </p>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                No moralizo: traduzco.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8 pt-8"
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground uppercase leading-none">
              ¿Conversamos?
            </h2>
            <a
              href="https://www.linkedin.com/in/juanitalopezpelaez/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial rounded-full inline-block"
            >
              Conectar en LinkedIn →
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
