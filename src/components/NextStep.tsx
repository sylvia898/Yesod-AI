export function NextStep() {
  return (
    <section id="next-step" className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-lg border border-navy-100 bg-navy-900 p-8 text-white shadow-card sm:p-10">
          <p className="text-xs font-semibold uppercase text-accent-300">
            Tactical next step
          </p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
            Start tomorrow by defining the system's intended use and building a small golden validation dataset with expected outputs.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-navy-100">
            Intended use sets the boundary every downstream artifact references. A golden dataset — even ten well-chosen cases — turns validation from an annual ceremony into a daily engineering discipline.
          </p>
        </div>
      </div>
    </section>
  );
}
