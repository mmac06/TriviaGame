
//  Set our number counter to 30 and initialize variables.
var timer = 30;
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

function questionDisplay() {
    $("#question").html("<h2>" + "Questions here" + "</h2>");
}

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
run();
questionDisplay();