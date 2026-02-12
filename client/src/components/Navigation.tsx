import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";

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
    { href: "/", label: "The Experience" },
    { href: "/portfolio", label: "The Galleries" },
    { href: "/about", label: "Our Heritage" },
    { href: "/contact", label: "Inquire" },
  ];

  // Check if on a dark background page (wedding details, etc.)
  const isDarkPage = location.includes("/weddings/");

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
          isDarkPage 
            ? "bg-white/10 backdrop-blur-md border-b border-white/10 text-white"
            : scrolled || menuOpen
            ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm"
            : "bg-transparent text-white"
        }`}
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/">
              <motion.div 
              whileHover={{ scale: 1.05 }}
              className={`font-serif text-2xl font-bold tracking-widest uppercase cursor-pointer transition-colors ${
                isDarkPage ? "text-white" : scrolled || location !== "/" ? "text-foreground" : "text-white"
              }`}
            >
              VIVAAH LUXE
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-12 items-center">
            {links.map((link) => (
              <Link key={link.href} href={link.href}
                className={`text-sm uppercase tracking-widest transition-all hover:opacity-70 ${
                  isDarkPage
                    ? "text-white hover:text-white/80"
                    : scrolled || location !== "/" ? "text-foreground" : "text-white/90 hover:text-white"
                } ${location === link.href ? "underline decoration-primary decoration-1 underline-offset-8" : ""}`}
              >
                {link.label}
              </Link>
            ))}

            {/* Contact Actions */}
            <div className={`flex items-center gap-3 pl-8 ${isDarkPage ? "border-white/20" : "border-current border-opacity-20"}`}>
              <motion.a
                href="tel:+919988556611"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  isDarkPage
                    ? "bg-white/20 hover:bg-white/30 text-white"
                    : scrolled || location !== "/" 
                    ? "bg-primary/10 hover:bg-primary/20 text-primary" 
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                <Phone className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest font-semibold hidden lg:inline">Call</span>
              </motion.a>

              <motion.a
                href="mailto:bonjour@lumiere.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  isDarkPage
                    ? "bg-white/20 hover:bg-white/30 text-white"
                    : scrolled || location !== "/" 
                    ? "bg-primary/10 hover:bg-primary/20 text-primary" 
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                <Mail className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest font-semibold hidden lg:inline">Email</span>
              </motion.a>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden p-2 ${isDarkPage ? "text-white" : scrolled || location !== "/" ? "text-foreground" : "text-white"}`}
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
          
          {/* Mobile Contact */}
          <div className="pt-8 border-t border-border space-y-4">
            <motion.a
              href="tel:+919988556611"
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-3 px-6 py-3 bg-primary text-white rounded-lg font-semibold"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </motion.a>
            <motion.a
              href="mailto:bonjour@lumiere.com"
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-3 px-6 py-3 bg-primary/20 text-primary rounded-lg font-semibold"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </motion.a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
