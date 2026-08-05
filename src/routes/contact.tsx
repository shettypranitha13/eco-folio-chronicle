import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/lib/portfolio-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Environmental Studies E-Portfolio" },
      {
        name: "description",
        content:
          "Get in touch about this Environmental Studies e-portfolio through the contact form, email or social profiles.",
      },
      { property: "og:title", content: "Contact | Environmental Studies E-Portfolio" },
      {
        property: "og:description",
        content: "Reach out about the Environmental Studies e-portfolio.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks! Your message has been noted.", {
      description: "This demo form does not send email yet.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  const field =
    "mt-1 w-full rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/40";

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about the environment"
        subtitle="Questions, feedback or collaboration ideas — send a message and I'll reply soon."
      />

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <form onSubmit={submit} className="glass rounded-3xl p-7">
            <h2 className="text-xl font-bold">Send a message</h2>
            <div className="mt-6 grid gap-4">
              <label className="block text-sm font-medium">
                Name
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className={field}
                />
              </label>
              <label className="block text-sm font-medium">
                Email
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className={field}
                />
              </label>
              <label className="block text-sm font-medium">
                Message
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Write your message..."
                  className={field}
                />
              </label>
              <button
                type="submit"
                className="bg-primary text-primary-foreground inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
              >
                <Send size={16} /> Send Message
              </button>
            </div>
          </form>
        </Reveal>

        <div className="grid content-start gap-6">
          <Reveal delay={0.1}>
            <div className="glass rounded-3xl p-7">
              <h2 className="text-xl font-bold">Find me online</h2>
              <div className="mt-5 grid gap-3">
                <a
                  href={profile.socials.github}
                  className="bg-secondary/50 hover:bg-secondary flex items-center gap-3 rounded-2xl p-4 text-sm font-medium transition-colors"
                >
                  <Github size={18} className="text-primary" /> GitHub
                </a>
                <a
                  href={profile.socials.linkedin}
                  className="bg-secondary/50 hover:bg-secondary flex items-center gap-3 rounded-2xl p-4 text-sm font-medium transition-colors"
                >
                  <Linkedin size={18} className="text-primary" /> LinkedIn
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="bg-secondary/50 hover:bg-secondary flex items-center gap-3 rounded-2xl p-4 text-sm font-medium transition-colors"
                >
                  <Mail size={18} className="text-primary" /> {profile.email}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="glass overflow-hidden rounded-3xl">
              <div className="bg-secondary/60 grid h-56 place-items-center text-center">
                <div className="text-muted-foreground">
                  <MapPin size={30} className="mx-auto" />
                  <p className="mt-2 text-sm">[ Google Maps Placeholder ]</p>
                  <p className="text-xs">Embed your college location map here</p>
                </div>
              </div>
              <p className="px-5 py-4 text-sm font-medium">{profile.college}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
