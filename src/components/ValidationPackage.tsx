import { CheckCircle2 } from "lucide-react";
import { VALIDATION_PACKAGE } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function ValidationPackage() {
  return (
    <section id="package" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <SectionHeading
          eyebrow="Minimum viable validation package"
          title="The evidence binder a pharma QA team expects on day one of an audit."
          description="This is the smallest credible set of artifacts a Yesod customer would want before letting the platform touch a regulated deliverable. Each item is owned by a specific function and updated under change control."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALIDATION_PACKAGE.map((item) => (
            <article
              key={item.title}
              className="flex items-start gap-3 rounded-card border border-[rgba(32,97,171,0.18)] bg-white p-6 shadow-card"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#2061AB]" />
              <div>
                <h3 className="text-[15px] font-semibold text-[#12317B]">
                  {item.title}
                </h3>
                <p className="mt-1 text-[14px] leading-[1.6] text-[#040404]">
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
