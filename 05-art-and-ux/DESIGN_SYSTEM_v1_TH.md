# LAND OF SMILES — Design System & Visual Tokens
## Brand / Operational UI / Infected Dossier · v1.0 TH

**Document ID:** LOS-DS-001  
**Status:** Draft design direction — token & CSS sources committed; not yet integrated into game runtime  
**Updated:** 2026-10-15  
**Brand source:** [Brand & Narrative Concept Bible](../01-vision/LAND_OF_SMILES_BRAND_NARRATIVE_CONCEPT_v1_TH.md)  
**Game source:** [GDD](../02-game-design/LAND_OF_SMILES_GDD_v1_TH.md)  
**Medical source:** [FANS-26 Clinical Definition](../03-narrative/FANS-26_CLINICAL_CASE_DEFINITION_v1_TH.md), [Infected Types](../02-game-design/FANS-26_INFECTED_TYPE_CLASSIFICATION_v1_TH.md)  
**Implementation:** [DTCG tokens](tokens/land-of-smiles.tokens.json) · [CSS tokens](tokens/land-of-smiles.css) · [Component CSS](components.css) · [Static preview](design-system-preview.html)  
**Art direction:** [VT01–VT05 Character Design System](INFECTED_CHARACTER_DESIGN_SYSTEM_v1_TH.md)

> **Positioning:** “The land still smiles, but every smile may hide a bite.” ให้ความรู้สึกว่าเมืองที่มนุษย์พยายามช่วยกันยังคงอยู่ท่ามกลางวิกฤต ไม่ใช่ UI เกมยิงผีดิบแบบเลือดสาด

## 1. Design principles

1. **Rescue first:** หน้าจอให้ความสำคัญกับชีวิต น้ำสะอาด เส้นทางส่งต่อ และความเชื่อมั่นของชุมชน มากกว่าคะแนนกำจัดศัตรู
2. **Uncertainty is visible:** สถานะ C10/C20/C30 เป็นความแน่นอนของหลักฐาน ไม่ใช่ระดับการคุกคาม และไม่แสดงว่า “เห็นหน้ารู้ว่าติดเชื้อ”
3. **Water tells the story:** น้ำเป็นทั้งพื้นผิว ฉาก ภัยทางลอจิสติกส์ และแรงจูงใจของผู้ติดเชื้อ; ใช้เส้นชั้นระดับน้ำและ geometry ของสถานีเป็นภาษาภาพ
4. **Silhouette over hue:** Infected types ต้องต่างกันจากรูปร่างและจังหวะเคลื่อนไหวเมื่อปิดสีออกทั้งหมด
5. **Readable under crisis:** ข้อมูลสำคัญต้องอ่านบนพื้นหลังมืด ภาพเคลื่อนไหว และมือถือได้; ไม่ใช้สีกับไฟกระพริบเป็นสัญญาณเดียว
6. **Truthful diegesis:** Medical dossier ใช้โครงสร้าง WHO-inspired แต่ FANS-26 ไม่ใช่โรคที่ WHO/ICD-11 รับรอง; ไม่ทำตรา/ลายเซ็นรับรองปลอม
7. **No accidental finality:** สถานะโลโก้ คำโปรย ภาพ Key Art และระดับ gore ยังรอ DEC-005; token palette นี้เป็นข้อเสนอสำหรับนำไปลอง ไม่ใช่ final brand lock

## 2. Visual language / แนวภาพ

**Core contrast:** *Smile vs Bite* → เส้นโค้งที่อ่านเป็นรอยยิ้มจากไกล ๆ แต่มีช่องว่างเหมือนรอยบิ่นเมื่อมองใกล้ ใช้เชิงภาพตกแต่ง ไม่ใช่สัญญาณอาการของคนป่วย  
**Materials:** concrete, oxidized steel, translucent floodwater, worn plastic sheeting, rescue amber tape, weathered paperwork, station enamel signage  
**Light:** natural flooded-daylight / cold overcast / emergency amber / dark wet concrete. หลีกเลี่ยง neon RGB, red wash ทุกฉาก, hologram ลอยแบบ sci-fi  
**Photographic grading:** contrast controlled, recognisable Thai urban signage (สะกดและสถานที่ตรวจสอบก่อน release), non-graphic medical realism  
**Hero composition:** BTS elevated walkway and people receiving help in foreground, floodwater and uncertainty in middle distance; ผู้ติดเชื้อเป็นภัยในเรื่อง ไม่ใช่ hero pose ที่กลบงานอพยพ

