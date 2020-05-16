



// var startQuizBtn = $("nav-item nav-link");
// $("nav-item nav-link").on("click", function(e) {
// var timeleft = 30;
// var downloadTimer = setInterval(function(){
// timeleft--;
// document.getElementById("countdowntimer").textContent = timeleft;
// if(timeleft <= 0)
//     clearInterval(downloadTimer);
// },1000);
// })






var questionIndex = 0;



var question = [
  "Commonly used data types DO NOT include:",
  "The condition of an if/else statement is enclosed within ___.",
  "Arrays in Javascript can be used to store ___.",
  "String values must be enclosed within ___ when being assigned to variables.",
  "A very useful tool used during development and debugging for printing content to the debugger is:"
]

var q1Answers = [
 "strings",
 "booleans",
 "alerts",
 "numbers"
]

var q2Answers = [
 "quotes",
 "curly brackets",
 "parenthesis",
 "square brackets"
]

var q3Answers = [
 "numbers and strings",
 "other arrays",
 "booleans",
 "all of the above"
]

var q4Answers = [
"commas",
"curly brackets",
"quotes",
"parenthesis"
]

    


GetQuestion(questionIndex);

GetQuestion(index)

$.each(questionIndex, function(i, item) {
 $("h2").text(question[index]);

 if(index == 1)
 {
  $("#button-1").text(q1Answers[0]);
  $("#button-2").text(q1Answers[1]);
  $("#button-3").text(q1Answers[2]);
  $("#button-4").text(q1Answers[3]);
 }
 else if(index == 2)
 {
   
  $("#button-1").text(q2Answers[0]);
  $("#button-2").text(q2Answers[1]);
  $("#button-3").text(q2Answers[2]);
  $("#button-4").text(q2Answers[3]);
 }
 else if(index == 3)
 {
   
  $("#button-1").text(q3Answers[0]);
  $("#button-2").text(q3Answers[1]);
  $("#button-3").text(q3Answers[2]);
  $("#button-4").text(q3Answers[3]);
 }
 else if(index == 4)
 {
   
  $("#button-1").text(q4Answers[0]);
  $("#button-2").text(q4Answers[1]);
  $("#button-3").text(q4Answers[2]);
  $("#button-4").text(q4Answers[3]);
 }
 else if(index == 5)
 {
   
  $("#button-1").text(q5Answers[0]);
  $("#button-2").text(q5Answers[1]);
  $("#button-3").text(q5Answers[2]);
  $("#button-4").text(q5Answers[3]);
 }

 questionIndex++;

getQuestion()





var modal = document.getElementById("myModal");
var btn = document.getElementById("done");
var span = document.getElementsByClassName("close")[0];

 
btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}













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






// var timerId = setInterval(countdown, 1000);

//     function countdown() {
//       if (timeLeft == 0) {
//         clearTimeout(timerId);
//         // doSomething();
//       } else {
//         myTimer = ("Time: ", + timeLeft--);
//       }
//     }




// var myQuestion = $("question");
// var userAnswer = $(".buttons");
// var myScore = $("score");
// myScore = 0;

// var userA = $("button-1");
// var userB = $("button-2");
// var userC = $("button-3");
// var userD = $("button-4");








//  $("h2").text("Commonly used data types DO NOT include:");

//  $("#button-1").text("strings");
//  $("#button-2").text("booleans");
//  $("#button-3").text("alerts");
//  $("#button-4").text("numbers");


// $(".buttons").on("click", function() {
//     $.each(userAnswer, function(i, item) {
//         $("h2").text("The condition of an if/else statement is enclosed with:");
//         $("#button-1").text("quotes");
//         $("#button-2").text("curly brackets");
//         $("#button-3").text("parenthesis");
//         $("#button-4").text("square brackets");
//     })
//     if ("#button-3" === true) {
//     alert("score: " + myScore++);

    

//     }
// })

// $(".buttons").on("click", function() {
//     $.each(userAnswer, function(i, item) {
//         $("h2").text("Arrays in Javascript can be used to store:");
//         $("#button-1").text("numbers and strings");
//         $("#button-2").text("other arrays");
//         $("#button-3").text("booleans");
//         $("#button-4").text("all of the above");
//     })
//     if ("#button-3" === true) {
//     alert("score: " + myScore++);

    

//     }
// })