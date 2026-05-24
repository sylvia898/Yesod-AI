type Phase = {
  id: string;
  phase: string;
  horizon: string;
  title: string;
  items: string[];
};

export function Timeline({ phases }: { phases: Phase[] }) {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute left-0 right-0 top-[34px] hidden h-[2px] bg-[#2061AB] md:block"
        aria-hidden
      />
      <ol className="grid gap-5 md:grid-cols-4">
        {phases.map((p, idx) => (
          <li key={p.id} className="relative flex flex-col">
            <div className="hidden md:flex md:items-center md:gap-2">
              <span className="z-10 inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-[#2488D0] bg-white">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2488D0]" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2488D0]">
                {p.phase}
              </span>
            </div>

            <article className="mt-3 flex flex-1 flex-col rounded-card border border-[rgba(32,97,171,0.18)] bg-white p-5 shadow-card transition hover:border-[#2488D0]/60">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2488D0] md:hidden">
                {p.phase}
              </p>
              <p className="text-[12px] font-medium text-[#2061AB]">{p.horizon}</p>
              <h3 className="mt-2 text-[15px] font-semibold text-[#12317B]">
                {p.title}
              </h3>
              <ul className="mt-3 space-y-1.5">
                {p.items.map((i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-[13px] leading-[1.55] text-[#040404]"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-[#2488D0]"
                      aria-hidden
                    />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2488D0]/70">
                Step {idx + 1} of {phases.length}
              </p>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
