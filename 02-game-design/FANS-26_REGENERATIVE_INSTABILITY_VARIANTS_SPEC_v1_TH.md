# GD-FANS-003 — Regenerative Instability & Infected Variants
## FANS-26: Mutation Burden, Failed Regeneration & New Type Population Balance

**Project:** Land of Smiles / Campaign 01: Bangkok Outbreak  
**Version:** Game Design Proposal v1.0 (TH)  
**Date:** 14 October 2026  
**Status:** DRAFT — pending DEC-008 and DEC-009; not approved Canon, not implemented  
**Scope:** NPC simulation, variant spawning, encounter design, population balance, UI telemetry and tests  
**Dependencies:** [Main GDD §5](LAND_OF_SMILES_GDD_v1_TH.md), [GD-FANS-001](FANS-26_DUAL_AGENT_BEHAVIOR_SPEC_TH.md), [Dual-Agent Lore](../03-narrative/FANS-26_DUAL_AGENT_THIRST_LORE_TH.md)

> **Core fantasy:** “สิ่งที่ช่วยให้ผู้ติดเชื้อรอดจากบาดแผล อาจเป็นสิ่งเดียวกันที่ทำลายร่างกายมันในที่สุด”
>
> เอกสารนี้เป็น **กฎเกมและอัตราเกิดชนิดศัตรูที่เสนอ** ไม่ใช่แบบจำลองพันธุศาสตร์ การก่อมะเร็ง หรืออัตรากลายพันธุ์ทางชีววิทยาที่วัดได้จริง ไม่มีขั้นตอนเพาะ/สร้าง/ดัดแปลงเชื้อโรค ความเร็วซ่อมแซมและโอกาสเกิด Variant เป็นเกมบาลานซ์โดยสมบูรณ์

---

## 1. Executive summary / ข้อสรุปที่ทีมใช้ร่วมกัน

- **อัตราเริ่มต้น (default): 8 New Types ต่อผู้ติดเชื้อที่เข้าสู่ Stage 3 จำนวน 100 คน** ติดตามผลสะสมสูงสุด **21 วันในเกมนับจากเข้าสู่ Stage 3**; เป็น expected value ไม่ใช่บังคับให้ทุกกลุ่ม 100 คนมี 8 ตัวพอดี
- Stage 3 ยึด baseline ของ Story Canon: **70% Hyper-agitated / Predatory และ 30% Paralytic / Catatonic**; New Types ทั้ง 8 คนเป็น subset ของ 70 คนแรก ไม่ใช่ 8 คนที่เพิ่มเข้ามาจากศูนย์
- จาก 70 Hyper-agitated โดยเฉลี่ย **20 คนเข้าสู่กลุ่มที่มี Regenerative Instability สูง**; ในกลุ่มนี้ **8 พัฒนาเป็น New Type**, **12 มีการฟื้นฟูล้มเหลวหรือรูปร่างเสียหายโดยไม่กลายเป็น New Type**; อีก 50 ยังเป็นแบบทั่วไป
- กลไกคือ **Regeneration Demand → Resource Debt → Instability → [Failed Repair หรือ New Phenotype]** ไม่ใช่ “ทุกเซลล์ที่ mutate คือมะเร็ง” และ **ไม่ใช่ Evolution ระดับประชากรเชื้อ** โดยอัตโนมัติ
- ยิ่งบาดเจ็บและเร่งซ่อมแซม ยิ่งใช้น้ำ/พลังงาน/สารอาหารมากขึ้น; แต่ **การขาดทรัพยากรอย่างหนักเกินไปทำให้ล้มเหลวหรือตาย** ไม่ได้การันตีว่าจะกลายเป็นตัวที่เก่งขึ้น
- ต้องมีระบบ **Encounter Budget** เพื่อให้ demo S9 เห็นจุดขายได้โดยไม่แสร้งว่าตัวอย่าง 15–20 ตัวสะท้อนค่าเฉลี่ยทางสถิติของประชากรทั้งหมด

## 2. Biological framing / กฎเนื้อเรื่องที่ไม่ควรเล่าผิด

การซ่อมแซมเนื้อเยื่อจริงอาศัยทั้งการแบ่งตัวของเซลล์ การจัดโครงสร้างใหม่ ภาวะเลือดไปเลี้ยง และสารอาหาร การแบ่งตัวมากขึ้นไม่เท่ากับรักษาอวัยวะได้ทุกชนิดทันที; mutation ไม่ใช่มะเร็งทุกกรณี และ phenotype อาจเปลี่ยนได้โดยไม่ต้องเกิด mutation ใหม่

