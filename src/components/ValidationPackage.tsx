import { CheckCircle2 } from "lucide-react";
import { VALIDATION_PACKAGE } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function ValidationPackage() {
  return (
    <section id="package" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Minimum viable validation package"
          title="The evidence binder a pharma QA team expects on day one of an audit."
          description="This is the smallest credible set of artifacts a Yesod customer would want before letting the platform touch a regulated deliverable. Each item is owned by a specific function and updated under change control."
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {VALIDATION_PACKAGE.map((item) => (
            <article
              key={item.title}
              className="flex items-start gap-3 rounded-lg border border-navy-100 bg-white p-5 shadow-card"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-accent-600" />
              <div>
                <h3 className="text-sm font-semibold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-navy-700">
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
