import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  Boxes,
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
  eyebrow: "Software Validation Brief",
  title: "Software Validation for AI Clinical Programming",
  subtitle:
    "GxP, IQ/OQ/PQ, audit evidence, and LLM drift control for a cloud-native AI SaaS platform.",
  thesis:
    "Clinical AI software cannot just be deployed — it must be validated to produce reproducible, traceable, audit-defensible outputs. A platform becomes validation-ready when intended use, qualification evidence, traceability, audit records, and human review are designed in, not retrofitted before an inspection.",
  summary:
    "This brief answers five questions: what IQ/OQ/PQ mean for a cloud-native AI SaaS, how GxP applies to clinical programming, how LLMs add validation complexity, how upstream model drift is handled, and what a Minimum Viable Validation Package looks like.",
  bullets: [
    "Q1 — IQ/OQ/PQ restated for cloud-native AI SaaS",
    "Q2 — GxP applied to SDTM, ADaM, and TLF workflows",
    "Q3 — LLM-specific validation complexity and controls",
    "Q4 — Model drift handled as controlled change",
    "Q5 — Minimum Viable Validation Package scope",
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
    title: "Clinical outputs carry evidence obligations",
    body:
      "SDTM and ADaM feed the Tables, Listings, and Figures that support clinical decisions. A reviewer must be able to reconstruct how any draft was produced.",
  },
  {
    icon: ClipboardCheck,
    title: "CSV starts with intended use",
    body:
      "Validation is not a post-demo checklist. It begins with what the system is for, then proves it performs that use reliably.",
  },
  {
    icon: Sparkles,
    title: "LLMs change the evidence model",
    body:
      "Probabilistic outputs, prompt edits, retrieval snapshots, and provider updates add versioned inputs that deterministic validation does not cover.",
  },
  {
    icon: History,
    title: "Audit evidence is a product feature",
    body:
      "Every regulated output needs a durable record: dataset, prompt, model, retrieval context, output hash, reviewer, decision, timestamp, requirement.",
  },
];

export type EvidenceLens = {
  icon: LucideIcon;
  title: string;
  signal: string;
  body: string;
};

export const COMPLIANCE_LENSES: EvidenceLens[] = [
  {
    icon: ShieldCheck,
    title: "Validation-ready ≠ fully validated",
    signal:
      "Ship the primitives that make validation possible; let customers execute and sign the formal protocols.",
    body:
      "Use precise language — GxP-aligned, validation-ready, audit-defensible — and never claim a state that has not been executed.",
  },
  {
    icon: GitBranch,
    title: "Traceability is a design problem",
    signal:
      "An approved output should walk backward to review, AI output, test, requirement, and intended use.",
    body:
      "This is a data model and workflow choice — not a documentation task saved for the end of the release.",
  },
  {
    icon: UserCheck,
    title: "Human review is a control",
    signal:
      "AI assistance must not silently become an approved deliverable.",
    body:
      "Reviewer identity, decision, edits, rationale, and timestamp belong in the evidence record for every output.",
  },
];

export type WhyCard = { icon: LucideIcon; title: string; body: string };

