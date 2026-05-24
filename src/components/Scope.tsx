import type { ReactNode } from "react";
import { CheckCircle2, Clock } from "lucide-react";
import { DEFER, MUST_HAVE } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function Scope() {
  return (
    <section id="scope" className="bg-navy-50/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Tradeoffs & MVP scope"
          title="What to validate now, and what to defer without losing customer trust."
          description="The goal at MVP is credibility, not completeness. A small set of controls — done well and documented — beats a sprawling, half-built compliance surface."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Column
            tone="primary"
            icon={<CheckCircle2 className="h-5 w-5" />}
            title="Must-have for MVP"
            items={MUST_HAVE}
          />
          <Column
            tone="muted"
            icon={<Clock className="h-5 w-5" />}
            title="Defer until later"
            items={DEFER}
          />
        </div>
      </div>
    </section>
  );
}

function Column({
  title,
  items,
  tone,
  icon,
}: {
  title: string;
  items: string[];
  tone: "primary" | "muted";
  icon: ReactNode;
}) {
  const headerTone =
    tone === "primary"
      ? "bg-navy-900 text-white"
      : "bg-navy-100 text-navy-800";
  return (
    <article className="overflow-hidden rounded-lg border border-navy-100 bg-white shadow-card">
      <header
        className={`flex items-center gap-3 px-6 py-4 ${headerTone}`}
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/15">
          {icon}
        </span>
        <h3 className="text-sm font-semibold uppercase">
          {title}
        </h3>
      </header>
      <ul className="divide-y divide-navy-100">
        {items.map((i) => (
          <li
            key={i}
            className="flex items-start gap-3 px-6 py-3 text-sm text-navy-800"
          >
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent-500" />
            {i}
          </li>
        ))}
      </ul>
    </article>
  );
}
