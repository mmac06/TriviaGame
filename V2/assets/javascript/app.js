//  Set our number counter to 30 and initialize variables.
var timer = 30;
var scoreCorrect = 0;
var scoreIncorrect = 0;
var scoreUnanswered = 0;
var currentQuestion = 0;
var index = 0;
var userChoice = "";
var intervalId;
var question;

// Set up question/answer array
var questionAnswer = [
    {
        question: "What medical condition did the character Walter White Jr. suffer from on the TV Show 'Breaking Bad'?",
        answers: ["Cerebral Palsy", "Parkinson's Disease", "Multiple Sclerosis", "Cancer"],
        // correctAnswer: "Cancer",
        correctAnswer: 3,
        animate: "/TriviaGame/assets/images/lizlemon1.gif",
    },
    {
        question: "What was the name of the original advertising agency character 'Don Draper' worked for on the TV Show 'Mad Men'?",
        answers: ["Sterling Cooper", "Olson Pryce", "Campbell Cosgrove", "Crane & Associates"],
        // correctAnswer: "Sterling Cooper",
        correctAnswer: 0,
        animate: "TEST",
    },
    {
        question: "What is the female lead character of the TV Show 'Parks and Recreation'?",
        answers: ["Liz Lemon", "Leslie Knope", "Miranda Sings", "Stefanie Wilsack"],
        // correctAnswer: "Leslie Knope",
        correctAnswer: 1,
        animate: "TEST",
    },
    {
        question: "What mythical lands do the 9 great houses fight over in the TV Show 'The Game of Thrones'?",
        answers: ["Valhalla", "Westeros", "Avalon", "Middle Earth"],
        // correctAnswer: "Westeros",
        correctAnswer: 1,
        animate: "TEST",
    }

]

$(document).ready(function () {

    $(".start a").click(function (e) {
        e.preventDefault();
        $(".start").hide();
        $(".quiz").show();
        showQuestion();
    });


    // WHEN USER SELECTS LI ANSWERS
    $(".quiz ul").on("click", "button", function(){
        $(".selected").removeClass("selected");
        $(this).addClass("selected");
        if($("button.selected").length){
            userChoice = parseInt($("button.selected").attr("id"));
            console.log("choice: " + userChoice);
            // passes the variable "userChoice" into the checkAnswer function below
            checkAnswer(userChoice);
    };

 
});

});

function showQuestion() {
    var question = questionAnswer[currentQuestion];
    $("#questionBox").text(question.question);
    for(var i=0; i<question.answers.length; i++){
        $(".quiz ul").append("<button id = '"+i+"'>" + question.answers[i]+"</button>")

    }

}

function checkAnswer(userChoice) {
    var question = questionAnswer[currentQuestion];
    if (question.correctAnswer === userChoice){
        scoreCorrect ++;
        alert("Correct!");
        $("#imageBox").html("<img src=" + questionAnswer[index].animate + ">");
    }

}

function showSummary() {

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
    $("#showNumber").html("<h2>" + "Time Remaining: " + timer + "</h2>");
    //  Once timer hits zero...
    if (timer === 0) {
        scoreUnanswered++;
        //  ...run the stop function.
        stop();
        //  Alert the user that time is up.
        // alert("Time Up!");
    }
}
function stop() {
    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
}

// Run my functions
runTimer();
// answerDisplay();