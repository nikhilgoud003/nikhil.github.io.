import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personal } from "../data/portfolio";
import { Section, SectionHeading } from "./Section";

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        title="Get In Touch"
        subtitle="Let's discuss research collaborations, ML engineering roles, or interesting problems"
      />

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {[
            { icon: MapPin, label: "Location", value: personal.address },
            {
              icon: Phone,
              label: "Phone",
              value: personal.phone,
              href: `tel:${personal.phone.replace(/\D/g, "")}`,
            },
            {
              icon: Mail,
              label: "Email",
              value: personal.email,
              href: `mailto:${personal.email}`,
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ x: 4 }}
              className="flex items-start gap-4 section-card rounded-xl p-5"
            >
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                <item.icon size={18} />
              </div>
              <div>
                <p className="text-sm text-muted">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="font-medium hover:text-accent transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="font-medium">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-card rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80)",
              backgroundSize: "cover",
            }}
          />
          <div className="relative">
            <h3 className="font-display text-2xl font-bold">{personal.name}</h3>
            <p className="text-muted mt-2">Applied NLP & ML Research Engineer</p>
            <p className="text-muted text-sm mt-1">{personal.location}</p>
          </div>

          <div className="relative flex flex-wrap gap-3 mt-8">
            <motion.a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-surface font-medium text-sm"
            >
              <FaLinkedin size={16} /> LinkedIn
            </motion.a>
            <motion.a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border hover:border-accent/50 text-sm"
            >
              <FaGithub size={16} /> GitHub
            </motion.a>
            <motion.a
              href={`mailto:${personal.email}`}
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border hover:border-accent/50 text-sm"
            >
              <Send size={16} /> Email Me
            </motion.a>
          </div>
        </motion.div>
      </div>

      <footer className="mt-20 pt-8 border-t border-border text-center text-muted text-sm">
        <p>
          © {new Date().getFullYear()} {personal.name}. Built with React + Vite.
        </p>
      </footer>
    </Section>
  );
}
