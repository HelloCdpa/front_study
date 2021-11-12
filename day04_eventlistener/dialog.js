//id2가 적용된 요소 (body영역에 작성된 태그)를 가져옴
const ele1 = document.getElementById('id2')
console.log("ele1값 : ",ele1)
//id3이 적용된 요소를 가져옴
const ele2 = document.getElementById('id3')
console.log("ele2값 : ",ele2)

function alertFuntion() {
    alert('alertFuntion 호출')
}

ele1.addEventListener('click', function () {
    console.log('id2버튼 클릭함');
    const result = confirm('컨펌함수입니다.');
    if(result){
        console.log('확인을 누르셨네요');
    } else{
        console.log('취소를 누르셨네요');

    }
    
})

function promptFunction() {
    console.log('promptFunction 호출')
}

ele2.addEventListener('click', promptFunction)

