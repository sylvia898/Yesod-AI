import { DRIFT_CONTROLS } from "../data/content";
import { DriftMatrix } from "./DriftMatrix";
import { SectionHeading } from "./SectionHeading";

export function Drift() {
  return (
    <section id="drift" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <SectionHeading
          eyebrow="Model drift and upstream API updates"
          title="Drift is the quiet failure mode. Treat material upstream changes as controlled changes."
          description="Foundation model providers update, deprecate, and re-tune models on their own schedule. A validation-ready system keeps behavior stable where possible and creates a documented re-validation decision when behavior can materially change."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DRIFT_CONTROLS.map(({ icon: Icon, title, body }) => (
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
        <DriftMatrix />
      </div>
    </section>
  );
}
