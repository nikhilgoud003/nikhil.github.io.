import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { achievements, personal, publications } from "../data/portfolio";
import { Section, SectionHeading } from "./Section";
import { TiltCard } from "./TiltCard";

export function Research() {
  return (
    <Section id="research" className="bg-surface-elevated/50">
      <SectionHeading
        title="Research & Achievements"
        subtitle="Published papers, hackathon wins, leadership, and certifications"
      />

      <h3 className="font-display text-xl font-semibold mb-5">Publications</h3>
      <div className="grid md:grid-cols-2 gap-5 mb-12">
        {publications.map((pub, i) => (
          <TiltCard key={pub.citation.slice(0, 30)}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="section-card rounded-xl overflow-hidden h-full"
            >
              <div className="h-32 overflow-hidden">
                <img
                  src={pub.image}
                  alt={pub.status}
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
              <div className="p-5">
                <span
                  className={`text-xs px-2.5 py-1 rounded-full ${
                    pub.status === "Published"
                      ? "bg-green-500/15 text-green-400"
                      : "bg-yellow-500/15 text-yellow-400"
                  }`}
                >
                  {pub.status}
                </span>
                <p className="text-muted text-sm mt-3 leading-relaxed italic">
                  {pub.citation}
                </p>
              </div>
            </motion.div>
          </TiltCard>
        ))}
      </div>

      <a
        href={personal.scholar}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 mb-10 text-accent text-sm hover:underline"
      >
        Google Scholar Profile <ExternalLink size={14} />
      </a>

      <h3 className="font-display text-xl font-semibold mb-5">
        Highlights & Leadership
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="section-card rounded-xl overflow-hidden group cursor-default"
          >
            <div className="h-28 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
              />
            </div>
            <div className="p-4">
              <p className="text-accent text-[10px] font-medium uppercase tracking-wider">
                {item.period}
              </p>
              <h4 className="font-semibold mt-1 group-hover:text-accent transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-muted">{item.org}</p>
              <p className="text-xs text-muted mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
