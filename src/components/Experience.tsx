"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experiences } from "@/data/portfolio";
import { fadeInUp } from "@/lib/animations";

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="relative">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16 text-center"
        >
          <span className="section-label justify-center">Experience</span>
          <h2 className="section-title text-center">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            A timeline of my professional growth and key milestones.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="timeline-line hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: i * 0.2,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: i * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                    className="w-4 h-4 rounded-full bg-[var(--color-accent)] shadow-lg"
                    style={{ boxShadow: "0 0 20px var(--color-accent-glow)" }}
                  />
                </div>

                {/* Content Card */}
                <div
                  className={`flex-1 ${
                    i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                  }`}
                >
                  <div className="glass-card p-6 hover:translate-y-[-4px] transition-transform duration-300">
                    {/* Period */}
                    <span className="inline-block px-3 py-1 text-xs font-mono rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20 mb-3">
                      {exp.period}
                    </span>
                    <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-[var(--color-accent)] font-medium mb-3">
                      {exp.company}
                    </p>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div
                      className={`flex flex-wrap gap-2 ${
                        i % 2 === 0 ? "md:justify-end" : "md:justify-start"
                      }`}
                    >
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-[var(--color-text-muted)] border border-white/5 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
