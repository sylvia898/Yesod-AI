import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  Boxes,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileSignature,
  GitBranch,
  History,
  Layers,
  LineChart,
  Lock,
  Network,
  Repeat,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Workflow,
} from "lucide-react";

export type NavLink = { path: string; label: string };

export const NAV_LINKS: NavLink[] = [
  { path: "/", label: "Overview" },
  { path: "/problem", label: "Problem" },
  { path: "/why", label: "Why" },
  { path: "/iq-oq-pq", label: "IQ / OQ / PQ" },
  { path: "/gxp", label: "GxP" },
  { path: "/llm-risk", label: "LLM" },
  { path: "/drift", label: "Drift" },
  { path: "/package", label: "Package" },
  { path: "/architecture", label: "Arch" },
  { path: "/roadmap", label: "Roadmap" },
  { path: "/scope", label: "Scope" },
  { path: "/next-step", label: "Next" },
  { path: "/references", label: "Refs" },
];

export const HERO = {
  eyebrow: "Yesod AI · Validation Research",
  title: "Software Validation for AI Clinical Programming",
  subtitle:
    "GxP, IQ/OQ/PQ, audit evidence, and LLM drift management for a cloud-native AI SaaS platform.",
  summary:
    "Pharma, biotech, and CRO buyers will not adopt clinical AI software that cannot be validated. This brief outlines a pragmatic validation strategy — qualification, traceability, audit evidence, and LLM-specific controls — that an early-stage clinical AI SaaS can implement progressively without blocking MVP velocity.",
  bullets: [
    "GxP-aligned qualification across IQ, OQ, and PQ",
    "Reproducible LLM outputs with versioned prompts and models",
    "Immutable audit trail covering every inference and human review",
    "Validation primitives that satisfy early sponsor and QA review",
    "MVP-first roadmap with deferred enterprise depth",
  ],
};

export type ProblemCard = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export const PROBLEM_CARDS: ProblemCard[] = [
  {
    icon: Database,
    title: "Clinical data is regulated",
    body:
      "Workflows touch CDISC SDTM and ADaM datasets that feed Tables, Listings, and Figures used in submissions. Every transformation must be defensible to auditors.",
  },
  {
    icon: ShieldCheck,
    title: "GxP is not a checkbox",
    body:
      "Good Clinical and Laboratory Practice expect documented evidence that the system does what it is supposed to do — and that you can prove it for years after release.",
  },
  {
    icon: Sparkles,
    title: "LLMs add new failure modes",
    body:
      "Probabilistic outputs, opaque upstream model updates, and shifting retrieval contexts break the determinism that traditional CSV assumes.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit evidence is the product",
    body:
      "Procurement and QA expect a validation package — intended use, requirements, qualifications, risk, and ongoing monitoring — not just a UI demo.",
  },
];

export type WhyCard = { icon: LucideIcon; title: string; body: string };

export const WHY_CARDS: WhyCard[] = [
  {
    icon: ShieldCheck,
    title: "Enterprise trust",
    body:
      "Pharma and CRO security and QA teams gate purchase on documented evidence. A credible validation story shortens sales cycles and unlocks pilots.",
  },
  {
    icon: LineChart,
    title: "Adoption inside trials",
    body:
      "Clinical programmers cannot use unvalidated tools for regulatory deliverables. Validation moves Yesod from sandbox to production workflows.",
  },
  {
    icon: FileSignature,
    title: "Procurement and audit",
    body:
      "Validation summary reports, traceable change control, and a signed evidence binder answer QA and inspection questions before they are even asked.",
  },
  {
    icon: AlertTriangle,
    title: "Novel AI risk",
    body:
      "Non-determinism, model drift, and RAG context churn introduce risks that existing CSAs do not address. Customers want to see those controls explicitly.",
  },
];

export type ComplianceLens = {
  icon: LucideIcon;
  title: string;
  signal: string;
  body: string;
};

export const COMPLIANCE_LENSES: ComplianceLens[] = [
  {
    icon: ClipboardCheck,
    title: "Intended use & fitness for purpose",
    signal: "GxP starts with a documented intended use statement and a risk assessment that ties every requirement to a patient-safety or data-integrity concern.",
    body:
      "Validation is the proof — not the promise — that the system does what its intended use says it does. Without it, regulated programmers cannot use the tool for submission-supporting deliverables.",
  },
  {
    icon: ShieldCheck,
    title: "Qualification across IQ, OQ, PQ",
    signal: "Risk-based IQ, OQ, and PQ generate the test evidence that a system is installed, operates, and performs as specified in the target clinical workflow.",
    body:
      "Each qualification phase produces signed artifacts — environment baselines, functional test results, real-world scenario runs — that a sponsor or inspector can re-walk years after release.",
  },
  {
    icon: FileSignature,
    title: "Audit evidence & 21 CFR Part 11",
    signal: "Electronic records and signatures must be attributable, contemporaneous, complete, and retained for the life of the regulated activity.",
    body:
      "An immutable audit trail of inputs, model and prompt versions, retrieval context, outputs, and reviewer attestations is what makes an AI-generated deliverable defensible.",
  },
];

