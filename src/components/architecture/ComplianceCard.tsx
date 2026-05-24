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
  variant = "default",
}: Props) {
  const tint = variant === "tint";
  return (
    <article
      className={[
        "flex h-full flex-col rounded-xl border p-6 transition",
        tint
          ? "border-brand-line bg-brand-tint/60"
          : "border-brand-line bg-white",
        "hover:border-brand-primary/60 hover:shadow-[0_2px_18px_-8px_rgba(32,97,171,0.25)]",
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
        {Icon ? (
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand-navy text-white">
            <Icon className="h-4 w-4" />
          </span>
        ) : null}
        {label ? (
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-deep">
            {label}
          </p>
        ) : null}
      </div>
      <h3 className="mt-4 text-base font-semibold text-brand-black">{title}</h3>
      <div className="mt-2 text-sm leading-relaxed text-brand-black/80">
        {body}
      </div>
      {footer ? (
        <div className="mt-4 border-t border-brand-line/70 pt-3 text-xs leading-relaxed text-brand-deep">
          {footer}
        </div>
      ) : null}
    </article>
  );
}
