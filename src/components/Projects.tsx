import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import {
  projectCategories,
  projects,
  type Project,
  type ProjectCategory,
} from "../data/portfolio";
import { ProjectModal } from "./ProjectModal";
import { Section, SectionHeading } from "./Section";
import { TiltCard } from "./TiltCard";

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.categories.includes(filter));

  const featured = projects.find((p) => p.featured);
  const showFeatured =
    featured &&
    (filter === "all" || featured.categories.includes(filter));

  return (
    <Section id="projects">
      <SectionHeading
        title="Projects"
        subtitle="Production systems, research pipelines, and hackathon wins — click any card to explore"
      />

      {showFeatured && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <TiltCard className="cursor-pointer">
            <button
              onClick={() => setSelected(featured)}
              className="w-full text-left section-card rounded-2xl overflow-hidden hover:border-accent/40 transition-colors group"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative h-56 md:h-auto min-h-[220px] overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface-card/90 hidden md:block" />
                  <span className="absolute top-4 left-4 flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-accent text-surface font-medium">
                    <Sparkles size={12} /> {featured.highlight}
                  </span>
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="font-display text-2xl font-bold group-hover:text-accent transition-colors">
                    {featured.title}
                  </h3>
                  <p className="text-accent/80 text-sm mt-1">{featured.subtitle}</p>
                  <p className="text-muted text-sm mt-3 leading-relaxed">
                    {featured.description}
                  </p>
                  {featured.metrics && (
                    <div className="flex gap-4 mt-4">
                      {featured.metrics.map((m) => (
                        <div key={m.label}>
                          <p className="font-display text-lg font-bold text-accent">
                            {m.value}
                          </p>
                          <p className="text-[10px] text-muted">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  <span className="mt-5 inline-flex items-center gap-2 text-accent text-sm font-medium">
                    Explore deep dive <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </button>
          </TiltCard>
        </motion.div>
      )}

      <div className="flex flex-wrap gap-2 mb-8">
        {projectCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              filter === cat.id
                ? "bg-accent text-surface font-medium shadow-lg shadow-accent/20"
                : "section-card hover:border-accent/30"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered
          .filter((p) => !p.featured)
          .map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
            >
              <TiltCard>
                <button
                  onClick={() => setSelected(project)}
                  className="w-full h-full text-left section-card rounded-xl overflow-hidden hover:border-accent/30 transition-all group"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-card to-transparent" />
                    {project.highlight && (
                      <span className="absolute top-3 left-3 text-[10px] px-2 py-0.5 rounded-full bg-black/60 text-accent backdrop-blur-sm">
                        {project.highlight}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold group-hover:text-accent transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-muted text-xs mt-2 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-[10px] text-muted">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              </TiltCard>
            </motion.div>
          ))}
      </motion.div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
