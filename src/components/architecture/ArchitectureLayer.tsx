type Props = {
  step: number;
  title: string;
  capabilities: string[];
  complianceReason: string;
  isLast?: boolean;
};

export function ArchitectureLayer({
  step,
  title,
  capabilities,
  complianceReason,
  isLast = false,
}: Props) {
  return (
    <div className="relative">
      <div className="grid gap-0 rounded-xl border border-brand-line bg-white shadow-[0_1px_2px_rgba(18,49,123,0.04)] md:grid-cols-[180px_1fr_280px]">
        <div className="flex items-center gap-3 border-b border-brand-line bg-brand-soft px-5 py-4 md:border-b-0 md:border-r">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand-navy text-xs font-semibold text-white">
            {String(step).padStart(2, "0")}
          </span>
          <p className="text-sm font-semibold text-brand-black">{title}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2 px-5 py-4">
          {capabilities.map((c) => (
            <span
              key={c}
              className="inline-flex items-center rounded-md border border-brand-line bg-white px-2.5 py-1 text-xs font-medium text-brand-black"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="border-t border-brand-line bg-brand-tint/40 px-5 py-4 md:border-l md:border-t-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-deep">
            Compliance reason
          </p>
          <p className="mt-1 text-xs leading-relaxed text-brand-black/80">
            {complianceReason}
          </p>
        </div>
      </div>

      {!isLast ? (
        <div className="flex justify-center py-2" aria-hidden>
          <svg
            width="22"
            height="28"
            viewBox="0 0 22 28"
            className="text-brand-primary"
          >
            <line
              x1="11"
              y1="0"
              x2="11"
              y2="20"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <polyline
              points="4,18 11,26 18,18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ) : null}
    </div>
  );
}
