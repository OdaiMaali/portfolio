import React from "react";

// Tech Icon Renderers with clean vector paths matching high-contrast dark theme
function TechIcon({ id }) {
  switch (id) {
    case "cpp":
      return (
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-current" aria-label="C++ Logo">
          <path d="M28.3 16c0-6.8-5.5-12.3-12.3-12.3S3.7 9.2 3.7 16s5.5 12.3 12.3 12.3c3.5 0 6.6-1.5 8.9-3.8l-2.4-2.4c-1.7 1.6-3.9 2.6-6.5 2.6-5 0-9-4-9-9s4-9 9-9c2.6 0 4.8 1.1 6.5 2.7l2.4-2.4C22.9 4.6 19.7 3.2 16 3.2 9 3.2 3.2 9 3.2 16s5.8 12.8 12.8 12.8c3.7 0 7-1.5 9.4-4 2.4-2.4 3.9-5.7 3.9-8.8h-1z" />
          <path d="M22 14.5h2v3h-2v2h-3v-2h-2v-3h2v-2h3v2zm8 0h2v3h-2v2h-3v-2h-2v-3h2v-2h3v2z" />
        </svg>
      );
    case "html":
      return (
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-current" aria-label="HTML5 Logo">
          <path d="M4 2l2.6 25.4L16 30.5l9.4-3.1L28 2H4zm19.6 7.4h-13l.3 3.6h12.4l-.8 8.8-6.5 1.8-6.5-1.8-.4-4.8H5l.8 8.1L16 29.5l10.2-2.8 1.4-14.7.2-2.6H8.2" />
        </svg>
      );
    case "css":
      return (
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-current" aria-label="CSS3 Logo">
          <path d="M4 2l2.6 25.4L16 30.5l9.4-3.1L28 2H4zm19.8 7.3l-.3 3.6H9.2l-.3-3.6h14.9zm-.9 7.3l-.8 8.8L16 27.2l-6.1-1.8-.4-4.4h3.6l.2 2.2 2.7.8 2.7-.8.3-3.8H7.6l-.3-3.6h15.9l-.3 3.4z" />
        </svg>
      );
    case "javascript":
      return (
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-current" aria-label="JavaScript Logo">
          <rect x="2" y="2" width="28" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M12 18.5v5c0 1.9-1.2 2.5-2.8 2.5-1.5 0-2.6-.7-3.2-1.7l1.7-1.1c.3.5.7.9 1.4.9.7 0 1-.3 1-.9v-4.7h1.9zm10.7 2.6c0-1.8-1.1-2.6-3-3.4-.9-.4-1.3-.8-1.3-1.4 0-.6.5-1.1 1.4-1.1 1 0 1.6.5 2 1.3l1.7-1.1c-.7-1.3-1.9-2-3.7-2-2.1 0-3.5 1.2-3.5 2.9 0 1.7 1 2.5 2.8 3.2 1 .4 1.5.9 1.5 1.6 0 .8-.7 1.3-1.8 1.3-1.3 0-2-.8-2.5-1.7l-1.8 1.1c.8 1.5 2.1 2.4 4.3 2.4 2.5 0 4.4-1.3 4.4-3.1z" />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-none stroke-current stroke-[1.8]" aria-label="React Logo">
          <circle cx="16" cy="16" r="2.5" fill="currentColor" />
          <ellipse cx="16" cy="16" rx="13" ry="5" />
          <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(60 16 16)" />
          <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(120 16 16)" />
        </svg>
      );
    case "python":
      return (
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-current" aria-label="Python Logo">
          <path d="M15.8 2C9.5 2 9.8 4.7 9.8 4.7l.1 2.8h6.1v.9H6.9S2 7.9 2 14.3s4.3 6.1 4.3 6.1h2.5V17c0-2.8 2.4-5.3 5.3-5.3h6V9.4S20.7 2 15.8 2zm-3.2 2.3c.7 0 1.2.6 1.2 1.2 0 .7-.6 1.2-1.2 1.2-.7 0-1.2-.6-1.2-1.2 0-.7.5-1.2 1.2-1.2z" />
          <path d="M16.2 30c6.3 0 6-2.7 6-2.7l-.1-2.8H16v-.9h9.1s4.9.4 4.9-5.9-4.3-6.1-4.3-6.1h-2.5v3.4c0 2.8-2.4 5.3-5.3 5.3h-6v2.3s-.6 7.4 4.3 7.4zm3.2-2.3c-.7 0-1.2-.6-1.2-1.2 0-.7.6-1.2 1.2-1.2.7 0 1.2.6 1.2 1.2 0 .7-.5 1.2-1.2 1.2z" />
        </svg>
      );
    case "sql":
      return (
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-none stroke-current stroke-[2]" aria-label="SQL Database Logo">
          <ellipse cx="16" cy="6" rx="12" ry="3.5" />
          <path d="M4 6v9c0 1.9 5.4 3.5 12 3.5s12-1.6 12-3.5V6" />
          <path d="M4 15v9c0 1.9 5.4 3.5 12 3.5s12-1.6 12-3.5v-9" />
          <path d="M13 19l6 6M19 19l-6 6" strokeLinecap="round" />
        </svg>
      );
    case "php":
      return (
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-none stroke-current stroke-[2]" aria-label="PHP Logo">
          <ellipse cx="16" cy="16" rx="14" ry="10" />
          <path d="M9 13h3c1.5 0 2.5.8 2.5 2s-1 2-2.5 2H9v3M16 13v7M20 13h3c1.5 0 2.5.8 2.5 2s-1 2-2.5 2h-3v3" strokeLinecap="round" />
        </svg>
      );
    case "vbnet":
      return (
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-current" aria-label="VB.NET Logo">
          <rect x="2" y="4" width="28" height="24" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="7" y="20" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill="currentColor">
            VB
          </text>
          <text x="21" y="20" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="currentColor">
            .NET
          </text>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-[2]">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      );
  }
}

export default function SkillsCard({ language }) {
  return (
    <div
      className="group relative rounded-2xl bg-prussian border border-dusk p-6 text-alabaster transition-all duration-300 hover:-translate-y-2 hover:border-lavender hover:shadow-card-hover flex flex-col justify-between"
    >
      {/* Top row: Icon and Category Tag */}
      <div>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-ink/70 border border-dusk flex items-center justify-center text-alabaster group-hover:text-white group-hover:border-lavender group-hover:scale-110 transition-all duration-300 shadow-inner">
            <TechIcon id={language.id} />
          </div>
          <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-dusk/25 border border-dusk/50 text-lavender group-hover:text-alabaster transition-colors">
            {language.tag}
          </span>
        </div>

        {/* Title and Category */}
        <div className="space-y-1 mb-2">
          <h3 className="text-xl font-bold text-alabaster group-hover:text-white transition-colors flex items-center gap-2">
            {language.name}
          </h3>
          <p className="text-xs font-medium text-lavender tracking-wide">
            {language.category}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-lavender leading-relaxed pt-1">
          {language.description}
        </p>
      </div>

      {/* Footer Pill: Proficiency / Focus */}
      <div className="pt-5 mt-4 border-t border-dusk/40 flex items-center justify-between">
        <span className="text-xs text-lavender font-mono">Specialization</span>
        <span className="text-xs font-semibold text-alabaster px-2 py-0.5 rounded bg-dusk/30 border border-dusk/60">
          {language.proficiency}
        </span>
      </div>

      {/* Ambient hover glow line */}
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-lavender/0 to-transparent group-hover:via-lavender/60 transition-all duration-500 rounded-b-2xl pointer-events-none" />
    </div>
  );
}

