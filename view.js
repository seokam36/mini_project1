getStudyDetail();
function getStudyDetail() {
    const url = new URLSearchParams(location.search);
    const selectNo = url.get('no');

    if (!selectNo) return;

    // 로컬 스토리지에서 데이터 불러오기 (없으면 선언된 배열 사용)
    let studyListStorage = localStorage.getItem('studyList');
    if (studyListStorage == null) { studyListStorage = studyList; } 
    else { studyListStorage = JSON.parse(studyListStorage); }

    let userStorage = localStorage.getItem('userList');
    if (userStorage == null) { userStorage = user; } 
    else { userStorage = JSON.parse(userStorage); }

    let roleStorage = localStorage.getItem('role');
    if (roleStorage == null) { roleStorage = role; } 
    else { roleStorage = JSON.parse(roleStorage); }

    let studyTypeStorage = localStorage.getItem('studyType');
    if (studyTypeStorage == null) { studyTypeStorage = studyType; } 
    else { studyTypeStorage = JSON.parse(studyTypeStorage); }

    // 스터디 찾기
    let study = null;
    for (let i = 0; i <= studyListStorage.length - 1; i++) {
        if (studyListStorage[i].contentNo == selectNo) {
            study = studyListStorage[i];
            break;
        }
    }

    if (study) {
        // 작성자 찾기
        let writer = null;
        for (let i = 0; i <= userStorage.length - 1; i++) {
            if (userStorage[i].userNo == study.userNo) {
                writer = userStorage[i];
                break;
            }
        }

        // 직급 찾기
        let writerRole = "";
        for (let i = 0; i <= roleStorage.length - 1; i++) {
            if (roleStorage[i].roleNo == writer.roleNo) {
                writerRole = roleStorage[i].roleName;
                break;
            }
        }

        // 진행방식 찾기
        let typeName = "";
        for (let i = 0; i <= studyTypeStorage.length - 1; i++) {
            if (studyTypeStorage[i].studyTypeNo == study.studyTypeNo) {
                typeName = studyTypeStorage[i].studyTypeName;
                break;
            }
        }

        // HTML에 덮어쓰기
        document.querySelector('.banner > span').innerHTML = 'NO. ' + selectNo;
        document.querySelector('.m1').innerHTML = study.title;
        document.querySelector('.box1 .bt1').innerHTML = writer.userName;
        document.querySelector('.rolebox').innerHTML = writerRole;
        document.querySelector('.box2 .bt1').innerHTML = study.maxMember + '명';
        document.querySelector('.box3 .bt1').innerHTML = typeName;
        document.querySelector('.m2').innerHTML = study.detail;

    }
}

function applyStudy() {
    /* 로그인 유저 확인 */
    let loginUser = JSON.parse(localStorage.getItem('loginUser'));
    if(loginUser == null) {
        alert('로그인 후 이용해주세요.');
        return;
    }

    /* 주소창에서 현재 글 번호 가져오기 */
    const selectNo = new URLSearchParams(location.search).get('no');

    /* 스토리지 studyList값 꺼내오기 */
    let studyList = localStorage.getItem('studyList');
    if(studyList == null) {
        studyList = [];
    } else {
        studyList = JSON.parse(studyList);
    }

    /* 배열에 유저 넣기 및 예외 처리 */
    for(let i = 0; i < studyList.length; i++) {
        let study = studyList[i];
        if(study.contentNo == selectNo) {
            
            // 중복 신청 검사 (이미 members 배열에 내 번호가 있으면 막기)
            if(study.members.includes(loginUser.userNo)) {
                alert('이미 신청한 스터디입니다.');
                return;
            }

            study.members.push(loginUser.userNo);
            break;
        }
    }

    /* 스토리지 저장 및 새로고침 */
    localStorage.setItem('studyList', JSON.stringify(studyList));
    alert('신청완료');
    location.reload(); // 화면 새로고침해서 늘어난 인원수 체크

}

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