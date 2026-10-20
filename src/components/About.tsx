"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { aboutText, personalInfo } from "@/data/portfolio";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "15+", label: "Projects Completed" },
  { value: "10+", label: "Technologies" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="relative">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Turning ideas into <span className="gradient-text">digital reality</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Text */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="space-y-5">
              {aboutText.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="text-[var(--color-text-secondary)] leading-relaxed text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick info */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <span className="text-[var(--color-accent)]">📍</span>
                <span className="text-[var(--color-text-secondary)]">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-[var(--color-accent)]">✉️</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Resume button */}
            <motion.a
              href={personalInfo.resumeUrl}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 mt-8 glow-btn glow-btn-outline text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </motion.a>
          </motion.div>

          {/* Right - Stats Grid */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
                  className="glass-card p-6 text-center group"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--color-text-muted)] uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative code block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-6 glass-card p-5 font-mono text-xs leading-relaxed"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="text-[var(--color-text-muted)]">
                <span className="text-[var(--color-accent)]">const</span>{" "}
                <span className="text-[var(--color-gold)]">developer</span> = {"{"}
                <br />
                &nbsp;&nbsp;<span className="text-[var(--color-neon)]">name</span>:{" "}
                <span className="text-emerald-400">&quot;{personalInfo.name}&quot;</span>,
                <br />
                &nbsp;&nbsp;<span className="text-[var(--color-neon)]">passion</span>:{" "}
                <span className="text-emerald-400">&quot;Building the future&quot;</span>,
                <br />
                &nbsp;&nbsp;<span className="text-[var(--color-neon)]">coffee</span>:{" "}
                <span className="text-orange-400">Infinity</span>,
                <br />
                {"}"};
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
