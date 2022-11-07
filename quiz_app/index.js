var data = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        A: "<scripting>",
        B: "<js>",
        C: "<javascript>",
        D: "<script>",
        answer: "D"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        A: "Both the <head> section and the <body> section are correct",
        B: "The <body> section",
        C: "The <head> section",
        D: "The <title> section",
        answer: "A"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        A: "<script src='xxx.js'>",
        B: "<script name='xxx.js'>",
        C: "<script href='xxx.js'>",
        D: "None of the above",
        answer: "A"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        A: "if i == 5 then",
        B: "if (i == 5)",
        C: "if i = 5 then",
        D: "if i = 5",
        answer: "B"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        A: "alertBox('Hello World');",
        B: "msgBox('Hello World');",
        C: "alert('Hello World');",
        D: "msg('Hello World');",
        answer: "C"
    }
]

const quizText = document.getElementById('quiz');

const question = document.getElementById('question');

const options = document.querySelectorAll('.options');

const optionA = document.getElementById("valueA");
const optionB = document.getElementById("valueB");
const optionC = document.getElementById("valueC");
const optionD = document.getElementById("valueD");

const submit = document.getElementById('submitBtn');
console.log(submit)

let currentQuestion = 0;
let score = 0;

const uncheck = () => {
    options.forEach((option) => {
        option.checked = false
    })
}

const runQuiz = () => {
    uncheck();
question.innerText = data[currentQuestion].question;
optionA.innerText = data[currentQuestion].A;
optionB.innerText = data[currentQuestion].B;
optionC.innerText = data[currentQuestion].C;
optionD.innerText = data[currentQuestion].D;
} 

runQuiz();

submit.addEventListener('click' , () => {
    let selectedOption = null;
    options.forEach((option) => {
        if(option.checked) {
        return selectedOption = option.id
        }
    });
    console.log(selectedOption)

if(selectedOption == data[currentQuestion].answer) {
    score = score + 1;
}

currentQuestion = currentQuestion + 1;

if(currentQuestion == data.length-1){
    submit.innerText = "Submit Answers"
}

if(currentQuestion == data.length) {
    quizText.innerHTML = `<h4>You answered ${score} questions correctly out of ${data.length} questions.</h4>`
}

else {
    runQuiz();
}

})

