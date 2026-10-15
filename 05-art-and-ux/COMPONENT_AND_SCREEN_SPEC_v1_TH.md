# LAND OF SMILES — UI Components & Screen Specifications
## Mission Control / Triage / Dossier / VT Field Guide — DS v1.1

**Document:** LOS-UI-001 | **Draft**, 2026-10-15  
**Depends on:** [Design System](DESIGN_SYSTEM_v1_TH.md), [Palette Rules](COLOR_AND_TEXTURE_SYSTEM_v1_TH.md), [tokens.json](tokens/land-of-smiles.tokens.json), [components.css](components.css), [static preview](design-system-preview.html)  
**Data authority:** [FANS-26 clinical definition](../03-narrative/FANS-26_CLINICAL_CASE_DEFINITION_v1_TH.md), [coding registry](../06-engineering/FANS-26_CODING_AND_CASE_DATA_DICTIONARY_v1_TH.md)

## 1. Component architecture

**Visual layer** is separate from **case evidence**, **simulation truth** and **gameplay risk**. Design tokens make presentation consistent; they do not change medical case definitions or enemy stats.

| Component | Primary props / contract | States | Failure / accessibility |
|---|---|---|---|
| Brand Masthead \`los-brand-hero\` | title, campaign, subtitle, non-identifying promotional art | dark/light page, marketing only | no blood grunge over controls or medical info |
| Resource Metric \`los-metric\` | amount, unit, timestamp, confidence, trend | available/low/critical/unknown/loading | display units and fallback text, not just bar hue |
| Clinical Case \`los-case\` | C00–C40 + full status label + evidence at | unreviewed/suspected/probable/confirmed/excluded | C30 is teal even on blood-red brand, no color-only diagnosis |
| Stage / Severity block | S01–S04 + SV00–SV03 as **two values** | known/unknown/history | do not infer Cxx or threat from stage |
| VT Card \`los-vt-card\` | VT ID, type name, silhouette, motion, weakness | known/unknown/hidden to observer | does not prove lab-confirmed infection |
| Repair/RG card | RG01–RG05, repair burst, debt, limits | observed/estimated/unknown | “heal fast” not immortal; not same as VT |
| Triage Observation row | SYM-*, time, source, confidence | present/absent/not-observed/unknown | unknown ≠ absent |
| Transfer Route | origin, destination, capacity, sent/received ack | scheduled/en route/received/failed/unknown | don't mark success without endpoint ACK |
| Flood Status | depth with unit, trend, passability | passable/restricted/closed/unknown | icon + number + unit; no automatic safe water |
| Incident Log | timestamp, place, actor, evidence, correction history | provisional/reviewed/retracted | append-only historical record |
| Decision Dialog | affected people, impact, alternative, action label | default/loading/confirmed/cancelled/failure | full focus, clear destructive description |

## 2. Button/token semantics

| Intent | Class | Color role | Examples |
|---|---|---|---|
| Main story action | \`.los-button\` | \`accent\` blood bright / deep | “ดูภารกิจ”, “ติดตามเหตุการณ์” |
| Operational utility | \`.los-button--operational\` | \`operational\` deep storm blue | “ดูเส้นทาง”, “อัปเดตแผนที่” |
| Assistance | \`.los-button--rescue\` | \`rescue\` amber | “จัดน้ำดื่ม”, “ส่งทีมแพทย์” |
| Destructive / true danger | \`.los-button--danger\` | \`danger\` with warning language | “ปิดเส้นทางฉุกเฉิน” |
| Neutral alternative | \`.los-button--secondary\` | ink + border | “ยกเลิก”, “รายละเอียด” |

**Key semantic constraint:** marketing red is not equivalent to patient danger or user error. A confirmed record C30 is teal; the UI never uses brand red to represent a positive/negative infectious result.

## 3. Mission Control (screen MC-01)

**User goal:** manage evacuees and infrastructure under simultaneous flooding/infection risk.

**Layout:** 12-column desktop grid: map/network 7–8 columns and triage/resource/route sidebar 4–5 columns; timeline below. On 360–768px use an ordered single column: urgent notices → resources/triage → route list → map details.

**Priority:** danger from water or loss of receiving capacity, then necessary resources, not kill count.

**Core fields:** source time, water units/day, days until shortage, route capacity/hr, receiving ACK, confidence, unresolved cases. Unknown requires its own label. Use operational storm blue for safe navigation/status; actual danger must use text/icon alongside red.

**Loading/error:** skeleton or explicit “กำลังโหลดข้อมูล”; route without validated receiving ACK remains \`in transit/pending\`, not success; stale data badge with timestamp.

## 4. Clinical Dossier (screen CD-01)

**Goal:** triage and communicate uncertainty rather than diagnose from appearance.

**Header:** patient stable ID (never the mutable composite display code), C00–C40 status with in-world reviewer and last-reviewed time.  
**Body:** symptoms timeline, exposure history, competing explanations, intake notes, linked transfer chain.  
**Side panel:** Sxx stage and SVxx severity explicitly independent, date+confidence.  
**Restricted debug:** VTxx / RGxx may appear for game designers, not automatically for in-universe clinicians.

**Color protection:** cards are \`.los-clinical-panel\` with flat \`surface\` and \`textPrimary\`; \`graphics.grunge.medicalOpacity=0\`. A blood-red banner may frame the **marketing identity around the application**, but not the dossier text area.

**C30:** Only when fictional authorized evidence exists. Do not auto-confirm based on face, thirst, C20, S03, or VT.

**C40:** Excluded/ruled out, not “terminal” and not dead. Outcome fields track deceased status independently.

## 5. FANS-26 Field Guide (screen FG-01)

5 **primary types**: Fever Runner, Overgrown, Fibrotic, Aberrant, Drowned Seeker. VT00 is Ordinary/Unclassified, **not a sixth New Type**.

Use columns: silhouette, VT code/name, size/shape, movement, strength, weakness, weather/setting. Each card requires portrait and 96px greyscale silhouette evidence at art-review gate, with non-gory option.

In-game lore balance: **Stage 3 = 70% hyper/30% catatonic**; 8% New Type cumulative occurrence per 100 entering Stage 3 within 21 game days is a proposal, **not eight enemies per 100 visible simultaneously**.

VT and RG labels must never be conflated: RG05 describes regeneration intensity, VT05 describes water-seeking phenotype. Blood-seeking BH-BS is a behavior overlay and **not** VT06.

## 6. Light/dark responsiveness and content robustness

- Main breakpoints as QA cases: 360 / 768 / 1280 / 1920px
- Thai long labels may wrap; never truncate Cxx+status or water quantity+unit
- Minimum target 44×44px for primary touch actions
- WCAG 2.2 AA: body text ≥4.5:1; meaningful controls ≥3:1; show visible keyboard focus
- Prefers-reduced-motion respected; strong red flicker not used as notification method
- Color-blind mode needs text and shape not just tint (Cxx badges already have distinct icons)
- Print medical records in clean ink/bone mode with grunge removed
- No official WHO seal, national emblem, or invented “Night Tide Studio” copyright notice from exploratory board

## 7. Component QA scenarios

| ID | Given | When | Must happen |
|---|---|---|---|
| DS-101 | dark and light mode | toggle preview button | semantic colors change, brand remains crimson, codes remain readable |
| DS-102 | suspected C10 without test | render dossier | no “confirmed”, no red violence warning attached |
| DS-103 | C30 confirmed by authorized in-story evidence | render dossier | teal C30 label, not blood red; evidence provenance visible |
| DS-104 | VT02 & RG05 actor | render field guide | VT02 named Overgrown, RG05 shown separately |
| DS-105 | missing symptom observation | view triage | “ยังไม่ประเมิน” not “ไม่มีอาการ” |
| DS-106 | flood route transfer without ACK | view Mission Control | pending, not complete |
| DS-107 | no gore / motion reduction enabled | render game overlay | silhouette still recognizable and alert doesn't flash |
| DS-108 | camera at isometric 96px | view all VT labels hidden | type uniqueness checked by human art reviewers |
| DS-109 | print dossier | generate page | no decorative blood/paint overlay |
| DS-110 | type and evidence colors changed | run tokens validator | alias and contrast tests pass |

## 8. Build and release gate

\`\`\`bash
node 05-art-and-ux/tokens/build-tokens.mjs --check
node 05-art-and-ux/tokens/validate-tokens.mjs
\`\`\`

**Do not claim game runtime integration:** CSS and HTML are a static UX reference until separately imported and tested in the game's codebase. PR review needs screenshot evidence of both themes; DEC-005 and DEC-012 remain open.