export const WHY_CARDS: WhyCard[] = [
  {
    icon: ShieldCheck,
    title: "Enterprise trust",
    body:
      "Pharma and CRO buyers need evidence the platform supports regulated workflows without producing untraceable outputs.",
  },
  {
    icon: LineChart,
    title: "Adoption inside clinical programming",
    body:
      "A credible validation story moves Yesod from sandbox demo to controlled SDTM, ADaM, and TLF workflows.",
  },
  {
    icon: FileSignature,
    title: "Audit and procurement confidence",
    body:
      "QA looks for intended use, requirements, qualification evidence, traceability, and change control before trusting an AI-generated deliverable.",
  },
  {
    icon: AlertTriangle,
    title: "AI-specific risk",
    body:
      "Reproducibility, hallucination, model drift, and retrieval churn need controls visible in the product and in the evidence export.",
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
    intent:
      "Prove the validated environment is installed and configured exactly as intended.",
    traditional:
      "Server build sheets, OS patches, installed component manifests, and controlled configuration records.",
    cloudAi:
      "Infrastructure-as-code snapshot, container image digest, library versions, model deployment ID, prompt version, secrets/config baseline, and environment config diff.",
    evidence:
      "Signed IQ checklist, IaC plan hash, image digest, dependency manifest, prompt/model manifest, environment diff, and release tag.",
  },
  {
    phase: "OQ",
    name: "Operational Qualification",
    intent:
      "Prove product functions operate according to specification under controlled test conditions.",
    traditional:
      "Scripted functional tests mapped to approved functional requirements.",
    cloudAi:
      "Functional tests, golden ADaM-like datasets, deterministic evaluation suite, RBAC tests, RAG/context checks, prompt regression tests, and audit-log verification.",
    evidence:
      "OQ protocol results, test execution logs, expected-vs-actual diffs, access test evidence, prompt regression report, and requirement coverage.",
  },
  {
    phase: "PQ",
    name: "Performance Qualification",
    intent:
      "Prove the system performs reliably in realistic clinical programming workflows.",
    traditional:
      "End-to-end scenario runs by trained users in the target operating environment.",
    cloudAi:
      "SDTM/ADaM-like workflow scenarios, TLF draft generation, programmer-in-the-loop review, reviewer attestation, and complete audit trail capture.",
    evidence:
      "PQ scenario packet, approved TLF draft, review attestation, output hash, run replay record, and signed scenario result.",
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
      "Every output links back to requirement, dataset, prompt, model, retrieval snapshot, test evidence, and reviewer.",
  },
  {
    icon: Repeat,
    title: "Reproducibility",
    body:
      "A prior run can be replayed because inputs, versions, parameters, and outputs are retained.",
  },
  {
    icon: UserCheck,
    title: "Role-based review",
    body:
      "Programmer, reviewer, QA, and admin actions are separated and recorded with identity and intent.",
  },
  {
    icon: History,
    title: "Audit trails",
    body:
      "Append-only, time-stamped records of who did what, when, with which inputs, model, prompt, and output.",
  },
  {
    icon: Layers,
    title: "Version control",
    body:
      "Code, prompts, datasets, retrieval indices, requirements, and test cases are versioned per release.",
  },
  {
    icon: Network,
    title: "Data lineage",
    body:
      "End-to-end lineage from SDTM and ADaM through derivations to approved TLF drafts.",
  },
  {
    icon: Workflow,
    title: "Change control",
    body:
      "Material changes to workflow logic, prompts, models, schemas, or retrieval indices require review and evidence.",
  },
  {
    icon: ClipboardCheck,
    title: "Validation evidence",
    body:
      "URS, FRS, risk, IQ/OQ/PQ, test results, and known limitations retained as controlled artifacts.",
  },
];

export type TraceabilityStep = {
  label: string;
  id: string;
  text: string;
};

export const TRACEABILITY_CHAIN: TraceabilityStep[] = [
  {
    label: "URS",
    id: "URS-004",
    text: "System shall generate a traceable TLF draft from versioned ADaM data only.",
  },
  {
    label: "FRS",
    id: "FRS-009",
    text: "Capture dataset version, prompt version, model version, retrieval snapshot, and reviewer decision.",
  },
  {
    label: "Test Case",
    id: "OQ-012",
    text: "Run golden ADaM input through the TLF workflow and verify required evidence fields.",
  },
  {
    label: "Test Result",
    id: "PASS-012",
    text: "All required identifiers captured; output hash matches approved expected result.",
  },
  {
    label: "AI Output",
    id: "OUT-2026-00128",
    text: "Draft table shell and explanation generated from approved prompt template.",
  },
  {
    label: "Human Review",
    id: "REV-02",
    text: "Clinical programmer approves with edits and records rationale.",
  },
  {
    label: "Audit Record",
    id: "AUD-00128",
    text: "Append-only evidence record links run, reviewer, versions, hashes, and requirement.",
  },
  {
    label: "Approved Output",
    id: "TLF-14.2.1-draft",
    text: "Approved draft is exported with evidence packet and output hash.",
  },
];

