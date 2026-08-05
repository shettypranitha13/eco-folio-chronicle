import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Download, Eye } from "lucide-react";
import placeholderImg from "@/assets/assignment-placeholder.jpg";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { assignments } from "@/lib/portfolio-data";

export const Route = createFileRoute("/assignments")({
  head: () => ({
    meta: [
      { title: "Assignments | Environmental Studies E-Portfolio" },
      {
        name: "description",
        content:
          "A gallery of twelve Environmental Studies assignments with descriptions, submission dates and downloadable PDFs.",
      },
      { property: "og:title", content: "Assignments | Environmental Studies E-Portfolio" },
      {
        property: "og:description",
        content: "Twelve documented Environmental Studies assignments and submissions.",
      },
    ],
  }),
  component: Assignments,
});

function Assignments() {
  return (
    <>
      <PageHeader
        eyebrow="Assignments"
        title="Coursework gallery"
        subtitle="Every assignment submitted during the Environmental Studies course, with its brief, submission date and files."
      />

      <section className="mx-auto max-w-6xl px-5 py-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {assignments.map((a, i) => (
            <Reveal key={a.id} delay={(i % 3) * 0.08}>
              <article className="glass lift flex h-full flex-col overflow-hidden rounded-3xl">
                <div className="bg-secondary relative aspect-[16/10] overflow-hidden">
                  <img
                    src={placeholderImg}
                    alt={`Placeholder illustration for assignment ${a.id}`}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="bg-primary text-primary-foreground absolute top-3 left-3 rounded-full px-3 py-1 text-[11px] font-semibold">
                    Assignment {a.id}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="font-semibold">{a.title}</h2>
                  <p className="text-muted-foreground mt-2 flex-1 text-sm leading-relaxed">
                    {a.description}
                  </p>
                  <p className="text-muted-foreground mt-4 flex items-center gap-2 text-xs">
                    <CalendarDays size={14} /> Submitted: {a.date}
                  </p>
                  <div className="mt-4 flex gap-2">
                    <a
                      href={a.viewUrl}
                      className="bg-primary text-primary-foreground inline-flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold transition-opacity hover:opacity-90"
                    >
                      <Eye size={14} /> View
                    </a>
                    <a
                      href={a.pdfUrl}
                      className="border-border hover:bg-secondary inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border px-3 py-2 text-xs font-semibold transition-colors"
                    >
                      <Download size={14} /> PDF
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
