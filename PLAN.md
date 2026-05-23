# Yesod AI Take-Home Challenge — Development Specification

---

## BACKGROUND: Original Assignment Question (build this)

Topic A: Compliance Certifications for Enterprise AI SaaS

Research the baseline compliance certifications, security frameworks, and regulatory readiness
requirements that an AI SaaS company needs in order to sell successfully into enterprise
pharma, biotech, and CRO customers.

Areas to Explore:
1. Baseline Security Compliance
   - SOC 2: Type I vs. Type II
   - ISO 27001
2. Life Sciences Regulatory Readiness
   - GxP readiness, especially Good Clinical Practice (GCP) and Good Laboratory Practice (GLP)
   - 21 CFR Part 11 requirements for electronic records and electronic signatures
3. Privacy and Data Protection
   - HIPAA for U.S. healthcare data
   - GDPR for EU data privacy
   - Applicability of HIPAA and GDPR to de-identified clinical trial data
4. Any other Compliance required?

Key Questions to Address:
1. What does each certification, regulation, or framework mean, and what is required to comply with it?
2. What are the fundamental differences between general security compliance, such as SOC 2, and life sciences regulatory validation, such as GxP?
3. Which certifications or frameworks are absolute "must-haves" for passing initial enterprise vendor assessments, and which are "nice-to-haves" that can be deferred until after the MVP stage?
4. What product and architecture capabilities need to be built early to support these frameworks, such as multi-tenant isolation, role-based access control, immutable audit logs, data encryption, access monitoring, and electronic signature support?
5. What should the implementation roadmap look like to make the product compliant over time?

---

## Project Purpose

You are helping build a frontend-only local presentation website for the Yesod AI Take-Home Challenge.

The assignment asks to choose one topic, build a local web page instead of a PowerPoint/PDF, and present it in a 20-minute interview. The website should communicate research clearly using visual elements like diagrams, comparison tables, timelines, workflow maps, roadmap graphics, and concise text. No deployment is required; it only needs to run smoothly on localhost. The GitHub repo should have meaningful commits over time and a README with topic choice, executive summary, local run instructions, tools used, future improvements, and references.

---

## Goal

Build a clean, professional, enterprise/clinical-style single-page web presentation explaining how software validation works for a modern cloud-native AI SaaS platform used in clinical programming workflows.

---

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- lucide-react
- No backend
- No database
- No deployment setup needed

---

## Design Style

Create a serious B2B enterprise SaaS look, suitable for pharma/clinical/regulatory users.

Use:
- Clean white or very light background
- Dark navy / slate text
- Subtle blue or teal accent color
- Card-based layout
- Strong visual hierarchy
- Plenty of spacing
- Professional typography (Inter font via Google Fonts)
- Minimal animation only if useful
- No childish colors
- No flashy effects
- No emoji-heavy UI

---

## Website Structure

Build a single-page presentation with these sections in order:

### 1. Hero Section
- Title: "Software Validation for AI Clinical Programming"
- Subtitle: "GxP, IQ/OQ/PQ, audit evidence, and LLM drift management for a cloud-native AI SaaS platform"
- Include a short executive summary card.

### 2. Problem Overview
Explain why regulated clinical software cannot simply be deployed.
Mention that clinical programming workflows may involve CDISC datasets such as SDTM and ADaM and support Tables, Listings, and Figures.

### 3. Why This Matters to Yesod AI
Explain strategic importance:
- Enterprise pharma and CRO customers need trust.
- Validation affects adoption.
- Audit evidence affects procurement and regulatory confidence.
- AI introduces new risks around reproducibility, traceability, and model drift.

### 4. IQ / OQ / PQ Explained
Create a clear comparison table:
- IQ: Installation Qualification — prove the system is installed and configured correctly.
- OQ: Operational Qualification — prove functions operate according to specification.
- PQ: Performance Qualification — prove the system works in real-world clinical workflow scenarios.
Add a cloud-native AI SaaS interpretation for each one.

### 5. GxP in Clinical Data Workflows
Explain how GxP applies to clinical data analysis and programming workflows.
Focus on: Traceability, Reproducibility, Role-based access control, Audit trails, Version control, Data lineage, Change control, Validation evidence.

### 6. LLM-Specific Validation Complexity
Create a visual risk matrix or cards for:
- Non-deterministic outputs
- Prompt/version changes
- Model/provider API updates
- RAG knowledge base changes
- Dataset/schema changes
- Human review requirements
- Hallucination risk
- Reproducibility issues

### 7. Model Drift and Upstream API Updates
Explain that upstream provider changes can affect validated behavior.
Propose controls:
- Pin model versions where possible
- Version prompts
- Version test datasets
- Keep golden test cases
- Monitor output changes
- Require re-validation when material behavior changes
- Keep audit logs of model, prompt, retrieval context, input, output, timestamp, and user

NOTE: Sections 6 and 7 are rendered together in a single component (`LlmRiskMatrix.tsx`).

### 8. Minimum Viable Validation Package
Create a checklist-style section:
- System intended use statement
- User requirements specification
- Functional requirements
- Risk assessment
- IQ test evidence
- OQ test evidence
- PQ scenario evidence
- Audit trail design
- Change control process
- Access control matrix
- Validation summary report
- Known limitations and human-in-the-loop policy

