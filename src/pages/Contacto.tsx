import { motion } from "framer-motion";
import { Linkedin, Mail, ArrowRight } from "lucide-react";

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
            className="text-center space-y-6"
          >
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-foreground leading-none uppercase">
              Conversemos
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-lg mx-auto">
              Cuéntame dónde estás y exploramos juntos la ruta.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content: Form + Contact Info */}
      <section className="pb-24 md:pb-32">
        <div className="container max-w-5xl mx-auto px-8">
          <div className="grid md:grid-cols-5 gap-16 md:gap-20">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0, 1] }}
              className="md:col-span-3"
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                  window.location.href = `mailto:hola@musgo.io?subject=Contacto de ${name}&body=${encodeURIComponent(message)}%0A%0ADesde: ${encodeURIComponent(email)}`;
                }}
                className="space-y-8"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs uppercase tracking-widest text-muted-foreground mb-3"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-widest text-muted-foreground mb-3"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-widest text-muted-foreground mb-3"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                    placeholder="Cuéntame en qué puedo acompañarte..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-editorial rounded-full text-xs inline-flex items-center gap-2"
                >
                  Enviar mensaje
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0, 1] }}
              className="md:col-span-2 space-y-10"
            >
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  Email directo
                </p>
                <a
                  href="mailto:hola@musgo.io"
                  className="text-foreground hover:text-primary transition-colors duration-300 link-elegant"
                >
                  hola@musgo.io
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/juanitalopezpelaez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300 link-elegant"
                >
                  <Linkedin className="w-4 h-4" />
                  Juanita López Peláez
                </a>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Si prefieres, escríbeme directamente a mi correo o conéctate conmigo en LinkedIn. Respondo en menos de 48 horas.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
