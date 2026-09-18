import React from "react";
import { portfolioData } from "../data/portfolioData";
import {
  GraduationCap,
  MapPin,
  Calendar,
  Languages,
  ArrowRight,
  Database,
  Code,
  Layers,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  const { personal, spokenLanguages } = portfolioData;

  return (
    <section
      id="about"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-tech-grid"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-dusk/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[300px] h-[250px] bg-prussian/40 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Column (Left / 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-prussian border border-dusk text-alabaster text-xs font-medium shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Undergraduate Student</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-prussian/80 border border-dusk/60 text-lavender text-xs">
                <MapPin className="w-3.5 h-3.5 text-lavender" />
                <span>Aqaba / Jordan</span>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-alabaster tracking-tight leading-[1.15]">
                Computer Information Systems{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-alabaster via-lavender to-dusk">
                  (CIS)
                </span>{" "}
                Undergraduate in Jordan
              </h1>
              <p className="text-base sm:text-lg text-lavender max-w-2xl font-normal leading-relaxed">
                Building the next generation of data-driven systems and web applications.
                Currently advancing specialized studies in systems analysis, software development,
                and relational databases at{" "}
                <span className="text-alabaster font-medium underline decoration-dusk underline-offset-4">
                  The University of Jordan - Aqaba Branch
                </span>
                .
              </p>
            </div>

            {/* Key Academic Badge / Expected Graduation Highlight */}
            <div className="p-4 rounded-xl bg-prussian border border-dusk shadow-md flex items-start gap-4 hover:border-lavender transition-colors">
              <div className="p-2.5 rounded-lg bg-dusk/30 border border-dusk/50 text-alabaster shrink-0">
                <GraduationCap className="w-6 h-6 text-alabaster" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-wider font-semibold text-lavender">
                    Academic Milestone
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-dusk/40 text-alabaster border border-dusk/60">
                    On Track
                  </span>
                </div>
                <p className="text-sm font-semibold text-alabaster">
                  B.Sc. in Computer Information Systems
                </p>
                <div className="flex items-center gap-4 text-xs text-lavender pt-0.5">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-lavender" />
                    Expected Graduation: <strong className="text-alabaster font-medium ml-1">February 2027</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Spoken Languages Badges */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-lavender">
                <Languages className="w-3.5 h-3.5 text-lavender" />
                <span>Languages Spoken (Bilingual Fluency)</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {spokenLanguages.map((lang) => (
                  <div
                    key={lang.language}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-prussian border border-dusk/80 hover:border-lavender transition-all shadow-sm"
                  >
                    <div className="w-7 h-7 rounded-full bg-dusk/30 flex items-center justify-center font-bold text-xs text-alabaster border border-dusk/50">
                      {lang.language === "Arabic" ? "ع" : "EN"}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-alabaster">
                          {lang.language}
                        </span>
                        <span className="text-[11px] px-1.5 py-0.5 rounded bg-dusk/30 text-lavender border border-dusk/50">
                          {lang.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-lavender">{lang.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#capabilities"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-alabaster hover:bg-white text-ink font-bold text-sm transition-all duration-200 shadow-md hover:shadow-glow-lavender"
              >
                <span>Explore Capabilities</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#languages"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-prussian hover:bg-prussian/80 text-alabaster border border-dusk hover:border-lavender font-semibold text-sm transition-all duration-200"
              >
                <span>Fluent Coding Stack</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-dusk/20 hover:bg-dusk/40 text-lavender hover:text-alabaster border border-dusk/50 font-medium text-sm transition-all duration-200"
              >
                <span>Contact Details</span>
              </a>
            </div>

          </div>

          {/* Hero Visual Card (Right / 5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Outer decorative card frame */}
              <div className="p-6 rounded-2xl bg-prussian/90 border border-dusk shadow-2xl space-y-6 relative overflow-hidden backdrop-blur-md">
                
                {/* Header bar styled like an IDE or System Terminal */}
                <div className="flex items-center justify-between border-b border-dusk/60 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="ml-2 text-xs font-mono text-lavender">cis_student_profile.json</span>
                  </div>
                  <Sparkles className="w-4 h-4 text-lavender" />
                </div>

                {/* Profile Specs */}
                <div className="space-y-4 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-ink/70 border border-dusk/40 space-y-1.5">
                    <p className="text-lavender">
                      <span className="text-rose-400">const</span>{" "}
                      <span className="text-alabaster font-semibold">candidate</span> = &#123;
                    </p>
                    <p className="pl-4 text-lavender">
                      discipline: <span className="text-emerald-300">"Computer Information Systems"</span>,
                    </p>
                    <p className="pl-4 text-lavender">
                      university: <span className="text-emerald-300">"Univ. of Jordan - Aqaba"</span>,
                    </p>
                    <p className="pl-4 text-lavender">
                      expectedGraduation: <span className="text-amber-300">"Feb 2027"</span>,
                    </p>
                    <p className="pl-4 text-lavender">
                      status: <span className="text-emerald-300">"Active Undergraduate"</span>,
                    </p>
                    <p className="pl-4 text-lavender">
                      languages: [<span className="text-emerald-300">"Arabic"</span>, <span className="text-emerald-300">"English"</span>],
                    </p>
                    <p className="text-lavender">&#125;;</p>
                  </div>

                  {/* 3 Pillars Preview */}
                  <div className="grid grid-cols-3 gap-2.5 pt-1">
                    <div className="p-2.5 rounded-lg bg-ink/50 border border-dusk/50 text-center space-y-1">
                      <Code className="w-4 h-4 mx-auto text-lavender" />
                      <div className="text-[10px] font-sans font-semibold text-alabaster">Front-End</div>
                      <div className="text-[9px] text-lavender">React & UI</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-ink/50 border border-dusk/50 text-center space-y-1">
                      <Layers className="w-4 h-4 mx-auto text-lavender" />
                      <div className="text-[10px] font-sans font-semibold text-alabaster">Back-End</div>
                      <div className="text-[9px] text-lavender">C++ & Python</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-ink/50 border border-dusk/50 text-center space-y-1">
                      <Database className="w-4 h-4 mx-auto text-lavender" />
                      <div className="text-[10px] font-sans font-semibold text-alabaster">Database</div>
                      <div className="text-[9px] text-lavender">SQL & RDBMS</div>
                    </div>
                  </div>
                </div>

                {/* Bottom quote banner */}
                <div className="pt-3 border-t border-dusk/50 flex items-center justify-between text-xs text-lavender">
                  <span className="italic">"Systems thinking meets modern UI."</span>
                  <span className="font-mono text-emerald-400 text-[11px]">● Ready for Impact</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

