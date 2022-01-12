let dirtyWordle = wordBank[Math.floor(Math.random() * wordBank.length)];
const wordle = dirtyWordle.toUpperCase();

let banned = [];
let partial = [];
let correct = [];
console.log(wordle);

function test(e) {
	let letters = document.getElementById(e).parentNode.getElementsByClassName('letter');
	const button = document.getElementById(e);
	const attempt = [
		letters[0].value.toUpperCase(),
		letters[1].value.toUpperCase(),
		letters[2].value.toUpperCase(),
		letters[3].value.toUpperCase(),
		letters[4].value.toUpperCase()
	];

	const userGuess = attempt.join('');
	if (all5.includes(userGuess)) {
		button.disabled = true;
		const wordleArray = Array.from(wordle);

		let solved = true;

		for (let i = 0; i < wordleArray.length; i++) {
			letters[i].disabled = true;

			if (attempt[i] === wordleArray[i]) {
				letters[i].style.backgroundColor = '#2dd638';
				letters[i].style.color = 'white';
				correct.push(letters[i].value.toLowerCase());
			} else if (wordleArray.includes(attempt[i])) {
				letters[i].style.backgroundColor = '#ffc800';
				letters[i].style.color = 'white';
				partial.push(letters[i].value.toLowerCase());
				solved = false;
			} else {
				letters[i].style.backgroundColor = '#b80000';
				letters[i].style.color = 'white';
				banned.push(letters[i].value.toLowerCase());
				solved = false;
			}
		}

		for (cor of correct) {
			let letter = document.getElementById(cor);
			letter.style.backgroundColor = '#2dd638';
			letter.style.color = 'white';
		}

		for (par of partial) {
			let letter = document.getElementById(par);
			letter.style.backgroundColor = '#ffc800';
			letter.style.color = 'white';
		}

		for (ban of banned) {
			let letter = document.getElementById(ban);
			letter.style.backgroundColor = '#b80000';
			letter.style.color = 'white';
		}

		if (!solved && e !== 'attempt6') {
			enableNext(e);
		}
		if (solved) {
			stopTimer();
		}
	}
	else {
		letters[0].focus();
		
	}
}

function enableNext(e) {
	const nextButtonId = `attempt${parseInt(Array.from(e).at(-1)) + 1}`;
	const nextButton = document.getElementById(nextButtonId);
	nextButton.disabled = false;

	const nextLetters = nextButton.parentNode.getElementsByClassName('letter');
	for (let i = 0; i < nextLetters.length; i++) {
		nextLetters[i].disabled = false;
		if (i === 0) {
			nextLetters[i].focus();
		}
		nextLetters[i].onkeyup = function() {
			if (i !== 4 && nextLetters[i].value.length === 1) {
				nextLetters[i + 1].focus();
			} else if (i === 4 && nextLetters[i].value.length === 1) {
				const tempBtn = document.getElementById(nextButtonId);
				tempBtn.focus();
			}
		};
		nextLetters[i].addEventListener('keydown', function(e) {
			stopKey(e, banned);
		});
	}
}

const el1 = document.getElementById('attempt1'),
	el2 = document.getElementById('attempt2'),
	el3 = document.getElementById('attempt3'),
	el4 = document.getElementById('attempt4'),
	el5 = document.getElementById('attempt5'),
	el6 = document.getElementById('attempt6');
el1.addEventListener(
	'click',
	function() {
		test(el1.id);
	},
	false
);
el2.addEventListener(
	'click',
	function() {
		test(el2.id);
	},
	false
);
el3.addEventListener(
	'click',
	function() {
		test(el3.id);
	},
	false
);
el4.addEventListener(
	'click',
	function() {
		test(el4.id);
	},
	false
);
el5.addEventListener(
	'click',
	function() {
		test(el5.id);
	},
	false
);
el6.addEventListener(
	'click',
	function() {
		test(el6.id);
	},
	false
);

const stopKey = (e, bannedLetters) => {
	if (bannedLetters.indexOf(e.key) !== -1) {
		e.preventDefault();
	}
};
