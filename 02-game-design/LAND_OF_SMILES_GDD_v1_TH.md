# LAND OF SMILES
## Game Design Document — Survival Strategy / Colony Sim (Brand Revision v1.0; systems baseline v0.1)

**สถานะ:** Concept / Systems Design Draft  
**วันที่เอกสาร:** 12 ตุลาคม 2569  
**ภาษา:** ไทย  
**Genre:** Survival Strategy, Colony Sim, Crisis Management, Strategic City Recovery  
**Perspective:** Isometric/2.5D colony view + strategic network map  
**Game Mode ที่แนะนำ:** Single-player, pauseable real-time, Campaign + Sandbox  
**จุดเริ่มแคมเปญ:** DAY 10 — 12 ตุลาคม 2569  

> เอกสารนี้ออกแบบจาก *Bangkok_Outbreak_Story_Summary_TH(1).md* (Canon v0.2) และเพิ่มเติมระบบสำหรับเกมอย่างชัดเจน เหตุการณ์ระบาดและแฟ้ม H-08 เป็นนิยายประวัติศาสตร์ทางเลือก ไม่ใช่ข้อกล่าวหาต่อหน่วยงานหรือบุคคลจริง ตัวเลขระบบเกมทั้งหมดเป็นค่าเริ่มต้นเพื่อทดลองสมดุล ไม่ใช่ข้อมูลทางวิทยาศาสตร์หรือกำลังการขนส่งจริง

---

> **Brand migration note (14 ต.ค. 2569):** เปลี่ยนชื่อเกมหลักเป็น **LAND OF SMILES**, โดย **Bangkok Outbreak** เป็นชื่อ Campaign 01. แกนใหม่คือ “ดินแดนแห่งรอยยิ้ม ที่ทุกยิ้มอาจซ่อนรอยกัด” แต่รอยยิ้มเป็นภาพเปรียบ ไม่ใช่อาการตรวจเชื้อ. ข้อความทางเทคนิค/เกมเดิมด้านล่างเป็น baseline v0.1; ตัวเลข balance และ roadmap ยังเป็น proposal. อ่าน `LAND_OF_SMILES_BRAND_NARRATIVE_CONCEPT_v1_TH.md` คู่กันเสมอ.

> **DEC-001 accepted (14 ต.ค. 2569):** เจ้าของโปรเจกต์เลือก S9 โพธิ์นิมิตร — First Shelter เป็นสถานีแรกและพื้นที่ vertical slice ที่พัฒนาต่อ ให้สร้างโมเดลอ้างอิงภาพสถานที่จริง ดู [คำตัดสินและขอบเขต](../07-production/dec-001-s9-pho-nimit.md) ลำดับ H-08 และ tutorial ยังรอตัดสินใจใน DEC-002; ตัวเลขและรายการระบบ baseline ยังเป็นข้อเสนอ


## 0. Source of truth, assumptions, design boundaries

### Canon จากเอกสารต้นทาง (คงไว้)
- การระบาดเกิดซ้อนกับน้ำท่วมกรุงเทพฯ และน้ำ **ยังไม่ลด** ณ DAY 10; สมมติฐานน้ำท่วมประมาณ 60% ของพื้นที่เมือง
- รัฐบาลและกลไกช่วยเหลือบางส่วนยังทำงานได้จากศูนย์นอกใจกลางเมือง แต่ **สยามยังควบคุมไม่ได้**
- เน้น **อพยพและช่วยชีวิตก่อน** ขยายการกู้คืนพื้นที่ระดับเมือง
- BTS, MRT, Airport Rail Link, เรือ และเส้นทางถนนเป็นเครือข่ายต่างระบบ: BTS ไม่วิ่งถึงสุวรรณภูมิโดยตรง; พญาไทเป็นจุดเปลี่ยนถ่าย; บางใหญ่เกี่ยวข้องกับ MRT สายสีม่วง; M6/M81 เป็นคนละแนว
- FANS-26 เป็นชื่อกลุ่มอาการชั่วคราว; H-08 เป็นแฟ้มเหตุการณ์ในอดีตที่หาดใหญ่ ไม่ใช่คำยืนยันแหล่งกำเนิด
- ผู้ติดเชื้อเป็นมนุษย์มีชีวิต จำกัดด้วยสภาพร่างกาย; มีทั้งรูปแบบก้าวร้าวและไม่ก้าวร้าว; อาการเริ่มแรกไม่สามารถคัดกรองอย่างแม่นยำได้ด้วยความก้าวร้าว
- ความผิดพลาดของข้อมูล การปกปิด อคติ และความไม่ไว้วางใจเป็นประเด็นทางศีลธรรมและการบริหาร

### ส่วนที่เพิ่มเพื่อเกม (proposal, ไม่ใช่ Canon เดิม)
- ผู้เล่นเป็น **ผู้อำนวยการศูนย์ปฏิบัติการผู้รอดชีวิต** ที่ได้รับอำนาจจำกัดจากกลุ่มชุมชนและการประสานงานฉุกเฉิน ต้องสร้างความน่าเชื่อถือเพื่อขยายขอบเขต
- ฐานตั้งต้นของ vertical slice อยู่ที่ **S9 โพธิ์นิมิตร — First Shelter** (ฉาก blockout จำลอง ยังไม่ใช่มิติสถาปัตยกรรมจริง); **พญาไท** คงเป็น hub ช่วงหลังใน Campaign
- Campaign ใช้เวลาในเกมราว 45–90 วันสำหรับเส้นทางกู้คืนเมือง; ตัวเลขนี้ปรับตาม playtest
- Campaign มีเป้าหมายคงที่ แต่สภาพเมืองและผลลัพธ์ของ NPC เปลี่ยนแปลงได้; ไม่บังคับให้ทำลายผู้ติดเชื้อทั้งหมด
- การสร้างฐานและงานกู้คืนทำได้เฉพาะในพื้นที่มีสิทธิใช้งาน/ได้รับความร่วมมือ ไม่ใช่ผู้เล่นเป็นเจ้าของเมืองโดยอัตโนมัติ

