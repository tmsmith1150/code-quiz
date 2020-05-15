

var timeLeft = 30;
var myTimer = $("timer");
var startQuizBtn = $("nav-item nav-link");

    
var timerId = setInterval(countdown, 1000);

    function countdown() {
      if (timeLeft == 0) {
        clearTimeout(timerId);
        // doSomething();
      } else {
        myTimer = ("Time: ", + timeLeft--);
      }
    }




var myQuestion = $("question");
var userAnswer = $(".buttons");
var myScore = $("score");
myScore = 0;

var userA = $("button-1");
var userB = $("button-2");
var userC = $("button-3");
var userD = $("button-4");








 $("h2").text("Commonly used data types DO NOT include:");

 $("#button-1").text("strings");
 $("#button-2").text("booleans");
 $("#button-3").text("alerts");
 $("#button-4").text("numbers");


$(".buttons").on("click", function() {
    $.each(userAnswer, function(i, item) {
        $("h2").text("The condition of an if/else statement is enclosed with:");
        $("#button-1").text("quotes");
        $("#button-2").text("curly brackets");
        $("#button-3").text("parenthesis");
        $("#button-4").text("square brackets");
    })
    if ("#button-3" === true) {
    alert("score: " + myScore++);

    

    }
})

$(".buttons").on("click", function() {
    $.each(userAnswer, function(i, item) {
        $("h2").text("Arrays in Javascript can be used to store:");
        $("#button-1").text("numbers and strings");
        $("#button-2").text("other arrays");
        $("#button-3").text("booleans");
        $("#button-4").text("all of the above");
    })
    if ("#button-3" === true) {
    alert("score: " + myScore++);

    

    }
})





















// var button1 = {
//     first: "strings",
//     second: "quotes",
//     third: "numbers and strings",
//     fourth: "commas",
//     fifth: "Javascript",

// } 

// var button2 = {
//     first: "booleans",
//     second: "curly brackets",
//     third: "other arrays",
//     fourth: "curly brackets",
//     fifth: "terminal/bash",
    
// } 

// var button3 = {
//     first: "alerts",
//     second: "parenthesis",
//     third: "booleans",
//     fourth: "quotes",
//     fifth: "for loops",
    
// } 

// var button4 = {
//     first: "numbers",
//     second: "square brackets",
//     third: "all of the above",
//     fourth: "parenthesis",
//     fifth: "console.log",
    
// }