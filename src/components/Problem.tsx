import { COMPLIANCE_LENSES, PROBLEM_CARDS } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function Problem() {
  return (
    <section id="problem" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Problem overview"
          title="Regulated clinical software cannot just be deployed."
          description="Clinical programming workflows operate on CDISC SDTM and ADaM data and produce Tables, Listings, and Figures that support regulatory decisions. An AI SaaS that touches this surface inherits decades of expectations: documented intent, qualified behavior, traceable changes, and durable audit evidence — plus a new set of risks unique to large language models."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEM_CARDS.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-lg border border-navy-100 bg-white p-6 shadow-card transition hover:border-navy-200"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent-50 text-accent-700">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-navy-900">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-700">
                {body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {COMPLIANCE_LENSES.map(({ icon: Icon, title, signal, body }) => (
            <article
              key={title}
              className="rounded-lg border border-navy-100 bg-navy-50/70 p-5"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-md bg-navy-900 text-white">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="text-sm font-semibold text-navy-900">
                  {title}
                </h3>
              </div>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-navy-900">
                {signal}
              </p>
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
