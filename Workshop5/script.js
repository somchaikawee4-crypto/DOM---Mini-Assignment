// 1. ดึง Element มาจาก HTML
const productNameInput = document.getElementById('pname');
const addBtn = document.getElementById('addBtn');
const productList = document.getElementById('productList');

// 2. ดักจับเมื่อผู้ใช้งานกดคลิกปุ่ม Add
if (addBtn && productNameInput && productList) {
    addBtn.addEventListener('click', function() {
        // ดึงข้อความจากอินพุต (Extract 'value')
        const inputValue = productNameInput.value.trim();
        
        // ดักเอาไว้เล็กน้อย ถ้าไม่มีการพิมพ์อะไรมาเลย ไม่ต้องทำงาน
        if (inputValue === "") {
            alert("กรุณาพิมพ์ชื่อผลิตภัณฑ์ก่อนครับ");
            return;
        }

        // 3. สร้างแท็ก <li> ขึ้นมาใหม่ในความจำ (createElement('li'))
        const newLi = document.createElement('li');
        
        // 4. บรรจุคำศัพท์ที่พิมพ์เข้าไปในแท็กนั้น (assign 'textContent')
        newLi.textContent = inputValue;
        
        // 5. นำแท็กไปต่อท้ายรายการสินค้า (appendChild())
        productList.appendChild(newLi);
        
        // เคลียร์กล่องข้อความให้ว่างเปล่า พร้อมสำหรับพิมพ์คำต่อไป
        productNameInput.value = "";
        productNameInput.focus();
    });
}