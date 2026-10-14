# ทะเบียนการตัดสินใจ

**อัปเดต:** 2026-10-14  
**สถานะ:** Accepted 1 เรื่อง / Open 8 เรื่อง

[กลับหมวด Production](README.md)

รายการนี้รวบรวมคำตัดสินและจุดที่ควรชี้ให้ชัดก่อนขยายข้อกำหนด DEC-001 ได้รับคำยืนยันจากเจ้าของโปรเจกต์เมื่อ 2026-10-14 ส่วน DEC-002 ถึง DEC-009 ยังเปิดอยู่

| ID | ประเด็นและหลักฐาน | สิ่งที่ต้องสรุป | สถานะ |
|---|---|---|---|
| [DEC-001](dec-001-s9-pho-nimit.md) | เลือก S9 โพธิ์นิมิตรเป็นฉากแรก; ปรับ GDD และนำโมเดล gameplay เข้า runtime v0.6 พร้อมผลทดสอบแล้ว | ขนาดและผังที่ไม่มีหลักฐานยังประมาณ ต้องตรวจเทียบสถานที่จริงเพิ่มเติม | Accepted · 2026-10-14 |
| DEC-002 | GDD ข้อ 9 ระบุ H-08 เป็น flashback tutorial; Brand ข้อ 9 ระบุ S9 เป็น Tutorial Level 01 | ลำดับบทสอนเล่นและบทบาทของ H-08 ในช่วงเปิดเกม | Open |
| DEC-003 | GDD ข้อ 15 เสนอ engine แบบมีเงื่อนไข และข้อ 17 เปิดเรื่องมุมมอง; ต้นแบบใช้ Three.js; Handoff ข้อ 10 เปิดเรื่อง browser-only หรือ Vite/TypeScript | Target platform, มุมมอง และ stack สำหรับระยะพัฒนาถัดไป | Open |
| DEC-004 | Handoff ข้อ 10 เปิดทางเลือก socket-only กับ free placement; runtime v0.6 คง socket 10 จุดและตรวจ collision/clearance ตามโมเดลแล้ว | ยืนยันรูปแบบ placement ระยะต่อไป; implementation ปัจจุบันไม่ใช่คำตัดสินว่าจะใช้ socket-only ตลอดโครงการ | Open |
| DEC-005 | Brand ข้อ 13 ยังรอสรุป tagline, logo และสัดส่วน horror เทียบกับ rescue/survival | ชุดทิศทางแบรนด์ที่เลือกและเงื่อนไขก่อน production lock | Open |
| DEC-006 | Handoff ข้อ 4 ระบุความขัดกันเดิม Y-up/Z-up; runtime v0.6 ใช้โมเดล ทางเดิน จุดวาง และเซฟเป็น Y-up/XZ/เมตรตรงกันและมีผลทดสอบ | รับรองสัญญา coordinates ระยะยาวสำหรับเครื่องมือ/engine ที่จะเลือกต่อไป | Open |

| DEC-007 | [Dual-Agent FANS-26 lore proposal](../03-narrative/FANS-26_DUAL_AGENT_THIRST_LORE_TH.md): เสนอ P-08 ปรสิตซึ่งสัมพันธ์กับไข้/ขาดน้ำ และ V-26 ไวรัสร่วมอาศัยซึ่งสัมพันธ์กับอาการทางสมอง; ขัดกับ Story Canon §5.1 ที่เรียกเชื้อเป็นไวรัสเดี่ยว | ตัดสินใจ 4 เรื่อง: (A) เชื้อคู่หรือไวรัสเดี่ยว (B) ถ่ายทอดเชื้อทั้งคู่ผ่านการกัดหรือไม่ (C) Blood-Seeker เป็น subtype จริงหรืออาการ (D) ความถี่และ rating ของ cannibalism; ก่อนยืนยันห้าม retcon โดยไม่มี review | Open · 2026-10-14 |

| DEC-008 | Regenerative Overdrive — ความสามารถซ่อมแซมเนื้อเยื่อของ V-26 (ข้อเสนอ) ส่งผลต่อการใช้ทรัพยากรและความกระหาย | ตัดสินข้อจำกัดการซ่อมแซม การตายและความจำ, resource debt และต้นทุนการฟื้นฟู; ดู [GD-FANS-003](../02-game-design/FANS-26_REGENERATIVE_INSTABILITY_VARIANTS_SPEC_v1_TH.md) | Open · 2026-10-14 |
| DEC-009 | [Regenerative Instability & Infected Variants GD-FANS-003](../02-game-design/FANS-26_REGENERATIVE_INSTABILITY_VARIANTS_SPEC_v1_TH.md) — เสนอ 8% New Types ต่อ 100 ผู้ติดเชื้อ Stage 3 โดยเป็น subset ของ 70% Hyper และใช้ 21 วันจำลอง | อนุมัติอัตรา/ตัวหาร, เงื่อนไข 20 eligible → 8 variant + 12 failure, 5 ประเภทและอัตราแยก, RNG/telemetry/test ก่อน implementation | Open · 2026-10-14 |

## แหล่งอ้างอิง

- [GDD](../02-game-design/LAND_OF_SMILES_GDD_v1_TH.md) โดยเฉพาะข้อ 9, 14, 15 และ 17
- [Brand Concept](../01-vision/LAND_OF_SMILES_BRAND_NARRATIVE_CONCEPT_v1_TH.md) ข้อ 9 และ 13
- [Engineering Handoff](../06-engineering/LAND_OF_SMILES_ENGINEERING_HANDOFF_v0.5_to_v0.6_TH.md) ข้อ 0, 4 และ 10
- [Prototype source](../../src/index.html) และ [Station manifest](../../src/station-manifest.json)

ประเด็นอื่นยังอ่านจากเจ้าของเอกสารโดยตรง: [GDD ข้อ 17](../02-game-design/LAND_OF_SMILES_GDD_v1_TH.md) สำหรับขอบเขตหลายฐาน การต่อสู้ ความยากและ endgame; [Story Canon ข้อ 10](../03-narrative/LAND_OF_SMILES_STORY_CANON_v1_TH.md) สำหรับปมเรื่อง; Handoff ข้อ 10 สำหรับ reference สถานีและระดับ fidelity

## เมื่อได้ข้อสรุป

สร้างบันทึกจาก [Decision Record](../templates/decision-record.md) ใช้ ID เดิมและชื่อเรื่อง ระบุทางเลือก เหตุผล ผู้ตัดสินใจและวันที่เมื่อมีข้อมูลจริง จากนั้นเชื่อมกลับมาที่รายการนี้และอัปเดตเอกสารที่ได้รับผลกระทบ การเพิ่มเอกสารในโฟลเดอร์ไม่ได้เปลี่ยนสถานะของประเด็นให้เป็น Accepted

