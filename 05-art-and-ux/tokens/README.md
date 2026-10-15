# Land of Smiles — Design Tokens v1.1
## Ruin × Blood × Bone / DTCG-style source and deterministic CSS

**Single source of truth:** [land-of-smiles.tokens.json](land-of-smiles.tokens.json)  
**CSS artifact:** [land-of-smiles.css](land-of-smiles.css) (generated; never hand edit)  
**Build:** [build-tokens.mjs](build-tokens.mjs)  
**Quality gate:** [validate-tokens.mjs](validate-tokens.mjs)  
**UI:** [../components.css](../components.css) · [../design-system-preview.html](../design-system-preview.html)  
**Art:** [../COLOR_AND_TEXTURE_SYSTEM_v1_TH.md](../COLOR_AND_TEXTURE_SYSTEM_v1_TH.md)

> FANS-26 is a fictional syndrome. \`Cxx\` indicates **in-world evidence status**, not medical WHO codes or combat threat.

## 1. DTCG token architecture

DTCG Format Module 2025.10 style: \`$type\`, \`$value\`, color objects (\`colorSpace:srgb\`, \`components\`, and a non-normative \`hex\` convenience field), alias strings \`{color.primitive.xxx}\`. This design-token specification is a **W3C Community Group Report, not a W3C Recommendation**.

| Registry | Responsibility |
|---|---|
| \`color.primitive\` | actual sRGB swatches: ruinBlack, bloodDeep, boneWhite, stormBlue, etc |
| \`color.theme.dark/light\` | semantic surface, text, \`accent\`, \`brand\`, \`operational\`, \`rescue\`, \`danger\`, \`bloodSplatter\`, focus |
| \`color.surveillance.dark/light\` | C00–C40 **evidence labels**, including C30 teal, C40 excluded |
| \`color.infectedType.dark/light\` | VT01–VT05 **art labels**, not in-world diagnosis |
| \`graphics.grunge\` | hero, promo, panel, medical and print opacity caps (medical=0) |
| \`spacing\`, \`radius\`, \`borderWidth\`, \`typography\`, \`layout\`, \`motion\`, \`opacity\` | foundational UI scales |

**Do not confuse:** \`brand red\` (horror mood) vs \`danger red\` (action warning) vs \`C30 confirmed\` (teal evidence). Do not use \`VT05\` as \`RG05\`. Images are not the authoritative store of literal hex values.

## 2. How to build and verify (Node 20+, no npm install)

\`\`\`bash
node 05-art-and-ux/tokens/build-tokens.mjs
node 05-art-and-ux/tokens/build-tokens.mjs --check
node 05-art-and-ux/tokens/validate-tokens.mjs
\`\`\`

- Build *regenerates* CSS from JSON source. \`--check\` fails if CSS differs.
- Validator checks all aliases/sRGB component values, semantic text/background contrasts, action foreground contrast, VT/Cxx contrasts, five preview types, theme switch and CSS variables.
- Commit both source and generated CSS with any token change; do not edit CSS by hand.
- CI workflow in \`.github/workflows/design-tokens.yml\` should run build --check and validator on PR; if CI is unavailable, supply local verified output and leave approval pending.
- This does not run visual-regression or a real game runtime. Those are separate QA gates.

## 3. Usage in browser

\`\`\`html
<html lang="th" data-los-theme="dark">
<link rel="stylesheet" href="tokens/land-of-smiles.css">
<link rel="stylesheet" href="components.css">
<main class="los-shell">
  <header class="los-brand-hero">
    <h1 class="los-brand-hero__wordmark">LAND OF SMILES</h1>
    <p class="los-brand-hero__subtitle">BANGKOK OUTBREAK</p>
  </header>
  <section class="los-card los-clinical-panel">
    <span class="los-case" data-case="C30">C30 · Confirmed</span>
  </section>
  <article class="los-card los-vt-card" data-infected-type="VT02">
    <span class="los-vt-code">VT02</span><h2>Overgrown</h2>
  </article>
</main>
</html>
\`\`\`

Switch \`data-los-theme\` between \`dark\` and \`light\` at a parent (prefer \`<html>\`); component styles consume \`--los-*\`. Clinical data labels are deliberately texture-free.

### Important semantic variables

- \`--los-color-canvas\`, \`--los-color-surface\`, \`--los-color-text-primary\`, \`--los-color-border\`
- \`--los-color-accent\` = blood-red visual accent / primary CTA (dark: \`#F0786F\`, light: \`#8B1E1E\`)
- \`--los-color-operational\` = accessible water/route teal (dark: \`#8DD3DF\`, light: \`#155768\`)
- \`--los-color-danger\` = destructive/danger status, not a medical code
- \`--los-color-blood-splatter\` & \`--los-grunge-hero-opacity\` = paint-like decoration on brand heroes **only**
- \`--los-case-c30\` = evidence-confirmed teal; **never tie to red**
- \`--los-type-vt01\` ... \`--los-type-vt05\` = categorical type callouts
- \`--los-touch-target\` = \`44px\`; \`--los-duration-fast/normal/slow\`; motion reduces to \`0ms\` on request

## 4. Required contrast & interaction

WCAG AA reference: normal-size text ≥4.5:1; meaningful UI non-text ≥3:1; visible focus and no color-only classification. The validator checks key semantic combinations on documented card surfaces (not arbitrary background imagery), and prints ratios.

No fake official WHO emblem or unapproved studio identity. Don't distribute third-party font binaries. Art/source licensing and trademark signoff remain separate.

## 5. Status and migration

- DS v1.0 teal-first palette was a **draft**. DS v1.1 adopts harsher black/crimson/bone as requested; storm blue is an **operational** accent, not the primary brand accent.
- Existing selectors \`.los-card\`, \`.los-vt-card\`, \`.los-case\` and \`.los-button\` remain usable, but the visual language changes; review actual screens before runtime adoption.
- DEC-005 (logo/horror proportion), DEC-012 (design lock), and relevant FANS-26 lore decisions remain Open. Documentation and CSS files do not equal runtime integration.

**References:** https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/ · https://www.w3.org/TR/WCAG22/