**สำหรับ FANS-26 (เรื่องแต่ง):**
- V-26 ถูกเสนอให้สัมพันธ์กับภาวะ **Regenerative Overdrive** ที่ร่างกายตอบสนองต่อความเสียหายรวดเร็วผิดปกติ; นี่ไม่ใช่กลไกที่พิสูจน์แล้วในไวรัสจริง
- เมื่อการซ่อมแซมผิดรูป บางบริเวณอาจเกิดพังผืด ก้อนเนื้อ หรือการจัดโครงสร้างเซลล์ที่ทำให้หน้าที่ผิดปกติ ซึ่ง **ไม่จำเป็นต้องเป็นมะเร็งจริง** 
- เมื่อร่างกายยังพยายามซ่อมแซมเนื้อเยื่อที่ไม่ทำงาน เกิด **Regeneration Debt** สะสม ทำให้ไข้ ความกระหาย ความอ่อนล้าและความไม่มั่นคงของเนื้อเยื่อเด่นขึ้น
- กลุ่มส่วนน้อยที่ยังมีชีวิตและคงพฤติกรรมสม่ำเสมอในสภาพดังกล่าวเรียกว่า **Infected Variant / New Type** ซึ่งเป็น *ความแตกต่างของลักษณะปรากฏภายในโฮสต์* ไม่ใช่หลักฐานว่ามีเชื้อวิวัฒนาการเป็นสายพันธุ์ใหม่
- การเสื่อมของสมองส่วนหน้า ความจำ และการยับยั้งพฤติกรรม **ไม่ถูกรีเซ็ต** เพียงเพราะมีเซลล์ใหม่; ผู้ติดเชื้อยังหายใจ ต้องใช้เลือดไหลเวียน และตายได้

**Story Canon boundary:** ข้อเสนอ P-08/V-26 ยังต้องผ่าน DEC-007; Regenerative Overdrive ผ่าน DEC-008; Variants ผ่าน DEC-009; ก่อนนั้นให้อ่านทั้งหมดเป็น proposed design ไม่แทนที่เนื้อหา §5 เดิม

---

## 3. นิยามตัวหาร (denominators) — อย่านับเปอร์เซ็นต์ผิด

**Primary cohort:** ผู้ติดเชื้อ **100 คนที่เพิ่งเข้าสู่ Stage 3** โดยไม่รวมผู้ที่ยังอยู่ Stage 1–2 หรือเสียชีวิตก่อนถึง Stage 3. ติดตาม **ครั้งแรกที่เข้ากลุ่มพฤติกรรม** ใน 21 วันหลัง Stage 3 ไม่ใช่จำนวนที่ยังมีชีวิตอยู่พร้อมกันในวันสุดท้าย

- **Incidence 8%:** 8 คนเคยพัฒนาเป็น New Type ภายในช่วงติดตามจากทั้งหมด 100 คนที่เข้าสู่ Stage 3; แม้ต่อมาจะตาย ให้นับว่าเคยเกิดเหตุแล้วใน cohort นี้
- **Point prevalence:** จำนวน New Types ที่มีชีวิตและอยู่ในแผนที่ ณ เวลาใดเวลาหนึ่ง จะต่างออกไปตามการตาย การย้ายพื้นที่ การถูกกักกัน และระยะที่ผ่านไป; **ห้ามนำ 8% ไปวาง spawn พร้อมกันทุกครั้ง**
- **จากผู้ติดเชื้อใหม่ 100 คนใน Stage 1:** ยังแปลงเป็น 8 คนไม่ได้จนกว่าจะรู้สัดส่วนที่อยู่รอดจนถึง Stage 3. สูตรการออกแบบคือ `new_type_per_100_initial = 8 × fraction_reaching_stage3`; เช่น **สมมติ** 80% ผ่านถึง Stage 3 → 6.4 คนโดยคาดหมาย ไม่ใช่ข้อเท็จจริงทางแพทย์

**ไม่มีการติดป้ายว่า “อัตรากลายพันธุ์ DNA = 8%”** เพราะค่า 8% เป็น *อัตรา outcome ของตัวละครในเกม* ไม่ใช่อัตราเกิด mutation ของเซลล์ เชื้อ หรือจำนวนครั้งแบ่งตัว

## 4. Baseline: 100 infected entering Stage 3

| ผลลัพธ์หลักที่ไม่ซ้ำคน (first classified path ภายใน 21 วัน) | จำนวนเฉลี่ยต่อ 100 | % ของ 100 | ความสัมพันธ์กับ profile เดิม |
|---|---:|---:|---|
| Hyper-agitated ทั่วไป / ไม่เกิด New Type | 50 | 50% | อยู่ในกลุ่ม Hyper |
| Failed / Unstable Regeneration (ไม่พัฒนาเป็น New Type) | 12 | 12% | อยู่ในกลุ่ม Hyper; บางรายทรุด/ตายภายหลัง |
| Successful Variant / New Type | 8 | 8% | อยู่ในกลุ่ม Hyper; ไม่ใช่บัฟฟรี |
| Paralytic / Catatonic | 30 | 30% | คง baseline Canon เดิม |
| **รวมทั้งหมด** | **100** | **100%** | **Hyper 70 / Catatonic 30** |

**ความตายไม่ใช่หมวดที่ห้าซึ่งนับทับ 100:** ตัวละครแต่ละคนมี outcome class *และ* สถานะ `alive/dead/missing/evacuated` แยกกัน; ตายหลังถูกจัดกลุ่มแล้วยังนับใน cohort เดิม แต่ไม่ spawn ในโลกได้อีก

### New Type composition — 8 ต่อ 100

