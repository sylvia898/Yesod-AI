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
          <span className="inline-flex h-7 min-w-[2.25rem] items-center justify-center rounded-md border border-[#2488D0] bg-white px-2 text-[11px] font-semibold tracking-wide text-[#2488D0]">
            {index}
          </span>
        ) : null}
        {eyebrow ? (
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2488D0]">
            {eyebrow}
          </p>
        ) : null}
      </div>
      <h2 className="mt-3 text-[28px] font-semibold leading-tight text-[#12317B] sm:text-[34px]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[16px] leading-[1.65] text-[#040404]">
          {description}
        </p>
      ) : null}
    </header>
  );
}
