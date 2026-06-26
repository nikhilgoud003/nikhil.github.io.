import { motion } from "framer-motion";
import { about, education, personal } from "../data/portfolio";
import { EducationCarousel } from "./EducationCarousel";
import { Section, SectionHeading } from "./Section";

export function About() {
  return (
    <Section id="about">
      <SectionHeading title="About Me" subtitle={personal.summary} />
      <div className="grid md:grid-cols-5 gap-10 items-start">
        <div className="md:col-span-3 space-y-6">
          {about.split("\n\n").map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-muted text-lg leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-3 pt-4"
          >
            {[
              { label: "Research", value: "2 Papers" },
              { label: "Industry", value: "Visa · TCS" },
              { label: "Current", value: "GSU · SCALES" },
            ].map((item) => (
              <div
                key={item.label}
                className="section-card rounded-xl p-4 text-center hover:border-accent/30 transition-colors"
              >
                <p className="font-display font-bold text-accent">{item.value}</p>
                <p className="text-[10px] text-muted mt-1">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="md:col-span-2">
          <EducationCarousel items={education} />
        </div>
      </div>
    </Section>
  );
}
