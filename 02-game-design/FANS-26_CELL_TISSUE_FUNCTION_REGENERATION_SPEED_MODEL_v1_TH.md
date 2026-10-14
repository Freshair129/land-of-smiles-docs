# GD-FANS-004 — Regeneration Speed: Cell / Tissue / Function
## การแบ่งเซลล์ การสร้างเนื้อเยื่อ และการฟื้นคืนสมรรถนะของผู้ติดเชื้อ FANS-26

**Game:** Land of Smiles · Campaign 01: Bangkok Outbreak  
**Status:** Draft / Fictional Game-Balance Proposal · ยังไม่ใช่ Canon ที่ได้รับอนุมัติ  
**Updated:** 2026-10-14  
**Depends on:** [GDD §5](LAND_OF_SMILES_GDD_v1_TH.md), [GD-FANS-001](FANS-26_DUAL_AGENT_BEHAVIOR_SPEC_TH.md), [GD-FANS-003](FANS-26_REGENERATIVE_INSTABILITY_VARIANTS_SPEC_v1_TH.md)  
**Decision:** DEC-010 (new); also DEC-007/008/009 pending

> **Design principle:** เซลล์แบ่งตัวเร็ว ≠ เนื้อเยื่อที่สร้างใหม่ถูกโครงสร้าง ≠ อวัยวะกลับมาทำงานได้ การเร่งการซ่อมแซมจึงต้องจ่ายต้นทุนทรัพยากร มีระยะเวลา และมีโอกาสฟื้นผิดรูป
>
> เอกสารนี้เป็น **แบบจำลองเกมแนว speculative horror** ไม่ใช่แนวทางสร้างไวรัส ปรสิต หรือเร่งแบ่งเซลล์ในห้องปฏิบัติการ และตัวเลขค่าสถานะของเกมไม่ได้มาจากการทดลองในคน

---

## 1. Scientific evidence ledger / สิ่งที่วิจัยรองรับ

| ระบบ / สิ่งมีชีวิต | ตัวเลขรายงาน | วัดอะไร | ข้อจำกัดในการเทียบ |
|---|---|---|---|
| ตัวอ่อนแมลงหวี่ช่วงแรก | **~8 นาที/รอบ** | รอบแบ่ง **นิวเคลียส** ภายในไซโทพลาสซึมร่วม | ยังไม่แบ่งเป็นเซลล์สมบูรณ์ จึงห้ามใช้เป็นอัตราสร้างเนื้อเยื่อ |
| แบคทีเรีย *Vibrio natriegens* | **9.4 นาที** | doubling time ของประชากรภายใต้สภาพทดลองที่เหมาะสม | คนละระบบกับเซลล์สัตว์และอวัยวะมนุษย์; ไม่ใช่ความเร็วที่คงอยู่ตลอดชีวิต |
| ตัวอ่อนปลาม้าลาย | **~15 นาที/รอบ** | รอบ cleavage ช่วงเริ่มตัวอ่อน | เซลล์ตัวอ่อนต่างจาก adult somatic cells และไม่ได้หมายความว่าสร้างอวัยวะเสร็จใน 15 นาที |
| Burkitt lymphoma | **~24–48 ชั่วโมง** | tumor volume doubling time ที่รายงานโดยประมาณ | ขนาดก้อนเพิ่มเป็นสองเท่าไม่ใช่อัตรา cell cycle ของแต่ละเซลล์ และไม่เท่ากับการซ่อมแผล |
| เซลล์สัตว์เลี้ยงลูกด้วยนม (ตัวอย่างอ้างอิง) | **24 ชั่วโมง** | reference cell-cycle time เพื่อเปรียบเทียบเชิงการสอน | ไม่ใช่ค่าเฉลี่ยของทุกเซลล์ บางชนิดเร็วกว่ามากหรือหยุดแบ่งเป็นเวลานาน |

**Evidence references:**
- Drosophila, *Molecular Biology of the Cell*, NCBI Bookshelf: https://www.ncbi.nlm.nih.gov/books/NBK26906/
- V. natriegens, Hoffart et al., *Applied and Environmental Microbiology* (2017): https://pmc.ncbi.nlm.nih.gov/articles/PMC5666143/
- Zebrafish embryonic cleavage review: https://pmc.ncbi.nlm.nih.gov/articles/PMC4276564/
- Burkitt tumor doubling, *The Oncologist*: https://academic.oup.com/oncolo/article/11/4/375/6397059
- NIGMS, typical animal cell cycle and variation: https://www.nigms.nih.gov/image-gallery/1310

