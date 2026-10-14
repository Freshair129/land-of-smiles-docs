# FANS-26 — Clinical Syndrome & Surveillance Case Definition
## แบบจำลองเอกสารเฝ้าระวังการระบาด (WHO-inspired, not WHO-approved)

**Doc ID:** LOS-CLIN-FANS26-001  
**Version:** 1.0 · 14 October 2026  
**Status:** Draft · เรื่องแต่ง / กำลังรอการรับรอง Canon  
**Links:** [Story Canon §5](LAND_OF_SMILES_STORY_CANON_v1_TH.md) · [Dual-Agent Hypothesis](FANS-26_DUAL_AGENT_THIRST_LORE_TH.md) · [Type Classification](../02-game-design/FANS-26_INFECTED_TYPE_CLASSIFICATION_v1_TH.md)

> WHO ไม่ได้กำหนดโรค FANS-26 และไม่มีรหัส ICD-11 สำหรับโรคสมมตินี้ เอกสารยืม *รูปแบบการอธิบายโรค/Case Definition/Surveillance* ของ WHO เท่านั้น ไม่ใช่เอกสารทางการแพทย์เพื่อใช้กับผู้ป่วยจริง

## 1. Disease nomenclature

- **FANS-26:** Flood-Associated Neurological Syndrome 2026 — ชื่อกลุ่มอาการสมมติ; 26 = ปี 2026 ไม่ใช่เลขรุ่นเชื้อ
- **H-08:** รหัสแฟ้มการระบาดเก่า ไม่ใช่การยืนยันแหล่งกำเนิดโรคในหาดใหญ่
- **P-08 / V-26:** สมมติฐานปรสิตและไวรัสร่วมอาศัย อยู่ระหว่างการตัดสินใจ DEC-007; Canon เดิม §5.1 ยังระบุ RNA virus เดี่ยว
- **ชื่อแคมเปญ:** Bangkok Outbreak ไม่ใช่ชื่อทางการของโรค; ชื่อโรคไม่ควรอ้างว่าโรคเป็นลักษณะเฉพาะของคนหรือพื้นที่ใด

## 2. Case classification — สถานะหลักฐานการติดเชื้อ

| Internal code | Label | Proposed evidence rules for *fiction* |
|---|---|---|
| **C00** | Under investigation | ยังมีข้อมูลอาการ/ประวัติสัมผัสไม่เพียงพอ |
| **C10** | Suspected | มีอาการ *มากกว่าหนึ่งกลุ่ม* ที่เข้ากันได้ เช่น ไข้/กระหายน้ำร่วมกับอาการ neurobehavioral **และ** มีความเชื่อมโยงการสัมผัสหรือคลัสเตอร์ที่ต้องติดตาม |
| **C20** | Probable | เข้าเกณฑ์ suspected ร่วมกับหลักฐานเพิ่มเติมที่สอดคล้อง เช่น เชื่อมโยงคลัสเตอร์/อาการที่ดำเนินต่อเนื่องและมีการประเมินสาเหตุอื่น |
| **C30** | Confirmed | ต้องมีหลักฐานจาก **วิธีตรวจอ้างอิงที่ได้รับการรับรองภายในโลกนิยาย** พร้อม reviewer, test-version และ provenance; *ยังไม่ถือว่ามีชุดตรวจแม่นยำ 100% ณ DAY 10* |
| **C40** | Excluded | หลักฐานที่มีคุณภาพเพียงพอสนับสนุนว่าไม่เข้าเกณฑ์ FANS-26; การตรวจลบด้วยการทดสอบที่ยังไม่ได้ยืนยันประสิทธิภาพ **ไม่เพียงพอ** |

การเปลี่ยน C00→C10→C20→C30 เป็นตัวอย่างเท่านั้น อาจย้อนระดับหรือต้องทบทวนใหม่ได้เสมอ; บุคคลที่สัมผัสเชื้อแต่ไม่แสดงอาการให้บันทึกสถานะ *exposure follow-up* แยก ไม่จัดเป็นเคสป่วยอัตโนมัติ

## 3. Clinical syndrome overview

โรคทางระบบประสาทในโลกนิยาย: อาจเริ่มจากไข้ อ่อนเพลียและ **กระหายน้ำจริง** เนื่องจากภาวะเจ็บป่วยรุนแรง/สูญเสียน้ำ; ต่อมาบางรายหมกมุ่นการเข้าหาน้ำ ประเมินอันตรายเสีย ความจำ/การยับยั้งลดลง; บางรายอาละวาดและกัด บางรายเกร็งนิ่ง และยังมีชีวิตจำกัด ไม่ใช่ศพที่คืนชีพ

