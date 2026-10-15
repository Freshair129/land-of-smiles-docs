# 05 · Art, Audio & UX

[กลับสารบัญ](../README.md)

หมวดนี้รวมงานที่ผู้เล่นมองเห็น ได้ยิน และใช้โต้ตอบ; เพิ่มการกำกับ visual identity, character classes และ UI tokens ที่แยกจาก Game Design / Narrative

## Design System v1.1 — Ruin × Blood × Bone (Draft)

งานชุดนี้ต่อยอดจากบอร์ด Survival Horror รุ่นแดงเลือด–ดำ–กระดาษเก่า; **สีแดงเป็นแบรนด์ ไม่ใช่ผลวินิจฉัยของ Cxx**

**เอกสารหลัก**
- [Design System v1.1](DESIGN_SYSTEM_v1_TH.md) — visual language, typography, tokens, screen rules และ accessibility
- [Color & Texture v1.1](COLOR_AND_TEXTURE_SYSTEM_v1_TH.md) — master palette hex, dark/light, horror-red splatter rules และ C30 teal semantics
- [Component & Screen Spec](COMPONENT_AND_SCREEN_SPEC_v1_TH.md) — Mission Control, Clinical Dossier, Triage, VT guide, buttons และ state contracts
- [Character Design System](INFECTED_CHARACTER_DESIGN_SYSTEM_v1_TH.md) — VT01–VT05 silhouette, anatomy cues, motion, materials, art acceptance
- [Static design preview](design-system-preview.html) — actual CSS classes; switch dark/light, palette and 5 silhouette examples

**Machine-readable & Frontend**
- [DTCG tokens JSON](tokens/land-of-smiles.tokens.json) → [Generated CSS](tokens/land-of-smiles.css), [Component CSS](components.css)
- [Build script](tokens/build-tokens.mjs) + [Validator](tokens/validate-tokens.mjs) + [Token usage](tokens/README.md)
- Build/check: `node 05-art-and-ux/tokens/build-tokens.mjs --check` and `node 05-art-and-ux/tokens/validate-tokens.mjs`

**สถานะ:** Proposed DS, logo/font licensing/character art ไม่ได้ Final; ไม่ได้ import เข้าเกม S9 runtime และยังต้องผ่าน DEC-005/DEC-012

**ชิ้นงานล่าสุด:** [S9 Pho Nimit — Model study V1](../../art/s9-pho-nimit/README.md) พร้อม GLB, source สร้างโมเดล, ตัวดู 3D และภาพจริง 11 ภาพ มีรุ่น gameplay ที่ปรับช่องราวและพื้นพักเข้า [runtime v0.6](../../src/README.md) แล้ว ระบุสิ่งที่อ้างอิงได้กับค่าประมาณแยกกัน

## ข้อกำหนดที่มีแล้วในเอกสาร

| งาน | เจ้าของข้อกำหนด |
|---|---|
| Logo, สี, typography และ visual motif | [Brand Concept](../01-vision/LAND_OF_SMILES_BRAND_NARRATIVE_CONCEPT_v1_TH.md) ข้อ 3–5 |
| Key art และโครง trailer | Brand Concept ข้อ 6 |
| รายการชิ้นงานแบรนด์และ HUD tokens | Brand Concept ข้อ 11 |
| การจัดข้อมูลบนหน้าจอและ context panel | [GDD](../02-game-design/LAND_OF_SMILES_GDD_v1_TH.md) ข้อ 12 |
| Accessibility, uncertainty และ decision feedback | GDD ข้อ 12 |
| Loading/error states และการควบคุมมือถือ | [Engineering Handoff](../06-engineering/LAND_OF_SMILES_ENGINEERING_HANDOFF_v0.5_to_v0.6_TH.md) ข้อ 3 |

## เอกสารที่ควรเพิ่มเมื่อเริ่มงานด้านนั้น

- **Art brief:** รูปทรง วัสดุ แสง reference ที่ระบุแหล่งที่มา และความสอดคล้องกับแบรนด์
- **UI flow / screen spec:** เป้าหมายผู้เล่น ลำดับการกระทำ ข้อมูลที่จำเป็น และสถานะปกติ/ว่าง/โหลด/ผิดพลาด
- **Audio brief:** เหตุการณ์ที่เรียกเสียง ลำดับความสำคัญ ambience และการสื่อสารเมื่อปิดเสียง
- **Asset list:** ชื่อชิ้นงาน จุดใช้งาน สถานะ ไฟล์ต้นฉบับ/export และแหล่งสิทธิ์

Design System v1 มี token source, CSS components, static preview และ art guidelines สำหรับ review แล้ว แต่ยังไม่ได้ล็อกโลโก้จริง, key art, audio pack หรือผลิต 3D rig/mesh ของ VT; GLB ต้นแบบเดิมยังอยู่ใน [src](../../src/README.md)

ใช้ [Feature Spec](../templates/feature-spec.md) เมื่อต้องอธิบายพฤติกรรม UI และเชื่อมผลประเมินกับ [Playtesting](../08-playtesting/README.md) ทิศทาง logo, tagline และระดับ horror ยังมีรายการเปิดใน [DEC-005](../07-production/open-decisions.md)

