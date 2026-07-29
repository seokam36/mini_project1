getStudyDetail();
function getStudyDetail() {
    const url = new URLSearchParams(location.search);
    const selectNo = url.get('no');

    if (!selectNo) return;

    // 로컬 스토리지에서 데이터 불러오기 (없으면 선언된 배열 사용)
    let studyListStorage = localStorage.getItem('studyList');
    if (studyListStorage == null) { studyListStorage = studyList; } 
    else { studyListStorage = JSON.parse(studyListStorage); }

    let userStorage = localStorage.getItem('user');
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

