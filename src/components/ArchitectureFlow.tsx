import { ArrowRight } from "lucide-react";
import { ARCH_NODES } from "../data/content";
import { AuditReplay } from "./AuditReplay";
import { SectionHeading } from "./SectionHeading";
import { ValidationStack } from "./ValidationStack";

export function ArchitectureFlow() {
  return (
    <section id="architecture" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <SectionHeading
          eyebrow="Proposed architecture / evidence flow"
          title="A controlled path from clinical request to audit evidence."
          description="The architecture goal is simple: no regulated output is approved without identity, versioned inputs, controlled AI execution, human review, and an evidence record that can be replayed later."
        />

        <div className="mt-12 overflow-hidden rounded-card border border-[rgba(32,97,171,0.18)] bg-white p-5 shadow-card">
          <ol className="grid gap-3 md:grid-cols-3">
            {ARCH_NODES.map((node, index) => {
              const Icon = node.icon;
              return (
                <li key={node.id} className="relative flex h-full">
                  <article className="flex min-h-[150px] w-full flex-col rounded-lg border border-[rgba(32,97,171,0.18)] bg-white p-4 transition hover:border-[#2488D0]/60">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#2488D0] text-[#2488D0]">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      {index < ARCH_NODES.length - 1 ? (
                        <ArrowRight
                          className="hidden h-4 w-4 text-[#2061AB] md:block"
                          aria-hidden
                        />
                      ) : null}
                    </div>
                    <h3 className="mt-4 text-[14px] font-semibold leading-tight text-[#12317B]">
                      {node.label}
                    </h3>
                    <p className="mt-2 text-[12px] leading-[1.55] text-[#040404]">
                      {node.description}
                    </p>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <EvidenceNote
            title="Inputs captured"
            body="User, role, tenant/workspace, request, dataset version, schema contract, requirement ID."
          />
          <EvidenceNote
            title="AI context captured"
            body="Prompt version, model deployment ID, parameters, retrieval snapshot, raw output, output hash."
          />
          <EvidenceNote
            title="Review captured"
            body="Reviewer identity, decision, edit diff, rationale, timestamp, approved output, evidence export ID."
          />
        </div>

        <div className="mt-12 grid gap-8">
          <ValidationStack />
          <AuditReplay />
        </div>
      </div>
    </section>
  );
}

function EvidenceNote({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-card border border-dashed border-[rgba(32,97,171,0.30)] bg-white p-5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2488D0]">
        {title}
      </p>
      <p className="mt-2 text-[13px] leading-[1.55] text-[#040404]">{body}</p>
    </article>
  );
}
