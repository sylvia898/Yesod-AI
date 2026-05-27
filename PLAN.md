# Yesod AI Topic B Presentation Plan

## Research Goal

Explain how software validation should work for a modern AI clinical programming SaaS used in regulated workflows. The site focuses only on Topic B: GxP, IQ/OQ/PQ, audit evidence, LLM-specific validation complexity, upstream model drift, and a Minimum Viable Validation Package.

Core thesis:

An AI clinical programming platform is not validation-ready because it has a good demo. It becomes validation-ready when intended use, requirements, qualification evidence, traceability, audit records, human review, and change control are designed into the product.

## Presentation Structure

The website keeps separate routed sections so it can be presented like a slide sequence:

1. Overview - thesis, executive summary, and 20-minute flow.
2. Problem - why regulated clinical software cannot simply be deployed.
3. Why Yesod AI - how validation readiness affects adoption and trust.
4. IQ/OQ/PQ - concrete cloud-native AI interpretation and evidence.
5. GxP workflow - pillars, traceability chain, clinical workflow example, and sample audit record.
6. LLM risk - risk, why it matters, control, and evidence produced.
7. Drift - upstream provider/model drift controls and trigger matrix.
8. Validation package - build now, prepare now, defer until sponsor or regulatory trigger.
9. Architecture - evidence flow, clickable validation stack, and audit trail replay.
10. Roadmap - phased validation-readiness plan.
11. Scope - MVP must-haves versus deferred work.
12. Next step - intended use plus a golden validation dataset.
13. References - placeholder categories for official sources.

## Design Philosophy

- Keep the existing regulated B2B SaaS identity.
- Use white background, near-black body text, navy headings, and blue accents.
- Prefer concise cards, tables, and diagrams over dense paragraphs.
- Make interactive elements keyboard accessible with visible blue focus states.
- Avoid generic AI hype and unrelated certification content.
- Use precise language: validation-ready, GxP-aligned, audit-defensible, traceable, qualified, controlled, and reproducible.

## Content Decisions

- Spell out "Computer System Validation" in full; do not use the CSV acronym.
- Do not claim the product is fully validated before protocols are executed and signed.
- Show a concrete traceability chain from URS to approved output.
- Ground the example in an ADaM-to-TLF clinical programming workflow.
- Treat prompt, model, retrieval, schema, workflow, and evaluation changes as possible validation-impacting changes.
- Make every LLM risk produce an evidence artifact, not just a mitigation statement.

## MVP Scope Decisions

Build now:

- Intended use statement.
- URS draft.
- Risk assessment.
- Prompt/model versioning.
- Append-only audit trail.
- Reviewer attestation.
- Golden dataset tests.
- Output traceability records.

Prepare now, execute later:

- IQ/OQ/PQ protocol templates.
- Traceability matrix structure.
- Validation evidence export.
- Per-tenant validation environment scaffolding.
- Drift monitoring rules.

Defer until sponsor or regulatory trigger:

- Full signed IQ/OQ/PQ execution.
- Full Validation Summary Report.
- Customer-managed validation harness.
- Continuous validation dashboards.

## Future Improvements

- Add official source links and concise citations.
- Add sample IQ/OQ/PQ protocol documents.
- Add a small mock golden dataset with expected outputs.
- Add an exportable audit evidence packet preview.
- Add an interviewer handout summarizing the final recommendation.
