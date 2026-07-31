console.log('write.js 연결 확인');

// 로그인한 사용자 정보 가져오기
let loginUser = JSON.parse(localStorage.getItem('loginUser'));

if(loginUser == null){
    alert("로그인 후 이용해주세요");
    location.href = 'login.html';
}else{
    document.querySelector('#writerInput').value = loginUser.userName;
}
// 로그아웃하기
function logout(){
    localStorage.removeItem("loginUser");
    alert("로그아웃 되었습니다.");
    location.href = "index.html";
}


// 등록하기 버튼 클릭 시 실행
function studyWrite(){

    // 입력값 가져오기
    let title = document.querySelector('#titleInput').value;
    let categoryNo = document.querySelector('#categorySelect').value;
    let maxMember = document.querySelector('#personnelSelect').value;
    let studyTypeNo = document.querySelector('#studyTypeSelect').value;
    let detail = document.querySelector('#detailInput').value;

    // 입력 검사
    if(title == ''){
        alert('스터디 제목을 입력해주세요.');
        return;
    }

    if(categoryNo == ''){
        alert('카테고리를 선택해주세요.');
        return;
    }

    if(maxMember == ''){
        alert('모집 인원을 선택해주세요.');
        return;
    }

    if(detail == ''){
        alert('상세 내용을 입력해주세요.');
        return;
    }

    // 기존 studyList 가져오기
    let studyList = localStorage.getItem('studyList');

    if(studyList == null){
        studyList = [];
    }else{
        studyList = JSON.parse(studyList);
    }

    // 글 고유번호 만들기
    let contentNo = 1;

    if(studyList.length > 0){
        contentNo = studyList[studyList.length - 1].contentNo + 1;
    }

    // 오늘 날짜 만들기
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    let contentDate = year + '.' + month + '.' + day;

    // 새 게시글 객체 만들기
    let study = {
        contentNo: contentNo,
        title: title,
        userNo: loginUser.userNo,
        categoryNo: Number(categoryNo),
        studyTypeNo: Number(studyTypeNo),
        maxMember: Number(maxMember),

        // 방을 만든 사람도 현재 멤버에 포함
        members: [loginUser.userNo],

        detail: detail,
        contentDate: contentDate
    };

    // studyList 배열에 새 글 추가
    studyList.push(study);

    // localStorage에 저장
    localStorage.setItem('studyList', JSON.stringify(studyList));

    console.log(studyList);

    alert('스터디 모집글이 등록되었습니다.');

    location.href = 'list.html';
}


// 목록으로 버튼
function moveList(){
    location.href = 'list.html';
}