### เสาหลักประสบการณ์ (design pillars)
1. **People before Territory:** ทุกการยึดพื้นที่ต้องชี้ว่าช่วยคนอย่างไร
2. **Water is the Map:** น้ำเปลี่ยนเส้นทางและกิจกรรมได้ทุกวัน
3. **Connected Survival:** สถานีหนึ่งแห่งเก่งทุกเรื่องไม่ได้ ต้องเชื่อมเครือข่าย
4. **Trust is Infrastructure:** ความเชื่อใจและข้อมูลจริงสำคัญพอ ๆ กับไฟและอาหาร
5. **Uncertainty, Not Random Punishment:** ผู้เล่นมีโอกาสเห็นคำเตือนและวางแผน ความเสี่ยงไม่ควรเป็นการสุ่มลงโทษที่คาดไม่ถึง

---

## 1. Core fantasy และ Core loop

**Player fantasy:** เปลี่ยนเมืองที่ขาดการเชื่อมต่อให้กลับมามีเครือข่ายผู้คน เสบียง การรักษา และสาธารณูปโภคทีละโหนด โดยพยายามไม่ทำให้คนที่ช่วยมากลายเป็นผู้รับเคราะห์จากระบบที่สร้างขึ้นเอง

**Core gameplay loop (ต่อวัน):**
1. รับ Situation Report: น้ำ / ไฟ / เส้นทาง / เสบียง / ผู้ติดเชื้อ / ผู้รอดชีวิต / ข่าวลือ
2. กำหนด Priority และ Work Orders: ดูแลฐาน กู้ภัย อพยพ วิจัย ป้องกัน ซ่อมแซม
3. มอบหมายทีมและเส้นทางภารกิจ; เปิด/หยุด simulation และกำหนดระดับความเร็ว
4. จำลองงานของฐานและปฏิบัติการนอกฐาน (ขนคน/ของ, เข้าเขตอันตราย, เจรจา)
5. รับผลกระทบ: คนบาดเจ็บ/เพิ่ม, ข่าวลือ, สูญเสียทรัพยากร, น้ำท่วมใหม่, เส้นทางเปลี่ยน
6. ปรับเครือข่าย ปลดล็อกการบริหารระดับเขต และเตรียมรายงานวันถัดไป

**Game clock (ข้อเสนอ):** 1 วันในเกม ≈ 20 นาทีที่ความเร็ว 1×; 0×/1×/2×/4×; pause แล้วสั่งงานได้; คำนวณสถานะภารกิจ/ประชากรเป็นช่วงเวลา 1 ชั่วโมงในเกม เพื่อคุมประสิทธิภาพ

**Victory fantasy:** ช่วยคนจำนวนมากให้ได้รับการดูแลอย่างต่อเนื่องและคืนการทำงานของโครงข่ายบางส่วนอย่างยั่งยืน ไม่ใช่เพียงปล่อยให้ฐานอยู่ครบ X วัน

---

## 2. Game world: แผนที่ 2 ชั้น

### 2.1 Strategic City Map (กรุงเทพฯ และจุดปลายทาง)
แผนที่แนวกราฟ Node–Edge, แบ่งเป็น District Nodes และ Infrastructure Links แสดง:
- Water Level (0–5), Infected Pressure (0–5), Civilian Estimate + Confidence, Supply Status, Trust, Access, Utility Health
- Travel modality: walk/elevated passage, boat, road, rail, external transfer; **เส้นทางไม่สามารถใช้ข้ามชนิดได้โดยอัตโนมัติ**
- Links มี `capacity_per_hour`, `travel_time`, `hazard`, `required_power`, `status`, `inspection_confidence`
- ผู้เล่นเห็นความจุที่ยืนยันได้แยกจากคำขอและตัวเลขคาดการณ์

**จุดยุทธศาสตร์สำหรับแคมเปญ (การใช้งานเป็นสมมติฐานในเกม):**

| Area/Node | Role ในเกม | จุดเสี่ยง/เงื่อนไข |
|---|---|---|
| พญาไท | Later campaign hub / triage / intermodal transfer | คัดกรองไม่แม่น, คนหนาแน่น, รับส่งหลายระบบ |
| สยาม | Contested urban core / chokepoint | เขตควบคุมไม่ได้, ไม่เปิดใช้งานระบบรางจนตรวจรับ |
| ริมเจ้าพระยา/อาคารสูง | Search & rescue / boat routes | กระแสน้ำ, จุดเทียบท่า, คนช่วยตัวเองไม่ได้ |
| บางหว้า/ฝั่งธนฯ | Western transfer and relief node | น้ำท่วมแตกต่างเป็นรายจุด, สถานีไม่ได้ปลอดภัยทั้งแนว |
| บางใหญ่ | Mid-game settlement hub / western logistics | ต้องมีเส้นทางรับช่วงจริง, MRT สายสีม่วงแยกจาก BTS |
| ดอนเมือง/รังสิต | Investigation / rescue / contested healthcare | อดีตจุดเกิดคลัสเตอร์, ข้อมูลผู้ป่วยไม่ครบ |
| สุวรรณภูมิ | Conditional external evacuation destination | เปลี่ยนขบวนที่พญาไท; ระบบสถานีสนามบินต้องพร้อม |
| เส้น M81 ไปกาญจนบุรี | Conditional western road evacuation | ทางเข้าออกระดับพื้นดินเป็นข้อจำกัด |
| เส้น M6 ไปโคราช | Conditional northeastern road evacuation | จุดต่อทางเข้าสู่เส้น M6 ไม่จำเป็นต้องเปิดใช้งานได้ |

