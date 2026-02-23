import { motion } from "framer-motion";

const leftItems = ["Nuevo rol", "Nueva estrategia", "Nuevos compromisos", "Nuevas metas"];
const rightItems = ["Equipo alineado", "Energía renovada", "Coherencia real", "Propósito compartido"];

export default function GapSection() {
  return (
    <section className="bg-[#0f0f0f] py-24">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-xs uppercase tracking-widest text-white/40 text-center mb-6"
        >
          La brecha
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[0.95] tracking-tight text-center uppercase"
        >
          Cambio no es lo mismo<br />que transición
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
          className="text-base lg:text-lg text-white/50 font-light leading-relaxed text-center max-w-[600px] mx-auto mt-8 mb-16"
        >
          El cambio es situacional.<br />
          La transición es el proceso interno que lo hace real.
        </motion.p>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-[900px] mx-auto">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          >
            <p className="text-sm uppercase tracking-widest font-bold mb-4 text-white/40">
              Cambio
            </p>
            <div className="h-0.5 w-full mb-8 bg-white/10" />
            <ul className="space-y-1">
              {leftItems.map((item) => (
                <li key={item} className="text-base text-white/70 leading-[2]">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-sm uppercase tracking-widest font-bold mb-4 text-primary">
              Transición
            </p>
            <div className="h-0.5 w-full mb-8 bg-primary" />
            <ul className="space-y-1">
              {rightItems.map((item) => (
                <li key={item} className="text-base text-white leading-[2]">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Central Copy */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
          className="text-center max-w-[600px] mx-auto mt-16"
        >
          <p className="text-base text-white/40 italic font-light leading-[1.8]">
            Musgo acompaña lo segundo.<br />
            Para que lo primero no sea solo un anuncio.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
