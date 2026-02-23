import { motion } from "framer-motion";
import juanitaSmilingTable from "@/assets/juanita-smiling-table.jpg";
import juanitaProfileWhite from "@/assets/juanita-profile-white.jpg";
import juanitaFullGreen from "@/assets/juanita-full-green.jpg";

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

export default function SpeakerPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-24 md:pb-40">
        <div className="max-w-5xl mx-auto px-8 space-y-24">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
            className="space-y-8"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Speaker</p>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] uppercase">
              Charlas que mueven<br />algo adentro.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl">
              20 años de experiencia en transiciones reales, traducidos en charlas que conectan lo estratégico con lo humano.
            </p>
          </motion.div>

          {/* Photo Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid md:grid-cols-3 gap-4"
          >
            <div className="md:col-span-2 aspect-[16/10] relative overflow-hidden rounded-lg">
              <img src={juanitaSmilingTable} alt="Juanita facilitando" className="w-full h-full object-cover object-top" />
            </div>
            <div className="aspect-[4/5] md:aspect-auto relative overflow-hidden rounded-lg">
              <img src={juanitaProfileWhite} alt="Juanita López" className="w-full h-full object-cover object-top" />
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-3 gap-8 py-16 border-y border-border"
          >
            {[
              { number: "+83K", label: "Personas impactadas" },
              { number: "3", label: "Sectores de experiencia" },
              { number: "20+", label: "Años de trayectoria" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl md:text-5xl text-primary uppercase">{stat.number}</p>
                <p className="text-sm text-muted-foreground font-light mt-2">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Temas */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground uppercase leading-none">Temas</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {temas.map((tema) => (
                <div key={tema.title} className="border border-border p-8 rounded-lg space-y-4">
                  <h3 className="font-display text-2xl text-foreground uppercase leading-none">{tema.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{tema.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Formatos */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground uppercase leading-none">Formatos</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {formatos.map((formato) => (
                <div key={formato.title} className="space-y-3">
                  <h3 className="font-display text-2xl text-foreground uppercase leading-none">{formato.title}</h3>
                  <p className="text-xs uppercase tracking-widest text-primary">{formato.duration}</p>
                  <p className="text-muted-foreground font-light">{formato.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Portrait + Quote */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center py-16 border-y border-border"
          >
            <div className="aspect-[4/5] relative overflow-hidden rounded-lg">
              <img src={juanitaFullGreen} alt="Juanita López" className="w-full h-full object-cover object-top" />
            </div>
            <div className="space-y-6">
              <blockquote className="text-2xl md:text-3xl text-foreground italic leading-snug">
                "No confronto. Habilito. No polarizo. Integro. No moralizo. Traduzco."
              </blockquote>
              <p className="text-muted-foreground font-light">
                — Juanita López Peláez
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
              Llevemos esta conversación a tu evento
            </h2>
            <a
              href="https://www.linkedin.com/in/juanitalopezpelaez/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial rounded-full inline-block"
            >
              Conversemos →
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
