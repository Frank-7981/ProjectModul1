// document.addEventListener("DOMContentLoaded", function () {
//     const loginForm = document.getElementById("loginForm");
//     const registerForm = document.getElementById("registerForm");

//     // Xử lý đăng nhập
//     loginForm.addEventListener("submit", function (e) {
//         e.preventDefault();
//         const username = document.getElementById("username").value;
//         const password = document.getElementById("password").value;

//         // Kiểm tra tên đăng nhập và mật khẩu
//         if (username === "admin" && password === "password") {
//             alert("Đăng nhập thành công!");
//             window.location.href = "homepage.html"; // Chuyển hướng sau khi đăng nhập thành công
//         } else {
//             alert("Đăng nhập thất bại. Vui lòng thử lại.");
//         }
//     });

//     // Xử lý đăng ký (chưa cài đặt)
//     registerForm.addEventListener("submit", function (e) {
//         e.preventDefault();
//         const newUsername = document.getElementById("newUsername").value;
//         const newEmail = document.getElementById("newEmail").value;
//         const newPhone = document.getElementById("newPhone").value;
//         const newPassword = document.getElementById("newPassword").value;

//         // Xử lý đăng ký tài khoản (chưa cài đặt)
//         alert("Đăng ký thành công!");
//     });
// });
login = () => {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == email && users[i].password == password) {
            if(users[i].role == ROLE_ADMIN){
                window.location.href = './admin.html'
                return;
            }else if(users[i].role == ROLE_USER){
                window.location.href = '../homepage/index.html'
                //Khi login thanh cong, lưu userID của thằng đăng nập vào localsotage
                localStorage.setItem("userId", users[i].id);
                return;
            }
        }
    }

    document.getElementById('checkAccount').style.display = 'block';
}
function logout(){
        
}
// let myLink = document.getElementById('myLink');
// myLink.addEventListener('click',(event)=>{
//     event.preventDefault();
//     window.location.href = '../page/register.html'
// })