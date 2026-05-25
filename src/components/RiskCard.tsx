import type { LlmRisk as LlmRiskItem } from "../data/content";

export function RiskCard({ risk }: { risk: LlmRiskItem }) {
  const Icon = risk.icon;

  return (
    <article className="flex h-full flex-col rounded-card border border-[rgba(32,97,171,0.18)] bg-white p-6 shadow-card transition hover:border-[#2488D0]/60">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-[rgba(32,97,171,0.18)] text-[#2061AB]">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2488D0]">
            Risk
          </p>
          <h3 className="mt-1 text-[16px] font-semibold leading-tight text-[#12317B]">
            {risk.title}
          </h3>
        </div>
      </div>

      <dl className="mt-5 grid flex-1 gap-3">
        <Field label="Risk" value={risk.risk} />
        <Field label="Why it matters" value={risk.why} />
        <Field label="Control" value={risk.control} strong />
        <Field label="Evidence produced" value={risk.evidence} />
      </dl>
    </article>
  );
}

function Field({
  label,
  value,
  strong = false,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="rounded-lg border border-[rgba(32,97,171,0.18)] bg-white p-3">
      <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2488D0]">
        {label}
      </dt>
      <dd
        className={`mt-1 text-[13px] leading-[1.55] ${
          strong ? "font-medium text-[#12317B]" : "text-[#040404]"
        }`}
      >
        {value}
      </dd>
    </div>
  );
}

