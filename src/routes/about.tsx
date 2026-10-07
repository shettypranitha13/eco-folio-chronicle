import { createFileRoute } from "@tanstack/react-router";
import {
  Compass,
  Heart,
  Mail,
  Mountain,
  Palette,
  Sparkles,
  Target,
  User,
  GraduationCap,
  Landmark,
  CalendarDays,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { aboutText, profile } from "@/lib/portfolio-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Me | Environmental Studies E-Portfolio" },
      {
        name: "description",
        content:
          "Student profile, interests, career goals, environmental values and hobbies within the Environmental Studies e-portfolio.",
      },
      { property: "og:title", content: "About Me | Environmental Studies E-Portfolio" },
      {
        property: "og:description",
        content: "Profile, interests, career goals and environmental values.",
      },
    ],
  }),
  component: About,
});

const cards = [
  {
    icon: Compass,
    title: "My Interests",
    text: "I am passionate about technology, creativity, and environmental sustainability. I enjoy coding, designing, painting, and exploring innovative ideas that create positive social impact. I am particularly interested in e-waste awareness and sustainable practices, as I believe technology should not only make life easier but also contribute towards a cleaner and greener future.",
  },
  {
    icon: Target,
    title: "Career Goals",
    text: "[Write your career goals here — e.g. becoming an environmental analyst, working in renewable energy or pursuing higher studies in sustainability.]",
  },
  {
    icon: Mountain,
    title: "Environmental Values",
    text: "[Write the values you stand for — conservation, responsible consumption, respect for biodiversity and climate justice.]",
  },
  {
    icon: Palette,
    title: "Hobbies",
    text: "[Write your hobbies here — e.g. gardening, trekking, sketching nature, reading and cycling.]",
  },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Me"
        title="A little about the person behind this portfolio"
        subtitle="Profile details, personal story, interests and the values that guide my environmental learning."
      />

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-6 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div className="glass rounded-3xl p-7 text-center">
            <div className="bg-secondary mx-auto grid h-32 w-32 place-items-center overflow-hidden rounded-full">
              {profile.photo ? (
                <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" />
              ) : (
                <User size={38} className="text-muted-foreground" />
              )}
            </div>
            <h2 className="mt-4 text-xl font-bold">{profile.name}</h2>
            <p className="text-muted-foreground text-sm">[ Profile Photo Placeholder ]</p>

            <ul className="mt-6 grid gap-3 text-left text-sm">
              {[
                { icon: GraduationCap, label: "Department", value: profile.department },
                { icon: Landmark, label: "College", value: profile.college },
                { icon: CalendarDays, label: "Semester", value: profile.semester },
                { icon: Mail, label: "Email", value: profile.email },
              ].map((r) => (
                <li key={r.label} className="bg-secondary/50 flex items-center gap-3 rounded-2xl p-3">
                  <span className="bg-primary/10 text-primary grid h-9 w-9 shrink-0 place-items-center rounded-xl">
                    <r.icon size={16} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-muted-foreground text-[11px] uppercase">{r.label}</p>
                    <p className="truncate font-medium">{r.value}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 text-left">
              <p className="text-muted-foreground mb-2 text-[11px] tracking-wide uppercase">
                Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((s) => (
                  <span
                    key={s}
                    className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid content-start gap-6">
          <Reveal delay={0.1}>
            <article className="glass rounded-3xl p-7">
              <h2 className="flex items-center gap-2 text-2xl font-bold">
                <Sparkles size={20} className="text-primary" /> About Me
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">{aboutText}</p>
            </article>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={0.15 + i * 0.07}>
                <div className="glass lift h-full rounded-3xl p-6">
                  <span className="bg-primary/10 text-primary grid h-11 w-11 place-items-center rounded-2xl">
                    <c.icon size={20} />
                  </span>
                  <h3 className="mt-4 font-semibold">{c.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="bg-primary/10 flex items-center gap-3 rounded-3xl p-5 text-sm">
              <Heart size={18} className="text-primary shrink-0" />
              <p className="text-muted-foreground">
                Every placeholder on this page can be edited in{" "}
                <code className="text-foreground">src/lib/portfolio-data.ts</code>.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
