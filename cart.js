function renderCart() {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const cartDiv = document.getElementById('cart');
  if (!cart.length) {
    cartDiv.innerHTML = '<p>Giỏ hàng trống.</p>';
    return;
  }
  let total = 0;
  cartDiv.innerHTML = `
    <table style="margin:0 auto; border-collapse:collapse; min-width:350px;">
      <tr style="background:#e6f7ff;"><th>Sản phẩm</th><th>Giá</th><th>Số lượng</th><th>Thành tiền</th><th>Xóa</th></tr>
      ${cart.map((item, i) => {
        const thanhTien = item.price * item.qty;
        total += thanhTien;
        return `<tr>
          <td>${item.name}</td>
          <td>${item.price.toLocaleString()} VNĐ</td>
          <td><input type='number' min='1' value='${item.qty}' onchange='updateQty(${item.id}, this.value)' style='width:50px'></td>
          <td>${thanhTien.toLocaleString()} VNĐ</td>
          <td><button onclick='removeItem(${item.id})'>Xóa</button></td>
        </tr>`;
      }).join('')}
      <tr style="font-weight:bold;"><td colspan="3">Tổng cộng</td><td colspan="2">${total.toLocaleString()} VNĐ</td></tr>
    </table>
  `;
}

function updateQty(id, qty) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty = Math.max(1, parseInt(qty));
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
  }
}

function removeItem(id) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart = cart.filter(i => i.id !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

window.onload = renderCart; 