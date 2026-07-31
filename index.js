let loginUser = JSON.parse(localStorage.getItem('loginUser'))

if(loginUser != 0){
    document.querySelector('#user').innerHTML = `${loginUser.userName}님 환영합니다! `;
    document.querySelector('#login').innerHTML = `<a href='' onclick="logout()">ㅤLogout</a>`;
    document.querySelector("#register").style.display="none";
}

function logout(){
    localStorage.removeItem("loginUser");
    alert("로그아웃 되었습니다.");
    location.reload();
}

