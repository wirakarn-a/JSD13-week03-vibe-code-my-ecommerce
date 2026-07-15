# JSD13-week03-vibe-code-my-ecommerce
=======
# Goal
> Vibe code the MERN Stack e-commerce web app for brandname rental business

ช่วยเขียนโค้ดสร้างเว็บไซต์ *e-commerce* สำหรับธุรกิจเช่าสินค้าแบรนด์เนม (กระเป๋า นาฬิกา ชุด) โดยให้สร้างไฟล์ทั้งหมดไว้ที่ _**C:\Users\acer\software-project\jsd13\week-03\vibe-code-my-ecommerce**_
โดยมีฐานข้อมูลที่ออกแบบไว้แล้ว รายละเอียดมีดังนี้:

## 1. Tech Stack ที่ใช้
- Frontend: HTML, CSS, JavaScript (DOM manipulation ธรรมดา ยังไม่ใช้ React)
- Backend: Node.js กับ Express
- Database: MongoDB

## 2. โครงสร้าง Database
อ่านและวิเคราะห์ข้อมูลจากไฟล์ทั้งหมดใน folder  _**C:\Users\acer\software-project\jsd13\week-02\first-meet-dbs\my-ecommerce-project**_ ก่อน

(มี schema และ data ของ collections ต่างๆ เช่น customers, products, rentals, payments, condition_log, maintenance, loyalty_points, resale, retailers) แล้วค่อยเชื่อมต่อเข้ากับ frontend

## 3. หน้าเว็บและฟังก์ชันที่ต้องการ
- **หน้า Login** : ตรวจสอบสิทธิ์ผู้ใช้งาน (แยกระหว่างลูกค้ากับแอดมิน)
- **หน้าหลัก (Homepage/Dashboard)** : แสดงแคตตาล็อกสินค้าเช่าแบบร้านหรู — โชว์รูปสินค้า แบรนด์ ราคาเช่าต่อวัน และสถานะว่าง/ไม่ว่าง
- **ฟังก์ชันพิเศษที่ต้องการ** :
    - ระบบค้นหาสินค้า (search bar) — ค้นหาจากชื่อแบรนด์หรือรุ่น
    - ตัวกรองแยกหมวดหมู่ (filter) — กรองตามประเภท (กระเป๋า/นาฬิกา/ชุด) และช่วงราคา
    - ปฏิทินเช็ควันว่างของสินค้า (availability calendar) ก่อนจอง
- **รูปภาพ** : ส่วน banner hero ให้ใช้รูปจาก unsplash.com (ค้นด้วยคำว่า "luxury bag" หรือ "designer fashion" ก็ได้)

## 4. สิ่งที่ต้องการให้ทำในขั้นตอนแรก
- สร้างโครงสร้างโฟลเดอร์ของโปรเจกต์ทั้งหมด (project structure)
- เขียนโค้ดเชื่อมต่อฐานข้อมูล MongoDB
- เขียน API backend สำหรับดึงข้อมูลสินค้า (GET) และรับข้อมูลการจอง (POST)
- เขียนโค้ด frontend หน้าแรก ดึงข้อมูลสินค้าจาก API มาแสดงผลเป็นการ์ดสินค้า (product card) ที่สวยงามและรองรับมือถือ (responsive)

อธิบายขั้นตอนการติดตั้งและการรันโปรเจกต์นี้อย่างละเอียดด้วย (เช่น ต้องลง package อะไรบ้าง รันคำสั่งไหน)
>>>>>>> a19e1dc (first vibe code)
