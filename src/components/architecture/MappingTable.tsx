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
    <div className="overflow-hidden rounded-card border border-[rgba(32,97,171,0.18)] bg-white shadow-card">
      {caption ? (
        <p className="border-b border-[rgba(18,49,123,0.16)] bg-white px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2488D0]">
          {caption}
        </p>
      ) : null}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-[rgba(18,49,123,0.16)] bg-white">
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  scope="col"
                  className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#12317B]"
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
                className="border-b border-[rgba(18,49,123,0.16)] align-top last:border-b-0"
              >
                {columns.map((col) => (
                  <td
                    key={String(col.key)}
                    className="px-4 py-3 text-[13px] leading-[1.55] text-[#040404]"
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
