import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import mossCloseup from "@/assets/moss-closeup.jpg";

const diferencias = [
  {
    area: "Agricultura",
    antes: "Menos agua, menos químicos.",
    despues: "Regenerar suelo, mejorar salud, alimentos vivos.",
  },
  {
    area: "Aprendizaje",
    antes: "Reducir costos.",
    despues: "Co-creación desde el proceso interior.",
  },
  {
    area: "Organización",
    antes: "Eficiencia, máquinas.",
    despues: "Sistemas vivos, organismos.",
  },
];

const queIncluye = [
  { title: "Lectura de contexto", desc: "Entender dónde está tu organización hoy y hacia dónde quiere ir" },
  { title: "Ruta de transición", desc: "Los pasos concretos para avanzar con tu equipo" },
  { title: "Liderazgo regenerativo", desc: "Acompañamiento al equipo líder en su propia transición" },
  { title: "Formación y espacios", desc: "Talleres, círculos de reflexión y experiencias para el equipo" },
];

export default function Regeneracion360() {
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
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Para CEOs y Líderes
            </p>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] uppercase">
              Regeneración<br />360°
            </h1>
            <p className="text-xl md:text-2xl text-primary font-light max-w-2xl">
              Alinear lo que tu organización dice con lo que vive adentro.
            </p>
          </motion.div>

          {/* Large Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="aspect-[21/9] relative overflow-hidden rounded-lg"
          >
            <img
              src={mossCloseup}
              alt="Musgo regenerativo — textura natural"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* La Visión */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="grid lg:grid-cols-2 gap-16 items-start"
          >
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground uppercase leading-none mb-8">Más allá de no dañar</h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Regenerar es ir más allá de reducir impacto. Es diseñar organizaciones que generen vida: en sus equipos, en su cultura, en su entorno.
              </p>
              <p className="text-lg text-primary font-light italic">
                No es solo medir. Es transformar desde adentro.
              </p>
            </div>
          </motion.div>

          {/* Diferencias */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground uppercase leading-none">La diferencia en acción</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {diferencias.map((item, i) => (
                <div key={i} className="border border-border p-8 rounded-lg space-y-6">
                  <h3 className="font-display text-3xl text-foreground uppercase leading-none">{item.area}</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Antes</p>
                      <p className="text-muted-foreground font-light">{item.antes}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-primary mb-2">Regenerativo</p>
                      <p className="text-foreground font-light">{item.despues}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Qué incluye */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground uppercase leading-none">Qué incluye</h2>

            <div className="grid md:grid-cols-2 gap-12">
              {queIncluye.map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="text-primary flex-shrink-0">
                    <ArrowRight className="w-5 h-5 mt-1" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
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
              Exploremos qué necesita tu organización
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