## 3. Token hierarchy (DTCG 2025.10–style)

```text
primitive color  → theme dark/light → semantic roles (canvas, text, status)
                                 ↓
         component tokens (case badge, metric, dossier, infected card)
                                 ↓
               output (CSS vars, UI, art reference, 3D labels)
```

**Source of truth:** `tokens/land-of-smiles.tokens.json` เป็นโครงสร้าง token ที่ใช้ `$type`, `$value` และ alias references ตาม Design Tokens Community Group Format Module 2025.10; เป็น Community Group Report **ไม่ใช่ W3C Recommendation**. CSS `tokens/land-of-smiles.css` เป็น browser consumption layer ที่ต้องซิงก์กับ JSON. นี่ไม่ใช่ระบบ token ที่ประกอบด้วยพารามิเตอร์เชื้อโรคหรือโมเดลทางคลินิก

### 3.1 Palette / semantic examples

| Role | Dark theme | Light theme | Usage |
|---|---|---|---|
| Canvas | `#0D1921` | `#F7F4ED` | HUD/dossier background |
| Surface | `#142630` | `#FFFFFF` | cards / panels |
| Elevated surface | `#1D333D` | `#E6ECEB` | focusable workflows |
| Primary text | `#F7F9F8` | `#0D1921` | labels and body |
| Secondary text | `#C9D8DB` | `#465B65` | helper text |
| Accent / water | `#7ACCD0` | `#155862` | selected/navigation/links |
| Rescue | `#F0C476` | `#83520D` | assistance / supply calls to action |
| Critical danger | `#F58E87` | `#A52D39` | only true safety threat, never shorthand for C30 |
| Success | `#8DD6AF` | `#196A44` | confirmed delivery/action result |

**Surveillance coding is separate from danger:** `C00 unknown` muted; `C10 suspected` amber; `C20 probable` warm orange; `C30 confirmed` teal (evidence, not moral danger); `C40 excluded` steel. ทุก status ต้องมี **รหัส + คำเต็ม + หลักฐาน** ไม่ใช่ใช้จุดสีอย่างเดียว

### 3.2 Type palette (secondary; never diagnosis)

| Type | Dark accent | Light accent | Material / shape role |
|---|---|---|---|
| VT01 Fever Runner | `#ECA86D` | `#934910` | heat / forward sprint / narrow |
| VT02 Overgrown | `#D8A37C` | `#855238` | asymmetry / heavy wedge / stretched fabric |
| VT03 Fibrotic | `#ADC5D4` | `#3C647D` | stiff angles / hard scarring |
| VT04 Aberrant | `#C4AFE6` | `#674695` | crooked irregular shape / loss of coordination |
| VT05 Drowned Seeker | `#77CFC7` | `#155E59` | dripping vertical / water fixation |

สีเหล่านี้เป็น **secondary accent** สำหรับชื่อ dossier, mini-legend และ shape annotation; สีคล้ายกันบางคู่ไม่เป็นปัญหาการจำแนก เพราะ silhouette และ posture เป็นตัวบังคับที่สำคัญกว่า

### 3.3 Typography

