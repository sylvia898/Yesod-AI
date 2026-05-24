type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <header className="max-w-3xl">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2488D0]">
          {eyebrow}
        </p>
      ) : null}
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
