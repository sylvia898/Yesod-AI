import { IQ_OQ_PQ_ROWS } from "../data/content";
import { SectionHeading } from "./SectionHeading";

const phaseBadge: Record<string, string> = {
  IQ: "border-[#12317B] text-[#12317B]",
  OQ: "border-[#2061AB] text-[#2061AB]",
  PQ: "border-[#2488D0] text-[#2488D0]",
};

export function IqOqPqTable() {
  return (
    <section id="iq-oq-pq" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <SectionHeading
          eyebrow="Question 1 · Qualification framework"
          title="IQ, OQ, and PQ — restated for a cloud-native AI SaaS."
          description="The qualification spine of GxP software still applies, but the evidence changes when infrastructure is ephemeral and the system uses an LLM. The table maps each phase to its traditional artifact, its cloud-native AI equivalent, and the evidence the platform captures automatically."
        />

        <div className="mt-12 hidden overflow-hidden rounded-card border border-[rgba(32,97,171,0.18)] bg-white shadow-card lg:block">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[rgba(18,49,123,0.16)] bg-white text-[11px] font-semibold uppercase tracking-[0.14em] text-[#12317B]">
                <th className="px-6 py-4">Phase</th>
                <th className="px-6 py-4">Intent</th>
                <th className="px-6 py-4">Traditional validation</th>
                <th className="px-6 py-4">Cloud-native AI SaaS</th>
                <th className="px-6 py-4">Evidence captured</th>
              </tr>
            </thead>
            <tbody>
              {IQ_OQ_PQ_ROWS.map((r) => (
                <tr
                  key={r.phase}
                  className="border-b border-[rgba(18,49,123,0.16)] align-top last:border-b-0"
                >
                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex items-center rounded-md border bg-white px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${phaseBadge[r.phase]}`}
                    >
                      {r.phase}
                    </span>
                    <div className="mt-2 text-[14px] font-semibold text-[#12317B]">
                      {r.name}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-[14px] leading-[1.6] text-[#040404]">
                    {r.intent}
                  </td>
                  <td className="px-6 py-5 text-[14px] leading-[1.6] text-[#040404]">
                    {r.traditional}
                  </td>
                  <td className="px-6 py-5 text-[14px] font-medium leading-[1.6] text-[#040404]">
                    {r.cloudAi}
                  </td>
                  <td className="px-6 py-5 text-[14px] leading-[1.6] text-[#040404]">
                    {r.evidence}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid gap-5 lg:hidden">
          {IQ_OQ_PQ_ROWS.map((r) => (
            <article
              key={r.phase}
              className="rounded-card border border-[rgba(32,97,171,0.18)] bg-white p-6 shadow-card"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`inline-flex items-center rounded-md border bg-white px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${phaseBadge[r.phase]}`}
                >
                  {r.phase}
                </span>
                <h3 className="text-[16px] font-semibold text-[#12317B]">
                  {r.name}
                </h3>
              </div>
              <dl className="mt-4 grid gap-3 text-[14px]">
                <Field label="Intent" value={r.intent} />
                <Field label="Traditional validation" value={r.traditional} />
                <Field label="Cloud-native AI SaaS" value={r.cloudAi} />
                <Field label="Evidence" value={r.evidence} />
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2488D0]">
        {label}
      </dt>
      <dd className="mt-1 leading-[1.6] text-[#040404]">{value}</dd>
    </div>
  );
}
