# 08 · Playtesting & QA

ล่าสุด v0.6.5: [รถไฟ ประตู ผู้โดยสารและเสียง — ทดสอบ 41/41](2026-10-14-s9-trains.md)

v0.6.4: [คนเดิน รถวิ่ง ใบไม้ไหว — การตรวจพื้นที่เล่นและผลทดสอบ 33/33](2026-10-14-s9-life.md)

[กลับสารบัญ](../README.md)

**ล่าสุด:** [S9 v0.6.3 — แสง วัสดุ อาคารและต้นไม้](2026-10-14-s9-realism.md) ผ่าน 28 automated tests พร้อมภาพจาก runtime และหลักฐานเซฟ/ขนส่ง 11 เที่ยวรอบใหม่; [รายงาน v0.6.2](2026-10-14-s9-environment.md) เก็บผลรอบก่อน

ใช้เก็บแผนการทดลอง รายงานการเล่น ปัญหาที่ทำซ้ำได้ และหลักฐาน QA มี [ผลตรวจโมเดลศึกษา](2026-10-14-s9-model-review.md) และ [ผลนำ S9 เข้าเกม v0.6](2026-10-14-s9-integration.md) แล้ว การตรวจรอบล่าสุดครอบคลุมวางของ ขนส่ง เวลา และ save/load ของต้นแบบ ยังไม่ใช่ playtest ของ campaign เต็ม

## เลือกการทดสอบให้ตรงคำถาม

| ประเภท | คำถาม | แหล่งเกณฑ์ |
|---|---|---|
| Design playtest | ผู้เล่นเข้าใจเป้าหมาย มีทางเลือกและเข้าใจผลของการตัดสินใจหรือไม่ | [GDD](../02-game-design/LAND_OF_SMILES_GDD_v1_TH.md) ข้อ 14 และ 16 |
| Functional QA | วางของ ขนส่ง เส้นทาง เวลา และ save/load ทำงานตามกฎหรือไม่ | [Engineering Handoff](../06-engineering/LAND_OF_SMILES_ENGINEERING_HANDOFF_v0.5_to_v0.6_TH.md) ข้อ 4 และ 6 |
| Browser / input QA | GLB แสดงผล หน้าจอและการควบคุมใช้งานได้บน environment ที่กำหนดหรือไม่ | Handoff ข้อ 5–6 และ [คู่มือต้นแบบ](../../src/README.md) |
| Content / UX review | เรื่อง ภาพ และ feedback สอดคล้องกับข้อกำหนดหรือไม่ | [Story Canon](../03-narrative/LAND_OF_SMILES_STORY_CANON_v1_TH.md) ข้อ 11, [Brand Concept](../01-vision/LAND_OF_SMILES_BRAND_NARRATIVE_CONCEPT_v1_TH.md) ข้อ 10–11 และ GDD ข้อ 12 |

## วิธีบันทึกผล

1. คัดลอก [Playtest Report](../templates/playtest-report.md) มาในหมวดนี้ และตั้งชื่อ `YYYY-MM-DD-short-topic.md`
2. ระบุ build หรือชุดไฟล์ที่ทดสอบ วันเวลา environment และขอบเขตการทดลอง
3. เขียน expected result ก่อนทดลอง แล้วบันทึก actual result และหลักฐานเมื่อรันจริง
4. ใช้ `Not run`, `Pass`, `Fail` หรือ `Blocked` ตามสิ่งที่เกิดขึ้น; แยกข้อสังเกตจากการตีความ
5. ระบุสิ่งที่ยังไม่ทดสอบ ข้อจำกัด และงานติดตาม ลิงก์กลับไปยัง feature/level/decision ที่เกี่ยวข้อง

หากมีภาพ วิดีโอ หรือ log ให้เก็บไว้ข้างรายงานในโฟลเดอร์ชื่อเดียวกัน แล้วใช้ relative link ไปยังไฟล์จริง การผ่าน QA เชิงระบบไม่เท่ากับพิสูจน์ความสนุก และการตรวจลิงก์เอกสารไม่ใช่การตรวจ runtime

