# LAND OF SMILES — Documentation & Knowledge Base

ยินดีต้อนรับสู่คลังเอกสารและฐานข้อมูลกลาง (Single Source of Truth) ของโปรเจกต์ **Land of Smiles**  
พื้นที่นี้ออกแบบมาสำหรับทั้ง **มนุษย์ (Writers/Designers/Developers)** และ **AI Coding Agents (Antigravity / Copilot / Claude)** เพื่อให้เข้าใจบริบท จัดลำดับการโหลด Context ได้อย่างมีประสิทธิภาพ และไม่เกิดอาการ Context Drift หรือละเมิด Story Canon

---

## 🤖 สำหรับ AI Agents: Protocol การอ่านเอกสาร & Context Loading Order

หากคุณเป็น **AI Agent** ที่เข้ามารับหน้าที่ต่อ โปรดปฏิบัติตามลำดับการโหลดบริบท (Context Priority Pipeline) ดังนี้ เพื่อประหยัด Token และรักษาความแม่นยำของ Lore:

```
[Level 1: System Baseline] ──> [Level 2: Domain-Specific] ──> [Level 3: Operational Detail]
  README.md                     01-vision / 03-narrative        04-world / 06-engineering
  CONTRIBUTING.md               02-game-design                  07-production / 08-playtesting
```

### ขั้นตอนการเรียกดู Context (ตามประเภทงาน):

| งานที่ได้รับมอบหมาย | เอกสารที่ต้องอ่านตามลำดับ (Required Reading Order) | ข้อควรระวังพิเศษ |
|---|---|---|
| **เขียนบท/Lore/บทสนทนา (Narrative)** | 1. `03-narrative/LAND_OF_SMILES_STORY_CANON_v1_TH.md`<br>2. `01-vision/LAND_OF_SMILES_BRAND_NARRATIVE_CONCEPT_v1_TH.md`<br>3. `04-world-and-levels/s9-first-shelter.md` | **ต้องรักษา Canon 4 ข้อหลักอย่างเคร่งครัด** (ดูสรุปด้านล่าง) ห้ามเขียนให้ผู้ติดเชื้อตายใน 72 ชม. หรือทำตัวเป็นผีดิบเวทมนตร์ |
| **ออกแบบระบบเกม (Game Design)** | 1. `02-game-design/LAND_OF_SMILES_GDD_v1_TH.md`<br>2. `01-vision/LAND_OF_SMILES_BRAND_NARRATIVE_CONCEPT_v1_TH.md`<br>3. `07-production/dec-001-s9-pho-nimit.md` | ตรวจสอบตัวเลขสมดุลและระบบ Core Loop จาก GDD ห้ามคิดค้นระบบที่ขัดกับสภาพน้ำท่วม 60% |
| **ออกแบบด่าน/ฉาก 3D (World & Levels)** | 1. `04-world-and-levels/s9-first-shelter.md`<br>2. `05-art-and-ux/README.md`<br>3. `06-engineering/LAND_OF_SMILES_ENGINEERING_HANDOFF_v0.5_to_v0.6_TH.md` | อ้างอิงระดับความสูงสถานี BTS โพธิ์นิมิตร (S9) ทางเดินลอยฟ้า และระดับผิวน้ำ |
| **เขียนโค้ด/เทคโนโลยี (Engineering)** | 1. `06-engineering/LAND_OF_SMILES_ENGINEERING_HANDOFF_v0.5_to_v0.6_TH.md`<br>2. `08-playtesting/README.md`<br>3. `07-production/open-decisions.md` | ตรวจสอบสเปก runtime, asset pipeline และ test suite ก่อนปรับโค้ด |

---

## ⚡ สรุปสาระสำคัญ Story Canon (Canon Quick-Reference)

เพื่อป้องกันไม่ให้ Agent ละเมิดกฎของจักรวาล ให้ยึดถือข้อมูลต่อไปนี้เป็นสรุปความจริง:

1. **การแพร่กระจายเชื้อ (Leptospirosis-like Transmission):**  
   เชื้อไวรัสแพร่ผ่าน **น้ำท่วมขังและบาดแผล/รอยถลอกที่ขาหรือเท้า** เหมือนโรคฉี่หนู ไม่ใช่แค่การกัดเพียงอย่างเดียว ผู้ประสบภัยที่เดินลุยน้ำจึงติดเชื้อได้ง่าย
