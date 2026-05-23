import { IQ_OQ_PQ_ROWS } from "../data/content";
import { SectionHeading } from "./SectionHeading";

const phaseColor: Record<string, string> = {
  IQ: "bg-navy-900 text-white",
  OQ: "bg-accent-600 text-white",
  PQ: "bg-navy-700 text-white",
};

export function IqOqPqTable() {
  return (
    <section id="iq-oq-pq" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Qualification framework"
          title="IQ, OQ, and PQ — restated for a cloud-native AI SaaS."
          description="The qualification spine of GxP software still applies, but the evidence you collect changes fundamentally when infrastructure is ephemeral and the system uses an LLM."
        />

        <div className="mt-12 hidden overflow-hidden rounded-lg border border-navy-100 bg-white shadow-card lg:block">
          <table className="w-full divide-y divide-navy-100 text-left text-sm">
            <thead className="bg-navy-50">
              <tr className="text-xs font-semibold uppercase text-navy-700">
                <th className="px-6 py-4">Phase</th>
                <th className="px-6 py-4">Intent</th>
                <th className="px-6 py-4">Traditional validation</th>
                <th className="px-6 py-4">Cloud-native AI SaaS</th>
                <th className="px-6 py-4">Evidence captured</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-100">
              {IQ_OQ_PQ_ROWS.map((r) => (
                <tr key={r.phase} className="align-top">
                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-semibold ${phaseColor[r.phase]}`}
                    >
                      {r.phase}
                    </span>
                    <div className="mt-2 text-sm font-semibold text-navy-900">
                      {r.name}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-navy-700">{r.intent}</td>
                  <td className="px-6 py-5 text-navy-700">{r.traditional}</td>
                  <td className="px-6 py-5 text-navy-900">{r.cloudAi}</td>
                  <td className="px-6 py-5 text-navy-700">{r.evidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid gap-5 lg:hidden">
          {IQ_OQ_PQ_ROWS.map((r) => (
            <article
              key={r.phase}
              className="rounded-lg border border-navy-100 bg-white p-6 shadow-card"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-semibold ${phaseColor[r.phase]}`}
                >
                  {r.phase}
                </span>
                <h3 className="text-base font-semibold text-navy-900">
                  {r.name}
                </h3>
              </div>
              <dl className="mt-4 grid gap-3 text-sm">
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
      <dt className="text-xs font-semibold uppercase text-accent-600">
        {label}
      </dt>
      <dd className="mt-1 text-navy-800">{value}</dd>
    </div>
  );
}
