import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const proyectos = [
  {
    name: "Terrasos",
    role: "Advisor",
    description: "Advisory estratégico en transiciones regenerativas. Acompañamiento a la organización líder en biodiversidad y bonos de hábitat en Latinoamérica.",
    status: "En curso",
  },
  {
    name: "Mundo Común",
    role: "Co-fundadora",
    description: "Iniciativa financiada por Clima Breakthrough. Dos años construyendo desde cero: podcast, experiencias diseñadas con prácticas de Theory U. 83.000 personas alcanzadas.",
    status: "Completado",
  },
  {
    name: "Gramalote",
    role: "Líder de proceso",
    description: "Reconstrucción de un pueblo destruido por deslizamiento. Se construyó la infraestructura, pero la transición interna nunca sucedió. Ahí nació la tesis de Musgo.",
    status: "Completado",
  },
];

export default function ProyectosSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Proyectos</p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground max-w-3xl uppercase leading-none">
            Donde esto<br />
            <span className="text-muted-foreground">ya sucedió.</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-0 divide-y divide-border">
          {proyectos.map((proyecto, index) => (
            <motion.div
              key={proyecto.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="py-8 md:py-10 grid md:grid-cols-12 gap-4 md:gap-8 items-start"
            >
              {/* Name + Role */}
              <div className="md:col-span-4">
                <h3 className="font-display text-2xl md:text-3xl text-foreground uppercase leading-none mb-2">
                  {proyecto.name}
                </h3>
                <p className="text-xs uppercase tracking-widest text-primary">
                  {proyecto.role}
                </p>
              </div>

              {/* Description */}
              <p className="md:col-span-6 text-sm text-muted-foreground font-light leading-relaxed">
                {proyecto.description}
              </p>

              {/* Status */}
              <div className="md:col-span-2 md:text-right">
                <span className="inline-block px-3 py-1 rounded-full border border-border text-xs uppercase tracking-widest text-muted-foreground">
                  {proyecto.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex justify-end"
        >
          <Link
            to="/proyectos"
            className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all duration-300"
          >
            <span className="text-sm font-medium">Ver todos los proyectos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