> โครงข่ายไม่ควรอ้างว่าทางรถไฟวิ่งเชื่อมได้ทุกจุด กราฟใช้ nodes สำหรับจุดเปลี่ยนถ่ายและแยกยานพาหนะตามจริงของโลกเรื่อง

### 2.2 Local Colony Map
มุมมอง Isometric/Tiles ใน 1 สถานี + อาคารใกล้เคียง + จุดทางเข้า/ออก + ท่าเรือ + พื้นที่สูง
- Layer 0: พื้นที่น้ำท่วม/ถนน/ทางเท้า ใช้ได้ตามน้ำ
- Layer 1: สถานีชั้นพื้น/ทางเชื่อมและพื้นที่บริการ
- Layer 2: ชานชาลา/ทางยกระดับ/อาคารที่ยังใช้งานได้
- Layer 3: ดาดฟ้า/งานเพาะปลูก/พลังงานแสงอาทิตย์/จุดสังเกตการณ์
- Buildability ถูกจำกัดด้วย Load/Power/Access/Structural Condition, ไม่ใช่กดสร้างได้ทุกจุด

### 2.3 Fog of war & Intelligence
แยก 3 สถานะ: **ตรวจพบ / ประเมิน / ยืนยัน**; เมื่อไม่มีการติดต่อ ข้อมูลจะค่อย ๆ ล้าสมัย เพื่อไม่ให้แผนที่เหมือนเรดาร์วิเศษ

---

## 3. Survivor simulation: ผู้คนคือระบบหลัก

### 3.1 ชุดสถานะ NPC
แต่ละคนมี `id`, `name`, `age_group`, `household`, `profession`, `skills`, `health`, `mobility`, `stress`, `fatigue`, `trust`, `current_assignment`, `location`, `needs`, `relationships`, `observed_symptoms`, `unknown_risk`, `personal_goal`.

**ข้อมูลที่ผู้เล่นเห็น ≠ ความจริงทั้งหมด** เช่น ไม่ควรเห็นป้ายแดงว่า “ติดเชื้อแล้ว” ก่อนการประเมินที่น่าเชื่อถือ

**Population groups:** เด็ก/ผู้สูงอายุ/คนต้องได้รับการช่วยเคลื่อนย้าย/ผู้ใหญ่ทั่วไป/เจ้าหน้าที่ที่ผ่านงาน; ภาระดูแลและความสามารถแตกต่าง แต่ทุกกลุ่มมีค่าเท่ากันเชิงชีวิต

### 3.2 Needs
- อาหารและน้ำดื่ม
- สุขภาพ/ความปลอดภัย/การดูแลอาการ
- ที่พัก/อุณหภูมิ/สุขาภิบาล
- พักผ่อน/ความเครียด
- ความสัมพันธ์/ความเชื่อใจ/ข่าวสาร

Needs ไม่ลดพร้อมกันหรือด้วยอัตราเดียวโดยไม่มีเหตุ: คนทำงานหนัก/ป่วย/ร้อน/แออัดมีความต้องการแตกต่างกัน

### 3.3 Work systems
Jobs: Rescue, Logistics, Engineering, Utilities, Medical, Sanitation, Food, Communications, Research, Administration, Security.

คำสั่งงานแบบ priority queues (Emergency/Critical/Normal/Deferred) และกำหนด Shift เช้า–เย็น–กลางคืน; จำกัดเวลาออกปฏิบัติการด้วย fatigue, mobility และทักษะ

ตัวอย่าง: `Repair Pump` ต้องมีช่างและอะไหล่ + ไฟสำรอง + จุดเข้าถึงปลอดภัยระดับหนึ่ง; ส่งแรงงานทั่วไปจำนวนมากไปไม่ได้ช่วยให้ผ่าน skill gate อัตโนมัติ

### 3.4 Family, bonding, morale, and consent
- NPC อาจไม่ยอมแยกจากครอบครัวในการอพยพ; ผู้เล่นใช้การเจรจา/รับช่วงดูแล ไม่ใช่ตัวเลข Morale เพียงค่าเดียว
- ความเชื่อใจเป็นรายกลุ่ม เช่น ผู้อยู่อาศัยเดิม, คนอพยพมาใหม่, ทีมกู้ภัย, หน่วยงาน
- การประกาศข้อมูลเกินความมั่นใจทำให้เกิดผลเสียภายหลังเมื่อพบความจริง
- ความขัดแย้งและโรคไม่ควรผูกกับที่มา/ชาติพันธุ์/อุปนิสัยภูมิภาค

---

## 4. Colony construction & resources

### 4.1 กลุ่มทรัพยากร

| Type | ตัวอย่าง | Constraint |
|---|---|---|
| Consumables | น้ำดื่ม, อาหาร, ยา, วัสดุทำความสะอาด | หมดตามจำนวนคนและการปฏิบัติการ |
| Energy | เชื้อเพลิง, ไฟฟ้า, พลังงานสำรอง | แหล่งผลิตและ Load ไม่เท่ากัน |
| Materials | เหล็ก, ไม้, อะไหล่ไฟฟ้า, วัสดุซ่อม | น้ำหนัก/พื้นที่ขนส่งสูง |
| Capacity | เตียง, ห้องดูแลผู้ป่วย, สุขา, พื้นที่กักสังเกต, พื้นที่พัก | เป็น throughput ไม่ใช่ stack ของไอเท็ม |
| Human capital | ช่าง, แพทย์, กู้ภัย, ผู้ประสานงาน | ต้องพักและมีข้อจำกัดด้านทักษะ |
| Intangibles | ความเชื่อใจ, ข้อมูลที่ตรวจสอบแล้ว, อำนาจประสานงาน | เพิ่มด้วยการปฏิบัติที่พิสูจน์ได้ ไม่ใช่กดซื้อ |

