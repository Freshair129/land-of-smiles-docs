# สารบัญเอกสาร LAND OF SMILES

[กลับหน้าโปรเจกต์](../README.md)

จัดโครงสร้างเมื่อ **14 ตุลาคม 2026** และบันทึก [DEC-001 เลือก S9](07-production/dec-001-s9-pho-nimit.md) แล้ว GDD ปรับตามคำตัดสินและเก็บฉบับก่อนแก้ใน archive หน้าสารบัญและ brief ช่วยแยกสิ่งที่มีอยู่ ข้อเสนอ และเรื่องที่ยังไม่สรุป

## หมวดเอกสาร

| หมวด | เก็บอะไร | เอกสารที่มี |
|---|---|---|
| [01 · Vision](01-vision/README.md) | แนวคิดหลัก กลุ่มประสบการณ์ แบรนด์ และทิศทางสร้างสรรค์ | Brand & Narrative Concept v1 |
| [02 · Game Design](02-game-design/README.md) | Core loop ระบบผู้รอดชีวิต ทรัพยากร วิกฤต และสมดุล | GDD v1; ดัชนีหัวข้อระบบ |
| [03 · Narrative](03-narrative/README.md) | Canon ไทม์ไลน์ โลกนิยาย และการเล่าเรื่อง | Story Canon v0.2 / Brand Adaptation v1 |
| [04 · World & Levels](04-world-and-levels/README.md) | ฉาก เส้นทาง ภารกิจพื้นที่ และ tutorial | Brief S9 ที่อ้างอิงเอกสารและ manifest |
| [05 · Art & UX](05-art-and-ux/README.md) | Art direction, audio, UI, feedback และ accessibility | โมเดล S9 V1, ตัวดู 3D และภาพอ้างอิง 11 ภาพ; ดัชนีงานออกแบบ |
| [06 · Engineering](06-engineering/README.md) | Handoff โครงสร้างซอร์ส สัญญาข้อมูล และข้อจำกัด | Runtime v0.6; asset pipeline; Handoff v0.5 → v0.6 |
| [07 · Production](07-production/README.md) | ขอบเขตงาน ลำดับพัฒนา และการตัดสินใจ | DEC-001 Accepted; DEC-002 ถึง DEC-006 Open |
| [08 · Playtesting](08-playtesting/README.md) | สมมติฐานประสบการณ์ แผน QA และหลักฐานผล | ผลตรวจโมเดลและ integration ในเกม v0.6 |
| [Templates](templates/README.md) | แม่แบบสำหรับเริ่มเอกสารใหม่ | Feature, level, decision และ playtest |
| [Archive](archive/README.md) | สแนปช็อตและเอกสารที่ใช้ย้อนประวัติ | README เดิมและ GDD ก่อน DEC-001 |

## เอกสารหลักและขอบเขตการอ้างอิง

| ต้องการทราบ | อ้างอิงหลัก | วิธีตีความ |
|---|---|---|
| ชื่อเกม แบรนด์ และภาพลักษณ์ | [Brand Concept](01-vision/LAND_OF_SMILES_BRAND_NARRATIVE_CONCEPT_v1_TH.md) | แนวทางที่เสนอและข้อกำหนดการปรับแบรนด์; ไม่เท่ากับ production lock |
| เจตนาการออกแบบระบบ | [GDD](02-game-design/LAND_OF_SMILES_GDD_v1_TH.md) | ร่างออกแบบและตัวเลขทดลอง; ไม่ใช่รายการ feature ที่พัฒนาเสร็จ |
| ข้อเท็จจริงในโลกนิยาย | [Story Canon](03-narrative/LAND_OF_SMILES_STORY_CANON_v1_TH.md) | ใช้ตรวจความต่อเนื่องของเรื่องและแยกสมมติฐานในเรื่องออกจาก Canon |
| ข้อจำกัดและเป้าหมาย v0.6 | [Engineering Handoff](06-engineering/LAND_OF_SMILES_ENGINEERING_HANDOFF_v0.5_to_v0.6_TH.md) | แผนงานและเกณฑ์ผ่าน; ไม่ใช่หลักฐานว่าทำครบแล้ว |
| Implementation และข้อมูลต้นแบบที่มี | [ซอร์ส](../src/index.html), [manifest](../src/station-manifest.json), [คู่มือต้นแบบ](../src/README.md) | การมีโค้ดยังไม่ยืนยันพฤติกรรมขณะรัน; ต้องประกอบกับผลทดสอบจริง |

ไม่มีเอกสารฉบับเดียวที่ใช้ตัดสินทุกด้าน หากแหล่งข้อมูลขัดกัน ให้บันทึกใน [ประเด็นรอตัดสินใจ](07-production/open-decisions.md) แล้วเชื่อมคำตอบกลับไปยังเอกสารต้นทาง หน้าสรุปในหมวดต่าง ๆ ไม่ได้เปลี่ยนสถานะการอนุมัติของเอกสารหลัก

