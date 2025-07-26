document.getElementById('orderForm').onsubmit = function(e) {
  e.preventDefault();
  let ok = true;
  // Lấy giá trị
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();
  // Reset lỗi
  document.getElementById('errName').innerText = '';
  document.getElementById('errEmail').innerText = '';
  document.getElementById('errPhone').innerText = '';
  document.getElementById('errAddress').innerText = '';
  // Kiểm lỗi
  if (name.length < 2) {
    document.getElementById('errName').innerText = 'Họ tên phải từ 2 ký tự.';
    ok = false;
  }
  if (!/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    document.getElementById('errEmail').innerText = 'Email không hợp lệ.';
    ok = false;
  }
  if (!/^0\d{9,10}$/.test(phone)) {
    document.getElementById('errPhone').innerText = 'Số điện thoại phải bắt đầu bằng 0 và đủ 10-11 số.';
    ok = false;
  }
  if (address.length < 5) {
    document.getElementById('errAddress').innerText = 'Địa chỉ phải từ 5 ký tự.';
    ok = false;
  }
  if (!ok) return;
  // Kiểm tra giỏ hàng
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  if (!cart.length) {
    document.getElementById('orderResult').innerHTML = '<span class="error">Giỏ hàng trống!</span>';
    return;
  }
  // Xác nhận đặt hàng
  document.getElementById('orderResult').innerHTML =
    `<b>Đặt hàng thành công!</b><br>Cảm ơn ${name}.<br>Chúng tôi sẽ liên hệ qua ${phone}.`;
  localStorage.removeItem('cart');
  document.getElementById('orderForm').reset();
}; 