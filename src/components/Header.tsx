import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/sobre", label: "Sobre Mí" },
  { to: "/speaker", label: "Speaker" },
  { to: "/proyectos", label: "Proyectos" },
];

const servicios = [
  { to: "/servicios/conversaciones-regenerativas", label: "Conversaciones Regenerativas" },
  { to: "/servicios/regeneracion-360", label: "Regeneración 360°" },
  { to: "/servicios/transiciones", label: "Transiciones Conscientes" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileServiciosOpen, setIsMobileServiciosOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // On homepage, header starts transparent over dark hero
  const isHomepage = location.pathname === "/";
  // When on homepage and not scrolled, use light (white) text for contrast over dark hero
  const isOverHero = isHomepage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServiciosOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;
  const isServiciosActive = location.pathname.startsWith("/servicios");

  // Dynamic color classes based on position
  const logoColor = isOverHero
    ? "text-white hover:text-white/80"
    : "text-foreground hover:text-primary";
  const linkColor = (active: boolean) =>
    isOverHero
      ? active ? "text-white" : "text-white/70 hover:text-white"
      : active ? "text-foreground" : "text-muted-foreground hover:text-foreground";
  const menuIconColor = isOverHero ? "text-white" : "text-foreground";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between px-8">
        {/* Logo */}
        <Link
          to="/"
          className={`font-display text-2xl tracking-wide transition-colors duration-300 uppercase ${logoColor}`}
        >
          MUSGO
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-xs uppercase tracking-widest transition-colors duration-300 link-elegant ${linkColor(isActive(link.to))}`}
            >
              {link.label}
            </Link>
          ))}

          {/* Dropdown: Cómo Trabajo */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center gap-1.5 text-xs uppercase tracking-widest transition-colors duration-300 link-elegant ${linkColor(isServiciosActive)}`}
            >
              Cómo Trabajo
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 backdrop-blur-md rounded-lg shadow-2xl overflow-hidden ${
                    isOverHero
                      ? "bg-[#1a1a1a] border border-white/10"
                      : "bg-background border border-border"
                  }`}
                >
                  {servicios.map((servicio) => (
                    <Link
                      key={servicio.to}
                      to={servicio.to}
                      className={`block px-5 py-3.5 text-sm transition-all duration-200 ${
                        isOverHero
                          ? isActive(servicio.to)
                            ? "text-white bg-white/10"
                            : "text-white/60 hover:text-white hover:bg-white/5"
                          : isActive(servicio.to)
                            ? "text-foreground bg-muted"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {servicio.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* CTA */}
        <Link
          to="/contacto"
          className={`hidden md:inline-flex rounded-full text-xs px-8 py-4 uppercase tracking-widest font-medium transition-all duration-300 ${
            isOverHero
              ? "border border-white/40 text-white hover:bg-white hover:text-black"
              : "btn-editorial"
          }`}
        >
          Conversemos
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 -mr-2 ${menuIconColor}`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu — Dark premium */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-[#0f0f0f]/98 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <nav className="container py-10 flex flex-col gap-6 px-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-xs uppercase tracking-widest transition-colors ${
                    isActive(link.to)
                      ? "text-white"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile: Cómo Trabajo accordion */}
              <div>
                <button
                  onClick={() => setIsMobileServiciosOpen(!isMobileServiciosOpen)}
                  className={`flex items-center gap-1.5 text-xs uppercase tracking-widest transition-colors ${
                    isServiciosActive
                      ? "text-white"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  Cómo Trabajo
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-300 ${
                      isMobileServiciosOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isMobileServiciosOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pl-4 flex flex-col gap-4">
                        {servicios.map((servicio) => (
                          <Link
                            key={servicio.to}
                            to={servicio.to}
                            className={`text-xs uppercase tracking-widest transition-colors ${
                              isActive(servicio.to)
                                ? "text-white"
                                : "text-white/40 hover:text-white"
                            }`}
                          >
                            {servicio.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/contacto"
                className="rounded-full text-xs text-center mt-4 border border-white/20 text-white px-8 py-4 uppercase tracking-widest font-medium hover:bg-white hover:text-black transition-all duration-300"
              >
                Conversemos
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
