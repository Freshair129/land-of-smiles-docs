# LAND OF SMILES — DESIGN SYSTEM v1.1
## RUIN × BLOOD × BONE / บอร์ดภาพรวม, UI และ Character Art

**Document:** LOS-DS-001 | **Version:** 1.1.0 | **Updated:** 2026-10-15  
**Status:** Draft, committed in design PR; not a production/brand approval  
**Campaign:** Bangkok Outbreak · **Game:** LAND OF SMILES  
**Source of truth:** [DTCG-style tokens JSON](tokens/land-of-smiles.tokens.json) → [generated CSS](tokens/land-of-smiles.css)  
**Companions:** [Color & Texture](COLOR_AND_TEXTURE_SYSTEM_v1_TH.md) · [Components & Screens](COMPONENT_AND_SCREEN_SPEC_v1_TH.md) · [Infected Art](INFECTED_CHARACTER_DESIGN_SYSTEM_v1_TH.md) · [Preview](design-system-preview.html)  
**In-universe system:** [Clinical Case Definition](../03-narrative/FANS-26_CLINICAL_CASE_DEFINITION_v1_TH.md) · [Infected Type Registry](../02-game-design/FANS-26_INFECTED_TYPE_CLASSIFICATION_v1_TH.md)

> **Visual proposition:** เมืองที่กำลังจมน้ำ ถ่านดำเปียก ฝุ่นคอนกรีต กระดาษเก่า สนิม และ **รอยเปื้อนแดงที่ดูคล้ายเลือด** บนงานโปรโมต แต่ระบบช่วยชีวิตคนและแฟ้มผู้ป่วยต้องคม ชัด อ่านง่ายและแยกหลักฐานจากความน่ากลัวได้เสมอ

## 1. Visual and ethical guardrails

1. **Horror in the frame, clarity in the data.** สีแดงและคราบกระเซ็นใช้งานหลักกับ logo treatment, cover, menu masthead, chapter cards และ key art; ไม่วางทับตัวเลข หน้าจอคัดกรอง ช่องกรอกข้อมูลหรือป้ายผลตรวจ
2. **Brand red ≠ clinical danger.** แดงแบรนด์ทำให้รู้สึกเป็น survival horror; สี danger ใช้เมื่อเกิดอันตรายหรือการกระทำย้อนกลับไม่ได้จริงเท่านั้น
3. **C30 confirmed ≠ hostile.** สถานะ C00–C40 เป็นระดับหลักฐานของโรคสมมติ: C30 ใช้ **teal** พร้อมรหัสและคำว่า Confirmed ไม่ใช้แดงเลือด; SV03 เป็นระดับความรุนแรงของผู้ป่วย; VT เป็นประเภทเกม; RG เป็นการฟื้นฟู — อย่ารวมเป็นค่าตัวเดียว
4. **Silhouette before color.** VT01–VT05 ต้องอ่านออกในเงาดำ 96px และมุมเล่นจริงก่อนแต่งสีพิเศษหรือทำ poster
5. **Floodwater as a duality.** น้ำเป็นทั้งภัยน้ำท่วม ความขาดแคลนน้ำดื่ม และแรงจูงใจของผู้ติดเชื้อ; ห้ามทำให้น้ำเป็นยารักษาเชื้อ
6. **No fake authority.** โรค FANS-26 และรหัส LOS-* ไม่ได้รับการรับรองจาก WHO/ICD-11. ไม่ใช้ตรารัฐหรือโลโก้หน่วยงานจริงเพื่อสื่อการรับรอง
7. **Proposed branding, not claimed studio identity.** ภาพคอนเซปต์รุ่นก่อนอาจมีชื่อสตูดิโอที่โมเดลภาพสร้างขึ้นเองหรือคำอธิบาย C40 ผิดความหมาย — **ไม่ใช่ Canon** และห้ามคัดลอกเป็น UI จริง
8. **Not a medical model.** CPM/TRR/FIR, Regenerative Overdrive และ New Type rates เป็น fictional gameplay design ไม่ใช่ผลทดลองมนุษย์

## 2. System map: one token source

