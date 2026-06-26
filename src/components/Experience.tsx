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

      <div className="relative timeline-line pl-8 space-y-6">
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
              <div className="absolute -left-8 top-10 w-4 h-4 rounded-full bg-accent border-4 border-surface z-10" />
              <motion.div
                whileHover={{ borderColor: "rgba(45,212,191,0.35)" }}
                className={`section-card rounded-2xl overflow-hidden transition-shadow ${
                  isOpen ? "shadow-lg shadow-accent/5 ring-1 ring-accent/20" : ""
                }`}
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className="w-full text-left"
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-44 h-36 lg:h-auto shrink-0 relative overflow-hidden group">
                      <img
                        src={job.image}
                        alt={job.company}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface-card/80 hidden lg:block" />
                    </div>
                    <div className="flex-1 p-5 lg:p-6">
                      <div className="flex items-start justify-between gap-4">
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
                          <p className="text-accent/90 text-sm mt-2 font-medium">
                            {job.summary}
                          </p>
                        </div>
                        <ChevronDown
                          size={20}
                          className={`text-muted shrink-0 transition-transform mt-1 ${isOpen ? "rotate-180 text-accent" : ""}`}
                        />
                      </div>

                      <p className="text-muted text-sm mt-3 leading-relaxed line-clamp-2 lg:line-clamp-none">
                        {job.context}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-3">
                        {job.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
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
                      <ul className="px-5 lg:px-6 pb-6 space-y-2.5 border-t border-border pt-4 mx-5 lg:mx-6">
                        {job.bullets.map((bullet) => (
                          <motion.li
                            key={bullet.slice(0, 50)}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-muted text-sm leading-relaxed flex gap-2"
                          >
                            <span className="text-accent mt-1 shrink-0">▸</span>
                            {bullet}
                          </motion.li>
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
