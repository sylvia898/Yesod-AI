import { useState } from "react";
import { ArrowRight, History } from "lucide-react";
import { AUDIT_REPLAY_STEPS } from "../data/content";

export function AuditReplay() {
  const [active, setActive] = useState(0);
  const selected = AUDIT_REPLAY_STEPS[active];

  return (
    <section className="rounded-card border border-[rgba(32,97,171,0.18)] bg-white p-6 shadow-card">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-[#2488D0] text-[#2488D0]">
          <History className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2488D0]">
            Clickable audit trail replay
          </p>
          <h3 className="mt-2 text-[22px] font-semibold text-[#12317B]">
            Every regulated output should be replayable.
          </h3>
          <p className="mt-2 max-w-3xl text-[14px] leading-[1.6] text-[#040404]">
            Click each step to see what identifiers are logged and why an
            auditor cares.
          </p>
        </div>
      </div>

      <ol className="mt-6 grid gap-2 md:grid-cols-4 xl:grid-cols-8">
        {AUDIT_REPLAY_STEPS.map((step, index) => {
          const isActive = index === active;
          return (
            <li key={step.title} className="relative">
              <button
                type="button"
                onClick={() => setActive(index)}
                className={`flex h-full min-h-[84px] w-full flex-col justify-between rounded-lg border px-3 py-3 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2488D0] focus-visible:ring-offset-2 ${
                  isActive
                    ? "border-[#2488D0] bg-[rgba(36,136,208,0.06)]"
                    : "border-[rgba(32,97,171,0.18)] bg-white hover:border-[#2488D0]/60"
                }`}
                aria-pressed={isActive}
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2488D0]">
                  Step {index + 1}
                </span>
                <span className="mt-2 text-[12px] font-semibold leading-tight text-[#12317B]">
                  {step.title}
                </span>
              </button>
              {index < AUDIT_REPLAY_STEPS.length - 1 ? (
                <ArrowRight
                  className="absolute -right-3 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-[#2061AB] xl:block"
                  aria-hidden
                />
              ) : null}
            </li>
          );
        })}
      </ol>

      <article className="mt-5 rounded-lg border border-[#2061AB] bg-white p-5">
        <p className="text-[12px] font-semibold text-[#12317B]">
          {selected.title}
        </p>
        <dl className="mt-3 grid gap-4 md:grid-cols-2">
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2488D0]">
              Identifiers logged
            </dt>
            <dd className="mt-1 text-[14px] leading-[1.6] text-[#040404]">
              {selected.logs}
            </dd>
          </div>
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2488D0]">
              Why an auditor cares
            </dt>
            <dd className="mt-1 text-[14px] leading-[1.6] text-[#040404]">
              {selected.auditorCares}
            </dd>
          </div>
        </dl>
      </article>
    </section>
  );
}