export type IqOqPqRow = {
  phase: "IQ" | "OQ" | "PQ";
  name: string;
  intent: string;
  traditional: string;
  cloudAi: string;
  evidence: string;
};

export const IQ_OQ_PQ_ROWS: IqOqPqRow[] = [
  {
    phase: "IQ",
    name: "Installation Qualification",
    intent: "Prove the system is installed and configured to specification.",
    traditional:
      "Server build sheets, OS patches, installed component manifests.",
    cloudAi:
      "Infrastructure-as-code snapshots, container image digests, pinned model and library versions, configuration baselines per environment.",
    evidence:
      "Signed IaC plans, SBOMs, model + prompt version manifest, environment configuration diff.",
  },
  {
    phase: "OQ",
    name: "Operational Qualification",
    intent: "Prove each function operates correctly against requirements.",
    traditional:
      "Scripted test cases against documented functional requirements.",
    cloudAi:
      "Automated test suites, golden datasets, deterministic evaluations of RAG and LLM components, role-based access enforcement checks.",
    evidence:
      "Test execution logs, coverage of functional requirements, golden-dataset diff reports, RBAC test results.",
  },
  {
    phase: "PQ",
    name: "Performance Qualification",
    intent: "Prove the system performs in real clinical workflows.",
    traditional:
      "End-to-end scenario runs by trained users in the target environment.",
    cloudAi:
      "Programmer-in-the-loop scenarios on SDTM/ADaM data, TLF generation reviewed by a clinical SME, end-to-end audit trail captured.",
    evidence:
      "Signed scenario logs, reviewer attestations, sample TLF outputs, complete audit trail per run.",
  },
];

export type GxpPillar = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export const GXP_PILLARS: GxpPillar[] = [
  {
    icon: GitBranch,
    title: "Traceability",
    body:
      "Every output links back to the input dataset, requirement, prompt, model, retrieval context, and reviewer.",
  },
  {
    icon: Repeat,
    title: "Reproducibility",
    body:
      "Re-running with the same inputs and pinned versions yields the same answer — or a documented, reviewed variance.",
  },
  {
    icon: UserCheck,
    title: "Role-based access",
    body:
      "Programmer, reviewer, QA, and admin roles enforced end-to-end with least-privilege defaults.",
  },
  {
    icon: History,
    title: "Audit trails",
    body:
      "Immutable, time-stamped logs of who did what, when, with which inputs, model, and prompt version.",
  },
  {
    icon: Layers,
    title: "Version control",
    body:
      "Code, prompts, datasets, retrieval indices, and test cases are versioned and pinned per release.",
  },
  {
    icon: Network,
    title: "Data lineage",
    body:
      "Source-to-deliverable lineage across SDTM, ADaM, derivations, and TLF outputs.",
  },
  {
    icon: Workflow,
    title: "Change control",
    body:
      "Documented review and approval for any change that can materially affect validated behavior.",
  },
  {
    icon: ClipboardCheck,
    title: "Validation evidence",
    body:
      "URS, FRS, risk, IQ, OQ, PQ, and a signed summary report retained for the life of the system.",
  },
];

export type LlmRisk = {
  icon: LucideIcon;
  title: string;
  impact: "High" | "Medium" | "Low";
  description: string;
  mitigation: string;
};

