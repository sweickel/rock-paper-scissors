function game() {
	
	let player = "";
	let computer = "";
	let playerScore = 0;
	let npcScore = 0;

	startEventListeners();
	//randomly return rock, paper, or scissors for npcTurn
	function computerPlay() {
		let turn = Math.floor(Math.random() * 3);
		switch(turn) {
			case 0:
				return "Rock";
			case 1:
				return "Paper";
			case 2: 
				return "Scissors";
		}
	}

	//each round of play
	function roundPlay(playerSelection, computerSelection) {
		console.log(playerSelection,computerSelection);
		if (playerSelection === computerSelection) {
			console.log("This round is a draw."); 
			} else if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Rock") {
					console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
					playerScore++;
				} else {
					console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
					npcScore++;
		}
		updateScores();
		player = "";
		computer = "";
		console.log(`Current Score   You: ${playerScore} , NPC: ${npcScore}`);
		checkWinner();
	}

	//event listener for all three player selection buttons
	function startEventListeners() {
		const paper = document.querySelector('.paper');
		const scissors = document.querySelector('.scissors');
		const rock = document.querySelector('.rock');
		rock.addEventListener('click', (event) => {
				player = "Rock";
				computer = computerPlay();
				roundPlay(player, computer);
			});	
		scissors.addEventListener('click', (event) => {
				player = "Scissors";
				computer = computerPlay();
				roundPlay(player, computer);
			});	
		paper.addEventListener('click', (event) => {
				player = "Paper";
				computer = computerPlay();
				roundPlay(player, computer);
			});	
	}	
	//declares a winner when score is 5
	function checkWinner() {
		if (playerScore === 5) {
				alert("You win!");
				console.log("You win!");
				clearScores();
		}	else if (npcScore === 5) {
				alert("You lose!");
				console.log('You lose!');
				clearScores();
		}
	}

	function clearScores() {
		playerScore = 0;
		npcScore = 0;
		updateScores();
		console.log('----------------------')
		console.log('A new game has started');
		console.log(`Current Score   You: ${playerScore} , NPC: ${npcScore}`);
	}

	//renders current score on DOM
	function updateScores() {
		let me = document.querySelector('.youScore');
		let pc = document.querySelector('.npcScore');
		me.textContent = playerScore;
		pc.textContent = npcScore;
	}
}




window.addEventListener('load', (event) => {
		game();
	})

