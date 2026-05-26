import { useEffect, useState } from "react";
import { Menu, ShieldCheck, X } from "lucide-react";
import { NAV_LINKS } from "../data/content";
import { Link, useRoute } from "../router";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { path } = useRoute();

  useEffect(() => {
    setIsOpen(false);
  }, [path]);

  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(32,97,171,0.18)] bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-6 py-4">
        <Link
          to="/"
          exact
          className="flex items-center gap-2 rounded-md text-sm font-semibold text-[#040404] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2488D0] focus-visible:ring-offset-2"
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
              className="rounded-full px-3 py-1.5 text-[#040404] transition hover:bg-[rgba(36,136,208,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2488D0] focus-visible:ring-offset-2"
              activeClassName="!text-[#2488D0] !bg-[rgba(36,136,208,0.10)] ring-1 ring-inset ring-[#2488D0]/40"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[rgba(32,97,171,0.18)] text-[#12317B] transition hover:bg-[rgba(36,136,208,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2488D0] focus-visible:ring-offset-2 xl:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {isOpen ? (
        <nav className="border-t border-[rgba(32,97,171,0.18)] bg-white xl:hidden">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-1 px-6 py-4 text-[14px] font-medium">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                exact
                className="rounded-md px-3 py-2 text-[#040404] transition hover:bg-[rgba(36,136,208,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2488D0] focus-visible:ring-offset-2"
                activeClassName="!text-[#2488D0] !bg-[rgba(36,136,208,0.10)] ring-1 ring-inset ring-[#2488D0]/40"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
