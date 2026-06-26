import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
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
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {publications.map((pub, i) => (
          <TiltCard key={pub.title}>
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="section-card rounded-2xl overflow-hidden h-full group"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={pub.image}
                  alt={pub.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/30 to-transparent" />
                <span
                  className={`absolute top-4 left-4 text-xs px-3 py-1 rounded-full font-medium ${
                    pub.status === "Published"
                      ? "bg-green-500/90 text-white"
                      : "bg-yellow-500/90 text-black"
                  }`}
                >
                  {pub.status}
                </span>
                {pub.venue && (
                  <span className="absolute bottom-4 left-4 text-[10px] px-2 py-1 rounded-md bg-black/50 text-white backdrop-blur-sm flex items-center gap-1">
                    <FileText size={10} />
                    {pub.venue}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h4 className="font-display font-semibold leading-snug group-hover:text-accent transition-colors">
                  {pub.title}
                </h4>
                <p className="text-muted text-sm mt-2 leading-relaxed">
                  {pub.description}
                </p>
                <p className="text-muted text-xs mt-3 leading-relaxed italic border-t border-border pt-3">
                  {pub.citation}
                </p>
              </div>
            </motion.article>
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
