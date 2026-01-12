# Blog Page – Furniro (จาก Figma)

หน้านี้พัฒนาตามดีไซน์ Figma node `518:11417` ด้วย HTML/CSS/JS และดาวน์โหลดภาพจาก Figma ผ่าน MCP แล้วเก็บไว้ใน `assets/images` เรียบร้อย

## โครงสร้างไฟล์
- index.html – โครงสร้างหน้าและคอนเทนต์
- styles.css – สไตล์ให้ตรงเลย์เอาต์/สีตามดีไซน์
- script.js – เมนูมือถือ (toggle)
- assets/images – ไฟล์รูปที่ดึงจาก Figma (โลโก้ แบนเนอร์ โพสต์ ไอคอน ฯลฯ)

## วิธีรันแบบโลคอล
```bash
cd exercise
python3 -m http.server 5173
# เปิด http://localhost:5173
```

## หมายเหตุ
- ฟอนต์ใช้ Poppins ตามดีไซน์
- สีหลัก (`--primary`) ใช้ #B88E2F ตาม Figma
- รองรับ responsive ระดับพื้นฐาน: แถว sidebar จะย้ายขึ้นบนในจอแคบ และปรับเลย์เอาต์ Features / Footer ให้เหลือ 1–2 คอลัมน์
