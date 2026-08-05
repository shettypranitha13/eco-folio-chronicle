import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  CheckCircle2,
  CloudSun,
  Droplets,
  Factory,
  FlaskConical,
  Gavel,
  Globe2,
  Leaf,
  LifeBuoy,
  Recycle,
  ShieldCheck,
  Sun,
  Target,
  Trash2,
  TreePine,
  Wind,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/subjects")({
  head: () => ({
    meta: [
      { title: "Subject Overview | Environmental Studies E-Portfolio" },
      {
        name: "description",
        content:
          "Course introduction, objectives, learning outcomes and the twelve core topics covered in Environmental Studies.",
      },
      { property: "og:title", content: "Subject Overview | Environmental Studies E-Portfolio" },
      {
        property: "og:description",
        content: "Objectives, learning outcomes and core topics of Environmental Studies.",
      },
    ],
  }),
  component: Subjects,
});

const objectives = [
  {
    icon: Globe2,
    title: "Understand the environment",
    text: "Build a scientific understanding of ecosystems and the natural processes that sustain life.",
  },
  {
    icon: FlaskConical,
    title: "Investigate problems",
    text: "Study pollution, resource depletion and climate change through data and field observation.",
  },
  {
    icon: ShieldCheck,
    title: "Know the law",
    text: "Learn the national and international frameworks that protect environmental resources.",
  },
  {
    icon: Target,
    title: "Act sustainably",
    text: "Translate classroom learning into practical, responsible everyday decisions.",
  },
];

const outcomes = [
  "Explain the structure and function of natural ecosystems.",
  "Identify the causes and consequences of major forms of pollution.",
  "Evaluate sustainable alternatives for energy, water and waste.",
  "Interpret environmental data collected through field surveys.",
  "Describe key environmental laws, treaties and policies.",
  "Communicate environmental issues clearly through reports and presentations.",
];

const topics = [
  { icon: TreePine, name: "Ecosystem" },
  { icon: Leaf, name: "Biodiversity" },
  { icon: Globe2, name: "Natural Resources" },
  { icon: CloudSun, name: "Climate Change" },
  { icon: Recycle, name: "Sustainable Development" },
  { icon: Factory, name: "Pollution" },
  { icon: Trash2, name: "Waste Management" },
  { icon: Sun, name: "Renewable Energy" },
  { icon: Gavel, name: "Environmental Laws" },
  { icon: Droplets, name: "Water Conservation" },
  { icon: Wind, name: "Air Pollution" },
  { icon: LifeBuoy, name: "Disaster Management" },
];

function Subjects() {
  return (
    <>
      <PageHeader
        eyebrow="Subject Overview"
        title="Environmental Studies at a glance"
        subtitle="An educational dashboard of the course: what it covers, what it aims to achieve and what I take away from it."
      />

      <section className="mx-auto max-w-6xl px-5 py-6">
        <Reveal>
          <article className="glass rounded-3xl p-7">
            <h2 className="flex items-center gap-2 text-2xl font-bold">
              <BookOpen size={20} className="text-primary" /> Subject Introduction
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Environmental Studies is an interdisciplinary subject that examines the relationship
              between people and the natural world. It draws on ecology, geography, chemistry,
              economics and law to explain how ecosystems work, how human activity disturbs them and
              how societies can develop without exhausting the resources they depend on. The course
              combines classroom theory with field visits, surveys and project work so that
              awareness turns into responsible action.
            </p>
          </article>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8">
        <Reveal>
          <h2 className="text-2xl font-bold sm:text-3xl">Course Objectives</h2>
        </Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {objectives.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.07}>
              <div className="glass lift h-full rounded-3xl p-6">
                <span className="bg-primary/10 text-primary grid h-11 w-11 place-items-center rounded-2xl">
                  <o.icon size={20} />
                </span>
                <h3 className="mt-4 font-semibold">{o.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{o.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8">
        <Reveal>
          <h2 className="text-2xl font-bold sm:text-3xl">Learning Outcomes</h2>
        </Reveal>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {outcomes.map((o, i) => (
            <Reveal key={o} delay={i * 0.05}>
              <li className="glass flex items-start gap-3 rounded-2xl p-4 text-sm">
                <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">{o}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8">
        <Reveal>
          <h2 className="text-2xl font-bold sm:text-3xl">Topics Covered</h2>
          <p className="text-muted-foreground mt-2 text-sm">Twelve core units studied this term.</p>
        </Reveal>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {topics.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.04}>
              <div className="glass lift flex h-full flex-col items-center gap-3 rounded-3xl p-5 text-center">
                <span className="bg-primary/10 text-primary grid h-12 w-12 place-items-center rounded-2xl">
                  <t.icon size={22} />
                </span>
                <p className="text-sm font-semibold">{t.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
