import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import juanitaConversational from "@/assets/juanita-conversational.jpg";
import juanitaCloseup from "@/assets/juanita-closeup-speaker.jpg";

export default function SpeakerSection() {
  return (
    <section className="py-24 md:py-32 bg-[#111]">
      <div className="container max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <p className="text-xs uppercase tracking-widest text-white/40 mb-4">Speaker</p>
          <h2 className="font-display text-5xl md:text-6xl text-white max-w-3xl uppercase leading-none">
            Charlas que mueven<br />
            <span className="text-white/50">algo adentro.</span>
          </h2>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* Main large photo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 aspect-[16/10] relative overflow-hidden rounded-lg"
          >
            <img
              src={juanitaConversational}
              alt="Juanita López facilitando una conversación regenerativa"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white text-sm font-light">
                Facilitación de conversaciones regenerativas
              </p>
            </div>
          </motion.div>

          {/* Side column */}
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex-1 aspect-[4/3] md:aspect-auto relative overflow-hidden rounded-lg"
            >
              <img
                src={juanitaCloseup}
                alt="Juanita López - Speaker"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 relative overflow-hidden rounded-lg bg-primary/15 flex items-center justify-center p-8"
            >
              <div className="text-center space-y-3">
                <p className="font-display text-3xl md:text-4xl text-primary uppercase leading-none">
                  +83K
                </p>
                <p className="text-sm text-white/50 font-light">
                  personas impactadas
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Topics + Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <div className="flex flex-wrap gap-3">
            {["Cambio vs. Transición", "La fealdad organizacional", "Orquestar la complejidad", "Liderazgo regenerativo"].map((topic) => (
              <span
                key={topic}
                className="px-4 py-2 rounded-full border border-white/15 text-sm text-white/50 font-light"
              >
                {topic}
              </span>
            ))}
          </div>

          <Link
            to="/speaker"
            className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all duration-300 flex-shrink-0"
          >
            <span className="text-sm font-medium">Ver más</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
