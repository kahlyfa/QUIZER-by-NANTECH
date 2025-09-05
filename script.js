const questions = [
    {
        question: "what is a Program?",
        answers: [
            { text: "A Program is a set of instructions that tells the computer what to do.", correct: true},
            { text: "A program is an Electronic device that accepts, process and presents data.", correct: false},
            { text: "A digital conversation", correct: false},
            { text: "A group of meaningless codes", correct: false},
        ]
    },
    {
        question: "What is Storage?",
        answers: [
            { text: "Storage is where we keep our clothes", correct: "false"},
            { text: "Storage is a folder", correct: "false"},
            { text: "Storage is a local folder", correct: "false"},
            { text: "Storage is where computer keeps information like files, documents and folders.", correct: "true"},
        ]
    },
    {
        question: "what type of storage is volatile?",
        answers: [
            { text: "Read Onl Memory (ROM)", correct: "false"},
            { text: "Read Only Storage", correct: "false"},
            { text: "Random Access storage", correct: "false"},
            { text: "Random Access Memory (RAM)", correct: "true"},
        ]
    },
    {
        question: "Which type of memory is read only and cannot be modified?",
        answers: [
            { text: "Random access memory", correct: "false"},
            { text: "Read only memory", correct: "true"},
            { text: "Option 1", correct: "false"},
            { text: "Option 2", correct: "false"},
        ]
    },
    {
        question: "Which storage devices uses magnetic disks to store data?",
        answers: [
            { text: "Pen drive", correct: "false"},
            { text: "Hard Disk Drive (HDD)", correct: "true"},
            { text: "Memory card", correct: "false"},
            { text: "USB drive", correct: "false"},
        ]
    },
    {
        question: "What does SSD stand for?",
        answers: [
            { text: "Solid State Drive", correct: "true"},
            { text: "State Solid Drive", correct: "false"},
            { text: "Start State Drive", correct: "false"},
            { text: "Sleep Stand Drive", correct: "false"},
        ]
    },
    {
        question: "What is the unit of measurement for storage capacity?",
        answers: [
            { text: "Kevin bytes", correct: "false"},
            { text: "Dalu bytes", correct: "false"},
            { text: "Kamsi bytes", correct: "false"},
            { text: "Bytes (e.g KB, MB, GB, TB)", correct: "true"},
        ]
    },
    {
        question: "What type of storage is the USB Flash?",
        answers: [
            { text: "It is a fast storage.", correct: "false"},
            { text: "Secondary Storage (portable, non-volatile, solid state).", correct: "true"},
            { text: "A programming language is a sign language", correct: "false"},
            { text: "A programming language is a language with which we communicate our feelings.", correct: "false"},
        ]
    },
    {
        question: "Which type of storage is permanently used to store files in the computer?",
        answers: [
            { text: "The RAM", correct: "false"},
            { text: "The flash drive", correct: "false"},
            { text: "The ROM", correct: "true"},
            { text: "The memory card", correct: "false"},
        ]
    },
    {
        question: "Which file extension is the default for word document?",
        answers: [
            { text: ".doc", correct: "false"},
            { text: ".txt", correct: "false"},
            { text: ".pdf", correct: "false"},
            { text: ".docx", correct: "true"},
        ]
    },
    {
        question: "Which shortcut key is used to copy selected text?",
        answers: [
            { text: "CTRL + X", correct: "false"},
            { text: "CTRL + V.", correct: "false"},
            { text: "CTRL + C", correct: "true"},
            { text: "CTRL + A", correct: "false"},
        ]
    },
    {
        question: "Which tab in MS word contains the 'font' and 'paragraph' groups?",
        answers: [
            { text: "The Isert tab", correct: "false"},
            { text: "The layout tab", correct: "false"},
            { text: "The review tab", correct: "false"},
            { text: "The Home tab", correct: "true"},
        ]
    },
    {
        question: "What does CTRL + Z do in MS word?",
        answers: [
            { text: "Redo", correct: "false"},
            { text: "Save", correct: "false"},
            { text: "Duplicate", correct: "false"},
            { text: "Undo", correct: "true"},
        ]
    },
    {
        question: "What feature in MS word helps check spelling and grammar?",
        answers: [
            { text: "Thesarus", correct: "false"},
            { text: "WordArt", correct: "false"},
            { text: "SmartArt", correct: "false"},
            { text: "Spell Checker", correct: "true"},
        ]
    },
    {
        question: "What is the default orientation of a new word document?",
        answers: [
            { text: "Landscape", correct: "false"},
            { text: "Portrait", correct: "true"},
            { text: "Square", correct: "false"},
            { text: "A4", correct: "false"},
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
        question: "Which of these option is used to create a list with bullets?",
        answers: [
            { text: "Insert > Bullets", correct: "false"},
            { text: "Home > Bullets", correct: "true"},
            { text: "Layout > List", correct: "false"},
            { text: "Review > Bullets", correct: "false"},
        ]
    },
    {
        question: "Which shortcut key is used to save a document?",
        answers: [
            { text: "CTRL + X", correct: "false"},
            { text: "CTRL + S", correct: "true"},
            { text: "CTRL + P", correct: "false"},
            { text: "CTRL + D", correct: "false"},
        ]
    },
    {
        question: "Which part of the computer looks like a TV",
        answers: [
            { text: "Keyboard", correct: "false"},
            { text: "Monitor", correct: "true"},
            { text: "Mouse", correct: "false"},
            { text: "Printer", correct: "false"},
        ]
    },
    {
        question: "Which device do we use to type letters and numbers?",
        answers: [
            { text: "Keyboard", correct: "true"},
            { text: "CPU", correct: "false"},
            { text: "Monitor", correct: "false"},
            { text: "None of the above.", correct: "false"},
        ]
    },
    {
        question: "Which part of the computer is use to point and click?",
        answers: [
            { text: "Mouse", correct: "true"},
            { text: "CPU", correct: "false"},
            { text: "Fan", correct: "false"},
            { text: "Screen", correct: "false"},
        ]
    },
    {
        question: "What does CPU stand for?",
        answers: [
            { text: "Computer power unit", correct: "false"},
            { text: "Central Processing unit", correct: "true"},
            { text: "Computer power unit", correct: "false"},
            { text: "Control print unit", correct: "false"},
        ]
    },
    {
        question: "What device prints information on paper?",
        answers: [
            { text: "Mouse", correct: "false"},
            { text: "Printer", correct: "true"},
            { text: "Keyboard", correct: "false"},
            { text: "Speaker", correct: "false"},
        ]
    },
    {
        question: "Which of this is an example of a computer?",
        answers: [
            { text: "Bicycle", correct: "false"},
            { text: "Television", correct: "true"},
            { text: "Laptop", correct: "false"},
            { text: "Book", correct: "false"},
        ]
    },
    {
        question: "Which key is used to erase letters?",
        answers: [
            { text: "spacebar", correct: "false"},
            { text: "Backspace", correct: "true"},
            { text: "Enter", correct: "false"},
            { text: "Shift", correct: "false"},
        ]
    },
    {
        question: "What do we use the internet for?",
        answers: [
            { text: "Eating food", correct: "false"},
            { text: "Finding information", correct: "true"},
            { text: "Sleeping", correct: "false"},
            { text: "Running", correct: "false"},
        ]
    },
    {
        question: "Which key makes a new line when typing?",
        answers: [
            { text: "Spacebar", correct: "false"},
            { text: "Enter Key", correct: "true"},
            { text: "Tab", correct: "false"},
            { text: "Shift", correct: "false"},
        ]
    },
    {
        question: "Wich key is the longest key on the keyboard?",
        answers: [
            { text: "Enter key", correct: "false"},
            { text: "Spacebar", correct: "true"},
            { text: "CTRL key", correct: "false"},
            { text: "Shift key", correct: "false"},
        ]
    },
    {
        question: "What is microsoft powerpoint mainly used for?",
        answers: [
            { text: "Writting letters", correct: "false"},
            { text: "Making presentations", correct: "true"},
            { text: "Playing music", correct: "false"},
            { text: "Editing photos", correct: "false"},
        ]
    },

    {
        question: "What is the default file extension for powerpoint?",
        answers: [
            { text: ".docx", correct: "false"},
            { text: ".pptx", correct: "true"},
            { text: ".xlsx", correct: "false"},
            { text: ".pdf", correct: "false"},
        ]
    },
    {
        question: "Which shortcut is used to start a slide show from the beginning?",
        answers: [
            { text: "Slideshow view", correct: "false"},
            { text: "F5", correct: "true"},
            { text: "CTRL + S", correct: "false"},
            { text: "CTRL + P", correct: "false"},
        ]
    },
    {
        question: "Which view in powerpoint shows all the slides as thumbnails?",
        answers: [
            { text: "slideshow view", correct: "false"},
            { text: "slide sorter view", correct: "true"},
            { text: "Reading view", correct: "false"},
            { text: "Normal view", correct: "false"},
        ]
    },
    {
        question: "Which feature is used to apply motion to a text or object?",
        answers: [
            { text: "Transition", correct: "false"},
            { text: "Animation", correct: "true"},
            { text: "Design", correct: "false"},
            { text: "Layout", correct: "false"},
        ]
    },
    {
        question: "Which tab contains the option to isert pictures?",
        answers: [
            { text: "Review", correct: "false"},
            { text: "Insert", correct: "true"},
            { text: "Design", correct: "false"},
            { text: "Home", correct: "false"},
        ]
    },
    {
        question: "What is the name of the first slide of a presentation?",
        answers: [
            { text: "Title slide", correct: "true"},
            { text: "Summary slide", correct: "false"},
            { text: "Layout slide", correct: "false"},
            { text: "Intro slide", correct: "false"},
        ]
    },
    {
        question: "which shortcut saves your powerpoint presentation?",
        answers: [
            { text: "CTRL + S", correct: "true"},
            { text: "CTRL + C", correct: "false"},
            { text: "CTRL + P", correct: "false"},
            { text: "CTRL + K", correct: "false"},
        ]
    },
    {
        question: "which option changes the design and look of all slides at once?",
        answers: [
            { text: "Slide master", correct: "true"},
            { text: "Animation pane", correct: "false"},
            { text: "Notes pane", correct: "false"},
            { text: "Transition pane", correct: "false"},
        ]
    },
    {
        question: "which file extention is for powerpoint tempaltes?",
        answers: [
            { text: ".potx", correct: "true"},
            { text: ".doc", correct: "false"},
            { text: ".xlsx", correct: "false"},
            { text: ".pdf", correct: "false"},
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