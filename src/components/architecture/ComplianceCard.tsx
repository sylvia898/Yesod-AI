import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  icon?: LucideIcon;
  label?: string;
  title: string;
  body: ReactNode;
  footer?: ReactNode;
  variant?: "default" | "tint";
};

export function ComplianceCard({
  icon: Icon,
  label,
  title,
  body,
  footer,
}: Props) {
  return (
    <article className="flex h-full flex-col rounded-card border border-[rgba(32,97,171,0.18)] bg-white p-6 shadow-card transition hover:border-[#2488D0]/60">
      <div className="flex items-center gap-3">
        {Icon ? (
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[rgba(32,97,171,0.18)] text-[#2061AB]">
            <Icon className="h-5 w-5" />
          </span>
        ) : null}
        {label ? (
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2488D0]">
            {label}
          </p>
        ) : null}
      </div>
      <h3 className="mt-4 text-[16px] font-semibold text-[#12317B]">{title}</h3>
      <div className="mt-2 text-[14px] leading-[1.6] text-[#040404]">{body}</div>
      {footer ? (
        <div className="mt-4 border-t border-[rgba(32,97,171,0.18)] pt-3 text-[12px] leading-[1.55] text-[#2061AB]">
          {footer}
        </div>
      ) : null}
    </article>
  );
}