export type WorkflowExampleStep = {
  title: string;
  detail: string;
};

export const CLINICAL_WORKFLOW_EXAMPLE: WorkflowExampleStep[] = [
  {
    title: "Generate TLF draft from ADaM",
    detail:
      "Programmer selects adam_v1.3 and a controlled TLF shell requirement.",
  },
  {
    title: "AI suggests code or explanation",
    detail:
      "Prompt template tlf_prompt_v0.8.2 uses a pinned model deployment and retrieval snapshot.",
  },
  {
    title: "Programmer reviews",
    detail:
      "Reviewer checks derivation logic, edits the draft, and records an approval decision.",
  },
  {
    title: "Audit package exports",
    detail:
      "Evidence includes model version, prompt version, dataset version, reviewer, timestamp, and output hash.",
  },
];

export type EvidenceField = {
  label: string;
  value: string;
};

export const SAMPLE_AUDIT_RECORD: EvidenceField[] = [
  { label: "Run ID", value: "run_2026_00128" },
  { label: "Dataset version", value: "adam_v1.3" },
  { label: "Prompt version", value: "tlf_prompt_v0.8.2" },
  { label: "Model version", value: "pinned provider deployment ID" },
  { label: "Retrieval snapshot", value: "kb_snapshot_2026_05_20" },
  { label: "Raw output hash", value: "sha256:9f2c...41a7" },
  { label: "Reviewer", value: "clinical_programmer_02" },
  { label: "Decision", value: "approved with edits" },
  { label: "Timestamp", value: "2026-05-25T14:32:09Z" },
  { label: "Linked requirement", value: "URS-004" },
  { label: "Linked test case", value: "OQ-012" },
];

export type LlmRisk = {
  icon: LucideIcon;
  title: string;
  risk: string;
  why: string;
  control: string;
  evidence: string;
};

export const LLM_RISKS: LlmRisk[] = [
  {
    icon: Sparkles,
    title: "Nondeterministic output",
    risk: "Same input can produce materially different text or code.",
    why: "A reviewer cannot defend a result the platform cannot explain.",
    control:
      "Low temperature, structured outputs, stable eval settings, and mandatory raw-output capture.",
    evidence: "Run record, output hash, evaluation diff, reviewer decision.",
  },
  {
    icon: FileSignature,
    title: "Prompt / template changes",
    risk: "A prompt edit changes behavior without a visible software release.",
    why: "Prompts are executable workflow logic for an AI system.",
    control:
      "Version prompts as controlled artifacts; require review; run prompt regression tests.",
    evidence: "Prompt version manifest, change ticket, regression report.",
  },
  {
    icon: Boxes,
    title: "Model / provider updates",
    risk: "Provider upgrades or deprecations shift behavior on the same workflow.",
    why: "Upstream behavior can change even if Yesod code does not.",
    control:
      "Model gateway, pinned deployment IDs, provider-notice monitoring.",
    evidence: "Model manifest, provider change log, re-validation decision.",
  },
  {
    icon: Database,
    title: "Retrieval / index changes",
    risk: "Rechunking or refreshing a knowledge base changes retrieved context.",
    why: "The AI answer depends on retrieved evidence, not only the prompt.",
    control:
      "Version retrieval indices; snapshot per release; rerun golden cases after corpus changes.",
    evidence: "Retrieval snapshot ID, index diff, golden-case result.",
  },
  {
    icon: Layers,
    title: "Dataset / schema changes",
    risk: "SDTM or ADaM schema changes break derivation assumptions.",
    why: "Clinical logic depends on variable definitions, terminology, and derivation rules.",
    control:
      "Validate schema at ingest; maintain data contracts; require re-checks on schema bumps.",
    evidence: "Schema validation report, data contract version, gate result.",
  },
  {
    icon: AlertTriangle,
    title: "Hallucinated output",
    risk: "The model invents unsupported values, citations, or explanations.",
    why: "A plausible unsupported claim becomes a regulated data-integrity issue.",
    control:
      "Ground claims in source data or retrieval; flag unsupported assertions; require human review.",
    evidence: "Source linkage, reviewer edits, exception report.",
  },
  {
    icon: UserCheck,
    title: "Human review gaps",
    risk: "An AI draft is approved without accountable clinical-programmer review.",
    why: "Human attestation is the key control for AI-assisted regulated outputs.",
    control:
      "Enforce review gates; capture reviewer identity, decision, edits, and rationale.",
    evidence: "Reviewer attestation, edit diff, approval timestamp.",
  },
  {
    icon: Repeat,
    title: "Non-reproducible runs",
    risk: "A past output cannot be reconstructed because context was not retained.",
    why: "Auditors may ask to replay the path from input to approved output months later.",
    control:
      "Persist versions, parameters, inputs, retrieval snapshot, raw and reviewed outputs, and hash.",
    evidence: "Audit replay packet and evidence export.",
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
    title: "Pin what can be pinned",
    body:
      "Use explicit model deployment IDs, prompt versions, dataset versions, retrieval snapshots, and evaluation suite versions.",
  },
  {
    icon: LineChart,
    title: "Detect behavior change",
    body:
      "Compare golden-case outputs and evaluation scores across prompt, model, retrieval, schema, and workflow changes.",
  },
  {
    icon: Workflow,
    title: "Route material changes through change control",
    body:
      "Document impact, required tests, approval, and whether IQ, OQ, or PQ evidence must be refreshed.",
  },
  {
    icon: History,
    title: "Retain the decision",
    body:
      "The evidence packet should explain why a change did or did not trigger re-validation.",
  },
];

