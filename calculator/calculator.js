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
