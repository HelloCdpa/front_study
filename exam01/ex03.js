const ele1 = document.getElementById('id2');
const ele2 = document.getElementById('id3');

ele1.addEventListener('click',function(){
    alert('fun1');
})

ele2.addEventListener('click', fun2);

function fun2(){
    console.log('id2버튼 클릭함');
    const result =  confirm('선택하세요');
    if(result) {
    console.log('확인');
    } else{
        console.log('취소')
    }
}