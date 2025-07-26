// Sản phẩm mẫu
class Product {
  constructor(id, name, price, image, desc, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.desc = desc;
    this.category = category;
  }
}

const products = [
  new Product(1, "Giày cầu lông Taro TR024-2", 499000, "images/giay_taro_tr024_2.jpg", "Giày cầu lông Taro TR024-2, thiết kế thể thao, êm ái, bám sân tốt.", "Giày"),
  new Product(2, "Giày cầu lông Taro TR024-1", 499000, "images/giay_taro_tr024_1.jpg", "Giày cầu lông Taro TR024-1, kiểu dáng trẻ trung, phù hợp mọi đối tượng.", "Giày"),
  new Product(3, "Giày cầu lông Yonex Comfort Z3 Wide", 3000000, "images/giay_yonex_comfort_z3.jpg", "Giày cầu lông Yonex Comfort Z3 Wide, cao cấp, siêu nhẹ, siêu êm.", "Giày"),
  new Product(4, "Giày cầu lông Yonex SHB 03EX - Trắng", 1940000, "images/giay_yonex_shb_03ex_trang.jpg", "Giày cầu lông Yonex SHB 03EX màu trắng, bền đẹp, thoáng khí.", "Giày"),
  new Product(5, "Giày Cầu Lông Yonex SHB 55EX Cam", 1604000, "images/giay_yonex_shb_55ex_cam.jpg", "Giày cầu lông Yonex SHB 55EX màu cam, thiết kế nổi bật, êm chân.", "Giày"),
  // Thêm các sản phẩm khác nếu cần
];

products.push(
  new Product(42, "Giày cầu lông Kawasaki K32012", 1000000, "images/giay-cau-long-kawasaki-k32012-trang-xanh-chinh-hang_1752721441.jpg", "Giày cầu lông Kawasaki K32012, bền, êm chân.", "Giày"),
  new Product(43, "Giày cầu lông Kawasaki 32011", 980000, "images/giay-cau-long-kawasaki-k32011-trang-chinh-hang_1751857633.jpg", "Giày cầu lông Kawasaki 32011, thiết kế thể thao, giá tốt.", "Giày"),
  new Product(44, "Giày cầu lông Victor P9200 cHP-AB", 1950000, "images/giay-cau-long-victor-p9200-chp-ab-trang-chinh-hang_1750884421.jpg", "Giày cầu lông Victor P9200 cHP-AB, cao cấp, bám sân tốt.", "Giày"),
  new Product(45, "Giày cầu lông Victor P9200 cHP-B", 1950000, "images/giay-cau-long-victor-p9200-chp-b-xanh-chinh-hang_1750882055.jpg", "Giày cầu lông Victor P9200 cHP-B, cao cấp, êm ái.", "Giày"),
  new Product(46, "Giày cầu lông Yonex SHB 470CR", 1570000, "images/giay-cau-long-yonex-shb-470cr-hong-noi-dia-trung_1750817381.jpg", "Giày cầu lông Yonex SHB 470CR, êm ái, bám sân tốt.", "Giày"),
  new Product(47, "Giày cầu lông Asics Court Control FF 3 Women", 3199999, "images/giay-cau-long-asics-court-control-ff-3-men-xanh-chinh-hang-1071a087-404-2_1750810380.jpg", "Giày cầu lông Asics Court Control FF 3 Women, cao cấp, dành cho nữ.", "Giày"),
  new Product(48, "Giày cầu lông Asics Gel-Rocket 12 Women", 1899000, "images/giay-cau-long-asics-gel-rocket-12-white-mako-blue-chinh-hang_1749245490.jpg", "Giày cầu lông Asics Gel-Rocket 12 Women, nhẹ, thoáng khí.", "Giày"),
  new Product(49, "Giày cầu lông Asics Gel-Rocket 12 Men", 1899000, "images/giay-cau-long-asics-gel-rocket-12-white-black-chinh-hang-1_1749244679.jpg", "Giày cầu lông Asics Gel-Rocket 12 Men, bền, êm chân.", "Giày")
);

