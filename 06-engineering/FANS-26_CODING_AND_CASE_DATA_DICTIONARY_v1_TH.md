# FANS-26 — Coding & Case Data Dictionary
## โครงสร้างรหัสมาตรฐานภายในจักรวาล Land of Smiles

**Doc ID:** LOS-DATA-FANS26-001  
**Version:** 1.0 · 2026-10-14  
**Status:** Draft · proposed data contract; **not implemented**  
**Related:** [Clinical Case Definition](../03-narrative/FANS-26_CLINICAL_CASE_DEFINITION_v1_TH.md), [Infected Type Classification](../02-game-design/FANS-26_INFECTED_TYPE_CLASSIFICATION_v1_TH.md)

## 1. หลักการจาก WHO: ใช้โครงสร้าง ไม่เลียนรหัสของจริง

ICD-11 เป็นระบบจัดประเภทโรคจริงแบบมีโครงสร้าง: **stem code** อธิบาย entity หลัก และ **extension code** เพิ่มลักษณะประกอบภายใต้กติกาของ ICD-11; code ไม่ใช่ตัวอักษรย่อที่คนอ่านแล้วเข้าใจโรคทุกหลักอัตโนมัติ การตั้งชื่อโรคใหม่ตามคำแนะนำ WHO ควรบรรยายอาการและหลีกเลี่ยงการตีตราสถานที่/บุคคล. Case definitions อิง clinical/epidemiological/lab evidence และบริบท person–place–time.

**ข้อกำหนด:** รหัส `LOS-*` ทั้งหมดเป็นของเกม เป็นชุดชื่อ/ป้ายแสดงผลจำแนกข้อมูล ไม่ใช่รหัสที่ WHO ออกให้ และห้ามใช้เป็นค่า `icd11_code` ของซอฟต์แวร์จริง

## 2. Registry ที่ต้องใช้ร่วมกัน

| Axis | Allowed values | ความหมาย | Source |
|---|---|---|---|
| `disease_code` | FANS26 | Syndrome สมมติ ปี 2026 | Narrative |
| `case_class` | C00 / C10 / C20 / C30 / C40 | Under investigation / suspected / probable / confirmed conditional / excluded | Clinical |
| `clinical_stage` | S01–S04 / unknown | Disease progression | Canon |
| `clinical_severity` | SV00–SV03 | Unknown / mild / moderate / severe | Triage |
| `phenotype` | VT00–VT05 / unknown | Game variant / unclassified | Game Design |
| `regeneration_tier` | RG01–RG05 / unknown | Regeneration intensity | GD-FANS-004 |
| `behavior_overlays` | BH-WS / BH-AG / BH-CAT / BH-BS / BH-RD | Multi-value behavior flags | Game Design |
| `historical_file` | H-08 | Past outbreak dossier | Narrative |
| `pathogen_hypothesis` | P-08 / V-26 / unknown | Parasite/virus proposal; DEC-007 open | Lore |

**Namespace collision caution:** H-08 ≠ P-08; V-26 ≠ VT-xx. เลขท้าย 26 ของ FANS-26 เป็นปี ไม่ใช่จำนวนเชื้อหรือ mutation tier

## 3. Composite display code (mutable, NOT primary key)

`LOS-FANS26-C20-S03-SV02-VT02-RG04`

| Token | Meaning |
|---|---|
| LOS | Land of Smiles internal universe |
| FANS26 | In-fiction syndrome |
| C20 | Probable case classification |
| S03 | Disease stage 3 |
| SV02 | Moderate severity |
| VT02 | Overgrown phenotype |
| RG04 | Tier IV regeneration |

**ใช้เป็น label ใน UI หรือรายงานเท่านั้น:** สถานะ C/S/SV/VT/RG เปลี่ยนเมื่อพบหลักฐานใหม่ได้ จึงห้ามใช้ label เป็น patient ID, save key, database primary key หรือ checksum; ให้ใช้ `patient_id` ที่ไม่เปลี่ยน และเก็บแต่ละ axis เป็นฟิลด์แยก

## 4. Example in-game record (not medical data)

```json
{
  "patient_id": "example-stable-actor-id",
  "disease_code": "FANS26",
  "case_class": "C20",
  "clinical_stage": "S03",
  "clinical_severity": "SV02",
  "phenotype": "VT02",
  "regeneration_tier": "RG04",
  "behavior_overlays": ["BH-AG", "BH-RD"],
  "symptom_codes": ["SYM-FVR", "SYM-THR", "SYM-WFX"],
  "case_definition_version": "1.0",
  "taxonomy_version": "1.0",
  "reporting_site": "S9-Pho-Nimit",
  "first_seen_at": "2026-10-12T09:00:00+07:00",
  "reviewed_at": "2026-10-12T13:00:00+07:00",
  "classification_basis": "fictional observations and cluster evidence",
  "reviewer_role": "shelter-medical-team",
  "classification_history": [
    {"at": "2026-10-12T09:00:00+07:00", "from": "C00", "to": "C10"},
    {"at": "2026-10-12T13:00:00+07:00", "from": "C10", "to": "C20"}
  ],
  "transfer_status": "under_observation",
  "scripted_for_tutorial": false
}
```

