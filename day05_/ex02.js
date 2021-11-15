function fun1() {
    let num1 = document.getElementById('id1').value;
    let num2 = document.getElementById('id2').value;
    

   num1 = parseInt(num1);
   num2 = parseInt(num2);
    let sum = num1+num2;
    console.log(sum);

    const result = document.getElementById('result');
    result.innerHTML = sum;
}


