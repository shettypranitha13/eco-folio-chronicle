import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Leaf, Menu, X, Moon, Sun } from "lucide-react";
import { motion, useScroll, useSpring } from "motion/react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Me" },
  { to: "/subjects", label: "Subject Overview" },
  { to: "/assignments", label: "Assignments" },
  { to: "/portfolio", label: "Portfolio Overview" },
  { to: "/contact", label: "Contact" },
] as const;

function useTheme() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const stored = window.localStorage.getItem("eco-theme");
    const isDark = stored === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      window.localStorage.setItem("eco-theme", next ? "dark" : "light");
      return next;
    });
  };
  return { dark, toggle };
}

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { dark, toggle } = useTheme();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        className="bg-primary h-[3px] origin-left"
        style={{ scaleX: progress }}
        aria-hidden
      />
      <nav
        className={`transition-all duration-300 ${scrolled ? "glass" : "bg-transparent"}`}
        aria-label="Main navigation"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:flex lg:justify-between">
          <Link to="/" className="flex min-w-0 items-center gap-2">
            <span className="bg-primary text-primary-foreground grid h-9 w-9 shrink-0 place-items-center rounded-xl">
              <Leaf size={18} />
            </span>
            <span className="font-display truncate text-sm leading-tight font-semibold sm:text-base">
              Environmental Studies
              <span className="text-muted-foreground block text-[11px] font-normal">
                E-Portfolio
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "bg-secondary text-secondary-foreground" }}
                className="hover:bg-secondary/70 rounded-full px-3 py-2 text-sm font-medium transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <ThemeButton dark={dark} toggle={toggle} />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeButton dark={dark} toggle={toggle} />
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="border-border hover:bg-secondary grid h-10 w-10 shrink-0 place-items-center rounded-full border"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="glass mx-4 mb-3 grid gap-1 rounded-2xl p-3 lg:hidden">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "bg-secondary text-secondary-foreground" }}
                className="hover:bg-secondary/70 rounded-xl px-3 py-2 text-sm font-medium"
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

function ThemeButton({ dark, toggle }: { dark: boolean; toggle: () => void }) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="border-border hover:bg-secondary ml-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-colors"
    >
      {dark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