- **Display/English:** `Oswald` (เมื่อมีสิทธิใช้และติดตั้ง), fallback `Arial Narrow` / sans-serif; โลโก้ LAND OF SMILES ตัวพิมพ์ใหญ่ แต่ไม่ใช่ final logo font 
- **Thai UI / longform:** `IBM Plex Sans Thai` หรือ `Noto Sans Thai` → `Tahoma/system-ui` fallback; ไม่มีการแจกหรือฝัง font files ใน repo
- **Data mono:** `IBM Plex Mono` / Consolas สำหรับ C20, S03, VT02, capacity, times and counters
- **Scale:** caption 12 px, label 14 px, body 16 px, large-body 18 px, subtitle 22 px, heading 28 px, hero 40 px at 16px root; **บนมือถือข้อความสำคัญต้องไม่ถูกย่อจนอ่านไม่ได้**
- **Line height:** display ~1.15; body ~1.55; long Thai reading copy ~1.7 ตามบริบท
- **Type treatment:** English labels uppercase sparingly; Thai labelsเป็นคำอ่านง่าย; don't use all-caps Thai analog or tiny gray text for medical evidence

### 3.4 Spacing, radius and motion

**Spacing:** 0 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 px (4px base).  
**Radius:** 4 / 8 / 12 / 18 / 28 px; pill 999px ใช้เฉพาะ action/chip ไม่ใช้ทั้ง UI จนกลายเป็นแอป lifestyle  
**Motion:** 120ms response, 200ms normal, 320ms slower transitions, 900ms alert pulse *เฉพาะเมื่อเหมาะสม*; respects `prefers-reduced-motion` → 0ms.  
**Min target:** 44×44 px for core touch controls.  
**Design vocabulary:** square edges for military/service equipment, measured rounding for human-facing shelter UI; avoid heavy gloss/glass on critical legibility surfaces.

## 4. Component contracts

| Component | Must include | States / behavior | Accessibility |
|---|---|---|---|
| **Resource Metric** | label, amount, unit, trend, confidence if estimated | normal/low/critical/loading/no-data | value and unit never represented only by color |
| **Case Badge** | Cxx + spelled-out status | C00, C10, C20, C30, C40 | shape + label + accessible name |
| **Stage & Severity Block** | Sxx and SVxx on different lines | unknown / measured / pending | never combine severity with threat |
| **Infected Type Card** | VTxx, name, silhouette, primary motion, weakness | type known / suspected/unclassified | silhouette readable in greyscale |
| **Observation Row** | symptom code, source, observed time, confidence | present/absent/not-assessed/unknown | don't substitute "missing = negative" |
| **Evacuation Queue** | capacity, destination, receiving ack, urgency | holding/in-transit/received/missing | status has text, timestamps, no silent success |
| **Flood Level Chip** | water level unit, trend, route impact | passable/restricted/closed/unknown | color + depth/unit + iconography |
| **Decision Dialog** | action, affected people, uncertainty, undo/alternate | destructive action confirmation | keyboard focus, plain consequence text |
| **Incident Log** | event time, place, actor, evidence | unverified/verified/corrected | do not overwrite past reports |

### Button treatment

- **Primary (teal)** = clear forward task, not automatically “safe”
- **Rescue/assist (amber)** = supplies, evacuation, medicine assistance; don't color patients amber for moral judgment
- **Danger (salmon-red)** = *actual hazard or irreversible action*, e.g. flooding gate damage; **C30 confirmed** uses teal because it is certainty of evidence
- **Secondary** = neutral bordered, no deceptive visual priority
- Focus ring **3px** and high contrast; disabled is not the only way to explain why action unavailable

## 5. Information architecture / screen templates

### A. Mission Control — 1920×1080 desktop / responsive
**Top:** Chapter label, S9 location, GAME DAY, water pressure, active route warnings  
**Main:** left 8-column map/zone network, right 4-column resource and triage summaries  
**Bottom timeline:** transfer ACK, incident log, alerts sorted by urgency not by infected kill count  
**Mobile:** single-column actionable timeline, route and water controls prioritized before dense map; no tiny hover-only actions.

