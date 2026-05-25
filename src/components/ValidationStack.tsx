import { useState } from "react";
import { Layers } from "lucide-react";
import { VALIDATION_STACK_LAYERS } from "../data/content";

export function ValidationStack() {
  const [active, setActive] = useState(0);
  const selected = VALIDATION_STACK_LAYERS[active];

  return (
    <section className="rounded-card border border-[rgba(32,97,171,0.18)] bg-white p-6 shadow-card">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-[#2488D0] text-[#2488D0]">
          <Layers className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2488D0]">
            Clickable validation stack
          </p>
          <h3 className="mt-2 text-[22px] font-semibold text-[#12317B]">
            Validation readiness is a layered product architecture.
          </h3>
          <p className="mt-2 max-w-3xl text-[14px] leading-[1.6] text-[#040404]">
            Each layer proves something different and forces a concrete product
            capability. Click a layer to see the required artifact.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-2">
          {VALIDATION_STACK_LAYERS.map((layer, index) => {
            const isActive = index === active;
            return (
              <button
                key={layer.title}
                type="button"
                onClick={() => setActive(index)}
                className={`rounded-lg border px-4 py-3 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2488D0] focus-visible:ring-offset-2 ${
                  isActive
                    ? "border-[#2488D0] bg-[rgba(36,136,208,0.06)]"
                    : "border-[rgba(32,97,171,0.18)] bg-white hover:border-[#2488D0]/60"
                }`}
                aria-pressed={isActive}
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2488D0]">
                  Layer {index + 1}
                </span>
                <span className="mt-1 block text-[14px] font-semibold text-[#12317B]">
                  {layer.title}
                </span>
              </button>
            );
          })}
        </div>

        <article className="rounded-lg border border-[#2061AB] bg-white p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2488D0]">
            {selected.title}
          </p>
          <dl className="mt-4 grid gap-4">
            <Detail label="What it proves" value={selected.proves} />
            <Detail
              label="Product capability required"
              value={selected.capability}
            />
            <Detail
              label="Evidence artifact produced"
              value={selected.artifact}
            />
          </dl>
        </article>
      </div>
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2488D0]">
        {label}
      </dt>
      <dd className="mt-1 text-[14px] leading-[1.6] text-[#040404]">
        {value}
      </dd>
    </div>
  );
}

