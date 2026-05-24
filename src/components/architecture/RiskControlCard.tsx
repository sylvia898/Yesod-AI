type Props = {
  risk: string;
  why: string;
  control: string;
  index: number;
};

export function RiskControlCard({ risk, why, control, index }: Props) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-brand-line bg-white p-5 transition hover:border-brand-primary/60 hover:shadow-[0_2px_18px_-8px_rgba(32,97,171,0.25)]">
      <div className="flex items-center justify-between">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-brand-line bg-brand-tint text-[11px] font-semibold text-brand-deep">
          {String(index).padStart(2, "0")}
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-deep">
          AI risk
        </span>
      </div>
      <h3 className="mt-3 text-base font-semibold text-brand-black">{risk}</h3>

      <div className="mt-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-black/60">
          Why it matters
        </p>
        <p className="mt-1 text-xs leading-relaxed text-brand-black/80">
          {why}
        </p>
      </div>

      <div className="mt-4 rounded-md border border-brand-line bg-brand-tint/60 p-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-deep">
          Early product control
        </p>
        <p className="mt-1 text-xs leading-relaxed text-brand-black/85">
          {control}
        </p>
      </div>
    </article>
  );
}
