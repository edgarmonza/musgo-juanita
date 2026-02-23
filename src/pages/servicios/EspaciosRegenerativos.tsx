import { motion } from "framer-motion";
import { Users, Ear, Lightbulb, Eye } from "lucide-react";
import juanitaRiendo from "@/assets/juanita-riendo.png";

export default function EspaciosRegenerativos() {
  const oportunidades = [
    "Cuando 100 personas se reúnen y quieres que salgan conectadas de verdad.",
    "Cuando un equipo directivo necesita verse con claridad, no solo escuchar consejos.",
    "Cuando un retiro estratégico pide profundidad, no solo agenda.",
  ];

  const formato = [
    {
      icon: Users,
      title: "El Caso",
      description: "Un líder expone un desafío real, actual y urgente.",
    },
    {
      icon: Ear,
      title: "Los Espejos",
      description: "5-6 pares actúan como cajas de resonancia. Escucha profunda, no consejos.",
    },
    {
      icon: Lightbulb,
      title: "La Regla",
      description: "Devolución desde la emoción y la imagen. Lo que emerge es una nueva mirada.",
    },
    {
      icon: Eye,
      title: "El Resultado",
      description: "El líder se lleva una nueva visión de su propio sistema. No una receta.",
    },
  ];

  const aplicaciones = [
    "Gremios y comunidades de inversión.",
    "Juntas directivas en momentos de decisión.",
    "Retiros estratégicos que buscan profundidad.",
  ];

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
              Espacios Regenerativos
            </p>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] uppercase">
              De la transacción<br />a la resonancia.
            </h1>
            <p className="text-xl md:text-2xl text-primary font-light max-w-3xl">
              Espacios donde la gente se encuentra de verdad. Inteligencia colectiva activada para mover desafíos reales.
            </p>
          </motion.div>

          {/* Large Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="aspect-[21/9] relative overflow-hidden rounded-lg"
          >
            <img
              src={juanitaRiendo}
              alt="Juanita facilitando un círculo de resonancia"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>

          {/* El momento */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-10"
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground uppercase leading-none">El momento</h2>
            <div className="space-y-6">
              {oportunidades.map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-3 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground font-light leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* La Metodología */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="py-16 border-y border-border space-y-12"
          >
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-widest text-primary">Círculos de Resonancia</p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground uppercase leading-none">
                Cómo funciona.
              </h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-3xl">
                90 minutos diseñados para que emerja lo que importa. No es una dinámica de integración — es un espacio con estructura y profundidad.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {formato.map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="text-primary flex-shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ¿Dónde aplica? */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground uppercase leading-none">¿Dónde aplica?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {aplicaciones.map((app, i) => (
                <div
                  key={i}
                  className="p-8 border border-border bg-card rounded-lg"
                >
                  <p className="text-foreground font-light leading-relaxed">{app}</p>
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
              Diseñemos la experiencia para tu comunidad
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