export const LLM_RISKS: LlmRisk[] = [
  {
    icon: Sparkles,
    title: "Non-deterministic outputs",
    impact: "High",
    description:
      "Same input can yield different outputs across runs, breaking reproducibility assumptions.",
    mitigation:
      "Lower temperature, fixed seeds where supported, structured outputs, and capture every output verbatim.",
  },
  {
    icon: FileSignature,
    title: "Prompt and template changes",
    impact: "High",
    description:
      "Edits to a prompt template are software changes that can alter validated behavior.",
    mitigation:
      "Version prompts as code, gate changes through change control, re-run golden tests on every change.",
  },
  {
    icon: Boxes,
    title: "Model / provider API updates",
    impact: "High",
    description:
      "Provider can deprecate or silently upgrade models, shifting outputs on the same prompt.",
    mitigation:
      "Pin model versions, subscribe to deprecation notices, schedule re-validation windows.",
  },
  {
    icon: Database,
    title: "RAG knowledge base changes",
    impact: "Medium",
    description:
      "Adding, editing, or re-chunking documents can change retrieved context and therefore outputs.",
    mitigation:
      "Version the index, snapshot per release, and run regression tests when the corpus changes.",
  },
  {
    icon: Layers,
    title: "Dataset / schema changes",
    impact: "Medium",
    description:
      "Upstream SDTM or ADaM schema drift breaks derivations or retrieval cues.",
    mitigation:
      "Schema contracts, validation gates on ingest, and explicit re-qualification on schema bumps.",
  },
  {
    icon: UserCheck,
    title: "Human review gaps",
    impact: "High",
    description:
      "Without enforced review, hallucinated values can flow into regulated deliverables.",
    mitigation:
      "Mandatory reviewer step on regulated outputs, with reviewer identity and decision captured.",
  },
  {
    icon: AlertTriangle,
    title: "Hallucination risk",
    impact: "High",
    description:
      "Plausible but unsupported numbers, citations, or claims in generated content.",
    mitigation:
      "Ground outputs in retrieved or computed evidence, cite sources, and run factuality evaluations.",
  },
  {
    icon: Repeat,
    title: "Reproducibility gaps",
    impact: "Medium",
    description:
      "Outputs cannot be re-created later because context or model state was not captured.",
    mitigation:
      "Persist model id, prompt id, retrieval snapshot id, inputs, and outputs for every inference.",
  },
];

export type DriftControl = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export const DRIFT_CONTROLS: DriftControl[] = [
  {
    icon: Lock,
    title: "Pin model versions",
    body:
      "Reference models by explicit provider version, date, or deployment id and avoid floating aliases.",
  },
  {
    icon: FileSignature,
    title: "Version prompts",
    body: "Prompts live in source control with semantic versioning and review.",
  },
  {
    icon: Database,
    title: "Version test datasets",
    body:
      "Golden inputs and expected outputs are versioned and tagged to each release.",
  },
  {
    icon: CheckCircle2,
    title: "Keep golden test cases",
    body:
      "Curated representative inputs covering critical clinical scenarios and edge cases.",
  },
  {
    icon: LineChart,
    title: "Monitor output changes",
    body:
      "Automated diffs between runs flag drift before it reaches a regulated deliverable.",
  },
  {
    icon: Workflow,
    title: "Require re-validation",
    body:
      "Material behavior changes trigger a documented re-qualification cycle and signed summary.",
  },
  {
    icon: History,
    title: "Capture full inference context",
    body:
      "Audit log records model id, prompt id, retrieval snapshot, input, output, timestamp, and user.",
  },
];

export type ChecklistItem = { title: string; body: string };

export const VALIDATION_PACKAGE: ChecklistItem[] = [
  {
    title: "System intended use statement",
    body:
      "What the system is for, what it is not for, and the patient / data safety boundary.",
  },
  {
    title: "User requirements specification",
    body:
      "Clinical programmer and reviewer needs expressed in testable language.",
  },
  {
    title: "Functional requirements",
    body:
      "System behaviors that satisfy the URS, traceable to test cases.",
  },
  {
    title: "Risk assessment",
    body:
      "ICH Q9-aligned analysis of patient, data integrity, and reproducibility risks.",
  },
  {
    title: "IQ test evidence",
    body: "Environment, infrastructure, model, and prompt version baselines.",
  },
  {
    title: "OQ test evidence",
    body: "Automated and manual test results against functional requirements.",
  },
  {
    title: "PQ scenario evidence",
    body:
      "Real-world clinical workflows executed by trained users with signed results.",
  },
  {
    title: "Audit trail design",
    body:
      "Schema, retention, and integrity controls for the immutable evidence store.",
  },
  {
    title: "Change control process",
    body:
      "Who reviews and approves changes to code, prompts, models, and data contracts.",
  },
  {
    title: "Access control matrix",
    body:
      "Roles, permissions, and SoD checks across programmer, reviewer, QA, and admin.",
  },
  {
    title: "Validation summary report",
    body:
      "Signed conclusion that the system is fit for intended use with known limitations.",
  },
  {
    title: "Known limitations and HITL policy",
    body:
      "Where the AI can and cannot act unsupervised, and the required human review gates.",
  },
];

export type ArchNode = {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
};

