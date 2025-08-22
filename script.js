const questions = [
    {
        question: "what is a computer?",
        answers: [
            { text: "An Agro device for farming", correct: "false"},
            { text: "An Electronic device that accepts, process and presents data.", correct: "true"},
            { text: "A Glovo", correct: "false"},
            { text: "A Giraffe", correct: "false"},
        ]
    },
    {
        question: "who developed the first programmable device?",
        answers: [
            { text: "Charles Babbage", correct: "true"},
            { text: "Charles Dickens", correct: "false"},
            { text: "Charles Obi", correct: "false"},
            { text: "Charles Okafor", correct: "false"},
        ]
    },
    {
        question: "who was the first programer?",
        answers: [
            { text: "Alice Babbage", correct: "false"},
            { text: "Alice Lovelace", correct: "false"},
            { text: "Ada Obi", correct: "false"},
            { text: "Ada Lovelace", correct: "true"},
        ]
    },
    {
        question: "Only one of the options bellow is correct.",
        answers: [
            { text: "Syntax is the arrangement of logic.", correct: "false"},
            { text: "Syntax is the orderly arrangement of codes", correct: "true"},
            { text: "Syntax is the spacing of codes.", correct: "false"},
            { text: "Syntax is logic.", correct: "false"},
        ]
    },
    {
        question: "Only one of the options bellow is correct.",
        answers: [
            { text: "Logic is the thinking of the computer", correct: "false"},
            { text: "Logic is the thinking behind what you want the computer to do.", correct: "true"},
            { text: "Logic is syntax", correct: "false"},
            { text: "Logic and syntax is the same.", correct: "false"},
        ]
    },
    {
        question: "Only one of the options bellow is correct.",
        answers: [
            { text: "Logic is the idea, and syntax is how you write your idea clearly.", correct: "true"},
            { text: "The computer can think by itself", correct: "false"},
            { text: "The computer is write logic on its own", correct: "false"},
            { text: "Syntax is the idea, logic is the code.", correct: "false"},
        ]
    },
    {
        question: "Which instrument is used to enter instruction to a computer?",
        answers: [
            { text: "A Monitor", correct: "false"},
            { text: "A Speaker", correct: "false"},
            { text: "The power button", correct: "false"},
            { text: "A Keyboard", correct: "true"},
        ]
    },
    {
        question: "What is a programming language?",
        answers: [
            { text: "A proramming language is a good language.", correct: "false"},
            { text: "A programming language is a language with which we pass instructions to the computer.", correct: "true"},
            { text: "A programming language is a sign language", correct: "false"},
            { text: "A programming language is a language with which we communicate our feelings.", correct: "false"},
        ]
    },
    {
        question: "What is a program?",
        answers: [
            { text: "A program is a set of rules.", correct: "false"},
            { text: "A program is a combination of codes", correct: "false"},
            { text: "A program is a set of instructions that tells the computer what to do.", correct: "true"},
            { text: "A program is a game we play.", correct: "false"},
        ]
    },
    {
        question: "What are the main types of programming language?",
        answers: [
            { text: "Hardware and software programming language.", correct: "false"},
            { text: "Assembly and Hardware programming language.", correct: "false"},
            { text: "Software and Low level language", correct: "false"},
            { text: "Low level and High level programming language.", correct: "true"},
        ]
    },
    {
        question: "What is a low level language?",
        answers: [
            { text: "Low level language is a common language", correct: "false"},
            { text: "Low level language is closer to humans than the CPU of the computer.", correct: "false"},
            { text: "Low level language is closer to the CPU of the computer than to humans", correct: "true"},
            { text: "Low level language is a slower language.", correct: "false"},
        ]
    },
    {
        question: "Only one of the options below is an example of low level language.",
        answers: [
            { text: "Glovo App", correct: "false"},
            { text: "Igbo and yoruba", correct: "false"},
            { text: "Hausa and Efik", correct: "false"},
            { text: "Machine and Assembly language.", correct: "true"},
        ]
    },
    {
        question: "Low level language is used to build one of the following:",
        answers: [
            { text: "Glovo App", correct: "false"},
            { text: "Jumia App", correct: "false"},
            { text: "Pineapple Juice", correct: "false"},
            { text: "Firmware and Embedded systems.", correct: "true"},
        ]
    },
    {
        question: "What are FIRMWARES?",
        answers: [
            { text: "A special kind of software that stores information.", correct: "false"},
            { text: "A school bus", correct: "false"},
            { text: "A game that can be installed using a flash drive", correct: "false"},
            { text: "A special kind of software permently written into a device to control its basic functions.", correct: "true"},
        ]
    },
    {
        question: "Only one of the options bellow is correct about a FIRMWARE.",
        answers: [
            { text: "It is written in high level language.", correct: "false"},
            { text: "It is written in Low level language.", correct: "true"},
            { text: "It is written in Africa.", correct: "false"},
            { text: "It can be updated like your regular software.", correct: "false"},
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper things markup language", correct: "false"},
            { text: "Hyper Text Markup Language", correct: "true"},
            { text: "Hyper Task Marking Language", correct: "false"},
            { text: "Hyper Task Money Language.", correct: "false"},
        ]
    },
    {
        question: "What are HTML tags?",
        answers: [
            { text: "HTML tags are children of HTML", correct: "false"},
            { text: "HTML tags are opening and closing tags", correct: "false"},
            { text: "HTML tags tells the browser to shut up", correct: "false"},
            { text: "HTML tags tells the browser what to do and how to do it.", correct: "true"},
        ]
    },
    {
        question: "What does the 'P' tag do?",
        answers: [
            { text: "Tells the browser to create a page.", correct: "false"},
            { text: "Tells the browser to create a paragraph.", correct: "true"},
            { text: "Tells the browser to make a picture.", correct: "false"},
            { text: "Tells the browser to print a document.", correct: "false"},
        ]
    },
    {
        question: "What does the 'Doctype HTML' tag do?",
        answers: [
            { text: "Telss the computer to close the HTML file", correct: "false"},
            { text: "Tells the browser we are creating a HTML file.", correct: "true"},
            { text: "Tells the browser to call a doctor.", correct: "false"},
            { text: "Tells the browser to delete the HTML document.", correct: "false"},
        ]
    },
    {
        question: "What does the 'Title' tag do?",
        answers: [
            { text: "Display the window on the browser.", correct: "false"},
            { text: "Gives the programmer a title.", correct: "false"},
            { text: "Displays the title of the document on the browser.", correct: "true"},
            { text: "Display the country of the developer on the browser.", correct: "false"},
        ]
    },
    {
        question: "How many heading tags do we have?",
        answers: [
            { text: "6 (h1 to h6)", correct: "true"},
            { text: "10(h1 to h10)", correct: "false"},
            { text: "7 (h1 to h7)", correct: "false"},
            { text: "None of the above.", correct: "false"},
        ]
    },
    {
        question: "What does the 'a' tag do?",
        answers: [
            { text: "Creates a link", correct: "true"},
            { text: "Changes a color", correct: "false"},
            { text: "creates a small letter 'a'", correct: "false"},
            { text: "Creates a capital letter 'A'", correct: "false"},
        ]
    },
    {
        question: "who invented the first microprocessor?",
        answers: [
            { text: "Microsoft", correct: "false"},
            { text: "Intel", correct: "true"},
            { text: "Windows", correct: "false"},
            { text: "Apple", correct: "false"},
        ]
    },
    {
        question: "What does the 'table' tag do?",
        answers: [
            { text: "Constructs a dinning table", correct: "false"},
            { text: "Tells the browser we are creating a table", correct: "true"},
            { text: "Tells the browser to bring food to the table", correct: "false"},
            { text: "Tells the computer to sit on the table.", correct: "false"},
        ]
    },
    {
        question: "which of these statements is correct?",
        answers: [
            { text: "A computer is a program", correct: "false"},
            { text: "A computer is a programmable robot.", correct: "true"},
            { text: "A computer is NOT a robot.", correct: "false"},
            { text: "A computer does not need human to function.", correct: "false"},
        ]
    },
    {
        question: "What does the 'ul' tag do?",
        answers: [
            { text: "Tells the browser to create a List", correct: "false"},
            { text: "Tells the browser to create an unodered list", correct: "true"},
            { text: "Tells the broswer to create an ordered list", correct: "false"},
            { text: "Gives the broswer a list.", correct: "false"},
        ]
    },
    {
        question: "What does the 'th' tag do?",
        answers: [
            { text: "Creates a table header", correct: "false"},
            { text: "Creates a table heading", correct: "true"},
            { text: "Create heads and tails", correct: "false"},
            { text: "Creates thick heads and thin tails", correct: "false"},
        ]
    },
    {
        question: "What does the 'li' tag do?",
        answers: [
            { text: "creates long lists", correct: "false"},
            { text: "Creates list items.", correct: "true"},
            { text: "creates short lists", correct: "false"},
            { text: "Creates time table", correct: "false"},
        ]
    },
    {
        question: "What does the 'tr' tag do?",
        answers: [
            { text: "Creates table ruler", correct: "false"},
            { text: "Creates table rows", correct: "true"},
            { text: "Creates table lines", correct: "false"},
            { text: "Creates tables in rows", correct: "false"},
        ]
    },
    {
        question: "which is NOT a table attribute?",
        answers: [
            { text: "tr", correct: "false"},
            { text: "span", correct: "true"},
            { text: "td", correct: "false"},
            { text: "tbody", correct: "false"},
        ]
    },
]
//     {
//         question: "which country has the finest girls in the world?",
//         answers: [
//             { text: "China", correct: "false"},
//             { text: "Columbia", correct: "true"},
//             { text: "Rwanda", correct: "false"},
//             { text: "Spain", correct: "false"},
//         ]
//     },
//     {
//         question: "which country has the finest girls in the world?",
//         answers: [
//             { text: "China", correct: "false"},
//             { text: "Columbia", correct: "true"},
//             { text: "Rwanda", correct: "false"},
//             { text: "Spain", correct: "false"},
//         ]
//     },
//     {
//         question: "which country has the finest girls in the world?",
//         answers: [
//             { text: "China", correct: "false"},
//             { text: "Columbia", correct: "true"},
//             { text: "Rwanda", correct: "false"},
//             { text: "Spain", correct: "false"},
//         ]
//     },
//     {
//         question: "which country has the finest girls in the world?",
//         answers: [
//             { text: "China", correct: "false"},
//             { text: "Columbia", correct: "true"},
//             { text: "Rwanda", correct: "false"},
//             { text: "Spain", correct: "false"},
//         ]
//     },
//     {
//         question: "which country has the finest girls in the world?",
//         answers: [
//             { text: "China", correct: "false"},
//             { text: "Columbia", correct: "true"},
//             { text: "Rwanda", correct: "false"},
//             { text: "Spain", correct: "false"},
//         ]
//     },
//     {
//         question: "which country has the finest girls in the world?",
//         answers: [
//             { text: "China", correct: "false"},
//             { text: "Columbia", correct: "true"},
//             { text: "Rwanda", correct: "false"},
//             { text: "Spain", correct: "false"},
//         ]
//     },
//     {
//         question: "which country has the finest girls in the world?",
//         answers: [
//             { text: "China", correct: "false"},
//             { text: "Columbia", correct: "true"},
//             { text: "Rwanda", correct: "false"},
//             { text: "Spain", correct: "false"},
//         ]
//     },
//     {
//         question: "which country has the finest girls in the world?",
//         answers: [
//             { text: "China", correct: "false"},
//             { text: "Columbia", correct: "true"},
//             { text: "Rwanda", correct: "false"},
//             { text: "Spain", correct: "false"},
//         ]
//     },
//     {
//         question: "which country has the finest girls in the world?",
//         answers: [
//             { text: "China", correct: "false"},
//             { text: "Columbia", correct: "true"},
//             { text: "Rwanda", correct: "false"},
//             { text: "Spain", correct: "false"},
//         ]
//     },
//     {
//         question: "which country has the finest girls in the world?",
//         answers: [
//             { text: "China", correct: "false"},
//             { text: "Columbia", correct: "true"},
//             { text: "Rwanda", correct: "false"},
//             { text: "Spain", correct: "false"},
//         ]
//     },
//     {
//         question: "which country has the finest girls in the world?",
//         answers: [
//             { text: "China", correct: "false"},
//             { text: "Columbia", correct: "true"},
//             { text: "Rwanda", correct: "false"},
//             { text: "Spain", correct: "false"},
//         ]
//     },
//     {
//         question: "which country has the finest girls in the world?",
//         answers: [
//             { text: "China", correct: "false"},
//             { text: "Columbia", correct: "true"},
//             { text: "Rwanda", correct: "false"},
//             { text: "Spain", correct: "false"},
//         ]
//     },
//     {
//         question: "which country has the finest girls in the world?",
//         answers: [
//             { text: "China", correct: "false"},
//             { text: "Columbia", correct: "true"},
//             { text: "Rwanda", correct: "false"},
//             { text: "Spain", correct: "false"},
//         ]
//     },
//     {
//         question: "which country has the finest girls in the world?",
//         answers: [
//             { text: "China", correct: "false"},
//             { text: "Columbia", correct: "true"},
//             { text: "Rwanda", correct: "false"},
//             { text: "Spain", correct: "false"},
//         ]
//     },
//     {
//         question: "which country has the finest girls in the world?",
//         answers: [
//             { text: "China", correct: "false"},
//             { text: "Columbia", correct: "true"},
//             { text: "Rwanda", correct: "false"},
//             { text: "Spain", correct: "false"},
//         ]
//     },
//     {
//         question: "which country has the finest girls in the world?",
//         answers: [
//             { text: "China", correct: "false"},
//             { text: "Columbia", correct: "true"},
//             { text: "Rwanda", correct: "false"},
//             { text: "Spain", correct: "false"},
//         ]
//     },
//     {
//         question: "which country has the finest girls in the world?",
//         answers: [
//             { text: "China", correct: "false"},
//             { text: "Columbia", correct: "true"},
//             { text: "Rwanda", correct: "false"},
//             { text: "Spain", correct: "false"},
//         ]
//     },
//     {
//         question: "which country has the finest girls in the world?",
//         answers: [
//             { text: "China", correct: "false"},
//             { text: "Columbia", correct: "true"},
//             { text: "Rwanda", correct: "false"},
//             { text: "Spain", correct: "false"},
//         ]
//     },
//     {
//         question: "which country has the finest girls in the world?",
//         answers: [
//             { text: "China", correct: "false"},
//             { text: "Columbia", correct: "true"},
//             { text: "Rwanda", correct: "false"},
//             { text: "Spain", correct: "false"},
//         ]
//     },
// ]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions [currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}




function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    };
};




nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();