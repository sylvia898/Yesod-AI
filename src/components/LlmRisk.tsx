import { LLM_RISKS } from "../data/content";
import { RiskCard } from "./RiskCard";
import { SectionHeading } from "./SectionHeading";

export function LlmRisk() {
  return (
    <section id="llm-risk" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <SectionHeading
          eyebrow="LLM-specific validation complexity"
          title="Each AI risk needs a control and an evidence artifact."
          description="The right posture is evidence-driven: identify the LLM failure mode, explain why it matters for clinical programming, define the control, and show what evidence the platform produces."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {LLM_RISKS.map((risk) => (
            <RiskCard key={risk.title} risk={risk} />
          ))}
        </div>
      </div>
    </section>
  );
}