export type DriftTrigger = {
  trigger: string;
  detection: string;
  action: string;
  evidence: string;
};

export const DRIFT_TRIGGER_MATRIX: DriftTrigger[] = [
  {
    trigger: "Prompt change",
    detection: "Prompt diff and golden regression suite",
    action: "Change review; run OQ regression tests",
    evidence: "Prompt change ticket and regression result",
  },
  {
    trigger: "Model change",
    detection: "Model manifest diff or provider notice",
    action: "Impact assessment; rerun golden cases; re-qualify if material",
    evidence: "Model change record and re-validation decision",
  },
  {
    trigger: "Retrieval index change",
    detection: "Index snapshot diff and retrieval quality checks",
    action: "Run context regression and inspect changed citations",
    evidence: "Index diff, retrieval report, reviewer signoff",
  },
  {
    trigger: "Schema change",
    detection: "SDTM/ADaM contract validation failure or version bump",
    action: "Update data contract; rerun workflow tests",
    evidence: "Schema validation report and OQ/PQ delta result",
  },
  {
    trigger: "Workflow logic change",
    detection: "Code diff mapped to requirements",
    action: "Update FRS and test cases; execute impacted qualification tests",
    evidence: "Traceability update and test execution packet",
  },
  {
    trigger: "Evaluation regression",
    detection: "Golden suite score drops or output diff exceeds threshold",
    action: "Block release until reviewed; open corrective change",
    evidence: "Regression alert, investigation, approval or rollback record",
  },
];

export type ValidationPackageGroup = {
  title: string;
  intent: string;
  items: string[];
};

