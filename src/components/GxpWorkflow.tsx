import { GXP_PILLARS } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function GxpWorkflow() {
  return (
    <section id="gxp" className="border-t border-navy-100 bg-navy-50/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="GxP in clinical data workflows"
          title="Eight pillars that turn a clinical AI workflow into a regulated system."
          description="Good Clinical Practice and Good Laboratory Practice expectations translate into eight concrete engineering capabilities that must be designed into the product, not bolted on at audit time."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GXP_PILLARS.map(({ icon: Icon, title, body }) => (
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