## ลำดับอ่านสำหรับผู้ร่วมงานใหม่

1. Brand Concept: เข้าใจเกมและประสบการณ์ที่ต้องการ
2. GDD: เข้าใจ core loop และความสัมพันธ์ของระบบ
3. Story Canon: ตรวจข้อเท็จจริงของโลกนิยาย
4. [Brief S9](04-world-and-levels/s9-first-shelter.md): เห็นขอบเขตฉากต้นแบบและข้อขัดแย้งที่เกี่ยวข้อง
5. Engineering Handoff และ Production: เห็นงานต่อเนื่อง เกณฑ์ผ่าน และคำถามที่ยังเปิดอยู่

## วิธีเพิ่มและดูแลเอกสาร

- เลือกหมวดตามเรื่องหลักของเอกสาร และลิงก์ข้ามหมวดเมื่อเกี่ยวข้องหลายด้าน เช่น กฎ inventory อยู่ Game Design; วิธีทำ transaction อยู่ Engineering
- ใช้เอกสารหลักเป็นเจ้าของข้อกำหนด หน้าดัชนีระบุชื่อหัวข้อและลิงก์กลับไปหาเจ้าของ แทนการคัดลอกกฎเดียวกันไปแก้หลายแห่ง
- ใช้ชื่อใหม่เป็นภาษาอังกฤษแบบ `lowercase-kebab-case.md` และเขียนเนื้อหาไทยได้ เอกสารนำเข้า 4 ฉบับคงชื่อเดิมเพื่อรักษาการอ้างอิง
- เริ่มจาก [แม่แบบ](templates/README.md) แล้วระบุสถานะ ผู้รับผิดชอบถ้ามี วันที่อัปเดต แหล่งอ้างอิง และคำถามเปิด ไม่กรอกผู้อนุมัติหรือผลทดสอบโดยไม่มีข้อมูล
- สถานะเอกสารแนะนำ: `Draft` → `In review` → `Accepted`; ใช้ `Superseded` เมื่อมีฉบับใหม่แทนที่ แยกสถานะนี้จาก `Not run / Pass / Fail / Blocked` ของผลทดสอบ
- เมื่อเพิ่มเอกสาร ให้เพิ่มลิงก์ใน README ของหมวดนั้น; เมื่อแยกระบบออกจาก GDD ให้ระบุชัดว่าไฟล์ใดเป็นเจ้าของรายละเอียดชุดใหม่
- เก็บ snapshot ที่ถูกแทนที่ใน `archive/` พร้อมลิงก์ไปฉบับปัจจุบัน เก็บไฟล์ประกอบ design ไว้ใกล้เอกสารที่ใช้อ้างอิง ส่วน asset ที่ runtime โหลดต้องอยู่ตาม path ของซอร์ส
- เมื่อหมวดมีเอกสารจำนวนมาก ค่อยเพิ่มโฟลเดอร์ย่อย เช่น `systems/`, `characters/`, `screens/` หรือ `reports/` ตามเนื้อหาที่มีจริง

## ตำแหน่งใหม่ของไฟล์เดิม

| ชื่อไฟล์เดิมที่ root | ตำแหน่งปัจจุบัน |
|---|---|
| `LAND_OF_SMILES_BRAND_NARRATIVE_CONCEPT_v1_TH.md` | [01-vision](01-vision/LAND_OF_SMILES_BRAND_NARRATIVE_CONCEPT_v1_TH.md) |
| `LAND_OF_SMILES_GDD_v1_TH.md` | [02-game-design](02-game-design/LAND_OF_SMILES_GDD_v1_TH.md) |
| `LAND_OF_SMILES_STORY_CANON_v1_TH.md` | [03-narrative](03-narrative/LAND_OF_SMILES_STORY_CANON_v1_TH.md) |
| `LAND_OF_SMILES_ENGINEERING_HANDOFF_v0.5_to_v0.6_TH.md` | [06-engineering](06-engineering/LAND_OF_SMILES_ENGINEERING_HANDOFF_v0.5_to_v0.6_TH.md) |
| `README.md` ของ Documentation Pack v1 | [Archive](archive/documentation-pack-v1/README.md) |

ชื่อ ZIP และชื่อเอกสารเก่าที่ปรากฏเป็นข้อความในต้นฉบับเป็นบริบทการส่งมอบเดิม ไม่ได้แปลว่าไฟล์เหล่านั้นมีอยู่ใน workspace นี้ ดูตำแหน่งที่ใช้งานจริงจากตารางด้านบนและ [ดัชนี Engineering](06-engineering/README.md)