### ตัวอย่างการฟื้นอวัยวะ: ต้องแยกจากเวลารอบเซลล์

| Organism | เวลาประมาณ | สิ่งที่ฟื้น | ข้อควรระบุ |
|---|---|---|---|
| Hydra | ~48–72 ชั่วโมง | ส่วนหัวและหนวดพัฒนากลับหลังถูกตัด | มีการจัดโครงสร้างเซลล์ ไม่ใช่การเพิ่มจำนวนอย่างเดียว |
| Planarian | ~7 วัน | โครงสร้างบริเวณหัวในบางการทดลอง | neoblasts และการเปลี่ยนชะตา/การจัดตำแหน่งเซลล์สำคัญ |
| Juvenile axolotl | ~40–50 วันเป็นค่าประมาณทั่วไป | แขน/ขาบางบริบท | ขึ้นกับอายุ ขนาด เกณฑ์นับว่าฟื้นครบ และเงื่อนไขทดลอง; มีรายงานการทดลองที่ถึงระยะนิ้วเฉลี่ย ~13 สัปดาห์ |
| Human liver after partial hepatectomy | หลายสัปดาห์–ราว 3 เดือนหรือมากกว่า | ฟื้น **มวล** และการทำงานบางส่วน | ไม่ใช่งอกกลีบเดิมเหมือนสัตว์ regenerate แขน; ปริมาณเนื้อเยื่อและสมรรถนะไม่ได้ฟื้นพร้อมกันเสมอ |

**Sources:** Hydra https://pmc.ncbi.nlm.nih.gov/articles/PMC7116057/ · Planarian https://www.nature.com/articles/s41467-023-39016-0 · Axolotl https://ambystoma.uky.edu/education/19-fun-facts-cat/71-how-long-does-it-take-for-a-salamander-to-regenerate-a-limb และ https://pmc.ncbi.nlm.nih.gov/articles/PMC5677943/ · Human liver https://pmc.ncbi.nlm.nih.gov/articles/PMC7665117/

---

## 2. Three independent rates

### 2.1 CPM — Cell Proliferation Multiplier

`CPM` = อัตรารอบการแบ่งตัวของ **reference cell cycle** ที่เลือกสมมติว่าเป็น 24 ชั่วโมง เมื่อเทียบกับ reference เดียวกันเท่านั้น

- ใช้เพื่อกำหนด **ศักยภาพการสร้างเซลล์** ใน fiction ไม่ใช่อัตราการงอกอวัยวะ
- `fictional_reference_cycle_minutes = 1,440 / CPM` เป็นตัวเลขเปรียบเทียบทางคณิตศาสตร์ ไม่ใช่เวลาจริงของเซลล์มนุษย์หลังติดเชื้อ
- `CPM=180` ให้รอบเทียบเท่า **8 นาที** แต่ยังไม่ได้แปลว่าสร้างเนื้อเยื่อพร้อมใช้งานได้ใน 8 นาที
- ห้ามนำข้อมูลการแบ่งนิวเคลียสของแมลงหวี่หรือแบคทีเรียมาใช้เป็น *evidence* ของ CPM มนุษย์ที่ติดเชื้อ

### 2.2 TRR — Tissue Reconstruction Rate

`TRR` = **เพดานอัตราการซ่อมแซมเทียบเท่ามวลเนื้อเยื่อ (กรัม/นาที)** เฉพาะช่วง cinematic overdrive ที่กำลังทำงาน ไม่ใช่ปริมาณมวลใหม่สุทธิที่ได้จริงเสมอไป

- ความเสียหายบางส่วนปิดแผล/ปรับรูปได้โดยการเคลื่อนตัวและจัดโครงสร้างเนื้อเยื่อเดิม ไม่จำเป็นต้องเป็นมวลที่เพิ่มจากศูนย์
- เนื้อเยื่อที่ทำงานได้จริงขึ้นกับการไหลเวียน ออกซิเจน โครงสร้างและระบบประสาท ไม่ใช่ TRR อย่างเดียว
- `effective_TRR` ต้องถูกจำกัดพร้อมกันโดย **wound size, local tissue capacity, hydration, energy, nutrient budget, oxygen/perfusion, burst duration** และระดับความผิดรูป (แบบจำลอง abstract สำหรับเกม)
- เมื่อ resource debt สูงหรือต้องใช้การจัดโครงสร้างมากกว่าที่ทำได้ ผลจะเป็น scar / instability / partial closure ไม่ใช่เนื้อเยื่อสุขภาพดี

