import { Link } from "@tanstack/react-router";
import { ArrowUp, Github, Leaf, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-border bg-secondary/40 relative mt-24 border-t">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-primary text-primary-foreground grid h-9 w-9 place-items-center rounded-xl">
              <Leaf size={18} />
            </span>
            <span className="font-display font-semibold">Environmental Studies E-Portfolio</span>
          </div>
          <p className="text-muted-foreground mt-3 text-sm">
            A record of learning, awareness, sustainability and environmental responsibility.
          </p>
        </div>

        <nav className="text-sm" aria-label="Footer navigation">
          <h3 className="mb-3 text-sm font-semibold">Explore</h3>
          <ul className="text-muted-foreground grid gap-2">
            <li>
              <Link to="/about" className="hover:text-primary">
                About Me
              </Link>
            </li>
            <li>
              <Link to="/subjects" className="hover:text-primary">
                Subject Overview
              </Link>
            </li>
            <li>
              <Link to="/assignments" className="hover:text-primary">
                Assignments
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-primary">
                Portfolio Overview
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className="mb-3 text-sm font-semibold">Connect</h3>
          <div className="flex gap-3">
            <a
              href={profile.socials.github}
              aria-label="GitHub"
              className="glass lift grid h-11 w-11 place-items-center rounded-full"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.socials.linkedin}
              aria-label="LinkedIn"
              className="glass lift grid h-11 w-11 place-items-center rounded-full"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="glass lift grid h-11 w-11 place-items-center rounded-full"
            >
              <Mail size={18} />
            </a>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-primary text-primary-foreground mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90"
          >
            <ArrowUp size={16} /> Back to top
          </button>
        </div>
      </div>

      <div className="border-border text-muted-foreground border-t px-5 py-5 text-center text-xs">
        Designed by {profile.name} · Environmental Studies E-Portfolio · © {year}
      </div>
    </footer>
  );
}
