import { useState } from "react";
import { LLM_RISKS } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function LlmRisk() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = LLM_RISKS[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section id="llm-risk" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <SectionHeading
          eyebrow="Question 3 · LLM validation complexity"
          title="LLMs add a second control plane on top of IQ/OQ/PQ."
          description="Traditional Computer System Validation assumes deterministic, frozen software. LLMs are neither: outputs vary, prompts evolve, providers update models, and retrieval context shifts. Each failure mode below is paired with a concrete product control and the evidence artifact the platform must produce — turning AI risk into a managed surface rather than an open question."
        />

        <div
          role="tablist"
          aria-label="LLM failure modes"
          className="mt-12 flex flex-wrap gap-2"
        >
          {LLM_RISKS.map((risk, index) => {
            const Icon = risk.icon;
            const isActive = index === activeIndex;
            return (
              <button
                key={risk.title}
                role="tab"
                aria-selected={isActive}
                aria-controls="llm-risk-panel"
                id={`llm-risk-tab-${index}`}
                onClick={() => setActiveIndex(index)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2488D0] focus-visible:ring-offset-2 ${
                  isActive
                    ? "border-[#2488D0] bg-[#2488D0] text-white shadow-sm"
                    : "border-[rgba(32,97,171,0.18)] bg-white text-[#12317B] hover:border-[#2488D0]/60"
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden />
                <span>{risk.title}</span>
              </button>
            );
          })}
        </div>

        <div
          id="llm-risk-panel"
          role="tabpanel"
          aria-labelledby={`llm-risk-tab-${activeIndex}`}
          className="mt-6 rounded-card border border-[rgba(32,97,171,0.18)] bg-white p-6 shadow-card md:p-8"
        >
          <div className="flex items-start gap-3">
            <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-[rgba(32,97,171,0.18)] text-[#2061AB]">
              <ActiveIcon className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2488D0]">
                Failure mode
              </p>
              <h3 className="mt-1 text-[18px] font-semibold leading-tight text-[#12317B]">
                {active.title}
              </h3>
            </div>
          </div>

          <dl className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Field label="Risk" value={active.risk} />
            <Field label="Why it matters" value={active.why} />
            <Field label="Control" value={active.control} strong />
            <Field label="Evidence produced" value={active.evidence} />
          </dl>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  strong = false,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="rounded-lg border border-[rgba(32,97,171,0.18)] bg-white p-4">
      <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2488D0]">
        {label}
      </dt>
      <dd
        className={`mt-2 text-[13px] leading-[1.55] ${
          strong ? "font-medium text-[#12317B]" : "text-[#040404]"
        }`}
      >
        {value}
      </dd>
    </div>
  );
}
