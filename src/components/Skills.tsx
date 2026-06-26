import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { certifications, skillCategories } from "../data/portfolio";
import { Section, SectionHeading } from "./Section";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | "all">("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const cats =
      activeCategory === "all"
        ? skillCategories
        : skillCategories.filter((c) => c.id === activeCategory);

    if (!search.trim()) return cats;

    const q = search.toLowerCase();
    return cats
      .map((cat) => ({
        ...cat,
        skills: cat.skills.filter((s) => s.toLowerCase().includes(q)),
      }))
      .filter((cat) => cat.skills.length > 0);
  }, [activeCategory, search]);

  const totalSkills = skillCategories.reduce((n, c) => n + c.skills.length, 0);

  return (
    <Section id="skills" className="bg-surface-elevated/50">
      <SectionHeading
        title="Technical Skills"
        subtitle={`${totalSkills}+ technologies across NLP research, GenAI, data engineering, and cloud`}
      />

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1 max-w-sm">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Search skills..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl section-card text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 bg-transparent"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-3 py-1.5 rounded-full text-xs transition-all ${
              activeCategory === "all"
                ? "bg-accent text-surface font-medium"
                : "section-card hover:border-accent/30"
            }`}
          >
            All
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-xs transition-all ${
                activeCategory === cat.id
                  ? "bg-accent text-surface font-medium"
                  : "section-card hover:border-accent/30"
              }`}
            >
              {cat.icon} {cat.title}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="section-card rounded-xl p-6 hover:border-accent/30 transition-colors group"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">{cat.icon}</span>
              <h3 className="font-display font-semibold text-lg group-hover:text-accent transition-colors">
                {cat.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {cat.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-border text-muted hover:border-accent/40 hover:text-accent cursor-default transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3 justify-center">
        {certifications.map((cert) => (
          <span
            key={cert}
            className="text-xs px-4 py-2 rounded-full border border-accent/20 bg-accent/5 text-accent"
          >
            🏅 {cert}
          </span>
        ))}
      </div>
    </Section>
  );
}
