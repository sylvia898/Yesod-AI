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

export type NavLink = { id: string; label: string };

export const NAV_LINKS: NavLink[] = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "why-yesod", label: "Why" },
  { id: "iq-oq-pq", label: "IQ / OQ / PQ" },
  { id: "gxp", label: "GxP" },
  { id: "llm-risk", label: "LLM" },
  { id: "drift", label: "Drift" },
  { id: "package", label: "Package" },
  { id: "architecture", label: "Arch" },
  { id: "roadmap", label: "Roadmap" },
  { id: "scope", label: "Scope" },
  { id: "next-step", label: "Next" },
  { id: "references", label: "Refs" },
];

export const HERO = {
  eyebrow: "Yesod AI · Take-Home Research",
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
