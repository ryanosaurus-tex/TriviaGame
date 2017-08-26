$(document).ready(function(){

var question01 = {
	imageURL: "",
	question: "How old is the universe?",
	answerA: "45 million years",
	answerB: "13.8 billion years old",
	answerC: "750 million years old",
	answerD: "1.8 trillion years old",
	correctAnswer: "B",
	popUpInfo: "",
	popUpLink: "https://www.space.com/24054-how-old-is-the-universe.html",
	popUpImageURL: "", 
};

var question02 = {
	imageURL: "",
	question: "",
	answerA: "",
	answerB: "",
	answerC: "",
	answerD: "",
	correctAnswer: question03.answerB,
	popUpInfo: "",
	popUpLink: "",
	popUpImageURL: "", 
};

var question03 = {
	imageURL: "",
	question: "",
	answerA: "",
	answerB: "",
	answerC: "",
	answerD: "",
	correctAnswer: question03.answerB,
	popUpInfo: "",
	popUpLink: "",
	popUpImageURL: "", 
};

var questionBank = [
    "question01",
    "question02",
    "question03", 
    ];

var questionReceptacle = [];
var playerScore = 0;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
};

function selectQuestion(){
	var x = getRndInteger(0, questionBank.length);
	return questionBank[x];

};

$("#buttonA").click(function(){
    var playerAnswer = "A";
    if(playerAnswer === this.correctAnswer){
        playerScore++;
        // show correct! message;
    } else {
    	playerScore--;
    	// show incorrect! message;
    };
    // display pop up info -> load next question    

});

}); // end of ready function

