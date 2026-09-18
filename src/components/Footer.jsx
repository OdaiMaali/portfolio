import React from "react";
import { ArrowUp, Terminal, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-ink border-t border-dusk/40 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-dusk/30">
          
          {/* Left Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-prussian border border-dusk flex items-center justify-center text-alabaster">
              <Terminal className="w-4 h-4 text-lavender" />
            </div>
            <div>
              <p className="text-sm font-bold text-alabaster">
                Computer Information Systems Portfolio
              </p>
              <p className="text-xs text-lavender">
                The University of Jordan - Aqaba Branch · Class of Feb 2027
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-lavender">
            <a href="#about" className="hover:text-alabaster transition-colors">About</a>
            <a href="#languages" className="hover:text-alabaster transition-colors">Coding Languages</a>
            <a href="#capabilities" className="hover:text-alabaster transition-colors">Capabilities</a>
            <a href="#education" className="hover:text-alabaster transition-colors">Education</a>
            <a href="#contact" className="hover:text-alabaster transition-colors">Contact</a>
          </nav>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-prussian hover:bg-dusk/40 border border-dusk hover:border-lavender text-alabaster text-xs font-medium transition-all duration-200 group shadow-sm hover:shadow-glow-dusk"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-lavender group-hover:text-alabaster group-hover:-translate-y-0.5 transition-all" />
          </button>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-lavender/80">
          <p>
            © {new Date().getFullYear()} CIS Undergraduate. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Designed with <span className="text-rose-400">♥</span> in Jordan for modern dark mode web.
          </p>
        </div>

      </div>
    </footer>
  );
}