products.push(
  new Product(26, "Giày cầu lông Yonex SHB 470CR", 1570000, "images/giay-cau-long-yonex-shb-470cr-hong-noi-dia-trung_1750817381.jpg", "Premium - Giày cầu lông Yonex SHB 470CR, êm ái, bám sân tốt.", "Giày"),
  new Product(27, "Giày cầu lông Yonex Pyro", 979000, "images/giay-cau-long-yonex-pyro-black-gold-chinh-hang_1750464017.jpg", "Premium - Giày cầu lông Yonex Pyro, thiết kế thể thao, nhẹ, bền.", "Giày"),
  new Product(28, "Giày cầu lông Yonex Atlas 4", 999000, "images/giay-cau-long-yonex-atlas-4-b-blue-aqua-marine-chinh-hang_1750203265.jpg", "Premium - Giày cầu lông Yonex Atlas 4, hỗ trợ di chuyển linh hoạt.", "Giày"),
  new Product(29, "Giày cầu lông Yonex Power Cushion Comfort Z3 Women", 2799000, "images/giay-cau-long-yonex-power-cushion-comfort-z3-women-ofwtrd-chinh-hang_1748917583.jpg", "Premium - Giày cầu lông Yonex Power Cushion Comfort Z3 Women, giảm 10%, giá cũ 3.099.000 ₫.", "Giày"),
  new Product(30, "Giày cầu lông Yonex Skill 5", 939000, "images/giay-cau-long-yonex-skill-5-white-black-chinh-hang_1742936485.jpg", "Giày cầu lông Yonex Skill 5, bền, nhẹ, thoải mái.", "Giày"),
  new Product(31, "Giày cầu lông Yonex Hy Ultra", 699000, "images/giay-cau-long-yonex-hy-ultra-hyper-blue-lime-chinh-hang_1742240617.jpg", "Giày cầu lông Yonex Hy Ultra, nhẹ, êm chân.", "Giày"),
  new Product(32, "Giày cầu lông Yonex Dominant 5", 939000, "images/giay-cau-long-yonex-dominant-5-white-black-chinh-hang_1741133143.jpg", "Giày cầu lông Yonex Dominant 5, hỗ trợ di chuyển tốt.", "Giày"),
  new Product(33, "Giày cầu lông Yonex Eclipsion Z3 Mid - Light Blue chính hãng", 2819000, "images/giay-cau-long-yonex-eclipsion-z3-mid-light-blue-chinh-hang_1740958940.jpg", "Giày cầu lông Yonex Eclipsion Z3 Mid - Light Blue, chính hãng, cao cấp.", "Giày"),
  new Product(34, "Giày cầu lông Yonex Velo 200", 649000, "images/giay-cau-long-yonex-velo-200-indigo-marine-white-chinh-hang_1742243192.jpg", "Giày cầu lông Yonex Velo 200, giá tốt, bền.", "Giày"),
  new Product(35, "Giày cầu lông Yonex Valor-1", 1200000, "images/giay-cau-long-yonex-valor-1-white-black-aqua-blue_1739301957.jpg", "Giày cầu lông Yonex Valor-1, thiết kế thể thao.", "Giày"),
  new Product(36, "Giày cầu lông Yonex Strike-X", 1200000, "images/giay-cau-long-yonex-strike-x-red-gold-chinh-hang_1738694651.jpg", "Giày cầu lông Yonex Strike-X, bám sân tốt.", "Giày"),
  new Product(37, "Giày cầu lông Yonex SHB 65X4 2025", 1809000, "images/giay-cau-long-yonex-shb-65x4-trang-2025-chinh-hang_1736972553.jpg", "Giày cầu lông Yonex SHB 65X4 2025, phiên bản mới.", "Giày"),
  new Product(38, "Giày cầu lông Yonex SHB 65Z4 Women 2025", 2749000, "images/giay-cau-long-yonex-shb-65z4-women-trang-2025-noi-dia-trung_1746216637.jpg", "Giày cầu lông Yonex SHB 65Z4 Women 2025, dành cho nữ.", "Giày"),
  new Product(39, "Giày cầu lông Yonex SHB 65Z4 Wide 2025", 2749000, "images/giay-cau-long-yonex-shb-65z4-wide-trang-2025-chinh-hang_1742527000.jpg", "Giày cầu lông Yonex SHB 65Z4 Wide 2025, bản rộng.", "Giày")
);