export const VALIDATION_PACKAGE_GROUPS: ValidationPackageGroup[] = [
  {
    title: "Build now",
    intent: "GxP-aligned primitives that should exist in the MVP product surface.",
    items: [
      "Intended use statement",
      "URS draft",
      "Risk assessment",
      "Prompt/model versioning",
      "Append-only audit trail",
      "Reviewer attestation",
      "Golden dataset tests",
      "Output traceability records",
    ],
  },
  {
    title: "Prepare now, execute later",
    intent: "Structures that make formal qualification possible without a rebuild.",
    items: [
      "IQ/OQ/PQ protocol templates",
      "Traceability matrix structure",
      "Validation evidence export",
      "Per-tenant validation environment scaffolding",
      "Drift monitoring rules",
    ],
  },
  {
    title: "Defer until sponsor/regulatory trigger",
    intent: "High-friction evidence activities that should be executed when the use case requires them.",
    items: [
      "Full signed IQ/OQ/PQ execution",
      "Full Validation Summary Report",
      "Customer-managed validation harness",
      "Continuous validation dashboards",
    ],
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
    label: "User request",
    description: "Clinical programmer initiates a controlled TLF workflow.",
    icon: UserCheck,
  },
  {
    id: "auth",
    label: "Auth / RBAC",
    description: "Role determines whether user can run, review, approve, or export.",
    icon: Lock,
  },
  {
    id: "workflow",
    label: "Workflow engine",
    description: "Routes request through qualified steps and required review gates.",
    icon: Workflow,
  },
  {
    id: "data",
    label: "Data validation",
    description: "Checks SDTM/ADaM-like contracts and dataset version.",
    icon: Database,
  },
  {
    id: "llm",
    label: "LLM / RAG service",
    description: "Uses pinned model, prompt version, and retrieval snapshot.",
    icon: Sparkles,
  },
  {
    id: "review",
    label: "Human review",
    description: "Programmer reviews, edits, approves, or rejects with rationale.",
    icon: UserCheck,
  },
  {
    id: "output",
    label: "Output generation",
    description: "Creates reviewed TLF draft and output hash.",
    icon: FileSignature,
  },
  {
    id: "audit",
    label: "Audit evidence store",
    description: "Stores append-only run, review, version, and export records.",
    icon: History,
  },
  {
    id: "monitor",
    label: "Monitoring / change control",
    description: "Detects drift and routes material changes to review.",
    icon: LineChart,
  },
];

export type ValidationStackLayer = {
  title: string;
  proves: string;
  capability: string;
  artifact: string;
};

export const VALIDATION_STACK_LAYERS: ValidationStackLayer[] = [
  {
    title: "Intended Use & Requirements",
    proves: "The system boundary, target users, and testable regulated workflow needs are explicit.",
    capability: "Intended use workflow, URS/FRS repository, scope boundaries, known limitations.",
    artifact: "Intended use statement, URS, FRS, scope log.",
  },
  {
    title: "Risk Assessment",
    proves: "Qualification depth is tied to patient safety, data integrity, and reproducibility risk.",
    capability: "Risk register, control mapping, severity/probability scoring, mitigation ownership.",
    artifact: "Risk assessment and risk-control traceability.",
  },
  {
    title: "IQ/OQ/PQ Evidence",
    proves: "The environment is configured, functions operate, and workflows perform as intended.",
    capability: "Protocol templates, automated evidence capture, golden datasets, scenario execution.",
    artifact: "IQ/OQ/PQ protocols, test results, scenario packets.",
  },
  {
    title: "Traceability Matrix",
    proves: "Every requirement maps to a function, test case, result, and output evidence.",
    capability: "Linking model across URS, FRS, tests, runs, outputs, and release versions.",
    artifact: "Release traceability matrix export.",
  },
  {
    title: "Audit Trail & Human Review",
    proves: "Each regulated output is attributable, reviewable, and reconstructable.",
    capability: "Append-only audit log, reviewer attestation, output hash, edit diff, evidence export.",
    artifact: "Audit replay packet and reviewer approval record.",
  },
  {
    title: "Change Control & Drift Monitoring",
    proves: "Material behavior changes are detected, assessed, approved, and re-tested.",
    capability: "Change tickets, provider/model monitoring, prompt regression, schema/index diffing.",
    artifact: "Change record, drift report, re-validation decision.",
  },
];

export type AuditReplayStep = {
  title: string;
  logs: string;
  auditorCares: string;
};

