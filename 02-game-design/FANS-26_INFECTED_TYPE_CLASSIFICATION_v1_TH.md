# FANS-26 — Infected Type Classification
## Character taxonomy, symptom stages and game enemy types (WHO-inspired reporting separation)

**Document ID:** LOS-TYPE-FANS26-001  
**Version:** v1.0 TH · 2026-10-14  
**Status:** DRAFT, no WHO endorsement, not an ICD-11 classification  
**References:** [Clinical Definition](../03-narrative/FANS-26_CLINICAL_CASE_DEFINITION_v1_TH.md) · [GD-FANS-003 Variants](FANS-26_REGENERATIVE_INSTABILITY_VARIANTS_SPEC_v1_TH.md) · [GD-FANS-004 Regeneration](FANS-26_CELL_TISSUE_FUNCTION_REGENERATION_SPEED_MODEL_v1_TH.md)

## 1. Taxonomic hierarchy / หลักการจัดชั้น

- `disease`: FANS-26 คือกลุ่มอาการสมมติ
- `case_status`: C00–C40 = ความเชื่อมั่นจากหลักฐาน ไม่ใช่ระดับความรุนแรง
- `clinical_stage`: S01–S04 = ลำดับการดำเนินโรค
- `clinical_severity`: SV00–SV03 = ระดับความรุนแรงที่ผู้ป่วยต้องได้รับการดูแล
- `phenotype`: VT00–VT05 = รูปร่าง/พฤติกรรม Infected สำหรับเกม **ไม่ใช่ WHO medical classification**
- `regeneration_tier`: RG01–RG05 = ระดับการฟื้นฟูและต้นทุนทรัพยากร (แยกจาก VT)
- `behavior_overlay`: BH-* = พฤติกรรมชั่วคราวซ้อนกับ phenotype ได้

**In-universe fact vs author knowledge:** ผู้เล่นหรือฝ่ายเกมอาจรู้ phenotype แต่แพทย์ในโลกเกมอาจยังแยกโรคไม่ได้ ต้องไม่ให้ VT02 เปลี่ยนผลสงสัย C10 เป็นยืนยัน C30 โดยอัตโนมัติ

## 2. Baseline — WHO-style denominator discipline

ในผู้ติดเชื้อที่ **เข้าสู่ Stage 3 จำนวน 100 คน** ติดตาม **21 วันเกมหลังเข้าสู่ Stage 3** ตามแบบจำลอง GD-FANS-003 (Standard):

| Mutually exclusive outcome | คนต่อ 100 | % |
|---|---:|---:|
| Hyper-agitated ทั่วไป ไม่มี New Type | 50 | 50% |
| Hyper-agitated ฟื้นฟูผิดรูป/ล้มเหลว แต่ไม่สำเร็จเป็น New Type | 12 | 12% |
| Hyper-agitated ที่เกิด New Type | **8** | **8%** |
| Paralytic / Catatonic | 30 | 30% |
| **TOTAL** | **100** | **100%** |

Baseline Canon **Hyper 70% / Catatonic 30%** ไม่เปลี่ยน: 50+12+8 = 70 คนในกลุ่ม hyper; ทั้ง 8 New Types เป็น subset ไม่บวกเพิ่ม. อัตรา 8% คือ **cumulative incidence / การเคยเกิดขึ้นใน cohort**, ไม่ใช่ตัวที่ยังมีชีวิตอยู่บนแผนที่ทุกเวลา หรือผู้ติดเชื้อใหม่ Stage 1 จำนวน 100 คน

## 3. Master phenotype registry