**Differential caution:** ความกระหายน้ำ ไข้ การโกรธ การเดินลุยน้ำ และความสับสนล้วนมีสาเหตุอื่นได้ การสังเกตเพียงอย่างเดียว *ไม่ใช่* การยืนยันโรค ไม่สามารถสร้างระบบอ่านหน้าหรือสแกน “ติดเชื้อ 100%” จากภาพได้

## 4. Symptom registry / อาการ

| Code | Domain | Observable sign | Caveat |
|---|---|---|---|
| SYM-FVR | General | ไข้ ตัวร้อน | nonspecific |
| SYM-FAT | General | อ่อนแรง/เหนื่อยล้า | nonspecific |
| SYM-THR | Hydration | ขอ/ดื่มน้ำซ้ำ กระหายมาก | ไม่ได้แปลว่าติดเชื้อ |
| SYM-DEH | Hydration | ภาวะขาดน้ำทางกายที่ประเมินได้ | อาจเกิดจากภัยพิบัติทั่วไป |
| SYM-WFX | Behavior | หมกมุ่นภาพ/เสียงแหล่งน้ำจริง | ไม่ใช่พลังตรวจจับน้ำ |
| SYM-AGT | Behavior | กระสับกระส่าย นอนไม่หลับ หวาดระแวง | nonspecific |
| SYM-CON | Neurological | สับสน / การรับรู้เปลี่ยน | มีสาเหตุอื่นมาก |
| SYM-MEM | Neurological | ความจำและการจำคนลดลง | ไม่ใช่ผลพิสูจน์ไวรัส |
| SYM-EXE | Executive | ตัดสินใจเสี่ยงโดยไม่คำนึงอันตราย | ดูบริบทการหนีภัยด้วย |
| SYM-BIT | Behavior | กัดหรือทำร้ายใกล้ตัว | ไม่เท่ากับการกินคน |
| SYM-CAT | Neuromotor | นิ่ง/เกร็ง ตอบสนองช้า | ไม่ได้แปลว่าปลอดภัย |
| SYM-PAN | Pain response | ตอบสนองต่อความเจ็บปวดลด | บาดแผลจริงยังเกิด |
| SYM-REP | Tissue | การสมานแผลผิดปกติ / ใช้ทรัพยากรสูง | hypothetical regeneration |
| SYM-FIB | Tissue | พังผืด/รูปร่างผิดรูป | mutation ≠ cancer |
| SYM-DEC | Attrition | เคลื่อนไหวและอวัยวะเสื่อม | ยังตายได้ |

Observation schema: `symptom_code, first_seen_at, observed_by, evidence_source, confidence, observed_status`. **Unknown**, **not assessed** และ **negative** ต้องแยกกัน

## 5. Clinical progression: stages vs time

| Stage | Name | Existing Story Canon approximate timing | Main presentation |
|---|---|---|---|
| **S01** | Waterborne Prodrome | ราว 2–5 วันหลังรับเชื้อ | ไข้/หิวน้ำ แต่อาจยังสื่อสารรู้เรื่อง |
| **S02** | Limbic Agitation & Aquatic Fixation | ราว 24–48 ชม. | หมกมุ่นน้ำ สับสนและตัดสินใจเสี่ยงมากขึ้น |
| **S03** | Neurological Crisis / Host Adaptation | ราว 1–3 สัปดาห์+ | ~70% hyper-agitated / ~30% paralytic-catatonic; ไม่ใช่ทุกคนกินคน |
| **S04** | Chronic Attrition | โดยประมาณสัปดาห์ 3–4 เป็นต้นไป | ค่อย ๆ เสื่อมและเสียชีวิตได้ |

**เวลาไม่ใช่ตัววินิจฉัย:** stage durations เป็น narrative approximations มีการทับซ้อน; บันทึก onset/review แยกจาก encounter time

## 6. Clinical severity separate from stage

| Code | Severity | Purpose |
|---|---|---|
| SV00 | Not assessed / unknown | ห้ามตีความว่าอาการไม่รุนแรง |
| SV01 | Mild / stable | เฝ้าสังเกตและดูแล |
| SV02 | Moderate | ต้องติดตามและจัดพื้นที่เป็นพิเศษ |
| SV03 | Severe / critical | เร่งดูแลความเสี่ยงต่อชีวิต |

