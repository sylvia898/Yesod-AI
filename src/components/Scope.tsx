import type { ReactNode } from "react";
import { CheckCircle2, Clock } from "lucide-react";
import { DEFER, MUST_HAVE } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function Scope() {
  return (
    <section id="scope" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <SectionHeading
          eyebrow="Tradeoffs & MVP scope"
          title="What to build now, and what to defer without overclaiming validation status."
          description="The goal at MVP is credibility, not completeness. Ship the validation-ready primitives that make regulated outputs traceable, while clearly separating prepared artifacts from signed qualification evidence."
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
        <div className="mt-8 rounded-card border-l-4 border-[#2061AB] bg-white p-5 shadow-card">
          <p className="text-[14px] leading-[1.6] text-[#040404]">
            <span className="font-semibold text-[#12317B]">Positioning:</span>{" "}
            Yesod can be validation-ready and GxP-aligned before it is fully
            validated. Full validation status belongs to executed, reviewed, and
            signed protocols for a defined intended use.
          </p>
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
  const headerBorder =
    tone === "primary"
      ? "border-[#12317B]"
      : "border-[#2488D0]";
  const headerText =
    tone === "primary" ? "text-[#12317B]" : "text-[#2488D0]";
  const dotColor =
    tone === "primary" ? "bg-[#12317B]" : "bg-[#2488D0]";
  return (
    <article className="overflow-hidden rounded-card border border-[rgba(32,97,171,0.18)] bg-white shadow-card">
      <header
        className={`flex items-center gap-3 border-b-2 bg-white px-6 py-5 ${headerBorder}`}
      >
        <span
          className={`inline-flex h-9 w-9 items-center justify-center rounded-md border ${headerBorder} ${headerText}`}
        >
          {icon}
        </span>
        <h3 className={`text-[14px] font-semibold uppercase tracking-[0.14em] ${headerText}`}>
          {title}
        </h3>
      </header>
      <ul className="divide-y divide-[rgba(18,49,123,0.16)]">
        {items.map((i) => (
          <li
            key={i}
            className="flex items-start gap-3 px-6 py-3 text-[14px] leading-[1.6] text-[#040404]"
          >
            <span className={`mt-2 h-1.5 w-1.5 flex-none rounded-full ${dotColor}`} />
            {i}
          </li>
        ))}
      </ul>
    </article>
  );
}
