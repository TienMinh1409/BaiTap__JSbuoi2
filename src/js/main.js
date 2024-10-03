
console.log("hello");

// Bài tập Tính Lương
document.querySelector("#tinhLuong").onclick = function () {
    var luongCB = 100000;
    let ngayCong = +document.querySelector("#ngayCong").value;
    console.log('ngayCong: ', ngayCong);

    let tienCong = +luongCB * +ngayCong;
    console.log('tienCong: ', tienCong);
    document.querySelector("#tongLuong").innerHTML = tienCong + "đồng";
}

//-------Bài Tập Tính Điểm Trung Bình--------
document.querySelector("#tinhDiemTB").onclick = function () {
    
    let diemToan = +document.querySelector("#diemToan").value;
    console.log('diemToan: ', diemToan);
    let diemLy = +document.querySelector("#diemLy").value;
    let diemHoa = +document.querySelector("#diemHoa").value;
    let diemDia = +document.querySelector("#diemDia").value;
    let diemSu = +document.querySelector("#diemSu").value;
    
    let diemTB = (diemToan + diemLy + diemHoa + diemDia + diemSu) / 5;
    console.log('diemTB: ', diemTB);

    document.querySelector("#diemTB").innerHTML = diemTB
    if (diemTB >= 8) {
        document.querySelector("#xepLoai").innerHTML = "Giỏi"
    } else {
        document.querySelector("#xepLoai").innerHTML = "Cố gắng hơn"
    }

};

//-------Bài Tập Tính Giá USD--------


document.querySelector("#tongUSD").onclick = function () {
    let giaUSD = +document.querySelector("#giaUSD").value;
    console.log('giaUSD: ', giaUSD);
    let soLuong = +document.querySelector("#soLuongUSD").value;
    console.log('soLuong: ', soLuong);
    let tong = giaUSD * soLuong;
    console.log('tong: ', tong);

    document.querySelector("#tong").innerHTML = tong + " đồng" ;
    
}


//-------Bài Tập Tính Chu Vi & Diện Tích--------

document.querySelector("#tinhCa2").onclick = function () {
    console.log("đã được");
    let chieuDai = +document.querySelector("#chieuDai").value;
    let chieuRong = +document.querySelector("#chieuRong").value;

    let chuVi = 2 * (chieuDai + chieuRong);
    let dienTich = chieuDai * chieuRong;

    document.querySelector("#chuVi").innerHTML = chuVi;
    document.querySelector("#dienTich").innerHTML = dienTich;
}

//-------Bài Tập Hiện Thị Mật Khẩu-------

document.querySelector("#hienThiPw").onclick = function () {
    let pass = document.querySelector("#password");
    if (pass.type === "password") {
        pass.type = "text"; 
    } else {
        pass.type = "password"; 
    }
}