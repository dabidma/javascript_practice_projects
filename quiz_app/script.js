const quizData = [
    {
        question: 'How old is David?',
        a: '18',
        b: '19',
        c: '20',
        d: '21',
        correct: 'd'
    }, {
        question: "What is David's favorite language",
        a: 'Python',
        b: 'JavaScript',
        c: 'react Native',
        d: 'Java',
        correct: 'a'
    }, {
        question: "What is David's favorite game?",
        a: 'CS:GO',
        b: 'League of Legends',
        c: 'Minecraft',
        d: 'Valorant',
        correct: 'b'
    }, {
        question: "What is David's favorite food?",
        a: 'Spaghetti',
        b: 'Pho',
        c: 'Poke',
        d: 'Tacos',
        correct: 'd'
    }, {
        question: "What is David's favorite beverage?",
        a: 'Coffee',
        b: 'Coke',
        c: 'Celsius Energy',
        d: 'Water',
        correct: 'c'
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit = document.getElementById('submit');

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuiz = quizData[currentQuestion];

    questionEl.innerHTML = currentQuiz.question;
    a_text.innerHTML = currentQuiz.a;
    b_text.innerHTML = currentQuiz.b;
    c_text.innerHTML = currentQuiz.c;
    d_text.innerHTML = currentQuiz.d;
}

function getSelectedQuestion() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEls) => {
        answerEls.checked = false;
    })
}

submit.addEventListener('click', () => {
    const answer = getSelectedQuestion();

    console.log(answer);

    if (answer) {

        if(answer === quizData[currentQuestion].correct) {
            score++;
            console.log(score);
        }

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions!</h2>
            <button onclick="location.reload()">Reload</button>`;
        }
    }
});