| รหัส | ประเภท | ต่อผู้ติดเชื้อ Stage 3 100 คน | % ของ Stage 3 | % ภายใน 8 New Types |
|---|---|---:|---:|---:|
| VT-01 | Fever Runner | 2 | 2% | 25% |
| VT-02 | Overgrown | 2 | 2% | 25% |
| VT-03 | Fibrotic | 2 | 2% | 25% |
| VT-04 | Aberrant | 1 | 1% | 12.5% |
| VT-05 | Drowned Seeker | 1 | 1% | 12.5% |
| **Total** | | **8** | **8%** | **100%** |

**ทุกตัวเลขในสองตารางเป็น DESIGN TARGET ไม่ใช่ค่าอัตราการเกิดในประชากรมนุษย์จริง**; ต่อ 100 คนเป็นค่าเฉลี่ยเมื่อสุ่มหลาย cohort ไม่รับประกันว่าจะเห็นแต่ละตัวตามตารางในทุกแมตช์

### Difficulty knobs (optional, still not Canon)

| Preset | New Types ที่คาดต่อ Stage-3 100 | ความหมาย |
|---|---:|---|
| Story | 4% | เปิดพื้นที่ให้ระบบช่วยเหลือและปมสืบสวน |
| Standard | **8%** | ค่าเริ่มต้นสำหรับ balancing |
| Nightmare | 12% | เพิ่มความหลากหลาย แต่เพิ่ม resource failures ร่วมด้วย |

**ห้ามนำค่าระดับความยากไปสวมเป็นข้อมูลที่นักวิทยาศาสตร์ในเรื่องยืนยันแล้ว**; เป็นตัวปรับ encounter pacing สำหรับผู้เล่นเท่านั้น

---

## 5. Two-gate outcome model: ใครบ้าง “มีสิทธิ์” กลายเป็น New Type

เพื่อไม่ให้ “โดนยิงสองครั้งแล้ววิวัฒนาการ” ระบบใช้สองขั้นแยกจากกัน โดยตัวเลขและคะแนนทั้งหมดเป็น **abstract game state 0–100** ไม่ใช่ค่าทางคลินิก

### Gate A — Instability candidate eligibility

NPC จะเข้าสู่กลุ่ม candidate ได้ก็ต่อเมื่อทุกเงื่อนไขนี้เป็นจริง:

1. `clinical_stage == 3` และ `behavior_profile == hyper_agitated` (เวอร์ชันแรกยังไม่เปิด candidate ของ catatonic)
2. เกิด **distinct repair events ≥ 2** ในช่วงจำลอง; **ไม่นับแอนิเมชันบาดแผลซ้ำ** เป็นหลายเหตุการณ์
3. `regenerative_burden >= 60/100` จากการติดตามสภาพ NPC ในเกม และ `tissue_instability >= 55/100` (คะแนนแต่งเพื่อบาลานซ์)
4. มีข้อมูลการเคลื่อนไหว/พฤติกรรมต่อเนื่องให้ประเมิน ไม่ใช่ NPC ที่เพิ่ง spawn แล้วได้สิทธิ์ทันที
5. **ยังมีชีวิตและพ้นภาวะวิกฤตฉับพลัน**; ถ้าการไหลเวียน/หายใจล้มเหลว ให้ใช้ผลเสียชีวิตตามกฎเดิม ไม่ปลดล็อก New Type

**Calibration target:** จาก Stage 3 จำนวน 100 คน แบ่งเป็น Hyper 70 / Catatonic 30 และมี Hyper ราว **20 คนจาก 70** ที่ผ่าน Gate A ภายใน 21 วัน โดยเฉลี่ยในแบบจำลองมาตรฐาน หรือ **20% ของทั้งหมด** ไม่ใช่การเกิดแน่นอนในทุก cohort

### Gate B — Visible phenotype versus failed regeneration

เมื่อ NPC ที่ผ่าน Gate A มีเวลาและทรัพยากรเพียงพอให้สังเกตผลแล้ว:

- **40% ของ eligible candidates** มีโอกาสกลายเป็น New Type หนึ่งประเภท
- **60% ของ eligible candidates** จัดเป็น `failed_regeneration` / `unstable_without_variant`; ร่างกายเสียสมรรถนะและอาจทรุดหนักตาม resource debt
- **Expected aggregate:** `100 Stage 3 × 70% Hyper × (20/70 eligible) × 40% successful ≈ 8 New Types`
- **Extreme resource starvation:** หาก NPC ล้มเหลวทางกายก่อนประเมินผล ให้จัดเป็น failed pathway; **ห้ามตีความว่าขาดน้ำรุนแรงยิ่งต้องยิ่งได้ mutation ที่ดี**
- **Decision gate:** ใน MVP ให้สุ่ม **ครั้งเดียวต่อคน** หลังผ่าน Gate A และหน้าต่างติดตาม; ไม่สุ่ม 40% ทุกชั่วโมง/ทุกบาดแผล เพราะจะทำให้อัตรารวมพุ่งเกิน 8%

**เหตุผลที่ต้องมี 12 Failed:** รูปแบบเปลี่ยนแปลงที่แสดงประโยชน์ควรเป็นส่วนน้อยของการฟื้นฟูผิดปกติ ไม่ใช่ทุกความผิดพลาดสร้างความสามารถใหม่

