const lottoNum = document.querySelector(".lottoNum");
const bonusNum = document.querySelector(".bonusNum");
let result = [];

const candidate = Array(45).fill().map((v, i) => i + 1);

function getNum(){
    while(candidate.length > 0){
        const random = Math.floor(Math.random() * candidate.length);
        const spliceArray = candidate.splice(random,1);
        const value = spliceArray[0];
        result.push(value);
    }
    return result;
}
getNum();

const sortNum = result.slice(0,6).sort((a,b) => a - b);
const bonus = result[6];

function makeView(allNum,lottoNum){
    const getBall = document.createElement('div');
    getBall.className = 'ball';
    getBall.textContent = allNum;
    lottoNum.appendChild(getBall);
}

function getTime(){
    for(let i = 0; i<sortNum.length; i++){
        setTimeout(() => {
            makeView(sortNum[i],lottoNum)
        },(i+1)*1000);
    }
}
getTime();

function getBonus(){
    setTimeout(() =>{
        makeView(bonus,bonusNum)
    },7000);
}
getBonus();