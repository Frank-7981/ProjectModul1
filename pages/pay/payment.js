document.getElementById("payment-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const cardNumber = document.getElementById("card-number").value;
    const expirationDate = document.getElementById("expiration-date").value;

    // Xử lý thanh toán ở đây (chẳng hạn, gửi thông tin thanh toán đến máy chủ)

    console.log("Thông tin thanh toán:");
    console.log("Số thẻ tín dụng:", cardNumber);
    console.log("Ngày hết hạn:", expirationDate);

    alert("Thanh toán thành công!");
    window.location.href = "../homepage/index.html"
});


function render() {
    //Get list user trong hệ thống
    let users = JSON.parse(localStorage.getItem('users')) || [];
    // Lấy id của thằng user đã đăng nhập vào hệ thống
    let userId = localStorage.getItem("userId");
    // Lấy được đối tuong user đã login
    let userLogin = users.filter(function (user) {
        return user.id == userId;
    })[0];

    let product = userLogin.carts[0]
    let productInfo = document.getElementById("product-info");
    for (let i = 0; i < userLogin.carts.length; i++) {
        productInfo.innerHTML +=
            `
        <p>Tên sản phẩm: ${userLogin.carts[i].productName}</p>
        <p>Giá: ${userLogin.carts[i].price}</p>
        <p>Số Lượng: ${userLogin.carts[i].quantity}</p>
        `
    }
}
render();
