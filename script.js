const questions = [
    {
        question: "Microsoft Word is mainly used for?",
        answers: [
            { text: "Typing documents.", correct: true},
            { text: "Drawing.", correct: false},
            { text: "Making videos.", correct: false},
            { text: "Browsing internet.", correct: false},
        ]
    },
    {
        question: "What is the default file extension for word?",
        answers: [
            { text: ".PPT", correct: "false"},
            { text: ".xls", correct: "false"},
            { text: ".cdr", correct: "false"},
            { text: ".docx", correct: "true"},
        ]
    },
    {
        question: "Which tool makes text bold?",
        answers: [
            { text: "S", correct: "false"},
            { text: "U", correct: "false"},
            { text: "I", correct: "false"},
            { text: "B", correct: "true"},
        ]
    },
    {
        question: "Which toll changes text size?",
        answers: [
            { text: "Font size", correct: "true"},
            { text: "font height", correct: "false"},
            { text: "cut", correct: "false"},
            { text: "print", correct: "false"},
        ]
    },
    {
        question: "Which key moves text to a new line?",
        answers: [
            { text: "Space bar", correct: "false"},
            { text: "Shift", correct: "false"},
            { text: "ctrl", correct: "false"},
            { text: "Enter", correct: "true"},
        ]
    },
    {
        question: "What is used to save a document?",
        answers: [
            { text: "ctrl + C", correct: "false"},
            { text: "ctrl + V", correct: "false"},
            { text: "ctrl + S", correct: "true"},
            { text: "ctrl + V", correct: "false"},
        ]
    },
    {
        question: "Which option aligns text to the center?",
        answers: [
            { text: "Left", correct: "false"},
            { text: "Right", correct: "false"},
            { text: "Center", correct: "true"},
            { text: "Justify", correct: "false"},
        ]
    },
    {
        question: "What is a document?",
        answers: [
            { text: "A game.", correct: "false"},
            { text: "A typed file.", correct: "true"},
            { text: "A picture.", correct: "false"},
            { text: "A song.", correct: "false"},
        ]
    },
    {
        question: "Which tool checks spelling mistakes?",
        answers: [
            { text: "The RAM", correct: "false"},
            { text: "Grammar tool", correct: "false"},
            { text: "Spell checker", correct: "true"},
            { text: "Find", correct: "false"},
        ]
    },
    {
        question: "What is used to print a word document?",
        answers: [
            { text: "A scanner.", correct: "false"},
            { text: "A printer.", correct: "true"},
            { text: "A monitor.", correct: "false"},
            { text: "Speaker.", correct: "false"},
        ]
    },
    {
        question: "Excel is mainly used for?",
        answers: [
            { text: "Typing letters.", correct: "false"},
            { text: "Data and calculations.", correct: "true"},
            { text: "Drawing.", correct: "false"},
            { text: "Playing music.", correct: "false"},
        ]
    },
    {
        question: "What is a cell in Excel?",
        answers: [
            { text: "A row.", correct: "false"},
            { text: "A column.", correct: "false"},
            { text: "A box where data is entered.", correct: "true"},
            { text: "The Home tab.", correct: "false"},
        ]
    },
    {
        question: "Which symbol starts a formula in Excel?",
        answers: [
            { text: "+", correct: "false"},
            { text: "-", correct: "false"},
            { text: "=", correct: "true"},
            { text: "*", correct: "false"},
        ]
    },
    {
        question: "What is a row in Excel?",
        answers: [
            { text: "Vertical cells.", correct: "false"},
            { text: "Horizontal cells.", correct: "true"},
            { text: "Single cells", correct: "false"},
            { text: "Page", correct: "false"},
        ]
    },
    {
        question: "What is a column in excel?",
        answers: [
            { text: "Vertical cells.", correct: "true"},
            { text: "Horizontal cells.", correct: "false"},
            { text: "Sheet.", correct: "false"},
            { text: "Random cells.", correct: "false"},
        ]
    },
    {
        question: "Which function adds numbers?",
        answers: [
            { text: "MULTIPLY", correct: "false"},
            { text: "SUM", correct: "true"},
            { text: "DIVIDE", correct: "false"},
            { text: "COUNTIF", correct: "false"},
        ]
    },
    {
        question: "What is the file extension for Excel?",
        answers: [
            { text: ".docx", correct: "false"},
            { text: ".pptx", correct: "false"},
            { text: ".xlsx", correct: "true"},
            { text: ".cdr", correct: "false"},
        ]
    },
    {
        question: "Which of these tools creates charts?",
        answers: [
            { text: "Insert charts", correct: "true"},
            { text: "spell checker", correct: "false"},
            { text: "zoom", correct: "false"},
            { text: "clipart", correct: "false"},
        ]
    },
    {
        question: "What is a worksheet?",
        answers: [
            { text: "A single excel page", correct: "true"},
            { text: "A book", correct: "false"},
            { text: "A formula", correct: "false"},
            { text: "A cell", correct: "false"},
        ]
    },
    {
        question: "Which sortcut key edits all cells?",
        answers: [
            { text: "Enter", correct: "false"},
            { text: "Tab", correct: "false"},
            { text: "F2", correct: "true"},
            { text: "Shift", correct: "false"},
        ]
    },
    {
        question: "Powerpoint is used to?",
        answers: [
            { text: "write letters", correct: "false"},
            { text: "make presentations.", correct: "true"},
            { text: "Draw logos", correct: "false"},
            { text: "None of the above.", correct: "false"},
        ]
    },
    {
        question: "Which file extension belongs to powerpoint?",
        answers: [
            { text: ".pptx", correct: "true"},
            { text: ".xlsx", correct: "false"},
            { text: ".docx", correct: "false"},
            { text: ".cdr", correct: "false"},
        ]
    },
    {
        question: "Which tool adds animation?",
        answers: [
            { text: "Design.", correct: "false"},
            { text: "Annimation.", correct: "true"},
            { text: "Transitions.", correct: "false"},
            { text: "Review.", correct: "false"},
        ]
    },
    {
        question: "Which view shows the presentation as audience sees it?",
        answers: [
            { text: "Normal view", correct: "false"},
            { text: "Slide sorter view", correct: "false"},
            { text: "Reading view", correct: "false"},
            { text: "Slide show view", correct: "true"},
        ]
    },
    {
        question: "Which of this is an example of a computer?",
        answers: [
            { text: "Bicycle", correct: "false"},
            { text: "Television", correct: "false"},
            { text: "Laptop", correct: "true"},
            { text: "Book", correct: "false"},
        ]
    },
    {
        question: "Which tool changes slide background?",
        answers: [
            { text: "Design.", correct: "true"},
            { text: "Insert", correct: "false"},
            { text: "View", correct: "false"},
            { text: "Review.", correct: "false"},
        ]
    },
    {
        question: "What can you insert into slides?",
        answers: [
            { text: "Text.", correct: "false"},
            { text: "Images.", correct: "false"},
            { text: "videos", correct: "false"},
            { text: "All of the above.", correct: "true"},
        ]
    },
    {
        question: "Corel draw is used for?",
        answers: [
            { text: "Typing documents", correct: "false"},
            { text: "Making calculations", correct: "false"},
            { text: "Graphic design", correct: "true"},
            { text: "Playing music", correct: "false"},
        ]
    },
    {
        question: "Wich tool selects objects?",
        answers: [
            { text: "Shape tool.", correct: "false"},
            { text: "Pick tool.", correct: "true"},
            { text: "Zoom tool", correct: "false"},
            { text: "Text tool.", correct: "false"},
        ]
    },
    {
        question: "Which tool is used to type text?",
        answers: [
            { text: "Pick tool", correct: "false"},
            { text: "Zoom tool", correct: "false"},
            { text: "Text tool", correct: "true"},
            { text: "Crop tool", correct: "false"},
        ]
    },

    {
        question: "What vector mean?",
        answers: [
            { text: "Pixel image", correct: "false"},
            { text: "Editable graphics", correct: "true"},
            { text: "Video file", correct: "false"},
            { text: "Sound file", correct: "false"},
        ]
    },
    {
        question: "Which file extension belongs to corel draw?",
        answers: [
            { text: ".docx", correct: "false"},
            { text: ".pptx", correct: "false"},
            { text: ".cdr", correct: "true"},
            { text: ".xlsx", correct: "false"},
        ]
    },
    {
        question: "WhichWhich tool changes object color?",
        answers: [
            { text: "Zoom tool", correct: "false"},
            { text: "Fill tool", correct: "true"},
            { text: "Pick tool", correct: "false"},
            { text: "Crop tool", correct: "false"},
        ]
    },
    {
        question: "CorelDraw is best for designing...?",
        answers: [
            { text: "Letters", correct: "false"},
            { text: "Spreadsheets", correct: "false"},
            { text: "Logos and banners", correct: "true"},
            { text: "Presentations", correct: "false"},
        ]
    },
    {
        question: "Which Which part of the computer is called the brain?",
        answers: [
            { text: "Monitor", correct: "false"},
            { text: "Keyboard", correct: "false"},
            { text: "CPU", correct: "true"},
            { text: "Mouse", correct: "false"},
        ]
    },
    {
        question: "which device is used to type letters and numbers?",
        answers: [
            { text: "mouse", correct: "false"},
            { text: "monitor", correct: "false"},
            { text: "keyboard", correct: "true"},
            { text: "piano", correct: "false"},
        ]
    },
    {
        question: "which memory is temporary?",
        answers: [
            { text: "ROM", correct: "false"},
            { text: "Cache", correct: "false"},
            { text: "Hard Disk", correct: "false"},
            { text: "RAM", correct: "true"},
        ]
    },
    {
        question: "What is a driver ?",
        answers: [
            { text: "A game", correct: "false"},
            { text: "A person that drives the school bus", correct: "false"},
            { text: "A software that helps hardware work", correct: "true"},
            { text: "A computer virus", correct: "false"},
        ]
    },
    {
        question: "which of these takes pictures for the computer?",
        answers: [
            { text: "Speaker", correct: "false"},
            { text: "Webcam", correct: "true"},
            { text: "Printer", correct: "false"},
            { text: "Samsung S21", correct: "false"},
        ]
    },
    {
        question: "which feature controls how one slide moves to the next?",
        answers: [
            { text: "Animation", correct: "false"},
            { text: "Layout", correct: "false"},
            { text: "Theme", correct: "false"},
            { text: "Transition", correct: "true"},
        ]
    },
    {
        question: "which feature lets you add sound or video to a slide?",
        answers: [
            { text: "Insert > Media", correct: "true"},
            { text: "Review > Tools", correct: "false"},
            { text: "View > Multimedia", correct: "false"},
            { text: "Home > Effects", correct: "false"},
        ]
    },
    {
        question: "which of these is NOT a powerpoint view?",
        answers: [
            { text: "Outline view", correct: "false"},
            { text: "Normal view", correct: "false"},
            { text: "Draft view", correct: "true"},
            { text: "Slide show view", correct: "false"},
        ]
    },
    {
        question: "which shortcut ends a slideshow?",
        answers: [
            { text: "CTRL + Z", correct: "false"},
            { text: "Esc", correct: "true"},
            { text: "F1", correct: "false"},
            { text: "CTRL + E", correct: "false"},
        ]
    },
    {
        question: "which feature is used to add pre-designed slide layouts and colors?",
        answers: [
            { text: "Theme", correct: "true"},
            { text: "Transition", correct: "false"},
            { text: "SmartArt", correct: "false"},
            { text: "Paragraph", correct: "false"},
        ]
    },

    {
        question: "what is the default value of the border?",
        answers: [
            { text: "0", correct: "true"},
            { text: "1", correct: "false"},
            { text: "2", correct: "false"},
            { text: "5", correct: "false"},
        ]
    },
    {
        question: "which feature is used to add color and design to a table?",
        answers: [
            { text: "Layout", correct: "false"},
            { text: "Style", correct: "true"},
            { text: "Design", correct: "false"},
            { text: "Color", correct: "false"},
        ]
    },
    {
        question: "which attribute adds space between the cell border and its content?",
        answers: [
            { text: "Cellspacing", correct: "false"},
            { text: "Cellpadding", correct: "true"},
            { text: "Border", correct: "false"},
            { text: "Margin", correct: "false"},
        ]
    },
    {
        question: "Which attribute adds space between table cells?",
        answers: [
            { text: "CellSpacing", correct: "true"},
            { text: "CellPadding", correct: "false"},
            { text: "Border", correct: "false"},
            { text: "Margin", correct: "false"},
        ]
    },
    {
        question: "What attribute is used to merge cells horizontally?",
        answers: [
            { text: "RowSpan", correct: "false"},
            { text: "ColSpan", correct: "true"},
            { text: "Merge", correct: "false"},
            { text: "Span", correct: "false"},
        ]
    },
];

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