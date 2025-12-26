# Epistemic Framework

A system for maintaining intellectual honesty by explicitly marking the confidence level of all claims.

---

## Purpose

AI-assisted research carries inherent fabrication risks. This framework combats that by requiring explicit acknowledgment of what we know, what we infer, and what we're guessing.

**Core Principle:** It is better to acknowledge uncertainty than to present speculation as fact.

---

## Confidence Markers

### VERIFIED ✓

**Definition:** Grounded in cited academic research, verified data, or direct empirical observation.

**Requirements:**
- Specific citation to peer-reviewed source
- Direct link to primary data
- Reproducible methodology documented

**Usage:**
```
[VERIFIED] The Cattell-Horn-Carroll (CHC) theory identifies 
approximately 80 narrow cognitive abilities organized under 
16 broad abilities (Schneider & McGrew, 2018).
```

**When to Use:**
- Citing published research
- Reporting measurement results
- Describing established facts
- Referencing regulatory requirements

---

### PLAUSIBLE ◐

**Definition:** Logically sound inference from verified premises, but not directly validated.

**Requirements:**
- Clear logical chain from verified facts
- Assumptions explicitly stated
- Alternative interpretations acknowledged

**Usage:**
```
[PLAUSIBLE] Given that Tier 2/3 suppliers operate on 3-8% margins 
(VERIFIED) and comprehensive digital transformation typically 
requires 15-20% revenue investment (VERIFIED), traditional 
approaches are mathematically infeasible for this segment.

Assumptions: Investment requirements similar across industries; 
margin constraints are binding.
```

**When to Use:**
- Drawing conclusions from evidence
- Applying frameworks to new domains
- Making predictions based on patterns
- Designing solutions based on requirements

---

### SPECULATIVE ○

**Definition:** Theoretical possibility requiring empirical testing to validate.

**Requirements:**
- Clearly labeled as speculation
- Basis for speculation stated
- Path to validation identified

**Usage:**
```
[SPECULATIVE] Autonomous AI agents with crypto wallets could 
enable swarm coordination for wealth generation independent 
of human oversight.

Basis: Extrapolation from current agent capabilities and 
DeFi mechanisms.

Validation needed: Prototype implementation, economic modeling, 
regulatory analysis.
```

**When to Use:**
- Exploring future possibilities
- Proposing untested architectures
- Hypothesizing about mechanisms
- Early-stage ideation

---

## Visual Reference

```
┌─────────────────────────────────────────────────────────────┐
│                    CONFIDENCE SPECTRUM                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  VERIFIED          PLAUSIBLE          SPECULATIVE          │
│     ✓                  ◐                   ○                │
│                                                             │
│  ├──────────────────────┼──────────────────────┤           │
│  │                      │                      │           │
│  Empirical          Logical              Theoretical       │
│  Evidence           Inference            Possibility       │
│                                                             │
│  Citations          Assumptions          Hypotheses        │
│  Required           Stated               Acknowledged      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Application Guidelines

### Document Structure

For technical documents, apply markers at the claim level:

```markdown
## Working Memory Architecture

[VERIFIED] Working memory capacity in humans is limited to 
approximately 4±1 chunks (Cowan, 2001).

[PLAUSIBLE] AI systems can simulate expanded working memory 
through context window management, though this differs 
mechanistically from human cognition.

[SPECULATIVE] Hybrid architectures combining transformer 
attention with explicit memory stores may better approximate 
human working memory dynamics.
```

### Aggregation Rules

When combining claims:
- VERIFIED + VERIFIED = VERIFIED (if logical connection is valid)
- VERIFIED + PLAUSIBLE = PLAUSIBLE
- Anything + SPECULATIVE = SPECULATIVE

### Confidence Transitions

Claims can move between levels:

```
SPECULATIVE → PLAUSIBLE → VERIFIED
     ↑              ↑           ↑
  Ideation     Reasoning    Evidence
