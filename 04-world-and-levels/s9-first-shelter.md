# S9 Pho Nimit — First Shelter

**สถานะ:** Draft — เลือกสถานี S9 แล้วตาม DEC-001; รายละเอียด gameplay ยังออกแบบต่อ  
**อัปเดต:** 2026-10-14  
**Campaign:** Bangkok Outbreak  
**ผู้รับผิดชอบ:** ยังไม่ระบุ

[กลับหมวด World & Levels](README.md)

## บทบาทของฉาก

[Brand Concept ข้อ 9](../01-vision/LAND_OF_SMILES_BRAND_NARRATIVE_CONCEPT_v1_TH.md) วาง S9 เป็น Tutorial Level 01 และ [Engineering Handoff ข้อ 0](../06-engineering/LAND_OF_SMILES_ENGINEERING_HANDOFF_v0.5_to_v0.6_TH.md) ตั้งเป้าให้สถานีเดียวเป็น vertical slice ที่เล่นและทดสอบวงจรหลักได้

เจ้าของโปรเจกต์ยืนยัน **S9 โพธิ์นิมิตร** เมื่อ 2026-10-14 ตาม [DEC-001](../07-production/dec-001-s9-pho-nimit.md) และให้ใช้ภาพสถานที่จริงสร้างโมเดล มี [โมเดลศึกษา V1 และภาพอ้างอิง 11 ภาพ](../../art/s9-pho-nimit/README.md) และนำรุ่น gameplay เข้า [runtime v0.6](../../src/README.md) แล้ว พร้อม [ผลตรวจ](../08-playtesting/2026-10-14-s9-integration.md) ลำดับบทสอนเล่นกับ H-08 ยังไม่สรุป

## เป้าหมายสำหรับ v0.6 ตาม Handoff

- โหลดสถานี WebGL และแสดง UI ได้
- เลือกชั้นและติดตั้งอุปกรณ์บนพื้นที่ที่อนุญาต พร้อมตรวจสิ่งกีดขวางและหักต้นทุนถูกต้อง
- ให้ NPC หาเส้นทางระหว่างคลังกับจุดแจก และจัดการกรณีไม่มีเส้นทาง
- ขนส่งของโดยหักสต็อกจากต้นทางและเพิ่มปลายทางอย่างสมดุล
- บันทึกและโหลดสถานะกลับได้ พร้อมหลักฐาน browser QA

รายการนี้เป็น **เป้าหมาย** ตรวจข้อจำกัดปัจจุบันจาก Handoff ข้อ 2–3 และใช้ข้อ 6 เป็นเกณฑ์ทดสอบ

## ข้อมูลพื้นที่ที่มีในต้นแบบ

| ข้อมูล | แหล่งอ้างอิงและขอบเขต |
|---|---|
| ชั้น `ground`, `concourse`, `platform` | [Manifest](../../src/station-manifest.json); `all` ใน UI เป็นตัวกรองมุมมอง |
| ทางออก `E1`–`E4` | Manifest ผูกกับบันไดในโมเดลสำหรับ gameplay; หมายเลขและตำแหน่งจริงยัง `verified: false` |
| คลังถาวร + `food`, `water`, `clinic`, `generator`, `barricade` | [Simulation](../../src/game/simulation.mjs); วางผ่าน P1–P10 โดยตรวจพื้นที่ก่อนหักอะไหล่ |
| โมเดลสถานีที่ loader ใช้ | [s9-pho-nimit-gameplay-v06.glb](../../src/assets/s9-pho-nimit-gameplay-v06.glb) |
| ความน่าเชื่อถือของ geometry | `photo_referenced_visual_study_not_surveyed` ตาม Manifest |

โมเดลอ้างอิงภาพจริงและทางเดินผูกกับ geometry แล้ว แต่ตำแหน่งทางออก อาคาร และมิติสัมบูรณ์ยังไม่ยืนยันจากข้อมูลสำรวจ

## ขอบเขตที่ต้องตรวจให้ตรงกัน

- GDD ข้อ 9 และ 14 ปรับสถานีเริ่มต้นเป็น S9 แล้วตาม [DEC-001](../07-production/dec-001-s9-pho-nimit.md); ระบบและตัวเลขใน baseline ยังเป็นข้อเสนอ
- GDD ข้อ 9 ยังมี H-08 เป็น flashback tutorial ขณะที่ Brand Concept ระบุ S9 เป็น tutorial แรก ดู [DEC-002](../07-production/open-decisions.md)
- รูปแบบ socket-only หรือ free placement ยังเป็นประเด็นเปิดใน Handoff ข้อ 10 ดู [DEC-004](../07-production/open-decisions.md)

Brief นี้ยังไม่ได้กำหนดลำดับบทเรียน เวลาเล่น หรือเกณฑ์ชนะและแพ้ชุดใหม่ ให้ลงรายละเอียดด้วย [Level Brief](../templates/level-brief.md) หลังจัดการประเด็นที่เกี่ยวข้อง ขอบเขตการพัฒนา v0.6 อ้างอิง Handoff ข้อ 7

