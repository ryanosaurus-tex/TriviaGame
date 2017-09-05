$(document).ready(function(){

var availableQuestions = [
	{	
		id: 0,		
		questionImgURL: "./assets/images/questions/00.png",
		questionImgAlt: "the Earth seen from space",
		questionText: "The Earth is 4.5...",
		answerA: "Thousand years old.",
		answerB: "Million years old.",
		answerC: "Billion years old.",
		answerD: "Trillion years old.",
		correctAnswer: "C",
		modalImgURL: "./assets/images/modals/00.png",
		modalText: "questionArray[0].modalText correct answer reaveal/explaination text"
	},
	{	
		id: 1,	
		questionImgURL: "./assets/images/questions/00.png",
		questionImgAlt: "this is alt text",
		questionText: "1text for the question",
		answerA: "availableQuestions[1].answerA text",
		answerB: "availableQuestions[1].answerB text",
		answerC: "availableQuestions[1].answerC text",
		answerD: "availableQuestions[1].answerD text",
		correctAnswer: "B",
		modalImgURL: "./assets/images/modals/01.png",
		modalText: "questionArray[1].modalText correct answer reaveal/explaination text"
	},
	{	
		id: 2,	
		questionImgURL: "./assets/images/questions/00.png",
		questionImgAlt: "this is alt text",
		questionText: "2text for the question",
		answerA: "availableQuestions[2].answerA text",
		answerB: "availableQuestions[2].answerB text",
		answerC: "availableQuestions[2].answerC text",
		answerD: "availableQuestions[2].answerD text",
		correctAnswer: "C",
		modalImgURL: "./assets/images/modals/02.png",
		modalText: "questionArray[1].modalText correct answer reaveal/explaination text"
	},
	{	
		id: 3,	
		questionImgURL: "./assets/images/questions/00.png",
		questionImgAlt: "this is alt text",
		questionText: "3text for the question",
		answerA: "availableQuestions[3].answerA text",
		answerB: "availableQuestions[3].answerB text",
		answerC: "availableQuestions[3].answerC text",
		answerD: "availableQuestions[3].answerD text",
		correctAnswer: "D",
		modalImgURL: "./assets/images/modals/03.png",
		modalText: "questionArray[1].modalText correct answer reaveal/explaination text"
	},
];

var usedQuestions = [];
var playerScore = 0;
var questionCounter = 0;
var displayImage = "";
var selectedQuestion = "";
var displayQuestion = "";
var timeRemaining = 10;


$("#qCounter").text(questionCounter);
$("#qTimer").text(timeRemaining);

function chooseQuestion() {
	var x = Math.floor(Math.random() * availableQuestions.length);	
	selectedQuestion = availableQuestions[x];

	$("#questionImgHolder, #questionBlank, #A, #B, #C, #D").empty();

	displayImage = $("<img>").attr( {"src": selectedQuestion.questionImgURL, "alt": selectedQuestion.questionImgAlt} );
	$("#questionImgHolder").append(displayImage);

	displayQuestion = $("<p>").text(selectedQuestion.questionText);
	$("#questionBlank").append(displayQuestion);

	$("#A").html("<p class='answers'>A: " + selectedQuestion.answerA + "</p>");
	$("#B").html("<p class='answers'>B: " + selectedQuestion.answerB + "</p>");
	$("#C").html("<p class='answers'>C: " + selectedQuestion.answerC + "</p>");
	$("#D").html("<p class='answers'>D: " + selectedQuestion.answerD + "</p>");

	var spliceOut = availableQuestions.splice(x, 1,);
	usedQuestions.push(spliceOut);
	console.log (usedQuestions);
	console.log (availableQuestions);
};

function questionTimer() {
	intervalId = setInterval(decrement, 1000);
};

function decrement() {
	timeRemaining--;
	$("#qTimer").text(timeRemaining);
	if (timeRemaining === 0) {
		clearInterval(intervalId);
		chooseQuestion();
		timeRemaining = 11;
		questionCounter++;
		questionTimer();

	}
};

chooseQuestion();
questionTimer();

$("#A, #B, #C, #D").on("click", function(){	
	questionCounter ++;
	$("#qCounter").text(questionCounter);
	if ( $(this).attr("id") === selectedQuestion.correctAnswer ){
		alert("correct!");
		playerScore ++;
	}	
	chooseQuestion();
	console.log(selectedQuestion);
});





















/*
setInterval(function() {
    var timer = $("#timer").text();
    timer = timer.split(':');
    var minutes = timer[0];
    var seconds = timer[1];
    seconds -= 1;
    if (minutes < 0) return;
    if (seconds < 0 && minutes != 0) {
        minutes -= 1;
        seconds = 59;
    }
    else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;
    if ((minutes < 10) && ((minutes+'').length < 2)) minutes = '0' + minutes;
    $("#timer").text(minutes + ':' + seconds);
}, 1000);

if ($("#timer").text() === "0:00"){
	alert("Times up!");
}
*/

}); // end of ready function

