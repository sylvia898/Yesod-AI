import { WHY_CARDS } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function WhyYesod() {
  return (
    <section id="why-yesod" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <SectionHeading
          eyebrow="Why this matters to Yesod AI"
          title="Validation is the bridge from good demo to trusted clinical workflow."
          description="Pharma and CRO buyers do not just evaluate the product. They evaluate whether regulated outputs are traceable, reviewable, reproducible, and controlled over time."
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