export const ARCH_NODES: ArchNode[] = [
  {
    id: "request",
    label: "User Request",
    description: "Clinical programmer initiates a workflow.",
    icon: UserCheck,
  },
  {
    id: "auth",
    label: "Auth / RBAC",
    description: "Identity, role, and least-privilege enforcement.",
    icon: Lock,
  },
  {
    id: "workflow",
    label: "Workflow Engine",
    description: "Orchestrates qualified steps and review gates.",
    icon: Workflow,
  },
  {
    id: "data",
    label: "Data Validation",
    description: "SDTM / ADaM schema contracts and input checks.",
    icon: Database,
  },
  {
    id: "llm",
    label: "LLM / RAG Service",
    description: "Pinned model + versioned prompts + snapshotted index.",
    icon: Sparkles,
  },
  {
    id: "review",
    label: "Human Review",
    description: "Reviewer attestation captured per regulated output.",
    icon: UserCheck,
  },
  {
    id: "output",
    label: "Output Generation",
    description: "Tables, listings, figures, and structured artifacts.",
    icon: FileSignature,
  },
  {
    id: "audit",
    label: "Audit Evidence Store",
    description: "Immutable log of inputs, context, model, output, and signers.",
    icon: History,
  },
  {
    id: "monitor",
    label: "Monitoring / Change Control",
    description: "Drift detection, re-validation triggers, and approvals.",
    icon: LineChart,
  },
];

export type Phase = {
  id: string;
  title: string;
  horizon: string;
  bullets: string[];
};

export const ROADMAP: Phase[] = [
  {
    id: "phase-0",
    title: "Phase 0 · MVP foundations",
    horizon: "Months 0–2",
    bullets: [
      "Intended use statement and URS draft",
      "Pinned models and versioned prompts",
      "Basic RBAC and tenant isolation",
      "Append-only event log for inference + review",
    ],
  },
  {
    id: "phase-1",
    title: "Phase 1 · Auditability and controlled workflows",
    horizon: "Months 2–5",
    bullets: [
      "Golden datasets and automated evaluations",
      "Reviewer step with electronic signature semantics",
      "Change control workflow for prompts and models",
      "Audit evidence export for sponsor and QA review",
    ],
  },
  {
    id: "phase-2",
    title: "Phase 2 · IQ/OQ/PQ validation package",
    horizon: "Months 5–9",
    bullets: [
      "Formal IQ, OQ, and PQ protocols and execution",
      "Risk assessment and traceability matrix",
      "Validation summary report v1, signed",
      "Customer-ready evidence binder per release",
    ],
  },
  {
    id: "phase-3",
    title: "Phase 3 · Part 11 & regulated-record depth",
    horizon: "Months 9–14",
    bullets: [
      "21 CFR Part 11 e-signature semantics and signer identity proofing",
      "Long-term record retention and integrity controls",
      "Continuous drift monitoring with re-validation triggers",
      "Per-tenant validation environment for customer-led PQ",
    ],
  },
  {
    id: "phase-4",
    title: "Phase 4 · Advanced validation automation",
    horizon: "Months 14+",
    bullets: [
      "Self-service evaluation harness for customers",
      "Automated re-validation on model or corpus change",
      "Continuous validation dashboards",
      "Customer-managed golden datasets",
    ],
  },
];

export const MUST_HAVE: string[] = [
  "Intended use statement and URS",
  "Risk assessment tied to patient safety and data integrity",
  "Pinned models and versioned prompts",
  "Append-only audit log of every inference",
  "Reviewer attestation for regulated outputs",
  "Golden dataset with expected outputs",
  "Change control for prompts, models, and retrieval indices",
  "Traceability matrix from URS to test evidence",
  "Validation-grade event log with model, prompt, and retrieval IDs",
];

export const DEFER: string[] = [
  "Formal IQ/OQ/PQ protocols and signed VSR",
  "Full 21 CFR Part 11 electronic signature module",
  "Customer-managed validation harness",
  "Per-tenant validation environment",
  "Continuous validation dashboards",
  "Automated re-validation on model or corpus change",
];

export type ReferenceItem = { title: string; note: string };

// =============================================================
// Architecture page data
// =============================================================

export type ArchSummaryCard = {
  icon: LucideIcon;
  label: string;
  title: string;
  body: string;
};

export const ARCH_SUMMARY: ArchSummaryCard[] = [
  {
    icon: ClipboardCheck,
    label: "Intended use",
    title: "GxP fitness for clinical workflows",
    body: "Documented intended use, URS/FRS, and risk assessment anchor every validation activity to a real clinical responsibility.",
  },
  {
    icon: ShieldCheck,
    label: "Qualification",
    title: "Risk-based IQ / OQ / PQ",
    body: "Installation, operational, and performance qualification produce signed evidence that the system is fit for its target workflow.",
  },
  {
    icon: FileSignature,
    label: "Audit evidence",
    title: "Part 11-ready record & signature trail",
    body: "Immutable trail of inputs, model and prompt versions, retrieval snapshots, outputs, and reviewer attestations — replayable years later.",
  },
];

