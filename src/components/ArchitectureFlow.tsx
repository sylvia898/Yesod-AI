import { Fragment, useState } from "react";
import { ChevronRight } from "lucide-react";
import { ARCH_NODES } from "../data/content";
import { AuditReplay } from "./AuditReplay";
import { SectionHeading } from "./SectionHeading";
import { ValidationStack } from "./ValidationStack";

const PHASES: { label: string; nodeIds: string[] }[] = [
  { label: "Intake & control", nodeIds: ["request", "auth", "workflow"] },
  { label: "AI execution", nodeIds: ["data", "llm"] },
  { label: "Human review & output", nodeIds: ["review", "output"] },
  { label: "Evidence & oversight", nodeIds: ["audit", "monitor"] },
];

const EVIDENCE_BY_NODE: Record<string, string> = {
  request:
    "Tenant, requester role, request type, linked requirement, timestamp.",
  auth: "Authenticated identity, role assignment, access decision, policy version.",
  workflow:
    "Workflow ID, step transitions, gating decisions, requirement linkage.",
  data: "Dataset version, schema contract, ingest validation result.",
  llm: "Prompt version, model deployment ID, decoding parameters, retrieval snapshot, raw output, output hash.",
  review: "Reviewer identity, decision, edit diff, rationale, timestamp.",
  output: "Approved output ID, version, output hash, linked requirement.",
  audit:
    "Append-only run record linking inputs, AI context, review, output, and requirement.",
  monitor:
    "Drift trigger, change record, re-validation decision, regression result.",
};

export function ArchitectureFlow() {
  const [activeId, setActiveId] = useState<string>(ARCH_NODES[0].id);
  const active = ARCH_NODES.find((n) => n.id === activeId) ?? ARCH_NODES[0];
  const ActiveIcon = active.icon;
  const activeIndex = ARCH_NODES.findIndex((n) => n.id === activeId);

  return (
    <section id="architecture" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <SectionHeading
          eyebrow="Proposed architecture / evidence flow"
          title="A controlled path from clinical request to audit evidence."
          description="The architecture goal is simple: no regulated output is approved without identity, versioned inputs, controlled AI execution, human review, and an evidence record that can be replayed later."
        />

        <p className="mt-6 text-[13px] text-[#040404]/70">
          Click any step to see the audit-trail fields captured at that point.
        </p>

        <div className="mt-4 rounded-card border border-[rgba(32,97,171,0.18)] bg-gradient-to-br from-[rgba(36,136,208,0.06)] via-white to-white p-5 shadow-card lg:p-7">
          <div className="flex flex-col gap-6">
            {PHASES.map((phase, phaseIdx) => (
              <div key={phase.label} className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#2488D0] font-mono text-[10px] font-semibold text-white">
                    {phaseIdx + 1}
                  </span>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2488D0]">
                    {phase.label}
                  </p>
                </div>
                <div className="flex flex-wrap items-stretch gap-2 md:flex-nowrap">
                  {phase.nodeIds.map((nodeId, idx) => {
                    const node = ARCH_NODES.find((n) => n.id === nodeId)!;
                    const Icon = node.icon;
                    const globalIndex = ARCH_NODES.findIndex(
                      (n) => n.id === nodeId,
                    );
                    const isActive = activeId === nodeId;
                    return (
                      <Fragment key={nodeId}>
                        <button
                          type="button"
                          onClick={() => setActiveId(nodeId)}
                          aria-pressed={isActive}
                          className={`group flex min-w-[180px] flex-1 flex-col gap-2 rounded-lg border p-4 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2488D0] focus-visible:ring-offset-2 ${
                            isActive
                              ? "border-[#2488D0] bg-[#2488D0] text-white shadow-md"
                              : "border-[rgba(32,97,171,0.18)] bg-white text-[#12317B] hover:-translate-y-0.5 hover:border-[#2488D0]/60 hover:shadow-sm"
                          }`}
                        >
                          <div className="flex w-full items-center justify-between gap-2">
                            <span
                              className={`font-mono text-[10px] font-semibold tracking-wider ${
                                isActive ? "text-white/80" : "text-[#2488D0]"
                              }`}
                            >
                              {String(globalIndex + 1).padStart(2, "0")}
                            </span>
                            <Icon
                              className={`h-4 w-4 ${
                                isActive ? "text-white" : "text-[#2061AB]"
                              }`}
                              aria-hidden
                            />
                          </div>
                          <span
                            className={`text-[13px] font-semibold leading-tight ${
                              isActive ? "text-white" : "text-[#12317B]"
                            }`}
                          >
                            {node.label}
                          </span>
                          <p
                            className={`text-[11px] leading-[1.5] ${
                              isActive ? "text-white/85" : "text-[#040404]/80"
                            }`}
                          >
                            {node.description}
                          </p>
                        </button>
                        {idx < phase.nodeIds.length - 1 ? (
                          <ChevronRight
                            className="hidden h-4 w-4 flex-none self-center text-[#2061AB]/50 md:block"
                            aria-hidden
                          />
                        ) : null}
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-card border border-[rgba(32,97,171,0.18)] bg-white p-5 shadow-card md:p-6">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-[#2488D0] bg-[rgba(36,136,208,0.08)] text-[#2061AB]">
              <ActiveIcon className="h-5 w-5" aria-hidden />
            </span>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-[11px] font-semibold text-[#2488D0]">
                  Step {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(ARCH_NODES.length).padStart(2, "0")}
                </span>
                <h3 className="text-[16px] font-semibold text-[#12317B]">
                  {active.label}
                </h3>
              </div>
              <div className="mt-3 rounded-lg border border-dashed border-[rgba(32,97,171,0.30)] bg-[rgba(36,136,208,0.04)] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2488D0]">
                  Evidence captured here
                </p>
                <p className="mt-2 text-[13px] leading-[1.55] text-[#040404]">
                  {EVIDENCE_BY_NODE[active.id]}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8">
          <ValidationStack />
          <AuditReplay />
        </div>
      </div>
    </section>
  );
}
