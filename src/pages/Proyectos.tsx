import { motion } from "framer-motion";

const proyectos = [
  {
    name: "Terrasos",
    role: "Advisor estratégico",
    status: "En curso",
    year: "2024 — presente",
    description: "Acompañamiento estratégico a la organización líder en biodiversidad y bonos de hábitat en Latinoamérica. Un advisory de 18 meses donde traduzco la visión regenerativa en acción organizacional.",
    details: [
      "Advisory estratégico — 18 meses",
      "Líder regional en biodiversidad y bonos de hábitat",
      "Traducción entre estrategia y transformación interna",
      "Acompañamiento a equipos en transición regenerativa",
    ],
  },
  {
    name: "Mundo Común",
    role: "Co-fundadora y directora",
    status: "Completado",
    year: "2022 — 2024",
    description: "Iniciativa financiada por Clima Breakthrough, co-fundada con Isa. Arrancamos de cero — literalmente, comprar el computador. En dos años construimos una plataforma con podcast, experiencias diseñadas con prácticas de Theory U y visión de futuro.",
    details: [
      "Financiada por Clima Breakthrough (filantropía climática)",
      "Construida desde cero en dos años",
      "83.000 personas alcanzadas a través de podcast",
      "+150 personas en experiencias diseñadas",
    ],
  },
  {
    name: "KPMG Sudamérica",
    role: "Directora de consultoría",
    status: "Completado",
    year: "Antes de 2022",
    description: "Dirección de consultoría cubriendo sector público, privado e innovación social para Sudamérica. La experiencia que conecta lo estratégico con lo humano — y donde vi de cerca la brecha entre lo que las organizaciones anuncian y lo que viven adentro.",
    details: [
      "Cobertura regional para Sudamérica",
      "Consultoría a C-Level y juntas directivas",
      "Cruce de sector público, privado e innovación social",
      "Donde vi de cerca la brecha entre estrategia y transición real",
    ],
  },
  {
    name: "Gramalote",
    role: "Líder de proceso",
    status: "Completado",
    year: "Antes de 2022",
    description: "Gramalote fue destruido por un deslizamiento. Se reconstruyó el pueblo — la infraestructura, las casas, todo. Pero la transición interna de la comunidad nunca sucedió. La gente no se conectó desde su estado interior. Ahí entendí que un cambio sin transición es solo reorganizar el espacio.",
    details: [
      "Fondo Adaptación — reconstrucción total de un municipio",
      "El pueblo se construyó, pero la transición interna no ocurrió",
      "La experiencia que sembró la tesis central de Musgo",
      "Caso compartido en LinkedIn y podcast",
    ],
  },
];

export default function ProyectosPage() {
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
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Proyectos</p>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] uppercase">
              Donde esto<br />ya sucedió.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl">
              Cada proyecto cuenta una historia de transición. Algunos fueron desde adentro, otros desde afuera. Todos me enseñaron algo.
            </p>
          </motion.div>

          {/* Projects */}
          <div className="space-y-0">
            {proyectos.map((proyecto, index) => (
              <motion.div
                key={proyecto.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                className="py-12 md:py-16 border-b border-border"
              >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                  {/* Left */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="font-display text-4xl md:text-5xl text-foreground uppercase leading-none">
                        {proyecto.name}
                      </h2>
                      <span className="inline-block px-3 py-1 rounded-full border border-border text-xs uppercase tracking-widest text-muted-foreground flex-shrink-0 mt-2">
                        {proyecto.status}
                      </span>
                    </div>
                    <p className="text-xs uppercase tracking-widest text-primary">{proyecto.role}</p>
                    <p className="text-sm text-muted-foreground font-light">{proyecto.year}</p>
                  </div>

                  {/* Right */}
                  <div className="space-y-6">
                    <p className="text-lg text-muted-foreground font-light leading-relaxed">
                      {proyecto.description}
                    </p>
                    <ul className="space-y-2">
                      {proyecto.details.map((detail) => (
                        <li key={detail} className="flex gap-3 items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-sm text-foreground font-light">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

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