export type ComplianceLayer = {
  tier: string;
  title: string;
  frameworks: string[];
  explanation: string;
  buyerSignal: string;
};

export const COMPLIANCE_LAYERS: ComplianceLayer[] = [
  {
    tier: "Layer 1",
    title: "Intended use & validation planning",
    frameworks: ["URS / FRS", "Risk assessment", "GAMP 5 category"],
    explanation:
      "Frames what the system is for, who it is for, and the risk posture that drives test rigor and review depth.",
    buyerSignal:
      "Quality and regulatory teams gate adoption on a credible intended use and risk-based plan before any test evidence is reviewed.",
  },
  {
    tier: "Layer 2",
    title: "Qualification & test evidence",
    frameworks: ["IQ", "OQ", "PQ", "Traceability matrix"],
    explanation:
      "Risk-based qualification produces signed test results that map every functional requirement to executed evidence.",
    buyerSignal:
      "Sponsors and inspectors expect to walk URS → FRS → test case → result without gaps; missing traceability is the most common finding.",
  },
  {
    tier: "Layer 3",
    title: "Audit evidence & change control",
    frameworks: ["21 CFR Part 11", "ICH GCP", "Change control"],
    explanation:
      "Immutable records, e-signature semantics, and a documented change process keep validated behavior defensible over time.",
    buyerSignal:
      "Auditors look first at the change log and the signed VSR; a clean trail is the difference between an inspection finding and a clean close-out.",
  },
];

export type MappingRow = {
  framework: string;
  proves: string;
  capability: string;
  priority: "MVP" | "MVP-ready" | "Later" | "On trigger";
  evidence: string;
};

export const COMPLIANCE_MAPPING: MappingRow[] = [
  {
    framework: "Intended use & URS",
    proves: "What the system is for and what testable user needs follow from it.",
    capability:
      "Intended use statement, URS, scope boundaries, out-of-scope declarations.",
    priority: "MVP",
    evidence: "Signed intended use statement, URS, scope and assumptions log.",
  },
  {
    framework: "Risk assessment (ICH Q9)",
    proves: "That qualification rigor matches patient and data-integrity risk.",
    capability:
      "Risk register linking hazards to controls and test coverage.",
    priority: "MVP",
    evidence: "Risk register, severity/probability scoring, mitigation map.",
  },
  {
    framework: "IQ — Installation Qualification",
    proves: "The system is installed and configured to specification.",
    capability:
      "Infrastructure-as-code baselines, container image digests, pinned model and library versions.",
    priority: "MVP-ready",
    evidence: "Signed IaC plans, SBOMs, model + prompt version manifest, environment diff.",
  },
  {
    framework: "OQ — Operational Qualification",
    proves: "Each function operates correctly against documented requirements.",
    capability:
      "Automated test suites, golden datasets, deterministic evaluations of RAG and LLM components.",
    priority: "MVP-ready",
    evidence: "Test execution logs, requirement coverage, golden-dataset diff reports.",
  },
  {
    framework: "PQ — Performance Qualification",
    proves: "The system performs in real clinical workflows under intended use.",
    capability:
      "Programmer-in-the-loop scenarios on SDTM/ADaM data with end-to-end audit capture.",
    priority: "Later",
    evidence: "Signed scenario logs, reviewer attestations, sample TLF outputs.",
  },
  {
    framework: "Traceability matrix",
    proves: "Every requirement maps to a test case and to executed evidence.",
    capability:
      "Tooling that links URS ↔ FRS ↔ test cases ↔ runs ↔ outputs across releases.",
    priority: "MVP-ready",
    evidence: "Live traceability matrix exported per release.",
  },
  {
    framework: "21 CFR Part 11",
    proves:
      "Electronic records and signatures are attributable, contemporaneous, and durable.",
    capability:
      "Immutable audit trail, e-signature meaning, signer identity, timestamp, record retention.",
    priority: "On trigger",
    evidence:
      "Audit trail spec, e-signature workflow, retention policy, identity proof linkage.",
  },
  {
    framework: "Change control (GAMP 5)",
    proves: "Material changes to validated behavior are reviewed and re-qualified.",
    capability:
      "Documented review/approval for code, prompt, model, schema, and retrieval index changes.",
    priority: "MVP",
    evidence: "Change tickets, approval records, re-validation test runs.",
  },
  {
    framework: "Validation Summary Report",
    proves: "Signed conclusion that the system is fit for intended use with known limits.",
    capability:
      "Consolidated narrative across IQ, OQ, PQ, risk, traceability, and known limitations.",
    priority: "Later",
    evidence: "Signed VSR per release, retained for the life of the system.",
  },
];

