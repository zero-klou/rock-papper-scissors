const values = ["Rock", "Papper", "Scissors"];

function getComputerChoice() {
	return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
	let humanChoice;

	function checkPrompt() {
		if (
			humanChoice === "" ||
			humanChoice === null ||
			!["0", "1", "2"].includes(humanChoice)
		)
			return true;

		return false;
	}

	do {
		humanChoice = prompt(
			'Enter\n0: "rock",\n1: "papper" or\n2: "scissors"'
		);
	} while (checkPrompt());

	return +humanChoice;
}

function playGame() {
	const scores = {
		player: 0,
		computer: 0,
	};

	function playRound(humanChoice, computerChoice) {
		let roundSum = humanChoice - computerChoice;

		switch (roundSum) {
			case 0:
				return `Draw, you and computer choice ${values[humanChoice]}`;

			case -1:
			case humanChoice:
				scores.computer += 1;
				return `You lose, ${values[computerChoice]} beats ${values[humanChoice]}`;

			default:
				scores.player += 1;
				return `You won! ${values[humanChoice]} beats ${values[computerChoice]}`;
		}
	}

	for (let i = 0; i < 5; i++) {
		console.log(playRound(getHumanChoice(), getComputerChoice()));
	}

	if (scores.computer > scores.player) {
		console.log("Computer lose :c");
	} else if (scores.computer < scores.player) {
		console.log("You win!");
	} else {
		console.log("Draw!");
	}

	console.log(scores);
}

playGame();
