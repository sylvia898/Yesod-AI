import type { ReactNode } from "react";

type Props = {
  index?: string;
  eyebrow?: string;
  title: string;
  description?: ReactNode;
};

export function ArchSectionHeader({ index, eyebrow, title, description }: Props) {
  return (
    <header className="max-w-3xl">
      <div className="flex items-center gap-3">
        {index ? (
          <span className="inline-flex h-7 min-w-[2.25rem] items-center justify-center rounded-md border border-brand-line bg-brand-tint px-2 text-xs font-semibold tracking-wide text-brand-deep">
            {index}
          </span>
        ) : null}
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-deep">
            {eyebrow}
          </p>
        ) : null}
      </div>
      <h2 className="mt-3 text-3xl font-semibold text-brand-black sm:text-[34px]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-brand-black/80">
          {description}
        </p>
      ) : null}
    </header>
  );
}
