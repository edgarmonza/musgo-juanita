import { Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-14 bg-surface-dark-2">
      <div className="container max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-3 gap-10 md:gap-14 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="font-display text-2xl tracking-wide text-white uppercase">
              MUSGO
            </Link>
            <p className="text-sm text-white/50 font-light mt-3 max-w-xs leading-relaxed">
              Transiciones regenerativas para organizaciones, equipos y personas.
            </p>
          </div>

          {/* Nav */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-white/40 mb-4">Navegar</p>
            <Link to="/sobre" className="block text-sm text-white/65 hover:text-white transition-colors duration-300 py-1">
              Sobre Mí
            </Link>
            <Link to="/speaker" className="block text-sm text-white/65 hover:text-white transition-colors duration-300 py-1">
              Speaker
            </Link>
            <Link to="/proyectos" className="block text-sm text-white/65 hover:text-white transition-colors duration-300 py-1">
              Proyectos
            </Link>
          </div>

          {/* Cómo trabajo */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-white/40 mb-4">Cómo trabajo</p>
            <Link to="/servicios/conversaciones-regenerativas" className="block text-sm text-white/65 hover:text-white transition-colors duration-300 py-1">
              Conversaciones Regenerativas
            </Link>
            <Link to="/servicios/regeneracion-360" className="block text-sm text-white/65 hover:text-white transition-colors duration-300 py-1">
              Regeneración 360°
            </Link>
            <Link to="/servicios/transiciones" className="block text-sm text-white/65 hover:text-white transition-colors duration-300 py-1">
              Transiciones Conscientes
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-white/40">
            © {year} Musgo — Juanita López Peláez
          </p>

          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/juanitalopezpelaez/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-11 h-11 text-white/55 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn de Juanita López Peláez"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:juanita@musgo.space"
              className="inline-flex items-center justify-center w-11 h-11 text-white/55 hover:text-white transition-colors duration-300"
              aria-label="Email a Juanita López Peláez"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
