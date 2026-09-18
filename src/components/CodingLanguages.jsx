import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import SkillsCard from "./SkillsCard";
import { Code2, Filter } from "lucide-react";

export default function CodingLanguages() {
  const { codingLanguages } = portfolioData;
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Languages (9)" },
    { id: "frontend", label: "Web & UI" },
    { id: "backend", label: "Back-End & Systems" },
    { id: "data", label: "Databases & Logic" },
  ];

  const filteredLanguages = codingLanguages.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "frontend") {
      return ["html", "css", "javascript", "react"].includes(item.id);
    }
    if (activeFilter === "backend") {
      return ["cpp", "python", "php", "vbnet"].includes(item.id);
    }
    if (activeFilter === "data") {
      return ["sql", "cpp", "python"].includes(item.id);
    }
    return true;
  });

  return (
    <section id="languages" className="py-24 bg-ink relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prussian border border-dusk text-lavender text-xs font-semibold tracking-wider uppercase">
              <Code2 className="w-3.5 h-3.5 text-lavender" />
              <span>Core Tooling</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-alabaster tracking-tight">
              Fluent Coding & Scripting Languages
            </h2>
            <p className="text-base text-lavender max-w-2xl">
              Engineered with modern practices across algorithmic software, dynamic frontend applications, and relational database management.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-prussian border border-dusk overflow-x-auto max-w-full">
            <Filter className="w-4 h-4 text-lavender ml-2 mr-1 hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  activeFilter === cat.id
                    ? "bg-dusk text-alabaster shadow-sm"
                    : "text-lavender hover:text-alabaster hover:bg-dusk/30"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Animated Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLanguages.map((language) => (
            <SkillsCard key={language.id} language={language} />
          ))}
        </div>

      </div>
    </section>
  );
}

