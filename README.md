# Yesod AI · Software Validation Brief

A local React presentation that answers a take-home challenge on software validation for AI clinical programming workflows. Run locally and navigate it page-by-page during the 20-minute talk.

## 1. Topic Chosen

**Topic B — Software Validation: GxP, IQ/OQ/PQ, and Audit Evidence**

The brief addresses five key questions:
1. What do IQ, OQ, and PQ mean for a cloud-native AI SaaS?
2. How does GxP apply to clinical data analysis and programming workflows?
3. Do LLMs add validation complexity, and how should it be managed?
4. Can upstream model drift invalidate a GxP-qualified state, and how is it handled?
5. What does a Minimum Viable Validation Package look like for an automated clinical programming workflow?

## 2. Executive Summary

Clinical AI software cannot just be deployed — it must be validated to produce reproducible, traceable, and audit-defensible outputs. The core thesis of this brief is that a platform becomes validation-ready when intended use, qualification evidence, traceability, audit records, human review, and change control are **designed into the product** rather than retrofitted before an inspection.

The proposed approach has three structural ideas:

- **The Validation Stack** — six layers (intended use → risk → IQ/OQ/PQ → traceability → audit & review → change control) where each layer earns the next.
- **The Controlled Path** — a single request route from user input through identity, version pinning, human review, and an immutable evidence record.
- **A second AI control plane** — pinned model deployments, versioned prompts, snapshotted retrieval indices, and drift triggers, on top of traditional Computer System Validation.

The Minimum Viable Validation Package separates **build now**, **prepare now / execute later**, and **defer until sponsor or regulator triggers** so an MVP can credibly support regulated workflows without overclaiming a validated state.

## 3. Run Locally

```bash
npm install
npm run dev
```

Vite serves the site at `http://localhost:5173`. If that port is busy, Vite picks the next available localhost port. No deployment or build step is needed for the presentation — the dev server is sufficient.

To produce a static build (optional):

```bash
npm run build
npm run preview
```

## 4. AI & Development Tools Used

**AI tools**

- Claude Code (Anthropic) — primary AI pair-programming and content drafting
- ChatGPT — secondary research and editing
- OpenAI Codex — initial scaffolding assistance

**Development stack**

- React 18
- Vite 6
- TypeScript 5
- Tailwind CSS 3
- lucide-react (icons)

No design tools (Figma, Stitch, etc.) were used; the visual system was built directly in Tailwind from a custom palette.

## 5. What I Would Improve With More Time

- Stand up a printable one-page executive summary so reviewers can leave the interview with a single artifact.
- Expand the golden ADaM-like validation dataset with full expected outputs, acceptance criteria, and pass/fail bands.
- Add sample IQ, OQ, and PQ protocol templates linked into the traceability matrix component.
- Wire an interactive "audit replay" simulator that lets the reviewer click a sample TLF draft and step backward through versions, retrieval snapshot, and reviewer attestation.
- Add a sponsor-facing risk-and-control crosswalk (ICH Q9 hazards → product controls → evidence artifacts).
- Run an accessibility pass (contrast, keyboard navigation, screen-reader landmarks) appropriate for a regulated B2B audience.

## 6. Key Sources & References

All sources are linked from the in-app `/references` page. The brief draws primarily on:

**FDA — electronic records and CSA**
- 21 CFR Part 11 — Electronic Records; Electronic Signatures
- FDA — Computer Software Assurance for Production and Quality System Software (final guidance)
- FDA — Artificial Intelligence/Machine Learning Software as a Medical Device Action Plan

**ISPE GAMP 5**
- ISPE GAMP 5 (Second Edition) — A Risk-Based Approach to Compliant GxP Computerized Systems
- ISPE GAMP — Records and Data Integrity Good Practice Guide

**ICH guidance**
- ICH E6(R3) — Good Clinical Practice
- ICH Q9(R1) — Quality Risk Management

**CDISC standards**
- CDISC SDTM Implementation Guide
- CDISC ADaM Implementation Guide

**Data integrity & audit trails**
- MHRA — "GxP" Data Integrity Definitions and Guidance for Industry
- WHO TRS 1033 Annex 4 — Guideline on Data Integrity
- PIC/S PI 041 — Good Practices for Data Management and Integrity

**AI / LLM validation context**
- NIST AI Risk Management Framework (AI RMF 1.0)
- EMA — Reflection Paper on the Use of AI in the Medicinal Product Lifecycle
