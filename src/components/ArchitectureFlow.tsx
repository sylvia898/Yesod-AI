import {
  AlertTriangle,
  ArrowRight,
  Boxes,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Database,
  FileSignature,
  Layers,
  Lock,
  Network,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";
import {
  AI_RISKS,
  ARCH_LAYERS,
  ARCH_ROADMAP,
  ARCH_SUMMARY,
  COMPLIANCE_LAYERS,
  COMPLIANCE_MAPPING,
  DATA_FLOW,
  NEXT_STEP_MATRIX,
  SCOPE_COLUMNS,
  TRADEOFFS,
} from "../data/content";
import { ArchSectionHeader } from "./architecture/ArchSectionHeader";
import { ArchitectureLayer } from "./architecture/ArchitectureLayer";
import { ComplianceCard } from "./architecture/ComplianceCard";
import { MappingTable, type Column } from "./architecture/MappingTable";
import { RiskControlCard } from "./architecture/RiskControlCard";
import { Timeline } from "./architecture/Timeline";
import { TradeoffCard } from "./architecture/TradeoffCard";

const SECTION = "border-b border-[rgba(32,97,171,0.18)] bg-white";
const CONTAINER = "mx-auto max-w-[1200px] px-6 py-24";

export function ArchitectureFlow() {
  return (
    <div className="bg-white text-[#040404]">
      <HeroSection />
      <ComplianceStackSection />
      <ComplianceMappingSection />
      <ArchitectureDiagramSection />
      <AiRiskSection />
      <DataFlowSection />
      <ScopeSection />
      <RoadmapSection />
      <TradeoffsSection />
      <NextStepSection />
    </div>
  );
}

// ---------------------------------------------------------------
// 1. Hero
// ---------------------------------------------------------------
function HeroSection() {
  return (
    <section className={SECTION}>
      <div className={CONTAINER}>
        <div className="grid gap-12 lg:grid-cols-[1.45fr_1fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#2488D0] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2488D0]">
              <ShieldCheck className="h-3.5 w-3.5" />
              Proposed Approach · Architecture
            </p>
            <h1 className="mt-6 text-[44px] font-semibold leading-[1.05] text-[#12317B] sm:text-[52px]">
              Compliance-by-Design Architecture
              <br />
              <span className="text-[#2061AB]">for Enterprise AI SaaS</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-[1.65] text-[#040404]">
              Enterprise pharma customers do not only buy AI capability; they buy
              trust, traceability, controlled data flow, and evidence that the
              platform can survive vendor assessment and future regulatory
              validation.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs">
              <Anchor href="#stack">Compliance stack</Anchor>
              <Dot />
              <Anchor href="#diagram">Architecture diagram</Anchor>
              <Dot />
              <Anchor href="#risk">AI control plane</Anchor>
              <Dot />
              <Anchor href="#roadmap">Roadmap</Anchor>
              <Dot />
              <Anchor href="#next">Tomorrow</Anchor>
            </div>
          </div>

          <div className="grid gap-4">
            {ARCH_SUMMARY.map((c) => (
              <ComplianceCard
                key={c.label}
                icon={c.icon}
                label={c.label}
                title={c.title}
                body={c.body}
                variant="default"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Anchor({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      className="font-medium uppercase tracking-[0.14em] text-[#2488D0] transition hover:text-[#12317B]"
    >
      {children}
    </a>
  );
}

function Dot() {
  return (
    <span
      className="h-1 w-1 rounded-full bg-[rgba(32,97,171,0.40)]"
      aria-hidden
    />
  );
}

// ---------------------------------------------------------------
// 2. Compliance landscape
// ---------------------------------------------------------------
function ComplianceStackSection() {
  return (
    <section id="stack" className={SECTION}>
      <div className={CONTAINER}>
        <ArchSectionHeader
          index="02"
          eyebrow="Compliance landscape"
          title="Three layers, not one checklist."
          description="General SaaS security and regulated life-science workflows are separate buying motions. The architecture must satisfy both, with privacy as a connecting layer."
        />

        <div className="mt-10 space-y-3">
          {COMPLIANCE_LAYERS.map((layer, idx) => (
            <div
              key={layer.tier}
              className="grid items-stretch gap-0 overflow-hidden rounded-card border border-[rgba(32,97,171,0.18)] bg-white shadow-card md:grid-cols-[220px_1fr_300px]"
            >
              <div className="flex flex-col justify-center gap-1 border-b border-[rgba(32,97,171,0.18)] bg-white px-5 py-5 md:border-b-0 md:border-r">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2488D0]">
                  {layer.tier}
                </p>
                <p className="text-[18px] font-semibold leading-tight text-[#12317B]">
                  {layer.title}
                </p>
                <p className="text-[11px] text-[#040404]/65">
                  Step {idx + 1} of {COMPLIANCE_LAYERS.length}
                </p>
              </div>

              <div className="border-b border-[rgba(32,97,171,0.18)] px-5 py-5 md:border-b-0 md:border-r">
                <div className="flex flex-wrap gap-2">
                  {layer.frameworks.map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center rounded-md border border-[#2488D0] bg-white px-2.5 py-1 text-[12px] font-semibold text-[#2488D0]"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-[14px] leading-[1.6] text-[#040404]">
                  {layer.explanation}
                </p>
              </div>

              <div className="bg-white px-5 py-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2488D0]">
                  Why buyers care
                </p>
                <p className="mt-1 text-[13px] leading-[1.55] text-[#040404]">
                  {layer.buyerSignal}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-[13px] leading-[1.55] text-[#040404]/75">
          A SOC 2 report does not unlock a regulated clinical workflow. A GxP
          binder does not pass an InfoSec questionnaire. Carrying both
          conversations is the work.
        </p>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------
// 3. Compliance-to-architecture mapping table
// ---------------------------------------------------------------
function ComplianceMappingSection() {
  const columns: Column<(typeof COMPLIANCE_MAPPING)[number]>[] = [
    {
      key: "framework",
      header: "Framework / regulation",
      width: "16%",
      render: (r) => (
        <span className="font-semibold text-[#12317B]">{r.framework}</span>
      ),
    },
    { key: "proves", header: "What it proves", width: "22%" },
    { key: "capability", header: "Required product capability", width: "26%" },
    {
      key: "priority",
      header: "MVP priority",
      width: "12%",
      render: (r) => <PriorityBadge priority={r.priority} />,
    },
    { key: "evidence", header: "Evidence artifact", width: "24%" },
  ];

  return (
    <section className={SECTION}>
      <div className={CONTAINER}>
        <ArchSectionHeader
          index="03"
          eyebrow="Compliance → architecture mapping"
          title="Each framework drives a specific product capability."
          description="Compliance is not a wall around the product; it is a set of capabilities the product must already have. This mapping is how engineering and compliance stop talking past each other."
        />

        <div className="mt-10">
          <MappingTable rows={COMPLIANCE_MAPPING} columns={columns} />
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-[12px] text-[#040404]/75">
          <LegendKey priority="MVP" />
          <LegendKey priority="MVP-ready" />
          <LegendKey priority="Later" />
          <LegendKey priority="On trigger" />
        </div>
      </div>
    </section>
  );
}

function PriorityBadge({ priority }: { priority: string }) {
  const config: Record<string, string> = {
    MVP: "border-[#12317B] text-[#12317B]",
    "MVP-ready": "border-[#2061AB] text-[#2061AB]",
    Later: "border-[#2488D0] text-[#2488D0]",
    "On trigger": "border-dashed border-[#2488D0] text-[#2488D0]",
  };
  return (
    <span
      className={`inline-flex items-center rounded-md border bg-white px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${
        config[priority] ?? ""
      }`}
    >
      {priority}
    </span>
  );
}

function LegendKey({ priority }: { priority: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <PriorityBadge priority={priority} />
      <span className="text-[#040404]/70">{legendCopy[priority]}</span>
    </span>
  );
}

const legendCopy: Record<string, string> = {
  MVP: "Ship in v1",
  "MVP-ready": "Design now, evidence later",
  Later: "Phased, post-pilot",
  "On trigger": "Only when a customer requires it",
};

// ---------------------------------------------------------------
// 4. Main architecture diagram
// ---------------------------------------------------------------
function ArchitectureDiagramSection() {
  return (
    <section id="diagram" className={SECTION}>
      <div className={CONTAINER}>
        <ArchSectionHeader
          index="04"
          eyebrow="Architecture diagram"
          title="A controlled path from user to evidence."
          description="No regulated output is produced without identity, policy, version pinning, human review, and an audit record. Each layer maps to one or more frameworks above."
        />

        <div className="mt-10 space-y-0">
          {ARCH_LAYERS.map((layer, idx) => (
            <ArchitectureLayer
              key={layer.step}
              step={layer.step}
              title={layer.title}
              capabilities={layer.capabilities}
              complianceReason={layer.complianceReason}
              isLast={idx === ARCH_LAYERS.length - 1}
            />
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <Caption
            icon={UserCheck}
            label="Inputs captured"
            body="User identity, tenant, role, request payload, dataset version, schema contract."
          />
          <Caption
            icon={Sparkles}
            label="Inference captured"
            body="Model id + version, prompt id + version, retrieval snapshot, parameters, output hash."
          />
          <Caption
            icon={FileSignature}
            label="Outputs captured"
            body="Raw output, reviewed output, reviewer identity, decision, signed timestamp."
          />
        </div>
      </div>
    </section>
  );
}

function Caption({
  icon: Icon,
  label,
  body,
}: {
  icon: typeof UserCheck;
  label: string;
  body: string;
}) {
  return (
    <div className="rounded-card border border-dashed border-[rgba(32,97,171,0.30)] bg-white p-5">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-[#2061AB]" aria-hidden />
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2488D0]">
          {label}
        </p>
      </div>
      <p className="mt-2 text-[13px] leading-[1.55] text-[#040404]">{body}</p>
    </div>
  );
}

// ---------------------------------------------------------------
// 5. AI risk control panel
// ---------------------------------------------------------------
function AiRiskSection() {
  return (
    <section id="risk" className={SECTION}>
      <div className={CONTAINER}>
        <ArchSectionHeader
          index="05"
          eyebrow="AI control plane"
          title="AI adds a second control plane."
          description="Traditional SaaS controls (access, encryption, logging) are necessary but not sufficient. The AI workflow itself needs versioning, review, and reproducibility primitives."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {AI_RISKS.map((r, idx) => (
            <RiskControlCard
              key={r.risk}
              risk={r.risk}
              why={r.why}
              control={r.control}
              index={idx + 1}
            />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-start gap-3 rounded-card border border-[rgba(32,97,171,0.18)] bg-white p-5 text-[13px] leading-[1.6] text-[#040404] shadow-card">
          <AlertTriangle className="mt-0.5 h-4 w-4 flex-none text-[#2061AB]" aria-hidden />
          <p>
            <span className="font-semibold text-[#12317B]">
              Why the second plane matters:
            </span>{" "}
            a SOC 2 audit will pass even if every prompt has been silently
            rewritten and every model has been upgraded. The product control is
            what protects validated behavior in between audits.
          </p>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------
// 6. Data-flow mockup
// ---------------------------------------------------------------
function DataFlowSection() {
  return (
    <section className={SECTION}>
      <div className={CONTAINER}>
        <ArchSectionHeader
          index="06"
          eyebrow="Data flow"
          title="Compliance lives in the data path, not in the certificate."
          description="At each step, the system records the identifiers needed to reconstruct what happened, who acted, and which versions were involved."
        />

        <ol className="mt-10 grid gap-3 md:grid-cols-7">
          {DATA_FLOW.map((step, idx) => (
            <li key={step.step} className="relative flex h-full">
              <article className="flex h-full w-full flex-col rounded-card border border-[rgba(32,97,171,0.18)] bg-white p-4 shadow-card transition hover:border-[#2488D0]/60">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[#12317B] bg-white text-[11px] font-semibold text-[#12317B]">
                    {step.step}
                  </span>
                  {idx < DATA_FLOW.length - 1 ? (
                    <ArrowRight
                      className="hidden h-4 w-4 text-[#2061AB] md:block"
                      aria-hidden
                    />
                  ) : null}
                </div>
                <h3 className="mt-3 text-[13px] font-semibold leading-tight text-[#12317B]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2488D0]">
                  Logged
                </p>
                <ul className="mt-1 space-y-1">
                  {step.logged.map((l) => (
                    <li
                      key={l}
                      className="flex items-start gap-1.5 text-[11px] leading-[1.55] text-[#040404]"
                    >
                      <span
                        className="mt-1.5 h-1 w-1 flex-none rounded-full bg-[#2488D0]"
                        aria-hidden
                      />
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <NoteCard
            icon={Lock}
            title="What never gets logged in cleartext"
            body="Raw PHI / PII, secrets, full model prompts containing sensitive content. References and hashes only."
          />
          <NoteCard
            icon={Network}
            title="Why this layout earns trust"
            body="An auditor can pick any output and walk it backward — version, reviewer, input, tenant — without leaving the platform."
          />
        </div>
      </div>
    </section>
  );
}

function NoteCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Lock;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-card border border-[rgba(32,97,171,0.18)] bg-white p-5 shadow-card">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-[#2061AB]" aria-hidden />
        <p className="text-[14px] font-semibold text-[#12317B]">{title}</p>
      </div>
      <p className="mt-2 text-[13px] leading-[1.55] text-[#040404]">{body}</p>
    </div>
  );
}

// ---------------------------------------------------------------
// 7. MVP scope
// ---------------------------------------------------------------
function ScopeSection() {
  const icons = [CheckCircle2, Layers, Clock];
  return (
    <section className={SECTION}>
      <div className={CONTAINER}>
        <ArchSectionHeader
          index="07"
          eyebrow="MVP vs. later scope"
          title="Compliance-ready, not compliance-certified."
          description={
            <>
              Do not claim certification before the company has actually
              completed the audit. The MVP earns trust by shipping the controls
              that real buyers ask about — and clearly marking what is staged
              versus what is deferred.
            </>
          }
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {SCOPE_COLUMNS.map((col, idx) => {
            const Icon = icons[idx];
            const accentBorder =
              idx === 0
                ? "border-[#12317B]"
                : idx === 1
                ? "border-[#2061AB]"
                : "border-[#2488D0]";
            const headerText =
              idx === 0
                ? "text-[#12317B]"
                : idx === 1
                ? "text-[#2061AB]"
                : "text-[#2488D0]";
            const dot =
              idx === 0
                ? "bg-[#12317B]"
                : idx === 1
                ? "bg-[#2061AB]"
                : "bg-[#2488D0]";
            return (
              <article
                key={col.label}
                className={`flex h-full flex-col overflow-hidden rounded-card border-2 bg-white shadow-card ${accentBorder}`}
              >
                <div className="flex items-center justify-between border-b border-[rgba(32,97,171,0.18)] bg-white px-5 py-4">
                  <div className={`flex items-center gap-2 ${headerText}`}>
                    <Icon className="h-4 w-4" aria-hidden />
                    <p className="text-[14px] font-semibold">{col.label}</p>
                  </div>
                  <span
                    className={`rounded-md border bg-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] ${accentBorder} ${headerText}`}
                  >
                    {col.badge}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-4 px-5 py-5">
                  <p className="text-[13px] leading-[1.55] text-[#040404]">
                    {col.intent}
                  </p>
                  <ul className="space-y-2">
                    {col.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[13px] leading-[1.55] text-[#040404]"
                      >
                        <span
                          className={`mt-1.5 h-1.5 w-1.5 flex-none rounded-full ${dot}`}
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-card border-l-4 border-[#2488D0] bg-white p-5 shadow-card">
          <ClipboardCheck className="mt-0.5 h-4 w-4 flex-none text-[#2488D0]" aria-hidden />
          <p className="text-[14px] leading-[1.6] text-[#040404]">
            <span className="font-semibold text-[#12317B]">Posture:</span>{" "}
            “Yesod AI is designed for SOC 2, ISO 27001, HIPAA, GDPR, GxP, and
            21 CFR Part 11 readiness — certifications will be pursued on a
            customer-driven timeline.” Never claim a certification the company
            has not completed.
          </p>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------
// 8. Roadmap graphic
// ---------------------------------------------------------------
function RoadmapSection() {
  return (
    <section id="roadmap" className={SECTION}>
      <div className={CONTAINER}>
        <ArchSectionHeader
          index="08"
          eyebrow="Roadmap"
          title="Four phases, twelve months."
          description="A defensible sequence: frame the controls, ship the foundation, prove the enterprise posture, then layer in regulated workflow readiness."
        />

        <div className="mt-10">
          <Timeline phases={ARCH_ROADMAP} />
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------
// 9. Tradeoffs
// ---------------------------------------------------------------
function TradeoffsSection() {
  return (
    <section className={SECTION}>
      <div className={CONTAINER}>
        <ArchSectionHeader
          index="09"
          eyebrow="Tradeoffs & intentional omissions"
          title="What we chose not to do — and why."
          description="The most credible compliance posture is the one that names its limits. Each tradeoff below is a deliberate choice with a defined mitigation."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {TRADEOFFS.map((t) => (
            <TradeoffCard key={t.title} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------
// 10. Final tactical next step
// ---------------------------------------------------------------
function NextStepSection() {
  const columns: Column<(typeof NEXT_STEP_MATRIX)[number]>[] = [
    {
      key: "controlArea",
      header: "Control area",
      width: "16%",
      render: (r) => (
        <span className="font-semibold text-[#12317B]">{r.controlArea}</span>
      ),
    },
    { key: "buyerConcern", header: "Buyer concern", width: "22%" },
    { key: "productFeature", header: "Product feature", width: "20%" },
    { key: "evidence", header: "Evidence artifact", width: "20%" },
    {
      key: "priority",
      header: "MVP priority",
      width: "10%",
      render: (r) =>
        r.priority === "Must-have" ? (
          <PriorityBadge priority="MVP" />
        ) : (
          <PriorityBadge priority="Later" />
        ),
    },
    { key: "owner", header: "Owner", width: "12%" },
  ];

  return (
    <section id="next" className="bg-white">
      <div className={CONTAINER}>
        <div className="rounded-card border-2 border-[#12317B] bg-white p-8 shadow-card">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border-2 border-[#12317B] bg-white text-[#12317B]">
                <ArrowRight className="h-4 w-4" />
              </span>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2488D0]">
                Final tactical next step
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#2488D0] bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2488D0]">
              <Clock className="h-3 w-3" /> First thing tomorrow
            </span>
          </div>

          <h2 className="mt-5 text-[26px] font-semibold leading-tight text-[#12317B] sm:text-[32px]">
            Build the control-to-architecture matrix.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-[1.65] text-[#040404]">
            One artifact, owned across Engineering, Security, ML, and
            Compliance. It is the single source of truth that connects every
            buyer concern to a product feature, an evidence artifact, a
            priority, and an owner.
          </p>

          <div className="mt-7">
            <MappingTable rows={NEXT_STEP_MATRIX} columns={columns} />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Outcome
              icon={Building2}
              title="Sales unblock"
              body="Answer 80% of vendor questionnaires from a single sheet."
            />
            <Outcome
              icon={Boxes}
              title="Engineering focus"
              body="No ambiguity on which control is must-have vs. later."
            />
            <Outcome
              icon={Database}
              title="Audit-ready"
              body="Every row points to the evidence artifact we will produce."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Outcome({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Building2;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-card border border-[rgba(32,97,171,0.18)] bg-white p-4 shadow-card">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-[#2061AB]" aria-hidden />
        <p className="text-[14px] font-semibold text-[#12317B]">{title}</p>
      </div>
      <p className="mt-1 text-[12px] leading-[1.55] text-[#040404]">{body}</p>
    </div>
  );
}
