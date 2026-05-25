import type { EvidenceField } from "../data/content";

type EvidenceCardProps = {
  title: string;
  description: string;
  fields: EvidenceField[];
};

export function EvidenceCard({ title, description, fields }: EvidenceCardProps) {
  return (
    <article className="rounded-card border border-[rgba(32,97,171,0.18)] bg-white p-6 shadow-card">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2488D0]">
        Sample audit evidence record
      </p>
      <h3 className="mt-2 text-[20px] font-semibold text-[#12317B]">
        {title}
      </h3>
      <p className="mt-2 max-w-2xl text-[14px] leading-[1.6] text-[#040404]">
        {description}
      </p>
      <dl className="mt-5 grid gap-3 sm:grid-cols-2">
        {fields.map((field) => (
          <div
            key={field.label}
            className="rounded-lg border border-[rgba(32,97,171,0.18)] bg-white px-4 py-3"
          >
            <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2488D0]">
              {field.label}
            </dt>
            <dd className="mt-1 break-words text-[13px] font-medium leading-[1.45] text-[#040404]">
              {field.value}
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