export const AUDIT_REPLAY_STEPS: AuditReplayStep[] = [
  {
    title: "Dataset version",
    logs: "Dataset ID, ADaM version, schema contract, source checksum.",
    auditorCares:
      "Confirms the output came from the approved clinical data cut.",
  },
  {
    title: "Prompt version",
    logs: "Template ID, version, change ticket, approval status.",
    auditorCares:
      "Shows the instruction logic was controlled at the time of run.",
  },
  {
    title: "Model version",
    logs: "Provider, deployment ID, parameters, gateway policy.",
    auditorCares:
      "Prevents ambiguity caused by floating model aliases or provider drift.",
  },
  {
    title: "Retrieval snapshot",
    logs: "Index ID, corpus version, document hashes, retrieval IDs.",
    auditorCares:
      "Shows which knowledge context influenced the model response.",
  },
  {
    title: "Raw output",
    logs: "Raw model output, structured fields, output hash.",
    auditorCares:
      "Separates the AI draft from later human edits.",
  },
  {
    title: "Human review",
    logs: "Reviewer, role, decision, edit diff, rationale, timestamp.",
    auditorCares:
      "Confirms accountable clinical judgment before approval.",
  },
  {
    title: "Approved output",
    logs: "Approved artifact ID, version, hash, linked requirement.",
    auditorCares:
      "Connects the final deliverable back to requirements and review.",
  },
  {
    title: "Evidence export",
    logs: "Export ID, requester, timestamp, included records.",
    auditorCares:
      "Provides a bounded package that can be inspected or retained.",
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
    horizon: "Months 0-2",
    bullets: [
      "Intended use statement, URS draft, and initial risk register",
      "Prompt/model versioning and append-only run records",
      "Golden validation dataset with expected outputs",
      "Basic reviewer attestation for regulated drafts",
    ],
  },
  {
    id: "phase-1",
    title: "Phase 1 · Auditability and controlled workflows",
    horizon: "Months 2-5",
    bullets: [
      "Traceability records from URS to approved output",
      "Evidence export for audit replay",
      "Change control for prompt, model, retrieval, schema, and workflow changes",
      "Drift trigger rules and regression thresholds",
    ],
  },
  {
    id: "phase-2",
    title: "Phase 2 · IQ/OQ/PQ validation package",
    horizon: "Months 5-9",
    bullets: [
      "IQ/OQ/PQ protocol templates and execution workflow",
      "OQ test suite mapped to functional requirements",
      "PQ scenarios using SDTM/ADaM-like data and TLF generation",
      "Validation evidence binder assembled per release",
    ],
  },
  {
    id: "phase-3",
    title: "Phase 3 · Enterprise readiness and ongoing monitoring",
    horizon: "Months 9-14",
    bullets: [
      "Formal signed execution when sponsor use case requires it",
      "Per-tenant validation environment scaffolding",
      "Ongoing drift monitoring and documented re-validation decisions",
      "Release-level validation summary report when protocols are executed",
    ],
  },
  {
    id: "phase-4",
    title: "Phase 4 · Advanced validation automation",
    horizon: "Months 14+",
    bullets: [
      "Customer-managed golden datasets",
      "Automated impact analysis for changes",
      "Continuous validation dashboards",
      "Self-service audit replay and validation harness",
    ],
  },
];

export const MUST_HAVE: string[] = [
  "Intended use and workflow boundaries",
  "URS and FRS draft tied to regulated clinical-programming use cases",
  "Prompt/model/dataset/retrieval versioning",
  "Append-only audit trail for every inference and review",
  "Reviewer attestation before regulated output approval",
  "Golden ADaM-like validation dataset and expected outputs",
  "Traceability records from requirement to approved output",
  "Change control for material behavior changes",
];

export const DEFER: string[] = [
  "Full signed IQ/OQ/PQ execution before a sponsor-triggered use case",
  "Full Validation Summary Report before protocol execution",
  "Customer-managed validation harness",
  "Continuous validation dashboards",
  "Advanced automated re-validation across every corpus/model change",
];

export type ReferenceItem = { title: string; note: string; url?: string };

