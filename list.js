
printList();

/* 저장된 스터디방 모두 출력함수 */
function printList(){
    /* 표현할 리스트 id값 list꺼내오기 */
    let list = document.querySelector("#list")
    html = ''

    /* 스토리지 studyList값 꺼내서 studyList 저장 */
    let studyList = localStorage.getItem('studyList')
    if(studyList == null){
        let studyList = []
    } else {
        studyList = JSON.parse(studyList)
    }

    /* 매핑할 카테고리 스토리지에서 가져오기 */
    let category = JSON.parse(localStorage.getItem('category'))

    /* 전체 리스트 반복문으로 출력 */
    for(let i=0; i<studyList.length; i++){
        study = studyList[i]
        /* 카테고리넘버, 카테고리 이름 매핑*/
        let categoryName = ''
        for(let j=0; j<category.length; j++){
            if(study.categoryNo == category[j].categoryNo){
                categoryName = category[j].categoryName
                break
            }
        }

        /* studyList.member의 배열의 길이가 maxMember랑 비교해서 작으면 신청하기 아니면 모집완료 */
        let area = study.members.length < study.maxMember ? 
                    `<button class="apply_btn" onclick="apply(${study.contentNo})"> 신청하기 </button>` :
                    `<div class="full" > 모집완료 </div>`
        html += `<div id="card">
                    <div class="title">${study.title}</div>
                    <div class="name">${categoryName}</div>
                    <div class="detail">${study.detail}</div>
                    <div class="member">${area} 방인원 <span>${study.members.length}</span>/<span>${study.maxMember}</span></div>
                </div>`
    }

    list.innerHTML = html
}


/* 신청하기 함수 */
function apply(contentNo){
    /* 로그인한 유저 파싱해서 가져오기 */
    let loginUser = JSON.parse(localStorage.getItem('loginUser'))

    /* 스토리지 studyList값 꺼내서 studyList 저장 */
    let studyList = localStorage.getItem('studyList')
    if(studyList == null){
        let studyList = []
    } else {
        studyList = JSON.parse(studyList)
    }

    /* studyList.contentNo 같은 값 찾아서 members 배열에 contentNo 넣기 */
    for(let i=0; i<studyList.length; i++){
        study = studyList[i]
        if(study.contentNo == contentNo){
            study.members.push(loginUser.userNo)
            break
        }
        
    }

    localStorage.setItem('studyList', JSON.stringify(studyList))
    alert('신청완료')
    printList()
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
