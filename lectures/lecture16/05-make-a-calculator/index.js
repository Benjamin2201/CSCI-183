function addNumbers() {

    let firstNum = document.querySelector('#num1').value;
    let secondNum = document.querySelector('#num2').value;
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    let result = firstNum + secondNum;
    document.querySelector('#answer').innerHTML = result;
}

function subtractNumbers() {
    let firstNum = document.querySelector('#num1').value;
    let secondNum = document.querySelector('#num2').value;
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    let result = firstNum - secondNum;
    document.querySelector('#answer').innerHTML = result;
}

function multiplyNumbers() {
    let firstNum = document.querySelector('#num1').value;
    let secondNum = document.querySelector('#num2').value;
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    let result = firstNum * secondNum;
    document.querySelector('#answer').innerHTML = result;
}

function divideNumbers() {
    let firstNum = document.querySelector('#num1').value;
    let secondNum = document.querySelector('#num2').value;
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    let result = firstNum / secondNum;
    document.querySelector('#answer').innerHTML = result;
}