products.push(
  new Product(6, "Vợt cầu lông Yonex Arcsaber 0 Ability", 599000, "images/vot-cau-long-yonex-arcsaber-0-ability_1739223521.jpg", "Vợt cầu lông Yonex Arcsaber 0 Ability, dòng Premium, kiểm soát tốt.", "Vợt"),
  new Product(7, "Vợt cầu lông Yonex Arcsaber 0 Clear", 599000, "images/vot-cau-long-yonex-arcsaber-0-clear_1739223176.jpg", "Vợt cầu lông Yonex Arcsaber 0 Clear, dòng Premium, trợ lực tốt.", "Vợt"),
  new Product(8, "Vợt cầu lông Yonex Arcsaber 0 Feel", 599000, "images/vot-cau-long-yonex-arcsaber-0-feel_1739222312.jpg", "Vợt cầu lông Yonex Arcsaber 0 Feel, dòng Premium, cảm giác cầu tốt.", "Vợt"),
  new Product(9, "Vợt cầu lông Yonex Nanoflare Starbucks", 1590000, "images/vot-cau-long-yonex-nanoflare-starbucks-hong-noi-dia-trung_1728956698.jpg", "Vợt cầu lông Yonex Nanoflare Starbucks, thiết kế độc đáo, nhẹ, linh hoạt.", "Vợt"),
  new Product(10, "Vợt cầu lông Yonex Nanoflare Junior", 1639000, "images/vot-cau-long-yonex-nanoflare-junior-cyan-chinh-hang_1737405462.jpg", "Vợt cầu lông Yonex Nanoflare Junior, phù hợp trẻ em, trọng lượng nhẹ.", "Vợt"),
  new Product(11, "Vợt cầu lông Yonex Nanoflare 001F 2024", 959000, "images/vot-cau-long-yonex-nanoflare-700-play-midnight-purple-chinh-hang_1727136360.webp", "Vợt cầu lông Yonex Nanoflare 001F 2024, phiên bản mới, tốc độ cao.", "Vợt"),
  new Product(12, "Vợt cầu lông Yonex Arcsaber 2 Feel", 1259000, "images/vot-cau-long-yonex-arcsaber-2-feel-black-green-chinh-hang_1731868152.jpg", "Vợt cầu lông Yonex Arcsaber 2 Feel, kiểm soát tốt, cảm giác cầu tuyệt vời.", "Vợt"),
  new Product(13, "Vợt cầu lông Yonex Arcsaber 2 Clear", 1259000, "images/vot-cau-long-yonex-arcsaber-2-clear-black-blue-chinh-hang_1731718673.jpg", "Vợt cầu lông Yonex Arcsaber 2 Clear, trợ lực tốt, bền bỉ.", "Vợt"),
  new Product(14, "Vợt cầu lông Yonex Arcsaber 2 Ability", 1259000, "images/vot-cau-long-yonex-arcsaber-2-ability-black-pink-chinh-hang_1731718475.jpg", "Vợt cầu lông Yonex Arcsaber 2 Ability, dòng Premium, kiểm soát và sức mạnh.", "Vợt"),
  new Product(15, "Vợt cầu lông Yonex Nanoflare 700 Pro 2024", 4309000, "images/vot-cau-long-yonex-nanoflare-700-pro-chinh-hang_1727042472.jpg", "Vợt cầu lông Yonex Nanoflare 700 Pro 2024, tốc độ và sức mạnh vượt trội.", "Vợt"),
  new Product(16, "Vợt cầu lông Yonex Nanoflare 1000Z", 5099000, "images/Yonex_Nanoflare_1000Z.jpg", "Vợt cầu lông Yonex Nanoflare 1000Z, cao cấp, dành cho vận động viên chuyên nghiệp.", "Vợt"),
  new Product(17, "Vợt Cầu Lông Yonex Astrox 88D Pro 2024", 4599000, "images/vot-cau-long-yonex-astrox-88d-pro-2024-chinh-hang_1711052539.jpg", "Vợt Cầu Lông Yonex Astrox 88D Pro 2024, sức mạnh tấn công, kiểm soát tốt.", "Vợt"),
  new Product(18, "Vợt Cầu Lông Yonex Astrox 88S Pro 2024", 4599000, "images/vot-cau-long-yonex-astrox-88s-pro-2024-chinh-hang-1_1711051495.jpg", "Vợt Cầu Lông Yonex Astrox 88S Pro 2024, kiểm soát cầu, linh hoạt.", "Vợt"),
  new Product(19, "Vợt cầu lông Yonex Astrox 99 Pro", 4719000, "images/vot-cau-long-yonex-astrox-99-pro-do-chinh-hang_1735064653.jpg", "Vợt cầu lông Yonex Astrox 99 Pro, dòng cao cấp, sức mạnh tối đa.", "Vợt"),
  new Product(20, "Vợt cầu lông Yonex Nanoflare 700 Play", 1299000, "images/vot-cau-long-yonex-nanoflare-700-play-midnight-purple-chinh-hang_1727136360.webp", "Vợt cầu lông Yonex Nanoflare 700 Play, nhẹ, linh hoạt, giá tốt.", "Vợt"),
  new Product(21, "Vợt cầu lông Yonex Nanoflare 700 Game", 1899000, "images/vot-cau-long-yonex-nanoflare-700-game-chinh-hang_1727137637.jpg", "Vợt cầu lông Yonex Nanoflare 700 Game, tốc độ cao, kiểm soát tốt.", "Vợt"),
  new Product(22, "Vợt cầu lông Yonex Nanoflare 700 Tour", 2639000, "images/vot-cau-long-yonex-nanoflare-700-tour-1_1727142673.jpg", "Vợt cầu lông Yonex Nanoflare 700 Tour, dành cho người chơi nâng cao.", "Vợt"),
  new Product(23, "Vợt Cầu Lông Yonex NanoFlare 370 Speed", 1919000, "images/vot-cau-long-yonex-nanoflare-370-speed-blue-chinh-hang_1722473541.jpg", "Vợt Cầu Lông Yonex NanoFlare 370 Speed, tốc độ, kiểm soát tốt.", "Vợt"),
  new Product(24, "SET Vợt cầu lông Yonex NanoFlare FL New 2024", 3500000, "images/set-vot-cau-long-yonex-nanoflare-fl-new-2024-noi-dia_1720557231.jpg", "SET Vợt cầu lông Yonex NanoFlare FL New 2024, phiên bản mới nhất.", "Vợt"),
  new Product(25, "Vợt Cầu Lông Yonex Nanoflare Wex", 1750000, "images/vot-cau-long-yonex-nanoflare-wex-noi-dia-trung_1719176769.jpg", "Vợt Cầu Lông Yonex Nanoflare Wex, nhẹ, linh hoạt, dễ điều khiển.", "Vợt")

  
);

