import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fases = [
  {
    num: "01",
    title: "Un Final",
    desc: "Algo termina: un rol, una etapa, una forma de hacer las cosas. Reconocerlo es el primer paso para que lo nuevo pueda llegar. La mayoría de las personas se saltan esta fase — y por eso el cambio no se integra.",
  },
  {
    num: "02",
    title: "La Zona Neutra",
    desc: "El espacio entre lo que dejaste y lo que viene. Es confuso, incómodo, a veces doloroso. Pero es donde emerge la claridad.",
    highlight: "Esta es la fase que acompañamos — porque es la que nadie sostiene.",
  },
  {
    num: "03",
    title: "Un Nuevo Comienzo",
    desc: "Lo nuevo toma forma. Con intención, con energía, con consciencia de quién eres ahora. El cambio se integra de verdad — no como un plan, sino como una convicción.",
  },
];

const circuloElements = [
  {
    label: "01 — El Círculo",
    desc: "6-8 personas en transición. Cada uno comparte desde su proceso. El grupo sostiene con presencia, no con consejos.",
  },
  {
    label: "02 — La Escucha",
    desc: "No solamente aprendimos — más bien escuchamos y nos dimos ese regalo de escucha. Lo que emerge es claridad compartida.",
  },
  {
    label: "03 — La Historia",
    desc: "Al cierre, Juanita comparte su propia historia de transición. No como modelo — como espejo de que el camino se puede recorrer.",
  },
  {
    label: "04 — Las Preguntas Guía",
    desc: "Cada participante se lleva preguntas que Juanita ha recopilado en su camino — una guía para seguir después del círculo.",
  },
];

const noEs = [
  "Coaching individual con plan de acción",
  "Terapia o intervención psicológica",
  "Taller con slides y recomendaciones de bienestar",
  "Respiración, meditación genérica, tips de bienestar",
];

const siEs = [
  "Espacio de contención real, con estructura y cuidado",
  "Conectamos la crisis personal con la crisis sistémica",
  "Acompañamiento desde la experiencia vivida",
  "Conexión auténtica — una red de sostén",
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0, 1] },
};

