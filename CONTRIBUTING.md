# Contributing to Zandbox

Thank you for your interest in contributing to the Zandbox project. This document outlines guidelines for collaboration and contribution.

---

## Project Philosophy

Zandbox operates on first-principles thinking:

1. **Deconstruct** — Strip problems to fundamental truths
2. **Reconstruct** — Rebuild as actionable solutions
3. **Validate** — Test against real constraints
4. **Iterate** — Continuous refinement cycles

All contributions should align with this methodology.

## Epistemic Standards

Every technical claim must carry an explicit confidence marker:

| Marker | Definition | Requirement |
|--------|------------|-------------|
| **VERIFIED** | Grounded in cited academic research | Include citation |
| **PLAUSIBLE** | Logically sound but unvalidated | State assumptions |
| **SPECULATIVE** | Theoretical, requires testing | Acknowledge gaps |

**Do not** present speculation as verified fact. Intellectual honesty is non-negotiable.

## Contribution Types

### Research Contributions
- Literature reviews with proper citations
- Gap analyses identifying missing empirical grounding
- Academic paper drafts (IEEE format preferred)

### Technical Contributions
- Platform specifications with implementation details
- Architecture diagrams and system designs
- Code scaffolding for MVCI agents

### Documentation Contributions
- Domain deep-dives
- Methodology refinements
- Process documentation

## Formatting Standards

### Markdown Files
- Use ATX-style headers (`#`, `##`, `###`)
- Include table of contents for documents > 500 words
- Use fenced code blocks with language specifiers
- Prefer tables over nested lists for structured data

### Academic Content
- IEEE format for papers
- BibTeX for bibliographies
- LaTeX for mathematical notation
- 30+ citations typical for whitepapers

### Diagrams
- Mermaid for flowcharts and sequences
- ASCII art for simple inline diagrams
- SVG exports for complex visuals

## Branch Strategy

```
main
├── develop          # Integration branch
├── feature/*        # New capabilities
├── research/*       # Academic work
└── docs/*           # Documentation updates
```

## Commit Messages

Use conventional commits:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:**
- `feat` — New feature or capability
- `fix` — Bug fix or correction
- `docs` — Documentation changes
- `research` — Academic/research additions
- `refactor` — Code restructuring
- `chore` — Maintenance tasks

**Examples:**
```
docs(rca): Add Layer 2 specification draft
research(chc): Literature review on working memory
feat(mvci): Add contract intake agent schema
```

## Review Process

1. **Self-Review** — Run gap analysis on your own work
2. **Peer Review** — Request review from domain expert
3. **Integration** — Merge to develop after approval
4. **Release** — Periodic merges to main

## Quality Checklist

Before submitting:

- [ ] Epistemic markers applied to all claims
- [ ] Citations included for VERIFIED content
- [ ] Assumptions stated for PLAUSIBLE content
- [ ] Gaps acknowledged for SPECULATIVE content
- [ ] Formatting follows standards
- [ ] No confidential/proprietary information exposed
- [ ] Compliance considerations noted where applicable

## Domains and Owners

| Domain | Primary Focus |
|--------|---------------|
| AGI/ASI Research | RCA architecture, cognitive theory |
| Federal Capture | OTA, SOSSEC, GSA mechanisms |
| MVCI Systems | Zero-budget agent infrastructure |
| Rural Infrastructure | CAH, water systems modernization |
| Digital Transformation | Tier 2/3 supplier economics |
| Zuup Platforms | Proprietary platform development |

## Communication

- **Issues** — Use GitHub issues for bugs and feature requests
- **Discussions** — Use GitHub discussions for ideas and questions
- **Direct** — Contact maintainer for sensitive matters

## License

Contributions are accepted under the project's existing license terms. By contributing, you agree to these terms.

---

*"Visualization requests represent the highest fabrication risk in AI assistance, leading to explicit acknowledgment of limitations rather than confident confabulation."*
