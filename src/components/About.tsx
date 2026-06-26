import { motion } from "framer-motion";
import { about, education, personal } from "../data/portfolio";
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
        </div>
        <div className="md:col-span-2 space-y-4">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="section-card rounded-xl overflow-hidden"
            >
              <div className="h-28 overflow-hidden">
                <img
                  src={edu.image}
                  alt={edu.school}
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
              <div className="p-5">
                <p className="font-medium">{edu.degree}</p>
                <p className="text-accent text-sm mt-1">{edu.school}</p>
                <p className="text-muted text-sm mt-2">{edu.period}</p>
                <p className="text-muted text-sm">{edu.location}</p>
                <p className="text-sm mt-2 text-accent/80 font-medium">
                  {edu.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
