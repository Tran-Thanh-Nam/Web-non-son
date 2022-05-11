
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
}); 

var nam = new Swiper(".nam", {
  slidesPerView: 5,
  spaceBetween: 0,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

var vote = new Swiper(".vote", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var tin = new Swiper(".tin", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".spSwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

//  san pham tuong tu
var sptt = new Swiper(".sptt", {
  slidesPerView: 5,
  spaceBetween: 20,
  slidesPerGroup:5,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

//thanh lọc giá
  var slider = document.getElementById("myRange");
  var output = document.getElementById("max");
if (slider?.value) {
  output.innerHTML = slider?.value;
  slider.oninput = function() {
    output.innerHTML = this.value;
  }
 }

 //ẩn hiện icon giỏ hàng
 if (window.localStorage.getItem('dsGioHang') == null || window.localStorage.getItem('dsGioHang')== '[]') {
  var minilist = document.getElementById("button");
  minilist.onclick = function(){
    var thongbaorong = document.getElementById("thongbaorong");
    if(thongbaorong.style.display === 'none'){
      thongbaorong.style.display = "block";
     }else{
      thongbaorong.style.display = "none";
     }
  }
 }else{
  var minilist = document.getElementById("button");
  minilist.onclick = function(){
    var minigh = document.getElementById("mini-list-product")
    if(minigh.style.display === 'none'){
      minigh.style.display = "block";
     }else{
      minigh.style.display = "none";
     }
  }
 }

//tăng giảm trang chitietsp
function reduce(){
  const soluongsp = Number(document.getElementById("soluongsp").value);
  if(soluongsp == 1)
  {
    document.getElementById("soluongsp").value = 1;
  }else{
    var hieu = soluongsp - 1;
    document.getElementById("soluongsp").value = hieu;
  }
}
function increase(){
  const soluongsp = Number(document.getElementById("soluongsp").value);
  var tong = soluongsp + 1;
  document.getElementById("soluongsp").value = tong;
}

// ẩn giỏ hàng
if (window.localStorage.getItem('dsGioHang') == null || window.localStorage.getItem('dsGioHang')== '[]') {
  document.getElementById("shopping-cart").style.display = "none"; 
  document.querySelector(".new-first").style.display = "block";
}else{
  document.getElementById("shopping-cart").style.display = "block";
  document.querySelector(".new-first").style.display = "none";
}

// window.localStorage.setItem('dsGioHang', JSON.stringify([]))
function themgiohang(){
  const tensp = document.getElementById("tensp").innerHTML;
  const giasp = document.getElementById("giasp").innerHTML;
  const soluongsp = Number(document.getElementById("soluongsp").value);
  const anhsp = document.getElementById("anhsp").src;
  const gia1sp = soluongsp * Number(giasp);
  const sp = {
    tensp,
    giasp,
    soluongsp,
    anhsp,
    gia1sp
  }  
  const dsGioHang = window.localStorage.getItem('dsGioHang')
  if (!dsGioHang) {
    localStorage.setItem('dsGioHang', JSON.stringify([sp]))
    return
  }
  const formatdsGioHang = JSON.parse(dsGioHang)
  const tonTaiSpIndex = formatdsGioHang.findIndex(item => item.tensp === tensp)
  if (tonTaiSpIndex > -1) {
    formatdsGioHang[tonTaiSpIndex].soluongsp += soluongsp
  } else {
    formatdsGioHang.push(sp)
  }
  window.localStorage.setItem('dsGioHang', JSON.stringify(formatdsGioHang))
  location.reload();
}

//chuyển đổi dssp sang html tranh chủ
function chuyenDSSPsangHTMLtrangchu(sp){
  var spanHTMLdssp ='<div>';
  var allpricefirst = 0;
  var allsoluong = 0;
  for (let i = 0; i < sp.length; i++) {
    const sanpham = sp[i];
    const spanhtmlsanpham = chuyendoituongvaospan(sanpham);
    allsoluong += Number(sp[i].soluongsp);
    var tongsl = document.getElementById("mini")
    tongsl.innerHTML = allsoluong;
    allpricefirst += Number(sp[i].gia1sp);
    var tongphu = document.getElementById("tongphu");
    tongphu.innerHTML = allpricefirst
    spanHTMLdssp = spanHTMLdssp + spanhtmlsanpham;
  }
  spanHTMLdssp = spanHTMLdssp + "</div>";
  return spanHTMLdssp;
}
function chuyendoituongvaospan(sp){      
    var html = '';
    html += '<div class="mini-product">'
    html += '<div class="col">'
    html += '<img src="'+sp.anhsp+'" width="60px" height="60px">'
    html += '<div class="box-text">'
    html += '<div class="mini-chitiet"> '                            
    html += '<p class="mini-tensp">'+sp.tensp+'</p>'
    html += '<span class="minisl">'+sp.soluongsp+'</span>'
    html += '<span class="minisl">x</span>'
    html += '<span class="mini-gia">'+sp.giasp+'</span>'
    html += '<span class="bottongia"> ₫</span>'
    html += '</div></div><a href="TrangGioHang.html" class="remove" onclick="xoa(event)" >x</a></div>'   
    html += '</div>'
    return html;   
}

// chuyển dssp từ local sang html trong giỏ hàng
function chuyendsspthanhHTML(sp){
  var HTMLdssp ='<tbody>';
  var allpricefirst = 0;
  for (let i = 0; i < sp.length; i++) {
    const sanpham = sp[i];
    const htmlsanpham = chuyendoituongspthanhHTML(sanpham);
    allpricefirst += Number(sp[i].gia1sp);
    var tongdonhang = document.querySelectorAll("#tongdonhang");
    for (let j = 0; j < tongdonhang.length; j++) {
      tongdonhang[j].innerHTML = allpricefirst;
    }
    HTMLdssp = HTMLdssp + htmlsanpham;
  }
  HTMLdssp = HTMLdssp + "</tbody>";
  return HTMLdssp;
}
function chuyendoituongspthanhHTML(sp){      
    var html = '';
      html +='<tr id="product">'
      html += '<td class="product-remove"><a href="TrangGioHang.html" class="remove" onclick="xoa(event)" >x</a></td>'                
      html += '<td class="product-thumbnail"><img width="76px" height="76px" src="'+sp.anhsp+'" id="gh-anhsp"></td>'
      html += '<td class="product-name" data-title="Sản phẩm" id="gh-tensp">'+sp.tensp+'</td>'  
      html += '<td class="product-price" data-title="Giá"><span class="woocommerce-Price-amount amount"><span id="gh-giasp">'+sp.giasp+'</span><span class="woocommerce-Price-currencySymbol">₫</span></span></td>'
      html += '<td class="product-quantity" data-title="Số lượng"><div class="quantity buttons_added">'
      html += '<input type="button" value="-" class="minus is-form" onclick="giam(event)">	'
      html += '<input type="number" id="gh-soluongsp" class="input-text qty text" step="1" min="1" max="9999" name="quantity" value="'+sp.soluongsp+'" title="SL" size="4" pattern="[0-9]*" inputmode="numeric">'
      html += '<input type="button" value="+" class="plus is-form" onclick="tang(event)"></div></td>'
      html += '<td class="product-subtotal" data-title="Tổng"><span class="woocommerce-Price-amount amount"><span id="gh-tongsp">'+sp.gia1sp+'</span><span class="woocommerce-Price-currencySymbol">000 ₫</span></span>'					
      html += '</td>' 
      html += '</tr>'      
      return html;   
}

//tính giá bán
function tinhgiaban(){  
  const dsGioHang = window.localStorage.getItem('dsGioHang')
  const format = JSON.parse(dsGioHang)
  const danhsach =  document.querySelectorAll('#product');
  var allprice = 0;
  for (let i = 0; i < danhsach.length; i++) {   
    const tenspGH = danhsach[i].querySelector("#gh-tensp").innerHTML;
    const SpIndex = format.findIndex(item => item.tensp === tenspGH)
    var sl = Number(danhsach[i].querySelector('#gh-soluongsp').value);
    var giasp = Number(danhsach[i].querySelector('#gh-giasp').innerHTML);  
    var tong = danhsach[i].querySelector('#gh-tongsp');
    var sum = giasp * sl;
    tong.innerHTML = sum; 
    allprice += sum; 
    var tongdonhang = document.querySelectorAll("#tongdonhang");
    for (let j = 0; j < tongdonhang.length; j++) {
      tongdonhang[j].innerHTML = allprice;
    }
    tongdonhang.innerHTML = allprice;
    format[SpIndex].soluongsp = sl;
    format[SpIndex].gia1sp = sum;
    window.localStorage.setItem('dsGioHang', JSON.stringify(format))
  }
  
}

//xóa trong gio hàng
function xoa(event){
  const parent = event.target.parentNode.parentNode;
  const dsGioHang = window.localStorage.getItem('dsGioHang')
  const sp = JSON.parse(dsGioHang)
  const filtered = sp.filter(item => item.tensp !== parent.querySelector('#gh-tensp').innerHTML);
  window.localStorage.setItem('dsGioHang', JSON.stringify(filtered));
}

//tăng giảm trang giohang
function giam(event){
  const parent = event.target.parentNode;
  const soluogspGH = Number(parent.querySelector("#gh-soluongsp").value)
  if(soluogspGH == 1)
  {
    parent.querySelector("#gh-soluongsp").value = 1;
  }else{
    var hieu = soluogspGH - 1;
    parent.querySelector("#gh-soluongsp").value = hieu;
  }
}
function tang(event){
  const parent = event.target.parentNode;
  const soluogspGH = Number(parent.querySelector("#gh-soluongsp").value)
  var tong = soluogspGH + 1;
  parent.querySelector("#gh-soluongsp").value = tong;
}





  

  
  





