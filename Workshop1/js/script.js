const blueBtn = document.getElementById('blueBtn');
const redBtn = document.getElementById('redBtn');
const greenBtn = document.getElementById('greenBtn');

// ฟังก์ชันเปลี่ยนสีพื้นหลังและปรับสีตัวอักษรตาม
function changeColor(colorName) {
    document.body.style.backgroundColor = colorName;
    // เติมคลาส light-text ให้ข้อความเป็นสีขาว
    document.body.classList.add('light-text');
}

if (blueBtn) blueBtn.addEventListener('click', () => changeColor('#0000FF')); // สีกรมท่าหรูๆ
if (redBtn) redBtn.addEventListener('click', () => changeColor('#ff0000'));   // สีแดงไวน์หรูๆ
if (greenBtn) greenBtn.addEventListener('click', () => changeColor('#22543D')); // สีเขียวเอมเมอรัลด์เข้มๆ


// 4. ดักจับเหตุการณ์: เมื่อคลิกปุ่มสีเขียว -> เปลี่ยนสีพื้นหลัง body เป็นสีเขียว
if (greenBtn) {
    greenBtn.addEventListener('click', function() {
        document.body.style.backgroundColor = 'green';
    });
}