products.push(
  new Product(50, "Vợt cầu lông Victor Ars Alien Baltan chính hãng", 1290000, "images/vot-cau-long-victor-ars-alien-baltan-chinh-hang_1752431203.jpg", "Premium - Vợt cầu lông Victor Ars Alien Baltan chính hãng.", "Vợt"),
  new Product(51, "Vợt cầu lông Victor TK Ultramantiga chính hãng", 2490000, "images/vot-cau-long-victor-tk-ultramantiga-chinh-hang_1752431714.jpg", "Premium - Vợt cầu lông Victor TK Ultramantiga chính hãng.", "Vợt"),
  new Product(52, "Vợt cầu lông Victor Thruster Shenron G – DragonBall Z 2025", 3200000, "images/vot-cau-long-victor-thruster-shenron-g-ndash-dragonball-z-2025-noi-dia-trung_1750885003.jpg", "Premium - Vợt cầu lông Victor Thruster Shenron G – DragonBall Z 2025.", "Vợt"),
  new Product(53, "Set vợt cầu lông Victor Thruster Goku GB F – DragonBall Z 2025", 4800000, "images/set-vot-cau-long-victor-thruster-goku-gb-f-ndash-dragonball-z-2025-chinh-hang_1748488562.jpg", "Premium - Set vợt cầu lông Victor Thruster Goku GB F – DragonBall Z 2025.", "Vợt"),
  new Product(54, "Vợt cầu lông Victor TK Ultramanz chính hãng", 1790000, "images/vot-cau-long-victor-tk-ultramanz-chinh-hang_1752431561.jpg", "Vợt cầu lông Victor TK Ultramanz chính hãng.", "Vợt"),
  new Product(55, "Vợt cầu lông Victor Auraspeed Fantôme SC25 chính hãng", 4150000, "images/vot-cau-long-victor-auraspeed-fantome-sc25-chinh-hang_1749169807.jpg", "Vợt cầu lông Victor Auraspeed Fantôme SC25 chính hãng.", "Vợt"),
  new Product(56, "Vợt cầu lông Victor Thruster HMR Pro", 1390000, "images/vot-cau-long-victor-thruster-hmr-pro-x-bac-chinh-hang_1748466683.jpg", "Vợt cầu lông Victor Thruster HMR Pro.", "Vợt"),
  new Product(57, "Vợt Cầu Lông Victor Ryuga TD/C chính hãng", 2450000, "images/vot-cau-long-victor-ryuga-td-c-chinh-hang_1748488966.jpg", "Vợt Cầu Lông Victor Ryuga TD/C chính hãng.", "Vợt"),
  new Product(58, "Vợt cầu lông Victor AuraSpeed 90F - Xanh chính hãng", 2650000, "images/vot-victor-auraspeed-90f-xanh-chinh-hang_1748477786.jpg", "Vợt cầu lông Victor AuraSpeed 90F - Xanh chính hãng.", "Vợt"),
  new Product(59, "Vợt Cầu Lông Victor Thruster Ryuga II Pro CPS", 3950000, "images/vot-cau-long-victor-thruster-ryuga-ii-pro-cps-chinh-hang_1749169434.jpg", "Vợt Cầu Lông Victor Thruster Ryuga II Pro CPS.", "Vợt"),
  new Product(60, "Vợt Cầu Lông Victor Thruster Ryuga Metallic CPS", 3950000, "images/vot-cau-long-victor-thruster-ryuga-metallic-cps-chinh-hang_1748463731.jpg", "Vợt Cầu Lông Victor Thruster Ryuga Metallic CPS.", "Vợt"),
  new Product(62, "Vợt cầu lông Victor Thruster Ryuga II TD chính hãng", 3100000, "images/vot-cau-long-victor-thruster-ryuga-ii-td-chinh-hang_1744309520.jpg", "Vợt cầu lông Victor Thruster Ryuga II TD chính hãng.", "Vợt"),
  new Product(63, "Vợt cầu lông Victor Auraspeed FANTÔME 2025", 3450000, "images/vot-cau-long-victor-auraspeed-fantome-2025-chinh-hang_1744255601.jpg", "Vợt cầu lông Victor Auraspeed FANTÔME 2025.", "Vợt"),
  new Product(64, "Vợt cầu lông Victor Auraspeed 100X Ultra New 2025", 3700000, "images/vot-cau-long-victor-auraspeed-100x-ultra-g-2025-chinh-hang_1744255806.jpg", "Vợt cầu lông Victor Auraspeed 100X Ultra New 2025.", "Vợt"),
  new Product(65, "Set vợt cầu lông Victor Doraemon TK-DRM", 2349000, "images/set-vot-cau-long-victor-doraemon-tk-drm-noi-dia-trung-1_1741374214.jpg", "Set vợt cầu lông Victor Doraemon TK-DRM.", "Vợt"),
  new Product(66, "Set vợt cầu lông Victor Doraemon DX-DRM GB", 3600000, "images/set-vot-cau-long-victor-doraemon-dx-drm-gb-noi-dia-trung-1_1741373737.jpg", "Set vợt cầu lông Victor Doraemon DX-DRM GB.", "Vợt"),
  new Product(67, "Vợt cầu lông Victor TK 220H II", 2240000, "images/vot-cau-long-victor-tk-220h-ii-chinh-hang_1718227945.jpg", "Vợt cầu lông Victor TK 220H II.", "Vợt"),
  new Product(68, "Set vợt cầu lông Victor Thruster K CNY 2025", 4190000, "images/set-vot-cau-long-victor-thruster-k-cny-2025-chinh-hang_1737313813.jpg", "Set vợt cầu lông Victor Thruster K CNY 2025.", "Vợt"),
  new Product(69, "Vợt Cầu Lông Victor DX-3H 2025", 1249000, "images/vot-cau-long-victor-dx-3h-2025-chinh-hang_1737313212.jpg", "Vợt Cầu Lông Victor DX-3H 2025.", "Vợt"),
  new Product(70, "Vợt cầu lông Victor Brave Sword 12 Pro", 3200000, "images/vot-cau-long-victor-brave-sword-12-pro-chinh-hang_1737312826.jpg", "Vợt cầu lông Victor Brave Sword 12 Pro.", "Vợt"),
  new Product(71, "Vợt Cầu Lông Victor TK - TTY Ultima", 3800000, "images/vot-cau-long-victor-tk-tty-ultima-chinh-hang_1732668820.jpg", "Vợt Cầu Lông Victor TK - TTY Ultima.", "Vợt"),
  new Product(72, "Vợt cầu lông Victor THRUSTER RYUGA CLS", 1390000, "images/vot-cau-long-victor-thruster-ryuga-cls-d-noi-dia-trung_1751307037.jpg", "Vợt cầu lông Victor THRUSTER RYUGA CLS.", "Vợt"),
  new Product(73, "Vợt cầu lông Victor Mjolnir Metallic Limited 2024", 3750000, "images/vot-cau-long-victor-mjolnir-metallic-limited-2024-chinh-hang_1726801911.jpg", "Vợt cầu lông Victor Mjolnir Metallic Limited 2024.", "Vợt"),
  new Product(74, "Vợt Cầu Lông Victor TK-F Ultra", 3400000, "images/vot-cau-long-victor-tk-f-ultra-chinh-hang_1722819455.jpg", "Vợt Cầu Lông Victor TK-F Ultra.", "Vợt"),
  new Product(75, "Vợt Cầu Lông Victor ARS 90K Metallic", 3400000, "images/combo-mua-vot-cau-long-victor-ars-90k-ii-td-tang-vot-victor-ars-9990k-vot-victor-tk220h-ii_1744309071.jpg", "Vợt Cầu Lông Victor ARS 90K Metallic.", "Vợt")
);

