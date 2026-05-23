import { ROADMAP } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function Roadmap() {
  return (
    <section id="roadmap" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Implementation roadmap"
          title="Build the validation surface progressively, not in a single shock."
          description="Each phase is sized to be deliverable without halting product work. The point is to compound credibility — every phase is something a customer or auditor can verify."
        />

        <ol className="relative mt-12 space-y-6 border-l border-navy-200 pl-6">
          {ROADMAP.map((phase, idx) => (
            <li key={phase.id} className="relative">
              <span className="absolute -left-[34px] flex h-6 w-6 items-center justify-center rounded-full border-2 border-accent-500 bg-white text-[11px] font-semibold text-accent-700">
                {idx}
              </span>
              <article className="rounded-lg border border-navy-100 bg-white p-6 shadow-card">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold text-navy-900">
                    {phase.title}
                  </h3>
                  <p className="text-xs font-semibold uppercase text-accent-700">
                    {phase.horizon}
                  </p>
                </div>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {phase.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-2 text-sm leading-relaxed text-navy-700"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent-500" />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