### เมื่อใดควรลดอัตราจริงภายในโลกเกม

- บุคคลได้รับบาดเจ็บน้อย → Gate A ไม่ผ่าน → ไม่เพิ่มโอกาส New Type
- ฟื้นฟูได้ดีและใช้ทรัพยากรพอ → resource debt ต่ำ → instability มักไม่ถึงเกณฑ์
- บาดเจ็บหนักเกินและหยุดหายใจ/ไหลเวียน → เสียชีวิต → ไม่มีขั้นวิวัฒนาการหลังตาย
- น้ำและอาหารขาดจนล้มเหลวก่อนรูปแบบใหม่คงตัว → Failed/Collapse มากกว่า Successful Variant
- ผู้ติดเชื้อถูกแยกจากการปะทะ → จำนวน eligible อาจต่ำกว่าเป้าหมายมาตรฐาน

**ข้อห้ามเชิงเกม:** ไม่ทำ “ผู้เล่นยิ่งยิงศัตรู ยิ่งสร้างบอสถึกกว่าเดิมทันที” โดยไม่มีช่วงเวลา ความต่อเนื่อง และต้นทุนที่ผู้เล่นอ่านได้

---

## 6. Regeneration Debt & Instability state model

| State / score | Type | เพิ่มจากเหตุการณ์เกม | ส่งผล |
|---|---|---|---|
| `injury_history` | array of coarse incidents | ความเสียหายจริงและแยกเหตุการณ์ซ้ำ | บอกว่าผ่าน repair events หรือไม่ |
| `regenerative_burden` | 0–100 abstract | ความพยายามซ่อมแซมต่อเนื่อง | แรงกดดันทางทรัพยากร |
| `resource_debt` | 0–100 abstract | การซ่อมเกินกว่าน้ำ/พลังงาน/สารอาหารที่มี | เพิ่มกระหายจริงและโอกาส repair failure |
| `tissue_instability` | 0–100 abstract | cumulative repair abnormalities / long-term tissue stress | เงื่อนไข Gate A และการผิดรูป |
| `functional_integrity` | bands | สภาพกล้ามเนื้อ/กระดูก/การไหลเวียน | ยังล้ม เจ็บจนใช้การไม่ได้ จมน้ำและตายได้ |
| `phenotype_status` | none / candidate / failed / VT-01..05 | outcome ของ Gate B ครั้งเดียว | เปลี่ยนภาพ/AI/เสียง/สถิติเมื่อเป็น Variant |
| `death_status` | alive/dead/missing | simulation ปกติ | แยกจาก `phenotype_status` ห้าม resurrect |
| `variation_seed` | deterministic ID | NPC และ scenario seed | สุ่มซ้ำได้และตรวจสอบ outcome |

**ความสัมพันธ์เชิงออกแบบ:**

- `repair_demand ↑ → resources consumed ↑ → resource_debt ↑ → physiological_thirst ↑`
- `repeated burden ↑ → instability ↑` แต่ `functional_integrity ↓` ได้พร้อมกัน
- `resource_debt` ที่สูงจนระบบล้มเหลวทำให้ **regeneration effectiveness ลดลง** ไม่ใช่บัฟไร้ขีดจำกัด
- `phenotype_status = VT-xx` ไม่ลบ injury history และไม่ฟื้นสมองส่วนหน้าหรือความทรงจำให้สมบูรณ์

**ไม่สร้างคะแนน mutation ของ DNA หรือค่าจำเพาะต่อไวรัส/ปรสิต**; ชื่อ `tissue_instability` เป็นตัวแทนเชิงเกมของการซ่อมแซมผิดรูปเท่านั้น

---

## 7. New Type specifications — เงื่อนไข, จุดเด่น, จุดอ่อน

### VT-01 — Fever Runner (2% Stage 3)

**Profile:** ภาวะตื่นตัวเกินปกติและการใช้แรงหนักยังคงอยู่ได้ระยะหนึ่ง ทำให้การเข้าประชิดเร็ว แต่แลกด้วย resource debt สูง

**Additional eligibility context:** เดิมมี `high_agitation`, `exertion_history` และ movement capacity ไม่ถูกจำกัดจาก injury; เป็นตัวถ่วงน้ำหนัก **หลังผ่าน Gate B** ไม่ใช่สูตรชีววิทยาสร้างเซลล์วิ่งเร็ว

**Behavior:** ไล่ตามสิ่งเร้าใกล้ตัวได้เร็วในช่วงสั้น, เปลี่ยนไปหาแหล่งน้ำเมื่อกระหายหรือเหนื่อยเกิน, บางครั้งหยุดนิ่งเพื่อฟื้นแรง

**Weakness:** exhaustion เร็ว; เสี่ยงล้ม/สูญเสียแรงจากภาวะร้อนและขาดน้ำ; ไม่ใช่ sprint ไม่รู้จบ

**Telegraph:** หายใจหอบ เคลื่อนไหวกระสับกระส่าย เปลี่ยนความเร็วเป็นจังหวะ