### 2.3 FIR — Functional Integration Rate

`FIR` = **percentage points ของความสามารถที่สูญเสียไปซึ่งฟื้นคืนต่อหนึ่งนาทีเกม** เฉพาะเวลาที่เนื้อเยื่อซึ่งเกี่ยวข้อง **พร้อมทางโครงสร้าง** และยังมีระบบประคองอยู่

- `FIR` ไม่เท่ากับ % ของสภาพปกติที่คืนทันที; การซ่อมหนังสำเร็จไม่ได้ทำให้แขนที่เส้นประสาทเสียใช้งานทันที
- ให้แยก `anatomical_repair`, `circulation_status`, `neural_connection_status`, `functional_recovery`
- **สมองและความทรงจำ:** การเพิ่มเซลล์ใหม่ไม่ได้ฟื้น network หรือประสบการณ์เดิมอัตโนมัติ; FIR ของความทรงจำ = **0** ใน baseline Canon
- ความเสียหายระดับวิกฤต เช่น ขาดออกซิเจนต่อเนื่อง/ไหลเวียนล้มเหลว/อวัยวะสำคัญทำลายรุนแรง สามารถทำให้ตายก่อนซ่อมทัน

### นิยามสรุปในระบบเกม

```text
Cell proliferation potential (CPM)
            |
            v
Tissue reconstruction capacity (TRR)
      |        |       |
      v        v       v
   hydration  energy  perfusion / structure
      \        |       /
       \       v      /
        functional integration (FIR)
                   |
                   v
       real movement / recovered ability
```

**Invariant:** `FIR` ไม่ถูกนำไปคูณ `CPM` หรือ `TRR` ตรง ๆ; ชั้นต่าง ๆ ไม่ใช้ multiplier ตัวเดียวกัน

---

## 3. Mathematical reference (illustrative, not host prediction)

สำหรับประชากรเซลล์ในแบบจำลองอุดมคติ `N(t) = N0 × 2^(t/Td)` โดย `Td` คือ doubling time ที่ใช้หน่วยเดียวกับ `t`

- `N0 = 1,000`, `Td=15 นาที`, `t=120 นาที` → 8 รอบ → **256,000 เซลล์**
- `growth_rate μ = ln(2) / Td` โดย `μ` มีหน่วยเป็น inverse time (เช่น minute⁻¹)
- `Td` ใช้กับการเพิ่มจำนวนประชากรโดยรวม ขณะที่ `cell cycle time` คือรอบของเซลล์เดี่ยว; สองค่านี้อาจไม่เท่ากันหากเซลล์ตาย พักการแบ่ง หรือแบ่งแบบไม่พร้อมกัน
- ตัวอย่างนี้สมมติ **ไม่มีเซลล์ตาย ไม่มีข้อจำกัดสารอาหาร และเป็นการทวีคูณสม่ำเสมอ**; จึงไม่ใช่แนวโน้มที่คงอยู่จริงในเนื้อเยื่อมนุษย์

## 4. Five regeneration tiers — proposed cinematic burst capacity

> **กติกาสำคัญ:** ตารางข้างล่างเป็นตัวเลขเกมที่เสนอโดยทีม ไม่ใช่อัตราที่เคยวัดในคนหรือสัตว์จริง และ **TRR ที่แสดงคือเพดาน burst** ไม่ใช่การเพิ่มเนื้อเยื่อสุทธิอย่างต่อเนื่องทุกนาที

| Regeneration tier | CPM | Reference cycle equivalent | Peak TRR equivalent | Proposed FIR (pp/min during eligible integration) | Narrative purpose |
|---|---:|---:|---:|---:|---|
| **RG-I / Limited** | 5× | 288 นาที | 0.1 g/min | 0.01 | แผลเล็กมีการปิดเร็วผิดปกติ |
| **RG-II / Active** | 20× | 72 นาที | 1 g/min | 0.03 | แผลลึกเริ่มสมานเร็ว แต่ยังเสียสมรรถนะ |
| **RG-III / Overdrive** | 60× | 24 นาที | 5 g/min | 0.08 | ภาพการซ่อมรุนแรงและ resource debt ชัด |
| **RG-IV / Critical** | 120× | 12 นาที | 20 g/min | 0.15 | Burst สูงมากและเกิดการฟื้นผิดรูปได้ |
| **RG-V / Unstable** | 180× | 8 นาที | 50 g/min | 0.30 | เพดานแฟนตาซี / วงจร over-regeneration |

