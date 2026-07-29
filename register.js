function register(){
    let idinput = document.querySelector('#idinput');
    let pwinput = document.querySelector('#pwinput');
    let nameinput = document.querySelector('#nameinput');
    let role = document.querySelector('#role');

    let userId = idinput.value
    let userPw = pwinput.value
    let userName = nameinput.value
    let roleName = role.value
    // 입력안하면 다시 입력할수있게
    if(userId == ""){
        alert("아이디를 입력해주세요")
        return
    }
    if(userPw == ""){
        alert("비밀번호를 입력해주세요")
        return
    }
    if(userName == ""){
        alert("이름을 입력해주세요")
        return
    }
    if(roleName == ""){
        alert("직급을 선택해주세요")
        return
    }
    // 객체화
    let user = {userId, userPw, userName, roleName}
     
    let userList = localStorage.getItem('userList');
    if(userList==null){userList=[]}
    else{userList=JSON.parse(userList)}
    // 마지막 배열에서 1개씩 추가
    user.no = userList.length == 0 ? 1 : userList[userList.length-1].no+1
    userList.push(user)
    
    localStorage.setItem('userList', JSON.stringify(userList))
    alert('회원가입 성공')
    location.href = 'login.html'
}
