function fun1(){
    let score = document.getElementById('id1').value;
    score = parseInt(score);

    let result ;

    if(90<=score && score<=100){
        result = 'A';
    }else if (80<=score && score<90){
        result = 'B';
    }else if (70<=score && score<80){
        result = 'C';
    }else if (60<=score && score<70){
        result = 'D';
    }else if (0<=score && score<60) {
        result = 'F';
    }else{
        alert('성적을 입력하세요.')
    }

    let grade = document.getElementById('id2')
    grade.innerHTML = result; 

    let id3 = document.getElementById('id3')
    id3.value = result;
}

function changeColor(){
    //id2로 지정된 요소의 글자색, 배경 변경
    const ele1 = document.getElementById('id2');
    ele1.style.color = 'white';
    ele1.style.backgroundColor = 'black';
}

function disappear(){
    const ele2 = document.getElementById('id3');
    ele2.style.visibility = 'hidden';
}

function appear(){
    const ele2 = document.getElementById('id4');
    ele2.style.visibility = 'visible';
}

