import { COMPLIANCE_LENSES, PROBLEM_CARDS } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function Problem() {
  return (
    <section id="problem" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <SectionHeading
          eyebrow="Problem overview"
          title="Regulated clinical software cannot just be deployed."
          description="Clinical programming workflows operate on CDISC SDTM and ADaM data and produce Tables, Listings, and Figures that support regulatory decisions. An AI SaaS that touches this surface inherits decades of expectations: documented intent, qualified behavior, traceable changes, and durable audit evidence — plus a new set of risks unique to large language models."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEM_CARDS.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-card border border-[rgba(32,97,171,0.18)] bg-white p-7 shadow-card transition hover:border-[#2488D0]/60"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(32,97,171,0.18)] text-[#2061AB]">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[18px] font-semibold text-[#12317B]">
                {title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-[#040404]">
                {body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {COMPLIANCE_LENSES.map(({ icon: Icon, title, signal, body }) => (
            <article
              key={title}
              className="rounded-card border border-[rgba(32,97,171,0.18)] bg-white p-6 shadow-card"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-md border border-[#2488D0] text-[#2488D0]">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="text-[16px] font-semibold text-[#12317B]">
                  {title}
                </h3>
              </div>
              <p className="mt-4 text-[14px] font-semibold leading-[1.6] text-[#12317B]">
                {signal}
              </p>
              <p className="mt-2 text-[14px] leading-[1.6] text-[#040404]">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
