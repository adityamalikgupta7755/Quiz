const quizData = [{
        question: "How old is florin?",
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },
    {
        question: "what is the most used programming language in 2019?",
        a: 'java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    },
    {
        question: "who is he President of US?",
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Mihal Andrel',
        correct: 'b'
    },
    {
        question: "what does HTML stand for?",
        a: 'HyperText Markup Language',
        b: 'Cascading Style Sheet',
        c: 'HighText Markup Language',
        d: 'HyperText Makeup Language',
        correct: 'a'
    },
    {
        question: "what year was JavaScript Launched?",
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'no of these',
        correct: 'd'
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