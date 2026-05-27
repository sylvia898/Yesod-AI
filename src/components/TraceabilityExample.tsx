import { ArrowRight, FileCheck2, Workflow } from "lucide-react";
import {
  CLINICAL_WORKFLOW_EXAMPLE,
  SAMPLE_AUDIT_RECORD,
  TRACEABILITY_CHAIN,
} from "../data/content";
import { EvidenceCard } from "./EvidenceCard";

export function TraceabilityExample() {
  return (
    <div className="mt-14 space-y-8">
      <article className="rounded-card border border-[rgba(32,97,171,0.18)] bg-white p-6 shadow-card">
        <div className="flex items-start gap-3">
          <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-[#2488D0] text-[#2488D0]">
            <FileCheck2 className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2488D0]">
              Traceability mini example
            </p>
            <h3 className="mt-2 text-[22px] font-semibold leading-tight text-[#12317B]">
              One requirement, one complete evidence chain.
            </h3>
            <p className="mt-2 max-w-3xl text-[14px] leading-[1.6] text-[#040404]">
              A reviewer should start at an approved TLF draft and walk backward
              through requirements, tests, AI output, human review, and audit
              evidence without a missing link.
            </p>
          </div>
        </div>

        <ol className="mt-6 grid gap-3 md:grid-cols-4">
          {TRACEABILITY_CHAIN.map((step, index) => (
            <li key={step.id} className="relative">
              <div className="h-full rounded-lg border border-[rgba(32,97,171,0.18)] bg-white p-4 transition hover:border-[#2488D0]/60">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-md border border-[#2061AB] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2061AB]">
                    {step.label}
                  </span>
                  {index < TRACEABILITY_CHAIN.length - 1 ? (
                    <ArrowRight
                      className="hidden h-4 w-4 text-[#2061AB] md:block"
                      aria-hidden
                    />
                  ) : null}
                </div>
                <p className="mt-3 text-[13px] font-semibold text-[#12317B]">
                  {step.id}
                </p>
                <p className="mt-1 text-[12px] leading-[1.55] text-[#040404]">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </article>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-card border border-[rgba(32,97,171,0.18)] bg-white p-6 shadow-card">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-[rgba(32,97,171,0.18)] text-[#2061AB]">
              <Workflow className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2488D0]">
                Clinical workflow example
              </p>
              <h3 className="text-[20px] font-semibold text-[#12317B]">
                ADaM to TLF draft to evidence export.
              </h3>
            </div>
          </div>

          <ol className="mt-5 space-y-3">
            {CLINICAL_WORKFLOW_EXAMPLE.map((step, index) => (
              <li key={step.title} className="flex gap-3">
                <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-md border border-[#2488D0] text-[11px] font-semibold text-[#2488D0]">
                  {index + 1}
                </span>
                <div>
                  <p className="text-[14px] font-semibold text-[#12317B]">
                    {step.title}
                  </p>
                  <p className="mt-0.5 text-[13px] leading-[1.55] text-[#040404]">
                    {step.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </article>

        <EvidenceCard
          title="run_2026_00128"
          description="A compact record like this turns an AI-assisted clinical programming run into something replayable and reviewable."
          fields={SAMPLE_AUDIT_RECORD}
        />
      </div>
    </div>
  );
}

