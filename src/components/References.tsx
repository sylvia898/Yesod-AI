import { ExternalLink } from "lucide-react";
import { REFERENCES } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function References() {
  return (
    <section id="references" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <SectionHeading
          eyebrow="References"
          title="Sources to add to the final brief."
          description="Placeholder categories with official links to be inserted before the presentation."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REFERENCES.map((group) => (
            <article
              key={group.category}
              className="rounded-card border border-[rgba(32,97,171,0.18)] bg-white p-6 shadow-card"
            >
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#2488D0]">
                {group.category}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item.title}
                    className="rounded-lg border border-dashed border-[rgba(32,97,171,0.30)] p-3"
                  >
                    <div className="flex items-start gap-2 text-[14px] font-medium text-[#12317B]">
                      <ExternalLink className="mt-0.5 h-4 w-4 flex-none text-[#2061AB]" />
                      <span>{item.title}</span>
                    </div>
                    <p className="mt-1 pl-6 text-[12px] italic text-[#040404]/70">
                      {item.note}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
