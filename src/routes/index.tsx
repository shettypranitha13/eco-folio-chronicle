import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, GraduationCap, Hash, IdCard, Landmark, Sprout, User } from "lucide-react";
import heroImage from "@/assets/hero-nature.jpg";
import { FloatingLeaves } from "@/components/FloatingLeaves";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Environmental Studies E-Portfolio | Student Learning Journal" },
      {
        name: "description",
        content:
          "A student e-portfolio for Environmental Studies covering learning, awareness, sustainability and environmental responsibility.",
      },
      { property: "og:title", content: "Environmental Studies E-Portfolio" },
      {
        property: "og:description",
        content: "Learning, Awareness, Sustainability & Environmental Responsibility.",
      },
    ],
  }),
  component: Index,
});

const details = [
  { icon: User, label: "Name", value: profile.name },
  { icon: IdCard, label: "Class", value: profile.className },
  { icon: Hash, label: "Roll Number", value: profile.rollNumber },
  { icon: GraduationCap, label: "Department", value: profile.department },
  { icon: Landmark, label: "College", value: profile.college },
];

function Index() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-36">
        <img
          src={heroImage}
          alt="Illustrated misty green mountains, forest and river"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-70 dark:opacity-25"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-soft)" }}
          aria-hidden
        />
        <FloatingLeaves />

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <span className="glass text-primary inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase">
                <Sprout size={14} /> Student E-Portfolio
              </span>
              <h1 className="mt-5 text-4xl leading-[1.05] font-bold sm:text-6xl">
                Environmental Studies <span className="eco-gradient-text">E-Portfolio</span>
              </h1>
              <p className="text-muted-foreground mt-4 max-w-xl text-lg">
                Learning, Awareness, Sustainability &amp; Environmental Responsibility
              </p>
              <p className="text-muted-foreground mt-4 max-w-xl text-sm leading-relaxed">
                Welcome! This portfolio brings together my coursework, assignments, practical
                activities and reflections from the Environmental Studies programme — documenting
                how I learned to observe, question and protect the natural world around me.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="mt-8 grid gap-3 sm:grid-cols-2">
                {details.map((d) => (
                  <div key={d.label} className="glass flex items-center gap-3 rounded-2xl p-3">
                    <span className="bg-primary/10 text-primary grid h-10 w-10 shrink-0 place-items-center rounded-xl">
                      <d.icon size={18} />
                    </span>
                    <div className="min-w-0">
                      <dt className="text-muted-foreground text-[11px] tracking-wide uppercase">
                        {d.label}
                      </dt>
                      <dd className="truncate text-sm font-semibold">{d.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.2}>
              <a
                href="#highlights"
                className="bg-primary text-primary-foreground mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
              >
                Explore Portfolio <ArrowRight size={16} />
              </a>
            </Reveal>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="justify-self-center"
          >
            <div className="animate-bob relative">
              <div
                className="absolute -inset-6 rounded-full blur-2xl"
                style={{ background: "var(--gradient-eco)", opacity: 0.25 }}
                aria-hidden
              />
              <ProfilePhoto />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="highlights" className="mx-auto max-w-6xl px-5 py-16">
        <Reveal>
          <h2 className="text-center text-3xl font-bold sm:text-4xl">Inside this portfolio</h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-2xl text-center">
            Six sections documenting the full Environmental Studies journey.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { to: "/about", title: "About Me", text: "Profile, interests, goals and values." },
            {
              to: "/subjects",
              title: "Subject Overview",
              text: "Objectives, outcomes and 12 core topics.",
            },
            {
              to: "/assignments",
              title: "Assignments",
              text: "A gallery of submitted coursework.",
            },
            {
              to: "/portfolio",
              title: "Portfolio Overview",
              text: "Statistics, timeline and reflection.",
            },
          ].map((c, i) => (
            <Reveal key={c.to} delay={i * 0.08}>
              <Link to={c.to} className="glass lift block h-full rounded-3xl p-6">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{c.text}</p>
                <span className="text-primary mt-4 inline-flex items-center gap-1 text-sm font-medium">
                  View <ArrowRight size={14} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
