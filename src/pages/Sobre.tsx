import { motion } from "framer-motion";
import juanitaStanding from "@/assets/juanita-standing.jpg";
import juanitaSeatedBlack from "@/assets/juanita-seated-black.jpg";

const trayectoria = [
  {
    period: "2012 — 2015",
    title: "Gramalote — Fondo Adaptación",
    description: "Lideré el reasentamiento de una comunidad entera. USD 120M de inversión, 1.000 familias. Ahí entendí que el cambio real no es solo infraestructura — es acompañar a las personas en su transición.",
  },
  {
    period: "2015 — 2020",
    title: "KPMG — Sostenibilidad Sudamérica",
    description: "Consolidé la práctica de Sostenibilidad y ESG para la región. Vi de cerca la brecha: organizaciones con estrategias impecables hacia afuera, pero desconectadas adentro.",
  },
  {
    period: "2018 — presente",
    title: "Mundo Común — Co-fundadora",
    description: "+83.000 personas conectadas con iniciativas de impacto real. La prueba de que la innovación social se construye desde la comunidad, no desde el escritorio.",
  },
  {
    period: "2024 — presente",
    title: "Musgo — Transiciones Regenerativas",
    description: "Todo converge aquí. 20 años de experiencia destilados en una práctica que cierra la brecha entre lo que las organizaciones dicen y lo que viven.",
  },
];

const valores = [
  { title: "Coherencia", description: "Lo que digo, lo que hago y lo que soy están alineados." },
  { title: "Regeneración", description: "No se trata de no dañar. Se trata de generar vida." },
  { title: "Traducción", description: "Conecto mundos que no se hablan: lo estratégico y lo humano, lo corporativo y lo orgánico." },
];

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-24 md:pb-40">
        <div className="max-w-5xl mx-auto px-8 space-y-24">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div className="space-y-8">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Sobre Mí</p>
              <h1 className="font-display text-6xl md:text-7xl text-foreground leading-[0.9] uppercase">
                Juanita<br />López<br />Peláez
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                He pasado 20 años en la intersección del cambio sistémico. Sector público, sector privado, innovación social. Eso me dio una mirada que conecta lo estratégico con lo humano.
              </p>
            </div>
            <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
              <img
                src={juanitaStanding}
                alt="Juanita López Peláez"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* La Pregunta */}
          <motion.blockquote
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="py-16 border-y border-border text-center"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl text-foreground italic leading-snug max-w-4xl mx-auto">
              "¿Cómo regeneramos nuestra relación con el sistema para crear formas de vida prósperas?"
            </p>
            <p className="text-muted-foreground font-light mt-6">
              Esta pregunta guía todo lo que hago.
            </p>
          </motion.blockquote>

          {/* Trayectoria */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground uppercase leading-none">Trayectoria</h2>
            <div className="space-y-0">
              {trayectoria.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="py-8 border-b border-border grid md:grid-cols-12 gap-4 md:gap-8"
                >
                  <div className="md:col-span-3">
                    <p className="text-sm text-muted-foreground font-light">{item.period}</p>
                  </div>
                  <div className="md:col-span-9 space-y-3">
                    <h3 className="font-display text-2xl text-foreground uppercase leading-none">{item.title}</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Photo break */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="aspect-[21/9] relative overflow-hidden rounded-lg"
          >
            <img src={juanitaSeatedBlack} alt="Juanita López" className="w-full h-full object-cover object-top" />
          </motion.div>

          {/* Valores */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground uppercase leading-none">Lo que me mueve</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {valores.map((valor) => (
                <div key={valor.title} className="space-y-4">
                  <h3 className="font-display text-2xl text-primary uppercase leading-none">{valor.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{valor.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Manifiesto */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="py-16 border-y border-border space-y-8 text-center"
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground uppercase leading-none">Cómo trabajo</h2>
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                No confronto: habilito.
              </p>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                No polarizo: integro.
              </p>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                No moralizo: traduzco.
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
              ¿Conversamos?
            </h2>
            <a
              href="https://www.linkedin.com/in/juanitalopezpelaez/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial rounded-full inline-block"
            >
              Conectar en LinkedIn →
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
