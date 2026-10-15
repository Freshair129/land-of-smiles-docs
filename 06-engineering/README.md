# 06 · Engineering

ล่าสุด v0.6.5: [รถไฟ ประตู ผู้โดยสารและเสียง — ทดสอบ 41/41](../08-playtesting/2026-10-14-s9-trains.md)

v0.6.4: [คนเดิน รถวิ่ง ใบไม้ไหว — การตรวจพื้นที่เล่นและผลทดสอบ 33/33](../08-playtesting/2026-10-14-s9-life.md)

[กลับสารบัญ](../README.md)

เอกสารหลัก: [Engineering Handoff v0.5 → v0.6](LAND_OF_SMILES_ENGINEERING_HANDOFF_v0.5_to_v0.6_TH.md)

**สถานะปัจจุบัน:** [Runtime v0.6](../../src/README.md) ใช้โมเดล S9 ใหม่แล้ว พร้อม [ผลตรวจ integration](../08-playtesting/2026-10-14-s9-integration.md) Handoff ยังเก็บข้อเท็จจริง/เป้าหมาย ณ v0.5 เพื่อย้อนประวัติ

**อัปเดต v0.6.3:** [Realism pass](../../art/s9-pho-nimit/realism_model.py) เพิ่มใบโปร่ง ผิววัสดุและรายละเอียดอาคารต่อจาก environment pass พร้อม [daylight](../../src/game/daylight.mjs) และการพักเรนเดอร์เมื่อฉากนิ่ง คงผังและเซฟเดิม ดู [ผลทดสอบล่าสุด 28/28](../08-playtesting/2026-10-14-s9-realism.md) Runtime ใช้ `s9-pho-nimit-gameplay-v063.glb` พร้อม texture/tangent ฝังในไฟล์

**FANS-26 proposed data contract:** [Coding & Case Data Dictionary](FANS-26_CODING_AND_CASE_DATA_DICTIONARY_v1_TH.md) — LOS-FANS26 composite codes, immutable patient ID, independent C/S/SV/VT/RG and audit/version handling (not implemented)

ใช้เก็บ implementation notes, architecture, data contracts, asset pipeline และวิธีรับช่วงพัฒนา กติกาและเป้าหมายผู้เล่นอ้างอิง [Game Design](../02-game-design/README.md)

## ตำแหน่งไฟล์ปัจจุบัน

| ไฟล์ | บทบาท |
|---|---|
| [src/README.md](../../src/README.md) | วิธีรันและข้อจำกัดของต้นแบบ |
| [src/index.html](../../src/index.html) | หน้าตัวเล่น v0.6; logic แยกใน game modules |
| [src/station-manifest.json](../../src/station-manifest.json) | ข้อมูลสถานีและ provenance ของ geometry |
| [โมเดล runtime](../../src/assets/s9-pho-nimit-gameplay-v061.glb) | โมเดล S9 รุ่นรายละเอียดที่ loader อ่านจาก manifest; Y-up |
| [Simulation](../../src/game/simulation.mjs) / [Navigation](../../src/game/navigation.mjs) | วงจรเสบียง placement pathfinding เวลา และ save |
| [Renderer](../../src/game/render.mjs) / [App](../../src/game/app.mjs) | WebGL, semantic floors, input และ UI |
| [Build asset](../../tools/build_s9_runtime.py) / [Tests](../../tests/s9-integration.test.mjs) | ส่งออก geometry/manifest พร้อมกัน และตรวจ integration |

Handoff ข้อ 1 อธิบายโครงสร้าง **ภายใน ZIP เดิม** และคำสั่งแตกไฟล์ ชื่อ ZIP นั้นไม่พบใน workspace นี้ เมื่อต่อจากโครงสร้างปัจจุบัน ให้ใช้ path ในตารางและ [คำสั่งเปิดต้นแบบจาก root](../../README.md)

## แผนที่หัวข้อ Handoff

| ต้องการอ่าน | ส่วน |
|---|---|
| ขอบเขต v0.6 และข้อเท็จจริงที่พบใน v0.5 | 0–2 |
| ปัญหาเดิมและ technical debt | 3 |
| Coordinates, placement, navigation, inventory, clock และ save | 4 |
| ลำดับงาน PR-01 ถึง PR-08 และ dependency | 5 |
| Acceptance tests | 6 |
| ขอบเขตที่ไม่รวมและ Definition of Done | 7–8 |
| คำถามทางเทคนิคที่ยังเปิด | 10 |

รอบจัดหมวดเอกสารเดิมไม่ได้แก้ runtime ต่อมาเจ้าของโปรเจกต์สั่งนำโมเดลเข้าเกมและทดสอบ จึงปรับเป็น v0.6 ตาม [Changelog](../../src/CHANGELOG.md) ชื่อ PR-01 ถึง PR-08 ใน Handoff เป็นรายการแผนเดิม ไม่ได้หมายความว่ามี PR ถูกสร้างแล้ว

ดู [Production](../07-production/README.md) สำหรับการแยกเวอร์ชันแผนงาน และ [Playtesting & QA](../08-playtesting/README.md) สำหรับบันทึกหลักฐาน