### B. FANS-26 Dossier — clinical uncertainty screen
**Header:** stable case ID + C10/C20/C30 proof status, reviewed timestamp  
**Primary evidence:** symptom timeline with evidence sources and differential possibilities  
**Separate side panel:** Sxx, SVxx, clinical action & follow-up, not VT type as diagnosis  
**Restricted in-game debug view:** VTxx/RGxx/BHxx may be visible only in art/game debugger, not automatically to shelter clinician  
**History:** each status change preserved rather than overwriting certainty.

### C. Infected Type Field Guide
5 distinct silhouette cards + code/name + motion/weakness + region context. Never put all types in identical forward-lurch hero pose. Artist uses [character brief](INFECTED_CHARACTER_DESIGN_SYSTEM_v1_TH.md) and 96px black silhouette acceptance test.

### D. S9 Triage Queue
Water rations, queue length, observation capacity, uncertainty, trust impact. “Thirsty” alone cannot move person straight to Confirmed; actions should encourage care and observation.

## 6. Accessibility / color & interaction QA

- WCAG 2.2 AA working target: **≥4.5:1 normal text**, **≥3:1 large text**, **≥3:1 meaningful non-text UI graphics**. Verify exact rendered combinations, including opacity overlays.
- Designed base pairs computed from candidate tokens (WCAG relative luminance):
  - Dark body `#F7F9F8` / canvas `#0D1921`: **16.86:1**
  - Dark secondary `#C9D8DB` / surface `#142630`: **10.62:1**
  - Light body `#0D1921` / canvas `#F7F4ED`: **16.23:1**
  - Light secondary `#465B65` / white `#FFFFFF`: **7.13:1**
- Focus ring and control strokes tested separately from background; do not rely on tiny 1px gray borders being visible on cinema grading
- Keyboard navigable, meaningful visible focus, logical tab order; data tables with labelled headings and scoped units
- Reduced motion: avoid obligatory looping fever/crosshair pulses; never use rapid flashing for clinical classification
- No color-only status, add code + label + shape/pattern; alternate treatment for color-blind viewers
- No forced gore: non-graphic character variants should remain identifiable by proportion/clothing/posture rather than open wounds
- Both light/dark themes are mandatory for dossier and HUD review, not merely recolored screenshots

## 7. Ownership and production gates

| Decision/source | What this DS may change | What it cannot silently change |
|---|---|---|
| DEC-005 (Open) | draft palette, display styling, visual motifs | officially approved logo, tagline, target age rating |
| DEC-007..010 (Open) | visual articulation of infected lore | pathogen taxonomy, case stage, 70/30, New Type 8% |
| DEC-011 (Open) | display code formatting, UI clinical states | WHO endorsement, confirmation algorithm |
| **DEC-012 (Open proposal)** | palette/tokens/art readability adoption | engine integration without implementation QA |

**Delivery levels:** L0 = documents + DTCG/CSS tokens + static preview (this PR); L1 = frontend import and screens; L2 = production 3D rigs/turnarounds and runtime variant behaviors; L3 = user testing/locale/contrast audit. Do **not** claim L1–L3 implemented by merging documentation.

## 8. Verification checklist

- [ ] DTCG JSON parses and aliases resolve; CSS variable naming mirrors token registry
- [ ] Default dark + light palettes and distinct surveillance status mapping present
- [ ] 5 VT type accents defined independent of medical confirmation
- [ ] At least one Dossier, Mission Control and Type Card example with text-only fallback
- [ ] 96px grayscale silhouette/side-by-side five-type comparison accepted by art review (not yet empirically verified)
- [ ] UI tested 360px/768px/1280px/1920px without clipping
- [ ] Normal text and UI control contrast computed on actual backgrounds
- [ ] Keyboard/reduced-motion/localization/Thai line breaking tested
- [ ] Existing brand/legal and FANS-26 biological uncertainty not violated

## 9. Standards links

- DTCG Format Module 2025.10: https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/ (**W3C Community Group report, not W3C Recommendation**)
- WCAG 2.2 Understanding Contrast (Minimum): https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
- WCAG 2.2 Understanding Non-text Contrast: https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html
