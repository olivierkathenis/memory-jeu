/* Pour éviter accès aux variables dans le navigateur*/
function onDomReady () {
	let btnStartGame = document.querySelector("#start");
	let btnStopGame = document.querySelector("#stop");
	let squares = document.querySelectorAll(".square");
	let scoreDisplay = document.querySelector("#score");
	let score = 0;
	let paireTable = [];
	let scoreTable = [];
	let ok = 0;
	let user = 0;

	let Square = function (element) {
		this.element 	= element;
		this.element.addEventListener("click", this.select, false);
	}
	Square.prototype.select = function (event) {
	/*	console.log(this);
	console.log(event);*/
	/*console.log(event.target.classList[1]);*/
	let paireSquare = event.target.classList[1];//deuxième class du carré
	paireTable.push(paireSquare);// valeur placée dans le tableau
	console.log(paireTable);
	this.classList.remove("hide");
	for (paire in paireTable) {
		if (paireTable.length === 2) {
			if (paireSquare === paireTable[0] ) {
				score++;
				this.classList.remove("hide");
				ok++;
			}else {
				setTimeout(hideSquare, 400);
				score--;
				ok = 0;
			}
			/*console.log('ok');*/
			paireTable= [];// vider le tableau
			if (ok === 6) {
				alert("Bravo");
				lauchGame();
				scoreTable.push("user "+ user + " a un score de  " +score);
				score = 0;
				ok = 0;
				alert(scoreTable);
				btnStartGame.classList.add("hide");
			}
		}
	}
	scoreDisplay.innerHTML = "Score : " + score;
}

let lauchGame = function () {
	for(let i=0; i < squares.length; i++){
		let newSquare = new Square(squares[i]);
	}
	user++;
	setTimeout(hideSquare, 1000);
}

let stopGame = function () {
	alert(scoreTable);
	location.reload();
}

let hideSquare = function () {
	for(let i=0; i < squares.length; i++){
		let startgame = squares[i].classList.add("hide");
	}
}

btnStartGame.addEventListener("click", lauchGame);
btnStopGame.addEventListener("click", stopGame);
}

/*Attendre que le dom soit charger entièrement*/
window.addEventListener("DOMContentLoaded", onDomReady);
/*pour retirer => deuxième intéret pour externaliser la fonction*/
/*window.removeEventListener("DOMContentLoaded", onDomReady);*/