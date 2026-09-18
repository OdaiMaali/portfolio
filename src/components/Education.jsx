import React from "react";
import { portfolioData } from "../data/portfolioData";
import {
  GraduationCap,
  Calendar,
  Building2,
  BookOpen,
  Award,
  CheckCircle,
  Clock,
  Compass,
} from "lucide-react";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 bg-ink relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-prussian border border-dusk text-lavender text-xs font-semibold tracking-wider uppercase">
            <GraduationCap className="w-3.5 h-3.5 text-lavender" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-alabaster tracking-tight">
            Education & Academic Track
          </h2>
          <p className="text-base text-lavender">
            Foundational computer information systems curriculum focused on data modeling, systems analysis, algorithmics, and modern software implementation.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="rounded-3xl bg-prussian border border-dusk p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle decorative background watermarks */}
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-dusk/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Degree Details (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-dusk/30 border border-dusk/70 text-alabaster text-xs font-semibold">
                  Bachelor of Science (B.Sc.)
                </span>
                <span className="px-3 py-1 rounded-full bg-ink/60 border border-dusk/40 text-emerald-400 text-xs font-mono flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active Enrolled
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-alabaster leading-snug">
                  Computer Information Systems (CIS)
                </h3>
                <div className="flex items-center gap-2 text-lavender text-base mt-2">
                  <Building2 className="w-4 h-4 text-lavender shrink-0" />
                  <span className="font-medium text-alabaster">
                    The University of Jordan - Aqaba Branch
                  </span>
                </div>
              </div>

              {/* Timeline card */}
              <div className="p-4 rounded-xl bg-ink/60 border border-dusk/60 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-prussian border border-dusk text-alabaster">
                    <Calendar className="w-5 h-5 text-lavender" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-lavender font-mono">
                      Expected Graduation
                    </div>
                    <div className="text-sm font-bold text-alabaster">
                      {education.expectedGraduation}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-lavender bg-prussian/80 px-3 py-1.5 rounded-lg border border-dusk/50">
                  <Clock className="w-3.5 h-3.5 text-lavender" />
                  <span>Class of 2027</span>
                </div>
              </div>

              {/* Degree Pillars */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase font-mono tracking-wider text-lavender font-semibold flex items-center gap-2">
                  <Award className="w-4 h-4 text-lavender" />
                  Program Core Competencies
                </h4>
                <div className="space-y-2.5">
                  {education.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-lavender">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Coursework & Focus Areas (5 cols) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-ink/70 border border-dusk/70 space-y-6">
              
              <div className="flex items-center justify-between border-b border-dusk/40 pb-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-lavender" />
                  <h4 className="text-sm font-bold text-alabaster">
                    Relevant CIS Coursework
                  </h4>
                </div>
                <span className="text-[11px] font-mono text-lavender">Core Modules</span>
              </div>

              {/* Coursework Pills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                {education.coursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-prussian/60 border border-dusk/50 flex items-center gap-3 text-xs text-alabaster hover:border-lavender hover:bg-prussian transition-all"
                  >
                    <div className="w-6 h-6 rounded-md bg-dusk/30 border border-dusk/60 flex items-center justify-center font-mono text-[10px] text-lavender shrink-0">
                      0{idx + 1}
                    </div>
                    <span className="font-medium">{course}</span>
                  </div>
                ))}
              </div>

              {/* Department Insight */}
              <div className="pt-2 border-t border-dusk/40 flex items-center gap-3 text-xs text-lavender">
                <Compass className="w-4 h-4 text-lavender shrink-0" />
                <span>
                  Faculty of Information Technology & Computer Systems, UJ Aqaba.
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

