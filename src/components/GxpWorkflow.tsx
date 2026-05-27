import { GXP_PILLARS } from "../data/content";
import { SectionHeading } from "./SectionHeading";
import { TraceabilityExample } from "./TraceabilityExample";

export function GxpWorkflow() {
  return (
    <section id="gxp" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <SectionHeading
          eyebrow="Question 2 · GxP in clinical data workflows"
          title="Eight pillars that turn a clinical AI workflow into a regulated system."
          description="GxP — primarily GCP for trial data, GLP for analytical work — expects documented intent, qualified behavior, attributable actions, and reconstructable outputs. For SDTM, ADaM, and TLF workflows, that translates into eight engineering capabilities. The example below walks a single output backward through every pillar."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GXP_PILLARS.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-card border border-[rgba(32,97,171,0.18)] bg-white p-6 shadow-card transition hover:border-[#2488D0]/60"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(32,97,171,0.18)] text-[#2061AB]">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[16px] font-semibold text-[#12317B]">
                {title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-[#040404]">
                {body}
              </p>
            </article>
          ))}
        </div>
        <TraceabilityExample />
      </div>
    </section>
  );
}
