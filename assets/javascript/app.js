// Set up question/answer array
var questionAnswer = [
    {
        question: "What medical condition did the character Walter White Jr. suffer from on the TV Show 'Breaking Bad'?",
        answers: ["Cerebral Palsy", "Parkinson's Disease", "Multiple Sclerosis", "Cancer"],
        correctAnswer: 1,
        animate: "TEST",
    },
    {
        question: "What was the name of the original advertising agency character 'Don Draper' worked for on the TV Show 'Mad Men'?",
        answers: ["Sterling Cooper", "Olson Pryce", "Campbell Cosgrove", "Crane & Associates"],
        correctAnswer: 1,
        animate: "TEST",
    },
    {
        question: "What is the female lead character of the TV Show 'Parks and Recreation'?",
        answers: ["Liz Lemon", "Leslie Knope", "Miranda Sings", "Stefanie Wilsack"],
        correctAnswer: 2,
        animate: "TEST",
    },
    {
        question: "What mythical lands do the 9 great houses fight over in the TV Show 'The Game of Thrones'?",
        answers: ["Valhalla", "Westeros", "Avalon", "Middle Earth"],
        correctAnswer: 2,
        animate: "TEST",
    }

]


//  Set our number counter to 30 and initialize variables.
var timer = 30;
var scoreCorrect = 0;
var scoreIncorrect = 0;
var scoreUnanswered = 0;
var index = 0;
var userGuess = "";
var intervalId;
var question;

//  The run function sets an interval
//  that runs the decrement function once a second.
//  *****BUG FIX******** 
//  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

// for (var i = 0; i < questionAnswer[index].answers.length; i++) {
//     var buttonID = $("<button>")
//     // questionAnswer[index].answers[i];
//     buttonID.attr("id", i);
//     console.log(buttonID);
// }



// display questions and answers
function triviaDisplay() {
    $("#questionBox").html("<h4>" + questionAnswer[index].question + "</h4>");
    for (var i = 0; i < questionAnswer[index].answers.length; i++) {
        var button = $("<button>");
        button.attr("id", "buttonValue" + i);
        console.log(button);
        $("#answerBox").append(button);
    }
    for (var i = 0; i < questionAnswer[index].answers.length; i++){
        $("#buttonValue"+[i]).append(questionAnswer[index].answers[i]);
    }
    



}




// function answerDisplay() {
//     $("#answerBox").html("<h3>" + questionAnswer[index].answers + "</h3>");

// }

//  The decrement function.
function decrement() {
    //  Decrease timer by one.
    timer--;
    //  Show the timer in the #showNumber tag.
    $("#showNumber").html("<h2>" + "Time Remaining: " + timer + "</h2>");
    //  Once timer hits zero...
    if (timer === 0) {
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
run();
triviaDisplay();
// answerDisplay();