### 4.2 อาคารและโมดูล
- **Essential:** พื้นที่นอน, ครัวรวม, น้ำดื่มสะอาด, สุขา, จุดทำความสะอาด, จุดดูแลผู้ป่วย, ห้องสื่อสาร, จุดรับคน
- **Utilities:** เครื่องกำเนิดไฟ, แบตเตอรี่, จุดสำรองพลังงาน, ปั๊มน้ำ, ระบบจัดการน้ำเสีย, กำจัดขยะ
- **Logistics:** คลัง, จุดลงเรือ, ยกของ, ตรวจอุปกรณ์, จุดเปลี่ยนถ่าย
- **Security/Containment:** แสงสว่าง, ประตูแยกเขต, จุดสังเกต, เส้นทางหนีฉุกเฉิน, จุดพักปลอดภัย
- **Recovery:** เวิร์กช็อป, แปลงเพาะปลูกบนหลังคา, ระบบรวบรวมน้ำฝนที่ผ่านการจัดการ, ศูนย์ฝึกงาน, ห้องแลกเปลี่ยนข้อมูล

### 4.3 Utility dependencies

`Fuel/Solar → Electricity → Pump/Lighting/Communications/Clinic → Water Access & Medical Capacity → Survivor Health → Workforce Availability`

**Power allocation:** Essential loads ต้องตัดสินใจลำดับจ่ายไฟเมื่อไฟไม่พอ (Medical / Pump / Comms / Food Storage / Workshop เป็นต้น)

**Water access:** แม้มีน้ำท่วม แต่ไม่ใช่น้ำดื่มสะอาด น้ำบริโภคต้องผลิต/นำเข้า/จัดการ; ความสามารถบำบัดกับปริมาณน้ำดิบเป็นคนละค่า

### 4.4 Example balance (หน่วยเกมสมมติ)
ฐานมีคน 120 คน ต้องใช้น้ำดื่ม 120 units/day และอาหาร 120 units/day; มีน้ำสำรอง 150 units กับผลิตได้ 60/day ⇒ ขาด 60/day คงเหลือ 2.5 วันถ้าไม่มีอะไรเปลี่ยน; อาหาร 240 units กับผลิตได้ 20/day ⇒ ขาด 100/day คงเหลือ 2.4 วัน

**การออกแบบ UX:** แสดง `days until shortage`, `production/day`, `consumption/day`, `reserve`, และ `confidence` ชัดเจน ไม่ให้ผู้เล่นต้องคำนวณเองในใจ

### 4.5 Failure cascade
น้ำเพิ่ม → ปั๊มไฟฟ้าเสีย → น้ำขังเข้าคลัง → อาหารเสีย/เส้นทางปิด → ความต้องการอาหารสูงกว่าปริมาณที่ส่งเข้า → ประชาชนอ่อนแรง → งานซ่อมช้า → ความเสี่ยงสูงขึ้น

ให้มี **early warning** และทางเลือกแก้ ไม่ใช่แอบสุ่มทำระบบแตกโดยไม่มีสัญญาณ

---

## 5. Dual crisis simulation

### 5.1 Flood simulation (abstract, non-hydrological)
State of each zone: `water_level 0–5`, `rain_pressure`, `backflow_pressure`, `pump_capacity`, `drainage_capacity`, `barrier_integrity`, `power_available`.

Update ต่อช่วงเวลา: ระดับน้ำเพิ่มจากแรงฝนและน้ำหนุน ลดจากการสูบ/ระบายที่ยังทำงานได้; ค่าที่ใช้ในเกมเป็นการย่อโลก ไม่ใช่พยากรณ์น้ำท่วมทางวิศวกรรม

Flood level effects:
- 0: เข้าถึงทางเดินระดับพื้นได้
- 1: เดินช้าลง/รถบางชนิดถูกจำกัด
- 2: พื้นที่ชั้นล่างเริ่มใช้งานไม่ได้บางประเภท
- 3: ทางบกระดับพื้นถูกตัดขาด, เรือบางแบบเข้าได้เฉพาะจุด
- 4: คลื่น/สิ่งกีดขวาง/ไฟฟ้าระดับต่ำเสี่ยงสูง
- 5: พื้นที่ระดับล่างใช้งานไม่ได้, ต้องพึ่งโครงข่ายยกระดับและทางส่งต่ออื่น

**Water tradeoff:** น้ำท่วมอาจปิดทางผู้ติดเชื้อที่ยังเป็นมนุษย์และว่ายน้ำไม่ไหวในบางพื้นที่ แต่พร้อมกันนั้นทำลายลอจิสติกส์/การเข้าถึงของทีมผู้เล่น ห้ามทำให้น้ำทุกระดับเป็นทางเรือปลอดภัยอัตโนมัติ

### 5.2 Infection simulation (abstract gameplay, not medical model)
State: Unknown exposure → Early symptoms → Neurological symptoms → Crisis → Outcome; ผู้ติดเชื้อภาวะวิกฤตมีรูปแบบก้าวร้าวและนิ่ง/เกร็งตาม Canon และเสื่อมสภาพตามเวลา ไม่ใช่ซอมบี้อมตะ

System inputs: crowding, care capacity, contact incidents, sanitation, observation practices, transport occupancy, delayed reporting; ใช้ค่า abstract risk ที่ไม่ผูกกับเชื้อจริงในโลกปัจจุบัน

Player tools: แยกพื้นที่สังเกตอาการ, ติดตามการส่งต่อ, ให้การดูแล/คัดกรองตามข้อมูลที่มี, แก้การสื่อสาร/ลดความแออัด, ส่งคนไปยังจุดรับช่วงที่พร้อม

