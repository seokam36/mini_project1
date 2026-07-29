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
            
            html += `<div id="card">
                        <div class="title">${list.title}</div>
                        <div class="name">${categoryName}</div>
                        <div class="detail">${list.detail}</div>
                        <div class="member">방인원 <span>${list.members.length}</span>/<span>${list.maxMember}</span></div>
                    </div>`
        }
    }

    myList.innerHTML=html
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