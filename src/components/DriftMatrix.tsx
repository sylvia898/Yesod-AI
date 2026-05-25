import { AlertTriangle } from "lucide-react";
import { DRIFT_TRIGGER_MATRIX } from "../data/content";

export function DriftMatrix() {
  return (
    <div className="mt-10">
      <div className="overflow-hidden rounded-card border border-[rgba(32,97,171,0.18)] bg-white shadow-card">
        <div className="border-b border-[rgba(32,97,171,0.18)] px-6 py-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2488D0]">
            Drift trigger matrix
          </p>
          <h3 className="mt-2 text-[22px] font-semibold text-[#12317B]">
            Treat upstream model changes like controlled software changes.
          </h3>
        </div>

        <div className="hidden lg:block">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[rgba(18,49,123,0.16)] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#12317B]">
                <th className="px-6 py-4">Trigger</th>
                <th className="px-6 py-4">Detection method</th>
                <th className="px-6 py-4">Required action</th>
                <th className="px-6 py-4">Evidence produced</th>
              </tr>
            </thead>
            <tbody>
              {DRIFT_TRIGGER_MATRIX.map((row) => (
                <tr
                  key={row.trigger}
                  className="border-b border-[rgba(18,49,123,0.16)] align-top last:border-b-0"
                >
                  <td className="px-6 py-5 text-[14px] font-semibold text-[#12317B]">
                    {row.trigger}
                  </td>
                  <td className="px-6 py-5 text-[14px] leading-[1.6] text-[#040404]">
                    {row.detection}
                  </td>
                  <td className="px-6 py-5 text-[14px] leading-[1.6] text-[#040404]">
                    {row.action}
                  </td>
                  <td className="px-6 py-5 text-[14px] leading-[1.6] text-[#040404]">
                    {row.evidence}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid gap-4 p-5 lg:hidden">
          {DRIFT_TRIGGER_MATRIX.map((row) => (
            <article
              key={row.trigger}
              className="rounded-lg border border-[rgba(32,97,171,0.18)] bg-white p-4"
            >
              <h4 className="text-[15px] font-semibold text-[#12317B]">
                {row.trigger}
              </h4>
              <MobileField label="Detection" value={row.detection} />
              <MobileField label="Required action" value={row.action} />
              <MobileField label="Evidence" value={row.evidence} />
            </article>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-start gap-3 rounded-card border-l-4 border-[#2488D0] bg-white p-5 shadow-card">
        <AlertTriangle
          className="mt-0.5 h-5 w-5 flex-none text-[#2488D0]"
          aria-hidden
        />
        <p className="text-[14px] leading-[1.6] text-[#040404]">
          <span className="font-semibold text-[#12317B]">Conclusion:</span>{" "}
          Upstream model changes should be treated like controlled software
          changes when they can affect validated behavior.
        </p>
      </div>
    </div>
  );
}

function MobileField({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-3">
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2488D0]">
        {label}
      </p>
      <p className="mt-1 text-[13px] leading-[1.55] text-[#040404]">{value}</p>
    </div>
  );
}

