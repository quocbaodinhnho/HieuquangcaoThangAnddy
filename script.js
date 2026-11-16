/* =====================================================
   1) THÔNG TIN CỬA HÀNG – sửa ở đây
   ===================================================== */
const SHOP = {
  ten: "Quảng Cáo Thắng Andy",            // 👈 Tên hiệu quảng cáo
  chuLogo: "AD",                         // 👈 2 chữ cái hiện trong logo
  sdt: "0357122851",                     // 👈 Số điện thoại (viết liền, không dấu cách) – dùng cho Gọi + Zalo
  diaChi: "G 21B, Tổ 12, khu phố Xuân Bình, Phường Long Khánh,Thành Phố Đồng NaiY", // 👈 Địa chỉ xưởng/cửa hàng
  gio: "Mở cửa: 7:30 – 16:30 (T2 – T7)" // 👈 Giờ làm việc
};

/* =====================================================
   2) DỮ LIỆU DỊCH VỤ – mỗi dịch vụ là một khối { ... }
   Muốn thêm dịch vụ: copy 1 khối, đổi id và nội dung.
   - menu: chữ hiện trên thanh xanh navy
   - anh: mảng 5 đường dẫn ảnh (ảnh đầu tiên là ảnh lớn).
          Thay bằng ảnh thật: ["images/alu-1.jpg", "images/alu-2.jpg", ...]
   - giaGoc / giaUuDai: chữ hiển thị giá gạch ngang và giá ưu đãi
   - bangGia: danh sách quy cách (gia chỉ để hiển thị)
   - vatLieu: dùng cho công cụ tính giá, donGia = đồng / m²
   - camKet: các dòng trong khung xanh navy
   - moTa: HTML mô tả chi tiết (quy trình, chất liệu)
   ===================================================== */

// Hàm tạo 5 ảnh mẫu (chỉ để xem thử). Khi có ảnh thật, thay `anhMau("x")` bằng mảng đường dẫn.
const anhMau = (tu) => [1, 2, 3, 4, 5].map((i) => `https://picsum.photos/seed/${tu}${i}/1000/750`);

const CAM_KET_CHUNG = [
  "Miễn phí khảo sát, đo đạc và thiết kế 2D/3D tận nơi",
  "Bảo hành đèn LED và kết cấu lên đến 24 tháng",
  "Thi công nhanh, đúng hẹn, hỗ trợ xin phép bảng hiệu"
];

const QUY_TRINH = `
  <h3>Quy trình thi công</h3>
  <ol>
    <li>Tiếp nhận yêu cầu, khảo sát và đo đạc thực tế (miễn phí).</li>
    <li>Thiết kế phối cảnh 2D/3D, chỉnh sửa đến khi khách hài lòng.</li>
    <li>Báo giá chi tiết, ký hợp đồng và đặt cọc.</li>
    <li>Sản xuất tại xưởng, kiểm tra chất lượng.</li>
    <li>Lắp đặt, nghiệm thu, bàn giao và bảo hành.</li>
  </ol>`;