\`\`\`text
Brand / Narrative canon + FANS-26 medical definitions
                         ↓
            tokens/land-of-smiles.tokens.json
                         ↓ build-tokens.mjs
            tokens/land-of-smiles.css (GENERATED)
                         ↓
            components.css + design-system-preview.html
                         ↓
            Mission Control / Triage / Medical Dossier
            + infected field guide & concept-art annotation
\`\`\`

- **Tokens:** JSON contains primitives, semantic dark/light themes, case evidence colors, five VT accent colors, typography, spacing, layout, graphics and motion.
- **Generator:** \`node 05-art-and-ux/tokens/build-tokens.mjs\` creates CSS deterministically; \`--check\` verifies generated output.
- **Validator:** \`node 05-art-and-ux/tokens/validate-tokens.mjs\` checks references, sRGB, CSS sync, contrast and example screen contract.
- **Consumer components:** \`components.css\` provides style only. No game runtime has been migrated by this document.

## 3. Palette direction: Ruin × Blood × Bone

**No pastel cyan light theme.** Light mode is aged document stock with aggressive dried-blood typography and dark petrol blue reserved for operational information.

| Role | Dark / in-game | Light / dossier | What it means |
|---|---|---|---|
| Canvas | \`#0B0F14\` Ruin Black | \`#E6DED1\` Bone White | primary context |
| Panel | \`#1E2328\` Charcoal | \`#F5F0E8\` Paper White | readable cards and forms |
| Raised panel | \`#2D343A\` Deep Panel | \`#D7C6B0\` Grime Sand | grouped/secondary surface |
| Ink | \`#F5EEE6\` off-white | \`#20252A\` charcoal | primary body text |
| Secondary ink | \`#D4CFC4\` | \`#53483F\` Storm Brown | field help / notes |
| **Brand accent / links / primary CTA** | \`#F0786F\` Crimson highlight | \`#8B1E1E\` Dried blood | expressive but readable |
| **Operational / water** | \`#8DD3DF\` Storm Mist | \`#155768\` Deep Storm Blue | route/navigation/data utility |
| Rescue / logistics | \`#E8B76D\` Amber | \`#834411\` Amber Brown | assistance, never infection label |
| Danger / destructive action | \`#FF9E92\` | \`#9B2430\` | actual hazard; explicit icon + text |
| Confirmed evidence C30 | \`#83D8D0\` | \`#185665\` | evidence certainty, **not danger** |

**Brand material:** \`bloodDeep #8B1E1E\`, \`bloodDried #5A1A1A\`, \`bloodMark #C12B2E\`, \`rustRed #8F3A30\`, \`concrete #C9C5BD\`, \`ashGreen #3C4642\`. Exact sRGB values and aliases live in JSON.

Design board images are **mood references**, not machine-readable source of truth; inconsistent generated hex or labels in an image must never override registry JSON or clinical definitions.

## 4. Typography / language

- English display/large lockup: condensed \`Oswald\` → \`Arial Narrow\` fallback. This is **typographic treatment**, not an approved final logo.
- Thai UI/readability: \`IBM Plex Sans Thai\`, fallback \`Noto Sans Thai\` → \`Tahoma\` → system sans; do not require downloaded font files.
- Numeric IDs/medical data: \`IBM Plex Mono\` or \`Consolas\`; align tabular quantities.
- Scale at a standard root 16px: caption 12, label 14, body 16, large body 18, subtitle 22, heading 28, hero 40; use \`clamp()\` for responsive hero.
- Font weights: 400 / 500 / 600 / 700; body line-height 1.55 and long Thai paragraphs 1.7.
- Uppercase headlines are decorative English only; Thai should be readable and proofread. AI image text is not approved for shipping.

## 5. Layout / motion / texture

**4px spacing foundation:** 0 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64.  
**Radii:** 4 / 8 / 12 / 18 / 28; do not make a soft wellness-app appearance with giant pill cards everywhere.  
**Interaction:** core touch target 44px; focus 3px with high contrast; no critical hover-only controls.  
**Motion:** 120 / 200 / 320ms; optional 900ms alert emphasis but never continuous flashing in clinical panels. Respect \`prefers-reduced-motion\`.  
**Textures:** CSS blood-like paint splatter is a composited decorative layer; use \`graphics.grunge.heroOpacity=.32\`, \`promoOpacity=.16\`, \`panelAccentOpacity=.07\`, \`medicalOpacity=0\`, \`printOpacity=0\` as caps. They are opacity token values, not biological blood images. Explicit consent/age-rating decisions for stronger gore are outside this DS.

**Protected content zones:** status badges Cxx, resource metrics, graphs/axes, triage forms, maps, legal disclaimers and buttons get **no splatter overlay**. Asset images may be dramatic, but not obscure literal UI text.

## 6. Reusable components

The detailed API/ARIA/state matrix is in [Components & Screens](COMPONENT_AND_SCREEN_SPEC_v1_TH.md).

| Family | Components | Visual rule |
|---|---|---|
| Brand | hero masthead, chapter banner, distressed logo treatment, grunge divider | crimson splatter permitted **behind brand composition only** |
| Command | resource metric, route tracker, transfer status, flood level chip, scenario notices | high information density, operational teal for non-danger navigation |
| Clinical | case Cxx badge, stage/severity chips, symptom timeline, evidence row, triage panel | clean surface, no blood grunge; no automatic diagnosis |
| Field Guide | VT card, silhouette, weakness, RG tier, behavior overlay | use shape/pose first; accent colors second |
| Controls | primary red CTA, operational teal action, rescue amber action, destructive hazard action | explicit text + icon + meaningful failure/disabled states |
| Feedback | pending, empty, error, delayed ACK, uncertain, partial success, loading | never use “green means completed” without destination proof |

**C40** = excluded/ruled-out according to fictional clinical rules; **never “Terminal”**. A previous generated image showing terminal for C40 was wrong.

## 7. Required screens

### A. Mission Control / S9
Central zone and logistics map, water inventory, staffing, transfer queue with acknowledgment, flood route warnings and timeline. Threat labels don't override rescue priority. Primary red for key action when appropriate; operational teal for map utilities.

### B. Clinical Dossier
Stable patient ID, latest case status Cxx with reviewer and evidence version; separate Sxx clinical stage, SVxx severity, symptom timeline and follow-up/transfer history. Do not expose VT/RG as certain diagnosis to a medic unless fictionally observed and role-authorized.

### C. Triage / Water Queue
Water-ration supply, queue length, capacity, symptoms reported/not assessed and trust consequences. “Thirsty” does not imply infection. State partial/unknown explicitly.

### D. VT Field Guide
VT01–VT05 silhouettes, mobility cues, environmental context, regeneration debt and weakness; a free-text case diagnosis is not shown by default. Different poses, not simply five faces with red eyes.

### E. Accessibility and mobile
At 360/768/1280/1920px check no clipped codes or impossibly small type; buttons remain min 44×44, visible focus; color-blind identification by code, shape, words; no motion-only or color-only state.

## 8. Verification gates

- [x] Palette selected for DS v1.1 draft, with red and light theme hardened
- [x] JSON and CSS source files committed in PR branch; generator and validator scripts specified
- [ ] Execute validator in CI on actual branch and verify PASS output
- [ ] Capture real browser screenshot dark/light at mobile/desktop and review contrast on rendered imagery
- [ ] Verify 5 class silhouettes at 96px greyscale and actual game camera (not yet done)
- [ ] Confirm font license/availability and Thai/English proofing
- [ ] Integrate into game runtime in separate implementation task
- [ ] Approve final direction under DEC-005 / DEC-012

## 9. Authority, decisions and migration

**Authority hierarchy:** Main Story Canon (disease/time), clinical definition (Cxx/Sxx/SVxx), Type Registry (VT), GD-FANS-003/004 (variants and RG), this DS (visual semantics), tokens JSON (concrete colors/dimensions) and generated CSS (consumption). A promotional image cannot override medical codes or gameplay counts.

**Decisions:** DEC-005 brand visual approval still open; DEC-007..011 disease and taxonomic proposals remain open; DEC-012 design tokens and visual-art production lock still open. Merging a Draft DS doesn't silently make those decisions Accepted.

**Migration:** Previous DS v1.0 teal-first CSS should be replaced through the JSON generator. Class names and \`--los-color-accent\` remain compatible, but the semantic meaning of accent becomes horror-brand crimson, while \`--los-color-operational\` is introduced for navigation/water data.

**References:** [DTCG Format Module 2025.10](https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/) (W3C Community Group Report, **not W3C Recommendation**); [WCAG 2.2 AA](https://www.w3.org/TR/WCAG22/).
