import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0, 1] },
};

const aplicaciones = [
  {
    num: "01",
    title: "Formación & Academia",
    description:
      "Cohortes y programas ejecutivos que empaquetan contenido sin dejar espacio para que algo real pase entre las personas. Inyectamos metodologías de pensamiento sistémico desde la autoconciencia — para que el grupo conecte de verdad.",
  },
  {
    num: "02",
    title: "Juntas Directivas",
    description:
      "La conversación a nivel de juntas es superficial. Se necesita gente que piense en el fondo de la estrategia y el impacto — no solo indicadores. Hacemos de la junta un mejor contenedor para el pensamiento estratégico y el cambio sistémico.",
  },
  {
    num: "03",
    title: "Gremios & Comunidades",
    description:
      "Comunidades de inversión, gremios empresariales y ecosistemas de impacto que se reúnen sin profundidad. Diseñamos experiencias donde la conexión emocional potencia el poder del encuentro para traer cambios sistémicos.",
  },
];

const pasos = [
  {
    num: "01",
    title: "El Caso",
    description: "Un líder expone un desafío real, actual y urgente.",
  },
  {
    num: "02",
    title: "Los Espejos",
    description:
      "5-6 pares actúan como cajas de resonancia. Escucha profunda, no consejos.",
  },
  {
    num: "03",
    title: "La Devolución",
    description:
      "Desde la emoción y la imagen. Lo que emerge es una nueva mirada.",
  },
  {
    num: "04",
    title: "El Resultado",
    description:
      "El líder se lleva una nueva visión de su propio sistema. No una receta. Conexión real.",
  },
];

const impacto = [
  {
    label: "Para quien presenta",
    bullets: [
      "Siente escucha real.",
      "Amplía su perspectiva.",
      "Sale con nuevas posibilidades.",
      "Entiende que no está solo.",
    ],
  },
  {
    label: "Para los pares",
    bullets: [
      "Practican liderazgo regenerativo.",
      "Desarrollan escucha profunda.",
      "Se conectan auténticamente.",
    ],
  },
  {
    label: "Para el ecosistema",
    bullets: [
      "Red de cooperación, no competencia.",
      "Soluciones desde inteligencia colectiva.",
      "Vínculos que trascienden el evento.",
    ],
  },
];