### 9. Proposed Architecture / Evidence Flow
Create a simple visual diagram using HTML/CSS cards and arrows — no external images.
Flow: User request → Auth/RBAC → Workflow engine → Data validation → LLM/RAG service → Human review → Output generation → Audit evidence store → Monitoring/change control.
Make it look like an architecture diagram.

### 10. Roadmap
Create a timeline:
- Phase 0: MVP foundations (Months 0–2)
- Phase 1: Auditability and controlled workflows (Months 2–5)
- Phase 2: IQ/OQ/PQ validation package (Months 5–9)
- Phase 3: Enterprise readiness and ongoing monitoring (Months 9–14)
- Phase 4: Advanced validation automation (Months 14+)

### 11. Tradeoffs and MVP Scope
Explain what should be included in V1 and what can be deferred.
Two columns: Must-have for MVP | Defer until later.

### 12. Tactical Next Step
End with one strong call-to-action recommendation:
"Start tomorrow by defining the system's intended use and building a small golden validation dataset with expected outputs."

### 13. References Section
Add a placeholder references section with realistic categories:
- FDA 21 CFR Part 11
- GAMP 5
- ICH GCP
- CDISC SDTM / ADaM
- Cloud security and audit logging references

Do not invent fake URLs. Use clear placeholder text like "Add official source link here."

---

## Implementation Requirements

- Create a clean component structure under `src/components/`.
- Use TypeScript types where helpful. Put shared types in component files or `src/data/content.ts`.
- Put all reusable content arrays and data in `src/data/content.ts`.
- Use responsive layout (works on laptop in screen-share).
- Add a sticky top navigation bar (`Nav.tsx`) with section anchor links.
- Add smooth scroll behavior via CSS (`scroll-behavior: smooth`).
- Add `scroll-margin-top` on sections to offset the sticky nav height.
- Avoid long paragraphs. Use concise text, cards, tables, and diagrams.
- Use lucide-react icons where appropriate — keep the style professional.
- The page must look polished enough for a 20-minute live interview demo.

---

## Files to Create or Update

### Config / scaffold (root)
- `package.json`
- `vite.config.ts`
- `tsconfig.json`
- `tsconfig.app.json`
- `tsconfig.node.json`
- `tailwind.config.js`
- `postcss.config.js`
- `index.html` (loads Inter font from Google Fonts; mounts `#root`)
- `.gitignore`

### App entry
- `src/main.tsx`
- `src/App.tsx` (imports all section components and composes the page)
- `src/index.css` (Tailwind directives, smooth scroll, scroll-margin-top)

### Shared components
- `src/components/Nav.tsx` — sticky header with section anchor links
- `src/components/SectionHeading.tsx` — reusable eyebrow + title + description header

### Section components
- `src/components/Hero.tsx` — sections 1 (Hero)
- `src/components/ProblemOverview.tsx` — sections 2 and 3 (Problem Overview + Why Yesod AI)
- `src/components/IqOqPqTable.tsx` — section 4 (IQ/OQ/PQ comparison table)
- `src/components/GxpWorkflow.tsx` — section 5 (GxP pillars grid)
- `src/components/LlmRiskMatrix.tsx` — sections 6 and 7 (LLM risk cards + Drift controls)
- `src/components/ValidationPackage.tsx` — section 8 (Minimum viable validation checklist)
- `src/components/ArchitectureFlow.tsx` — section 9 (Architecture diagram)
- `src/components/Roadmap.tsx` — section 10 (Timeline roadmap)
- `src/components/MvpScope.tsx` — sections 11 and 12 (Tradeoffs table + Tactical next step CTA)
- `src/components/References.tsx` — section 13 (References)

### Documentation
- `README.md`
- `PLAN.md`

---

## README Requirements

Write a strong README with:
1. Topic chosen (Topic B)
2. Executive summary (2–3 sentences)
3. How to run locally:
   ```
   npm install
   npm run dev
   ```
4. Tools used: React, Vite, TypeScript, Tailwind CSS, lucide-react, Claude Code, ChatGPT, Figma if used
5. What I would improve with more time
6. Key sources / references to add

---

## PLAN.md Requirements

Create a PLAN.md that explains:
- Research goal
- Presentation structure
- Design philosophy
- Content sections overview
- MVP scope decisions
- Future improvements

---

## Quality Bar

This should not look like a generic student webpage. It should look like a thoughtful enterprise SaaS product/research presentation for a clinical AI startup.

Prioritize clarity, visual structure, and practical recommendations.

Do not add routing, a backend, a database, authentication, or any deployment setup.

---

## After Implementation Checklist

- [ ] `npm install` completes without errors
- [ ] `npm run dev` starts the dev server and the page renders correctly on localhost:5173
- [ ] `npm run build` completes without TypeScript or build errors
- [ ] All sections are visible and properly styled
- [ ] Sticky nav links scroll to correct sections
- [ ] Page looks polished on a 1440px laptop screen
- [ ] No console errors in the browser
- [ ] Code is clean and easy to walk through in an interview
