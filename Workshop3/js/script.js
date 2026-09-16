// ดึงข้อมูล Element จาก HTML
const textInput = document.getElementById('textInput');
const countSpan = document.getElementById('count');

// ดักจับเหตุการณ์การพิมพ์ข้อความเรียลไทม์
if (textInput && countSpan) {
    textInput.addEventListener('input', function() {
        // อัปเดตจำนวนตัวอักษรแบบเรียลไทม์ตาม Cheat Code
        countSpan.textContent = textInput.value.length;
        
        // ถ้าพิมพ์เกิน 50 ตัวอักษร จะเปลี่ยนตัวนับเป็นสีแดงแจ้งเตือน
        if (textInput.value.length > 50) {
            countSpan.style.color = "#ef4444";
        } else {
            countSpan.style.color = "#0ea5e9";
        }
    });
}