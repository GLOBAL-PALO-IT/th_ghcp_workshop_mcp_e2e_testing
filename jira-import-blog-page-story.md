# JIRA Import Format - Blog Page Story

## Issue Type: Story

## ชื่อ Story
สร้างหน้า Blog ของ Furniro พร้อมทุก element ที่แสดงไปให้ถูกต้อง

## User Story
ในฐานะ Product Owner ฉันต้องการให้มีการสร้างหน้า Blog สำหรับเว็บไซต์ Furniro เพื่อแสดงบทความและข้อมูลที่เกี่ยวข้องให้แก่ผู้เข้าชม พร้อมทั้งให้แน่ใจว่าทุก element แสดงผลอย่างถูกต้องตามการออกแบบ

## Acceptance Criteria

### Happy Path Cases

| # | Given | When | Then |
|----|-------|------|------|
| AC1 | หน้า Blog ได้ load | ผู้ใช้เข้ามายังหน้า | มองเห็น Header ที่มี Logo, Brand name "Furniro", Navigation menu (Home, Shop, About, Contact) และ Menu toggle button (☰) ที่มี aria-controls และ aria-expanded attribute |
| AC2 | หน้า Blog ได้ load | ผู้ใช้เข้ามายังหน้า | มองเห็น Hero section ที่มี banner image, Logo, "Blog" heading ในกลาง และ Breadcrumb navigation (Home / Blog) |
| AC3 | หน้า Blog ได้ load | ผู้ใช้เข้ามายังหน้า | มองเห็น 3 blog posts ที่แต่ละรายการมี cover image, meta info (Author, Category, Date), title, excerpt และ "Read more" link ที่คลิกได้ |
| AC4 | หน้า Blog ได้ load | ผู้ใช้เข้ามายังหน้า | มองเห็น Pagination controls (1, 2, 3, Next) ที่หน้า 1 มี state "is-active" และมี aria-label="หน้าถัดไป" |
| AC5 | หน้า Blog ได้ load | ผู้ใช้เข้ามายังหน้า | มองเห็น Sidebar ที่มี Categories card แสดง 5 หมวดหมู่: Crafts (2), Design (8), Handmade (7), Interior (1), Wood (6) |
| AC6 | หน้า Blog ได้ load | ผู้ใช้เข้ามายังหน้า | มองเห็น Sidebar ที่มี Recent Posts card แสดง 5 บทความล่าสุด โดยแต่ละรายการมี thumbnail, title และ date |
| AC7 | หน้า Blog ได้ load | ผู้ใช้เข้ามายังหน้า | มองเห็น Features section ที่แสดง 4 feature items ด้วย icons และข้อมูล: High Quality (Trophy icon), Warranty Protection (Guarantee icon), Free Shipping (Shipping icon), 24/7 Support (Support icon) |
| AC8 | หน้า Blog ได้ load | ผู้ใช้เข้ามายังหน้า | มองเห็น Footer ที่มี 4 columns (About, Links, Help, Newsletter) พร้อม Logo "Funiro.", Address, Links ที่คลิกได้, ช่องกรอก email สำหรับ subscribe, ปุ่ม "SUBSCRIBE" ที่คลิกได้ และ copyright text "2023 furino. All rights reverved" |

### Unhappy Path Cases

| # | Given | When | Then |
|----|-------|------|------|
| AC9 | หน้า Blog บนอุปกรณ์ขนาดต่างๆ | ผู้ใช้เข้ามายังหน้าบน Desktop (1920px), Tablet (768px), Mobile (375px) | Layout สามารถปรับให้สอดคล้องกับ responsive design โดยไม่มี broken layout |
| AC10 | Navigation menu บนอุปกรณ์ Mobile | ผู้ใช้เข้ามายังหน้า | ปุ่ม Menu toggle (☰) ใช้งานได้และสามารถเปิด/ปิด menu ได้ตามสิ่งที่ออกแบบไว้ |
| AC11 | หน้า Blog ได้ load | ผู้ใช้ดูหน้า | ใช้ Font "Poppins" (weights: 300, 400, 500, 600, 700) จาก Google Fonts และทั้ง link มี hover state ที่ชัดเจน |
| AC12 | หน้า Blog ได้ load | ผู้ใช้ดูหน้า | Text contrast ต่อ background เป็นไปตามมาตรฐาน WCAG AA |

## Priority
**High** - หน้า Blog เป็นหน้าหลักที่จำเป็นสำหรับแสดงบทความและข้อมูลแก่ผู้เข้าชม

## Story Points
**13** - ความซับซ้อนปานกลาง-สูง เนื่องจากมี component หลายตัว และต้องให้ความสำคัญกับ responsive design

## Notes
- ทั้ง 12 ACs ต้องผ่านการทดสอบบน device ที่แตกต่างกัน (Desktop 1920px, Tablet 768px, Mobile 375px)
- ต้องใช้ Font "Poppins" จาก Google Fonts
- ต้องเป็นไปตามมาตรฐาน WCAG AA สำหรับ text contrast
- ทั้ง link ต้องมี hover state ที่ชัดเจน
- ต้องมี accessibility attributes ที่ถูกต้อง (aria-label, aria-controls, aria-expanded)

## Labels
e2e-testing, ui-testing, blog-page, furniro, acceptance-criteria

## Definition of Done
- [ ] ทั้ง 12 ACs ผ่านการทดสอบ
- [ ] Responsive design ทำงานได้ทุก device
- [ ] Code review เสร็จสิ้น
- [ ] Documentation สมบูรณ์
