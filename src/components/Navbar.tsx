import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "../data/portfolio";
import { useTheme } from "../hooks/useTheme";

type Props = {
  active: string;
};

export function Navbar({ active }: Props) {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 nav-blur border-b">
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo("home")}
          className="font-display font-bold text-xl text-accent tracking-wider"
        >
          NY
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                  active === link.id
                    ? "text-accent bg-accent/10"
                    : "text-muted hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-lg border border-border hover:bg-white/5 transition-colors"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg border border-border"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-surface-elevated px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg text-sm ${
                active === link.id ? "text-accent bg-accent/10" : "text-muted"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