| Code | Type | Standard cumulative expectation per 100 Stage 3 | % within 8 New Types | Visual silhouette | Movement / AI cue | Weakness |
|---|---|---:|---:|---|---|---|
| VT00 | Ordinary / Unclassified | ไม่ใช่สัดส่วน New Type เพิ่ม | — | สัดส่วนมนุษย์หลากหลาย | พฤติกรรมตาม stage/overlay | ยังเป็นมนุษย์ |
| VT01 | Fever Runner | 2 = 2% | 25% | ผอมพุ่งหน้า ขายาว ตัวแคบ | เร่งวิ่งสั้น ๆ หอบและหยุดเป็นพัก | ขาดน้ำ/หมดแรง/ความร้อน |
| VT02 | Overgrown | 2 = 2% | 25% | ไหล่-แขนข้างหนึ่งใหญ่ โครงสามเหลี่ยมหนัก | กดดันพื้นที่ใกล้ ผลักแรง แต่วิ่ง/เลี้ยวช้า | ทรงตัวและทรัพยากร |
| VT03 | Fibrotic | 2 = 2% | 25% | โครงแข็งเป็นเหลี่ยม พังผืดเป็นแผ่น | ข้อฝืด เดินแข็งและทนการปะทะบางแบบ | ความคล่องตัวต่ำ |
| VT04 | Aberrant | 1 = 1% | 12.5% | โครงคด งอกเนื้อผิดสมมาตร | จังหวะเคลื่อนไหวไม่สม่ำเสมอ | เสียสมดุล/อวัยวะทรุด |
| VT05 | Drowned Seeker | 1 = 1% | 12.5% | รูปร่างย้อย ผ้า/ผมเปียกห้อย | จ้องและเข้าหาน้ำที่เห็น/ได้ยิน | น้ำลึก/จมน้ำ/อ่อนแรง |
| **Total New Type** | | **8 = 8%** | **100%** | | | |

**VT00** เป็นรหัสการนำเสนอทั่วไป/ยังจำแนก phenotype ไม่ได้ ไม่ใช่ตัวใหม่ลำดับที่หก และไม่ใช่การบอกว่าไม่ติดเชื้อ

## 4. Behavioral overlays (not a sixth New Type)

| Overlay | Meaning | Rules |
|---|---|---|
| BH-WS | Water-seeking | พยายามหาแหล่งน้ำจริงในสายตา/ระยะเสียง; เกิดได้หลาย VT ไม่ใช่ VT05 อย่างเดียว |
| BH-AG | Hyper-agitated | หงุดหงิด ใช้แรงหรือไล่ตามบางเหตุการณ์ ไม่ได้เท่ากับกินคน |
| BH-CAT | Catatonic / Paralytic | นิ่งเกร็ง จัดอยู่ภายใน 30% Stage-3 Canon |
| BH-BS | Rare blood-seeking | การกัด/กินเนื้อในบางราย เป็น proposal ที่ยัง **ไม่มีอัตราอนุมัติ**; ไม่ใช่ VT06 และไม่เพิ่ม HP จากเลือด |
| BH-RD | Regeneration debt | หลังบาดเจ็บต้องใช้ทรัพยากรสูง กระหายน้ำเพิ่มและอาจทรุด |

## 5. Stage × types, severity × types

| Stage | Expected depiction | What NOT to do |
|---|---|---|
| S01 | ส่วนใหญ่ยัง VT00 ไข้/กระหายและยังสื่อสารได้ | ไม่สแกนติดเชื้อจากอาการเดียว |
| S02 | VT00 + BH-WS/BH-AG ในบางราย | ไม่เปลี่ยนเป็น VT โดยอัตโนมัติ |
| S03 | อาจเกิด VT01–VT05 **หลังเงื่อนไข GD-FANS-003**, หรือคง VT00 | ไม่ตีความ S03 ว่า C30/ยืนยันแน่นอน |
| S04 | phenotype เก่าคงอยู่แต่เสื่อมสภาพ | ไม่เกิดอมตะหรืองอกคืนชีพ |

**Severity SV03** หมายถึงต้องดูแลเร่งด่วนในโลกเรื่อง ไม่จำเป็นต้องอันตรายในฉากต่อสู้มากกว่า VT01; case classification, severity, type และ stage แยกกันทุกครั้ง

## 6. Variant gates / conditions & growth mechanics

