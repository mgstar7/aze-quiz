const startbutton = document.getElementById("startbutton")
const second = document.getElementById("second")
const time = document.getElementById("time")
const inputBox = document.getElementById("inputBox")
const questionList = ["피카츄가 담배를 피기 전에 하는 말?","우유가 아프면 뭐라고 할까?","소가 불에 타면 뭘까?","완전 야한 가수는?","서울에 사는 거지 이름은?","엄마가 길을 잃었다면?","왕과 작별인사를 할 때 하는 말은?","왕이 담배를 피우면?","커플이 좋아하는 곤충은 뭘까?","햄버거 색깔은?"]
const answerList = ["피까","앙팡","탄소","다비치","설거지","맘마미아","바이킹","스모킹","잠자리","버건디"]
const questionListSize = 10

let n=0
let timecounterOriginal=3
let timecounter=timecounterOriginal
function timeMinus(){
    if(timecounter==0)
    {
        n++
        timecounter=timecounterOriginal
        time.innerText=timecounter+"초"
        nextQuestion(n)
    }
    else{
        timecounter--
        time.innerText=timecounter+"초"
    }
}

function nextQuestion(number){
    const question = document.getElementById("question")
    const num=document.getElementById("num")

    question.innerText=number+1+"."+questionList[number]
    num.innerText=answerList[number].length+"자리"
}

function gamestart(event) {
    event.target.parentNode.style.display="none"
    second.style.display="block"
    nextQuestion(0)
    timecounter=timecounterOriginal
    time.innerText=timecounter+"초"
    setInterval(timeMinus,1000)

}

function scan(event){
    event.preventDefault()
    console.log(1)
    inputBox.value=""
}

startbutton.addEventListener("click", gamestart)
inputBox.addEventListener("submit",scan)