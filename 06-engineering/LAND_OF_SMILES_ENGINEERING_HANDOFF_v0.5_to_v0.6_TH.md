# LAND OF SMILES — Engineering Handoff
## Campaign: Bangkok Outbreak · S9 Pho Nimit / First Shelter · v0.5 → v0.6

**จัดทำ:** 14 ตุลาคม 2026  
**สถานะ:** Handoff จาก artifact ที่ตรวจไฟล์จริง ไม่ใช่การรับรองว่าเกมเล่นผ่าน end-to-end  
**ผู้รับช่วง:** Codex / coding agent / ทีมวิศวกรรม 3D, gameplay และ QA

## Brand migration addendum (14 ตุลาคม 2569)

**Canonical player-facing title:** LAND OF SMILES  
**Campaign:** Bangkok Outbreak  
**Level:** S9 Pho Nimit — First Shelter  
**Tagline proposal:** Every Smile Hides a Bite.  
**Narrative line:** The Land Still Smiles.

**คำสั่งให้ Agent:** แก้ชื่อ UI, page title, meta tags, README และ documentation ที่สื่อถึงชื่อเกมหลักเป็น LAND OF SMILES แต่ห้ามเปลี่ยน `Bangkok Outbreak` ที่หมายถึง campaign และห้าม rename asset path/save key แบบ breaking change โดยไม่ทำ migration tests. เพิ่ม brand review gate: ผู้ติดเชื้อ **ไม่จำเป็นต้องยิ้ม** และห้ามใช้สีหน้า/ความก้าวร้าวเป็นเครื่องตรวจติดเชื้อ. ขณะนี้การเปลี่ยนแปลงนี้เป็น **ข้อกำหนดเอกสาร** ยังไม่ได้แก้ source v0.5 หรือทดสอบ runtime.

**Source precedence:** โค้ด/manifest v0.5 ใช้ยืนยันพฤติกรรมที่มีอยู่; GDD ให้เจตนาระบบ; Brand Concept v1 ให้กฎการตั้งชื่อและภาพลักษณ์; Canon v0.2 ให้ข้อเท็จจริงของโลกนิยาย. เมื่อขัดกันต้องเปิด decision record แทนการเดา.

## 0. คำสั่งรับช่วง (อ่านก่อนเริ่ม)

งานนี้เป็นเกม **Survival Strategy / Colony Sim** ในกรุงเทพฯ หลังน้ำท่วมและการระบาด ผู้เล่นบริหารฐานอพยพบนสถานีรถไฟฟ้า เลือกชั้น วางอุปกรณ์ ดูแลคน/เสบียง ส่ง NPC ทำงาน และภายหลังค่อยเชื่อมสถานีเพื่อกู้คืนเมือง

**เป้าหมาย v0.6:** ทำให้ S9 เป็น vertical slice ที่เล่น/ทดสอบได้จริง: โมเดล WebGL โหลดได้ → คลิกวางอุปกรณ์โดยตรวจพื้นที่ → NPC หาเส้นทางจริงและหลบสิ่งกีดขวาง → การส่งของตัดสต็อกจากต้นทาง/เพิ่มปลายทางอย่างถูกต้อง → save/load แล้วสถานะตรงเดิม → QA เบราว์เซอร์ผ่าน

**ห้ามข้ามการทดสอบด้วยการเปลี่ยนสถานะ task เป็น Done** และห้ามกล่าวอ้างว่าโมเดลอิงมิติจริงของสถานี เพราะขนาด/พิกัดทางออกยังไม่ได้พิสูจน์

## 1. ชุดไฟล์ที่ต้องใช้ (Source of Truth)

ไฟล์ส่งมอบ: `Bangkok_Outbreak_S9_First_Shelter_v0.5.zip`

ภายใน ZIP (ตรวจสอบชื่อไฟล์และ integrity แล้ว):

```text
README.md
station-manifest.json
index.html
assets/pho_nimit_blockout.glb
```

- `index.html` — ตัวเล่นเกม WebGL/Three.js ซึ่งตอนนี้รวม UI, simulation และ navigation อยู่ในไฟล์เดียว
- `assets/pho_nimit_blockout.glb` — 3D blockout ยังไม่ใช่โมเดลอ้างอิงตามแบบสถาปัตยกรรม
- `station-manifest.json` — ข้อมูลชั้น, หน่วยเมตร, พิกัดทางออกจำลอง และสถานะความน่าเชื่อถือของข้อมูล
- `README.md` — วิธีเปิดและข้อจำกัด

**เอกสารก่อนหน้า:** GDD v0.1, S9 v0.3/v0.4 เป็นบริบทเท่านั้น เมื่อข้อเท็จจริงขัดกัน ให้ยึดโค้ด/manifest ของ v0.5 ก่อน และเปิด issue ขอความชัดเจน แทนการเดา

