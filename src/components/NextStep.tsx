export function NextStep() {
  return (
    <section id="next-step" className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <div className="rounded-card border-2 border-[#12317B] bg-white p-8 shadow-card sm:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2488D0]">
            Tactical next step
          </p>
          <h2 className="mt-3 text-[28px] font-semibold leading-tight text-[#12317B] sm:text-[32px]">
            Start tomorrow by defining the system's intended use and building a small golden validation dataset with expected outputs.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.65] text-[#040404]">
            Intended use sets the boundary every downstream artifact references. A golden dataset — even ten well-chosen cases — turns validation from an annual ceremony into a daily engineering discipline.
          </p>
        </div>
      </div>
    </section>
  );
}
