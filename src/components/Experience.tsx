import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, ChevronDown } from "lucide-react";
import { useState } from "react";
import { experience } from "../data/portfolio";
import { Section, SectionHeading } from "./Section";

export function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <Section id="experience">
      <SectionHeading
        title="Professional Experience"
        subtitle="3.5+ years across legal-tech research, academic NLP, fintech, and full-stack development"
      />

      <div className="relative timeline-line pl-8 space-y-5">
        {experience.map((job, i) => {
          const isOpen = expanded === i;
          return (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative"
            >
              <div className="absolute -left-8 top-8 w-4 h-4 rounded-full bg-accent border-4 border-surface z-10" />
              <motion.div
                whileHover={{ borderColor: "rgba(45,212,191,0.3)" }}
                className="section-card rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className="w-full text-left"
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-32 h-28 sm:h-auto shrink-0 overflow-hidden">
                      <img
                        src={job.image}
                        alt={job.company}
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>
                    <div className="flex-1 p-5 flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 text-accent text-xs font-medium">
                          <Briefcase size={12} />
                          {job.period}
                        </div>
                        <h3 className="font-display text-xl font-semibold mt-1">
                          {job.title}
                        </h3>
                        <p className="text-muted text-sm mt-0.5">
                          {job.company} · {job.location}
                        </p>
                      </div>
                      <ChevronDown
                        size={20}
                        className={`text-muted shrink-0 transition-transform mt-1 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </div>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <ul className="px-5 pb-5 space-y-2 border-t border-border pt-4">
                        {job.bullets.map((bullet) => (
                          <li
                            key={bullet.slice(0, 50)}
                            className="text-muted text-sm leading-relaxed flex gap-2"
                          >
                            <span className="text-accent mt-1 shrink-0">▸</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