export type ArchLayerCard = {
  step: number;
  title: string;
  capabilities: string[];
  complianceReason: string;
};

export const ARCH_LAYERS: ArchLayerCard[] = [
  {
    step: 0,
    title: "Enterprise user · Pharma admin",
    capabilities: ["Programmer", "Reviewer", "QA / Compliance", "Tenant admin"],
    complianceReason:
      "Defined personas anchor SoD and least-privilege design from day one.",
  },
  {
    step: 1,
    title: "Identity & access layer",
    capabilities: [
      "SSO · SAML / OIDC",
      "MFA enforcement",
      "RBAC + ABAC",
      "Tenant-aware permissions",
    ],
    complianceReason:
      "Strong user identity and least-privilege access are prerequisites for Part 11 attributable records and reviewer attestation.",
  },
  {
    step: 2,
    title: "Application & policy layer",
    capabilities: [
      "API gateway",
      "Policy enforcement point",
      "Tenant isolation",
      "Rate limits & admin controls",
    ],
    complianceReason:
      "Centralized policy enforcement is the chokepoint auditors look for to verify tenant separation.",
  },
  {
    step: 3,
    title: "AI workflow layer",
    capabilities: [
      "Workflow orchestration",
      "Prompt templates",
      "Human review queue",
      "Approval gates",
    ],
    complianceReason:
      "Explicit review and approval gates are how regulated outputs stay defensible under GxP scrutiny.",
  },
  {
    step: 4,
    title: "Model governance layer",
    capabilities: [
      "Model gateway",
      "Model / provider version tracking",
      "Prompt version tracking",
      "Output traceability & rollback",
    ],
    complianceReason:
      "Version pinning + rollback reduces AI drift risk and makes outputs reproducible months later.",
  },
  {
    step: 5,
    title: "Data layer",
    capabilities: [
      "Encrypted relational DB",
      "Encrypted object storage",
      "Tenant-isolated vector store",
      "Secrets management & retention",
    ],
    complianceReason:
      "Tenant-isolated, versioned data and retrieval state is what makes a regulated output reproducible months after release.",
  },
  {
    step: 6,
    title: "Evidence & monitoring layer",
    capabilities: [
      "Immutable audit logs",
      "Access monitoring",
      "Change logs",
      "Compliance evidence export · alerting",
    ],
    complianceReason:
      "An independent evidence store is what survives inspections and regulated traceability requests years after a release.",
  },
];

export type AiRisk = {
  risk: string;
  why: string;
  control: string;
};

export const AI_RISKS: AiRisk[] = [
  {
    risk: "Prompt drift",
    why: "Edits to a prompt template silently change validated behavior.",
    control: "Prompt versioning, code review, golden-test gate on every change.",
  },
  {
    risk: "Model drift",
    why: "Providers deprecate or upgrade models; outputs shift on the same input.",
    control: "Model gateway with pinned versions, provider event log, rollback policy.",
  },
  {
    risk: "Data leakage",
    why: "Sensitive trial data can flow into prompts, logs, or vector stores unintentionally and break reproducibility evidence.",
    control: "Field-level redaction, per-tenant isolation, data minimization at ingest, and references-not-content in the audit trail.",
  },
  {
    risk: "Hallucinated output",
    why: "Plausible but unsupported values reach a regulated deliverable.",
    control: "Human review gate, confidence flags, source references on every claim.",
  },
  {
    risk: "Non-reproducible result",
    why: "Auditor asks 'rerun this from 6 months ago' and the context is gone.",
    control: "Snapshot inputs, prompt version, model version, and output hash per run.",
  },
];

export type DataFlowStep = {
  step: number;
  title: string;
  logged: string[];
};

export const DATA_FLOW: DataFlowStep[] = [
  {
    step: 1,
    title: "Customer dataset",
    logged: ["User ID", "Tenant ID", "Input dataset reference", "Timestamp"],
  },
  {
    step: 2,
    title: "Classification & redaction",
    logged: ["Data sensitivity classification", "Redaction policy version", "Timestamp"],
  },
  {
    step: 3,
    title: "Tenant workspace",
    logged: ["Tenant ID", "Workspace ID", "Access path", "Timestamp"],
  },
  {
    step: 4,
    title: "AI workflow",
    logged: [
      "Prompt / template version",
      "Model / provider version",
      "Retrieval snapshot ID",
      "Parameters",
    ],
  },
  {
    step: 5,
    title: "Human review",
    logged: [
      "Reviewer identity",
      "Decision (approve / edit / reject)",
      "Reason for change",
      "Timestamp",
    ],
  },
  {
    step: 6,
    title: "Approved output",
    logged: ["Output version", "Output hash", "Signer identity", "Timestamp"],
  },
  {
    step: 7,
    title: "Audit / evidence export",
    logged: ["Export ID", "Retention policy", "Requester identity", "Timestamp"],
  },
];

