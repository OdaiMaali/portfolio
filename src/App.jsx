import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CodingLanguages from "./components/CodingLanguages";
import Capabilities from "./components/Capabilities";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-alabaster font-sans selection:bg-dusk selection:text-alabaster flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CodingLanguages />
        <Capabilities />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

