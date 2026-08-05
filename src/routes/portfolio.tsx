import { createFileRoute } from "@tanstack/react-router";
import {
  BookMarked,
  ClipboardList,
  FlaskConical,
  FolderKanban,
  Globe2,
  HandHeart,
  Lightbulb,
  PenLine,
  Recycle,
  Search,
  Sparkles,
  Users,
} from "lucide-react";
import { Counter } from "@/components/Counter";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { reflectionText, stats } from "@/lib/portfolio-data";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio Overview | Environmental Studies E-Portfolio" },
      {
        name: "description",
        content:
          "Portfolio statistics, a learning-journey timeline, personal reflection and key takeaways from Environmental Studies.",
      },
      { property: "og:title", content: "Portfolio Overview | Environmental Studies E-Portfolio" },
      {
        property: "og:description",
        content: "Statistics, learning timeline, reflection and key takeaways.",
      },
    ],
  }),
  component: PortfolioOverview,
});

const statIcons = [ClipboardList, BookMarked, FlaskConical, FolderKanban];

const timeline = [
  {
    title: "Introduction",
    text: "First encounter with the scope of Environmental Studies and why it matters.",
  },
  {
    title: "Classroom Learning",
    text: "Lectures, discussions and case studies covering the twelve core topics.",
  },
  {
    title: "Assignments",
    text: "Twelve written and visual submissions applying theory to real situations.",
  },
  {
    title: "Practical Activities",
    text: "Field visits, surveys, waste audits and campus green initiatives.",
  },
  {
    title: "Final Reflection",
    text: "Consolidating the learning into habits and future commitments.",
  },
];

const takeaways = [
  { icon: Globe2, title: "Environmental Awareness" },
  { icon: Recycle, title: "Sustainable Practices" },
  { icon: Users, title: "Teamwork" },
  { icon: Search, title: "Research Skills" },
  { icon: Lightbulb, title: "Problem Solving" },
  { icon: HandHeart, title: "Social Responsibility" },
];

function PortfolioOverview() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio Overview"
        title="The whole journey, summarised"
        subtitle="Statistics, milestones, reflection and the skills this course left me with."
      />

      <section className="mx-auto max-w-6xl px-5 py-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => {
            const Icon = statIcons[i] ?? ClipboardList;
            return (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="glass lift rounded-3xl p-6 text-center">
                  <span className="bg-primary/10 text-primary mx-auto grid h-12 w-12 place-items-center rounded-2xl">
                    <Icon size={22} />
                  </span>
                  <p className="eco-gradient-text font-display mt-4 text-4xl font-bold">
                    <Counter value={s.value} />+
                  </p>
                  <p className="text-muted-foreground mt-1 text-sm">{s.label}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <Reveal>
          <h2 className="text-2xl font-bold sm:text-3xl">Learning Journey</h2>
        </Reveal>
        <ol className="border-border relative mt-8 grid gap-6 border-l pl-6 sm:pl-8">
          {timeline.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.07}>
              <li className="relative">
                <span className="bg-primary ring-background absolute top-5 -left-[34px] h-3.5 w-3.5 rounded-full ring-4 sm:-left-[42px]" />
                <div className="glass rounded-3xl p-5">
                  <p className="text-primary text-[11px] font-semibold tracking-widest uppercase">
                    Step {i + 1}
                  </p>
                  <h3 className="mt-1 font-semibold">{t.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{t.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-6">
        <Reveal>
          <article className="glass rounded-3xl p-7 sm:p-9">
            <h2 className="flex items-center gap-2 text-2xl font-bold">
              <PenLine size={20} className="text-primary" /> Reflection
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">{reflectionText}</p>
          </article>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <Reveal>
          <h2 className="flex items-center gap-2 text-2xl font-bold sm:text-3xl">
            <Sparkles size={22} className="text-primary" /> Key Takeaways
          </h2>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {takeaways.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.06}>
              <div className="glass lift flex h-full items-center gap-4 rounded-3xl p-5">
                <span className="bg-primary/10 text-primary grid h-11 w-11 shrink-0 place-items-center rounded-2xl">
                  <t.icon size={20} />
                </span>
                <p className="font-semibold">{t.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