### เริ่มรัน

```bash
unzip Bangkok_Outbreak_S9_First_Shelter_v0.5.zip -d bangkok-outbreak-s9
cd bangkok-outbreak-s9
python -m http.server 8000
# เปิด http://localhost:8000
```

ต้องมีอินเทอร์เน็ตเพื่อโหลด Three.js `0.170.0` จาก jsDelivr; การเปิด HTML ผ่าน `file://` ไม่ใช่วิธีทดสอบ GLB ที่ถูกต้อง

## 2. สิ่งที่มีใน v0.5 (ตรวจจากไฟล์จริง)

| Capability | สภาพที่พบ | ระดับความเชื่อมั่น |
|---|---|---|
| Three.js + GLTFLoader + OrbitControls | มี import map และ implementation | ตรวจโค้ดแล้ว; **ยังไม่รับรองการแสดงผลจริง** |
| Station GLB | มีไฟล์ GLB ใน ZIP | ตรวจไฟล์แล้ว; ความตรงสถานีจริงยังไม่ยืนยัน |
| Floor selection | ground / concourse / platform / all, ซ่อน mesh ตามชื่อ | มี implementation; ยังไม่ได้ QA ทุกกล้อง |
| Placement | 10 sockets, 5 object types, raycasting เลือกวงกลม | มี implementation; ยังไม่มี free placement/collision |
| Economy | ค่า parts ติดตั้ง, food/water depletion รายวัน | มี code; วงจร logistics ยังไม่สมบูรณ์ |
| NPC | 3 workers, A* บนกริด 2 เมตร + จุดเชื่อมชั้น | มี code; path ยังไม่หลบสิ่งปลูกสร้าง |
| Logistics | NPC เดินถึง distribution point แล้วเพิ่ม `stock` | **บั๊กเชิงระบบ:** ไม่หักสต็อกจาก warehouse กลาง |
| Save/load | localStorage key `bangkokS9v05` | มี code; ยังต้องทดสอบ persistence/invariants |
| Browser/มือถือ | ยังไม่มีผล QA ที่ยืนยัน render ผ่าน | **NOT VERIFIED** |

ค่าจำลองใน manifest: พื้น ground=0 m, concourse=10.4 m, platform=17.1 m; อิงหน่วยเมตรในไฟล์ปั้น 3D แต่ **ไม่ใช่ dimension ที่สำรวจจริง**; ทางออก E1–E4 ก็เป็นตำแหน่งสมมติ

## 3. Known Issues / Technical Debt ที่ต้องแก้

**P0 — blockers:**
1. ยังไม่มี automated browser smoke test ตรวจว่า GLB โหลดจริง มี canvas/render และไม่เกิด runtime error
2. Logistics ไม่รักษาสมดุลสต็อก: worker เติมปลายทางโดยสร้างสิ่งของขึ้นเอง; แยก `warehouseInventory`, `workerCargo`, `dispenserStock` และ transaction อย่างชัดเจน
3. การวางของยังไม่ตรวจ collision, พื้นที่จริง, clearance หรือการปิดทางเดิน; ผลคือวางแล้ว NPC ยังอาจเดินทะลุ
4. ทางเดิน A* ใช้กริด 2 m จากพื้นที่สมมติและ connector ที่ hard-code ไม่ได้สร้างจากพื้นที่เดินใน GLB

**P1 — quality/correctness:**
5. `loadSave()` ใช้ `addObjectNoCost()` ซึ่งแก้ `status.parts` ชั่วคราวเพื่อสร้าง object; รีแฟกเตอร์เป็น `spawnObject({chargeCost:false})` ให้ไม่มี side effect
6. `setFloor` ซ่อน GLB meshes โดยค้นหา substring ของชื่อ asset เช่น `roof`, `platform`, `rail` เสี่ยงผิดเมื่อแก้ชื่อ mesh; เปลี่ยนเป็น metadata/layer tags
7. แยก simulation ออกจาก render/UI ในโมดูลเพื่อให้ unit test ได้ (ไฟล์เดียวปัจจุบันดูแลยาก)
8. เพิ่ม error/loading states เมื่อ CDN/GLB/WebGL ล้มเหลว และรองรับการควบคุมบนมือถือ
9. กำหนดอัตราการใช้/เติมเสบียงและกฎเวลาให้สอดคล้องกัน (ปัจจุบันบางส่วนเพิ่มชั่วโมงเมื่อกดปุ่ม ขณะที่การเดิน NPC อิง animation frame)

