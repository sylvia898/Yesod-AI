import { WHY_CARDS } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function WhyYesod() {
  return (
    <section id="why-yesod" className="bg-navy-50/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Why this matters to Yesod AI"
          title="Validation is the bridge from interesting demo to enterprise contract."
          description="Pharma and CRO buyers do not just evaluate the product — they evaluate the evidence package behind it. The strategic value of investing early is compounding."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {WHY_CARDS.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="flex gap-4 rounded-lg border border-navy-100 bg-white p-6 shadow-card"
            >
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-navy-900 text-white">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-navy-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700">
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