### VT-02 — Overgrown (2% Stage 3)

**Profile:** กล้ามเนื้อ/เนื้อเยื่ออ่อนบางบริเวณฟื้นตัวผิดรูป ทำให้รูปร่างหนาหรือไม่สมมาตร และมีแรงกระแทกระยะใกล้สูง

**Additional eligibility context:** cumulative damage มุ่งในบริเวณกล้ามเนื้อ / การเคลื่อนไหวผิดสมดุล

**Behavior:** เคลื่อนไหวช้าในพื้นที่แคบ แรงผลักสูงเมื่อประชิด แสดงการใช้แขนสองข้างไม่เท่ากัน

**Weakness:** คล่องตัวต่ำ มีปัญหา balance; damage ต่อโครงสร้างและอวัยวะสำคัญยังอันตราย; ใช้ทรัพยากรสูง

**Telegraph:** ไหล่หรือแขนไม่สมส่วน ท่าเดินเอียง เสียงฝีเท้าหนัก

### VT-03 — Fibrotic (2% Stage 3)

**Profile:** เกิดพังผืด/รอยแผลหนาเป็นหย่อมอย่างผิดปกติ; การเคลื่อนไหวบางข้อถูกจำกัด

**Additional eligibility context:** ประวัติความเสียหายผิวหนัง/เนื้อเยื่อเกี่ยวพันซ้ำและการซ่อมแซมได้คุณภาพต่ำ

**Behavior:** เคลื่อนช้าและหันตัวลำบาก ป้องกันตนเองแบบเกร็ง ขวางทางแคบได้ดี

**Weakness:** หยิบจับและปีนป่ายได้ยาก; พังผืดไม่ใช่เกราะกันกระสุนหรือป้องกันทุกความเสียหาย

**Telegraph:** รอยแผลหนาแห้งไม่สม่ำเสมอ ข้อติด ท่าเดินแข็ง

### VT-04 — Aberrant (1% Stage 3)

**Profile:** เนื้อเยื่อเติบโตผิดรูปแบบก้อน/ปุ่มไม่สมมาตร ความผิดปกตินี้ **ไม่ใช่คำวินิจฉัยว่ามะเร็งทั้งหมด**; บางคนยังเคลื่อนไหวได้ช่วงหนึ่งแต่สภาพอวัยวะทรุดลง

**Additional eligibility context:** `tissue_instability` สูงอย่างต่อเนื่องและการจัดโครงสร้างเนื้อเยื่อเสียหน้าที่; ใช้เป็น rare authored/weighted phenotype

**Behavior:** เคลื่อนที่ไม่สม่ำเสมอ บางช่วงอันตรายเพราะคาดเดาการเคลื่อนไหวลำบาก แต่มีช่วงอ่อนแรงชัดเจน

**Weakness:** resource debt สูงมาก การเคลื่อนไหวไม่แม่นยำ โอกาสเข้าสู่ Collapse สูง

**Telegraph:** รูปร่างไม่สมมาตร มีการโป่งนูนภายนอกที่ไม่ต้องใช้ภาพโหด

### VT-05 — Drowned Seeker (1% Stage 3)

**Profile:** หมกมุ่นแหล่งน้ำมากกว่าแบบทั่วไปและมีร่องรอยความเสียหายจากน้ำท่วม/การซ่อมแซมผิดรูป

**Additional eligibility context:** เคยอยู่บริเวณน้ำท่วมซ้ำ ๆ และ `water_fixation` สูง; **ไม่มีการปรับอวัยวะให้หายใจใต้น้ำ**

**Behavior:** มุ่งไปหาพื้นที่ชื้นหรือเสียงน้ำที่รับรู้ได้จริง อยู่ใกล้ตลิ่ง/ท่อแตกเป็นเวลานาน บางครั้งแทรกในหมอกฝนหรือน้ำระดับตื้น

**Weakness:** น้ำลึกและกระแสน้ำยังพัด/ทำให้จมน้ำได้; สภาพผิวและกำลังขาเสื่อมตามเวลา

**Telegraph:** เสื้อผ้าชุ่มน้ำ หมกมุ่นขอบคลอง เสียงสำลัก/หายใจติดขัด

### Cross-cutting rule: Blood-Seeker ไม่ใช่ชนิดที่หก

Blood-Seeker จาก [Dual-Agent Lore](../03-narrative/FANS-26_DUAL_AGENT_THIRST_LORE_TH.md) เป็น **behavioral phenotype** ที่อาจเกิดใน Hyper-agitated บางราย ไม่ใช่ New Type ใหม่ในตาราง 8%; NPC อาจมี blood-seeking และ VT-xx พร้อมกันได้ตามการเล่าเรื่อง แต่ **ห้ามนับเพิ่มในยอดประชากร** และอัตรา blood-seeking ยัง TBD ภายใต้ DEC-007C/DEC-007D

---

## 8. Weighted type assignment (game-only)

เมื่อผ่าน Gate B และ outcome เป็น New Type ให้เลือก VT-01..05 โดยพิจารณา **context tags ของตัวละครในเกม** ไม่ใช่สูตรเพื่อเพิ่มอัตรากลายพันธุ์ของสิ่งมีชีวิตจริง:

| Type | Standard weight ในผู้ที่เป็น New Type | Context tag ที่มีน้ำหนักด้าน narrative |
|---|---:|---|
| Fever Runner | 25% | exertion / agitation |
| Overgrown | 25% | localized muscle damage |
| Fibrotic | 25% | repeated soft tissue injury |
| Aberrant | 12.5% | severe disorganized repair |
| Drowned Seeker | 12.5% | prolonged flood exposure and fixation |
| **Total** | **100%** | |

**Selection principle:**
1. ตัดสินว่าจะเกิด variant หรือไม่ให้เสร็จก่อน; ความถี่ 8% เป็น aggregate target, **context ไม่ทำให้เกิดการสุ่มซ้ำจนได้ variant แน่ ๆ**
2. หาก context บางประเภทไม่สมเหตุสมผล ให้กระจายน้ำหนักในกลุ่ม type ที่ยังสมเหตุสมผล หรือจัดเป็น failure พร้อม log เหตุผล; อย่า spawn Drowned Seeker ในสถานที่ที่ไม่มีประวัติน้ำท่วม
3. ห้ามมี `VT-01 + VT-02` หรือวิวัฒนาการต่อซ้อนแบบไม่มีขีดจำกัดใน MVP; **one primary variant per NPC** เพื่อให้ทดสอบและจำแนกภาพได้ชัดเจน
4. `phenotype_status` และ `profile` ต้อง persist ข้าม save/load, fast travel, zone unloading
5. ถ้าเปิด difficulty/pacing modifier ให้บันทึก `balance_preset` และ `content_version` ใน telemetry เพื่อไม่เอาผลคนละ preset มาเทียบกัน

## 9. ร้อยละภายใต้เงื่อนไขแวดล้อม (balance sensitivity; ประเมิน ไม่ใช่ชีววิทยา)

| สถานการณ์ในเกม | Eligible ในผู้ติดเชื้อ Stage 3 100 คน (เป้าหมาย) | New Type คาดหมาย | Failed / unstable | คำอธิบาย |
|---|---:|---:|---:|---|
| Shelter protected / มีการดูแลและหลบการปะทะ | 10 | 4 | 6 | บาดเจ็บสะสมน้อยกว่า |
| **Standard flooded district** | **20** | **8** | **12** | ตัวเลขหลักของเอกสาร |
| Repeated conflicts / persistent repair stress | 25 | 10 | 15 | โอกาสเข้ากลุ่ม instability สูงขึ้น |
| Extremely deprived / collapse before visible change | 25 | **5** | **20** | การขาดทรัพยากรหนักทำให้การฟื้นฟูล้มเหลวมากกว่าได้ type ใหม่ |

สูตร balancing ที่ใช้ภายในตาราง: `expected variants = eligible candidates × conditional success fraction` โดยค่า 40% ใช้ใน 3 แถวแรก; แถวสุดท้ายปรับเป็น 20% เพราะการสูญเสียหน้าที่และ resource collapse มากเกินจนเกิด variant ที่คงรูปได้น้อยลง

**หมายเหตุ:** ตัวเลขนี้ไม่ใช่โอกาสของไวรัสหรือเซลล์ในโลกจริง; เป็น output ที่ต้องปรับจาก playtest. แถวเหล่านี้เป็น **สถานการณ์ทางเลือก** ไม่ใช่กลุ่มประชากรที่บวกกันเป็น 100 เดียวกัน

## 10. Population progression / ช่วงเวลาที่ควรเห็นในเกม

| Window นับจากเข้าสู่ Stage 3 | สิ่งที่ควรสังเกตในเกม | Guardrail |
|---|---|---|
| Day 0–3 | มี Regenerative Overdrive ระยะแรกหรืออาการผิดปกติ แต่ยังไม่เฉลย phenotype | ไม่มี instant boss mutation หลังบาดเจ็บครั้งเดียว |
| Day 4–7 | เริ่มเห็น failed healing / instability บางราย | ยังไม่ยืนยันว่ารอดหรือได้ New Type |
| Day 8–14 | ตัวละคร candidate ที่ยังอยู่รอดบางรายแสดงรูปร่างและพฤติกรรมแตกต่าง | ไม่มีการ revive คนตาย |
| Day 15–21 | สัดส่วน cumulative outcome มุ่งเข้าเป้าหมาย 8% ใน standard model | คนที่ตายหลังเป็น variant อยู่ใน log แต่ไม่เป็น active spawn |
| หลัง Day 21 | ระยะทรุดโทรมและการตายกระทบจำนวน New Type ที่ยังพบ | ไม่สร้าง type ใหม่ไร้ขีดจำกัดทุกวันจาก NPC เดิม |

ช่วงนี้เป็น **narrative pacing windows** ไม่ใช่ช่วงเวลาเติบโตเนื้อเยื่อจริง; สอดคล้องกับ Canon ที่โฮสต์ยังเป็นมนุษย์มีชีวิตและเสื่อมลงภายในหลายสัปดาห์

## 11. Simulation algorithm sketch (pseudocode)