**FIR units:** `pp/min` = percentage points ต่อนาทีของ **functional deficit ที่ฟื้นคืนได้** เมื่อ anatomy พร้อม ไม่ใช่การฟื้นทั้งตัว 0.30% ต่อ นาทีโดยไม่มีเงื่อนไข

### 4.1 ทำไม 50 g/min ต้องถูกจำกัด

`50 g/min × 60 min × 24 h = 72,000 g/day = 72 kg/day` ซึ่งเป็นมวลเนื้อเยื่อ **เกินความสมเหตุสมผลอย่างรุนแรง** ถ้าตีความว่าร่างกายสร้างเนื้อใหม่สุทธิต่อเนื่อง

**Policy ของเกม:**
1. TRR นี้เป็น *burst upper limit equivalent* ของการแสดงอาการ ไม่ใช่ regenerative yield จริงทั้งตัว
2. **Burst duration, resource ceiling, local wound ceiling และ structural readiness** ต้องบังคับใช้เสมอ
3. ค่ามวลที่สร้างจริง (net new tissue) ต้องอยู่ภายใต้ ledger ของทรัพยากรและความเสียหายจริง; หากเกินข้อจำกัด ให้ผลเป็น partial closure, structural failure หรือ collapse
4. RG-V **ไม่เท่ากับผู้ติดเชื้อทุกตัว** และไม่ใช่ข้ออ้างให้ผู้ติดเชื้อฟื้นจากการตาย/งอกแขนภายในไม่กี่นาที

ตัวเลข 20–50 g/min จึงเหมาะเป็น **designer target เพื่อดูว่าต้องลดค่าแค่ไหนหลัง playtest** มากกว่าค่าที่พร้อม ship สำหรับระบบฟื้นฟูแบบสมจริง หากต้องการเน้น realism ให้ใช้การปิดแผลและการคงหน้าที่บางส่วนเป็นภาพ มากกว่าการเพิ่มมวลเนื้อเยื่อปริมาณมาก

## 5. Tier versus Variant — ห้ามผูกกันแบบ one-to-one

- **RG-I..V = regeneration intensity**, เป็น state/progression ของผู้ติดเชื้อที่เกิดได้ตามเงื่อนไขของตัวละคร ไม่ใช่ species ใหม่
- **VT-01..05 = infected phenotype** จาก GD-FANS-003 ได้แก่ Fever Runner, Overgrown, Fibrotic, Aberrant, Drowned Seeker
- ผู้ติดเชื้ออาจอยู่ RG-II แต่เป็น VT-04 (Aberrant) จากการฟื้นผิดรูปสะสม; ส่วน VT-01 (Fever Runner) อาจมี RG-I หรือ RG-III แตกต่างได้
- **สัดส่วน New Type 8% ต่อ Stage-3 100 คน ใน 21 วัน** ใน GD-FANS-003 ยังไม่เปลี่ยน ตาราง RG-I..V ไม่ใช่ตารางเพิ่มประชากร 5 กลุ่ม
- ระดับ RG-V **ไม่รับประกันการวิวัฒนาการ**; เพิ่ม resource debt / tissue instability และเพิ่มโอกาส failure ได้พร้อมกัน
- Blood-Seeker จาก Lore เดิมยังเป็น behavioral phenotype ที่ไม่ต้องนับเพิ่มเป็น VT ใหม่

## 6. Resource Debt: the real regulator

```text
INJURY
   |
   v
REPAIR DEMAND (CPM potential)
   |
   +--> TISSUE RECONSTRUCTION (TRR upper bound)
   |          |
   |          +--> WATER / ENERGY / NUTRIENTS consumed
   |                         |
   |                         v
   |                   PHYSICAL THIRST
   |                         |
   |                         v
   |                 WATER-SEEKING BEHAVIOR
   |
   +--> STRUCTURE & CONNECTIONS
                  |
                  v
        FUNCTIONAL RESTORATION (FIR)
                  |
                  v
             RESIDUAL DAMAGE

Excess demand, poor perfusion or low reserves
        -> Regeneration Debt -> instability / failed repair / attrition
```

