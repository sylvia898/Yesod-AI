import { ExternalLink } from "lucide-react";
import { REFERENCES } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function References() {
  return (
    <section id="references" className="border-t border-navy-100 bg-navy-50/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="References"
          title="Sources to add to the final brief."
          description="Placeholder categories with official links to be inserted before the presentation."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REFERENCES.map((group) => (
            <article
              key={group.category}
              className="rounded-lg border border-navy-100 bg-white p-6 shadow-card"
            >
              <h3 className="text-sm font-semibold uppercase text-accent-700">
                {group.category}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item.title}
                    className="rounded-lg border border-dashed border-navy-200 p-3"
                  >
                    <div className="flex items-start gap-2 text-sm font-medium text-navy-900">
                      <ExternalLink className="mt-0.5 h-4 w-4 flex-none text-navy-400" />
                      <span>{item.title}</span>
                    </div>
                    <p className="mt-1 pl-6 text-xs italic text-navy-500">
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