const DICH_VU = [
  {
    id: "alu", menu: "Bảng hiệu Alu",
    tieuDe: "Thi công bảng hiệu Alu chữ nổi Mica",
    giaGoc: "650.000đ", giaUuDai: "Từ 550.000đ / m²",
    anh: anhMau("alu"),
    bangGia: [
      { ten: "Mặt dựng Alu trong nhà", gia: "550.000đ/m²" },
      { ten: "Mặt dựng Alu ngoài trời (khung sắt hộp)", gia: "750.000đ/m²" },
      { ten: "Chữ nổi Mica hắt sáng chân", gia: "1.200.000đ/m²" },
      { ten: "Chữ Inox vàng gương", gia: "2.500.000đ/m²" }
    ],
    vatLieu: [
      { ten: "Alu trong nhà", donGia: 550000 },
      { ten: "Alu ngoài trời", donGia: 750000 },
      { ten: "Chữ nổi Mica hắt sáng", donGia: 1200000 },
      { ten: "Chữ Inox vàng gương", donGia: 2500000 }
    ],
    camKet: CAM_KET_CHUNG,
    moTa: `<h3>Giới thiệu</h3><p>Bảng hiệu Alu (Aluminium composite) bền màu, nhẹ, chống nước, phù hợp mặt tiền cửa hàng, văn phòng. Kết hợp chữ nổi Mica hoặc Inox để tăng độ sang trọng.</p>${QUY_TRINH}`
  },
  {
    id: "chunoi", menu: "Chữ nổi Mica/Inox",
    tieuDe: "Chữ nổi Mica – Inox cao cấp",
    giaGoc: "1.500.000đ", giaUuDai: "Từ 1.200.000đ / m²",
    anh: anhMau("chunoi"),
    bangGia: [
      { ten: "Chữ nổi Mica dày 3mm", gia: "1.200.000đ/m²" },
      { ten: "Chữ nổi Mica hắt sáng LED", gia: "1.600.000đ/m²" },
      { ten: "Chữ Inox vàng/bạc xước", gia: "2.200.000đ/m²" },
      { ten: "Chữ Inox vàng gương", gia: "2.500.000đ/m²" }
    ],
    vatLieu: [
      { ten: "Mica 3mm", donGia: 1200000 },
      { ten: "Mica hắt sáng LED", donGia: 1600000 },
      { ten: "Inox xước", donGia: 2200000 },
      { ten: "Inox vàng gương", donGia: 2500000 }
    ],
    camKet: CAM_KET_CHUNG,
    moTa: `<h3>Giới thiệu</h3><p>Chữ nổi cắt CNC/laser chính xác, viền sắc nét, hoàn thiện thủ công. Có thể hắt sáng chân hoặc sáng mặt.</p>${QUY_TRINH}`
  },
  {
    id: "hopden", menu: "Hộp đèn LED",
    tieuDe: "Hộp đèn LED mặt bạt / Mica",
    giaGoc: "1.300.000đ", giaUuDai: "Từ 1.050.000đ / m²",
    anh: anhMau("hopden"),
    bangGia: [
      { ten: "Hộp đèn mặt bạt Hiflex", gia: "1.050.000đ/m²" },
      { ten: "Hộp đèn mặt Mica sữa", gia: "1.450.000đ/m²" },
      { ten: "Hộp đèn hút nổi (Mica hút chân không)", gia: "1.900.000đ/m²" }
    ],
    vatLieu: [
      { ten: "Mặt bạt Hiflex", donGia: 1050000 },
      { ten: "Mặt Mica sữa", donGia: 1450000 },
      { ten: "Mica hút nổi", donGia: 1900000 }
    ],
    camKet: CAM_KET_CHUNG,
    moTa: `<h3>Giới thiệu</h3><p>Hộp đèn LED sáng đều, tiết kiệm điện, dễ thay mặt in. Phù hợp quán ăn, spa, cửa hàng.</p>${QUY_TRINH}`
  },
  {
    id: "inbat", menu: "In Bạt / Decal",
    tieuDe: "In bạt Hiflex – Decal các loại",
    giaGoc: "70.000đ", giaUuDai: "Từ 55.000đ / m²",
    anh: anhMau("inbat"),
    bangGia: [
      { ten: "Bạt Hiflex 1 lớp", gia: "55.000đ/m²" },
      { ten: "Bạt Hiflex cán bóng/mờ", gia: "75.000đ/m²" },
      { ten: "Decal giấy", gia: "90.000đ/m²" },
      { ten: "Decal PP dán kính, bồi Formex", gia: "150.000đ/m²" }
    ],
    vatLieu: [
      { ten: "Bạt Hiflex", donGia: 55000 },
      { ten: "Bạt Hiflex cán màng", donGia: 75000 },
      { ten: "Decal giấy", donGia: 90000 },
      { ten: "Decal PP bồi Formex", donGia: 150000 }
    ],
    camKet: CAM_KET_CHUNG,
    moTa: `<h3>Giới thiệu</h3><p>In khổ lớn mực bền màu ngoài trời, lấy nhanh trong ngày với số lượng nhỏ.</p>${QUY_TRINH}`
  },
  {
    id: "standee", menu: "Standee / Poster",
    tieuDe: "Standee – Poster – Backdrop",
    giaGoc: "250.000đ", giaUuDai: "Từ 180.000đ / m²",
    anh: anhMau("standee"),
    bangGia: [
      { ten: "Poster PP / Couche", gia: "180.000đ/m²" },
      { ten: "Standee chữ X (kèm khung)", gia: "250.000đ/bộ" },
      { ten: "Standee cuốn nhôm", gia: "450.000đ/bộ" }
    ],
    vatLieu: [
      { ten: "Poster PP", donGia: 180000 },
      { ten: "Standee khung X", donGia: 250000 },
      { ten: "Standee cuốn nhôm", donGia: 450000 }
    ],
    camKet: CAM_KET_CHUNG,
    moTa: `<h3>Giới thiệu</h3><p>Standee, poster, backdrop sự kiện in sắc nét, giao nhanh trong ngày.</p>${QUY_TRINH}`
  },
  {
    id: "cnc", menu: "Vách ngăn CNC",
    tieuDe: "Vách ngăn CNC trang trí",
    giaGoc: "1.400.000đ", giaUuDai: "Từ 1.100.000đ / m²",
    anh: anhMau("cnc"),
    bangGia: [
      { ten: "CNC MDF sơn hoàn thiện", gia: "1.100.000đ/m²" },
      { ten: "CNC Alu", gia: "1.600.000đ/m²" },
      { ten: "CNC Inox", gia: "2.400.000đ/m²" }
    ],
    vatLieu: [
      { ten: "CNC MDF sơn", donGia: 1100000 },
      { ten: "CNC Alu", donGia: 1600000 },
      { ten: "CNC Inox", donGia: 2400000 }
    ],
    camKet: CAM_KET_CHUNG,
    moTa: `<h3>Giới thiệu</h3><p>Vách ngăn họa tiết cắt CNC theo mẫu riêng, dùng cho phòng khách, quán cà phê, showroom.</p>${QUY_TRINH}`
  }
];

