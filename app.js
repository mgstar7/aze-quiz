const startbutton = document.getElementById("startbutton")
const first = document.getElementById("first")
const second = document.getElementById("second")
const third = document.getElementById("third")
const time = document.getElementById("time")
const inputBox = document.getElementById("inputBox")
const inputForm = document.getElementById("inputForm")
const result = document.getElementById("result")
const questionList = ["피카츄가 담배를 피기 전에 하는 말?", "우유가 아프면 뭐라고 할까?", "소가 불에 타면 뭘까?", "완전 야한 가수는?", "서울에 사는 거지 이름은?", "엄마가 길을 잃었다면?", "왕과 작별인사를 할 때 하는 말은?", "왕이 담배를 피우면?", "커플이 좋아하는 곤충은 뭘까?", "햄버거 색깔은?"]
const answerList = ["피까", "앙팡", "탄소", "다비치", "설거지", "맘마미아", "바이킹", "스모킹", "잠자리", "버건디"]
let questionOrder = []
const questionListSize = 10 //문제수 바뀌면 수정해야함
let questionNumber = -1
let answerCounter = 0

let n = 0
let timecounterOriginal = 15 // 문제 제한시간 수정가능
let timecounter = timecounterOriginal

function timecheck() {
    if (timecounter == 0) {
        timecounter = timecounterOriginal
        time.innerText = timecounter + "초"
        nextQuestion(questionOrder[questionNumber + 1])
    }
}

function timeMinus() {
    timecounter--
    time.innerText = timecounter + "초"
}

function nextQuestion(number) {
    const question = document.getElementById("question")
    const num = document.getElementById("num")
    questionNumber++

    if (questionNumber == questionListSize) {
        finish()

    }
    else {
        question.innerText = questionNumber + 1 + "." + questionList[questionOrder[number]]
        console.log(questionNumber + 1 + "." + questionList[questionOrder[number]])
        num.innerText = answerList[questionOrder[number]].length + "자리"
    }
}
let h;
let a;
function gamestart(event) {
    event.target.parentNode.style.display = "none"
    second.style.display = "block"
    for (let i = 0; i < questionListSize; i++) {
        while (1) {
            let num = Math.floor(Math.random() * 10)
            if (questionOrder.includes(num)) {
                continue
            }
            else {
                questionOrder.push(num)
                break
            }
        }
    }

    nextQuestion(questionOrder[0])
    timecounter = timecounterOriginal
    time.innerText = timecounter + "초"
    h = setInterval(timeMinus, 1000)
    a = setInterval(timecheck, 1)
}

function scan(event) {
    event.preventDefault()
    if (inputBox.value == answerList[questionNumber]) {
        answerCounter++
        nextQuestion(questionNumber + 1)
    }
    inputBox.value = ""
}

function finish() {
    clearInterval(h)
    clearInterval(a)
    result.innerText = "당신은 " + answerCounter / questionListSize * 100 + "% 아재시군요!"
    first.style.display = "none"
    second.style.display = "none"
    third.style.display = "block"
}

startbutton.addEventListener("click", gamestart)
inputForm.addEventListener("submit", scan)