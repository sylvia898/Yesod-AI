# Yesod AI Validation Presentation

## Topic Chosen

Topic B: Software validation for a cloud-native AI SaaS platform used in clinical programming workflows.

## Executive Summary

This local presentation website explains how Yesod AI can make an LLM-enabled clinical programming platform credible for enterprise pharma, biotech, and CRO buyers. The core recommendation is to treat validation as a product capability from the MVP stage: intended use, risk-based IQ/OQ/PQ evidence, audit trails, prompt/model versioning, human review, and drift monitoring.

## Run Locally

```bash
npm install
npm run dev
```

The Vite dev server is configured for `http://localhost:5173`.

## Tools Used

- React
- Vite
- TypeScript
- Tailwind CSS
- lucide-react
- Codex / ChatGPT for implementation support
- Figma not used

## What I Would Improve With More Time

- Replace placeholder reference notes with official source links and brief citations.
- Add a printable one-page executive summary for interview follow-up.
- Add a compact validation artifact map showing URS -> FRS -> risk -> IQ/OQ/PQ traceability.
- Add a sample golden validation dataset table with expected outputs and acceptance criteria.
- Add a customer-facing validation evidence appendix covering IQ/OQ/PQ protocols, traceability matrix, and 21 CFR Part 11-style audit and signing design.

## Key Sources / References To Add

- FDA 21 CFR Part 11: official electronic records and electronic signatures rule.
- FDA Computer Software Assurance for Production and Quality System Software.
- FDA guidance on Artificial Intelligence and Machine Learning in Software as a Medical Device.
- ISPE GAMP 5 (Second Edition) risk-based validation guidance.
- ICH E6(R3) Good Clinical Practice.
- ICH Q9(R1) Quality Risk Management.
- CDISC SDTM and ADaM implementation guides.
- NIST SP 800-92 log management and audit logging guidance.
- ALCOA+ data integrity principles (MHRA / WHO).