/* Ảnh xưởng sản xuất (hiện ở tab Mô tả) – thay bằng ảnh thật */
const ANH_XUONG = ["https://picsum.photos/seed/xuong1/500/340", "https://picsum.photos/seed/xuong2/500/340", "https://picsum.photos/seed/xuong3/500/340"];

/* =====================================================
   3) PHẦN XỬ LÝ – thường không cần sửa
   ===================================================== */
const $ = (id) => document.getElementById(id);
const vnd = (n) => Math.round(n).toLocaleString("vi-VN") + "đ";
let cur = DICH_VU[0];

/* Thông tin cửa hàng & liên hệ */
$("shopName").textContent = SHOP.ten;
$("logo").textContent = SHOP.chuLogo;
document.title = SHOP.ten + " – Thi công bảng hiệu, in ấn";
$("topInfo").innerHTML = `📍 ${SHOP.diaChi}<br>🕒 ${SHOP.gio}`;
$("footInfo").innerHTML = `<b>${SHOP.ten}</b> · ${SHOP.diaChi} · Hotline/Zalo: ${SHOP.sdt}`;
$("callPill").href = $("qCall").href = "tel:" + SHOP.sdt;
$("callNum").textContent = SHOP.sdt;
$("zaloBtn").href = "https://zalo.me/" + SHOP.sdt;

/* Menu + danh sách dịch vụ trong popup */
$("menuList").innerHTML = DICH_VU.map((d) => `<li><button data-id="${d.id}">${d.menu}</button></li>`).join("");
$("qSrv").innerHTML = DICH_VU.map((d) => `<option>${d.menu}</option>`).join("");
$("menuList").onclick = (e) => { const b = e.target.closest("button"); if (b) chonDichVu(b.dataset.id); };

/* Hiển thị 1 dịch vụ */
function chonDichVu(id) {
  cur = DICH_VU.find((d) => d.id === id) || DICH_VU[0];
  document.querySelectorAll("#menuList button").forEach((b) => b.classList.toggle("on", b.dataset.id === cur.id));
  $("pTitle").textContent = cur.tieuDe;
  $("pOld").textContent = cur.giaGoc;
  $("pNew").textContent = cur.giaUuDai;
  $("pList").innerHTML = cur.bangGia.map((g) => `<li>${g.ten}: <b>${g.gia}</b></li>`).join("");
  $("pPromise").innerHTML = cur.camKet.map((c) => `<li>- ${c}</li>`).join("");
  $("desc").innerHTML = cur.moTa + `<h3>Hình ảnh xưởng sản xuất</h3><div class="work">${ANH_XUONG.map((s) => `<img src="${s}" alt="Xưởng sản xuất" loading="lazy">`).join("")}</div>`;
  $("cMat").innerHTML = cur.vatLieu.map((v, i) => `<option value="${i}">${v.ten} – ${vnd(v.donGia)}/m²</option>`).join("");
  $("qSrv").value = cur.menu;
  $("thumbs").innerHTML = cur.anh.map((s, i) => `<button data-i="${i}"><img src="${s}" alt="Góc ${i + 1}" loading="lazy"></button>`).join("");
  chonAnh(0);
  tinhGia();
  ["product", "desc"].forEach((k) => { const el = $(k); el.classList.remove("fade"); void el.offsetWidth; el.classList.add("fade"); });
}