export const REFERENCES: { category: string; items: ReferenceItem[] }[] = [
  {
    category: "FDA · electronic records & CSA",
    items: [
      {
        title: "21 CFR Part 11 — Electronic Records; Electronic Signatures",
        note: "Authoritative U.S. rule for trustworthy electronic records and signatures in regulated activities.",
        url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11",
      },
      {
        title: "FDA — Computer Software Assurance for Production and Quality System Software",
        note: "Final guidance reframing CSV as risk-based assurance; underpins the validation-ready posture.",
        url: "https://www.fda.gov/media/188844/download",
      },
      {
        title: "FDA — Artificial Intelligence/Machine Learning Software as a Medical Device Action Plan",
        note: "FDA direction on lifecycle management for AI/ML-based clinical software; informs LLM drift controls.",
        url: "https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-and-machine-learning-software-medical-device",
      },
    ],
  },
  {
    category: "ISPE GAMP 5",
    items: [
      {
        title: "ISPE GAMP 5 (Second Edition) — A Risk-Based Approach to Compliant GxP Computerized Systems",
        note: "Industry-standard validation framework used to scope IQ/OQ/PQ depth by system category.",
        url: "https://ispe.org/publications/guidance-documents/gamp-5-guide-2nd-edition",
      },
      {
        title: "ISPE GAMP — Records and Data Integrity Good Practice Guide",
        note: "Practical guidance for designing audit trails and evidence retention to ALCOA+ standards.",
        url: "https://ispe.org/publications/guidance-documents/gamp-records-pharmaceutical-data-integrity",
      },
    ],
  },
  {
    category: "ICH guidance",
    items: [
      {
        title: "ICH E6(R3) — Good Clinical Practice",
        note: "Current GCP framework; emphasizes computerized system validation, data integrity, and oversight.",
        url: "https://www.ich.org/page/efficacy-guidelines",
      },
      {
        title: "ICH Q9(R1) — Quality Risk Management",
        note: "Foundational risk-management methodology cited in our risk assessment approach.",
        url: "https://www.ich.org/page/quality-guidelines",
      },
    ],
  },
  {
    category: "CDISC standards",
    items: [
      {
        title: "CDISC SDTM Implementation Guide",
        note: "Study Data Tabulation Model — the input schema assumed for ingest and TLF derivation.",
        url: "https://www.cdisc.org/standards/foundational/sdtm",
      },
      {
        title: "CDISC ADaM Implementation Guide",
        note: "Analysis Data Model — the derived dataset structure feeding Tables, Listings, and Figures.",
        url: "https://www.cdisc.org/standards/foundational/adam",
      },
    ],
  },
  {
    category: "Data integrity & audit trails",
    items: [
      {
        title: "MHRA — 'GxP' Data Integrity Definitions and Guidance for Industry",
        note: "Source of the ALCOA+ principles referenced throughout the audit evidence design.",
        url: "https://www.gov.uk/government/publications/guidance-on-gxp-data-integrity",
      },
      {
        title: "WHO TRS 1033 Annex 4 — Guideline on Data Integrity",
        note: "Globally applicable principles for trustworthy records across the GxP lifecycle.",
        url: "https://www.who.int/publications/m/item/annex-4-trs-1033",
      },
      {
        title: "PIC/S PI 041 — Good Practices for Data Management and Integrity",
        note: "Inspector-facing expectations for electronic records, audit trails, and review workflows.",
        url: "https://picscheme.org/en/publications",
      },
    ],
  },
  {
    category: "AI/LLM validation context",
    items: [
      {
        title: "NIST AI Risk Management Framework (AI RMF 1.0)",
        note: "Risk taxonomy and lifecycle controls applied to the LLM drift and reproducibility controls.",
        url: "https://www.nist.gov/itl/ai-risk-management-framework",
      },
      {
        title: "EMA — Reflection Paper on the Use of AI in the Medicinal Product Lifecycle",
        note: "Regulator perspective on AI use across clinical development; supports intended-use scoping.",
        url: "https://www.ema.europa.eu/en/documents/scientific-guideline/draft-reflection-paper-use-artificial-intelligence-ai-medicinal-product-lifecycle_en.pdf",
      },
    ],
  },
];
