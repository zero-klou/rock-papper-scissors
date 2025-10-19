const values = ["Rock", "Papper", "Scissors"];
const scores = {
	player: 0,
	computer: 0,
	round: 0,
};
const playButtons = document.querySelector(".play-buttons");

playButtons.addEventListener("click", (event) => {
	const target = event.target;
	if (target.className != "button-img") return;
	if (++scores.round > 5) {
		restart();
		return;
	}

	const humanChoice = +target.dataset.value;
	console.log(humanChoice);

	const computerChoice = getComputerChoice();
	console.log(computerChoice);

	const roundResult = playRound(humanChoice, computerChoice);
	updateRoundResult(roundResult, scores.round);

	if (scores.round === 5) showGameResult();
});

function showGameResult() {
	const gameResWidget = document.querySelector(".game-res span");

	if (scores.computer > scores.player) {
		gameResWidget.textContent = "You lose :c";
	} else if (scores.computer < scores.player) {
		gameResWidget.textContent = "You win!";
	} else {
		gameResWidget.textContent = "Draw!";
	}
}

function restart() {
	scores.computer = 0;
	scores.player = 0;
	scores.round = 0;

	const gameResWidget = document.querySelector(".game-res span");
	gameResWidget.textContent = "";
	const roundsWidgets = document.querySelectorAll(".round");
	roundsWidgets.forEach((round) => (round.style.backgroundColor = "inherit"));
}

function updateRoundResult(roundResult, roundNumber) {
	const roundWidget = document.getElementById(`${roundNumber}`);
	let colorRound = null;

	switch (roundResult) {
		case -1:
			colorRound = "red";
			break;

		case 0:
			colorRound = "grey";
			break;

		case 1:
			colorRound = "green";
			break;
	}
	roundWidget.style.backgroundColor = colorRound;
}

function getComputerChoice() {
	return Math.floor(Math.random() * 3);
}

// 0 - Draw, -1 - Lose, 1 - Won
function playRound(humanChoice, computerChoice) {
	let roundSum = humanChoice - computerChoice;

	switch (roundSum) {
		case 0:
			return 0;

		case -1:
		case 2:
			scores.computer += 1;
			return -1;

		default:
			scores.player += 1;
			return 1;
	}
}
