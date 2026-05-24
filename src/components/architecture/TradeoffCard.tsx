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
    <article className="flex h-full flex-col rounded-xl border border-brand-line bg-white p-5 transition hover:border-brand-primary/60 hover:shadow-[0_2px_18px_-8px_rgba(32,97,171,0.25)]">
      <h3 className="text-sm font-semibold text-brand-black">{title}</h3>
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
      ? "text-brand-navy"
      : tone === "primary"
      ? "text-brand-deep"
      : "text-brand-black/60";
  const bar =
    tone === "warn"
      ? "bg-brand-navy"
      : tone === "primary"
      ? "bg-brand-primary"
      : "bg-brand-line";
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
      <dd className="text-xs leading-relaxed text-brand-black/85">{body}</dd>
    </div>
  );
}
