/* onst studyList = [
    {
        contentNo: 1,
        title: "토익 스터디 하실분",
        userNo: 1,
        categoryNo: 1,
        studyTypeNo: 1,
        maxMember: 5,
        members: [1, 3],
        detail: "토익 같이 공부해요.",
        contentDate:"2026.07.21"
    },
    {
        contentNo: 2,
        title: "정보처리기사 공부 모집",
        userNo: 2,
        categoryNo: 4,
        studyTypeNo: 3,
        maxMember: 5,
        members: [2, 4],
        detail: "정보처리기사 같이 공부하실분 있으신가요.",
        contentDate:"2026.07.13"
    },
    {
        contentNo: 3,
        title: "TOEIC 기초 스터디 모집",
        userNo: 3,
        categoryNo: 1,
        studyTypeNo: 2,
        maxMember: 5,
        members: [3, 1, 2],
        detail: "같이 힘내서 하실분 구해요",
        contentDate:"2026.07.20"
    },
    {
        contentNo: 4,
        title: "컴활 1급 주말 스터디",
        userNo: 4,
        categoryNo: 8,
        studyTypeNo: 4,
        maxMember: 3,
        members: [4, 1, 2],
        detail: "온라인으로할지 오프라인으로할지 아직 미정입니다",
        contentDate:"2026.07.27"
    }
]; */



const studyType = [
    {
        studyTypeNo: 1,
        studyTypeName:"온라인"
    },
    {
        studyTypeNo: 2,
        studyTypeName:"오프라인"
    },
    {
        studyTypeNo: 3,
        studyTypeName:"온라인+오프라인"
    },
    {
        studyTypeNo: 4,
        studyTypeName:"미정"
    },
];

const role = [
    {
        roleNo:1,
        roleName:"남학생"
    },
    {
        roleNo:2,
        roleName:"여학생"
    },
    {
        roleNo:3,
        roleName:"멘토"
    },
];

const category = [
    {
        categoryNo:1,
        categoryName:"TOEIC"
    },
    {
        categoryNo:2,
        categoryName:"TOEFL"
    },
    {
        categoryNo:3,
        categoryName:"JLPT"
    },
    {
        categoryNo:4,
        categoryName:"정보처리기사"
    },
    {
        categoryNo:5,
        categoryName:"사회복지사1급"
    },
    {
        categoryNo:6,
        categoryName:"SQL"
    },
    {
        categoryNo:7,
        categoryName:"ADsP"
    },
    {
        categoryNo:8,
        categoryName:"컴퓨터활용1급"
    },
    {
        categoryNo:9,
        categoryName:"한국능력검정1급"
    },
    {
        categoryNo:10,
        categoryName:"ADP"
    },
]
if(localStorage.getItem('studyList') == null){
    localStorage.setItem('studyList', JSON.stringify(studyList))
}

if(localStorage.getItem('studyType') == null){
    localStorage.setItem('studyType', JSON.stringify(studyType))
}

if(localStorage.getItem('role') == null){
    localStorage.setItem('role', JSON.stringify(role))
}

if(localStorage.getItem('category') == null){
    localStorage.setItem('category', JSON.stringify(category))
}
