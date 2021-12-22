const getNum = Number(prompt('참여인원수를 입력해주세요.')); //참여인원수
const turnNum = document.querySelector(".turnNum");
const ruleWord = document.querySelector(".ruleWord");
const input = document.querySelector("input");
const button = document.querySelector("button");
let keyword;
let newWord;

function checkTurn(){
    let order = Number(turnNum.textContent);
    if(order + 1 > getNum){
        turnNum.textContent = 1;
    }else{
        turnNum.textContent = order + 1;
    }
}

function checkRule(){
    if(!keyword || keyword[keyword.length-1] === newWord[0]){
        keyword = newWord;
        ruleWord.textContent = keyword;
    }else{
        alert("다시 입력해주세요");
    }
}

function onInput(e){
    newWord = e.target.value;
}

function onClick(){
    checkTurn();
    checkRule();
    reset();
}

function reset(){
    input.value = "";
    input.focus();
}

button.addEventListener("click",onClick);
input.addEventListener("input",onInput);