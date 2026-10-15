# LAND OF SMILES — Color, Texture & Material System
## RUIN / BLOOD / BONE — Art Direction Reference v1.1

**Doc:** LOS-COLOR-001 · **Draft** · 2026-10-15  
**Canonical values:** [tokens.json](tokens/land-of-smiles.tokens.json) · [generated CSS](tokens/land-of-smiles.css)  
**Consumer:** [Design System](DESIGN_SYSTEM_v1_TH.md) · [Components](COMPONENT_AND_SCREEN_SPEC_v1_TH.md)  
**Narrative tie-in:** horror through urban crisis, not an assumption that all infected smile or bleed in the same way

## 1. Visual hypothesis

The redesign changes the previous soft blue/cyan identity into **charcoal-black / dried blood / bone-white / rust**, with **storm-teal only as an operational functional secondary**. Blood-like splatters are **distressed graphic texture**, not actual anatomy, and are limited to covers, campaign pages and mastheads.

The user-selected horror direction is an **inspiration**, not a copy of Dead Island logos, distinctive proprietary art, or official asset files. The resulting identity must remain anchored in Bangkok flood architecture, skytrain, rescue staging and people.

## 2. Master palette — hard values (hex)

| Primitive token | Hex | Purpose / material |
|---|---|---|
| \`ruinBlack\` | \`#0B0F14\` | nighttime canvas / wet asphalt |
| \`charcoal\` | \`#1E2328\` | station steel, card surfaces |
| \`deepPanel\` | \`#2D343A\` | raised dark panel |
| \`ashGreen\` | \`#3C4642\` | oxidation, damp concrete accent |
| \`boneWhite\` | \`#E6DED1\` | parchment / light canvas |
| \`paperWhite\` | \`#F5F0E8\` | legible paper UI surface |
| \`concrete\` | \`#C9C5BD\` | muted structural element |
| \`dustGrey\` | \`#A7A7A1\` | weathered material, not small body text |
| \`grimeSand\` | \`#D7C6B0\` | aged raised UI surface |
| \`stormBrown\` | \`#53483F\` | secondary light ink / soil |
| \`stormTeal\` | \`#0F4C5C\` | floodwater/environment grading |
| \`stormBlue\` | \`#155768\` | **functional light-theme operational blue** (deep, not pastel) |
| \`bloodDeep\` | \`#8B1E1E\` | major brand red / light accent |
| \`bloodDried\` | \`#5A1A1A\` | worn smear / dark print stain |
| \`bloodMark\` | \`#C12B2E\` | decorative splash mark |
| \`bloodBright\` | \`#F0786F\` | legible dark-theme brand highlight |
| \`rustRed\` | \`#8F3A30\` | corroded steel / blood-rust hybrid |
| \`rescueAmber\` | \`#E8B76D\` | rescue operation / assistance |

Do not copy inaccurate hex printed by generated mood-board art: exact codes above and tokens JSON are authoritative.

## 3. Dark / Light semantic system

| Token | Dark | Light | Usage |
|---|---|---|---|
| \`color.canvas\` | \`#0B0F14\` | \`#E6DED1\` | primary page |
| \`color.surface\` | \`#1E2328\` | \`#F5F0E8\` | actionable panel |
| \`color.textPrimary\` | \`#F5EEE6\` | \`#20252A\` | ordinary text |
| \`color.textSecondary\` | \`#D4CFC4\` | \`#53483F\` | notes |
| \`color.accent\` | \`#F0786F\` | \`#8B1E1E\` | brand CTA / links |
| \`color.operational\` | \`#8DD3DF\` | \`#155768\` | water/transport utility |
| \`color.rescue\` | \`#E8B76D\` | \`#834411\` | relief action |
| \`color.danger\` | \`#FF9E92\` | \`#9B2430\` | true danger only |
| \`color.bloodSplatter\` | \`#C12B2E\` | \`#5A1A1A\` | decorative paint-like stains |

**Rationale:** A light-themed dossier should feel like a weathered field report, not a friendly hospital web app. Crimson creates tension, but medical statuses stay semantically separate so UI remains safe to interpret.

## 4. Blood-like splash rules and rendering tokens

| Token | Value | Allowed |
|---|---:|---|
| \`graphics.grunge.heroOpacity\` | \`0.32\` | large background of marketing / title hero |
| \`graphics.grunge.promoOpacity\` | \`0.16\` | poster margins / campaign panels |
| \`graphics.grunge.panelAccentOpacity\` | \`0.07\` | non-informational decorative bars only |
| \`graphics.grunge.medicalOpacity\` | \`0\` | clinical panels have **no splatter** |
| \`graphics.grunge.printOpacity\` | \`0\` | print accessibility / low-ink mode |

**Permitted:** blood-red dry-brush streak, tiny edge spots, rusted-red paint, partial distress on title letterforms, water-reflected red signage.

**Not permitted:** splatters over numeric metrics, graphs, input fields, evidence labels, Cxx badges, legal disclosures, maps or action targets; blur implying a Confirmed patient is dangerous; official-looking medical forms visibly smeared with blood as the universal UI design.

**Implementation:** \`.los-brand-hero\` gives restrained CSS radial-gradient paint specks in its background only, behind text. \`.los-grunge-divider\` and \`.los-banner--horror\` are deliberately compositional. There are no required PNG blood textures, copyrighted marks, or unsafe flashing effects.

## 5. Surveillance status palette: semantic isolation

| Internal case class | Official in-game meaning | Dark token | Light token |
|---|---|---|---|
| C00 | Under investigation | \`#D4CFC4\` | \`#63584F\` |
| C10 | Suspected | \`#E8B76D\` | \`#834411\` |
| C20 | Probable | \`#F6A984\` | \`#9F4821\` |
| **C30** | **Confirmed (conditionally; in-world evidence)** | **\`#83D8D0\`** | **\`#185665\`** |
| C40 | Excluded / ruled out | \`#B7C8D1\` | \`#4C5B60\` |

**C40 ≠ Terminal.** An AI-generated visual board used “terminal” previously; that label was wrong.  
**C30 ≠ critical / aggressive.** Strong red marketing does not change disease evidence.

## 6. Infected type colors (illustration labels only)

| VT | Dark | Light | Shape first |
|---|---|---|---|
| VT01 Fever Runner | \`#F0786F\` | \`#A31212\` | thin forward arrow |
| VT02 Overgrown | \`#B5C888\` | \`#556B3A\` | asymmetric heavy wedge |
| VT03 Fibrotic | \`#BDABE4\` | \`#6A4A7A\` | rigid angular vertical |
| VT04 Aberrant | \`#F8B16C\` | \`#AE4B18\` | crooked off-balance S |
| VT05 Drowned Seeker | \`#8DD3DF\` | \`#2F5D69\` | drooping water silhouette |

VT04 light deviates from a lighter \`#B85A1E\` shown in an exploratory board to improve normal-size text contrast on paper surface. These swatches are UI annotation colors; skin/clothing hues need not match them.

## 7. Materials / photography / location

- Wet concrete with broken specular reflections; soot-black elevated rail; oxidation; faded station arrows; flood-grime tide lines
- Rescue tarp and amber emergency tape add humanity, not a cheerful color scheme
- Paper medical-dossier textures belong outside actual editable fields and should not suggest a real WHO endorsement
- Contrast between smiling tourist imagery and devastated infrastructure is atmospheric irony; not an instruction to give every infected a smile
- Bangkok station labels and Thai text must be verified before public export, especially fictional signage

## 8. QA

- [ ] Dark/light token values match JSON and compiled CSS
- [ ] Main body, subdued text, VT labels and Cxx badges meet WCAG 2.2 AA text contrast on their documented surfaces
- [ ] Brand title/distress legible in greyscale
- [ ] Medical information readable with all texture removed
- [ ] No color-only status; all icons have text labels
- [ ] Print style removes splatter; reduced motion has no flashing
- [ ] Infected silhouette is unique at 96px and in actual isometric gameplay

**Approvals:** DEC-005 and DEC-012 remain Open. Concept boards can guide style, but final logo/brand rights and illustration licensing are separate deliverables.
