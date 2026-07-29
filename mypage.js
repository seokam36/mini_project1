printMyList()
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
            /* 글작성자와 마이페이지의 userNo 같으면 방 삭제하기 버튼 추가 */
            let removeBtn=''
            if(list.userNo == loginUser.userNo){
                removeBtn = `<button class="remove" onclick="remove(${list.contentNo})">
                            삭제하기</button>`
            }

            /* 방 나가기 버튼 추가 */
            html += `<div id="card">
                        <div class="title">${list.title}</div>
                        <div class="name">${categoryName}</div>
                        <div class="detail">${list.detail}</div>
                        <div class="member">${removeBtn}<button class="leave" onclick="leave(${list.contentNo})">나가기</button>
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


let loginUser = JSON.parse(localStorage.getItem('loginUser'))

if(loginUser != 0){
    document.querySelector('#user').innerHTML = `${loginUser.userName}님 환영합니다!`;
    document.querySelector('#login').innerHTML = `<a href='' onclick="logout()">Logout</a>`;
    document.querySelector("#register").style.display="none";
}

function logout(){
    localStorage.removeItem("loginUser");
    alert("로그아웃 되었습니다.");
    location.reload();
}