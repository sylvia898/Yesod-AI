import { History } from "lucide-react";
import { AUDIT_REPLAY_STEPS } from "../data/content";

export function AuditReplay() {
  return (
    <section className="rounded-card border border-[rgba(32,97,171,0.18)] bg-white p-6 shadow-card">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-[#2488D0] text-[#2488D0]">
          <History className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2488D0]">
            Audit trail replay
          </p>
          <h3 className="mt-2 text-[22px] font-semibold text-[#12317B]">
            Every regulated output should be replayable.
          </h3>
          <p className="mt-2 max-w-3xl text-[14px] leading-[1.6] text-[#040404]">
            Each step shows what identifiers are logged and why an auditor
            cares.
          </p>
        </div>
      </div>

      <ol className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {AUDIT_REPLAY_STEPS.map((step, index) => (
          <li key={step.title} className="h-full">
            <article className="flex h-full flex-col rounded-lg border border-[rgba(32,97,171,0.18)] bg-white p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2488D0]">
                Step {index + 1}
              </p>
              <h4 className="mt-1 text-[14px] font-semibold leading-tight text-[#12317B]">
                {step.title}
              </h4>
              <div className="mt-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2061AB]">
                  Identifiers logged
                </p>
                <p className="mt-1 text-[12px] leading-[1.55] text-[#040404]">
                  {step.logs}
                </p>
              </div>
              <div className="mt-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2061AB]">
                  Why an auditor cares
                </p>
                <p className="mt-1 text-[12px] leading-[1.55] text-[#040404]">
                  {step.auditorCares}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
