import { CheckCircle2, ShieldCheck } from "lucide-react";
import { HERO } from "../data/content";
import { Link } from "../router";

export function Hero() {
  return (
    <section
      id="overview"
      className="relative overflow-hidden border-b border-navy-100 bg-gradient-to-b from-white via-white to-navy-50"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.4fr_1fr] lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-3 py-1 text-xs font-semibold uppercase text-navy-700">
            <ShieldCheck className="h-3.5 w-3.5 text-accent-600" />
            {HERO.eyebrow}
          </p>
          <h1 className="mt-6 text-4xl font-semibold text-navy-950 sm:text-5xl lg:text-6xl">
            {HERO.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-700">
            {HERO.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/iq-oq-pq"
              className="inline-flex items-center rounded-md bg-navy-900 px-4 py-2 text-sm font-medium text-white shadow-card transition hover:bg-navy-800"
            >
              See the framework
            </Link>
            <Link
              to="/roadmap"
              className="inline-flex items-center rounded-md border border-navy-200 bg-white px-4 py-2 text-sm font-medium text-navy-800 transition hover:border-navy-300 hover:bg-navy-50"
            >
              View roadmap
            </Link>
          </div>
        </div>
        <aside className="rounded-lg border border-navy-100 bg-white p-7 shadow-card">
          <p className="text-xs font-semibold uppercase text-accent-600">
            Executive summary
          </p>
          <p className="mt-3 text-sm leading-relaxed text-navy-700">
            {HERO.summary}
          </p>
          <ul className="mt-5 space-y-3">
            {HERO.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-navy-800">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-accent-600" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
