# CONTRIBUTING TO LAND OF SMILES NARRATIVE & DESIGN

ยินดีต้อนรับนักเขียน นักออกแบบ และทีมงานพัฒนาทุกท่าน! เอกสารชุดนี้เป็นพื้นที่ส่วนกลางสำหรับการเก็บรวบรวม **Game Design, World-Building, Narrative Canon และ Lore** ของโปรเจกต์ **Land of Smiles**

---

## 📌 กฎเหล็กของ Story Canon (โปรดอ่านก่อนเขียนต่อ)

ก่อนเริ่มเขียนบทสนทนา ตัวละคร หรือเนื้อเรื่องเสริม กรุณาตรวจสอบเอกสาร [03-narrative/LAND_OF_SMILES_STORY_CANON_v1_TH.md](03-narrative/LAND_OF_SMILES_STORY_CANON_v1_TH.md) ซึ่งเป็น Canon หลักของจักรวาล:

1. **ลักษณะการแพร่ระบาด (Leptospirosis-like Transmission):**
   - เชื้อมากับน้ำท่วมและแพร่ระบาดผ่านบาดแผล รอยถลอกที่ขา/เท้าเป็นหลัก คล้ายกลไกโรคฉี่หนู
   - คนที่เดินลุยน้ำสกปรกหรือมีบาดแผลเปิดมีความเสี่ยงสูงมากที่จะรับเชื้อ
2. **อาการกระหายน้ำผิดปกติ (Extreme Polydipsia):**
   - ผู้ติดเชื้อระยะแรกจะมีอาการเด่นคือ **กระหายน้ำอย่างรุนแรง ดื่มน้ำเท่าไหร่ก็ไม่หายกระหาย** คอแห้งผาก
   - ในระยะต่อมาจะเริ่มหมกมุ่นและพยายามเข้าหาแหล่งน้ำท่วมหรือแม่น้ำลำคลอง (Aquatic Fixation)
3. **ความอึดและระยะเวลาการมีชีวิต (Host Resilience):**
   - **ผู้ติดเชื้อไม่ตายภายใน 72 ชั่วโมง** เชื้อปรับเปลี่ยนสรีระให้โฮสต์ทนทานต่อความหนาวเย็น บาดแผล และการแช่น้ำ
   - ผู้ติดเชื้อสามารถลอยคอ ซุ่มรอ หรือลุยน้ำท่วมล่าเหยื่อได้นานหลายสัปดาห์ ก่อนจะค่อยๆ สลายตัวจากเนื้อเยื่อเน่าเปื่อยในระยะยาว
4. **ความสมจริงเชิงสังคม:**
   - เชื้อระบาดทับซ้อนกับวิกฤติน้ำท่วมกรุงเทพฯ
   - รัฐบาลยังทำงานได้จากรอบนอก แต่สูญเสียการควบคุมใจกลางเมือง เช่น สถานีสยาม

---

**Lore proposal (pending):** ก่อนเขียนเหตุการณ์เกี่ยวกับความกระหาย/การกัดกันเอง โปรดอ่าน [Dual-Agent FANS-26 Lore](03-narrative/FANS-26_DUAL_AGENT_THIRST_LORE_TH.md) และ [GD-FANS-001](02-game-design/FANS-26_DUAL_AGENT_BEHAVIOR_SPEC_TH.md) ควบคู่ Canon หลัก; ตราบใดที่ DEC-007 ยัง Open ห้ามอ้างว่าสองเชื้อเป็นคำเฉลยที่ยืนยันแล้ว หรือว่าอาการกระหายน้ำหมายถึงติดเชื้อทุกกรณี

---

## กฎสำหรับผู้ทำ UI และ Character Art

อ่าน [Design System v1](05-art-and-ux/DESIGN_SYSTEM_v1_TH.md) และ [VT01–VT05 Character Rules](05-art-and-ux/INFECTED_CHARACTER_DESIGN_SYSTEM_v1_TH.md) ก่อนสร้างภาพใหม่ ห้ามใช้สีเพียงอย่างเดียวเพื่อแยกประเภท หรือทำให้ผลวินิจฉัย Cxx แปลว่าอันตรายเชิงการต่อสู้; หากแก้สีใน token JSON ต้องแก้ CSS คู่กันและรัน `node 05-art-and-ux/tokens/validate-tokens.mjs`. งานนี้ยัง Draft รอ DEC-012 และไม่ถือว่าโลโก้/ภาพจบแล้ว

---

## 🚀 ขั้นตอนการมีส่วนร่วม (How to Contribute)

1. **Fork หรือ Clone Repository:**
   ```bash
   git clone https://github.com/Freshair129/land-of-smiles-docs.git
   ```
2. **สร้าง Branch ใหม่สำหรับงานของคุณ:**
   ```bash
   git checkout -b narrative/new-character-lore
   # หรือ
   git checkout -b design/quest-mechanic
   ```
3. **ใช้ Template ในการร่างเอกสารใหม่:**
   - สามารถดูตัวอย่างและโครงสร้างมาตรฐานได้จากโฟลเดอร์ [templates/](templates/)
4. **Commit & Push:**
   ```bash
   git add .
   git commit -m "feat(narrative): add survivor diary entry for day 7"
   git push origin narrative/new-character-lore
   ```
5. **เปิด Pull Request (PR):**
   - ส่ง PR เข้า branch `main` พร้อมอธิบายรายละเอียดการเพิ่มเนื้อเรื่องหรือแก้ไข เพื่อให้ Lead Writer ทำการรีวิวและ Merge ครับ
