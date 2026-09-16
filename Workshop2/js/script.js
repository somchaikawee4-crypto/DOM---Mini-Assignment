// 1. ดึงข้อมูลหัวข้อข้อความ และปุ่มมาจากหน้า HTML
const textTitle = document.getElementById('textTitle');
const changeBtn = document.getElementById('changeBtn');

// 2. ดักจับเหตุการณ์: เมื่อคลิกปุ่ม -> เปลี่ยนตัวหนังสือในหัวข้อ
if (changeBtn && textTitle) {
    changeBtn.addEventListener('click', function() {
        // เปลี่ยนข้อความเดิมให้เป็นคำใหม่ตาม Cheat Code ในสไลด์อาจารย์[cite: 6]
        textTitle.textContent = "New Interactive Title!";
        
        // แถมลูกเล่น: ปรับสีตัวอักษรใหม่ให้กลายเป็นสี Indigo สวยงามเข้ากับสีปุ่ม
        textTitle.style.color = "#4f46e5";
    });
}