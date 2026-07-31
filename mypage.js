let loginUser = JSON.parse(localStorage.getItem('loginUser'))
if(loginUser == null){
    alert("로그인 후 이용해주세요")
    location.href = 'login.html'
} else {
    printMyList()
}

function printMyList(){
    /* loginUser 스토리지에 파싱해서 가져오기 */
    let loginUser = JSON.parse(localStorage.getItem('loginUser'))

     /* 매핑할 카테고리 스토리지에서 가져오기 */
    let category = JSON.parse(localStorage.getItem('category'))
    
    let myList = document.querySelector('#myList')
    let html =''

    /* 전체 리스트 조회하기 위해 스토리지에서 파싱해서 가져오기 */
    let studyList = localStorage.getItem('studyList')
    if(studyList == null){
        studyList = []
    } else {
        studyList = JSON.parse(studyList)
    }


    /* 전체리스트 URL로 뽑아언 userNo랑 전체리스트 userNo 같은값 출력*/
    for(let i=0; i<studyList.length; i++){
        let list = studyList[i]
        if(list.members.includes(loginUser.userNo)){
            let categoryName = '' 
            /* 카테고리 이름과 카테고리 넘버 매핑 */
            for(let j=0; j<category.length; j++){
                if(list.categoryNo == category[j].categoryNo){
                    categoryName = category[j].categoryName
                    break
                }
            }
            /* 마이 페이지 스터디 목록 카드에 표시할 버튼 결정 */
            let removeBtn=''
            /*  내가 개설자 + 다른 참여자가 있음 -> 삭제/나가기 모두 선택 가능 */
            if(list.userNo == loginUser.userNo && list.members.length > 1){
                removeBtn = `<button class="remove" onclick="remove(${list.contentNo})">
                            삭제하기</button><button class="leave" onclick="leave(${list.contentNo})">나가기</button>`

            /* 내가 개설자 + 혼자만 남음 -> 나갈 수 없으므로 삭제만 가능 */
            } else if(list.userNo == loginUser.userNo){
                removeBtn = `<button class="remove" onclick="remove(${list.contentNo})">
                            삭제하기</button>`

            /* 개설자가 아닌 참여자 -> 나가기만 가능 */
            } else {
                removeBtn = `<button class="leave" onclick="leave(${list.contentNo})">나가기</button>`
            }

            /* 방 나가기, 삭제하기 버튼 추가 */
            html += `<div id="card">
                        <div class="title">${list.title}</div>
                        <div class="name">${categoryName}</div>
                        <div class="detail">${list.detail}</div>
                        <div class="member">${removeBtn}
                        방인원 <span>${list.members.length}</span>/<span>${list.maxMember}</span></div>
                    </div>`
        }
    }

    myList.innerHTML=html
}

/* 방 삭제하기 */
function remove(contentNo){
    let studyList = JSON.parse(localStorage.getItem('studyList'))
    for(let i=0; i<studyList.length; i++){
        let study = studyList[i]
        /* 매개변수 받은 contentNo랑 studyList.contentNo 같은 값 찾아서 해당하는 인덱스 삭제 */
        if(study.contentNo == contentNo){
            studyList.splice(i,1)
            break
        }
    }
    localStorage.setItem('studyList', JSON.stringify(studyList))
    alert("방 삭제 완료")
    printMyList()
}

/* 방 나가기 */
function leave(contentNo){
    let studyList = JSON.parse(localStorage.getItem('studyList'))
    for(let i=0; i<studyList.length; i++){
        let study = studyList[i]
        if(study.contentNo == contentNo){
            /* members의 현재로그인한 유저번호 인덱스 찾아서 삭제 */
            let index = study.members.indexOf(loginUser.userNo)
            study.members.splice(index, 1)
            break
        }
    }
    localStorage.setItem('studyList',JSON.stringify(studyList))
    alert("방 나가기 완료")
    printMyList()
}

/* 이름 변경 */
function editName(){
    let input = document.querySelector("#editName input")
    let name = input.value
    /* 이름 안적을시 함수종료 */
    if(name == ""){
        alert("변경할 이름을 입력하세요")
        return
    }

    let loginUser = JSON.parse(localStorage.getItem('loginUser'))
    let userList = JSON.parse(localStorage.getItem('userList'))

    for(let i=0; i<userList.length; i++){
        let user = userList[i]
        if (user.userNo == loginUser.userNo){
            user.userName = name
            break
        }
    }

    /* 현재 로그인한 정보도 변경 */
    loginUser.userName = name
    localStorage.setItem('loginUser', JSON.stringify(loginUser))
    localStorage.setItem('userList', JSON.stringify(userList))
    alert('변경 완료')
    document.querySelector('#user').innerHTML = `${loginUser.userName}님 환영합니다!`
    input.value = ""
}

/* 패스워드 변경 */
function editPw(){
    let input = document.querySelector("#editPw input")
    let pw = input.value
    /* 비밀번호 안적을시 함수종료 */
    if(pw == ""){
        alert("변경할 비밀번호를 입력하세요")
        return
    }

    let loginUser = JSON.parse(localStorage.getItem('loginUser'))
    let userList = JSON.parse(localStorage.getItem('userList'))

    for(let i=0; i<userList.length; i++){
        let user = userList[i]
        if (user.userNo == loginUser.userNo){
            user.userPw = pw
            break
        }
    }

    /* 현재 로그인한 정보도 변경 */
    loginUser.userPw = pw
    localStorage.setItem('loginUser', JSON.stringify(loginUser))
    localStorage.setItem('userList', JSON.stringify(userList))
    alert('변경 완료')
    input.value = ""
}

/* 아이디 변경 */
function editId(){
    let input = document.querySelector("#editId input")
    let id = input.value
    /* 아이디 안적을시 함수종료 */
    if(id == ""){
        alert("변경할 아이디를 입력하세요")
        return
    }

    let loginUser = JSON.parse(localStorage.getItem('loginUser'))
    let userList = JSON.parse(localStorage.getItem('userList'))

    for(let i=0; i<userList.length; i++){
        let user = userList[i]
        if (user.userNo == loginUser.userNo){
            user.userId = id
            break
        }
    }

    /* 현재 로그인한 정보도 변경 */
    loginUser.userId = id
    localStorage.setItem('loginUser', JSON.stringify(loginUser))
    localStorage.setItem('userList', JSON.stringify(userList))
    alert('변경 완료')
    input.value = ""
}

/* 직급 변경 */
function editRole(){
    let input = document.querySelector("#editRole")
    let role = input.value

    if(role == ""){
        alert("변경할 직급 선택하세요")
        return
    }
    
    let loginUser = JSON.parse(localStorage.getItem('loginUser'))
    let userList = JSON.parse(localStorage.getItem('userList'))

    for(let i=0; i<userList.length; i++){
        let user = userList[i]
        if (user.userNo == loginUser.userNo){
            user.roleNo = role
            break
        }
    }

    loginUser.roleNo = role
    localStorage.setItem('loginUser', JSON.stringify(loginUser))
    localStorage.setItem('userList', JSON.stringify(userList))
    alert('변경 완료')
    input.value = ""
}

if(loginUser){
    document.querySelector('#user').innerHTML = `${loginUser.userName}님 환영합니다!`;
    document.querySelector('#login').innerHTML = `<a href='' onclick="logout()">Logout</a>`;
    document.querySelector("#register").style.display="none";
}

function logout(){
    localStorage.removeItem("loginUser");
    alert("로그아웃 되었습니다.");
    location.reload();
}