- ใน Standard design: จากผู้เข้าสู่ Stage 3 จำนวน 100 คน มี Hyper 70 คน; คาดว่า 20 คนใน Hyper ผ่าน **Gate A** จากเหตุซ่อมเนื้อเยื่อซ้ำและความผิดปกติสะสม (เกณฑ์เชิงเกม ไม่ใช่ชีววิทยาจริง)
- **Gate B:** เมื่อ candidate พร้อมประเมินผล มีโอกาส 40% สร้าง phenotype ที่คงตัว = คาด **8 variant**, อีก **12 failed**; สุ่มอย่างมากหนึ่ง outcome ต่อ NPC และติดตามประวัติ
- หากระบบไหลเวียน/หายใจล้มเหลวหรือทรัพยากรหมดก่อน ก็ไม่อาจกลายเป็น New Type สำเร็จ การบาดเจ็บมากไม่ใช่รับประกันได้ upgrade
- ภาพเกมต้องระบุความต่างระหว่าง **CPM (cell division), TRR (tissue reconstruction), FIR (functional integration)** ที่ออกแบบอยู่ใน GD-FANS-004; ไม่ใช้ค่า HP heal ตัวเดียวอ้างความสมจริง
- RG01..RG05 เป็น **ระดับการฟื้นฟู** ไม่ใช่ VT01..VT05; RG05 และ VT05 ใช้คนละความหมาย

## 7. Enemy readability & art constraints

ต้องแยก VT ได้ด้วย **silhouette / movement / costume / texture / setting** โดยไม่พึ่งสีหน้าซอมบี้เดิม ๆ และไม่ต้องเพิ่มภาพรุนแรง:

1. **VT01:** วิ่งพุ่งสั้น ตัวแคบและเส้นแนวทแยง; ดีเทลผิวร้อน เสื้อผ้าบาง
2. **VT02:** ไหล่ข้างเดียวใหญ่ แขนหนา น้ำหนักตัวเทข้าง; ชุดผ้าตึงไม่สมมาตร
3. **VT03:** แผ่นพังผืด/ข้อยึดติดเป็นเหลี่ยม เดินแข็ง; เสื้อแทรกเนื้อแข็ง
4. **VT04:** เนื้องอก/ก้อนผิดรูปแบบไม่เห็นแผลเปิด ทรงตัวลำบาก; รูปทรงดูไม่สมดุล
5. **VT05:** ผ้า/ผมเปียกห้อย สีเย็น อยู่ริมน้ำ/ระดับน้ำสูง; ท่าทางหมกมุ่น
6. **VT00:** เสื้อผ้า/รูปร่าง/เพศ/วัยหลากหลายและยังมีภาพความเป็นมนุษย์ ไม่ใช่ศัตรูทุกตัวหน้าตาเหมือนกัน

**Non-graphic preferred:** ใช้รูปทรง ความแข็งของข้อต่อ พังผืด เหงื่อและน้ำท่วมแทนแผลชัด; ไม่ใช้เชื้อหรือการป่วยจริงเพื่อเหมารวมลักษณะคนบางกลุ่ม

## 8. Example classification label (game display only)

`LOS-FANS26-C20-S03-SV02-VT02-RG04`

อ่านว่า syndrome FANS-26, probable case, stage 3, moderate clinical severity, Overgrown, regeneration tier IV. **รหัสนี้ไม่ใช่ ICD-11 และไม่ใช้เป็น patient_id**; เป็นป้ายสถานะชั่วคราวที่เปลี่ยนตามข้อมูลได้ รายละเอียดโครงสร้างใน [Coding Registry](../06-engineering/FANS-26_CODING_AND_CASE_DATA_DICTIONARY_v1_TH.md)

## 9. Acceptance criteria

- [ ] Case, stage, severity, VT, RG and overlays stored as separate fields
- [ ] Stage-3 50+12+8+30=100; New Types 2+2+2+1+1=8
- [ ] 70/30 remains narrative baseline, not extra percentages
- [ ] BH-BS does not become VT06 or add to 8%
- [ ] No phenotype forces laboratory-confirmed status
- [ ] All 5 silhouettes recognizable without class text in gameplay camera
- [ ] NPCs can die and cannot breathe underwater; no unconditional perpetual regeneration
- [ ] Scripted S9 tutorial type excluded from random population-rate validation
- [ ] Spawn prevalence and 21-day cumulative incidence not conflated
- [ ] Store taxonomy version and seeded results across save/load

**Open decisions:** DEC-007 (dual agent / blood phenotype); DEC-008 (repair limits); DEC-009 (variant incidence); DEC-010 (regeneration rates); DEC-011 (coding governance)