**Rules:** ไม่มีเครื่องสแกนพบผู้ติดเชื้อ 100%, การโกรธหรือไม่เชื่อฟังไม่ได้เป็น diagnosis, ผู้ป่วยไม่ถูกทำให้เป็น 'resource' ที่ใช้ทิ้งได้, และการออกคำรับรองผิดข้อมูลมีต้นทุนความเชื่อใจ

### 5.3 Threat simulation
Threat score ต่อ node ไม่ใช่จำนวนผีดิบอมตะ สร้างจากผู้ติดเชื้อที่ยังมีชีวิตและอยู่ในพื้นที่ + เส้นทางเข้าถึง + ข้อมูลที่ไม่แน่นอน; เมื่อเวลาผ่านไปบาง node สงบลงแต่มีคลัสเตอร์ใหม่จากผู้ป่วยรุ่นหลังได้

Defense เป็นการ **หน่วงเวลา/ป้องกันชีวิต/เปิดทางหนี** ไม่ใช่ระบบยิงจนแผนที่ว่างแล้วถือว่าเขตปลอดภัย

---

## 6. City transport and evacuation network

### 6.1 Node–Edge Logistics
Nodes: station, shelter, dock, road transfer, hospital, external receiving site. Edges are typed: rail/BTS, rail/MRT, ARL, road, boat, elevated foot access.

Edge attributes: capacity/hr, trip time, required operators, power, structure inspection, risk, occupancy, transfer bottleneck; transfer node ต้องใช้เวลาและความจุสำหรับเปลี่ยนระบบ

**Evacuation pipeline:** Identify → Contact/Confirm → Access → Move to Hub → Observe/Support → Transport → Receive at Destination → Follow-up/Tracking

นับ `evacuated` เมื่อปลายทางรับช่วงจริง; ขนออกจากจุดเริ่มแล้วแต่ยังไม่มีผู้รับช่วงต้องเป็น `in_transit` หรือ `pending_receipt` ไม่ใช่ success

### 6.2 การกู้คืนสถานี
ตรวจ/ซ่อมสถานีตาม gate:
1. Structure and platform access
2. Electricity / signaling / communications
3. Operating personnel and procedures
4. Passenger management / medical support
5. Verified downstream destination and outbound capacity

Station state: **Unknown → Surveyed → Relief-Only → Transfer Ready → Operational → Stable**; เสี่ยง Regression เมื่อไฟหรือน้ำล้มเหลว

Station ownership: บางฐานทำงานร่วมกับรัฐ บางแห่งมีคณะชุมชน ผู้เล่นต้องมีข้อตกลงและ Trust ไม่ใช่ยึดแล้วผลิตทรัพยากรขึ้นมาเอง

### 6.3 AI dispatch & routing
ผู้เล่นตั้ง priority เช่น `Medical evacuation first`, `Max throughput`, `Lowest risk`, `Preserve supply margin`; AI เสนอเส้นทางพร้อมข้อดี/ข้อเสีย ไม่ตัดสินใจแทนเรื่องจริยธรรม

---

## 7. Reclaim Bangkok: การฟื้นเมือง 5 มิติ

**การกู้คืนเมืองไม่ใช่การฆ่าผู้ติดเชื้อจนหมด แล้วพื้นที่เปลี่ยนสีเป็นเขียว**

สำหรับแต่ละ District กำหนดดัชนี 5 ค่า (0–100):
- `Access`: เข้าออกได้กี่เส้น/ความจุเท่าไร
- `Life Support`: น้ำสะอาด สุขาภิบาล ไฟฟ้า บริการจำเป็น
- `Safety`: ความเสี่ยงจากการระบาด/อาคาร/น้ำ/ความรุนแรง
- `Population Services`: จำนวนคนที่มีการดูแลและที่พักต่อเนื่อง
- `Legitimacy`: ชุมชน/หน่วยงานยอมรับโครงสร้างประสานงานและข้อมูล

District recovery stages:
1. **Unreachable** — ไม่รู้สถานะหรือเข้าถึงไม่ได้
2. **Surveyable** — สำรวจได้แต่ไม่มีบริการต่อเนื่อง
3. **Relief Corridor** — ส่งคน/ของได้เป็นบางช่วง
4. **Stabilized** — มีบริการพื้นฐานขั้นต่ำและการเฝ้าระวังต่อเนื่อง
5. **Restoring** — เริ่มฟื้นกิจกรรมที่จำเป็นและรับคนได้มากขึ้น
6. **Sustained** — มี capacity สำรองและแผน fallback; ยังไม่แปลว่าไร้ความเสี่ยง

**Recovery gates:** การขึ้นสถานะต้องผ่านขั้นต่ำทุกมิติหลัก ไม่อนุญาตให้สร้างถนนอย่างเดียวแล้วได้ `Stabilized` เมื่อไม่มีน้ำสะอาดหรือจุดดูแลผู้ป่วย

**Regression:** เขตที่คืนสภาพแล้วกลับถอยได้หากไฟฟ้าดับ น้ำขึ้น หรือความเชื่อใจล่ม; ผู้เล่นต้องมี redundancy และ reserve

---

## 8. Factions and public trust

Faction examples ภายในจักรวาลสมมติ:
- Emergency Coordination Command — มีลอจิสติกส์/เจ้าหน้าที่แต่ทรัพยากรจำกัด
- Hospital/Medical Network — แพทย์และเครือข่ายผู้ป่วย ต้องรักษาจริยธรรมและกำลังรับ
- Community Councils — รู้พื้นที่และความต้องการ มีเสียงในการใช้ฐาน
- Volunteer Rescue Network — เข้าถึงคน แต่ต้องการอุปกรณ์และความคุ้มครอง
- Independent Settlements — อาจไม่เชื่อข้อมูลจากส่วนกลาง ต้องต่อรองเงื่อนไขที่เป็นธรรม

