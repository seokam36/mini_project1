function login(){
    let loginId = document.querySelector('#loginId').value
    let loginPw = document.querySelector('#loginPw').value

 
    // 입력 안하면 다시 입력할수있게
    if(loginId == ""){
        alert("아이디를 입력해주세요.");
        return;
    }
    if(loginPw == ""){
        alert("비밀번호를 입력해주세요.");
        return;
    }

    let userList = localStorage.getItem('userList');
    if(userList==null){userList=[]}
    else{userList=JSON.parse(userList)}

    let loginUser = 0;
    for(let i=0; i<userList.length; i++){
        if(userList[i].userId == loginId && userList[i].userPw == loginPw){
            loginUser = userList[i];
            break;
        }
    }

    if(loginUser == 0){
        alert('아이디 또는 비밀번호가 일치하지 않습니다')
        return;
    }
    
    alert(`${loginUser.userName}님 로그인 성공입니다`)
    localStorage.setItem('loginUser', JSON.stringify(loginUser))
    location.href = `mainpage.html`;
}