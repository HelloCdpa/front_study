function idCheck(){
    /* 1. 입력한 id값을 가져오기
    2. 입력값 검증(있는지, 글자수)
    3. 검증 결과에 따른 메시지 출력
    4. 
    */
    const idValue = document.getElementById('id').value;
    console.log('입력 id : ', idValue);
    console.log(idValue.length)
    const idLength = idValue.length
    let reult = document.getElementById('idCheckResult')

    if(idLength == 0){
        console.log('필수항목입니다')
        reult.innerHTML = '필수항목입니다'
        reult.style.color = 'red';
    }else if(idLength <5 || idLength >20){
        console.log('5~20자 이내로 작성해 주세요')
        reult.innerHTML = '5~20자 이내로 작성해 주세요'
        reult.style.color = 'red';
    }else {
        console.log('멋진 아이디네요!');
        reult.innerHTML = '멋진 아이디네요!';
        reult.style.color = 'green';
        
    }


}
function emailSelect(){
    const email = document.getElementById('email');
    const emailSel = document.getElementById('emailSelect')
    emailSel.value =  email.value;
}


function passwordC(){

const password = document.getElementById('password').value;
let passLen= password.length  

let pass = document.getElementById('pass')
const exp2 = /^(?=.*[a-z])(?=.*\d)(?=.*[-_!*])[a-z\d-_!*]{8,20}$/; 


// if(passLen == 0 ){
//     pass.innerHTML = '필수항목입니다.';
//     pass.style.color = 'red';
// }else if(passLen<=8 || passLen>=20){
//     pass.innerHTML = '8~20자리로 입력해주세요.';
//     pass.style.color = 'red';
// }else{
//     pass.innerHTML = '좋습니다';
//     pass.style.color = 'green';
// }

if(password.match(exp2)){
    pass.innerHTML = '좋습니다';
    pass.style.color = 'green';
}else if(passLen == 0){
    pass.innerHTML = '필수항목입니다.';
    pass.style.color = 'red';
} else if(passLen<=8 || passLen>=20){
    pass.innerHTML = '8~20자리로 입력해주세요.';
    pass.style.color = 'red';
}else{
    pass.innerHTML = '소문자, 특수기호 포함해주세요';
    pass.style.color = 'red';
}

//선생님 답
// if(!password.match(exp2)){
//     pass.innerHTML = '8~20자리로 입력, 소문자, 특수기호 포함해주세요';
//     pass.style.color = 'red';
// }else if(passLen == 0){
//     pass.innerHTML = '필수항목입니다.';
//     pass.style.color = 'red';
// }else{
//     pass.innerHTML = '좋습니다';
//     pass.style.color = 'green';
// }



}

function rePasswordC(){
const password = document.getElementById('password').value;
const rePassword = document.getElementById('repassword').value;
const repass = document.getElementById('repass');

console.log(password);
console.log(rePassword);

if (rePassword == password){
    repass.innerHTML = '비밀번호가 일치합니다'
    repass.style.color = 'green';
}else{
    repass.innerHTML = '비밀번호가 일치하지 않습니다';
    repass.style.color = 'red';

}

}

function nameCheck(){
    const name = document.getElementById('nameCheck').value;
    nameLen = name.length;

    const nameCheck = document.getElementById('name');
    if(nameLen==0){
        nameCheck.innerHTML = '필수 항목 입니다.'
        nameCheck.style.color = 'red';
    }



}

function phoneCheck(){
    // 자릿수가 3 - 4 - 4 인지
    const exp = /^\d{3}-\d{4}-\d{4}$/;
    const phone = document.getElementById('phone').value;
    const result = document.getElementById('phone-check-result');

    if(phone.match(exp)){
        result.innerHTML = '유효한 형식입니다'
        result.style.color = 'green';
    } else{
    result.innerHTML = '유효하지 않은 형식입니다'
    result.style.color = 'red';
    }


}