Stage / severity / case classification / enemy type เป็น **คนละฟิลด์**: S03 ไม่จำเป็นต้อง SV03; C20 ไม่จำเป็นต้อง S02; VT02 ไม่เท่ากับ C30

## 7. Person–place–time & reporting workflow

1. รับเรื่อง: patient_id ที่ไม่เปลี่ยนตามผลวินิจฉัย, onset time, intake site, ข้อมูลเท่าที่ทราบ
2. ดูแลความปลอดภัยเร่งด่วน: แม้ยังไม่ยืนยันติดเชื้อ ผู้ป่วยมีสิทธิได้รับความช่วยเหลือตามเรื่องราว
3. บันทึกอาการ/ความเป็นไปได้ของการสัมผัสโดยระบุ source + confidence; พิจารณาโรคอื่นร่วมด้วย
4. ระบุ Cxx จากหลักฐาน แยกกับ Sxx/SVxx/VTxx; ระบุ reviewer และ case-definition version
5. คัดกรอง/สังเกตอาการ/ส่งต่อให้หน่วยปลายทาง พร้อม acknowledgement ไม่ทำให้เคสหายจากยอด
6. ทบทวนเมื่อได้หลักฐานใหม่; เก็บ original status ใน audit log, ไม่ลบประวัติย้อนหลัง
7. สรุปรายวัน: suspected/probable/confirmed, alive/dead/unknown, transfers, new incidents, by station and day; ไม่นับคนเดิมซ้ำ

### S9 narrative examples

**A.** ผู้รอดชีวิตเดินลุยน้ำ ไข้ กระหาย แต่ไม่มีอาการระบบประสาทแน่ชัด → ประเมินเพิ่ม ไม่ยืนยัน FANS-26  
**B.** กระหายน้ำจริงจากภัยพิบัติ ไม่มีเหตุการณ์หรือหลักฐานอื่น → ดูแล ไม่เหมารวม  
**C.** มีไข้ร่วมกับพฤติกรรมพยายามลงน้ำเสียและอยู่ในคลัสเตอร์ที่เฝ้าระวัง → suspected/probable ตามหลักฐาน ไม่ใช่ confirmed  
**D.** มีลักษณะ Overgrown ในภาพ แต่ไม่มีหลักฐานตรวจเฉพาะ → ชนิดศัตรู VT02 อาจถูกนักออกแบบบันทึกภายใน; clinician ไม่ได้เห็นผลลับนั้น

## 8. Data and ethical safeguards

- สถานะไม่มีข้อมูล ≠ ไม่ติดเชื้อ; พฤติกรรมรุนแรงและสีหน้าไม่ใช่การตรวจ
- การย้ายสถานีต้องไม่สร้างระเบียนซ้ำ; ห้ามยืนยันผิดเพื่อทำคะแนน
- หลักฐานล่าสุดอาจแก้การจัดกลุ่มย้อนหลังได้ แต่ต้องเก็บเวลาและ version ของกฎที่ใช้
- Public dashboard แสดงข้อมูลรวม ไม่แสดงข้อมูลส่วนบุคคล
- WHO-inspired ไม่ได้หมายถึง WHO endorsement, ICD code หรือมาตรฐานตรวจโรคสำหรับชีวิตจริง

## 9. Verification and open questions

- [ ] C10 ไม่เกิดจาก `SYM-THR` เดี่ยว
- [ ] Case status เปลี่ยนได้โดยไม่เปลี่ยน patient ID
- [ ] C30 requires fictional authorized evidence; no automatic visual confirmation
- [ ] Unknown vs negative distinguishable
- [ ] S01–S04 and stage 3 70/30 remain in place
- [ ] Severity, phenotype and regeneration independent
- [ ] Versioned reporting and transfer audit persist after save/load
- [ ] ไม่อ้างว่าใช้กับผู้ป่วยจริงหรือได้รับการรับรอง WHO

**Pending DEC-011:** นิยามหลักฐานยืนยันในเรื่อง การตั้งชื่อฟิลด์ การแสดงข้อมูลให้ผู้เล่น ความเป็นส่วนตัว และ governance ของรหัส

## 10. Sources (framework, not scientific proof of FANS-26)

- WHO: https://www.who.int/news-room/detail/08-05-2015-who-issues-best-practices-for-naming-new-human-infectious-diseases
- WHO surveillance case definition: https://ihrbenchmark.who.int/document/glossary
- WHO example case definitions: https://www.who.int/publications/m/item/case-definitions-for-public-health-surveillance
- WHO ICD-11 reference: https://icdcdn.who.int/icd11referenceguide/en-2025-01/refguide.pdf
