import { DRIFT_CONTROLS, LLM_RISKS } from "../data/content";
import { SectionHeading } from "./SectionHeading";

const impactStyles: Record<string, string> = {
  High: "bg-red-50 text-red-800 ring-red-200",
  Medium: "bg-amber-50 text-amber-800 ring-amber-200",
  Low: "bg-emerald-50 text-emerald-800 ring-emerald-200",
};

export function LlmRiskMatrix() {
  return (
    <>
      <section id="llm-risk" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            eyebrow="LLM-specific validation complexity"
            title="The risks an LLM workflow introduces — and how each is controlled."
            description="Validating a deterministic SAS macro and validating an LLM-backed pipeline are not the same problem. The cards below are the working risk register we would maintain per release."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {LLM_RISKS.map(({ icon: Icon, title, impact, description, mitigation }) => (
              <article
                key={title}
                className="flex h-full flex-col rounded-lg border border-navy-100 bg-white p-5 shadow-card"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent-50 text-accent-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase ring-1 ${impactStyles[impact]}`}
                  >
                    {impact}
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-navy-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700">
                  {description}
                </p>
                <div className="mt-4 rounded-lg bg-navy-50 p-3 text-xs leading-relaxed text-navy-800">
                  <p className="text-[10px] font-semibold uppercase text-accent-700">
                    Mitigation
                  </p>
                  <p className="mt-1">{mitigation}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="drift" className="border-t border-navy-100 bg-navy-50/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            eyebrow="Model drift and upstream API updates"
            title="Drift is the quiet failure mode. Treat upstream changes like code changes."
            description="Foundation model providers update, deprecate, and re-tune models on their own schedule. A validated system has to keep behavior stable in spite of that, with clear re-validation gates when behavior must shift."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DRIFT_CONTROLS.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="rounded-lg border border-navy-100 bg-white p-5 shadow-card"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900 text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-navy-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
