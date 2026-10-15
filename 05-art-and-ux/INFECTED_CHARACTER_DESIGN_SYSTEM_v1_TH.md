# LAND OF SMILES — Infected Character Design System
## FANS-26 VT01–VT05 · Silhouette, Pose, Material & Motion Tokens

**Document ID:** LOS-CHAR-001  
**Status:** Draft art direction — references, not finished character assets  
**Updated:** 2026-10-15  
**Canon:** [Type Classification](../02-game-design/FANS-26_INFECTED_TYPE_CLASSIFICATION_v1_TH.md), [Variant Balance](../02-game-design/FANS-26_REGENERATIVE_INSTABILITY_VARIANTS_SPEC_v1_TH.md)  
**DS:** [Design System](DESIGN_SYSTEM_v1_TH.md) · [Type accent tokens](tokens/land-of-smiles.tokens.json)

## 1. What went wrong with the previous mockups

ทุกแบบใช้คนตัวผอม ผมเปียก เสื้อขาด ท่ายืนโน้มหน้า และฉากน้ำท่วมที่เหมือนกันมาก ทำให้ผู้เล่นมองภาพย่อแล้วแยก Fever Runner / Fibrotic / Aberrant ไม่ออกได้ แม้เปลี่ยนชื่อ VT และสี accent แล้วก็ตาม

**Fix:** Character identity must survive conversion to a **solid black silhouette** at **96px high** with names, colors, background and detailed face hidden. Shape language + asymmetry + primary pose + signature motion are mandatory; color, costume and lighting only reinforce.

## 2. Variant silhouette matrix

| ID | Big shape | Body ratio cue (relative, not medical measurement) | Distinct pose | Material / clothing | Animation signature | Accent |
|---|---|---|---|---|---|---|
| VT01 **Fever Runner** | narrow forward arrow, lots of negative space | lean limbs, narrow chest; no huge shoulders | diagonal sprint, weight pitched forward, one foot lifted | light sportswear / medical exhaustion, sweat | short bursts, trembling pause, rapid breath | warm orange |
| VT02 **Overgrown** | asymmetric wedge (heavy one side) | one shoulder + forearm visually dominant; **do not automatically make 240cm giant** | off-center planted feet, one heavy arm hanging low | stretched shirt, slings, rough enlarged forms | slow initiation, heavy momentum, poor turn rate | rust |
| VT03 **Fibrotic** | tall rigid rectangle / stacked angular plates | elbows and knees held in stiff angles; no giant muscles | upright frozen torso, constrained bend | matte scar bands/rigid surfaces (non-graphic) | stiff steps, limited head turn and reach | pale steel-blue |
| VT04 **Aberrant** | bent S-line, uneven protrusions | off-axis shoulder/back, asymmetric under-cloth masses | side-twisted standing, constant imbalance | lumpy subcutaneous forms, clothing stretched unevenly | pauses, correction, irregular limping | muted violet |
| VT05 **Drowned Seeker** | drooping rainlines / narrow suspended shape | hanging fabric/long wet hair, arms pendulous | face angled toward nearby water, half-wading | soaked fabric, wrinkled skin, reflective water | slow, distracted, slight swaying; still breathes air | cold aqua |

**Independent variables:** VT type ≠ RG regeneration tier; type ≠ case Cxx; dark/light accent independent of silhouette. Hyper 70%, catatonic 30%, New Types 8% per Stage-3 cohort are lore/game-balance proposals in their own documents, **not** artist quotas or counts for every scene.

## 3. Per-type hero asset checklists

### VT01 / Fever Runner
- **Must:** conspicuously narrow silhouette, forward diagonal torso, fast foot spacing, elbows open, breath visible in motion.
- **Must not:** same upright walker as VT03, hypertrophied arm, “infinite sprint” performance, screaming face as only differentiator.
- **3D:** primary movement via hips/ankles; quick acceleration–deceleration, short recoveries.
- **Scene cue:** overheated dry/raised walkway, muddy shoes, water-seeking after exertion.
- **Weakness readable:** repeated stops, exhaustion, heat stress; injury doesn't make it immortal.

### VT02 / Overgrown
- **Must:** arm/shoulder asymmetry legible from back, right or left dominance (randomize L/R among individuals), planted stance.
- **Must not:** symmetric bodybuilder silhouette, magic armor skin, always 2.4m tall; remain human-derived.
- **3D:** weight shift delayed, dominant shoulder swings with inertia, collision hull follows real mesh enough for fair play.
- **Scene cue:** narrow barricade or doorway demonstrates turning difficulty.
- **Weakness readable:** slow response, large turn arc, high resource debt.

