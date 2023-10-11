// Mảng đối tượng chưa các đối tượng là Product
let productList = [
    {
        id: 1,
        productName: "Sản phẩm 1",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 1500,
        stock: 10,
        imageUrl: "/Images/suit/i1/041_3420030-MA_l.avif"
    },
    {
        id: 2,
        productName: "Sản phẩm 2",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 1500,
        stock: 10,
        imageUrl: "/Images/suit/i2/044_SJFU2306-MA_l_h.avif"
    },
    {
        id: 3,
        productName: "Sản phẩm 3",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 1500,
        stock: 10,
        imageUrl: "/Images/suit/i3/044_SJFU2307-ME_l_a.avif"
    },
    {
        id: 4,
        productName: "Sản phẩm 4",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 1500,
        stock: 10,
        imageUrl: "/Images/suit/i4/img_wear_02_01.avif"
    },
    {
        id: 5,
        productName: "Sản phẩm 5",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 1200,
        stock: 10,
        imageUrl: "/Images/suit/i5/img_wear_03_01.avif"
    },
    {
        id: 6,
        productName: "Sản phẩm 6",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 1200,
        stock: 10,
        imageUrl: "/Images/suit/i6/img_wear_04_01.avif"
    },
    {
        id: 7,
        productName: "Sản phẩm 7",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 1200,
        stock: 10,
        imageUrl: "/Images/suit/i7/044_SJFU2307-GE_l_b.avif"
    },
    {
        id: 8,
        productName: "Sản phẩm 8",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 1200,
        stock: 10,
        imageUrl: "/Images/suit/i8/086_NT22AJ07-GA_l_a.avif"
    },
    {
        id: 9,
        productName: "Sản phẩm 9",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 1200,
        stock: 10,
        imageUrl: "/Images/suit/i9/041_3420530-YA_l_a.avif"
    },
    {
        id: 10,
        productName: "Sản phẩm 10",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 1200,
        stock: 10,
        imageUrl: "/Images/suit/i10/044_3442510-GA_l_a.avif"
    },
]

render();

function render() {
    let container = document.getElementById("container-list");
    for (let i = 0; i < productList.length; i++) {
        container.innerHTML +=
            `
        <div class="col-6">
            <div class="p-3">
                <div class="card" style="width: 18rem;">
                    <img src="${productList[i].imageUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${productList[i].productName}</h5>
                                <p class="card-text">${productList[i].description}</p>
                                    <p>${productList[i].price}</p>
                                <button onclick="payment(${productList[i].id})" class="btn btn-primary">Thanh toán</button>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}


function payment(productId) {
    let product = productList.filter(function (product) {
        return product.id == productId;
    })[0];

    //Get list user trong hệ thống
    let users = JSON.parse(localStorage.getItem('users')) || [];
    // Lấy id của thằng user đã đăng nhập vào hệ thống
    let userId = localStorage.getItem("userId");
    // Lấy được đối tuong user đã login
    console.log(userId);
    if (!userId) {
        alert("Vui lòng đăng nhập");
        window.location.href = "../login/login.html";
    }
    let userLogin = users.filter(function (user) {
        return user.id == userId;
    })[0];
    let checkTonTai = false;
    for (let i = 0; i < userLogin.carts.length; i++) {
        if (userLogin.carts[i].id == productId) {
            userLogin.carts[i].quantity++
            checkTonTai = true;
        }
    }
    if (!checkTonTai) {
        product.quantity = 1;
        userLogin.carts.push(product);
    }
    // Lưu lại list user trng đó user login đã được cập nhật thông tin carts
    localStorage.setItem("users", JSON.stringify(users));
    alert("Add vao thanh toan thanh cong");
    window.location.href = "../pay/payment.html";
}