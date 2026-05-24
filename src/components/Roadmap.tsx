import { ROADMAP } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function Roadmap() {
  return (
    <section id="roadmap" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <SectionHeading
          eyebrow="Implementation roadmap"
          title="Build the validation surface progressively, not in a single shock."
          description="Each phase is sized to be deliverable without halting product work. The point is to compound credibility — every phase is something a customer or auditor can verify."
        />

        <ol className="relative mt-12 space-y-6 border-l-2 border-[#2061AB] pl-8">
          {ROADMAP.map((phase, idx) => (
            <li key={phase.id} className="relative">
              <span className="absolute -left-[44px] flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#2488D0] bg-white text-[11px] font-semibold text-[#2488D0]">
                {idx}
              </span>
              <article className="rounded-card border border-[rgba(32,97,171,0.18)] bg-white p-6 shadow-card">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-[18px] font-semibold text-[#12317B]">
                    {phase.title}
                  </h3>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2488D0]">
                    {phase.horizon}
                  </p>
                </div>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {phase.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-2 text-[14px] leading-[1.6] text-[#040404]"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#2488D0]" />
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