export type ScopeColumn = {
  label: string;
  badge: string;
  intent: string;
  items: string[];
};

export const SCOPE_COLUMNS: ScopeColumn[] = [
  {
    label: "Build in MVP",
    badge: "Now",
    intent: "Concrete validation primitives shipped with the first pilot.",
    items: [
      "Intended use statement and URS draft",
      "Risk assessment (ICH Q9-aligned)",
      "Pinned models and versioned prompts",
      "Append-only audit log of every inference",
      "Reviewer attestation on regulated outputs",
      "Golden dataset and automated evaluations",
      "Change control for prompts, models, and indices",
      "Output traceability records (model + prompt + retrieval + input)",
    ],
  },
  {
    label: "Prepare but do not overbuild",
    badge: "Stage",
    intent: "Designed-in hooks that let formal qualification follow without rework.",
    items: [
      "IQ/OQ/PQ protocol templates and traceability matrix structure",
      "Part 11-compatible audit trail and signing workflow design",
      "Validation evidence export for sponsors and QA",
      "Drift monitoring with re-validation triggers",
      "Per-tenant validation environment scaffolding",
    ],
  },
  {
    label: "Defer until customer or regulatory trigger",
    badge: "Defer",
    intent: "Real cost; only invest when a sponsor or inspector requires it.",
    items: [
      "Full IQ/OQ/PQ execution and signed Validation Summary Report",
      "Full Part 11 e-signature module with identity proofing",
      "Customer-managed validation harness",
      "Per-tenant validation environment in production",
      "Continuous validation dashboards",
    ],
  },
];

export type RoadmapPhase = {
  id: string;
  phase: string;
  horizon: string;
  title: string;
  items: string[];
};

export const ARCH_ROADMAP: RoadmapPhase[] = [
  {
    id: "phase-0",
    phase: "Phase 0",
    horizon: "Now · first 2 weeks",
    title: "Frame the controls",
    items: [
      "Define control matrix",
      "Define data classification model",
      "Design audit log schema",
      "Map buyer requirements to product controls",
    ],
  },
  {
    id: "phase-1",
    phase: "Phase 1",
    horizon: "0 – 3 months",
    title: "MVP validation foundation",
    items: [
      "Intended use statement and URS draft",
      "Pinned models and versioned prompts",
      "Model gateway with version tracking",
      "Append-only inference + review log",
      "Golden dataset v0 with expected outputs",
      "Risk assessment v0",
    ],
  },
  {
    id: "phase-2",
    phase: "Phase 2",
    horizon: "3 – 6 months",
    title: "Auditable workflows",
    items: [
      "Reviewer step with e-signature semantics",
      "Change control for prompts, models, and indices",
      "Automated OQ evaluations on every release",
      "Drift detection with re-validation triggers",
      "Validation evidence export for sponsors and QA",
    ],
  },
  {
    id: "phase-3",
    phase: "Phase 3",
    horizon: "6 – 12 months",
    title: "Formal qualification & Part 11 depth",
    items: [
      "Part 11-compatible audit / e-signature implementation",
      "IQ / OQ / PQ protocols executed per release",
      "Live traceability matrix",
      "Signed Validation Summary Report",
      "Customer-ready evidence binder",
    ],
  },
];

export type Tradeoff = {
  title: string;
  decision: string;
  reason: string;
  risk: string;
  mitigation: string;
};

