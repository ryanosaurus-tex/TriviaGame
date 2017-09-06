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
		correctAnswer: "C"		
	},
	{	
		id: 1,	
		questionImgURL: "./assets/images/questions/01.png",
		questionImgAlt: "Trees",
		questionText: "What is the oldest individual living organism on Earth today?",
		answerA: "Big-cone Pinyon",
		answerB: "Bristlecone Pine",
		answerC: "Ponderosa Pine",
		answerD: "Sequoia Redwood",
		correctAnswer: "B"		
	},
	{	
		id: 2,	
		questionImgURL: "./assets/images/questions/02.png",
		questionImgAlt: "Water on Earth",
		questionText: "Salt water makes up most of the water on planet Earth. By comparison, a much smaller amount exists as freshwater in the forms of ice, groundwater, and surface water (lakes, rivers, and streams). What percentage of ALL the water on Earth is both freshwater AND accessible for human use?",
		answerA: "11.8%",
		answerB: "4.2%",
		answerC: "0.3%",
		answerD: "25.1%",
		correctAnswer: "C"
	},
	{	
		id: 3,	
		questionImgURL: "./assets/images/questions/03.png",
		questionImgAlt: "Representation of the tree of life on Earth",
		questionText: "Above is a representation of all the life on Earth and the evolutionary relationship between species. Each 'branch' in the tree represents a divergence from a shared common ancestor. The Metazoan group includes all animal life that has ever existed on our planet. How long has life existed on Earth?",
		answerA: "3.8 million years",
		answerB: "3,800 years",
		answerC: "3.8 trillion years",
		answerD: "3.8 billion years",
		correctAnswer: "D"
	},
	{
		id: 4,	
		questionImgURL: "./assets/images/questions/04.png",
		questionImgAlt: "Tides on the beach",
		questionText: "What causes the rise and fall of the oceans' tides?",
		answerA: "The gravitational pull of the moon.",
		answerB: "The rotation of the Earth.",
		answerC: "An angry wizard.",
		answerD: "Heat from the sun.",
		correctAnswer: "A"
	},
	{
		id: 5,	
		questionImgURL: "./assets/images/questions/05.png",
		questionImgAlt: "Mountains",
		questionText: "What is the worlds tallest mountain when measured from the center of the Earth?",
		answerA: "Mt. Everest, Nepal",
		answerB: "Mt. Chimborazo, Ecuador",
		answerC: "Mt. Chhogori, Pakistan",
		answerD: "Mt. Aconcagua, Argentina",
		correctAnswer: "B"
	}/*,
		id: 6,	
		questionImgURL: "./assets/images/questions/06.png",
		questionImgAlt: "",
		questionText: "",
		answerA: "",
		answerB: "",
		answerC: "",
		answerD: "",
		correctAnswer: ""
	},
		id: 7,	
		questionImgURL: "./assets/images/questions/07.png",
		questionImgAlt: "",
		questionText: "",
		answerA: "",
		answerB: "",
		answerC: "",
		answerD: "",
		correctAnswer: ""
	},
		id: 8,	
		questionImgURL: "./assets/images/questions/08.png",
		questionImgAlt: "",
		questionText: "",
		answerA: "",
		answerB: "",
		answerC: "",
		answerD: "",
		correctAnswer: ""
	},
		id: 9,	
		questionImgURL: "./assets/images/questions/09.png",
		questionImgAlt: "",
		questionText: "",
		answerA: "",
		answerB: "",
		answerC: "",
		answerD: "",
		correctAnswer: ""
	}*/
];

var usedQuestions = [];
var playerScore = 0;
var questionCounter = 1;
var displayImage = " ";
var selectedQuestion = " ";
var displayQuestion = " ";
var initialTimeRemaining = 15;
var timeRemaining = initialTimeRemaining;



$("#qCounter").text(questionCounter);
$("#qTimer").text(timeRemaining);

function chooseQuestion() {
	var x = Math.floor(Math.random() * availableQuestions.length);	
	selectedQuestion = availableQuestions[x];

	$("#questionImgHolder, #questionBlank, #A, #B, #C, #D").empty();

	displayImage = $("<img class='hint'>").attr( {"src": selectedQuestion.questionImgURL, "alt": selectedQuestion.questionImgAlt} );
	$("#questionImgHolder").append(displayImage);

	displayQuestion = $("<p>").text(selectedQuestion.questionText);
	$("#questionBlank").append(displayQuestion);

	$("#A").html("<p class='answers'>A: " + selectedQuestion.answerA + "</p>");
	$("#B").html("<p class='answers'>B: " + selectedQuestion.answerB + "</p>");
	$("#C").html("<p class='answers'>C: " + selectedQuestion.answerC + "</p>");
	$("#D").html("<p class='answers'>D: " + selectedQuestion.answerD + "</p>");

	var spliceOut = availableQuestions.splice(x, 1,);
	usedQuestions.push(spliceOut);
};

function nextQuestion() {	
	if (availableQuestions.length > 0) {
		questionCounter++;
		$("#qCounter").text(questionCounter);	
		clearInterval(intervalId);	
		timeRemaining = initialTimeRemaining;
		$("#qTimer").text(timeRemaining);
	
		chooseQuestion();
		questionTimer();
	} else { 

		$("#questionImgHolder, #questionBlank, #questionTitle, #answerList, #timer").empty();
		$("#timer").text("Quiz Complete");

		displayImage = $("<img class='hint'>").attr( {"src": "./assets/images/final_score.png", "alt": "the Earth"} );
		$("#questionImgHolder").append(displayImage);
		
		$("#questionTitle").text("Player Score");
		var scoreHeader = $("<h2 id='scoreHeader'>").text("Congratulations!");
		var scoreBody =	$("<p id ='scoreBody'>").text("You got " + playerScore + " out of " + usedQuestions.length + " correct.");
		$("#questionBlank").append(scoreHeader);
		$("#questionBlank").append(scoreBody);
	}		
};


function questionTimer() {
	intervalId = setInterval(decrement, 1000);
};

function decrement() {
	timeRemaining--;
	$("#qTimer").text(timeRemaining);
	if (timeRemaining === 0) {
		nextQuestion();
	}
};


chooseQuestion();
questionTimer();

$("#A, #B, #C, #D").on("click", function(){	
	if ( $(this).attr("id") === selectedQuestion.correctAnswer ){		
		playerScore ++;
	}
	nextQuestion();		
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

