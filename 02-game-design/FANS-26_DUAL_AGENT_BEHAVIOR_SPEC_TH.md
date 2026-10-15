# GD-FANS-001 — Dual-Agent Thirst & Behavioral Crisis
## Feature Specification (Draft)

**Game:** Land of Smiles  
**Status:** Draft / not implemented  
**Date:** 2026-10-14  
**Source:** [Narrative Proposal](../03-narrative/FANS-26_DUAL_AGENT_THIRST_LORE_TH.md), [GDD §5](LAND_OF_SMILES_GDD_v1_TH.md), [Story Canon §5](../03-narrative/LAND_OF_SMILES_STORY_CANON_v1_TH.md)

## Player experience

เกมไม่ควรบังคับให้ผู้เล่นเลือก “ฆ่าผู้หิวน้ำ” จากการมอง NPC ครั้งเดียว คนปกติและผู้ติดเชื้อระยะแรกแสดงอาการขาดน้ำและไข้คล้ายกัน ภารกิจคือผลิตน้ำสะอาด จัดจุดสังเกตอาการ รักษาคิว แจกน้ำ และกันไม่ให้คนป่วยเสี่ยงลงน้ำท่วม ขณะเดียวกันผู้ติดเชื้อรุนแรงอาจเคลื่อนมาที่จุดน้ำรั่ว

## Simulation state (abstract only)

| Field | Values / meaning |
|---|---|
| exposure_confidence | hidden/observed uncertainty, ไม่ใช่ scanner 100% |
| infection_stage | hidden stage 1–4 ตาม Story Canon เดิม |
| physical_hydration | adequate / low / depleted — ทุกคนขาดน้ำจริงได้ |
| fever_burden | low / moderate / high; ปัจจัยหนึ่งของการเสียของเหลว |
| executive_function | intact / impaired / severe — การชั่งใจและประเมินอันตราย |
| water_fixation | low / moderate / high — ไม่ใช่พลังตรวจจับน้ำไกล |
| behavior_profile | water-seeking / blood-seeking rare / catatonic / other; กำหนดเฉพาะเงื่อนไขในเกม |
| water_access | clean / unknown / unsafe; น้ำท่วมไม่เท่ากับน้ำดื่ม |
| incident_state | none / seeking / trespass / grab / bite / severe feeding event |

**Invariant:** Water-seeker/Blood-seeker เป็นการแบ่งย่อย **ภายใน 70% hyper-agitated เดิม**; คงอีกประมาณ 30% catatonic ตามข้อกำหนดแม่ ห้ามกำหนดเปอร์เซ็นต์ Blood-Seeker โดยอ้างว่าเป็นข้อมูล Canon ที่อนุมัติแล้ว

## Behavior transition sketch

1. physical_hydration ลด / ไข้รุนแรง → ขอและหา **น้ำดื่มปลอดภัย** ก่อน
2. executive_function เสื่อม + มองเห็น/ได้ยินแหล่งน้ำ → ลุกลี้ลุกลนพยายามไปจุดน้ำนั้นแม้เป็นน้ำท่วม
3. เข้าใกล้แหล่งน้ำอย่างไม่ปลอดภัย → incident ดื่มน้ำเสีย/ลื่น/จมน้ำได้; ห้าม auto-safe flood traversal
4. ถูกขวางหรือเบียด + agitation สูง → บางรายอาจผลัก/กัดคนใกล้ รวมผู้ติดเชื้ออื่น **แต่ไม่การันตีเกิดเหตุ**
5. blood-seeking rare + severe crisis → อาจเข้าหาคนใกล้ตัวและเกิด severe feeding incident (เนื้อหา rating-dependent, ไม่ใช่ระบบเพิ่ม HP/แหล่งอาหาร)
6. catatonic / exhausted → นิ่ง เกร็ง ล้ม ไม่ไล่ล่า; อาจงับเมื่อถูกสัมผัส ตาม Canon
7. ดื่มน้ำสะอาด → ฟื้น hydration ทางกายถ้ายังทำได้ **ไม่ cure infection** และไม่ย้อนสมองกลับมาเป็นปกติทันที

## Gameplay and risk controls