Relationship stats: `trust`, `obligation`, `reliability`, `information_quality`, `resource_interdependence`.

กลไกการตัดสินใจ: ผู้เล่นไม่สามารถรับคนเพิ่มโดยไม่มีเตียง/อาหารแล้วไม่มีผลลบ, ไม่สามารถปิดข่าวแล้วได้ trust ฟรี, ไม่สามารถขอความช่วยเหลือได้ไม่จำกัดหากไม่รักษาคำตกลง

---

## 9. Story campaign and mission structure

### Prologue: H-08 (Flashback tutorial, พ.ย. 2568)
บริหารจุดช่วยเหลือเล็ก ๆ ระหว่างน้ำท่วมหาดใหญ่ เรียนรู้การนับคน การช่วยเหลือและการรายงานข้อมูล มีข้อสังเกตปริศนาที่ยังไม่เฉลย; ความล้มเหลวในอดีตกลายเป็นคำถามทางระบบในปัจจุบัน

### Act I: The First Shelter — S9 Pho Nimit (DAY 10–14)
ตั้งจุดพักคอยที่ S9 โพธิ์นิมิตร ตาม DEC-001; มีรายชื่อผู้รอดชีวิตต่างจากจำนวนจริง; ซ่อมพลังงานและน้ำ จัดการคัดกรอง ส่งรอบแรก; มีผู้ป่วยแสดงอาการหลังรับช่วง; เกิด crisis of trust

### Act II: Broken Lines (สัปดาห์ 2–3)
เปิด node ใหม่เชื่อมผ่านเส้นทางที่ใช้งานได้; เส้นทางสยามยังไม่ปลอดภัย; จัดการความเสี่ยงการส่งต่อและเมืองชั้นใน; บางฐาน/ชุมชนปฏิเสธให้ใช้ทรัพยากร

### Act III: The H-08 Files (สัปดาห์ 3–5)
ผู้เล่นรวบรวมเอกสารคนละชุดและทะเบียนรับช่วง พบว่าความผิดพลาดเกิดจากสถานะ 'ภารกิจปิด' กลายเป็น 'เหตุสิ้นสุด'; เปิดเผยหรือส่งให้คณะตรวจสอบ พร้อมสร้างระบบตรวจสอบการส่งต่อใหม่; **ไม่ยืนยันต้นกำเนิดเชื้อโดยไม่มีหลักฐาน**

### Act IV: Reconnect the City (สัปดาห์ 5+)
ฟื้นโครงข่ายอย่างน้อยหนึ่งเส้นหลัก พร้อมน้ำ/ไฟ/การแพทย์ให้ย่านสำคัญ และตัดสินใจว่าจะเน้นกู้ใจกลางเมืองหรือสร้างฐานชุมชนกระจาย

### Endgames (ขึ้นกับผลลัพธ์)
- **Humanitarian Corridor:** ระบบอพยพปลอดภัยมากขึ้นและเมืองบางส่วนยังรอการกู้คืน
- **Federated City:** ชุมชนหลายแห่งอยู่รอดด้วยระบบกระจายอำนาจและลอจิสติกส์เชื่อมกัน
- **Central Restoration:** โครงสร้างพื้นฐานเมืองกลับมาบางส่วน แต่ใช้งบ/กำลังมาก ต้องรักษาความเชื่อใจและความจุ
- **Fragile Survival:** ผู้เล่นรักษาฐานได้ แต่เมืองยังแตกเป็นส่วน ๆ และคนจำนวนมากไม่ได้รับการส่งต่อ

ทุกตอนจบต้องแสดงผลต่อประชากรเป็นหมวดตรงไปตรงมา ไม่ให้ผลสำเร็จด้านเมืองกลบจำนวนผู้สูญหาย

---

## 10. Event engine & emergent storytelling

**Event schema:** `id`, `trigger_conditions`, `intel_confidence`, `deadline`, `involved_npcs`, `visible_options`, `resources_required`, `possible_outcomes`, `followup_events`, `log_record`, `cooldown`.

**Examples:**
1. **Missing Names:** จำนวนในอาคารสูงกว่าทะเบียน → ขนได้ช้ากว่าแผน หรือทบทวนความจุและหาปลายทางเพิ่มเติม
2. **False Green Light:** เจ้าหน้าที่โพสต์ว่าเส้นทางปลอดภัยทั้งที่รายงานบอกพร้อมใช้บางส่วน → แก้ทันทีโดยชะลอคิว หรือฝืนใช้และเสี่ยงสูญเสียความเชื่อใจ
3. **Generator vs Pump:** น้ำหนุนพร้อมไฟสำรองต่ำ → เลือกจ่ายไฟให้จุดพยาบาล/ปั๊ม/สื่อสารตามสภาพจริง
4. **Receipts Not Arriving:** ขบวนส่งคนออกแล้ว แต่ปลายทางยังไม่ยืนยันรับ → ติดตามการส่งต่อก่อนจะนับความสำเร็จ
5. **An Old Report:** พบแฟ้ม H-08 สองเวอร์ชัน → เปิด task ยืนยันลำดับเวลาและผู้อนุมัติ ไม่ใช่ปลดล็อกคำตอบทั้งหมดทันที

Event fairness rules: มีสัญญาณเตือนก่อน, ไม่มี outcome แอบเปลี่ยนย้อนหลัง, ทรัพยากร/ความจุเป็นจริงตามระบบ, ไม่มีเลือกแบบ good/evil ที่ผิวเผิน

---

## 11. Example playthrough (สามวัน)

**สถานะสมมติ DAY 10 08:00:** คนอยู่ฐาน 120, แรงงานใช้ได้ 63, ผู้ต้องดูแล 25, น้ำสำรอง 150 units, กำลังผลิตน้ำ 60/day, ความต้องการ 120/day, ไฟ 70/100 capacity, ศูนย์พักคอย 140 เตียง/จุดนอน, คนที่ต้องประสานการอพยพจากอาคารรอบ ๆ ประมาณ 312 ราย (ความมั่นใจปานกลาง)

