const getInput = document.querySelector('#input');
const getForm = document.querySelector('#form');
const getContent = document.querySelector('#content');
const numbers = [1,2,3,4,5,6,7,8,9];
const answer = [];
const historyNum = [];

function getAnswer(){
    for (let n = 0; n < 4; n += 1) { 
        const index = Math.floor(Math.random() * numbers.length); 
        answer.push(numbers[index]);
        numbers.splice(index, 1);
    }
    console.log(answer);
}
getAnswer();


function checkInput(input) { 
  if (input.length !== 4) { 
    return alert('4자리 숫자를 입력해 주세요.');
  }
  if (new Set(input).size !== 4) { 
    return alert('중복되지 않게 입력해 주세요.');
  }
  if (historyNum.includes(input)) { 
    return alert('이미 시도한 값입니다.');
  }
  return true;
}

let strike = 0;
let ball = 0;
function checkRule(value){
  for (let i = 0; i < answer.length; i++) {
    const index = value.indexOf(answer[i]);
    if (index > -1) { 
      if (index === i) { 
        strike += 1;
      } else {
        ball += 1; 
      }
    }
  }
}

getForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = $input.value;
  getInput.value = '';
  if (!checkInput(value)) {
    return;
  }

  if (answer.join('') === value) {
    content.textContent = '홈런!';
    return;
  }
  if (historyNum.length >= 9) {
    const message = document.createTextNode(`패배! 정답은 ${answer.join('')}`);
    content.appendChild(message);
    return;
  }
  
  if(checkRule(value)){
      return;
  }
  content.append(`${value}: ${strike} 스트라이크 ${ball} 볼`, document.createElement('br'));
  historyNum.push(value);
});