**P2 — fidelity:**
10. หาภาพ/ผังอ้างอิงที่ใช้ได้ตามสิทธิ์เพื่อยืนยันตำแหน่งทางขึ้นลงและขนาดจริง ห้าม reverse-engineer แล้วเรียกว่า survey-accurate
11. ขึ้น Blender GLB ที่มี scene hierarchy, semantic anchors, collision geometry และ walkable surfaces ให้แก้ภายหลังได้
12. เพิ่ม NPC queue/ความสามารถเข้าถึงของผู้พิการ/แผน evacuation ในเกมอย่างเป็นระบบ

## 4. Contract ของข้อมูลที่ต้องรักษา

- World units: 1 unit = 1 metre; **Three.js ใช้ Y-up**; `station-manifest.json` เดิมระบุ coordinate modelling `z=elevation` และ code มี transform เมื่อโหลด GLB — ต้องกำหนด canonical coordinates เพียงแบบเดียวแล้วทดสอบ cross-system
- Floors: `ground`, `concourse`, `platform`, `all` (all เป็น view filter ไม่ใช่ floor ของ gameplay object)
- `exitId` E1–E4 ต้องผูกกับ geometry, path connection และข้อมูล provenance (`verified`, `source`, `confidence`)
- ทุกจุดวางของมี `id`, `floorId`, transform, footprint, permittedTypes, clearance และ `status`
- ชิ้นงาน placement ห้ามทับ walkable emergency lane หรือปิด stair exits; ถ้า route ถูกตัด ระบบต้องไม่ยืนยันการติดตั้ง
- NPC path result ต้องแยก reachable / unreachable และระบุเหตุที่ไม่ถึง (no route / blocked / target removed)
- Inventory invariant: `warehouse + cargo + destination + used + lost` ต้องเท่ากับยอดตั้งต้นบวกยอดได้รับจากภายนอก (ตามชนิดสินค้า)
- เวลา simulation ใช้ clock เดียว หยุดได้และเร่งได้ ไม่ขึ้นกับ FPS
- Save schema ต้อง versioned พร้อม migration หรือ explicit reset จาก `bangkokS9v05`

## 5. Execution Plan (ทำทีละ PR พร้อม Gate)

| PR | งาน | เงื่อนไขผ่านขั้นต่ำ |
|---|---|---|
| PR-01 | Baseline / isolate modules / run harness | Local server load; ตรวจ import, ไม่มี exception และ GLB แสดงจริงบน desktop |
| PR-02 | Station & semantic floors | เลือก 4 floor views แล้ว geometry/sockets/NPC ไม่หายผิดระดับ |
| PR-03 | Placement validation | วางอุปกรณ์ได้บนจุดอนุญาตเท่านั้น, ห้ามชน/ปิดทาง, หัก costs ครั้งเดียว |
| PR-04 | Navigation graph / obstacle replanning | NPC ไปคลัง→จุดแจก→คลัง และเปลี่ยนทางเมื่อวาง/ถอนสิ่งกีดขวาง; unreachable จัดการได้ |
| PR-05 | Inventory transaction | ขน 8 หน่วยต้องออกจากต้นทาง 8 เข้าปลายทาง 8; ไม่มีติดลบ/ของงอก |
| PR-06 | Time + save/load | pause/speed determinism; reload แล้ว geometry/resources/queues ตรงก่อนบันทึก |
| PR-07 | Browser QA & responsive | Desktop Chrome และ viewport มือถือ: วางของ/เลือกชั้น/ขนส่ง/เซฟได้; บันทึกหลักฐาน test |
| PR-08 | Research pack (แยก track) | เก็บแหล่งอ้างอิงพร้อมสิทธิ์, จุดภาพ, ระดับความมั่นใจ; อัปเดต manifest โดยไม่แต่งตัวเลข |

**Dependency:** PR-01 → PR-02 → PR-03 → PR-04 → PR-05 → PR-06 → PR-07; PR-08 ทำขนานได้ และยังไม่ใช่เหตุผลให้กล่าวอ้าง architectural accuracy

## 6. Acceptance Tests สำหรับ v0.6

1. เปิด `/` ผ่าน server แล้วมีภาพ 3D, 3D model, UI และไม่พบ JS runtime error
2. สลับ ground/concourse/platform/all แล้วเลือก socket ได้เฉพาะชั้นที่มองเห็น
3. คลิกจุดติดตั้ง 1 ครั้ง → object ปรากฏ, parts ลดตาม cost แค่ครั้งเดียว, คลิกซ้ำไม่สร้างซ้ำ
4. วางสิ่งกีดขวางตรงทางเดิน → ระบบปฏิเสธ หรือ re-route ได้; ไม่มี NPC เดินทะลุ
5. มี warehouse stock 16 หน่วย, ส่ง 8 → warehouse 8, worker 0, destination +8; ทดสอบกรณี warehouse เหลือ 0
6. NPC ไม่มีทางไปถึง → แสดง blocked/unreachable, ไม่เติมของที่ปลายทาง
7. pause simulation 10 s → resources/workers/time คงเดิม; speed 2x ทำงานตาม delta simulation เดียว
8. Save → reload → objects, stock, parts, NPC jobs/time restored อย่างสอดคล้อง
9. สคริปต์ test รวม `pass/fail` พร้อม screenshots desktop/mobile ในเอกสารผลทดสอบ
10. ไม่มีการอ้างว่าพิกัด E1–E4/ความสูงบันไดตรงสถานีจริงจนกว่าจะตรวจภาพ/แบบที่อนุญาต

