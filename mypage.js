printMyList()
function printMyList(){
    /* URL로 내 아이디 번호 가져오기 */
    let no = new URLSearchParams(location.search).get('userNo')

    let myList = document.querySelector('#myList')
    let html =''

    /* 전체 리스트 조회하기 위해 스토리지에서 파싱해서 가져오기 */
    let studyList = localStorage.getItem('studyList')
    if(studyList == null){
        studyList = []
    } else {
        studyList = JSON.parse(studyList)
    }
     /* 매핑할 카테고리 스토리지에서 가져오기 */
    let category = JSON.parse(localStorage.getItem('category'))


    /* 전체리스트 URL로 뽑아언 userNo랑 전체리스트 userNo 같은값 출력*/
    for(let i=0; i<studyList.length; i++){
        let list = studyList[i]
        if(list.userNo == no){
            let categoryName = ''
            for(let j=0; j<category.length; j++){
                if(list.categoryNo == category[j].categoryNo){
                    categoryName = category[j].categoryName
                    break
                }
            }
            html += `<div>${list.title}</div>
                <div>${categoryName}</div>
                <div>${list.detail}</div>
                <div>방인원 <span>${list.maxMember}</span>/<span>${list.maxMember}</span></div>`
        }
    }

    myList.innerHTML=html
}