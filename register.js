let form = document.querySelector('form');
let users = [];
function signUp(e) { 
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    if(username.length < 3){
        alert('Username must be at least 3 characters');
        return;
    }
    if (password !== confirmPassword) {
        alert('Password does not match');
        return;
    }
    if (localStorage.getItem('users')) {
        users = JSON.parse(localStorage.getItem('users'));
        for (let i =0; i < users.length; i++) {
            if (username === users[i].username) {
                alert('Username already exists');
                return;
            }
        }
    }
    users.push({
        username: username,
        password: password,
    });
    localStorage.setItem('users', JSON.stringify(users));
    alert('User registered successfully');
    window.location.href = '../bài trên lớp 2/login.html';
}
form.addEventListener('submit', signUp);