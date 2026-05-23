import { ShieldCheck } from "lucide-react";
import { NAV_LINKS } from "../data/content";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy-100 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
        <a
          href="#overview"
          className="flex items-center gap-2 text-sm font-semibold text-navy-900"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-navy-900 text-white">
            <ShieldCheck className="h-4 w-4" />
          </span>
          Yesod AI · Validation Brief
        </a>
        <nav className="hidden items-center gap-x-4 text-xs font-medium text-navy-700 xl:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="transition hover:text-accent-700"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
