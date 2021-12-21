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