- จุดแจกน้ำต้องมีทั้ง clean-water supply, staff, queue capacity, observation bay และพื้นที่ที่ไม่ทำให้ผู้ติดเชื้อเข้าถึงผู้รอดชีวิตโดยไม่มีการคัดกรอง
- เสียงน้ำรั่ว/ภาพน้ำเป็น local stimulus ไม่ใช่ global telepathy; ใช้เบี่ยงความสนใจได้กับบาง NPC เท่านั้น
- การแยกสังเกตอาการต้องอิง evidence หลายด้าน; ถ้าเหมารวมไข้สูงหรือกระหายน้ำเป็น “ติดเชื้อ” ต้องเกิด false positive และ trust cost
- น้ำท่วมเป็นทั้ง source of hazard และ mobility blocker; การดื่มน้ำเน่าเพิ่ม risk ทางสุขภาพ แต่ไม่เท่ากับ “ได้รับเชื้อแน่เสมอ”
- การกัดจากคนสู่คนยังอยู่ใน Story Canon เดิม; รายละเอียดว่าเป็น co-transmission ของสองเชื้อยัง **pending DEC-007B**
- ผู้ติดเชื้อยังหายใจ จมน้ำได้ และอ่อนแรงหลังเวลาผ่านไป; ไม่ว่ายน้ำเก่งอย่างเหนือธรรมชาติ

## S9 prototype event proposals

| Test ID | Setup | Expected player-visible result |
|---|---|---|
| FANS-S9-01 | ผู้รอดชีวิตสองรายขอน้ำซ้ำ หนึ่งคนขาดน้ำทั่วไป อีกคนอยู่ระยะเริ่มต้น | สังเกตความต่างไม่ได้ทันที ระบบคัดกรองไม่รู้ทุกอย่าง |
| FANS-S9-02 | ผู้ป่วยมีไข้สูง พยายามออกประตูเพื่อไปถนนน้ำท่วม | แจ้งเตือนการลุยน้ำที่ไม่สมเหตุผล และตัวเลือกดูแล/ปิดทางโดยคำนึงถึง trust |
| FANS-S9-03 | ท่อแตกด้านนอก มีผู้ติดเชื้อหลาย profile | บางรายเข้าใกล้จุดน้ำ บางรายนิ่ง บางสถานการณ์กัดกันเอง ไม่ใช่ทุก run |
| FANS-S9-04 | มีน้ำสะอาดพร้อมผู้ดูแล | physical_hydration ดีขึ้นได้ แต่ infection ไม่ถูก cure |
| FANS-S9-05 | stage 3 severe rare phenotype | severe feeding event แยกจากการกัดปกติ ปิดภาพรุนแรงได้ และไม่เกิดการเพิ่ม hydration/HP |

## Acceptance criteria

- [ ] ร่างกายขาดน้ำจริงแยกจากความหมกมุ่นแหล่งน้ำและ executive dysfunction
- [ ] NPC ไม่มีเชื้อแต่ขาดน้ำมีจริงและสังเกตคล้ายผู้ป่วยระยะแรกได้
- [ ] การให้น้ำสะอาดช่วยความต้องการน้ำทางกาย แต่ไม่ใช่การรักษาเชื้อ
- [ ] ปรสิต+ไวรัสเป็น proposed lore จน DEC-007 ได้รับการอนุมัติ
- [ ] ไม่ล็อก behavior 70/30 ใหม่ให้เป็น “70% กระหายเลือด”
- [ ] ผู้ติดเชื้อทำร้ายกันเองได้เมื่อมีสถานการณ์รองรับ แต่ไม่เสมอ
- [ ] blood-seeking เป็น rare conditional event; gore-sensitive alternative พร้อม
- [ ] ผู้ติดเชื้อยังมีข้อจำกัดมนุษย์ ไม่สามารถหายใจใต้น้ำหรือไม่มีวันตาย
- [ ] เก็บ incident log และทดสอบ deterministic seed / replay ก่อนประกาศ implemented

## Open questions and verify gate

**DEC-007A–D:** ชนิดเชื้อคู่, การแพร่ผ่านการกัด, การเกิด subtype, ระดับความรุนแรงภาพ  
**Verification:** Narrative approves lore → Game Design agrees behavioral model → Engineering implements isolated state machine → QA runs S9 cases and logs reproducible outcomes. เอกสารนี้ยังเป็น specification ไม่ใช่หลักฐานว่า runtime ปัจจุบันมีระบบดังกล่าวแล้ว
