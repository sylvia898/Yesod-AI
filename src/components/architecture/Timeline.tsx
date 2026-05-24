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
        className="pointer-events-none absolute left-0 right-0 top-[34px] hidden h-[2px] bg-gradient-to-r from-brand-tint via-brand-primary to-brand-navy md:block"
        aria-hidden
      />
      <ol className="grid gap-5 md:grid-cols-4">
        {phases.map((p, idx) => (
          <li key={p.id} className="relative flex flex-col">
            <div className="hidden md:flex md:items-center md:gap-2">
              <span className="z-10 inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-brand-primary bg-white">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-deep">
                {p.phase}
              </span>
            </div>

            <article className="mt-3 flex flex-1 flex-col rounded-xl border border-brand-line bg-white p-5 transition hover:border-brand-primary/60 hover:shadow-[0_2px_18px_-8px_rgba(32,97,171,0.25)]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-deep md:hidden">
                {p.phase}
              </p>
              <p className="text-xs font-medium text-brand-deep">{p.horizon}</p>
              <h3 className="mt-2 text-sm font-semibold text-brand-black">
                {p.title}
              </h3>
              <ul className="mt-3 space-y-1.5">
                {p.items.map((i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs leading-relaxed text-brand-black/85"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-primary"
                      aria-hidden
                    />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-deep/60">
                Step {idx + 1} of {phases.length}
              </p>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
