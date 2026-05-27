import { ShieldCheck } from "lucide-react";
import { HERO } from "../data/content";
import { Link } from "../router";

export function Hero() {
  return (
    <section
      id="overview"
      className="border-b border-[rgba(32,97,171,0.18)] bg-white"
    >
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-24 lg:grid-cols-[1.4fr_0.8fr] lg:items-center lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#2488D0] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2488D0]">
            <ShieldCheck className="h-3.5 w-3.5" />
            {HERO.eyebrow}
          </p>
          <h1 className="mt-6 text-[44px] font-semibold leading-[1.05] text-[#12317B] sm:text-[52px] lg:text-[56px]">
            {HERO.title}
          </h1>
          <p className="mt-6 max-w-2xl text-[20px] font-semibold leading-[1.45] text-[#12317B] sm:text-[22px]">
            {HERO.thesis}
          </p>
          <p className="mt-5 max-w-2xl text-[15px] leading-[1.65] text-[#040404]/80">
            {HERO.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/iq-oq-pq"
              className="inline-flex items-center rounded-md bg-[#12317B] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#0e276a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2488D0] focus-visible:ring-offset-2"
            >
              See the framework
            </Link>
            <Link
              to="/roadmap"
              className="inline-flex items-center rounded-md border border-[#12317B] bg-white px-5 py-2.5 text-sm font-medium text-[#12317B] transition hover:bg-[rgba(36,136,208,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2488D0] focus-visible:ring-offset-2"
            >
              View roadmap
            </Link>
          </div>
        </div>
        <aside className="relative overflow-hidden rounded-card border border-[rgba(32,97,171,0.18)] bg-gradient-to-br from-[rgba(36,136,208,0.08)] via-white to-white p-7 shadow-card">
          <span
            className="absolute left-0 top-0 h-full w-1 bg-[#2488D0]"
            aria-hidden
          />
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2488D0]">
            Executive summary
          </p>
          <p className="mt-3 text-[14px] leading-[1.65] text-[#040404]">
            {HERO.summary}
          </p>
        </aside>
      </div>
    </section>
  );
}