/* Ảnh lớn + thumbnails + lightbox */
function chonAnh(i) {
  $("bigImg").src = cur.anh[i];
  document.querySelectorAll("#thumbs button").forEach((b, k) => b.classList.toggle("on", k === i));
}
$("thumbs").onclick = (e) => { const b = e.target.closest("button"); if (b) chonAnh(+b.dataset.i); };
const moLightbox = () => { $("lbImg").src = $("bigImg").src; $("lightbox").classList.remove("hidden"); };
$("zoomBtn").onclick = moLightbox;
$("bigImg").onclick = moLightbox;
$("lightbox").onclick = (e) => { if (e.target.id !== "lbImg") $("lightbox").classList.add("hidden"); };

/* Chia sẻ */
document.querySelector(".share").onclick = (e) => {
  const t = e.target.dataset.share, u = encodeURIComponent(location.href);
  if (t === "fb") window.open("https://www.facebook.com/sharer/sharer.php?u=" + u, "_blank");
  if (t === "zalo") window.open("https://zalo.me/share?u=" + u, "_blank");
  if (t === "copy") navigator.clipboard.writeText(location.href).then(() => {
    $("copyBtn").textContent = "Đã copy ✓"; setTimeout(() => ($("copyBtn").textContent = "Copy link"), 1800);
  });
};

/* Tabs */
document.querySelector(".tabbar").onclick = (e) => {
  const t = e.target.dataset.tab; if (!t) return;
  document.querySelectorAll(".tab").forEach((b) => b.classList.toggle("on", b.dataset.tab === t));
  document.querySelectorAll(".pane").forEach((p) => p.classList.toggle("on", p.id === t));
};

/* Công cụ tính giá sơ bộ */
function tinhGia() {
  const w = Math.max(0, +$("cW").value || 0), h = Math.max(0, +$("cH").value || 0);
  const m = cur.vatLieu[+$("cMat").value] || cur.vatLieu[0], dt = w * h;
  $("cArea").textContent = `Diện tích: ${dt.toFixed(2)} m²`;
  $("cTotal").textContent = vnd(dt * m.donGia);
}
["cW", "cH", "cMat"].forEach((id) => $(id).addEventListener("input", tinhGia));

/* Popup báo giá */
const quote = $("quote");
document.querySelectorAll("[data-open-quote]").forEach((b) => (b.onclick = () => {
  const dt = (+$("cW").value || 0) * (+$("cH").value || 0);
  if (!$("qNote").value && dt) $("qNote").value = `Kích thước ${$("cW").value}m x ${$("cH").value}m`;
  quote.classList.remove("hidden");
}));
$("qClose").onclick = () => quote.classList.add("hidden");
quote.onclick = (e) => { if (e.target === quote) quote.classList.add("hidden"); };
document.addEventListener("keydown", (e) => { if (e.key === "Escape") { quote.classList.add("hidden"); $("lightbox").classList.add("hidden"); } });

/* Gửi sang Zalo: trang tĩnh không gửi tự động được nên nội dung được copy sẵn, khách chỉ cần dán (Ctrl+V) vào khung chat */
$("qZalo").onclick = () => {
  const ten = $("qName").value.trim(), sdt = $("qPhone").value.trim();
  if (!ten || !/^[0-9 +.]{9,13}$/.test(sdt)) { $("qMsg").textContent = "Vui lòng nhập họ tên và số điện thoại hợp lệ."; return; }
  const text = `Xin chào ${SHOP.ten}, tôi là ${ten}, SĐT ${sdt}.\nDịch vụ: ${$("qSrv").value}\nYêu cầu: ${$("qNote").value || "(chưa ghi)"}`;
  const mo = () => window.open("https://zalo.me/" + SHOP.sdt, "_blank");
  navigator.clipboard.writeText(text).then(() => { $("qMsg").style.color = "#2e7d32"; $("qMsg").textContent = "Đã copy nội dung – hãy dán vào khung chat Zalo."; mo(); }, mo);
};

chonDichVu(DICH_VU[0].id);
