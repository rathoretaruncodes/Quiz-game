//OPTIMIZED CODE
const restartBtn = document.getElementById("restart");  
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const opt1 = document.getElementById("option1");
const opt2 = document.getElementById("option2");
const opt3 = document.getElementById("option3");
const opt4 = document.getElementById("option4");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText = document.getElementById("question-text");

let currentQuestion = 0;
let score = 0;
let questions = [
    {
        question:"Javascript is an _______ language?",
        answers: [
            {option:"Object-oriented", answer:true},
            {option:"Object-Based", answer:false},
            {option:"Procedural", answer:false},
            {option:"None of these", answer:false},
        ]
    },
    {
        question:"Which of the following keywords is used to define a variable in Javascript?",
        answers: [
            {option:"const", answer:false},
            {option:"let", answer:false},
            {option:"Both of these", answer:true},
            {option:"None of these", answer:false},
        ]
    },
    {
        question:"Where is the correct place to insert a JavaScript?",
        answers: [
            {option:"Head section", answer:false},
            {option:"Body section", answer:false},
            {option:"Both of these", answer:true},
            {option:"None of these", answer:false},
        ]
    },
    {
        question:"Which of the following methods can be used to display data in some form using Javascript?",
        answers: [
            {option:"document.write()", answer:false},
            {option:"console.log()", answer:false},
            {option:"window.alert()", answer:false},
            {option:"All of these", answer:true},
        ]
    },
    {
        question:"How do you create a function in JavaScript?",
        answers: [
            {option:"function = myFunction()", answer:false},
            {option:"function myFunction()", answer:true},
            {option:"function:myFunction()", answer:false},
            {option:"myFunction()", answer:false},
        ]
    }
]
restartBtn.addEventListener("click", restart);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);
submitBtn.addEventListener("click", submit);
//Function to handle answer option click
function handleAnswerOption(answerIndex) {
    if (questions[currentQuestion].answers[answerIndex].answer && score < 5) { //or (score < questions.length) to optimize the code
        score++;
    }
    userScore.innerHTML = score;
    if (currentQuestion < 4) // or (currentQuestion < questions.length - 1) to optimize the code 
        next();
}
// Assign the click event handlers to answer options
opt1.onclick = () => handleAnswerOption(0);
opt2.onclick = () => handleAnswerOption(1);
opt3.onclick = () => handleAnswerOption(2);
opt4.onclick = () => handleAnswerOption(3);
// Function to display the current question and options
function displayQuestion() {
    questionText.innerHTML = questions[currentQuestion].question;
    opt1.innerHTML = questions[currentQuestion].answers[0].option;
    opt2.innerHTML = questions[currentQuestion].answers[1].option;
    opt3.innerHTML = questions[currentQuestion].answers[2].option;
    opt4.innerHTML = questions[currentQuestion].answers[3].option;
}
function beginQuiz() {
    currentQuestion = 0;
    totalScore.innerHTML = questions.length;
    displayQuestion();
    prevBtn.classList.add("hide");
}
beginQuiz();

function restart() {
    currentQuestion = 0;
    prevBtn.classList.remove("hide");
    nextBtn.classList.remove("hide");
    submitBtn.classList.remove("hide");
    opt1.classList.remove("hide");
    opt2.classList.remove("hide");
    opt3.classList.remove("hide");
    opt4.classList.remove("hide");
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();
}
function next() {
    currentQuestion++;
    if(currentQuestion >=4){
        nextBtn.classList.add("hide");
        prevBtn.classList.remove("hide");
    }
    displayQuestion();
    prevBtn.classList.remove("hide");
}
function prev() {
    currentQuestion--;
    if(currentQuestion <=0){
        nextBtn.classList.remove("hide");
        prevBtn.classList.add("hide");
    }
    displayQuestion();
    nextBtn.classList.remove("hide");
}
function submit() {
    prevBtn.classList.add("hide");
    nextBtn.classList.add("hide");
    submitBtn.classList.add("hide");
    questionText.innerHTML = "Congratulations on submitting the Quiz!";
    opt1.innerHTML = "";
    opt2.innerHTML = "";
    opt3.innerHTML = "";
    opt4.innerHTML = "";
}

