import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import {
  Mail,
  MapPin,
  Send,
  Copy,
  Check,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  const { contact } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-ink/95 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-dusk/20 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-prussian border border-dusk text-lavender text-xs font-semibold tracking-wider uppercase">
            <MessageSquare className="w-3.5 h-3.5 text-lavender" />
            <span>Inquiries & Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-alabaster tracking-tight">
            Get In Touch
          </h2>
          <p className="text-base text-lavender">
            Interested in academic collaboration, internship opportunities, or software projects? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Quick Actions (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-prussian border border-dusk space-y-4 shadow-lg hover:border-lavender transition-all">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-ink/70 border border-dusk flex items-center justify-center text-alabaster">
                  <Mail className="w-5 h-5 text-lavender" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dusk/30 hover:bg-dusk/60 text-alabaster border border-dusk text-xs font-medium transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-lavender" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-lavender font-mono">
                  Primary Email
                </h3>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-lg font-bold text-alabaster hover:text-white transition-colors block mt-1 break-all underline decoration-dusk hover:decoration-lavender"
                >
                  {contact.email}
                </a>
              </div>

              <p className="text-xs text-lavender leading-relaxed">
                Open to academic inquiries, capstone collaboration, and junior/intern engineering opportunities.
              </p>
            </div>

            {/* Campus & Location Info */}
            <div className="p-6 rounded-2xl bg-prussian border border-dusk space-y-3 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-ink/70 border border-dusk flex items-center justify-center text-lavender">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-alabaster">
                    Geographic Base
                  </h4>
                  <p className="text-xs text-lavender">Aqaba & Amman, Jordan</p>
                </div>
              </div>
              <p className="text-xs text-lavender pt-2 border-t border-dusk/40">
                The University of Jordan - Aqaba Branch, Department of Computer Information Systems.
              </p>
            </div>

            {/* Fluency Note Badge */}
            <div className="p-4 rounded-xl bg-prussian/60 border border-dusk/50 flex items-center gap-3 text-xs text-lavender">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Prompt communication in both <strong className="text-alabaster">Arabic (Native)</strong> and <strong className="text-alabaster">English (Fluent)</strong>.
              </span>
            </div>

          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-prussian border border-dusk shadow-2xl relative">
              <h3 className="text-xl font-bold text-alabaster mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-lavender mb-6">
                Fill in the details below to initiate a conversation.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-ink/80 border border-emerald-500/40 text-center space-y-2 animate-in fade-in">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-alabaster">Message Dispatched!</h4>
                  <p className="text-xs text-lavender">
                    Thank you for reaching out. I will respond to your inquiry shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-lavender mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Ahmad / Eng. Sarah"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-ink/70 border border-dusk text-alabaster text-sm focus:outline-none focus:border-lavender focus:ring-1 focus:ring-lavender placeholder:text-lavender/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-lavender mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-ink/70 border border-dusk text-alabaster text-sm focus:outline-none focus:border-lavender focus:ring-1 focus:ring-lavender placeholder:text-lavender/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-lavender mb-1.5">
                      Message / Project Details
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your inquiry, project scope, or opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-ink/70 border border-dusk text-alabaster text-sm focus:outline-none focus:border-lavender focus:ring-1 focus:ring-lavender placeholder:text-lavender/50 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-alabaster hover:bg-white text-ink font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-glow-lavender"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

