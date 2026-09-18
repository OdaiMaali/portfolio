import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import {
  Code2,
  Cpu,
  Database,
  CheckCircle2,
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function Capabilities() {
  const { capabilities } = portfolioData;
  const [activeCard, setActiveCard] = useState(null);

  const getIcon = (iconName) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-6 h-6 text-alabaster" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-alabaster" />;
      case "Database":
        return <Database className="w-6 h-6 text-alabaster" />;
      default:
        return <Layers className="w-6 h-6 text-alabaster" />;
    }
  };

  return (
    <section id="capabilities" className="py-24 bg-ink/95 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-dusk/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-prussian/40 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-prussian border border-dusk text-lavender text-xs font-semibold tracking-wider uppercase">
            <Zap className="w-3.5 h-3.5 text-lavender" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-alabaster tracking-tight">
            What I Can Do & Deliver
          </h2>
          <p className="text-base text-lavender leading-relaxed">
            Synthesizing technical computer information systems theory with hands-on development across web interfaces, backend logic, and structured database engineering.
          </p>
        </div>

        {/* Themed Feature Cards (3 columns on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {capabilities.map((item, index) => {
            const isSelected = activeCard === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveCard(item.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`relative rounded-2xl bg-prussian border transition-all duration-300 p-8 flex flex-col justify-between group ${
                  isSelected
                    ? "border-lavender -translate-y-2 shadow-card-hover"
                    : "border-dusk hover:border-lavender hover:-translate-y-1.5 shadow-lg"
                }`}
              >
                {/* Accent top badge */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-13 h-13 p-3.5 rounded-xl bg-ink/80 border border-dusk/80 flex items-center justify-center group-hover:border-lavender transition-all group-hover:scale-105 shadow-inner">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-dusk/20 border border-dusk/60 text-lavender group-hover:text-alabaster transition-colors">
                    0{index + 1} // {item.category}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-alabaster group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-lavender leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5 pt-3 border-t border-dusk/40">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-lavender font-semibold block">
                      Key Competencies
                    </span>
                    {item.highlights.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-lavender">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills Pill Tags */}
                  <div className="pt-4 space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-lavender font-semibold block">
                      Technologies & Methods
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2.5 py-1 rounded-lg bg-ink/60 border border-dusk/60 text-alabaster font-medium hover:border-lavender transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer interactive cue */}
                <div className="pt-6 mt-6 border-t border-dusk/40 flex items-center justify-between text-xs text-lavender group-hover:text-alabaster transition-colors">
                  <span className="font-medium">Industry-Ready Architecture</span>
                  <ArrowRight className="w-4 h-4 text-lavender group-hover:text-alabaster group-hover:translate-x-1 transition-all" />
                </div>

                {/* Subtle top indicator bar */}
                <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-dusk to-transparent group-hover:via-lavender transition-all duration-300" />
              </div>
            );
          })}
        </div>

        {/* Architectural Principles Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-prussian/70 border border-dusk/70 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-ink/70 border border-dusk text-alabaster shrink-0">
              <ShieldCheck className="w-6 h-6 text-lavender" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-alabaster">
                Engineering Standard: Clean Architecture & Normalized Data
              </h4>
              <p className="text-xs text-lavender">
                Adhering to modular separation of concerns, DRY code practices, relational data consistency, and responsive accessibility.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-dusk/30 hover:bg-dusk/60 border border-dusk hover:border-lavender text-alabaster text-xs font-semibold transition-all shadow-sm"
          >
            Inquire About Projects
          </a>
        </div>

      </div>
    </section>
  );
}

