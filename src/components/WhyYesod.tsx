import { AlertOctagon, ArrowRight, MinusCircle, PlusCircle } from "lucide-react";
import {
  ADOPTION_GATES,
  COST_OF_INACTION,
  STABILITY_SCENARIOS,
  WHY_CARDS,
} from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function WhyYesod() {
  return (
    <section id="why-yesod" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <SectionHeading
          eyebrow="Strategic importance"
          title="Why validation readiness dictates Yesod's adoption and system stability."
          description="Two forces are at stake. Adoption: pharma, biotech, and CRO buyers will not promote a tool past sandbox without evidence that regulated outputs are reproducible and audit-defensible. Stability: without designed-in versioning, traceability, and drift control, every upstream model or prompt change silently invalidates the system's qualified state."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {WHY_CARDS.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="flex gap-4 rounded-card border border-[rgba(32,97,171,0.18)] bg-white p-7 shadow-card transition hover:border-[#2488D0]/60"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border border-[rgba(32,97,171,0.18)] text-[#2061AB]">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-[18px] font-semibold text-[#12317B]">
                  {title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.65] text-[#040404]">
                  {body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <AdoptionGatesSection />
        <StabilitySection />
        <InactionSection />
      </div>
    </section>
  );
}

function AdoptionGatesSection() {
  return (
    <div className="mt-20">
      <div className="max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2488D0]">
          Adoption axis · Where validation gates the deal
        </p>
        <h3 className="mt-3 text-[24px] font-semibold leading-tight text-[#12317B] sm:text-[28px]">
          Four gates between sandbox and production scale.
        </h3>
        <p className="mt-3 text-[15px] leading-[1.65] text-[#040404]">
          A clinical AI tool moves through predictable checkpoints. Each one has
          a decider, a question, and a hard requirement. Without designed-in
          validation primitives, most tools never clear gate 2.
        </p>
      </div>

      <ol className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {ADOPTION_GATES.map((gate, idx) => (
          <li key={gate.stage} className="relative flex h-full">
            <article className="flex h-full w-full flex-col rounded-card border border-[rgba(32,97,171,0.18)] bg-white p-5 shadow-card transition hover:border-[#2488D0]/60">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[#12317B] text-[11px] font-semibold text-[#12317B]">
                  {idx + 1}
                </span>
                {idx < ADOPTION_GATES.length - 1 ? (
                  <ArrowRight
                    className="hidden h-4 w-4 text-[#2061AB] xl:block"
                    aria-hidden
                  />
                ) : null}
              </div>
              <h4 className="mt-4 text-[15px] font-semibold leading-tight text-[#12317B]">
                {gate.stage}
              </h4>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2488D0]">
                {gate.decider}
              </p>
              <p className="mt-3 text-[13px] italic leading-[1.55] text-[#040404]">
                “{gate.question}”
              </p>
              <dl className="mt-4 space-y-3 text-[12px] leading-[1.55]">
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2061AB]">
                    Required
                  </dt>
                  <dd className="mt-1 text-[#040404]">{gate.required}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2061AB]">
                    Blocker
                  </dt>
                  <dd className="mt-1 text-[#040404]">{gate.blocker}</dd>
                </div>
              </dl>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}

function StabilitySection() {
  return (
    <div className="mt-20">
      <div className="max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2488D0]">
          Stability axis · How validated state decays without controls
        </p>
        <h3 className="mt-3 text-[24px] font-semibold leading-tight text-[#12317B] sm:text-[28px]">
          Three real triggers that invalidate qualification overnight.
        </h3>
        <p className="mt-3 text-[15px] leading-[1.65] text-[#040404]">
          These are not edge cases. They happen on a normal week of LLM
          development. The contrast shows what changes between a system that
          degrades silently and one where the change becomes a documented
          re-validation decision.
        </p>
      </div>

      <div className="mt-8 overflow-hidden rounded-card border border-[rgba(32,97,171,0.18)] bg-white shadow-card">
        <div className="hidden grid-cols-[1fr_1.1fr_1.1fr] gap-0 border-b border-[rgba(18,49,123,0.16)] bg-white px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#12317B] md:grid">
          <span>Trigger</span>
          <span className="text-[#040404]/70">Without controls</span>
          <span className="text-[#12317B]">With validation primitives</span>
        </div>
        <ul className="divide-y divide-[rgba(18,49,123,0.16)]">
          {STABILITY_SCENARIOS.map((s) => (
            <li
              key={s.trigger}
              className="grid gap-4 px-6 py-5 md:grid-cols-[1fr_1.1fr_1.1fr] md:gap-6"
            >
              <p className="text-[14px] font-semibold leading-[1.55] text-[#12317B]">
                {s.trigger}
              </p>
              <div className="flex gap-2">
                <MinusCircle
                  className="mt-0.5 h-4 w-4 flex-none text-[#040404]/55"
                  aria-hidden
                />
                <p className="text-[13px] leading-[1.6] text-[#040404]/75">
                  {s.without}
                </p>
              </div>
              <div className="flex gap-2">
                <PlusCircle
                  className="mt-0.5 h-4 w-4 flex-none text-[#2061AB]"
                  aria-hidden
                />
                <p className="text-[13px] leading-[1.6] text-[#040404]">
                  {s.withControls}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function InactionSection() {
  return (
    <div className="mt-20">
      <div className="rounded-card border-2 border-[#12317B] bg-white p-7 shadow-card">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border-2 border-[#12317B] text-[#12317B]">
            <AlertOctagon className="h-4 w-4" aria-hidden />
          </span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2488D0]">
              Cost of inaction
            </p>
            <h3 className="mt-1 text-[18px] font-semibold leading-tight text-[#12317B]">
              What happens if Yesod does not design validation in from V1.
            </h3>
          </div>
        </div>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {COST_OF_INACTION.map((c) => (
            <li
              key={c.area}
              className="rounded-lg border border-[rgba(32,97,171,0.18)] bg-white p-4"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2488D0]">
                {c.area}
              </p>
              <p className="mt-2 text-[13px] leading-[1.6] text-[#040404]">
                {c.consequence}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
