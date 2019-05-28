//  Set our number counter to 30 and initialize variables.
var timer = 30;
var scoreCorrect = 0;
var scoreIncorrect = 0;
var currentQuestion = 0;
var userChoice = "";
var intervalId;
var question;

// Set up question/answer array
var questionAnswer = [
    {
        question: "What medical condition did the character Walter White Jr. suffer from on the TV Show 'Breaking Bad'?",
        answers: ["Cerebral Palsy", "Parkinson's Disease", "Multiple Sclerosis", "Cancer"],
        correctAnswer: "Cancer",
        // correctAnswer: 3,
        animate: "/TriviaGame/V2/assets/images/lizlemon1.gif",
    },
    {
        question: "What was the name of the original advertising agency character 'Don Draper' worked for on the TV Show 'Mad Men'?",
        answers: ["Sterling Cooper", "Olson Pryce", "Campbell Cosgrove", "Crane & Associates"],
        correctAnswer: "Sterling Cooper",
        // correctAnswer: 0,
        animate: "/TriviaGame/V2/assets/images/lizlemon1.gif"
    },
    {
        question: "What is the female lead character of the TV Show 'Parks and Recreation'?",
        answers: ["Liz Lemon", "Leslie Knope", "Miranda Sings", "Stefanie Wilsack"],
        correctAnswer: "Leslie Knope",
        // correctAnswer: 1,
        animate: "/TriviaGame/V2/assets/images/lizlemon1.gif",
    },
    {
        question: "What mythical lands do the 9 great houses fight over in the TV Show 'The Game of Thrones'?",
        answers: ["Valhalla", "Westeros", "Avalon", "Middle Earth"],
        correctAnswer: "Westeros",
        // correctAnswer: 1,
        animate: "/TriviaGame/V2/assets/images/lizlemon1.gif",
    }

]

$(document).ready(function () {

    $(".start a").click(function (e) {
        e.preventDefault();
        $(".start").hide();
        $(".quiz").show();
        showQuestion();
        runTimer();

    });


    // WHEN USER SELECTS BUTTON ANSWERS
    $(".quiz ul").on("click", "button", function () {
        $(".selected").removeClass("selected");
        $(this).addClass("selected");
        if ($("button.selected").length) {
            userChoice = $("button.selected").text();
            console.log(userChoice);
            // passes the variable "userChoice" into the checkAnswer function below
            checkAnswer(userChoice);
        };
    });

    $(".summary a").click(function (e) {
        e.preventDefault();
        reset();
    });

});

// calls the question and answer options
function showQuestion() {
    var question = questionAnswer[currentQuestion];
    $("#questionBox").text(question.question);
    $(".quiz ul").empty();
    // adds answers with ID based on position in array
    for (var i = 0; i < question.answers.length; i++) {
        // $(".quiz ul").append("<button id = " + i + ">" + question.answers[i] + "</button>")
        $(".quiz ul").append("<button id = " + i + " type = button class = \"btn btn-dark\">" + question.answers[i] + "</button>")
    }

}

// checks the user selection vs. the correct answer from the array
function checkAnswer(userChoice) {
    var question = questionAnswer[currentQuestion];
    if (question.correctAnswer === userChoice) {
        scoreCorrect++;
        alert("Correct!");
        $("#imageBox").html("<img src=" + questionAnswer[currentQuestion].animate + ">");
    } else {
        scoreIncorrect++;
        alert("Incorrect! The correct answer is: " + questionAnswer[currentQuestion].correctAnswer);
    }
    // calls the next question/answer series
    currentQuestion++;
    timer = 30;
    runTimer();
    // pulls summary screen after user answers all questions
    if (currentQuestion >= questionAnswer.length) {
        showSummary();
    } else {
        showQuestion();
    }
}

function showSummary() {
    $(".quiz").hide();
    $(".summary").show();
    $("#scoreCorrect").text("Correct Answers: " + scoreCorrect);
    $("#scoreIncorrect").text("Incorrect Answers: " + scoreIncorrect);

}

function reset() {
    timer = 30;
    scoreCorrect = 0;
    scoreIncorrect = 0;
    currentQuestion = 0;
    $(".start").show();
    $(".summary").hide();
}


//  The run function sets an interval
//  that runs the decrement function once a second.
//  *****BUG FIX******** 
//  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
function runTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}




//  The decrement function.
function decrement() {
    //  Decrease timer by one.
    timer--;
    //  Show the timer in the #showNumber tag.
    $("#timer").html("<h2>" + "Time Remaining: " + timer + "</h2>");
    //  Once timer hits zero...
    if (timer === 0) {
        scoreIncorrect++;
        //  Alert the user that time is up.
        // alert("Time Up!");
        // timer = 30;
        // currentQuestion++;
        if (currentQuestion >= questionAnswer.length) {
            showSummary();
        } else {
            showQuestion();

        }
    }
}
function stop() {
    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
}
