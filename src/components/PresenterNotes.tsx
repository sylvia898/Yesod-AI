import { Clock } from "lucide-react";
import { PRESENTATION_FLOW } from "../data/content";

export function PresenterNotes() {
  return (
    <aside className="rounded-card border border-[rgba(32,97,171,0.18)] bg-white p-5 shadow-card">
      <div className="flex items-center gap-2">
        <Clock className="h-4 w-4 text-[#2061AB]" aria-hidden />
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2488D0]">
          20-minute flow
        </p>
      </div>
      <ol className="mt-4 space-y-3">
        {PRESENTATION_FLOW.map((item, index) => (
          <li key={item.label} className="grid grid-cols-[32px_1fr] gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-md border border-[#2488D0] text-[11px] font-semibold text-[#2488D0]">
              {index + 1}
            </span>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-2">
                <p className="text-[13px] font-semibold text-[#12317B]">
                  {item.label}
                </p>
                <p className="text-[11px] font-semibold text-[#2061AB]">
                  {item.time}
                </p>
              </div>
              <p className="mt-0.5 text-[12px] leading-[1.45] text-[#040404]/80">
                {item.focus}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </aside>
  );
}

