$(document).ready(function(){

var availableQuestions = [
	{	
		id: 0,		
		questionImgURL: "./assets/images/questions/00.png",
		questionImgAlt: "this is alt text",
		questionText: "0text for the question",
		answerA: "questionArray[0].answerA text",
		answerB: "questionArray[0].answerB text",
		answerC: "questionArray[0].answerC text",
		answerD: "questionArray[0].answerD text",
		correctAnswer: "A",
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

$("#qCounter").text(questionCounter); 

function chooseQuestion() {
	var x = Math.floor(Math.random() * availableQuestions.length);	
	selectedQuestion = availableQuestions[x];

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

chooseQuestion();

$("#A, #B, #C, #D").on("click", function(){	
	questionCounter ++;
	$("#qCounter").text(questionCounter);
	if ( $(this).attr("id") === selectedQuestion.correctAnswer ){
		alert("correct!");
		playerScore ++;
	}
	$("#questionImgHolder, #questionBlank, #A, #B, #C, #D").empty();
	chooseQuestion();
	console.log(selectedQuestion);
});






}); // end of ready function

