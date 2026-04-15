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
    brecha:
      "Mucho contenido, poca transformación. Los participantes se van con apuntes, no con experiencias que cambien algo.",
    solucion:
      "Inyectamos pensamiento sistémico y autoconciencia en el programa para que el grupo conecte de verdad y el aprendizaje se quede.",
  },
  {
    num: "02",
    title: "Board Whisperer",
    brecha:
      "La junta habla de números y control. Los temas sistémicos que definen el futuro no tienen espacio en la agenda.",
    solucion:
      "Traemos las preguntas que nadie más hace y convertimos la junta en un contenedor para el pensamiento estratégico de largo plazo.",
  },
  {
    num: "03",
    title: "Gremios & Comunidades",
    brecha:
      "Los encuentros generan contactos, no vínculos. La inteligencia colectiva del grupo se queda sin activar.",
    solucion:
      "Facilitamos experiencias donde la conexión emocional potencia la inteligencia colectiva frente a desafíos compartidos.",
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

export default function ConversacionesRegenerativas() {
  return (
    <div className="min-h-screen">
      {/* ─── 1. HERO ─── */}
      <section
        className="bg-[#142114] pt-32 pb-24 md:pt-40 md:pb-32"
        style={{ scrollMarginTop: "5rem" }}
      >
        <div className="max-w-5xl mx-auto px-8">
          <motion.p
            {...fadeUp}
            className="text-xs uppercase tracking-widest text-white/40 mb-6"
          >
            Conversaciones Regenerativas
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="font-display text-6xl md:text-7xl lg:text-[7rem] text-white leading-[0.88] uppercase"
          >
            Conversaciones
            <br />
            Regenerativas
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
            Creamos conversaciones donde la gente se encuentra de verdad.
            Activamos inteligencia colectiva para mover desafíos reales.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.4 }}
            className="mt-10"
          >
            <Link
              to="/contacto"
              className="inline-block border border-white/40 text-white px-10 py-4 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-white hover:text-[#142114] transition-all duration-300"
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
                equipos no transitan internamente. Eso no toca el fondo del problema.
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
                  El burnout se aborda solo como una crisis individual — desde la
                  salud mental y física. Pero es un síntoma de una crisis
                  sistémica, y eso es lo que nadie aborda.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 3. TRES APLICACIONES ─── */}
      <section className="bg-[#f0f4ef] py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-8">
          <motion.p
            {...fadeUp}
            className="text-xs uppercase tracking-widest text-primary mb-4"
          >
            Aplicaciones
          </motion.p>
          <motion.h2
            {...fadeUp}
            className="font-display text-4xl md:text-5xl text-foreground leading-none uppercase mb-16"
          >
            Tres conversaciones
            <br />
            que transforman.
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {aplicaciones.map((app, i) => (
              <motion.div
                key={app.num}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="border border-border p-8 md:p-10 rounded-lg"
              >
                <span className="font-display text-4xl text-primary/40">
                  {app.num}
                </span>
                <h3 className="font-display text-2xl text-foreground uppercase mt-4 mb-4">
                  {app.title}
                </h3>
                <p className="text-muted-foreground/60 font-light leading-relaxed text-sm">
                  {app.brecha}
                </p>
                <div className="w-8 h-px bg-primary/50 my-4" />
                <p className="text-foreground/80 font-light leading-relaxed text-sm">
                  {app.solucion}
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
            Metodología
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
            Diseñamos 90 minutos para que emerja lo que importa. Un líder
            presenta su caso a 5-6 pares. No es una dinámica de integración —
            facilitamos una conversación con estructura y profundidad.
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
            Una de nuestras herramientas principales, basada en la Teoría U de
            Otto Scharmer.
          </motion.p>
        </div>
      </section>

      {/* ─── 5. IMPACTO ─── */}
      <section className="bg-[#f0f4ef] py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-8">
          <motion.h2
            {...fadeUp}
            className="font-display text-4xl md:text-5xl text-foreground leading-none uppercase mb-16"
          >
            Lo que te llevas
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
                      <p className="text-muted-foreground font-light leading-relaxed">
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
                sector privado, innovación social. Traemos una mirada que
                conecta lo estratégico con lo humano.
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
                  Mundo Común — Equipo fundador. +83.000 personas.
                </p>
                <p className="text-foreground font-light">
                  Terrasos — Regeneración y capital natural.
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
      <section className="bg-[#142114] py-24 md:py-32">
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
            Cada conversación la diseñamos a medida. Cuéntame qué necesita
            tu equipo, tu junta o tu comunidad.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mt-10"
          >
            <Link
              to="/contacto"
              className="inline-block border border-white/40 text-white px-10 py-4 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-white hover:text-[#142114] transition-all duration-300"
            >
              Conversemos →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