2. **อาการบ่งชี้สำคัญ (Extreme Polydipsia & Aquatic Fixation):**  
   ผู้ติดเชื้อระยะแรกจะมีอาการ **กระหายน้ำอย่างรุนแรง ดื่มน้ำเท่าไหร่ก็ไม่หาย** และมีพฤติกรรมหมกมุ่นพยายามเข้าหาแหล่งน้ำท่วมหรือแม่น้ำเจ้าพระยา
3. **ความอึดและระยะเวลาของโฮสต์ (Not Dying in 72 Hours):**  
   เชื้อ **ไม่ฆ่าโฮสต์ใน 72 ชั่วโมง** เพราะต้องการยืดเวลาแพร่เชื้อ เชื้อปรับเปลี่ยนสรีระให้ร่างกาย **อึด ถึก ทนต่อบาดแผลและแช่น้ำได้นานหลายสัปดาห์** ก่อนจะค่อยๆ สลายตัวจากเนื้อเยื่อเน่าเปื่อย
4. **สภาพแวดล้อม (Dual Catastrophe):**  
   เกิดวิกฤติน้ำท่วมกรุงเทพฯ 60% ทับซ้อนกับการระบาด รัฐบาลยังทำงานได้จากรอบนอก แต่พื้นที่ชั้นในและสถานีสยามสูญเสียการควบคุม เครือข่ายรถไฟฟ้าลอยฟ้า (BTS/ทางด่วน) คือเส้นเลือดหลักในการกู้ภัย

---

## 📁 สารบัญโครงสร้าง Repository (Directory Map)

```text
land-of-smiles-docs/
├── README.md               <-- [คุณอยู่ที่นี่] แผนที่นำทางและคำแนะนำสำหรับ Agent
├── CONTRIBUTING.md          <-- กฎและแนวทางการส่งงาน / Git Workflow สำหรับนักเขียน
│
├── 01-vision/              <-- วิสัยทัศน์ แบรนด์ และ Theme หลัก
│   ├── README.md
│   └── LAND_OF_SMILES_BRAND_NARRATIVE_CONCEPT_v1_TH.md
│
├── 02-game-design/         <-- Game Design Document (GDD) และระบบ Core Loop
│   ├── README.md
│   └── LAND_OF_SMILES_GDD_v1_TH.md
│
├── 03-narrative/           <-- [สำคัญมาก] คัมภีร์ Canon, ไทม์ไลน์ และแฟ้มคดี H-08
│   ├── README.md
│   └── LAND_OF_SMILES_STORY_CANON_v1_TH.md
│
├── 04-world-and-levels/    <-- ข้อมูลฉากจำลอง แผนผังสถานี และภารกิจพื้นที่
│   ├── README.md
│   └── s9-first-shelter.md (ข้อมูลสถานีโพธิ์นิมิตร S9)
│
├── 05-art-and-ux/          <-- ทิศทางศิลป์, UI, เสียงประกอบ และแนวคิดภาพ
│   └── README.md
│
├── 06-engineering/         <-- ข้อตกลงสถาปัตยกรรมทางเทคนิค และ Engineering Handoff
│   ├── README.md
│   └── LAND_OF_SMILES_ENGINEERING_HANDOFF_v0.5_to_v0.6_TH.md
│
├── 07-production/          <-- บันทึกการตัดสินใจ (Architecture Decision Records - ADR)
│   ├── README.md
│   ├── dec-001-s9-pho-nimit.md
│   └── open-decisions.md
│
├── 08-playtesting/         <-- รายงานผลการทดสอบ QA / บันทึกการจำลองสถานการณ์
│   └── README.md (และโฟลเดอร์ภาพ/ผลทดสอบ)
│
└── templates/              <-- แม่แบบมาตรฐานสำหรับเขียนเอกสารใหม่
    ├── README.md
    ├── decision-record.md
    ├── feature-spec.md
    ├── level-brief.md
    └── playtest-report.md
```

---

## 🛠 คำแนะนำสำหรับนักเขียน & Contributor

- หากต้องการสร้างข้อเสนอแนวคิดใหม่หรือบันทึกการตัดสินใจ โปรดคัดลอกไฟล์จาก [templates/](templates/)
- ศึกษาวิธีการแตก Branch และเปิด Pull Request ได้ใน [CONTRIBUTING.md](CONTRIBUTING.md)
