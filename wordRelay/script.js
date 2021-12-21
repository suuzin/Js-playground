const getBtn = document.querySelector('button');
const getInput = document.querySelector('input');
const getWord = document.querySelector("#word");
const getOrder = document.querySelector("#order");
let word;
let newWord;
let order;
const getNum = Number(prompt('몇명이 참가하나요?'));

const onInput = (event) => {
    newWord = event.target.value;
}

const onClickBtn = () => {
    if(!word || word[word.length -1] === newWord[0]){
        word = newWord;
        getWord.textContent = word;
        order = Number(getOrder.textContent);
        checkIndex(order);
    }else {
        alert('제대로 입력해주세요');
    }
    getReset();
}

const checkIndex = (order) => {
    if(order + 1 > getNum){
        getOrder.textContent =1;
    }else {
        getOrder.textContent = order +1 ;
    }
}

const getReset = () => {
    getInput.value = "";
    getInput.focus();
}

getBtn.addEventListener("click",onClickBtn);
getInput.addEventListener("input",onInput);