- **DAY 10:** ผู้เล่นแบ่ง 6 วิศวกรดูแลน้ำกับระบบไฟ / ทีมสำรวจยืนยันรายชื่อ / ทีมเจรจาขอรับช่วง; พายุทำให้เส้นทางเรือหนึ่งเส้นเปลี่ยนสถานะ ผู้เล่นปรับแผนก่อนส่งทีม
- **DAY 11:** ส่งคนรอบแรกสำเร็จ *บางส่วน* แต่สถานะต้องคอยปลายทางเซ็นรับ; ระหว่างนั้นมีผู้ป่วยที่ดูเหมือนปกติเริ่มแสดงอาการ ต้องเพิ่ม capacity เฝ้าดูอาการและแก้คิวส่งต่อ
- **DAY 12:** ปลายทางหยุดรับบางช่วง ฐานเริ่มขาดน้ำและความเชื่อใจ; ผู้เล่นเลือกเพิ่มจุดพักคอยทางเลือก/ขอเสบียง/ตรวจข้อมูลใหม่; ทีมค้นพบว่ารายงาน H-08 มีเอกสารภาคผนวกหายไป

สิ่งที่สำคัญ: เรื่องราวเกิดจาก **สถานะของระบบ**, แต่มี Main Story ช่วยให้ความขัดแย้งและแรงจูงใจของตัวละครชัด

---

## 12. UI/UX information architecture

### Main screen
- **Top bar:** DAY/Time, Simulation speed, Weather/Flood trend, Confidence indicator
- **Left sidebar:** Districts, Nodes, Missions, Logistics, Population, Research, Diplomacy
- **Center:** Colony map (zoom tiles/buildings) / Strategic city graph (toggle)
- **Right context panel:** Selected station/person/convoy with needs, work orders, resource costs, warnings
- **Bottom strip:** Active alerts sorted by deadline & severity; timeline and event log
- **Modal/overlay:** Evacuation planner; power distribution; workforce shifts; evidence board; district recovery scorecard

### Accessibility & trust
- ค่าที่ไม่แน่นอนแสดงเป็นช่วงหรือ confidence ไม่ใช่เลขแม่นปลอม ๆ
- Overlay แยก Flood / Health & Care / Access / Infrastructure / Trust โดยมี legend สม่ำเสมอ
- ไม่ใช้เพียงสีแดง–เขียวในการสื่อสถานะ; ใช้รูปแบบและไอคอนประกอบ
- ระบบสรุปผลการตัดสินใจพร้อมสาเหตุที่ตรวจกลับได้ (Decision Trace)
- ให้ Pause ขณะเปิดเมนูและกำหนดงาน ลด micro-management

---

## 13. Simulation architecture (implementation-neutral)

**Domain entities:** `Survivor`, `Household`, `Job`, `Building`, `UtilityNetwork`, `District`, `TransportNode`, `TransportEdge`, `Convoy`, `HazardEvent`, `Mission`, `Faction`, `EvidenceRecord`, `DecisionRecord`.

**Tick architecture:**
1. Advance weather/flood and infrastructure conditions
2. Recompute access graph and power/water throughput
3. Consume resources and process worker schedules
4. Progress abstract health/care states and crowding
5. Process evacuation receipts and movement
6. Evaluate event triggers and mission updates
7. Recompute district recovery gates and dispatch alerts

**Engineering rules:** deterministic simulation with random seed; save/load restorable; serialized event log; separable UI and simulation core; debug view for resource deltas and route capacity; system-level tests for cascades

**Performance proposal:** NPC full micro-simulationเฉพาะคนในฐานปัจจุบัน/ตัวละครสำคัญ ส่วนที่อยู่นอกสายตาจำลองแบบกลุ่มย่อย เพื่อไม่ต้องคำนวณคนหลายแสนแบบรายคน

---

## 14. Minimum Viable Game / Vertical Slice

**เป้าหมาย:** สนุกและเล่นจบได้ 60–120 นาทีในหนึ่งโซน โดยยังไม่สร้างกรุงเทพฯ ทั้งเมือง

**ฐานพัฒนาปัจจุบันตาม DEC-001:** ใช้ S9 โพธิ์นิมิตรหนึ่งสถานีต่อจาก runtime v0.5 โดยขอบเขตงาน v0.6 อ้างอิง [Engineering Handoff](../06-engineering/LAND_OF_SMILES_ENGINEERING_HANDOFF_v0.5_to_v0.6_TH.md) โมเดลศึกษาใหม่อ้างอิงภาพจริง แต่ตำแหน่งทางเข้าและขนาดที่ยังไม่สำรวจเป็นค่าประมาณ ดู [ชุดโมเดล](../../art/s9-pho-nimit/README.md)

**ข้อเสนอระบบจาก baseline v0.1 — ยังไม่ใช่ feature ที่ส่งมอบหรือ scope v0.6 ที่อนุมัติครบชุด**
- One local colony map: S9 โพธิ์นิมิตรและบริบทสมมติเพื่อเกม (ข้อเสนอเดิมมี 3 อาคาร + จุดเรือ + ทางเชื่อม; ต้องกำหนดใหม่ตามหลักฐานพื้นที่และ gameplay ไม่ใช่ข้อเท็จจริงของสถานี)
- Strategic graph 5 nodes: Hub, Apartment, Riverside Dock, Receiving Center, Contested Station
- 40–120 NPC simulated via cohorts + 8–12 named agents
- 7–9 critical resources/capacities; jobs, shifts, health/observation, morale/trust
- Flood level 0–5 with 3 scenarios; power/pump chain; infection abstract 2 behavioral types
- 1 evacuation route chain with receipt confirmation; 3–5 missions; 6–8 dynamic events
- 1 district recovery gate system; 1 narrative result screen; save/load