export default function Transiciones() {
  return (
    <div className="min-h-screen">
      {/* ── 1. Hero ── */}
      <section
        className="bg-[#142114] pt-40 pb-28 md:pb-36"
        style={{ scrollMarginTop: "5rem" }}
      >
        <div className="max-w-5xl mx-auto px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs uppercase tracking-widest text-white/40 mb-6"
          >
            Para personas en transición
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-6xl md:text-7xl lg:text-[7rem] text-white leading-[0.88]"
          >
            Transiciones
            <br />
            Conscientes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-xl md:text-2xl text-primary font-light max-w-2xl mt-8 leading-relaxed"
          >
            Acompañamiento para que el cambio se integre de verdad.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12"
          >
            <Link
              to="/contacto"
              className="inline-block border border-primary text-primary px-8 py-4 text-xs uppercase tracking-widest font-medium rounded-full transition-all duration-300 hover:bg-primary hover:text-white"
            >
              Conversemos &rarr;
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 2. La Brecha ── */}
      <section className="bg-white py-24 md:py-32" style={{ scrollMarginTop: "5rem" }}>
        <div className="max-w-5xl mx-auto px-8">
          <motion.h2
            {...fadeUp}
            className="font-display text-4xl md:text-5xl text-foreground leading-none mb-14"
          >
            La Brecha
          </motion.h2>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div {...fadeUp} className="space-y-6">
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Personas que han tenido carreras extraordinarias. Que han
                liderado equipos, construido organizaciones. Y un día llega la
                pregunta:
              </p>
              <p className="text-xl text-foreground italic leading-relaxed">
                "¿Esto es lo que quiero seguir haciendo? ¿Cómo enfoco mi
                energía para generar el impacto que realmente importa?"
              </p>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                El burnout se aborda solo como una crisis individual — desde la
                salud mental y física. Pero es un síntoma de una desconexión
                sistémica. ¿Qué tiene que ver el burnout con la transición
                energética? Esa es la pregunta que nadie hace — y ese es el
                espacio que abrimos.
              </p>
              <p className="text-lg text-primary font-light italic leading-relaxed">
                No estás solo en esto. Necesitas un espacio donde puedas resonar
                con otros que están en el mismo momento.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. El Proceso — Modelo Bridges ── */}
      <section
        className="bg-[#f0f4ef] py-24 md:py-32"
        style={{ scrollMarginTop: "5rem" }}
      >
        <div className="max-w-5xl mx-auto px-8">
          <motion.p
            {...fadeUp}
            className="text-xs uppercase tracking-widest text-primary mb-4"
          >
            Modelo Bridges
          </motion.p>
          <motion.h2
            {...fadeUp}
            className="font-display text-4xl md:text-5xl text-foreground leading-none mb-16"
          >
            El Proceso
          </motion.h2>

          <div className="space-y-12">
            {fases.map((fase, i) => (
              <motion.div
                key={fase.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="grid md:grid-cols-12 gap-6 md:gap-8 border-b border-border pb-12"
              >
                <div className="md:col-span-2">
                  <span className="font-display text-7xl md:text-8xl text-primary/20">
                    {fase.num}
                  </span>
                </div>
                <div className="md:col-span-10 space-y-4">
                  <h3 className="font-display text-3xl md:text-4xl text-foreground leading-none">
                    {fase.title}
                  </h3>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
                    {fase.desc}
                  </p>
                  {fase.highlight && (
                    <p className="text-lg text-primary font-light italic leading-relaxed max-w-2xl">
                      {fase.highlight}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Círculos de Palabra ── */}
      <section className="bg-white py-24 md:py-32" style={{ scrollMarginTop: "5rem" }}>
        <div className="max-w-5xl mx-auto px-8">
          <motion.p
            {...fadeUp}
            className="text-xs uppercase tracking-widest text-primary mb-4"
          >
            El formato
          </motion.p>
          <motion.h2
            {...fadeUp}
            className="font-display text-4xl md:text-5xl text-foreground leading-none mb-14"
          >
            Círculos de Palabra
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {circuloElements.map((el, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="border border-border p-8 rounded-lg"
              >
                <p className="text-sm text-primary font-medium mb-3">
                  {el.label}
                </p>
                <p className="text-muted-foreground font-light leading-relaxed text-sm">
                  {el.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeUp}
            className="flex gap-10 md:gap-20 justify-center mt-14 text-center"
          >
            <div>
              <p className="font-display text-4xl text-primary">6-8</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
                Personas
              </p>
            </div>
            <div>
              <p className="font-display text-4xl text-primary">2-4h</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
                Sesión
              </p>
            </div>
            <div>
              <p className="font-display text-4xl text-primary">Grupal</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
                Siempre
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. Esto es diferente ── */}
      <section
        className="bg-[#f0f4ef] py-24 md:py-32"
        style={{ scrollMarginTop: "5rem" }}
      >
        <div className="max-w-5xl mx-auto px-8">
          <motion.h2
            {...fadeUp}
            className="font-display text-4xl md:text-5xl text-foreground leading-none mb-14"
          >
            Esto es diferente
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16">
            {/* NO es */}
            <motion.div {...fadeUp} className="space-y-5">
              <p className="text-xs uppercase tracking-widest text-muted-foreground/40 mb-4">
                Esto NO es
              </p>
              {noEs.map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-muted-foreground/30 text-lg leading-none mt-0.5">
                    &times;
                  </span>
                  <p className="text-muted-foreground/50 font-light text-sm leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* SÍ es */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-5"
            >
              <p className="text-xs uppercase tracking-widest text-primary mb-4">
                Esto SÍ es
              </p>
              {siEs.map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-primary text-lg leading-none mt-0.5">
                    &#10003;
                  </span>
                  <p className="text-foreground/70 font-light text-sm leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 6. Quién Facilita ── */}
      <section className="bg-white py-24 md:py-32" style={{ scrollMarginTop: "5rem" }}>
        <div className="max-w-5xl mx-auto px-8">
          <motion.p
            {...fadeUp}
            className="text-xs uppercase tracking-widest text-muted-foreground mb-4"
          >
            Quién facilita
          </motion.p>
          <motion.h2
            {...fadeUp}
            className="font-display text-4xl md:text-5xl text-foreground leading-none mb-12"
          >
            Juanita López Peláez
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeUp} className="space-y-6">
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                20 años en la intersección del cambio sistémico. Y un día ella
                misma vivió la transición. No habla desde la teoría — habla
                desde el camino recorrido.
              </p>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Lo que entrega es esa conexión: el burnout no es solo un problema
                tuyo — es un síntoma de una crisis sistémica. Conectamos la
                transición personal con la necesidad de transitar hacia un
                futuro regenerativo.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-8"
            >
              <div className="border-l-2 border-primary pl-6 space-y-4">
                <p className="text-foreground/70 font-light">
                  Gramalote — 1.000 familias. USD 120M.
                </p>
                <p className="text-foreground/70 font-light">
                  KPMG — Sostenibilidad Sudamérica.
                </p>
                <p className="text-foreground/70 font-light">
                  Mundo Común — +83.000 personas.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-foreground/80 font-light">
                  No confronto: habilito.
                </p>
                <p className="text-foreground/80 font-light">
                  No polarizo: integro.
                </p>
                <p className="text-foreground/80 font-light">
                  No moralizo: traduzco.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 7. CTA Final ── */}
      <section
        className="bg-[#142114] py-28 md:py-36"
        style={{ scrollMarginTop: "5rem" }}
      >
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.h2
            {...fadeUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-none"
          >
            Conversemos
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg text-white/50 font-light max-w-2xl mx-auto mt-8 leading-relaxed"
          >
            Si estás en un momento de cambio y sientes que necesitas un espacio
            diferente para procesarlo — con profundidad, con otros, con sostén —
            este círculo es para ti.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-12"
          >
            <Link
              to="/contacto"
              className="inline-block border border-primary text-primary px-8 py-4 text-xs uppercase tracking-widest font-medium rounded-full transition-all duration-300 hover:bg-primary hover:text-white"
            >
              Conversemos &rarr;
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
