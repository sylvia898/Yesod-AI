import { CheckCircle2, Clock, FileCheck2 } from "lucide-react";
import { VALIDATION_PACKAGE_GROUPS } from "../data/content";
import { SectionHeading } from "./SectionHeading";

const icons = [CheckCircle2, FileCheck2, Clock];
const borders = ["border-[#12317B]", "border-[#2061AB]", "border-[#2488D0]"];
const text = ["text-[#12317B]", "text-[#2061AB]", "text-[#2488D0]"];

export function ValidationPackage() {
  return (
    <section id="package" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <SectionHeading
          eyebrow="Question 5 · Minimum Viable Validation Package"
          title="Build validation-ready primitives now. Execute formal qualification when the use case requires it."
          description="An MVP cannot claim it is fully validated, but it can ship the controls, records, and structures that make later IQ/OQ/PQ execution practical. The three columns below are the proposed scope: what to build in V1, what to design now and execute later, and what to defer until a sponsor or regulatory trigger demands it."
        />

        <div className="mt-8 rounded-card border-l-4 border-[#2488D0] bg-white p-5 shadow-card">
          <p className="text-[14px] leading-[1.6] text-[#040404]">
            <span className="font-semibold text-[#12317B]">
              Important message:
            </span>{" "}
            do not claim the product is fully validated before protocols are
            actually executed and signed. Say "validation-ready" or
            "GxP-aligned primitives" until the evidence exists.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {VALIDATION_PACKAGE_GROUPS.map((group, index) => {
            const Icon = icons[index];
            return (
              <article
                key={group.title}
                className={`flex h-full flex-col overflow-hidden rounded-card border-2 bg-white shadow-card ${borders[index]}`}
              >
                <header className="border-b border-[rgba(32,97,171,0.18)] px-6 py-5">
                  <div className={`flex items-center gap-3 ${text[index]}`}>
                    <span
                      className={`inline-flex h-9 w-9 items-center justify-center rounded-md border ${borders[index]}`}
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-[16px] font-semibold">
                      {group.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-[13px] leading-[1.55] text-[#040404]">
                    {group.intent}
                  </p>
                </header>
                <ul className="flex-1 divide-y divide-[rgba(18,49,123,0.16)]">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 px-6 py-3 text-[14px] leading-[1.6] text-[#040404]"
                    >
                      <span
                        className={`mt-2 h-1.5 w-1.5 flex-none rounded-full ${
                          index === 0
                            ? "bg-[#12317B]"
                            : index === 1
                              ? "bg-[#2061AB]"
                              : "bg-[#2488D0]"
                        }`}
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