export const TRADEOFFS: Tradeoff[] = [
  {
    title: "Validation depth vs. startup speed",
    decision: "Ship validation-ready primitives in MVP; defer full IQ/OQ/PQ execution.",
    reason:
      "A full validation package on day one is months of overhead that delays the product without unblocking the first pilots.",
    risk: "Sponsor or QA asks for a signed VSR on day one and walks if it does not exist.",
    mitigation:
      "Deliver a credible validation plan, dated qualification timeline, and a working evidence binder skeleton populated per release.",
  },
  {
    title: "External LLM API vs. self-hosted model",
    decision: "Start with a provider model behind a model gateway.",
    reason:
      "Self-hosting adds infra, MLOps, and re-qualification cost the MVP cannot absorb; the gateway preserves optionality and version pinning.",
    risk: "Provider-side model upgrade silently shifts outputs and breaks reproducibility.",
    mitigation:
      "Pinned model versions, provider deprecation feed, golden-test gate on every change, documented rollback procedure.",
  },
  {
    title: "Rich audit logging vs. data minimization",
    decision: "Log identifiers, versions, and hashes; do not persist raw clinical content.",
    reason:
      "Reproducibility for inspectors and minimization for sponsors can both be met with references and content hashes.",
    risk: "Logs accidentally capture sensitive content during incident triage.",
    mitigation:
      "Field-level redaction before write, encrypted log store, restricted log access, and periodic log-content reviews.",
  },
  {
    title: "Part 11 compatibility vs. full Part 11 implementation",
    decision: "Design the audit trail and signing workflow to be Part 11-compatible without claiming full compliance.",
    reason:
      "Full Part 11 only matters when the platform is the system-of-record; most MVP customers run it alongside an existing eTMF or eQMS.",
    risk: "First regulated buyer treats the design statement as a compliance claim.",
    mitigation:
      "Explicit language: 'Part 11-ready architecture; full qualification completed jointly with customer at deployment time.'",
  },
  {
    title: "Full validation matrix vs. focused MVP scope",
    decision: "Pick the validation artifacts that unblock the first pilot, not the union of every GxP framework.",
    reason:
      "Over-claiming dilutes credibility; reviewers notice 'check-the-box' validation immediately.",
    risk: "A sponsor's internal framework asks for an artifact not in scope and slows the deal.",
    mitigation:
      "Maintain an artifact crosswalk so net-new requests are scoped additions, not surprises.",
  },
];

export type NextStepRow = {
  controlArea: string;
  buyerConcern: string;
  productFeature: string;
  evidence: string;
  priority: string;
  owner: string;
};

export const NEXT_STEP_MATRIX: NextStepRow[] = [
  {
    controlArea: "Access control",
    buyerConcern: "Can only authorized users access data?",
    productFeature: "SSO + RBAC",
    evidence: "Access policy, access review log",
    priority: "Must-have",
    owner: "Engineering / Security",
  },
  {
    controlArea: "Audit trail",
    buyerConcern: "Can actions be reconstructed?",
    productFeature: "Immutable event log",
    evidence: "Audit log export",
    priority: "Must-have",
    owner: "Engineering",
  },
  {
    controlArea: "AI reproducibility",
    buyerConcern: "Can AI output be traced?",
    productFeature: "Prompt / model version logging",
    evidence: "Output trace record",
    priority: "Must-have",
    owner: "ML / Platform",
  },
  {
    controlArea: "Regulated records",
    buyerConcern: "Can e-records and e-signatures be trusted?",
    productFeature: "Part 11-compatible audit / e-signature design",
    evidence: "Validation evidence",
    priority: "Later",
    owner: "Product / Compliance",
  },
];

export const REFERENCES: { category: string; items: ReferenceItem[] }[] = [
  {
    category: "FDA · 21 CFR Part 11",
    items: [
      {
        title: "Electronic Records; Electronic Signatures",
        note: "Add official FDA source link here.",
      },
      {
        title: "Computer Software Assurance for Production and Quality System Software",
        note: "Add official FDA guidance link here.",
      },
    ],
  },
  {
    category: "GAMP 5",
    items: [
      {
        title: "ISPE GAMP 5 (Second Edition) — Risk-Based Approach",
        note: "Add official ISPE source link here.",
      },
    ],
  },
  {
    category: "ICH · Good Clinical Practice",
    items: [
      {
        title: "ICH E6(R3) Good Clinical Practice",
        note: "Add official ICH source link here.",
      },
    ],
  },
  {
    category: "CDISC · SDTM / ADaM",
    items: [
      {
        title: "CDISC SDTM Implementation Guide",
        note: "Add official CDISC source link here.",
      },
      {
        title: "CDISC ADaM Implementation Guide",
        note: "Add official CDISC source link here.",
      },
    ],
  },
  {
    category: "Audit logging & evidence",
    items: [
      {
        title: "NIST SP 800-92 — Guide to Computer Security Log Management",
        note: "Add official NIST source link here.",
      },
      {
        title: "ALCOA+ data integrity principles",
        note: "Add official MHRA / WHO source link here.",
      },
    ],
  },
  {
    category: "AI/ML validation guidance",
    items: [
      {
        title: "FDA — Artificial Intelligence and Machine Learning in Software as a Medical Device",
        note: "Add official FDA source link here.",
      },
      {
        title: "ICH Q9(R1) Quality Risk Management",
        note: "Add official ICH source link here.",
      },
    ],
  },
];
