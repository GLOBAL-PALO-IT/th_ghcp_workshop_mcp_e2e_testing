# Login System - E2E Testing Exercise

## 📋 Description
บริบท (Context) สำหรับแบบฝึกหัด E2E Testing ที่มี Login System โดยใช้ HTML, CSS, JavaScript

## 🎯 Features
- ✅ Login Page พร้อม Form Validation
- ✅ Home Page หลังจากเข้าสู่ระบบสำเร็จ
- ✅ Error Message แสดงเมื่อ Login ผิด
- ✅ Logout Functionality
- ✅ Session Management ด้วย LocalStorage
- ✅ Modern Design พร้อม Gradient Background
- ✅ Responsive Design (Mobile Friendly)

## 🔐 Credentials
| Field | Value |
|-------|-------|
| Username | admin |
| Password | 1234 |

## 📁 File Structure
```
03_exercise/
├── index.html      # Login Page
├── home.html       # Home Page (หลังจาก Login สำเร็จ)
├── style.css       # Styling สำหรับทั้ง 2 หน้า
├── script.js       # JavaScript Logic
└── README.md       # File นี้
```

## 🚀 How to Use
1. เปิด `index.html` ในเบราว์เซอร์
2. ใส่ Username: `admin` และ Password: `1234`
3. กด Login
4. จะถูก Redirect ไปยัง `home.html`
5. กด Logout เพื่อกลับไปยัง Login Page

## 🧪 Test Scenarios
### Test 1: Successful Login
- ✓ ใส่ Username: admin
- ✓ ใส่ Password: 1234
- ✓ กด Login
- ✓ ตรวจสอบว่า Redirect ไป home.html

### Test 2: Invalid Username
- ✗ ใส่ Username: user
- ✗ ใส่ Password: 1234
- ✗ กด Login
- ✗ ตรวจสอบการแสดง Error Message

### Test 3: Invalid Password
- ✗ ใส่ Username: admin
- ✗ ใส่ Password: wrong
- ✗ กด Login
- ✗ ตรวจสอบการแสดง Error Message

### Test 4: Logout Function
- ✓ Login สำเร็จ
- ✓ กด Logout บน Home Page
- ✓ ตรวจสอบว่า Redirect กลับไป index.html

## 💡 Technical Details
- **Storage:** LocalStorage สำหรับเก็บ Session
- **Validation:** Client-side validation ด้วย JavaScript
- **Styling:** CSS3 Gradient และ Animations
- **Responsive:** Mobile-first approach

## 📝 Notes
- ข้อมูลเข้าสู่ระบบเก็บไว้ใน JavaScript (ใช้ได้เฉพาะ Demo)
- ไม่ใช้ Backend/Database
- เหมาะสำหรับการทดสอบ Automated Testing ด้วย Robot Framework
