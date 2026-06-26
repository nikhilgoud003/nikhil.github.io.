import { useEffect, useState } from "react";

type Props = {
  texts: string[];
  speed?: number;
};

export function Typewriter({ texts, speed = 80 }: Props) {
  const [display, setDisplay] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (charIndex < current.length) {
            setDisplay(current.slice(0, charIndex + 1));
            setCharIndex((c) => c + 1);
          } else {
            setTimeout(() => setDeleting(true), 2000);
          }
        } else if (charIndex > 0) {
          setDisplay(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        } else {
          setDeleting(false);
          setTextIndex((i) => (i + 1) % texts.length);
        }
      },
      deleting ? speed / 2 : speed,
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts, speed]);

  return (
    <span className="gradient-text font-display font-semibold">
      {display}
      <span className="animate-pulse">|</span>
    </span>
  );
}