```text
on_population_entry_stage3(npc):
  npc.base_profile = hyper_agitated_or_catatonic_using_canon()
  npc.phenotype_status = none
  npc.first_variant_outcome = null

on_daily_simulation_step(npc):
  if npc.dead: return
  update_existing_injury_and_resource_state(npc)  # game abstractions
  update_thirst_and_flood_seeking(npc)

  if npc.base_profile != hyper_agitated: return
  if npc.first_variant_outcome != null: return
  if not meets_abstract_instability_eligibility(npc): return
  if not has_completed_observation_window(npc): return

  if npc.resource_collapse_or_critical_failure:
    npc.first_variant_outcome = failed
    return

  roll_once_seeded_for_this_npc()
  if roll_in_success_band:
    npc.first_variant_outcome = select_one_contextual_VT_01_to_05()
  else:
    npc.first_variant_outcome = failed

on_death(npc):
  npc.dead = true
  # Do NOT clear historical outcome. Do NOT respawn as undead.
```

**Implementation policy:** รหัสนี้เป็น pseudocode ของ NPC gameplay เท่านั้น ไม่มีขั้นตอนสร้าง เปลี่ยนแปลง หรือทดลองเชื้อโรคจริง; ไทม์ไลน์กับการสุ่มจะปรับได้หลัง playtest

## 12. Spawn & encounter budgets: อย่าเอา 8% ไปตีความผิด

- ถ้าพื้นที่มี infected Stage 3 อยู่ **20 คน** ค่าเฉลี่ย variant ที่เคยเกิดใน 21 วันคือ **1.6 คน**, ไม่ใช่ต้อง spawn 2 ตัวทันที และ active variant ในวันหนึ่งอาจเป็นศูนย์
- ถ้ามี infected Stage 3 อยู่ **50 คน** ค่าเฉลี่ย cumulative variant คือ **4 คน** แต่ตัวที่ตาย/หนี/อยู่ขอบ map ไม่ควรกลายเป็น active enemy พร้อมกัน
- ถ้ามี infected Stage 3 อยู่ **100 คน** ค่าเฉลี่ย cumulative variant คือ **8 คน**, แต่ชนิดย่อยบางชนิดอาจไม่พบเลยใน cohort หนึ่งจากความผันผวนของ RNG
- **S9 tutorial:** สามารถ authored encounter ให้มี 1 ตัวอย่างที่เห็นชัดเพื่อสอนระบบได้ แต่ต้องระบุใน scenario metadata ว่า `scripted_for_tutorial=true` และ **ไม่นำฉาก tutorial ไปนับสมดุลอัตรา 8%** 
- จำกัด active specials ในพื้นที่แคบด้วย encounter budget ตามความยากและพื้นที่หนี ไม่ให้ศัตรูที่เกิดจากระบบจำลองทำลายความยุติธรรมของภารกิจคัดกรอง/อพยพ

## 13. Gameplay telegraph, counterplay, fairness

1. ผู้เล่นเห็นสัญญาณก่อนเกิดผลสำคัญ เช่น บาดเจ็บแล้วเคลื่อนไหวไม่ปกติ ใช้น้ำมากขึ้น เหนื่อยล้า หรือมีเนื้อเยื่อผิดรูป
2. คนปกติที่ขาดน้ำไม่ได้ถูก tag ว่ากลายพันธุ์/ติดเชื้อ 100% จากสีหน้า การขาดน้ำ หรือความก้าวร้าว
3. มีทางเลือกช่วยเหลือ ลดการปะทะ ย้ายเส้นทาง หรือจัดน้ำสะอาด ก่อนเหตุซ้ำจะเพิ่มภัยคุกคาม
4. New Type ทุกตัวมี **ข้อเสียที่มองเห็นได้** และไม่กลายเป็น “bullet sponge” อย่างเดียว
5. ไม่มีการล่า/กินกันเองเป็นค่าพื้นฐานของทุก variant; เหตุการณ์เหล่านั้นเป็น behavioral overlays ตาม Canon/Lore
6. ตัวละครอาจตายจากจมน้ำ เสียเลือด/ขาดการไหลเวียน หรืออวัยวะล้มเหลว ไม่ว่าฟื้นฟูได้เร็วเพียงใด

## 14. Telemetry and QA: สเปกการตรวจตัวเลข

**Aggregate events:** `infected_stage3_entry`, `repair_event`, `instability_eligible`, `variant_roll`, `variant_spawn`, `failed_regeneration`, `collapse`, `death`, `zone_transfer`

**Metrics:** 
- `candidate_rate = eligible / entered_stage3` target ~20% Standard
- `success_rate = new_type / eligible` target ~40% Standard
- `new_type_incidence = distinct_new_type / entered_stage3` target **8% Standard**
- `type_share = VT_x / all_new_type` target 25/25/25/12.5/12.5%
- `active_variant_prevalence = living_active_VT / living_infected_in_zone` — track separately, **do not assume 8%**
- `failed_regeneration_rate = failed / entered_stage3` target 12% Standard
- `player_warning_lead_time`, `unfair_encounter_count`, `false_triage_alerts` for user experience

