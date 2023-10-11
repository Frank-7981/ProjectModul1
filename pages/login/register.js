const ROLE_USER = 0;
const ROLE_ADMIN = 1;
users = JSON.parse(localStorage.getItem('users')) || [];
userId = () => {
    return Math.floor(Math.random() * 10000)
}
register = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let name = document.getElementById('name').value;
    let address = document.getElementById('address').value;
    let user = {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        name: name,
        address: address,
        id: userId(),
        role: ROLE_USER,
        carts: []
    }
    // Xử lí kiểm tra xem user có mail này đã tồn tại trong list user chưa
    let checkEmail = users.find((user) => {
        return user.email == email
    })
    // 
    let emailErrElement = document.getElementById('emailErr')
    let passwordErrElement = document.getElementById('passwordErr')
    if (!checkEmail && email != '' && password == confirmPassword) {
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        alert("Dang ki thanh cong");
        window.location.href = "./login.html"
    } else if (email == '') {
        emailErrElement.textContent = "Ban phai nhap email";
    } else if (password != confirmPassword) {
        passwordErrElement.textContent = "Password và passwordconfirm phải giống nhau";
    } else {
        let checkEmail1 = document.getElementById('checkEmail1')
        checkEmail1.style.display = 'block'
        checkPassword.style.display = 'none'
        checkEmail2.style.display = 'none'
    }

}
// let myLink = document.getElementById('myLink');
// myLink.addEventListener('click', (event) => {
//     event.preventDefault();
//     window.location.href = '../page/login.html'
// })