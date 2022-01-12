function test(e) {
	
	const letters = document.getElementById(e).parentNode.getElementsByClassName('letter');
	const button = document.getElementById(e);
	button.disabled = true;
	
	const attempt = [letters[0].value.toUpperCase(), letters[1].value.toUpperCase(), letters[2].value.toUpperCase(), letters[3].value.toUpperCase(), letters[4].value.toUpperCase()];

	const wordleArray = Array.from(wordle);

	let solved = true;
	
	for (let i = 0; i < wordleArray.length; i++){
		letters[i].disabled = true;
		
		if (attempt[i] === wordleArray[i]) {
			letters[i].style.backgroundColor = "#2dd638";
			letters[i].style.color = "white";
		}
		else if (wordleArray.includes(attempt[i])) {
			letters[i].style.backgroundColor = "#ffc800";
			letters[i].style.color = "white";
			solved = false;
		}
		else {
			letters[i].style.backgroundColor = "#b80000";
			letters[i].style.color = "white";
			solved = false;
		}
	}

	if (!solved && e !== "attempt6") {
		enableNext(e);
	}
	
}

function enableNext(e) {
	const nextButtonId = `attempt${parseInt(Array.from(e).at(-1)) + 1}`;
	const nextButton = document.getElementById(nextButtonId);
	nextButton.disabled = false;

	const nextLetters = nextButton.parentNode.getElementsByClassName('letter');
	for (let i = 0; i < nextLetters.length; i++){
		nextLetters[i].disabled = false;
	}
}