/* ORIGINAL CODE:
const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const opt1 = document.getElementById("option1");
const opt2 = document.getElementById("option2");
const opt3 = document.getElementById("option3");
const opt4 = document.getElementById("option4");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText = document.getElementById("question-text");

let currentQuestion = 0;
let score = 0;
let questions = [
    {
        question:"Javascript is an _______ language?",
        answers: [
            {option:"Object-oriented", answer:true},
            {option:"Object-Based", answer:false},
            {option:"Procedural", answer:false},
            {option:"None of these", answer:false},
        ]
    },
    {
        question:"Which of the following keywords is used to define a variable in Javascript?",
        answers: [
            {option:"const", answer:false},
            {option:"let", answer:false},
            {option:"Both of these", answer:true},
            {option:"None of these", answer:false},
        ]
    },
    {
        question:"Where is the correct place to insert a JavaScript?",
        answers: [
            {option:"Head section", answer:false},
            {option:"Body section", answer:false},
            {option:"Both of these", answer:true},
            {option:"None of these", answer:false},
        ]
    },
    {
        question:"Which of the following methods can be used to display data in some form using Javascript?",
        answers: [
            {option:"document.write()", answer:false},
            {option:"console.log()", answer:false},
            {option:"window.alert()", answer:false},
            {option:"All of these", answer:true},
        ]
    },
    {
        question:"How do you create a function in JavaScript?",
        answers: [
            {option:"function = myFunction()", answer:false},
            {option:"function myFunction()", answer:true},
            {option:"function:myFunction()", answer:false},
            {option:"myFunction()", answer:false},
        ]
    }
]

restartBtn.addEventListener("click", restart);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);
submitBtn.addEventListener("click", submit);

function beginQuiz() {
    currentQuestion = 0;
    totalScore.innerHTML = questions.length;
    questionText.innerHTML = questions[currentQuestion].question;
    opt1.innerHTML = questions[currentQuestion].answers[0].option;
    opt1.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score<5)
            score++;
        }
        userScore.innerHTML = score;
        if(currentQuestion<4)
        next();
    }
    opt2.innerHTML = questions[currentQuestion].answers[1].option;
    opt2.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score<5)
            score++;
        }
        userScore.innerHTML = score;
        if(currentQuestion<4)
        next();
    }
    opt3.innerHTML = questions[currentQuestion].answers[2].option;
    opt3.onclick = () => {
        if(questions[currentQuestion].answers[2].answer) {
            if(score<5)
            score++;
        }
        userScore.innerHTML = score;
        if(currentQuestion<4)
        next();
    }
    opt4.innerHTML = questions[currentQuestion].answers[3].option;
    opt4.onclick = () => {
        if(questions[currentQuestion].answers[3].answer) {
            if(score <5)
            score++;
        }
        userScore.innerHTML = score;
        if(currentQuestion < 4)
        next();
    }
    prevBtn.classList.add("hide");
}
beginQuiz();

function restart() {
    currentQuestion = 0;
    prevBtn.classList.remove("hide");
    nextBtn.classList.remove("hide");
    submitBtn.classList.remove("hide");
    opt1.classList.remove("hide");
    opt2.classList.remove("hide");
    opt3.classList.remove("hide");
    opt4.classList.remove("hide");
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();
}

function next() {
    currentQuestion++;
    if(currentQuestion >=4){
        nextBtn.classList.add("hide");
        prevBtn.classList.remove("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    opt1.innerHTML = questions[currentQuestion].answers[0].option;
    opt1.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 5)
            score++;
        }
        userScore.innerHTML = score;
        if(currentQuestion < 4) 
        next();
    }
    opt2.innerHTML = questions[currentQuestion].answers[1].option;
    opt2.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 5)
            score++;
        }
        userScore.innerHTML = score;
        if(currentQuestion < 4) 
        next();
    }
    opt3.innerHTML = questions[currentQuestion].answers[2].option;
    opt3.onclick = () => {
        if(questions[currentQuestion].answers[2].answer) {
            if(score < 5)
            score++;
        }
        userScore.innerHTML = score;
        if(currentQuestion < 4) 
        next();
    }
    opt4.innerHTML = questions[currentQuestion].answers[3].option;
    opt4.onclick = () => {
        if(questions[currentQuestion].answers[3].answer) {
            if(score < 5)
            score++;
        }
        userScore.innerHTML = score;
        if(currentQuestion < 4) 
        next();
    }
    prevBtn.classList.remove("hide");
}

function prev() {
    currentQuestion--;
    if(currentQuestion <=0){
        nextBtn.classList.remove("hide");
        prevBtn.classList.add("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    opt1.innerHTML = questions[currentQuestion].answers[0].option;
    opt1.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 5)
            score++;
        }
        userScore.innerHTML = score;
        if(currentQuestion < 4) 
        next();
    }
    opt2.innerHTML = questions[currentQuestion].answers[1].option;
    opt2.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 5)
            score++;
        }
        userScore.innerHTML = score;
        if(currentQuestion < 4) 
        next();
    }
    opt3.innerHTML = questions[currentQuestion].answers[2].option;
    opt3.onclick = () => {
        if(questions[currentQuestion].answers[2].answer) {
            if(score < 5)
            score++;
        }
        userScore.innerHTML = score;
        if(currentQuestion < 4) 
        next();
    }
    opt4.innerHTML = questions[currentQuestion].answers[3].option;
    opt4.onclick = () => {
        if(questions[currentQuestion].answers[3].answer) {
            if(score < 5)
            score++;
        }
        userScore.innerHTML = score;
        if(currentQuestion < 4) 
        next();
    }
    nextBtn.classList.remove("hide");
}

function submit() {
    prevBtn.classList.add("hide");
    nextBtn.classList.add("hide");
    submitBtn.classList.add("hide");
    questionText.innerHTML = "Congratulations on submitting the Quiz!";
    opt1.innerHTML = "";
    opt2.innerHTML = "";
    opt3.innerHTML = "";
    opt4.innerHTML = "";
} */
