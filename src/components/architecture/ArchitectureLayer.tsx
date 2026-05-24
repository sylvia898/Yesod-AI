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
      <div className="grid gap-0 overflow-hidden rounded-card border-2 border-[#12317B] bg-white shadow-card md:grid-cols-[200px_1fr_300px]">
        <div className="flex items-center gap-3 border-b border-[rgba(32,97,171,0.18)] bg-white px-5 py-5 md:border-b-0 md:border-r">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border-2 border-[#12317B] bg-white text-[12px] font-semibold text-[#12317B]">
            {String(step).padStart(2, "0")}
          </span>
          <p className="text-[15px] font-semibold leading-tight text-[#12317B]">
            {title}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 px-5 py-5">
          {capabilities.map((c) => (
            <span
              key={c}
              className="inline-flex items-center rounded-md border border-[#2061AB] bg-white px-2.5 py-1 text-[12px] font-medium text-[#2061AB]"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="border-t border-[rgba(32,97,171,0.18)] bg-white px-5 py-5 md:border-l md:border-t-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2488D0]">
            Compliance reason
          </p>
          <p className="mt-1 text-[13px] leading-[1.55] text-[#040404]">
            {complianceReason}
          </p>
        </div>
      </div>

      {!isLast ? (
        <div className="flex justify-center py-3" aria-hidden>
          <svg width="24" height="32" viewBox="0 0 24 32" className="text-[#2061AB]">
            <line
              x1="12"
              y1="0"
              x2="12"
              y2="22"
              stroke="currentColor"
              strokeWidth="2"
            />
            <polyline
              points="4,20 12,30 20,20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ) : null}
    </div>
  );
}
