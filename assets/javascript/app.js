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

var selectedQuestion = " ";

(function chooseQuestion(){
	var x = Math.floor(Math.random() * availableQuestions.length);	
	selectedQuestion = availableQuestions[x];	

}());

console.log(selectedQuestion);
var playerScore = 0;

var questionCounter = 0;
$("#qCounter").text(questionCounter);

var displayImage = $("<img>").attr( {"src": selectedQuestion.questionImgURL, "alt": selectedQuestion.questionImgAlt} );
$("#questionImgHolder").append(displayImage);

var displayQuestion = $("<p>").text(selectedQuestion.questionText);
$("#questionBlank").append(displayQuestion);
 
$("#A").html("<p class='answers'>" + selectedQuestion.answerA + "</p>")
$("#B").html("<p class='answers'>" + selectedQuestion.answerB + "</p>")
$("#C").html("<p class='answers'>" + selectedQuestion.answerC + "</p>")
$("#D").html("<p class='answers'>" + selectedQuestion.answerD + "</p>")

$("#A, #B, #C, #D").on("click", function(){
	alert("the click worked!");
	questionCounter ++;
	$("#qCounter").text(questionCounter);
	if ( $(this).attr("id") === selectedQuestion.correctAnswer ){
		alert("correct!");
		playerScore ++;
	} else {
		// add else
	}
});






}); // end of ready function

