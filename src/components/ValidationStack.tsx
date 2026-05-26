import { Layers } from "lucide-react";
import { VALIDATION_STACK_LAYERS } from "../data/content";

export function ValidationStack() {
  return (
    <section className="rounded-card border border-[rgba(32,97,171,0.18)] bg-white p-6 shadow-card">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-[#2488D0] text-[#2488D0]">
          <Layers className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2488D0]">
            Validation stack
          </p>
          <h3 className="mt-2 text-[22px] font-semibold text-[#12317B]">
            Validation readiness is a layered product architecture.
          </h3>
          <p className="mt-2 max-w-3xl text-[14px] leading-[1.6] text-[#040404]">
            Each layer proves something different and forces a concrete product
            capability.
          </p>
        </div>
      </div>

      <ol className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {VALIDATION_STACK_LAYERS.map((layer, index) => (
          <li key={layer.title} className="h-full">
            <article className="flex h-full flex-col rounded-lg border border-[rgba(32,97,171,0.18)] bg-white p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2488D0]">
                Layer {index + 1}
              </p>
              <h4 className="mt-1 text-[15px] font-semibold leading-tight text-[#12317B]">
                {layer.title}
              </h4>
              <dl className="mt-3 grid gap-3 text-[12px] leading-[1.55]">
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2061AB]">
                    What it proves
                  </dt>
                  <dd className="mt-1 text-[#040404]">{layer.proves}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2061AB]">
                    Product capability required
                  </dt>
                  <dd className="mt-1 text-[#040404]">{layer.capability}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2061AB]">
                    Evidence artifact produced
                  </dt>
                  <dd className="mt-1 text-[#040404]">{layer.artifact}</dd>
                </div>
              </dl>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
