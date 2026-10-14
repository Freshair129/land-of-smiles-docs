# 02 · Game Design

[กลับสารบัญ](../README.md)

เอกสารหลัก: [Game Design Document v1](LAND_OF_SMILES_GDD_v1_TH.md)

**Feature spec ที่รอ review:** [GD-FANS-001 — Dual-Agent Thirst & Behavioral Crisis](FANS-26_DUAL_AGENT_BEHAVIOR_SPEC_TH.md) — วงจรกระหายจริง/สมองเสื่อม/การลงน้ำ/การกัด/การคัดกรอง และ acceptance criteria ที่ใช้กับ S9

**Feature spec ใหม่ (Draft):** [GD-FANS-003 — Regenerative Instability & Infected Variants](FANS-26_REGENERATIVE_INSTABILITY_VARIANTS_SPEC_v1_TH.md) — เกณฑ์เกิด New Type, อัตราต่อ 100 ผู้ติดเชื้อ Stage 3, funnel 20→8+12, สเปก VT-01..05, test/telemetry; รอ DEC-008/DEC-009

**Feature spec (Draft):** [GD-FANS-004 — Regeneration Speed Model](FANS-26_CELL_TISSUE_FUNCTION_REGENERATION_SPEED_MODEL_v1_TH.md) — แยก CPM/TRR/FIR, เพดาน 180×, tier RG-I..V, resource debt และ functional recovery gate; รอ DEC-010

ใช้เก็บกติกา ประสบการณ์ผู้เล่น ระบบจำลอง การพึ่งพากันของระบบ และการทดลองสมดุล GDD เป็นเอกสารแม่; feature spec ที่เพิ่มภายหลังควรลิงก์หัวข้อที่เกี่ยวข้องและระบุส่วนที่ขยายหรือแทนที่

## แผนที่หัวข้อใน GDD

| กลุ่มงาน | หัวข้อ |
|---|---|
| ขอบเขต สมมติฐาน และ design pillars | 0 |
| Core fantasy และ core loop | 1 |
| แผนที่เมือง แผนที่ฐาน และข้อมูลที่ผู้เล่นรู้ | 2 |
| ผู้รอดชีวิต ความต้องการ งาน และความสัมพันธ์ | 3 |
| การก่อสร้าง ทรัพยากร และ utility dependencies | 4 |
| น้ำท่วม การติดเชื้อ และภัยคุกคามในระบบเกม | 5 |
| การขนส่ง เครือข่ายสถานี และการอพยพ | 6 |
| การฟื้นเมือง กลุ่มอำนาจ และความไว้วางใจ | 7–8 |
| โครงสร้างแคมเปญ event engine และตัวอย่างการเล่น | 9–11 |
| UI/UX และการเข้าถึง | 12 |
| สถาปัตยกรรม simulation ที่เสนอ | 13 |
| Vertical slice, roadmap, KPI และลำดับ feature | 14–18 |

## วิธีขยายระบบ

ใช้ [Feature Spec](../templates/feature-spec.md) สำหรับระบบที่ต้องลงรายละเอียด โดยระบุเป้าหมายผู้เล่น input/output, state, กฎ, edge cases, ค่าทดลอง และเกณฑ์ที่ตรวจได้ ก่อนเพิ่มตาราง balance ให้ระบุหน่วยและสมมติฐานให้ครบ

ค่าตัวเลขและ roadmap ใน GDD ยังเป็น **proposal** ข้อความ baseline บางส่วนยังระบุพญาไทและ H-08 ต่างจากแนวทาง S9 ดู [DEC-001 และ DEC-002](../07-production/open-decisions.md) ก่อนอ้างเป็นขอบเขตฉากแรก

อ่านต่อ: [Brief S9](../04-world-and-levels/s9-first-shelter.md), [สัญญาข้อมูลและ implementation](../06-engineering/README.md), [Playtesting](../08-playtesting/README.md)

