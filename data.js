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

if(localStorage.getItem('studyType') == null){
    localStorage.setItem('studyType', JSON.stringify(studyType))
}

if(localStorage.getItem('role') == null){
    localStorage.setItem('role', JSON.stringify(role))
}

if(localStorage.getItem('category') == null){
    localStorage.setItem('category', JSON.stringify(category))
}
