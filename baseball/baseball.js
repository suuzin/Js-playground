const getForm = document.querySelector("#form");
const getInput = document.querySelector("#input");
const content = document.querySelector("#content");
const number = [1,2,3,4,5,6,7,8,9];
const historyNum = [];
const answer = [];

function getRandomNum() {
    for(let i = 0; i < 4; i++){
        const index = Math.floor(Math.random()* (number.length));
        answer.push(number[index]);
        number.splice(index,1);
    }
    return answer;
}
getRandomNum();
console.log("정답",answer); 

function checkInput(input){
    if(input.length !== 4){
        return alert("4자리 수가 아닙니다.")
    }
    if(new Set(input).size !==4){
        return alert("중복된 내용이 있습니다.");
    }
    if(historyNum.includes(input)){
        return alert("이미 입력한 내용입니다.");
    }
}

function clickSubmit(event){
    event.preventDefault();
    const correctAnswer = getInput.value;
    getInput.value = "";
    console.log("내정답",correctAnswer);
    
    if(!checkInput(correctAnswer)){
        historyNum.push(correctAnswer);
        console.log("히스토리",historyNum);
        return;
    }

    if(answer.join('') === correctAnswer){ //배열을 문자열로 바꿔준다.
        content.textContent = '홈런';
        return;
    }
    
    
}
getForm.addEventListener("submit",clickSubmit);