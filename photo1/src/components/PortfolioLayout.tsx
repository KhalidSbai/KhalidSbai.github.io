import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "À Propos", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-6 flex items-center justify-between",
          isScrolled ? "bg-background/80 backdrop-blur-md py-4 border-b border-border/50" : "bg-transparent"
        )}
      >
        <Link to="/" className="z-50">
          <motion.span 
            className="text-xl md:text-2xl font-extrabold tracking-tighter uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Sbai Mouad
          </motion.span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              to={link.href}
              className={cn(
                "text-xs uppercase tracking-[0.2em] font-medium transition-all hover:opacity-50",
                location.pathname === link.href ? "opacity-100" : "opacity-60"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                to={link.href}
                className="text-2xl uppercase tracking-[0.3em] font-light hover:opacity-50"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-6 mt-8">
              <Instagram className="w-5 h-5 opacity-50" />
              <Mail className="w-5 h-5 opacity-50" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-12 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-sm font-extrabold uppercase tracking-tighter">Sbai Mouad</span>
          <span className="text-[10px] uppercase tracking-[0.2em] opacity-40">© 2024 Marrakech, Maroc</span>
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="text-[10px] uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity">Instagram</a>
          <a href="#" className="text-[10px] uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity">Behance</a>
          <a href="#" className="text-[10px] uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity">Email</a>
        </div>

        <div className="text-[10px] uppercase tracking-[0.2em] opacity-40">
          Le silence entre les moments
        </div>
      </footer>
    </div>
  );
}
