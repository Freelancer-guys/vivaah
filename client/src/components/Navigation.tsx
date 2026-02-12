import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  const links = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled || menuOpen
            ? "bg-background/90 backdrop-blur-md border-b border-border/50 shadow-sm"
            : "bg-transparent text-white" // Text white on hero transparency
        }`}
      >
        <div className="container mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/">
            <div className={`font-serif text-2xl font-bold tracking-widest uppercase cursor-pointer transition-colors ${
              scrolled || location !== "/" ? "text-foreground" : "text-white"
            }`}>
              Lumière
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-12">
            {links.map((link) => (
              <Link key={link.href} href={link.href}
                className={`text-sm uppercase tracking-widest transition-all hover:opacity-70 ${
                  scrolled || location !== "/" ? "text-foreground" : "text-white/90 hover:text-white"
                } ${location === link.href ? "underline decoration-primary decoration-1 underline-offset-8" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden p-2 ${scrolled || location !== "/" ? "text-foreground" : "text-white"}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={menuOpen ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0, pointerEvents: "none" }}
        className="fixed inset-0 z-40 bg-background md:hidden flex items-center justify-center"
      >
        <div className="flex flex-col gap-8 text-center">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              <div className="text-3xl font-serif text-foreground hover:text-primary transition-colors cursor-pointer">
                {link.label}
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
}
