import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <header className="relative overflow-hidden pt-28 pb-14">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-soft)" }}
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{title}</h1>
          <p className="text-muted-foreground mt-4 max-w-2xl text-base sm:text-lg">{subtitle}</p>
        </Reveal>
      </div>
      <LeafDivider />
    </header>
  );
}

export function LeafDivider() {
  return (
    <svg
      className="text-background absolute right-0 bottom-0 left-0 w-full"
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      aria-hidden
      style={{ height: 56 }}
    >
      <path
        fill="currentColor"
        d="M0 60c180-40 320 20 520 8s300-58 500-40 260 52 420 40v42H0z"
      />
    </svg>
  );
}