// Hiển thị sản phẩm
let currentCategory = 'Tất cả';
function filterCategory(cat) {
  currentCategory = cat;
  renderProducts();
}

function renderProducts() {
  const container = document.getElementById('products');
  let filtered = products;
  if (currentCategory !== 'Tất cả') {
    filtered = products.filter(p => p.category === currentCategory);
  }
  container.innerHTML = filtered.map(p => `
    <div class="product" onmouseover="showDetail(${p.id})" onmouseout="hideDetail(${p.id})">
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.price.toLocaleString()} VNĐ</p>
      <button onclick="addToCart(${p.id})">Thêm vào giỏ</button>
      <div class="detail" id="detail-${p.id}" style="display:none">${p.desc}</div>
    </div>
  `).join('');
}

function showDetail(id) {
  document.getElementById('detail-' + id).style.display = 'block';
}
function hideDetail(id) {
  document.getElementById('detail-' + id).style.display = 'none';
}

// Giỏ hàng đơn giản lưu localStorage
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const prod = products.find(p => p.id === id);
  const found = cart.find(item => item.id === id);
  if (found) found.qty++;
  else cart.push({ ...prod, qty: 1 });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert('Đã thêm vào giỏ!');
}

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  document.getElementById('cart-count').innerText = cart.reduce((s, i) => s + i.qty, 0);
}

