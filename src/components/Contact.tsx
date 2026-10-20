"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo } from "@/data/portfolio";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const emails = Array.isArray(personalInfo.email) ? personalInfo.email : [personalInfo.email];
      
      // Send to all emails using FormSubmit (free, no registration needed)
      // Note: First time submission will require email verification for each address
      await Promise.all(emails.map(async (email) => {
        const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            Name: formData.name,
            Email: formData.email,
            Message: formData.message,
            _replyto: formData.email,
            _subject: `New Lead: Message from ${formData.name}`,
            _template: "box",
          }),
        });

        if (!response.ok) {
          throw new Error(`Failed to send to ${email}`);
        }
      }));

      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    } finally {
      setTimeout(() => {
        setStatus((prev) => (prev === "sent" ? "idle" : prev));
      }, 3000);
    }
  };

  return (
    <section id="contact" className="relative">
      {/* Accent orb */}
      <div className="orb orb-gold w-[500px] h-[500px] -bottom-40 -right-40 opacity-15" />

      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16 text-center"
        >
          <span className="section-label justify-center">Contact</span>
          <h2 className="section-title text-center">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto glass-card !p-0 overflow-hidden flex flex-col md:flex-row !rounded-xl shadow-2xl"
        >
          {/* Contact Info Sidebar */}
          <div className="w-full md:w-2/5 p-8 md:p-12 bg-black/20 border-b md:border-b-0 md:border-r border-white/5 flex flex-col">
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                Get in Touch
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-8">
                I&apos;m always open to discussing new opportunities, creative collaborations, or
                just a friendly chat about technology and development.
              </p>

              {/* Contact methods */}
              <div className="space-y-6">
                <a
                  href={`mailto:${Array.isArray(personalInfo.email) ? personalInfo.email[0] : personalInfo.email}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center group-hover:bg-[var(--color-accent)]/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[var(--color-accent)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-1">
                      Email
                    </div>
                    <div className="text-sm text-[var(--color-text-primary)] font-medium">
                      {Array.isArray(personalInfo.email) ? personalInfo.email.map((e, idx) => <div key={idx}>{e}</div>) : personalInfo.email}
                    </div>
                  </div>
                </a>

                {/* Phone Method */}
                {'phone' in personalInfo && (
                  <a
                    href={`tel:${(personalInfo as any).phone}`}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center group-hover:bg-[var(--color-accent)]/20 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[var(--color-accent)]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-1">
                        Phone
                      </div>
                      <div className="text-sm text-[var(--color-text-primary)] font-medium">
                        {(personalInfo as any).phone}
                      </div>
                    </div>
                  </a>
                )}

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-gold)]/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[var(--color-gold)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-1">
                      Location
                    </div>
                    <div className="text-sm text-[var(--color-text-primary)] font-medium bg-transparent">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-8 mt-8 border-t border-white/5">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[var(--color-accent)]/20 hover:text-[var(--color-accent)] transition-all text-[var(--color-text-secondary)]"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[var(--color-accent)]/20 hover:text-[var(--color-accent)] transition-all text-[var(--color-text-secondary)]"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={personalInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[var(--color-accent)]/20 hover:text-[var(--color-accent)] transition-all text-[var(--color-text-secondary)]"
                aria-label="Twitter / X"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Form Panel */}
          <div className="w-full md:w-3/5 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="flex flex-col h-full space-y-6">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-2 font-medium"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-black/20 border border-white/10 rounded-md px-4 py-3.5 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]/30 transition-all font-medium"
                />
              </div>
              
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-2 font-medium"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full bg-black/20 border border-white/10 rounded-md px-4 py-3.5 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]/30 transition-all font-medium"
                />
              </div>

              <div className="flex-grow">
                <label
                  htmlFor="contact-message"
                  className="block text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full h-[calc(100%-24px)] min-h-[140px] bg-black/20 border border-white/10 rounded-md px-4 py-3.5 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]/30 transition-all resize-none font-medium"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`w-full glow-btn glow-btn-primary !rounded-md text-center py-4 mt-2 font-semibold ${
                  status === "sent" ? "!bg-emerald-500/80" : ""
                }`}
              >
                {status === "idle" && "Send Message"}
                {status === "sending" && (
                  <span className="inline-flex items-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </span>
                )}
                {status === "sent" && "✓ Message Logged"}
                {status === "error" && "Try Again"}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
