import { motion } from "framer-motion";
import { Download, Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personal, stats } from "../data/portfolio";
import { AnimatedCounter } from "./AnimatedCounter";
import { FloatingOrbs } from "./FloatingOrbs";
import { Typewriter } from "./Typewriter";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      <FloatingOrbs />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1600&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/90 to-surface" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-20 grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 text-accent text-sm font-medium tracking-widest uppercase mb-4 px-3 py-1 rounded-full border border-accent/30 bg-accent/5"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Open to opportunities
          </motion.p>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            {personal.name.split(" ")[0]}
            <br />
            <span className="gradient-text">{personal.name.split(" ").slice(1).join(" ")}</span>
          </h1>

          <p className="mt-6 text-xl md:text-2xl min-h-[2.5rem]">
            <Typewriter texts={personal.roles} />
          </p>

          <p className="mt-6 text-muted text-lg leading-relaxed max-w-xl">
            {personal.tagline}
          </p>

          <p className="mt-4 flex items-center gap-2 text-muted text-sm">
            <MapPin size={16} className="text-accent" />
            {personal.location}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-full bg-accent text-surface font-semibold hover:shadow-lg hover:shadow-accent/25 transition-shadow"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-full border border-border hover:border-accent/50 transition-colors"
            >
              View Projects
            </motion.a>
            <motion.a
              href={personal.resume}
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-full border border-accent/30 text-accent hover:bg-accent/10 transition-colors flex items-center gap-2"
            >
              <Download size={16} /> Resume
            </motion.a>
          </div>

          <div className="mt-8 flex gap-3">
            {[
              { href: personal.linkedin, icon: FaLinkedin, label: "LinkedIn" },
              { href: personal.github, icon: FaGithub, label: "GitHub" },
              { href: `mailto:${personal.email}`, icon: Mail, label: "Email" },
              { href: `tel:${personal.phone.replace(/\D/g, "")}`, icon: Phone, label: "Phone" },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={label === "LinkedIn" || label === "GitHub" ? "_blank" : undefined}
                rel="noreferrer"
                whileHover={{ y: -3 }}
                className="p-3 rounded-xl border border-border hover:border-accent/50 hover:text-accent hover:bg-accent/5 transition-all"
                aria-label={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col items-center gap-8"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-accent/50 via-blue-500/30 to-purple-500/30 blur-xl" />
            <img
              src={personal.profileImage}
              alt={personal.name}
              className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover object-top border-2 border-accent/40 shadow-2xl shadow-accent/10"
            />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-lg">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4, borderColor: "rgba(45,212,191,0.4)" }}
                className="section-card rounded-xl p-4 text-center cursor-default"
              >
                <p className="font-display text-2xl font-bold text-accent">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-[10px] text-muted mt-1 leading-tight">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