function showCart() {
  renderCart();
  document.getElementById('cart-modal').style.display = 'flex';
}
function hideCart() {
  document.getElementById('cart-modal').style.display = 'none';
}

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
    updateCartCount();
  }
}

function removeItem(id) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart = cart.filter(i => i.id !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

// Slider đơn giản
const sliderImages = [
  'images/baned_1.jpg',
  'images/baned_2.jpg',
  'images/baned_3.jpg',
  'images/baned_4.jpg',
  'images/baned_5.jpg',
  'images/baned_6.jpg',
  'images/baned_7.jpg',
];
let sliderIndex = 0;
let sliderTimer = null;
function renderSlider() {
  const slider = document.getElementById('slider');
  slider.innerHTML = `
    <img src="${sliderImages[sliderIndex]}" class="slider-img">
    <button onclick="prevSlide()">&#10094;</button>
    <button onclick="nextSlide()">&#10095;</button>
  `;
  if (sliderTimer) clearTimeout(sliderTimer);
  sliderTimer = setTimeout(() => {
    sliderIndex = (sliderIndex + 1) % sliderImages.length;
    renderSlider();
  }, 3000);
}
function prevSlide() {
  sliderIndex = (sliderIndex - 1 + sliderImages.length) % sliderImages.length;
  renderSlider();
}
function nextSlide() {
  sliderIndex = (sliderIndex + 1) % sliderImages.length;
  renderSlider();
}

// Countdown clock cho flash sale
function startCountdown() {
  // Kiểm tra localStorage đã có thời gian kết thúc chưa
  let end = localStorage.getItem('flashsale_end');
  if (!end) {
    // Nếu chưa có, thiết lập thời gian kết thúc mới (2 tiếng từ bây giờ)
    end = Date.now() + 2 * 60 * 60 * 1000;
    localStorage.setItem('flashsale_end', end);
  } else {
    end = parseInt(end);
  }
  function update() {
    const now = Date.now();
    let diff = Math.max(0, end - now);
    const h = Math.floor(diff / 3600000);
    diff %= 3600000;
    const m = Math.floor(diff / 60000);
    diff %= 60000;
    const s = Math.floor(diff / 1000);
    document.getElementById('countdown').innerHTML =
      `<b>Flash Sale:</b> còn ${h}h ${m}m ${s}s!`;
    if (end - now > 0) setTimeout(update, 1000);
    else localStorage.removeItem('flashsale_end');
  }
  update();
}

window.onload = function() {
  renderSlider();
  renderProducts();
  startCountdown();
  updateCartCount();
}; 
window.prevSlide = prevSlide;
window.nextSlide = nextSlide; 