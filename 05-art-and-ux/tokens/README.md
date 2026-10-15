# Land of Smiles — Design Tokens

**Source of truth:** [land-of-smiles.tokens.json](land-of-smiles.tokens.json)  
**Browser output:** [land-of-smiles.css](land-of-smiles.css)  
**Reusable components:** [../components.css](../components.css)  
**Preview:** [../design-system-preview.html](../design-system-preview.html)  
**Validation:** `node 05-art-and-ux/tokens/validate-tokens.mjs`

## Version / format

Tokens use the DTCG Format Module 2025.10 concepts (`$value`, `$type`, aliases, sRGB object colors) for interoperability. The 2025.10 Design Tokens report is published by a W3C Community Group, **not a W3C Recommendation**. Source: https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/

### Architecture

- `color.primitive` — base colors with explicit SRGB components and hex metadata.
- `color.theme.dark/light` — semantic roles with aliases into primitive.
- `color.surveillance.dark/light` — C00–C40 **case-evidence** roles; **never use as severity/violence classification**.
- `color.infectedType.dark/light` — VT01–VT05 **game-art/type annotation** only.
- `spacing, radius, borderWidth, typography, motion, opacity, layout` — reusable UI scales.

### Import (vanilla HTML)

```html
<link rel="stylesheet" href="./tokens/land-of-smiles.css">
<link rel="stylesheet" href="./components.css">
<body data-los-theme="dark">
  <section class="los-card los-vt-card" data-infected-type="VT02">
    <span class="los-vt-code">VT02</span>
    <h3>Overgrown</h3>
    <p>Asymmetric heavy phenotype — not proof of clinical confirmation.</p>
  </section>
</body>
```

To switch themes set `data-los-theme="light"` on a wrapping ancestor, e.g. `<html data-los-theme="light">`. Ensure `data-infected-type` is present on the type-specific card. CSS custom properties are prefixed `--los-` and should not be renamed by screen teams without migration.

## Data vs visual semantics

- `LOS-FANS26-C20-S03-SV02-VT02-RG04` is mutable DISPLAY CODE in the story.
- Clinical axes C/S/SV are independent of graphical type `VT` and regeneration `RG`.
- Type accent isn't medical diagnosis, certainty, or danger.
- Never make color the only cue; include label and stable code.
- New Type 8% is 21-day Stage-3 cohort *cumulative incidence* in gameplay specification, not a UI progress bar that always shows 8 active enemies.

## Verification checklist

- Run the zero-dependency validator after editing `.tokens.json` or compiled CSS.
- Check 4.5:1 normal text, 3:1 meaningful non-text and focus indicators on actual backgrounds for every theme.
- Verify labels, Thai fallback typography, responsiveness, keyboard focus and reduced motion.
- Do not bundle copyrighted font binaries or external icon fonts in this repo.
- Keep SVG/detail asset provenance and license before publishing actual branded artwork.
- Review both source JSON and CSS changes in one PR. Generated CSS is currently maintained as an explicit export; not automatically compiled by CI.

**Status:** Palette/logo/art are v1 draft proposals pending DEC-005/DEC-012. This token package does not integrate into existing S9 game runtime.