## 7. ขอบเขตที่ห้ามเพิ่มระหว่าง v0.6

อย่าเริ่มเพิ่มทั้งกรุงเทพฯ, สยาม, multiplayer, combat ซับซ้อน, NPC หลายร้อยคน หรือผังสถานี “สมจริง” ด้วยการเดา เอาให้ **สถานีเดียวเล่นลื่น มี logistics จริง และหลักฐาน QA** ก่อน การขยายแผนที่ต้องไม่ซ่อนบั๊กพื้นฐาน

## 8. Definition of Done / วิธีส่งมอบ

ส่งอย่างน้อย:

```text
README.md
station-manifest.json
index.html (หรือ frontend bundle)
assets/pho_nimit_blockout.glb
src/ (render, simulation, nav, economy, placement)
tests/ (unit/integration/e2e)
QA_REPORT.md
CHANGELOG.md
```

QA_REPORT ต้องระบุ environment/browser/version, รายการ test, screenshots, ข้อผิดพลาดที่เหลือ, สิ่งที่ **ไม่ได้ทดสอบ**; ส่ง ZIP หรือ repo commit พร้อม run instructions และห้ามแก้ v0.5 ทับโดยไม่มี version history

## 9. Prompt พร้อมวางให้ Codex / Agent ผู้รับช่วง

> คุณรับช่วงโปรเจกต์ **Bangkok Outbreak — S9 First Shelter v0.5** จากไฟล์ `Bangkok_Outbreak_S9_First_Shelter_v0.5.zip` โปรดอ่าน `README.md`, `station-manifest.json`, `index.html` และ inspect `assets/pho_nimit_blockout.glb` ก่อนเปลี่ยนโค้ด รวมถึงอ่าน handoff ฉบับนี้ทั้งไฟล์ ยืนยันข้อเท็จจริงจาก source code เอง ไม่ถือว่า feature ผ่านเพียงเพราะคำอธิบาย v0.5 ระบุว่ามีแล้ว
>
> ดำเนิน PR-01 ถึง PR-07 ตาม dependency และ PR-08 คู่ขนานได้ โดยห้ามอ้างมิติสถานีจริงหากยังไม่ตรวจสอบ ห้ามสร้างระบบ inventory ที่เติมของจากอากาศ และห้ามทำ NPC หลบสิ่งกีดขวางเพียง visual trick
>
> ทำงานแบบ incremental: baseline test → implementation → unit/integration/e2e test → verify gate → update README/CHANGELOG/QA_REPORT แล้วจึงไป PR ถัดไป แยก commits/branches เท่าที่ระบบเอื้อและสรุปผลทุก PR หากมี blocker ให้บันทึกพร้อม repro, diagnosis, workaround โดยไม่ข้าม gate
>
> เริ่มทันทีด้วย PR-01: เปิดเซิร์ฟเวอร์ท้องถิ่น ทดสอบโหลด WebGL+GLB, ตรวจ console/runtime failures, แยก dependency ที่ควรรีแฟกเตอร์ และบันทึก `QA_REPORT.md` baseline ก่อนเปลี่ยน gameplay logic ห้ามถือว่า browser pass ถ้าไม่ได้รันจริง

## 10. Decisions ที่ยังเปิดอยู่

- จะล็อก socket-only จนจบ v0.6 (แนะนำ) หรือเพิ่ม free placement? ถ้าเพิ่ม free placement ต้องทำ validation ก่อน
- ข้อมูลสถานีจริงเก็บจากแหล่งใดได้ตามใบอนุญาต? Google imagery ไม่ใช่การอนุญาตให้คัดลอก/ดึงมาเป็น asset เกมโดยอัตโนมัติ
- จะใช้ browser only ต่อ หรือย้ายเป็น Vite/TypeScript? แนะนำย้ายเมื่อมี baseline test แล้วและยังเปิด prototype ได้ง่าย
- ยืนยันระดับ fidelity: **gameplay-accurate** หลังมีหลักฐาน ไม่ใช่ survey grade

---

**สถานะสุดท้ายของ handoff:** เอกสารนี้จัดทำจากไฟล์ v0.5 ที่มีจริงและตรวจโครงสร้างแล้ว; ยังไม่มีหลักฐาน end-to-end browser QA ในรอบนี้ และไม่อ้างว่า source ผ่านทุก acceptance test
