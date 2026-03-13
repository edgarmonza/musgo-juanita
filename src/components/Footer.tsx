import { Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-12 bg-[#111]">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="font-display text-2xl tracking-wide text-white uppercase">
              MUSGO
            </Link>
            <p className="text-sm text-white/40 font-light mt-3 max-w-xs">
              Transiciones regenerativas para organizaciones, equipos y personas.
            </p>
          </div>

          {/* Nav */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-white/30 mb-4">Navegar</p>
            <Link to="/sobre" className="block text-sm text-white/50 hover:text-white transition-colors duration-300">
              Sobre Mí
            </Link>
            <Link to="/speaker" className="block text-sm text-white/50 hover:text-white transition-colors duration-300">
              Speaker
            </Link>
            <Link to="/proyectos" className="block text-sm text-white/50 hover:text-white transition-colors duration-300">
              Proyectos
            </Link>
          </div>

          {/* Cómo trabajo */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-white/30 mb-4">Cómo trabajo</p>
            <Link to="/servicios/espacios-regenerativos" className="block text-sm text-white/50 hover:text-white transition-colors duration-300">
              Espacios Regenerativos
            </Link>
            <Link to="/servicios/regeneracion-360" className="block text-sm text-white/50 hover:text-white transition-colors duration-300">
              Regeneración 360°
            </Link>
            <Link to="/servicios/transiciones" className="block text-sm text-white/50 hover:text-white transition-colors duration-300">
              Transiciones Conscientes
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-white/30">
            © 2026 Musgo — Juanita López Peláez
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/juanitalopezpelaez/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:juanita@musgo.space"
              className="text-white/40 hover:text-white transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