`classification_basis` เป็นข้อความตัวอย่างเนื้อเรื่อง ไม่ใช่ผลตรวจที่เกิดขึ้นจริงใน runtime; C30 ยังต้องนิยามวิธีอ้างอิงสมมติเพื่อยืนยันตาม DEC-011

## 5. Independent axes and data relationships

- `patient_id` 1 → many `observations`; แต่ละรายการเก็บ `symptom_code`, `observed_status` (present/absent/not-assessed/unknown), `source`, `observed_at`, `confidence`
- `patient_id` 1 → many `classification_events`; status ปัจจุบันชี้ไปยัง event ล่าสุด ไม่ลบ event ก่อน
- `patient_id` 1 → 0..1 current stage, current severity, primary VT phenotype, RG tier (unknown allowed)
- `patient_id` 1 → many overlays / zone transfers
- `patient_id` 1 → at most one death event in Canon; ไม่มีฟื้นคืนชีพ

**Game-state vs observer-state:** simulation อาจรู้ว่า actor ติดเชื้อ แต่ UI ของเจ้าหน้าที่ในโลกเรื่องต้องแสดงเฉพาะหลักฐานที่สังเกต/ได้รับอนุญาต ไม่แสดง omniscient hidden flags

## 6. Calculation and counting discipline

- Case status report แยก `new_suspected`, `new_probable`, `new_confirmed`; อย่าบวกทั้งหมดเป็นจำนวนคนโดยตรง เพราะคนเดิมอาจเลื่อนสถานะ
- Infected Type **8%** คือ New Types **ต่อผู้เข้าสู่ Stage 3 จำนวน 100 คนใน 21 วัน**; 2+2+2+1+1=8 ไม่ใช่ประชากรทั่วไป
- 70% hyper / 30% catatonic = Stage-3 base profiles; 8 VT and 12 failed เป็น subset ของ 70, ไม่สร้างเพิ่ม
- Active prevalence ของ VT ในพื้นที่ใดเวลาหนึ่งอาจต่ำกว่า cumulative incidence เพราะคนตายหรือย้ายพื้นที่
- BH-BS เป็น overlay ไม่ใช่ VT06 ไม่เพิ่มจำนวน variant
- Unknown ≠ negative; negative ≠ ruled-out หากหลักฐานยังมีข้อจำกัด

## 7. Interoperability, privacy, and versioning

- Registry versioned: `case_definition_version`, `taxonomy_version`, `source_document_version`
- เปลี่ยน label/threshold ในอนาคตต้อง migration + audit; ห้าม silent reinterpret ประวัติ
- ใช้ immutable ID เชื่อมสถานีส่งต่อ โดยตรวจว่าได้รับคนปลายทางจริง
- UI สาธารณะใช้ข้อมูลรวม ไม่เปิดข้อมูลระบุตัวผู้ป่วย
- ไม่มี mapping ไปยัง ICD-11 ของ WHO จนกว่าจะเป็นโรคจริง (ซึ่ง FANS-26 ไม่ใช่)
- ชื่อสถานที่ H-08 เป็นแฟ้มเหตุในโลกนิยาย ไม่ใช่การกล่าวโทษพื้นที่หรือผู้คนจริง

## 8. Acceptance & quality gates

- [ ] Code parser accepts registered values and rejects non-registered S05, VT07, RG09
- [ ] C10→C20 keeps same patient ID and immutable audit events
- [ ] Clinical stage/severity/type/RG independent; VT02 does not auto-confirm C30
- [ ] Stage 3 50+12+8+30=100 and VT 2+2+2+1+1=8
- [ ] Unknown symptom data not interpreted as negative
- [ ] C30 absent until fictional in-universe confirmation reference is approved
- [ ] Save/load and station transfer preserve history, consent controls and versions
- [ ] No duplication in public surveillance report
- [ ] Exports never label LOS code as a real WHO ICD code

**Pending DEC-011:** registry governance, disease name, in-world lab confirmation, case data-sharing rights, and version migration; this contract is draft-only and does not claim runtime support.

## 9. WHO framework sources

- ICD-11 reference guide: https://icdcdn.who.int/icd11referenceguide/en-2025-01/refguide.pdf
- WHO disease naming best practices: https://www.who.int/news-room/detail/08-05-2015-who-issues-best-practices-for-naming-new-human-infectious-diseases
- WHO case definition glossary: https://ihrbenchmark.who.int/document/glossary
