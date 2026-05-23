import { ArchitectureFlow } from "./components/ArchitectureFlow";
import { GxpWorkflow } from "./components/GxpWorkflow";
import { Hero } from "./components/Hero";
import { IqOqPqTable } from "./components/IqOqPqTable";
import { LlmRiskMatrix } from "./components/LlmRiskMatrix";
import { MvpScope } from "./components/MvpScope";
import { Nav } from "./components/Nav";
import { ProblemOverview } from "./components/ProblemOverview";
import { References } from "./components/References";
import { Roadmap } from "./components/Roadmap";
import { ValidationPackage } from "./components/ValidationPackage";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-navy-900">
      <Nav />
      <main>
        <Hero />
        <ProblemOverview />
        <IqOqPqTable />
        <GxpWorkflow />
        <LlmRiskMatrix />
        <ValidationPackage />
        <ArchitectureFlow />
        <Roadmap />
        <MvpScope />
        <References />
      </main>
      <footer className="border-t border-navy-100 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-xs text-navy-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Yesod AI · Take-home research presentation · Software Validation for AI Clinical Programming.
          </p>
          <p>Built as a local single-page presentation. No backend, no deployment.</p>
        </div>
      </footer>
    </div>
  );
}
