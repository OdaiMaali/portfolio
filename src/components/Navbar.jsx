import React, { useState, useEffect } from "react";
import { Menu, X, Terminal, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Languages", href: "#languages" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-prussian/90 backdrop-blur-md border-b border-dusk/40 shadow-lg py-3"
          : "bg-ink/80 backdrop-blur-sm border-b border-dusk/20 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#about"
          className="flex items-center gap-2.5 text-alabaster group focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender rounded-lg px-1 py-0.5"
        >
          <div className="w-9 h-9 rounded-lg bg-prussian border border-dusk flex items-center justify-center text-alabaster group-hover:border-lavender transition-colors shadow-sm">
            <Terminal className="w-5 h-5 text-lavender group-hover:text-alabaster transition-colors" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-alabaster flex items-center gap-1.5">
              Odai Maali
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            </span>
            <span className="text-[11px] text-lavender tracking-wider font-mono">
              CIS · UJ Aqaba
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-prussian/60 border border-dusk/40 rounded-full px-3 py-1.5 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-xs lg:text-sm font-medium text-lavender hover:text-alabaster hover:bg-dusk/30 rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-dusk/30 hover:bg-dusk/60 text-alabaster border border-dusk hover:border-lavender transition-all duration-200 shadow-sm hover:shadow-glow-dusk"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-lavender" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="p-2 rounded-lg bg-prussian border border-dusk text-lavender hover:text-alabaster focus:outline-none focus:ring-2 focus:ring-lavender"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-prussian border-b border-dusk/50 px-4 pt-3 pb-5 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-lavender hover:text-alabaster hover:bg-dusk/30 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-dusk/40">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-medium rounded-lg bg-dusk/40 text-alabaster border border-dusk hover:border-lavender"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 text-lavender" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