```

**Upgrading:** Requires additional evidence or validation
**Downgrading:** Occurs when contradicting evidence emerges

---

## High-Risk Areas

### Fabrication Risks

Certain request types carry elevated fabrication risk:

| Request Type | Risk Level | Mitigation |
|--------------|------------|------------|
| Visualizations | HIGH | Acknowledge generation is synthetic |
| Statistics | HIGH | Cite sources or mark SPECULATIVE |
| Quotes | HIGH | Verify or paraphrase with attribution |
| Historical claims | MEDIUM | Cross-reference multiple sources |
| Technical specs | MEDIUM | Ground in documentation |
| General concepts | LOW | Standard citation practices |

### Unknowable Information

Some things cannot be known with certainty:

- Future market conditions
- Competitor internal strategies
- Exact regulatory interpretations
- Human behavioral responses

For these, use SPECULATIVE with explicit acknowledgment:

```
[SPECULATIVE - INHERENTLY UNCERTAIN] Federal budget priorities 
for FY2026 will likely emphasize AI capabilities based on 
current legislative signals, but specific allocations cannot 
be predicted.
```

---

## Integration with Methodology

### In Deconstruction
- Mark identified truths as VERIFIED
- Mark inferred constraints as PLAUSIBLE
- Mark hypothesized causes as SPECULATIVE

### In Reconstruction
- Design rationale typically PLAUSIBLE
- Tool capabilities should be VERIFIED
- Expected outcomes often SPECULATIVE until tested

### In Validation
- Test results become VERIFIED
- Generalizations remain PLAUSIBLE
- Future predictions stay SPECULATIVE

### In Iteration
- Updated understanding reflects new confidence levels
- Failed hypotheses documented (not deleted)
- Learning captured regardless of outcome

---

## Citation Standards

### For VERIFIED Claims

**Academic Sources:**
```
Author(s), Year. "Title." Journal, Volume(Issue), Pages.
```

**Technical Documentation:**
```
Organization. "Document Title." Version, Date. URL.
```

**Regulatory Sources:**
```
Regulation identifier. "Title." Effective date.
```

### Citation Density Guidelines

| Document Type | Minimum Citations |
|---------------|-------------------|
| Whitepaper | 30+ |
| Technical Spec | 10+ |
| Project Doc | 5+ |
| General Doc | As needed |

---

## Quality Assurance

### Self-Review Checklist

Before finalizing any document:

- [ ] All claims have explicit confidence markers
- [ ] VERIFIED claims include citations
- [ ] PLAUSIBLE claims state assumptions
- [ ] SPECULATIVE claims acknowledge uncertainty
- [ ] No unmarked claims in technical sections
- [ ] High-risk areas receive extra scrutiny

### Red Flags

Watch for these patterns that suggest insufficient rigor:

- "Studies show..." without citation
- Precise statistics without sources
- Definitive statements about uncertain topics
- Missing SPECULATIVE markers on predictions
- Overconfidence in AI-generated content

---

## Examples by Domain

### AGI Research
```
[VERIFIED] CHC theory identifies fluid reasoning (Gf) as 
distinct from crystallized intelligence (Gc) (Carroll, 1993).

[PLAUSIBLE] Current LLMs primarily exhibit Gc-like capabilities, 
with limited Gf as evidenced by struggles with novel reasoning 
tasks outside training distribution.

[SPECULATIVE] Recursive self-improvement may require robust 
Gf capabilities that current architectures lack.
```

### Federal Contracting
```
[VERIFIED] Other Transaction Authorities (OTAs) allow agencies 
to bypass FAR requirements for prototype projects (10 U.S.C. § 4022).

[PLAUSIBLE] OTA pathway offers faster time-to-contract for 
innovative solutions, making it advantageous for small businesses 
with novel capabilities.

[SPECULATIVE] OTA volume will increase 20%+ annually as agencies 
seek faster procurement mechanisms.
```

### MVCI Systems
```
[VERIFIED] n8n is open-source workflow automation software 
licensed under fair-code (n8n Documentation, 2024).

[PLAUSIBLE] Combining n8n with Ollama enables zero-cost 
AI-augmented workflows for organizations with technical capacity.

[SPECULATIVE] 12-agent MVCI architecture will achieve 80% 
TCO reduction compared to commercial alternatives.
```

---

## Philosophical Foundation

This framework rests on several principles:

1. **Fallibilism:** All knowledge is provisional and subject to revision
2. **Transparency:** Uncertainty should be visible, not hidden
3. **Intellectual Humility:** Acknowledging limits strengthens credibility
4. **Practical Utility:** Better to act on calibrated uncertainty than false certainty

---

*"Visualization requests represent the highest fabrication risk in AI assistance, leading to explicit acknowledgment of limitations rather than confident confabulation."*
