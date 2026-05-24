type Props = {
  risk: string;
  why: string;
  control: string;
  index: number;
};

export function RiskControlCard({ risk, why, control, index }: Props) {
  return (
    <article className="flex h-full flex-col rounded-card border border-[rgba(32,97,171,0.18)] bg-white p-5 shadow-card transition hover:border-[#2488D0]/60">
      <div className="flex items-center justify-between">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[#2488D0] bg-white text-[11px] font-semibold text-[#2488D0]">
          {String(index).padStart(2, "0")}
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2488D0]">
          AI risk
        </span>
      </div>
      <h3 className="mt-3 text-[15px] font-semibold text-[#12317B]">{risk}</h3>

      <div className="mt-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2061AB]">
          Why it matters
        </p>
        <p className="mt-1 text-[12px] leading-[1.55] text-[#040404]">{why}</p>
      </div>

      <div className="mt-4 rounded-md border border-[rgba(32,97,171,0.18)] bg-white p-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2488D0]">
          Early product control
        </p>
        <p className="mt-1 text-[12px] leading-[1.55] text-[#040404]">{control}</p>
      </div>
    </article>
  );
}
