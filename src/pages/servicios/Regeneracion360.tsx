import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0, 1] },
};

const diferencias = [
  {
    eje: "Estrategia",
    sostenible: "Reducir impacto. Cumplir regulaciones. Reportar.",
    regenerativo:
      "Regenerar ecosistemas. La organización genera valor para todo su entorno.",
  },
  {
    eje: "Cultura",
    sostenible: "Eficiencia, productividad. Equipos como recursos.",
    regenerativo:
      "Sistemas vivos. Equipos con energía, humanidad, conexión emocional real.",
  },
  {
    eje: "Liderazgo",
    sostenible: "Gestionar indicadores. Agenda cortoplacista.",
    regenerativo:
      "Pensamiento sistémico. Futuros posibles. Autoconciencia.",
  },
];

const componentes = [
  {
    title: "Lectura de contexto",
    desc: "¿Dónde está tu organización hoy? ¿Cuál es la brecha entre lo que dice y lo que vive?",
  },
  {
    title: "Ruta de transición",
    desc: "Pasos concretos para mover la estrategia hacia una lógica regenerativa.",
  },
  {
    title: "Liderazgo regenerativo",
    desc: "Acompañamiento al CEO y equipo líder. No puedes pedir regeneración si el liderazgo sigue en lógica extractiva.",
  },
  {
    title: "Espacios de formación",
    desc: "Masterclasses sobre pensamiento sistémico, futuros posibles e imaginación estratégica.",
  },
];

const formatos = [
  {
    num: "01",
    title: "Consultoría por proyecto",
    desc: "Diagnóstico + ruta + implementación. Acompañamiento con inicio, fases y entregables concretos.",
  },
  {
    num: "02",
    title: "Masterclasses",
    desc: "Sesiones de formación en pensamiento sistémico y liderazgo regenerativo. Grupos de 10-20 personas. Digital o presencial.",
  },
  {
    num: "03",
    title: "Acompañamiento al CEO",
    desc: "Sesiones periódicas para traer perspectivas sistémicas a las decisiones estratégicas. El CEO Whisperer como práctica.",
  },
];

const audiencia = [
  "CEOs y equipos directivos que saben que sostenibilidad como reporte ya no es suficiente",
  "Organizaciones en transición que entienden que el problema es sistémico, no departamental",
  "Empresas que quieren atraer talento que busca propósito — no solo compensación",
  "Juntas directivas que necesitan pensamiento estratégico de largo plazo en su agenda",
];

