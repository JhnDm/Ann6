const quizData = [
    {
        question: "Where did we first meet? 💑",
        options: ["School", "Mall", "Online", "At a party"],
        answer: "Online"
    },
    {
        question: "What is our anniversary date? 📅",
        options: ["April 7", "February 14", "October 23", "December 25"],
        answer: "April 7"
    },
    {
        question: "Which song reminds us of our love? 🎶",
        options: ["Pusong Bato", "Budots remix", "Just the two of us", "Fight Song"],
        answer: "Just the two of us"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const quiz = document.getElementById("quiz");
    const questionDiv = document.getElementById("question");
    const optionsDiv = document.getElementById("options");

    // Clear previous options
    optionsDiv.innerHTML = "";

    // Load question
    const currentQuestion = quizData[currentQuestionIndex];
    questionDiv.innerHTML = `<h3>${currentQuestion.question}</h3>`;

    // Load options
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.classList.add("btn", "btn-outline-dark", "my-1");
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    
    if (selectedOption === correctAnswer) {
        score++;
    }

    document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
        document.getElementById("next-btn").style.display = "none";
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").innerHTML = `<h2>You got ${score} out of ${quizData.length} right! 🎉</h2>`;
}

// Load first question on page load
loadQuestion();