**Acceptance gates (simulation fixtures; no medical validation):**

- [ ] **AC-01** Sum mutually-exclusive outcomes = population size, and in Standard target categories average 50 + 12 + 8 + 30 = 100.
- [ ] **AC-02** Stage-3 basic hyper/catatonic split is compatible with the existing narrative ~70/30; VT and failed remain subsets of hyper.
- [ ] **AC-03** Conditional success is rolled at most once per qualifying NPC; save/load or zone transitions do not reroll.
- [ ] **AC-04** Over at least **1,000 seeded synthetic cohorts of 100** with controlled standard exposure, measured type incidence falls in **7.0–9.0%** (practical tolerance for an initial prototype, not a medical confidence interval). Type weights are checked separately with larger fixtures.
- [ ] **AC-05** Severe resource deprivation lowers realized new-type outcomes and increases failure/collapse compared with otherwise similar Standard fixtures.
- [ ] **AC-06** A patient with critical loss of breathing/circulation does not become a variant or revive after death.
- [ ] **AC-07** No NPC simultaneously holds multiple primary VT IDs in MVP.
- [ ] **AC-08** No automatic restoration of lost memories, frontal-lobe function, severed limbs or destroyed organs.
- [ ] **AC-09** No variant receives infinite regeneration: all repair has resource debt, time delay and failure conditions.
- [ ] **AC-10** Death/prevalence and cumulative incidence are exported separately in telemetry and analytics.
- [ ] **AC-11** S9 scripted special is tagged authored so tutorial count never contaminates population-balance tests.
- [ ] **AC-12** A cohort of 100 with differing random seeds can have 0, 5, 8 or more New Types without violating the system; **8 is an expectation, not a quota**.
- [ ] **AC-13** All added percentages are labeled *fictional game balance* in UI documentation and data schema.

## 15. Narrative & production decisions

| Decision | Must resolve | Suggested default |
|---|---|---|
| **DEC-008** — Regenerative Overdrive | เนื้อเยื่อที่ซ่อมได้, ต้นทุนทรัพยากร, ขอบเขตความตาย, ความทรงจำและสมอง | ฟื้นเฉพาะบางเนื้อเยื่อ; ไม่มี resurrection, limb regrowth หรือฟื้นความจำอัตโนมัติ |
| **DEC-009A** — Variant incidence | จำนวนต่อ 100 / ความยาว window / ความยาก | **8% ต่อ Stage-3 100 คน ใน 21 วัน (Standard)** |
| **DEC-009B** — Candidate funnel | ตัวละครแบบไหนมีสิทธิ์, จำนวนครั้งซ่อมผิดรูป, once-only roll | 20 eligible → 8 variant / 12 failure ต่อ Stage-3 100 คน |
| **DEC-009C** — Variant taxonomy | 5 ประเภท, phenotype overlap, visual telegraphs | VT-01..05, one primary variant/NPC |
| **DEC-009D** — Rare horror / rating | Aberrant, blood-seeking, gore option | ความรุนแรงภาพปรับได้ และ blood-seeking ไม่นับเป็น type ใหม่ |

**Definition of Done:** Narrative approves fictional limits → Game Design accepts percentages and denominators → Engineering implements simulation with stable RNG → QA provides seeded evidence and encounter playtests. ก่อนครบขั้นตอนเหล่านี้: **เอกสารอยู่ในสถานะ Draft; ไม่มีข้ออ้างว่า runtime รองรับแล้ว**

## 16. อ่านเพิ่ม (แหล่งข้อมูลวิทยาศาสตร์สำหรับกรอบความสมจริงเท่านั้น)

- [Clonal expansion in normal tissues (Cancer Science, 2024)](https://onlinelibrary.wiley.com/doi/full/10.1111/cas.16183) — การสะสม mutation ในเนื้อเยื่อปกติ ไม่ได้แปลว่าเป็นมะเร็งเสมอ
- [Phenotypic noise and plasticity in cancer evolution (Trends in Cell Biology, 2024)](https://www.sciencedirect.com/science/article/pii/S0962892423002064) — phenotype เปลี่ยนได้ทั้งจาก genetic และ non-genetic causes
- [Nutrition and cutaneous wound healing (Clinics in Dermatology, 2022)](https://www.sciencedirect.com/science/article/pii/S0738081X21002145) — การซ่อมแผลต้องใช้ทรัพยากรและพลังงาน
- [Impact of nutrition on skin wound healing (2024, PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10874171/) — hydration และพลังงานสัมพันธ์กับการซ่อมแซมเนื้อเยื่อ
- งานเหล่านี้ **ไม่สนับสนุน** ว่ามนุษย์จะงอกอวัยวะเร็วหรือวิวัฒนาการเป็นมอนสเตอร์ภายในไม่กี่วัน; ส่วนนั้นคือ speculative horror worldbuilding

---

**Summary:** 100 Stage-3 infected → 70 hyper (50 typical + 12 failed + **8 New Types**) + 30 catatonic. New types = Fever Runner 2, Overgrown 2, Fibrotic 2, Aberrant 1, Drowned Seeker 1; all outcomes are fictional, testable game-design targets.