export default function Regeneracion360() {
  return (
    <div className="min-h-screen">
      {/* ── 1. Hero ── */}
      <section
        className="bg-[#0f0f0f] pt-32 pb-24 md:pb-32 scroll-mt-24"
      >
        <div className="max-w-5xl mx-auto px-8">
          <motion.p
            {...fadeUp}
            className="text-xs uppercase tracking-widest text-white/40 mb-6"
          >
            Para CEOs y Líderes
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="font-display text-6xl md:text-7xl lg:text-[7rem] text-white leading-[0.88] uppercase"
          >
            Regeneración
            <br />
            360°
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary font-light max-w-3xl mt-8 leading-relaxed"
          >
            Acompañamiento consultivo para llevar la estrategia de
            sostenibilidad más allá del cambio incremental — hacia una
            estrategia regenerativa.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="mt-12"
          >
            <Link
              to="/contacto"
              className="inline-block border border-primary text-primary px-8 py-4 text-xs uppercase tracking-widest font-medium rounded-full transition-all duration-300 hover:bg-primary hover:text-white"
            >
              Conversemos →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Más allá de no dañar ── */}
      <section className="bg-white py-24 md:py-32 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-8">
          <motion.h2
            {...fadeUp}
            className="font-display text-4xl md:text-5xl text-foreground uppercase leading-none mb-12"
          >
            Más allá de no dañar
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div {...fadeUp} className="space-y-5">
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                La sostenibilidad corporativa se ha reducido a reportes,
                métricas y cambios incrementales. Reducir agua, reducir
                químicos, cumplir regulaciones. Eso ya no alcanza.
              </p>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="space-y-5"
            >
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Regenerar es diseñar organizaciones como sistemas vivos: en sus
                equipos, en su cultura, en su estrategia, en su relación con el
                entorno.
              </p>
              <p className="text-lg text-primary font-light italic">
                No es solo medir. Es transformar desde adentro.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. La Diferencia ── */}
      <section className="bg-[#0f0f0f] py-24 md:py-32 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-8">
          <motion.p
            {...fadeUp}
            className="text-xs uppercase tracking-widest text-primary mb-6"
          >
            La diferencia en acción
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {diferencias.map((item, i) => (
              <motion.div
                key={item.eje}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="border border-white/10 p-8 rounded-lg space-y-6"
              >
                <h3 className="font-display text-3xl text-white leading-none">
                  {item.eje}
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/30 mb-1">
                      Sostenible
                    </p>
                    <p className="text-white/40 font-light text-sm">
                      {item.sostenible}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary mb-1">
                      Regenerativo
                    </p>
                    <p className="text-white/80 font-light text-sm">
                      {item.regenerativo}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Qué Incluye ── */}
      <section className="bg-white py-24 md:py-32 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-8">
          <motion.p
            {...fadeUp}
            className="text-xs uppercase tracking-widest text-primary mb-4"
          >
            El acompañamiento
          </motion.p>
          <motion.h2
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.05 }}
            className="font-display text-4xl md:text-5xl text-foreground uppercase leading-none mb-12"
          >
            Qué incluye
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            {componentes.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="flex gap-5"
              >
                <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CEO Whisperer ── */}
      <section className="bg-[#0f0f0f] py-24 md:py-32 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.p
                {...fadeUp}
                className="text-xs uppercase tracking-widest text-primary mb-6"
              >
                El concepto
              </motion.p>
              <motion.h2
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.05 }}
                className="font-display text-4xl md:text-5xl text-white leading-none mb-8"
              >
                CEO Whisperer
              </motion.h2>
              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.1 }}
                className="text-lg text-white/60 font-light leading-relaxed"
              >
                Un acompañamiento cercano al líder. No para decirle qué hacer
                — sino para traer las preguntas que nadie más le hace. Temas
                sistémicos a la mesa. Perspectiva de largo plazo en un mundo de
                agendas cortoplacistas.
              </motion.p>
            </div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
            >
              <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
                <p className="text-xs uppercase tracking-widest text-white/30 mb-5">
                  Las preguntas que traemos
                </p>
                <div className="space-y-4">
                  <p className="text-white/60 font-light leading-relaxed italic text-sm">
                    "¿Qué le está pasando a tu organización que no se puede ver
                    en los indicadores?"
                  </p>
                  <p className="text-white/60 font-light leading-relaxed italic text-sm">
                    "¿Cómo se conecta tu estrategia de sostenibilidad con un
                    cambio sistémico real?"
                  </p>
                  <p className="text-white/60 font-light leading-relaxed italic text-sm">
                    "¿Qué tipo de organización necesita el mundo en los próximos
                    10 años?"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 6. Formatos ── */}
      <section className="bg-white py-24 md:py-32 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-8">
          <motion.p
            {...fadeUp}
            className="text-xs uppercase tracking-widest text-primary mb-4"
          >
            Formatos
          </motion.p>
          <motion.h2
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.05 }}
            className="font-display text-4xl md:text-5xl text-foreground uppercase leading-none mb-12"
          >
            Cómo se entrega
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {formatos.map((item, i) => (
              <motion.div
                key={item.num}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="border border-border p-8 rounded-lg space-y-3"
              >
                <span className="font-display text-3xl text-primary/30">
                  {item.num}
                </span>
                <h3 className="font-medium text-foreground">{item.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Para Quién ── */}
      <section className="bg-[#0f0f0f] py-24 md:py-32 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-8">
          <motion.h2
            {...fadeUp}
            className="font-display text-4xl md:text-5xl text-white uppercase leading-none mb-12"
          >
            Para quién
          </motion.h2>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="space-y-5 max-w-2xl"
          >
            {audiencia.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <p className="text-lg text-white/60 font-light leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 8. Quién Facilita ── */}
      <section className="bg-white py-24 md:py-32 scroll-mt-24">
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
                transition={{ ...fadeUp.transition, delay: 0.05 }}
                className="font-display text-4xl md:text-5xl text-foreground uppercase leading-none mb-8"
              >
                Juanita López Peláez
              </motion.h2>
              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.1 }}
                className="text-lg text-muted-foreground font-light leading-relaxed"
              >
                20 años en la intersección del cambio sistémico. Consolidó la
                práctica de Sostenibilidad y ESG en KPMG para Sudamérica. Lideró
                el reasentamiento de una comunidad entera. Conectó +83.000
                personas con impacto real.
              </motion.p>
              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.15 }}
                className="text-lg text-muted-foreground font-light leading-relaxed mt-4"
              >
                Sector público, sector privado, innovación social. Una mirada
                que conecta lo estratégico con lo humano — y la convicción de
                que las organizaciones pueden operar como sistemas vivos.
              </motion.p>
            </div>

            <div>
              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.1 }}
                className="border-l-2 border-primary pl-6 space-y-4"
              >
                <p className="text-foreground font-light">
                  Gramalote — 1.000 familias. USD 120M.
                </p>
                <p className="text-foreground font-light">
                  KPMG — Sostenibilidad Sudamérica.
                </p>
                <p className="text-foreground font-light">
                  Mundo Común — +83.000 personas.
                </p>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.2 }}
                className="pt-8 space-y-2"
              >
                <p className="text-primary font-light italic">
                  No confronto: habilito.
                </p>
                <p className="text-primary font-light italic">
                  No polarizo: integro.
                </p>
                <p className="text-primary font-light italic">
                  No moralizo: traduzco.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. CTA Final ── */}
      <section className="bg-[#0f0f0f] py-24 md:py-32 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.h2
            {...fadeUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-white uppercase leading-none"
          >
            Exploremos qué necesita
            <br />
            tu organización
          </motion.h2>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="text-lg text-white/50 font-light max-w-2xl mx-auto mt-8"
          >
            Cada organización tiene su propio ritmo y su propia brecha.
            Conversemos sobre dónde estás y hacia dónde quieres ir.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mt-10"
          >
            <Link
              to="/contacto"
              className="inline-block border border-primary text-primary px-8 py-4 text-xs uppercase tracking-widest font-medium rounded-full transition-all duration-300 hover:bg-primary hover:text-white"
            >
              Conversemos →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
