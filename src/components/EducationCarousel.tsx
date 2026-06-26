import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";
import { useState } from "react";
import type { Education } from "../data/portfolio";

type Props = {
  items: Education[];
};

export function EducationCarousel({ items }: Props) {
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const next = () => {
    setFlipped(false);
    setActive((a) => (a + 1) % items.length);
  };
  const prev = () => {
    setFlipped(false);
    setActive((a) => (a - 1 + items.length) % items.length);
  };

  const edu = items[active];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-display font-semibold text-lg flex items-center gap-2">
          <GraduationCap size={20} className="text-accent" />
          Education
        </h3>
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="p-2 rounded-lg border border-border hover:border-accent/50 hover:text-accent transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            className="p-2 rounded-lg border border-border hover:border-accent/50 hover:text-accent transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <motion.div
        key={edu.school}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="perspective-[1200px]"
      >
        <motion.button
          onClick={() => setFlipped(!flipped)}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative w-full h-[320px] cursor-pointer text-left"
        >
          {/* Front */}
          <div
            className="absolute inset-0 section-card rounded-2xl overflow-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="relative h-40">
              <img
                src={edu.campusImage ?? edu.image}
                alt={edu.school}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/40 to-transparent" />
              <img
                src={edu.image}
                alt={`${edu.school} logo`}
                className="absolute bottom-3 left-4 h-12 max-w-[120px] w-auto rounded-lg object-contain bg-white/95 px-2 py-1 shadow-lg"
              />
            </div>
            <div className="p-5">
              <p className="font-display font-semibold text-lg">{edu.degree}</p>
              <p className="text-accent text-sm mt-1">{edu.school}</p>
              <p className="text-muted text-xs mt-2">
                {edu.period} · {edu.location}
              </p>
              <p className="text-xs text-muted mt-3">Click to flip for details →</p>
            </div>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 section-card rounded-2xl overflow-hidden border-accent/30"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            {edu.campusImage && (
              <img
                src={edu.campusImage}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-15"
                aria-hidden
              />
            )}
            <div className="absolute inset-0 bg-surface-card/90" />
            <div className="relative p-6 flex flex-col justify-center h-full">
              <img
                src={edu.image}
                alt={`${edu.school} logo`}
                className="h-10 w-auto max-w-[140px] object-contain mb-3"
              />
              <p className="text-accent text-sm font-medium">{edu.school}</p>
              <p className="font-display font-semibold text-xl mt-1">{edu.degree}</p>
              <p className="text-muted text-sm mt-3 leading-relaxed">{edu.detail}</p>
              {edu.highlights && (
                <ul className="mt-4 space-y-2">
                  {edu.highlights.map((h) => (
                    <li key={h} className="text-xs text-muted flex gap-2">
                      <span className="text-accent">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}
              <p className="text-[10px] text-muted mt-4">Click to flip back</p>
            </div>
          </div>
        </motion.button>
      </motion.div>

      <div className="flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setFlipped(false);
              setActive(i);
            }}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "w-8 bg-accent" : "w-2 bg-border"
            }`}
            aria-label={`Education ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
