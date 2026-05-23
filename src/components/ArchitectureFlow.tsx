import { ChevronRight } from "lucide-react";
import { ARCH_NODES } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function ArchitectureFlow() {
  return (
    <section id="architecture" className="border-t border-navy-100 bg-navy-50/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Proposed architecture & evidence flow"
          title="Every regulated request crosses the same controlled path."
          description="The system is designed so that no regulated output is produced without (a) the right identity and role, (b) validated inputs, (c) pinned models and prompts, (d) human review, and (e) a complete audit record stored independently of the workflow runtime."
        />

        <div className="mt-12">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ARCH_NODES.map((node, idx) => {
              const Icon = node.icon;

              return (
                <div key={node.id} className="flex items-stretch gap-2">
                  <article className="flex-1 rounded-lg border border-navy-100 bg-white p-4 shadow-card">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-navy-900 text-white">
                        <Icon className="h-4 w-4" />
                      </span>
                      <p className="text-[10px] font-semibold uppercase text-accent-700">
                        Step {idx + 1}
                      </p>
                    </div>
                    <h3 className="mt-3 text-sm font-semibold text-navy-900">
                      {node.label}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-navy-700">
                      {node.description}
                    </p>
                  </article>
                  {idx < ARCH_NODES.length - 1 ? (
                    <div className="flex items-center text-navy-300">
                      <ChevronRight className="h-5 w-5" aria-hidden />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Caption
              label="Inputs captured"
              body="User identity, role, request payload, dataset version, schema contract."
            />
            <Caption
              label="Inference captured"
              body="Model id and version, prompt id and version, retrieval snapshot id, parameters."
            />
            <Caption
              label="Outputs captured"
              body="Raw output, reviewed output, reviewer identity, decision, timestamps."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Caption({ label, body }: { label: string; body: string }) {
  return (
    <div className="rounded-lg border border-dashed border-navy-200 bg-white p-5">
      <p className="text-[10px] font-semibold uppercase text-accent-700">
        {label}
      </p>
      <p className="mt-1 text-xs leading-relaxed text-navy-700">{body}</p>
    </div>
  );
}
