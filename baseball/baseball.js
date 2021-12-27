/*
랜덤한 수 4개를 넣는다. 
랜덤한 수에 중복은 없어야 한다.

1.입력창에 입력한다.
2. 입력버튼을 누른다.
*/
const getForm = document.querySelector("#form");
const number = [1,2,3,4,5,6,7,8,9];
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
console.log(answer);

const historyNum = [];
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
    const value = event.target[0].value;
    event.target[0].value = "";
    console.log(value);
    if(checkInput(value)){
        //입력값
    }else{
        //입력값
    };
}
getForm.addEventListener("submit",clickSubmit);



