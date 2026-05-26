import { LLM_RISKS } from "../data/content";
import { RiskCard } from "./RiskCard";
import { SectionHeading } from "./SectionHeading";

export function LlmRisk() {
  return (
    <section id="llm-risk" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <SectionHeading
          eyebrow="Question 3 · LLM validation complexity"
          title="Yes — LLMs add a second control plane on top of IQ/OQ/PQ."
          description="Traditional CSV assumes deterministic, frozen software. LLMs are neither: outputs vary, prompts evolve, providers update models, and retrieval context shifts. Each failure mode below is paired with a concrete product control and the evidence artifact the platform must produce — turning AI risk into a managed surface rather than an open question."
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

