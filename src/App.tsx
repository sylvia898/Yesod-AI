import type { ReactElement } from "react";
import { ArchitectureFlow } from "./components/ArchitectureFlow";
import { Drift } from "./components/Drift";
import { GxpWorkflow } from "./components/GxpWorkflow";
import { Hero } from "./components/Hero";
import { IqOqPqTable } from "./components/IqOqPqTable";
import { LlmRisk } from "./components/LlmRisk";
import { Nav } from "./components/Nav";
import { NextStep } from "./components/NextStep";
import { Problem } from "./components/Problem";
import { References } from "./components/References";
import { Roadmap } from "./components/Roadmap";
import { Scope } from "./components/Scope";
import { ValidationPackage } from "./components/ValidationPackage";
import { WhyYesod } from "./components/WhyYesod";
import { Link, Router, useRoute } from "./router";

const ROUTES: Record<string, () => ReactElement> = {
  "/": Hero,
  "/problem": Problem,
  "/why": WhyYesod,
  "/iq-oq-pq": IqOqPqTable,
  "/gxp": GxpWorkflow,
  "/llm-risk": LlmRisk,
  "/drift": Drift,
  "/package": ValidationPackage,
  "/architecture": ArchitectureFlow,
  "/roadmap": Roadmap,
  "/scope": Scope,
  "/next-step": NextStep,
  "/references": References,
};

function CurrentPage() {
  const { path } = useRoute();
  const Page = ROUTES[path];
  if (Page) {
    return <Page />;
  }
  return <NotFound />;
}

function NotFound() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-xs font-semibold uppercase text-accent-600">
          404
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-navy-900 sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-relaxed text-navy-700">
          The page you are looking for does not exist. Return to the overview to continue.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            exact
            className="inline-flex items-center rounded-md bg-navy-900 px-4 py-2 text-sm font-medium text-white shadow-card transition hover:bg-navy-800"
          >
            Back to overview
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-navy-900">
        <Nav />
        <main>
          <CurrentPage />
        </main>
        <footer className="border-t border-navy-100 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-xs text-navy-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              Yesod AI · Software Validation for AI Clinical Programming.
            </p>
            <p>&copy; {new Date().getFullYear()} Yesod AI.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}
