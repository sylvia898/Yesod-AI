import { DRIFT_CONTROLS } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function Drift() {
  return (
    <section id="drift" className="bg-navy-50/60">
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
  );
}
