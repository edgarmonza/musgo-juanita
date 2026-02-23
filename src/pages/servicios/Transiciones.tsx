import { motion } from "framer-motion";
import mossStream from "@/assets/moss-stream.jpg";

const pasos = [
  {
    num: "01",
    title: "Un Final",
    desc: "Algo termina: un rol, una etapa, una forma de hacer las cosas. Reconocerlo es el primer paso para que lo nuevo pueda llegar.",
  },
  {
    num: "02",
    title: "La Zona Neutra",
    desc: "El espacio entre lo que dejaste y lo que viene. Es confuso, pero es donde emerge la claridad. Acompañamos este proceso.",
  },
  {
    num: "03",
    title: "Un Nuevo Comienzo",
    desc: "Lo nuevo toma forma. Con intención, con energía, con consciencia de quién eres ahora. El cambio se integra de verdad.",
  },
];

const paraQuien = [
  "Líderes construyendo algo propio después de una carrera corporativa",
  "Organizaciones navegando fusiones, reestructuras o cambios culturales",
  "Equipos que necesitan alinearse para avanzar juntos",
];

const formatos = [
  { title: "Coaching Individual", desc: "Sesiones bi-semanales, 3-6 meses. Acompañamiento personalizado para tu transición." },
  { title: "Círculos", desc: "6-8 personas en momentos similares. Reuniones mensuales de resonancia y apoyo." },
  { title: "Intervención Organizacional", desc: "Con el equipo completo. Estructura, claridad y cuidado de la energía colectiva." },
];

export default function Transiciones() {
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
              Para personas en transición
            </p>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] uppercase">
              Transiciones<br />Conscientes
            </h1>
            <p className="text-xl md:text-2xl text-primary font-light max-w-2xl">
              Acompañamiento para que el cambio se integre de verdad.
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
              src={mossStream}
              alt="Arroyo con musgo — flujo natural"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="py-16 border-y border-border text-center"
          >
            <p className="font-sans text-2xl md:text-3xl lg:text-4xl text-foreground italic leading-snug max-w-4xl mx-auto">
              "Un cambio es situacional. Una transición es el proceso interno que lo hace real."
            </p>
          </motion.blockquote>

          {/* El Proceso */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground uppercase leading-none">El proceso</h2>

            <div className="space-y-8">
              {pasos.map((paso) => (
                <div key={paso.num} className="grid md:grid-cols-12 gap-8 border-b border-border pb-8">
                  <div className="md:col-span-2">
                    <span className="font-display text-6xl md:text-7xl text-primary/30">{paso.num}</span>
                  </div>
                  <div className="md:col-span-10 space-y-4">
                    <h3 className="font-display text-3xl md:text-4xl text-foreground uppercase leading-none">{paso.title}</h3>
                    <p className="text-lg text-muted-foreground font-light leading-relaxed">{paso.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Para quién */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-16"
          >
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground uppercase leading-none">Para quién</h2>
            </div>
            <div className="space-y-4">
              {paraQuien.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-2 flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed">{item}</p>
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
              {formatos.map((f, i) => (
                <div
                  key={i}
                  className="border border-border p-8 rounded-lg space-y-4"
                >
                  <h3 className="font-medium text-foreground text-lg">{f.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{f.desc}</p>
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
              Conversemos sobre tu transición
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
