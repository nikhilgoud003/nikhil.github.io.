import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import type { Project } from "../data/portfolio";
import { PacerDeepDive } from "./PacerDeepDive";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: Props) {
  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[70]"
          />
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            className="fixed inset-4 md:inset-auto md:top-[5%] md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-3xl md:max-h-[85vh] z-[80] section-card rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="relative h-48 md:h-56 shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/60 to-transparent" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
              {project.highlight && (
                <span className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full bg-accent/90 text-surface font-medium">
                  {project.highlight}
                </span>
              )}
              <div className="absolute bottom-4 left-6 right-6">
                <h3 className="font-display text-2xl font-bold">{project.title}</h3>
                {project.subtitle && (
                  <p className="text-muted text-sm mt-1">{project.subtitle}</p>
                )}
              </div>
            </div>

            <div className="overflow-y-auto p-6 flex-1">
              {project.metrics && (
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="text-center p-3 rounded-xl bg-white/5 border border-border"
                    >
                      <p className="font-display text-xl font-bold text-accent">
                        {m.value}
                      </p>
                      <p className="text-[10px] text-muted mt-1">{m.label}</p>
                    </div>
                  ))}
                </div>
              )}

              <p className="text-muted leading-relaxed">{project.description}</p>

              <ul className="mt-4 space-y-2">
                {project.bullets.map((b) => (
                  <li key={b.slice(0, 40)} className="flex gap-2 text-sm text-muted">
                    <span className="text-accent shrink-0">▸</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.period && (
                <p className="text-xs text-muted mt-4 flex items-center gap-1">
                  <ExternalLink size={12} /> {project.period}
                </p>
              )}

              {project.hasDeepDive && <PacerDeepDive />}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