**Narrative consequences:**
- บาดแผลที่เริ่มปิดไม่ได้บอกว่าข้างในสมบูรณ์
- ผู้ติดเชื้อบางรายยังเคลื่อนไหวได้เพราะตอบสนองต่อปวดน้อย แต่เนื้อเยื่อและกระดูกยังเสียหายจริง
- ยิ่งมีความเสียหายซ้ำ ความต้องการน้ำในเรื่องยิ่งสูง แต่ไม่มีเงื่อนไขว่า “บาดเจ็บมาก = กลายพันธุ์ได้พลังเพิ่มแน่นอน”
- ขาดออกซิเจน/เลือดไปเลี้ยง หรือทรัพยากรต่ำจนล้มเหลว → ตายได้ก่อนการฟื้นฟู
- สมองส่วนหน้าที่เสียหายและความจำที่สูญเสียไม่กลับมาเพียงเพราะ CPM สูง

## 7. Integration with GD-FANS-003 — instability and variant funnel

Keep existing cohort targets:
- Stage 3 baseline 100 → hyper-agitated 70 + catatonic 30
- Of the hyper group, 50 typical; 20 instability-eligible → 12 failed/unstable + 8 New Types (standard expectation)
- Do **not** treat `RG-V` as 8% of all infected; regeneration tier and mutation outcome are distinct axes

**Game abstraction:** Increased repair demand may increase resource debt; repeated repair stress may raise tissue instability if circumstances warrant. But starving the host or disabling circulation lowers actual recovery and increases failure/collapse; it never causes a guaranteed upgraded enemy.

**Decision bridge:**
- DEC-007: two-agent lore hypothesis
- DEC-008: overdrive ability/resource limits
- DEC-009: variant incidence 8% and taxonomy
- **DEC-010: three-rate system CPM/TRR/FIR, tier ceilings, and explicit resource/perfusion gates**

## 8. Game-facing numeric safety rails (MVP proposal)

1. **Hard cap on burst duration:** define per encounter from design tuning, not a biological constant; do not allow unlimited continuous TRR.
2. **Net tissue ledger:** `net_tissue_added` cannot exceed the available deficit and abstract resources; do not simulate microscopic biology.
3. **Eligibility:** only some anatomical areas can recover; nerve pathways and complex organs may remain permanently damaged.
4. **FIR gating:** function cannot recover until needed anatomical structures and perfusion are satisfactory.
5. **Degradation:** repeated overdrive causes escalating resource debt and progressively more imperfect repair rather than unbounded healing.
6. **No resurrection:** loss of breathing/circulation beyond the game's death boundary terminates NPC irrespective of CPM.
7. **Readable feedback:** communicate “wound closure”, “tissue stability”, and “functional ability” separately when relevant.
8. **Difficulty neutral:** increasing difficulty does not silently replace the source research numbers or violate stage-3 demographics.

## 9. Acceptance Criteria / Verification

- [ ] AC-01. `CPM=180` relative to 24h yields 8-minute *comparison cycle*, not “full tissue replacement in 8 minutes”.
- [ ] AC-02. `N0=1,000`, `Td=15min`, `t=2h` ideal equation yields 256,000 (math test).
- [ ] AC-03. TRR burst ≠ net tissue growth; resource and wound ceiling bind output.
- [ ] AC-04. RG-V 50 g/min cannot run continuously for a day and cannot create 72kg new tissue.
- [ ] AC-05. Functional recovery never leads anatomical reconstruction; FIR gated by structure/perfusion.
- [ ] AC-06. High CPM does not restore destroyed memory/complex frontal-lobe networks.
- [ ] AC-07. A low-resource host can close a superficial wound partially but suffers increased debt and eventually diminished function.
- [ ] AC-08. Critical failure/death remains fatal; no resurrection or underwater breathing.
- [ ] AC-09. Regeneration tier and VT phenotype tracked independently, no overwrite of 8% variant incidence.
- [ ] AC-10. All tier numbers marked fictional balance and all real cross-species figures labeled with precise measurement type.
- [ ] AC-11. State persists through save/load; no repair burst reroll to evade resource cost.
- [ ] AC-12. Playtest logs record intensity tier, burst time, wound closure, functional recovery, resource debt, and post-burst attrition distinctly.

**Verification gate:** Source review → Narrative approval → Game Design numbers approval (DEC-010) → Implementation only after separate tickets → Seeded QA with replayable telemetry. This file alone does not prove runtime behavior.

---

**Boundary statement:** Any mechanism by which a real pathogen would alter stem cells, cell-cycle checkpoints, metabolic pathways, or host immunity is intentionally outside this game's technical specification. The model only describes fictional NPC outcomes and gameplay-state tradeoffs.
