import { ShieldCheck } from "lucide-react";
import { NAV_LINKS } from "../data/content";
import { Link } from "../router";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(32,97,171,0.18)] bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-6 py-4">
        <Link
          to="/"
          exact
          className="flex items-center gap-2 text-sm font-semibold text-[#040404]"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[#2488D0] text-[#2488D0]">
            <ShieldCheck className="h-4 w-4" />
          </span>
          Yesod AI · Validation Brief
        </Link>
        <nav className="hidden items-center gap-x-1 text-[13px] font-medium xl:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              exact
              className="rounded-full px-3 py-1.5 text-[#040404] transition hover:bg-[rgba(36,136,208,0.08)]"
              activeClassName="!text-[#2488D0] !bg-[rgba(36,136,208,0.10)] ring-1 ring-inset ring-[#2488D0]/40"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
