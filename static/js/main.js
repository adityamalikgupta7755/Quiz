const quizData = [{
        question: `What is a correct syntax to output "Hello World" in Python?`,
        a: `p("Hello World")`,
        b: 'print("Hello World")',
        c: 'echo "Hello World"',
        d: 'p("Hello World");',
        correct: 'b'
    },
    {
        question: "How do you insert COMMENTS in Python code?",
        a: '/*This is comment*/',
        b: '//This is comment',
        c: '*/This is comment*/',
        d: '#This is comment',
        correct: 'd'
    },
    {
        question: "Which one is NOT a legal variable name?",
        a: 'my-var',
        b: '_myvar',
        c: 'myVar',
        d: 'My_var',
        correct: 'b'
    },
    {
        question: "How do you create a variable with the numeric value 5?",
        a: 'x = 5',
        b: 'x = float(5)',
        c: 'x = int(5)',
        d: 'all of above correct',
        correct: 'd'
    },
    {
        question: "What is the correct file extension for Python files?",
        a: '.pty',
        b: '.python',
        c: '.py',
        d: 'no of these',
        correct: 'c'
    }
]
const questionEl = document.getElementById('question')
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submitbtn')

let currentQuiz = 0;


loadQuiz();

function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}


function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswer() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });

}





let score = 0;

submitBtn.addEventListener("click", () => {


    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
    }


    if (currentQuiz < quizData.length) {
        loadQuiz();

    } else {
        quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            `;
        quiz_reload.innerHTML = `
            <button onclick="location.reload()">Reload</button>
        `;
    }





})