### VT03 / Fibrotic
- **Must:** **plates/bands and stiff joint restrictions** read without close-up. Elbows fixed, torso stays almost vertical.
- **Must not:** merely texture overlay on same VT01 silhouette; giant brute proportions; scars implying invulnerability.
- **3D:** low flexion, mechanical-looking but organically constrained movement.
- **Scene cue:** station hallway/boarding gate, stiff footsteps.
- **Weakness readable:** poor mobility, inability to crouch/step over obstacles.

### VT04 / Aberrant
- **Must:** bent torso line, irregular growth bulges that distort clothes, imbalance corrections.
- **Must not:** copy VT02 one-large-arm wedge; graphic gore; mandatory cancer diagnosis.
- **3D:** offset center of mass and disrupted cadence; still constrained by mass/gravity.
- **Scene cue:** cluttered storefront / stalled escalator where poor coordination is noticeable.
- **Weakness readable:** unpredictable but physically inconsistent and progressively unstable.

### VT05 / Drowned Seeker
- **Must:** water is the character’s **direction of attention**, soaked downward silhouette, half-submerged contextual pose.
- **Must not:** aquatic gills, underwater breathing, teleport toward water source, same sprint stance as VT01.
- **3D:** trailing cloth, low gait, wading limits and wet acoustic layer.
- **Scene cue:** canal steps, drain or floodwater along S9 with real reachable water.
- **Weakness readable:** current/depth, exhaustion, slipping/drowning potential.

## 4. Costume and setting libraries

**Urban survivor archetypes, mixed across types:** commuter with office ID, motorcycle courier, maintenance worker, market seller, rescue volunteer, student (adult), elderly commuter. Avoid turning a job, nationality, ethnic group or class into an infection marker. Variation should be within type while preserving silhouette.

**Set dressing:** station advertising screens, emergency water crates, raincoats, flood level marks, hand-written water ration labels, wet staircases. All Thai signage must be proofread by human reviewer; AI art copy is not release-ready.

**Material variants:** wet canvas, frayed polyester, rubber shoes, porous concrete dust, patchy scar-like fibrous tissue, stretched seams, plastic raincoat; preserve cloth separation from actual anatomy. No need for open flesh, blood or exposed organs.

**Weather lighting:** all five evaluated at identical camera/light first (controlled comparison); atmosphere can vary only after silhouette pass so backgrounds cannot hide design weaknesses.

## 5. Locked presentation system / concept boards

1. 5-character lineup with **shared head-to-toe scale and orthographic-ish camera** (front/side/back/3⁄4). No poster text in primary review.
2. 96px monochrome silhouette strip with labels covered: 5/5 should be recognizable by reviewer who knows brief.
3. Detail panel for each: facial state, signature body change, costume material, gait/footwear, environment interaction.
4. Front ¾ full-body action image; separate **in-game isometric view** (actual gameplay camera) to test legibility.
5. Consistent render settings, neutral flood gray background, no red gore props, no fake WHO symbols.
6. Colors apply at UI annotation and limited physical cues only; do not turn all infected bodies their accent hues.

**Asset packages per type:** `LOS_FANS26_VT01_Concept_Front_v001.png`, `..._Side_...`, `..._Back_...`, `..._Iso_...`, `..._Details_...`, later rig file name with `VTXX` and version. Thumbnail 256px and gameplay 96px evidence must accompany approval. The mentioned files are **required output names**, not claims that assets were created.

## 6. Motion tokens and animation QA

- **VT01:** high step frequency with sprint bursts + recovery, no perpetual running
- **VT02:** low step frequency and strong momentum, perceptible turn delay
- **VT03:** minimal joint rotation and stopped bending; visible stiff limb clearance
- **VT04:** irregular pauses and corrective movements, not random instantaneous teleport
- **VT05:** slow steps, wading/water orientation, pause to attend sound/surface
- Respect non-graphic option: cutaway / sound and incident log for severe feeding; types recognizable without violence
- Motion speed in real runtime **TBD after motion test**; do not turn these art labels into biological performance metrics
- Include 1.0× and reduced-motion UI support for overview screens

## 7. Production gates

| Gate | Proof required | Current |
|---|---|---|
| S1: silhouette | all 5 distinguishable at 96px greyscale by 3 independent reviewers; no names | Planned, no pass claimed |
| S2: anatomy/material | distinct pose, one hero motif, limited gore, consistent with lore | Planned |
| S3: gameplay camera | top-down/isometric test at expected zoom; no copy-paste motion pattern | Planned |
| S4: combat fairness | tells for fast/heavy/stiff/unstable/water before threat happens | Planned |
| S5: data fidelity | VT IDs and RG/Cxx are not conflated, no new type invented | Specified |
| S6: shipping | source, license, PSD/blend/glTF references, LOD, texture budget, naming/version | Planned |

**Status reminder:** prior generated poster mockups were experiments, *not final locked concept art*; no new 3D characters have been committed in this design-system PR.
