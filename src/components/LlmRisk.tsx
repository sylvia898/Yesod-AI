import { LLM_RISKS } from "../data/content";
import { SectionHeading } from "./SectionHeading";

const impactStyles: Record<string, string> = {
  High: "border-[#12317B] text-[#12317B]",
  Medium: "border-[#2061AB] text-[#2061AB]",
  Low: "border-[#2488D0] text-[#2488D0]",
};

export function LlmRisk() {
  return (
    <section id="llm-risk" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <SectionHeading
          eyebrow="LLM-specific validation complexity"
          title="The risks an LLM workflow introduces — and how each is controlled."
          description="Validating a deterministic SAS macro and validating an LLM-backed pipeline are not the same problem. The cards below are the working risk register we would maintain per release."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {LLM_RISKS.map(({ icon: Icon, title, impact, description, mitigation }) => (
            <article
              key={title}
              className="flex h-full flex-col rounded-card border border-[rgba(32,97,171,0.18)] bg-white p-6 shadow-card transition hover:border-[#2488D0]/60"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(32,97,171,0.18)] text-[#2061AB]">
                  <Icon className="h-5 w-5" />
                </span>
                <span
                  className={`inline-flex items-center rounded-full border bg-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] ${impactStyles[impact]}`}
                >
                  {impact}
                </span>
              </div>
              <h3 className="mt-4 text-[16px] font-semibold text-[#12317B]">
                {title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-[#040404]">
                {description}
              </p>
              <div className="mt-4 rounded-lg border border-[rgba(32,97,171,0.18)] bg-white p-3 text-[13px] leading-[1.55] text-[#040404]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2488D0]">
                  Mitigation
                </p>
                <p className="mt-1">{mitigation}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
