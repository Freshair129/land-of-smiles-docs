# 05 · Art, Audio & UX

[กลับสารบัญ](../README.md)

หมวดนี้รวมงานที่ผู้เล่นมองเห็น ได้ยิน และใช้โต้ตอบ; เพิ่มการกำกับ visual identity, character classes และ UI tokens ที่แยกจาก Game Design / Narrative

## Design System v1.0 (Draft)

- **[LAND OF SMILES — Design System](DESIGN_SYSTEM_v1_TH.md)** — Visual language, palettes, UI components, evidence states, typography, accessibility และ templates
- **[FANS-26 Infected Character Design System](INFECTED_CHARACTER_DESIGN_SYSTEM_v1_TH.md)** — VT01–VT05 silhouette, pose, motion, material, acceptance gates ให้แยกประเภทได้แม้ภาพขาวดำ 96px
- **[DTCG design tokens](tokens/land-of-smiles.tokens.json)** — Primitive + dark/light semantic themes + C00–C40 / VT01–VT05 token groups
- **[CSS tokens](tokens/land-of-smiles.css)** + **[Component CSS](components.css)** — พร้อมนำไป import ในเว็บ (ยังไม่ผูกเข้ากับ runtime)
- **[Static responsive design preview](design-system-preview.html)** — Mission Control, Case Dossier, 5 silhouette cards พร้อมปุ่มสลับธีม
- **[Token validator](tokens/validate-tokens.mjs)** — Run: `node 05-art-and-ux/tokens/validate-tokens.mjs`

**Status:** ทีมมีเอกสาร+code CSS/JSON แล้ว ไม่ได้แปลว่ามี final logo, final artwork, 3D model ใหม่หรือว่ารันในเกมแล้ว; DEC-005/012 ยัง Open


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

