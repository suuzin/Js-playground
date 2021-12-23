let getResult = document.querySelector("#result");
let clickedNum = [];

let onClickNumber = (event) => {
    let str = event.target.textContent;
    console.log(str);

    if(str === '+'||str === '-'||str ==='*'||str === '/'){
        clickedNum.push(' ' + str + ' ');
    }else{
        clickedNum.push(str);
    }
};

let getInput = () => {
    return clickedNum.join("");
};

let isEmpty = () => {
    return clickedNum.length === 0;
};

let seperateValue = () => {
    clickedNum = clickedNum.join("").split(" ");
};

let getNum = () => {
    let num = clickedNum.shift();
    return Number(num);
};

let getOperator = () => {
    let operator = clickedNum.shift();
    if(operator === '+'||operator === '-'||operator ==='*'||operator === '/')
        return operator;
};

let showAnswer = (str) => {
    getResult.value = str;
    clickedNum.push(str);
};

let display = () => {
    getResult.value = getInput();
};

let calculate = (first,second,op) => {
    let result;
    switch (op) {
        case "+":
            result = first + second;
            break;
        case "-":
            result = first - second;
            break;
        case "*":
            result = first * second;
            break;
        case "/":
            result = first / second;
            break;
        default:
            return NaN;
    }
    return result;
};

let onCalculate = (event) => {
        seperateValue();
        let result = getNum();

        while(!isEmpty()){
        let op = getOperator();
        let second = getNum();
        result = calculate(result,second,op);
    }
        showAnswer(result);
}

let onClear = () =>{
    clickedNum = [];
    getResult.value = "";
}

document.querySelector('#num-0').addEventListener('click', onClickNumber);
document.querySelector('#num-1').addEventListener('click', onClickNumber);
document.querySelector('#num-2').addEventListener('click', onClickNumber);
document.querySelector('#num-3').addEventListener('click', onClickNumber);
document.querySelector('#num-4').addEventListener('click', onClickNumber);
document.querySelector('#num-5').addEventListener('click', onClickNumber);
document.querySelector('#num-6').addEventListener('click', onClickNumber);
document.querySelector('#num-7').addEventListener('click', onClickNumber);
document.querySelector('#num-8').addEventListener('click', onClickNumber);
document.querySelector('#num-9').addEventListener('click', onClickNumber);
document.querySelector('#plus').addEventListener('click', onClickNumber);
document.querySelector('#minus').addEventListener('click', onClickNumber);
document.querySelector('#divide').addEventListener('click', onClickNumber);
document.querySelector('#multiply').addEventListener('click', onClickNumber);

document.querySelector('#clear').addEventListener('click', onClear);
document.querySelector('#calculate').addEventListener('click', onCalculate);
