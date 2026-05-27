export function NextStep() {
  return (
    <section id="next-step" className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <div className="rounded-card border-2 border-[#12317B] bg-white p-8 shadow-card sm:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2488D0]">
            Tactical next step · First thing tomorrow
          </p>
          <h2 className="mt-3 text-[28px] font-semibold leading-tight text-[#12317B] sm:text-[32px]">
            Draft the intended use statement and stand up a 10-case golden validation dataset.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.65] text-[#040404]">
            One artifact, one week. Intended use sets the boundary every
            downstream URS, FRS, risk, and qualification artifact references —
            without it, validation has nothing to validate. The golden dataset
            turns that boundary into an executable regression gate on day one.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Step
              n="1"
              title="Intended use"
              body="One page: what the system is for, who uses it, regulated outputs in scope, out-of-scope declarations."
            />
            <Step
              n="2"
              title="Golden dataset"
              body="Ten representative ADaM-like inputs with reviewer-approved expected outputs and acceptance criteria."
            />
            <Step
              n="3"
              title="Regression gate"
              body="Wire the dataset into CI so every prompt, model, or schema change runs against it before merge."
            />
          </div>

          <div className="mt-6 rounded-lg border border-[#2488D0] bg-white p-5">
            <p className="text-[14px] leading-[1.6] text-[#040404]">
              <span className="font-semibold text-[#12317B]">Why this first:</span>{" "}
              every other validation artifact — URS, FRS, IQ/OQ/PQ, traceability
              matrix, audit trail schema — references intended use. Starting
              anywhere else creates rework. The golden dataset turns intended
              use into a measurable target engineering can defend.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="rounded-lg border border-[rgba(32,97,171,0.18)] bg-white p-4">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-[#12317B] text-[11px] font-semibold text-[#12317B]">
          {n}
        </span>
        <p className="text-[13px] font-semibold text-[#12317B]">{title}</p>
      </div>
      <p className="mt-2 text-[12px] leading-[1.55] text-[#040404]">{body}</p>
    </div>
  );
}