export default function EspaciosRegenerativos() {
  return (
    <div className="min-h-screen">
      {/* ─── 1. HERO ─── */}
      <section
        className="bg-[#0f0f0f] pt-32 pb-24 md:pt-40 md:pb-32"
        style={{ scrollMarginTop: "5rem" }}
      >
        <div className="max-w-5xl mx-auto px-8">
          <motion.p
            {...fadeUp}
            className="text-xs uppercase tracking-widest text-white/40 mb-6"
          >
            Espacios Regenerativos
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="font-display text-6xl md:text-7xl lg:text-[7rem] text-white leading-[0.88] uppercase"
          >
            Espacios
            <br />
            Regenerativos
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="text-2xl md:text-3xl text-primary font-light mt-8"
          >
            De la transacción a la resonancia.
          </motion.p>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="text-lg text-white/60 font-light leading-relaxed max-w-3xl mt-6"
          >
            Espacios donde la gente se encuentra de verdad. Inteligencia
            colectiva activada para mover desafíos reales.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.4 }}
            className="mt-10"
          >
            <Link
              to="/contacto"
              className="inline-block border border-white/40 text-white px-10 py-4 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-white hover:text-[#0f0f0f] transition-all duration-300"
            >
              Conversemos →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. LA BRECHA ─── */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-8">
          <motion.h2
            {...fadeUp}
            className="font-display text-4xl md:text-5xl text-foreground leading-none uppercase mb-12"
          >
            La Brecha
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div {...fadeUp} className="space-y-5">
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Las organizaciones implementan cambios externos:
                reorganizaciones, nuevas estrategias, tecnología. Pero los
                equipos no transitan internamente.
              </p>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Las juntas tienen agendas cortoplacistas. Los gremios hacen
                networking transaccional. Los eventos empaquetan contenido sin un
                solo espacio para que la gente se mire a los ojos.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
            >
              <div className="border-l-2 border-primary pl-6">
                <p className="text-lg text-primary font-light italic leading-relaxed">
                  Hay una crisis de burnout que la gente trata con respiración y
                  talleres tácticos. Eso es jardín. La crisis individual está
                  conectada con una crisis sistémica — y eso es lo que nadie
                  aborda.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 3. TRES APLICACIONES ─── */}
      <section className="bg-[#0f0f0f] py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-8">
          <motion.p
            {...fadeUp}
            className="text-xs uppercase tracking-widest text-primary mb-4"
          >
            Aplicaciones
          </motion.p>
          <motion.h2
            {...fadeUp}
            className="font-display text-4xl md:text-5xl text-white leading-none uppercase mb-16"
          >
            Tres espacios donde
            <br />
            esto transforma.
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {aplicaciones.map((app, i) => (
              <motion.div
                key={app.num}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="border border-white/10 p-8 md:p-10 rounded-lg"
              >
                <span className="font-display text-4xl text-primary/40">
                  {app.num}
                </span>
                <h3 className="font-display text-2xl text-white uppercase mt-4 mb-4">
                  {app.title}
                </h3>
                <p className="text-white/50 font-light leading-relaxed text-sm">
                  {app.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. METODOLOGIA ─── */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-8">
          <motion.p
            {...fadeUp}
            className="text-xs uppercase tracking-widest text-primary mb-4"
          >
            Círculos de Resonancia
          </motion.p>
          <motion.h2
            {...fadeUp}
            className="font-display text-4xl md:text-5xl text-foreground leading-none uppercase mb-6"
          >
            Cómo funciona
          </motion.h2>
          <motion.p
            {...fadeUp}
            className="text-xl text-muted-foreground font-light leading-relaxed max-w-3xl mb-16"
          >
            90 minutos diseñados para que emerja lo que importa. Un líder
            presenta su caso a 5-6 pares. No es una dinámica de integración — es
            un espacio con estructura y profundidad.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-10">
            {pasos.map((paso, i) => (
              <motion.div
                key={paso.num}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="flex gap-5"
              >
                <span className="font-display text-4xl text-primary/30 flex-shrink-0">
                  {paso.num}
                </span>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">
                    {paso.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm">
                    {paso.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            {...fadeUp}
            className="text-sm text-muted-foreground/60 mt-12"
          >
            Basado en la Teoría U de Otto Scharmer — Escucha profunda, presencing
            e inteligencia colectiva.
          </motion.p>
        </div>
      </section>

      {/* ─── 5. IMPACTO ─── */}
      <section className="bg-[#0f0f0f] py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-8">
          <motion.h2
            {...fadeUp}
            className="font-display text-4xl md:text-5xl text-white leading-none uppercase mb-16"
          >
            Lo que cambia
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {impacto.map((col, i) => (
              <motion.div
                key={col.label}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="space-y-5"
              >
                <p className="text-xs uppercase tracking-widest text-primary mb-2">
                  {col.label}
                </p>
                <div className="space-y-3">
                  {col.bullets.map((b, j) => (
                    <div key={j} className="flex gap-3 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-white/60 font-light leading-relaxed">
                        {b}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. QUIEN FACILITA ─── */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <motion.p
                {...fadeUp}
                className="text-xs uppercase tracking-widest text-muted-foreground mb-4"
              >
                Quién facilita
              </motion.p>
              <motion.h2
                {...fadeUp}
                className="font-display text-4xl md:text-5xl text-foreground leading-none uppercase mb-8"
              >
                Juanita López Peláez
              </motion.h2>
              <motion.p
                {...fadeUp}
                className="text-lg text-muted-foreground font-light leading-relaxed"
              >
                20 años en la intersección del cambio sistémico. Sector público,
                sector privado, innovación social. Una mirada que conecta lo
                estratégico con lo humano.
              </motion.p>
            </div>

            <motion.div {...fadeUp} className="space-y-6">
              <div className="border-l-2 border-primary pl-6 space-y-4">
                <p className="text-foreground font-light">
                  Gramalote — 1.000 familias. USD 120M.
                </p>
                <p className="text-foreground font-light">
                  KPMG — Sostenibilidad Sudamérica.
                </p>
                <p className="text-foreground font-light">
                  Mundo Común — +83.000 personas.
                </p>
              </div>

              <div className="pt-4 space-y-2">
                <p className="text-foreground/80 font-light italic">
                  No confronto: habilito.
                </p>
                <p className="text-foreground/80 font-light italic">
                  No polarizo: integro.
                </p>
                <p className="text-foreground/80 font-light italic">
                  No moralizo: traduzco.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 7. CTA FINAL ─── */}
      <section className="bg-[#0f0f0f] py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.h2
            {...fadeUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-none uppercase"
          >
            Conversemos
          </motion.h2>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="text-lg text-white/60 font-light max-w-2xl mx-auto mt-8"
          >
            Cada espacio se diseña a medida. Conversemos sobre lo que necesita tu
            equipo, tu junta o tu comunidad.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mt-10"
          >
            <Link
              to="/contacto"
              className="inline-block border border-white/40 text-white px-10 py-4 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-white hover:text-[#0f0f0f] transition-all duration-300"
            >
              Conversemos →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
