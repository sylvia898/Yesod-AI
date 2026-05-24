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
    "Security controls that satisfy early enterprise vendor review",
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
      "Validation summary reports, SOC 2 alignment, and traceable change control answer the vendor questionnaire before it is even sent.",
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
    icon: ShieldCheck,
    title: "General security compliance",
    signal: "SOC 2 Type I readiness first; Type II after controls operate over time. ISO 27001 can follow for global procurement depth.",
    body:
      "Shows enterprise buyers that Yesod protects customer data through access controls, encryption, vendor risk, incident response, logging, and operational governance.",
  },
  {
    icon: ClipboardCheck,
    title: "Life sciences validation",
    signal: "GxP asks whether the system is fit for its intended use, with risk-based IQ, OQ, PQ, traceability, change control, and validation evidence.",
    body:
      "This is different from SOC 2: the question is not only whether the company is secure, but whether regulated clinical outputs are reproducible, reviewed, and audit-defensible.",
  },
  {
    icon: FileSignature,
    title: "Privacy and regulated records",
    signal: "HIPAA, GDPR, and 21 CFR Part 11 depend on data type and workflow; de-identified trial data lowers scope but does not remove diligence.",
    body:
      "The architecture should classify PHI and personal data, preserve electronic records, support e-signature-ready attestations, and retain evidence for inspections.",
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
      "Audit export for customer security reviews",
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
    title: "Phase 3 · Enterprise readiness",
    horizon: "Months 9–14",
    bullets: [
      "SOC 2 Type I → Type II alignment",
      "21 CFR Part 11-style e-signature and record controls",
      "Continuous drift monitoring with alerting",
      "Customer-tenant data residency options",
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
  "Intended use and URS",
  "SOC 2-ready security control narrative",
  "Encryption, access monitoring, and tenant isolation",
  "Pinned models and versioned prompts",
  "RBAC with least-privilege defaults",
  "Append-only audit log of every inference",
  "Reviewer attestation for regulated outputs",
  "Golden dataset with expected outputs",
  "Change control for prompts and models",
  "Data classification for PHI, personal data, and de-identified trials",
];

export const DEFER: string[] = [
  "Formal IQ/OQ/PQ protocols and signed VSR",
  "Full 21 CFR Part 11 electronic signature module",
  "SOC 2 Type II audit",
  "ISO 27001 certification",
  "HIPAA/GDPR expansion for identifiable production data",
  "Customer-managed validation harness",
  "Per-tenant data residency",
  "Continuous validation dashboards",
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
    icon: ShieldCheck,
    label: "Security baseline",
    title: "SOC 2 / ISO 27001 readiness",
    body: "Foundational controls — access, encryption, vendor risk, logging — designed to clear enterprise InfoSec review.",
  },
  {
    icon: ClipboardCheck,
    label: "Regulatory readiness",
    title: "GxP & 21 CFR Part 11 support",
    body: "Validated workflow primitives — traceability, change control, e-record integrity — ready for regulated phases.",
  },
  {
    icon: Lock,
    label: "Privacy posture",
    title: "HIPAA / GDPR-aware data flow",
    body: "Data is classified, minimized, and isolated per tenant; de-identified by default; auditable end-to-end.",
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
    title: "Enterprise security",
    frameworks: ["SOC 2 Type I/II", "ISO 27001"],
    explanation:
      "Baseline trust controls every B2B SaaS vendor is expected to demonstrate before procurement will sign.",
    buyerSignal:
      "InfoSec reviewers gate the contract on these; without them, the conversation never reaches the science team.",
  },
  {
    tier: "Layer 2",
    title: "Life sciences readiness",
    frameworks: ["GxP", "GCP", "GLP", "21 CFR Part 11"],
    explanation:
      "Evidence that the platform can support validated, audit-defensible workflows around regulated clinical activity.",
    buyerSignal:
      "Quality and regulatory teams gate adoption inside trials on this; SOC 2 alone does not prove fitness for GxP use.",
  },
  {
    tier: "Layer 3",
    title: "Privacy & data protection",
    frameworks: ["HIPAA", "GDPR", "De-identified trial data"],
    explanation:
      "Controls around personal and health data — lawful basis, minimization, subject rights, and re-identification risk.",
    buyerSignal:
      "Privacy and legal teams gate cross-border and PHI workflows here; de-identification reduces — but does not erase — scope.",
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
    framework: "SOC 2 Type I",
    proves: "Design of security controls at a point in time.",
    capability:
      "Documented policies, access control design, vendor risk process, change management baseline.",
    priority: "MVP-ready",
    evidence: "Policy set, control narrative, access matrix, vendor list.",
  },
  {
    framework: "SOC 2 Type II",
    proves: "Operating effectiveness of controls across a 6–12 month window.",
    capability:
      "Continuous audit logs, access reviews, incident records, change management evidence.",
    priority: "Later",
    evidence:
      "Audit log exports, quarterly access reviews, incident postmortems, change tickets.",
  },
  {
    framework: "ISO 27001",
    proves: "Formal Information Security Management System (ISMS).",
    capability:
      "Risk register, asset inventory, ISMS policies, internal audit program.",
    priority: "Later",
    evidence: "ISMS scope, Statement of Applicability, risk register, internal audit reports.",
  },
  {
    framework: "GxP readiness",
    proves: "Ability to support validated workflows in regulated clinical use.",
    capability:
      "Validation plan, requirements traceability, test evidence, controlled change process.",
    priority: "MVP-ready",
    evidence:
      "Validation plan, URS/FRS, traceability matrix, IQ/OQ/PQ test results.",
  },
  {
    framework: "21 CFR Part 11",
    proves:
      "Electronic records and signatures are trustworthy when the product is system-of-record.",
    capability:
      "Immutable audit trail, e-signature meaning, signer identity, timestamp, record retention.",
    priority: "On trigger",
    evidence:
      "Audit trail spec, e-signature workflow, retention policy, identity proof linkage.",
  },
  {
    framework: "HIPAA",
    proves: "Safeguards when Protected Health Information is processed.",
    capability:
      "Access safeguards, encryption at rest/transit, audit logs, BAA readiness.",
    priority: "MVP",
    evidence:
      "Encryption inventory, access logs, breach response plan, signed BAAs.",
  },
  {
    framework: "GDPR",
    proves: "Lawful and proportionate handling of EU personal data.",
    capability:
      "Data minimization, DPA support, deletion/export workflow, lawful basis records.",
    priority: "MVP",
    evidence:
      "Data map, DPA template, DSAR runbook, lawful basis register.",
  },
  {
    framework: "De-identified clinical data",
    proves: "Reduced — but not zero — privacy risk for trial datasets.",
    capability:
      "De-identification assumptions, re-identification risk controls, contractual boundaries.",
    priority: "MVP",
    evidence:
      "De-id method statement, risk assessment, MSA/DPA clauses, customer scope letter.",
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
      "RBAC + SSO supports SOC 2 access control criteria and Part 11 user identity requirements.",
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
      "Encryption + tenant isolation is the technical proof behind HIPAA, GDPR, and SOC 2 confidentiality claims.",
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
      "An independent evidence store is what survives vendor assessment and regulated traceability requests.",
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
    why: "PHI / PII can flow into prompts, logs, or vector stores unintentionally.",
    control: "PHI/PII redaction, per-tenant isolation, data minimization at ingest.",
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
    logged: ["PHI / PII classification", "Redaction policy version", "Timestamp"],
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
    intent: "Concrete controls shipped with the first enterprise pilot.",
    items: [
      "Tenant isolation",
      "RBAC with least-privilege defaults",
      "Encryption in transit and at rest",
      "Audit log foundation",
      "Access monitoring",
      "Data classification (PHI / PII / de-identified)",
      "Vendor questionnaire evidence pack",
      "Basic change management",
      "Model / prompt logging",
    ],
  },
  {
    label: "Prepare but do not overbuild",
    badge: "Stage",
    intent: "Designed-in hooks that let formal certification follow without rework.",
    items: [
      "SOC 2 Type I readiness",
      "ISO 27001 policy structure",
      "Part 11-compatible audit trail design",
      "GxP validation evidence structure",
      "Compliance evidence export",
    ],
  },
  {
    label: "Defer until customer or regulatory trigger",
    badge: "Defer",
    intent: "Real cost; only invest when a buyer or regulator requires it.",
    items: [
      "SOC 2 Type II audit",
      "Formal ISO 27001 certification",
      "Full Part 11 e-signature workflow",
      "Full GxP validation package",
      "Dedicated validation environment",
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
    title: "MVP foundation",
    items: [
      "Tenant isolation",
      "RBAC",
      "Encryption in transit & at rest",
      "Centralized logging",
      "Model gateway",
      "Basic compliance evidence folder",
    ],
  },
  {
    id: "phase-2",
    phase: "Phase 2",
    horizon: "3 – 6 months",
    title: "Enterprise readiness",
    items: [
      "SOC 2 Type I preparation",
      "Access review workflow",
      "Incident response process",
      "Vendor risk process",
      "Security monitoring dashboard",
    ],
  },
  {
    id: "phase-3",
    phase: "Phase 3",
    horizon: "6 – 12 months",
    title: "Regulated workflow readiness",
    items: [
      "Part 11-compatible audit / e-signature design",
      "GxP validation package template",
      "Traceability matrix",
      "Release validation workflow",
      "SOC 2 Type II evidence collection",
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
    title: "Certification timing vs. startup speed",
    decision: "Pursue readiness in MVP; defer the formal audit.",
    reason:
      "A SOC 2 / ISO audit is 6–12 months of overhead that delays the product without unblocking the first pilots.",
    risk: "Buyer asks for the report on day one and walks if it does not exist.",
    mitigation:
      "Deliver a credible readiness package and a dated audit timeline; offer security questionnaire + control narrative.",
  },
  {
    title: "External LLM API vs. self-hosted model",
    decision: "Start with a provider model behind a model gateway.",
    reason:
      "Self-hosting adds infra, MLOps, and validation cost the MVP cannot absorb; the gateway preserves optionality.",
    risk: "PHI exposure or provider-side change shifts outputs without warning.",
    mitigation:
      "Strict redaction at the gateway, pinned model versions, signed DPA / BAA, and a documented rollback plan.",
  },
  {
    title: "Rich audit logging vs. privacy & data minimization",
    decision: "Log identifiers and versions; do not log raw PHI.",
    reason:
      "GDPR and HIPAA expect minimization, but auditors expect reproducibility — both can be met with references.",
    risk: "Logs accidentally capture sensitive content during incidents.",
    mitigation:
      "Field-level redaction before write, encrypted log store, restricted log access, regular log content audits.",
  },
  {
    title: "Part 11 compatibility vs. full Part 11 validation",
    decision: "Design the audit trail and signing workflow to be Part 11-compatible without claiming compliance.",
    reason:
      "Full Part 11 validation only matters when the platform becomes system-of-record; most MVP buyers are not yet there.",
    risk: "First regulated buyer treats the design as a compliance claim.",
    mitigation:
      "Explicit language: 'Part 11-ready architecture; validation completed jointly with customer at deployment time.'",
  },
  {
    title: "Broad compliance coverage vs. focused MVP controls",
    decision: "Pick the controls that unlock the first enterprise pilot, not the union of every framework.",
    reason:
      "Over-claiming dilutes credibility; auditors notice 'check-the-box' coverage immediately.",
    risk: "A buyer's framework (e.g., HITRUST) is not in scope and slows the deal.",
    mitigation:
      "Maintain a framework crosswalk so net-new requirements are scoped, not surprises.",
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
    category: "Cloud security & audit logging",
    items: [
      {
        title: "AICPA SOC 2 Trust Services Criteria",
        note: "Add official AICPA source link here.",
      },
      {
        title: "ISO/IEC 27001 Information Security Management",
        note: "Add official ISO source link here.",
      },
      {
        title: "NIST SP 800-92 — Guide to Computer Security Log Management",
        note: "Add official NIST source link here.",
      },
    ],
  },
  {
    category: "Privacy & data protection",
    items: [
      {
        title: "HIPAA Privacy Rule and Security Rule",
        note: "Add official HHS source link here.",
      },
      {
        title: "GDPR official regulation and EDPB guidance",
        note: "Add official EU source link here.",
      },
    ],
  },
];
