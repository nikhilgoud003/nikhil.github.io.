import { motion } from "framer-motion";

const orbs = [
  { size: 320, x: "10%", y: "15%", color: "rgba(45,212,191,0.15)", delay: 0 },
  { size: 240, x: "75%", y: "10%", color: "rgba(96,165,250,0.12)", delay: 2 },
  { size: 180, x: "60%", y: "60%", color: "rgba(167,139,250,0.1)", delay: 4 },
  { size: 140, x: "20%", y: "70%", color: "rgba(45,212,191,0.08)", delay: 1 },
];

export function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: orb.color,
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, -10, 5, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
