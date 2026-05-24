type Props = {
  title: string;
  decision: string;
  reason: string;
  risk: string;
  mitigation: string;
};

export function TradeoffCard({
  title,
  decision,
  reason,
  risk,
  mitigation,
}: Props) {
  return (
    <article className="flex h-full flex-col rounded-card border border-[rgba(32,97,171,0.18)] bg-white p-6 shadow-card transition hover:border-[#2488D0]/60">
      <h3 className="text-[15px] font-semibold text-[#12317B]">{title}</h3>
      <dl className="mt-4 space-y-3">
        <Row label="Decision" body={decision} tone="primary" />
        <Row label="Reason" body={reason} />
        <Row label="Risk" body={risk} tone="warn" />
        <Row label="Mitigation" body={mitigation} tone="primary" />
      </dl>
    </article>
  );
}

function Row({
  label,
  body,
  tone = "default",
}: {
  label: string;
  body: string;
  tone?: "default" | "primary" | "warn";
}) {
  const labelTone =
    tone === "warn"
      ? "text-[#12317B]"
      : tone === "primary"
      ? "text-[#2488D0]"
      : "text-[#2061AB]";
  const bar =
    tone === "warn"
      ? "bg-[#12317B]"
      : tone === "primary"
      ? "bg-[#2488D0]"
      : "bg-[#2061AB]";
  return (
    <div className="grid grid-cols-[88px_1fr] items-start gap-3">
      <div className="flex items-center gap-2 pt-0.5">
        <span className={`h-3 w-[3px] rounded-full ${bar}`} aria-hidden />
        <dt
          className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${labelTone}`}
        >
          {label}
        </dt>
      </div>
      <dd className="text-[12px] leading-[1.55] text-[#040404]">{body}</dd>
    </div>
  );
}
