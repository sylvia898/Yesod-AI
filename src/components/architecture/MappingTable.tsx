import type { ReactNode } from "react";

export type Column<R> = {
  key: keyof R;
  header: string;
  width?: string;
  render?: (row: R) => ReactNode;
};

type Props<R> = {
  rows: R[];
  columns: Column<R>[];
  caption?: string;
};

export function MappingTable<R extends Record<string, unknown>>({
  rows,
  columns,
  caption,
}: Props<R>) {
  return (
    <div className="overflow-hidden rounded-xl border border-brand-line bg-white">
      {caption ? (
        <p className="border-b border-brand-line bg-brand-soft px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-deep">
          {caption}
        </p>
      ) : null}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-brand-line bg-brand-soft">
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  scope="col"
                  className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-deep"
                  style={col.width ? { width: col.width } : undefined}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className={[
                  "border-b border-brand-line/70 align-top last:border-b-0",
                  idx % 2 === 0 ? "bg-white" : "bg-brand-soft/40",
                ].join(" ")}
              >
                {columns.map((col) => (
                  <td
                    key={String(col.key)}
                    className="px-4 py-3 text-xs leading-relaxed text-brand-black/85"
                  >
                    {col.render ? col.render(row) : String(row[col.key] ?? "")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
