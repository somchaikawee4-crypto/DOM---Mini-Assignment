const menuButtons = document.querySelectorAll('.menu-btn');
const cartBody = document.getElementById('cartBody');
const totalSpan = document.getElementById('total');

let cart = {};

// 1. Add Products to cart เมื่อกดเลือกเมนูกาแฟ
menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseInt(button.getAttribute('data-price'));

        if (cart[name]) {
            cart[name].qty += 1;
        } else {
            cart[name] = { price: price, qty: 1 };
        }
        renderCart();
    });
});

// 2. ฟังก์ชันเรนเดอร์ UI และคำนวณคณิตศาสตร์เบื้องหลัง (Calculate Total Price dynamically)
function renderCart() {
    cartBody.innerHTML = '';
    let total = 0;

    for (let name in cart) {
        const item = cart[name];
        const subtotal = item.price * item.qty;
        total += subtotal;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${name}</strong></td>
            <td>$${item.price}</td>
            <td>
                <div class="qty-control">
                    <button class="qty-btn" onclick="updateQty('${name}', -1)">-</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" onclick="updateQty('${name}', 1)">+</button>
                </div>
            </td>
            <td>$${subtotal}</td>
            <td><button class="del-btn" onclick="deleteItem('${name}')">✕</button></td>
        `;
        cartBody.appendChild(tr);
    }

    totalSpan.textContent = total;
}

// 3. ปรับปริมาณเพิ่มลด Qty (+/- buttons)
window.updateQty = function(name, change) {
    if (cart[name]) {
        cart[name].qty += change;
        if (cart[name].qty <= 0) {
            delete cart[name];
        }
        renderCart();
    }
}

// 4. ลบสินค้าออกจากตะกร้า
window.deleteItem = function(name) {
    delete cart[name];
    renderCart();
}