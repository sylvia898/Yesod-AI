import { WHY_CARDS } from "../data/content";
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
      </div>
    </section>
  );
}