**Explicitly out of scope:** open-world Bangkok 1:1, full rail driving simulation, 3D shooter mode, advanced diplomacy of dozens of factions, multiplayer, detailed sewer hydraulics, procedurally generated 3D city, fully autonomous LLM NPCs

**Prototype acceptance criteria**
1. ผู้เล่นเข้าใจภายใน 10 นาทีว่าต้องบริหารอะไรและเส้นตายคืออะไร
2. ผู้เล่นสามารถวางแผนให้ผ่านวิกฤตอย่างน้อย 2 วิธีที่มี trade-off จริง
3. การดับไฟทำให้สูบน้ำหรือระบบสื่อสารเปลี่ยนสถานะตาม dependency
4. คนถูกนับ `evacuated` เฉพาะเมื่อปลายทางรับช่วง; ห้ามจำนวนหายจาก ledger
5. น้ำเปลี่ยน access graph อย่างมองเห็นได้; เส้นทางเดิมมีโอกาสปิด
6. อาการช่วงแรกไม่ถูกบอกว่าติดเชื้อแน่ 100%; อารมณ์โกรธไม่เท่ากับติดเชื้อ
7. เมืองกู้คืนไม่ได้ถ้าขาด basic services แม้ลด threat แล้ว
8. มี telemetry ของภารกิจ/ทรัพยากร/ความพ่ายแพ้เพื่อใช้ปรับสมดุล

---

## 15. Development roadmap (ไม่มีการประมาณงบและเวลาโดยขาดข้อมูลทีม)

- **P0 Paper prototype:** spreadsheet/board state; ทดลอง 15–20 turns, สร้าง resource ledger + route capacity + event deck
- **P1 Simulation sandbox:** graph + NPC cohorts + flood/infrastructure dependencies + deterministic save/replay
- **P2 Playable colony:** isometric placement, task priorities, workers, UI layers, feedback
- **P3 Vertical slice campaign:** missions 3–5, H-08 clue, evacuation, two ways to resolve crisis, analytics
- **P4 City strategy expansion:** multiple bases, transportation network, faction trust, district recovery gates
- **P5 Content & Polish:** sound/visual identity, scenarios, localization, balancing, accessibility, performance

**Engine suggestion (conditional):** Godot เหมาะกับต้นแบบ 2D/2.5D ขนาดเล็กและแยก Simulation Core ออกจาก UI ได้; Unity ก็เป็นทางเลือกสำหรับ pipeline asset/team ที่มีอยู่แล้ว ควรเลือกจากทีมและ target platform ไม่ใช่จากความนิยมเพียงอย่างเดียว

---

## 16. KPI สำหรับประเมินว่าเกมออกแบบดีจริงหรือไม่

**Gameplay quality:** time to first meaningful decision, percentage of players understanding evacuation ledger, % of runs where flood changes plan, event diversity, alternative valid strategies, repeated task clicks/day, time in pause, regret clarity (understands why loss occurred)

**World sustainability:** survivor continuity, safety coverage by region, shortages, base redundancy, evacuation confirmation, return/relapse rates of recovered districts

**Narrative:** clarity of H-08 mystery, number of consequential NPC arcs, whether players perceive different faction viewpoints without simple villain framing

**Fun hypothesis:** “ทุกวันฉันช่วยคนได้มากขึ้น แต่การตัดสินใจของฉันทำให้โลกเปลี่ยนและต้องปรับแผน ไม่ใช่มีแค่บาร์อาหารลดแล้วกดสร้างฟาร์มเพิ่ม”

---

## 17. Key design decisions pending

1. เล่นในฐานเดียวแล้วส่งทีมเป็นภารกิจ หรือควบคุมหลายฐานพร้อมกันตั้งแต่กลางเกม? **แนะนำเริ่มฐานเดียว ต่อด้วย hub network**
2. โลกเป็น top-down 2D หรือ isometric 3D? **แนะนำ 2.5D isometric เพื่อทำ vertical slice ได้**
3. มีการต่อสู้รายละเอียดระดับ squad หรือเป็น abstract encounter? **แนะนำ abstract + visible defensive positioning; ไม่ใช่ RTS ยิงซอมบี้**
4. ระดับความโหดของเกม? **แนะนำค่า default เห็น forecast, pause ได้, ความสูญเสียมีความหมายแต่ไม่ arbitrary**
5. Endgame จบเมื่อใด? **แนะนำ 45–90 วันใน Campaign, เล่นต่อ Sandbox ได้**
6. H-08 ต้องเฉลยต้นตอเลยหรือไม่? **แนะนำแยก “ผู้รับผิดชอบต่อข้อมูลที่หายไป” กับ “ต้นกำเนิดเชื้อ”**

---

## 18. One-page feature priority (MoSCoW)

| Priority | Systems |
|---|---|
| Must | Resource ledger; survivor cohorts and named NPC; building capacity; workforce scheduling; flood access; evacuation ledger; critical infrastructure; basic event system; district recovery gates; pause/time control; save/load |
| Should | Faction trust; dynamic logistics graph; H-08 investigation; district-specific events; worker fatigue and relationships; better power distribution |
| Could | Rooftop agriculture detail; procedural interior variation; complex economy; multiple settlement policies; deep squad tactics |
| Won't v0.1 | Full 1:1 Bangkok, multiplayer, driveable rail network, first-person mode, fully autonomous LLM NPC, high-fidelity 3D destructible city |

**Final principle:** เมืองกู้คืนได้เพราะประชาชนมีบริการและเส้นทางที่เชื่อถือได้ ไม่ใช่เพราะเครื่องหมายบนแผนที่กลายเป็นสีเขียว
