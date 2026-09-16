// 1. ดึง Element ทั้งช่องคะแนน ปุ่มกด และพื้นที่แสดงเกรดมาจาก HTML
const scoreInput = document.getElementById('score');
const submitBtn = document.getElementById('submitBtn');
const gradeDisplay = document.getElementById('grade');

// 2. ดักจับเหตุการณ์เมื่อคลิกปุ่ม Check
if (submitBtn && scoreInput && gradeDisplay) {
    submitBtn.addEventListener('click', function() {
        // ดึงค่ามาแปลงเป็นตัวเลขจำนวนเต็มด้วย parseInt ตาม Cheat Code
        const score = parseInt(scoreInput.value);
        let gradeResult = '';

        // 3. ตรวจสอบเงื่อนไขตัดเกรด (if/else logic)
        if (isNaN(score) || score < 0 || score > 100) {
            gradeResult = 'ข้อมูลไม่ถูกต้อง';
        } else if (score >= 80) {
            gradeResult = 'A';
        } else if (score >= 75) {
            gradeResult = 'B+';
        } else if (score >= 70) {
            gradeResult = 'B';
        } else if (score >= 65) {
            gradeResult = 'C+';
        } else if (score >= 60) {
            gradeResult = 'C';
        } else if (score >= 55) {
            gradeResult = 'D+';
        } else if (score >= 50) {
            gradeResult = 'D';
        } else {
            gradeResult = 'E';
        }

        // 4. แสดงผลบนหน้าจอโดยใช้ innerHTML ตาม Cheat Code
        gradeDisplay.innerHTML = `Grade: ${gradeResult}`;
    });
}