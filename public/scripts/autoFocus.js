const buttons = [ 'attempt1', 'attempt2', 'attempt3', 'attempt4', 'attempt5', 'attempt6' ];

for (let j = 0; j < buttons.length; j++) {
	// console.log(button)
	let inputs = document.getElementById(buttons[j]).parentNode.getElementsByClassName('letter');
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].onkeyup = function() {
			if (i !== 4 && inputs[i].value.length === 1) {
				inputs[i + 1].focus();
			} else if (i === 4 && inputs[i].value.length === 1) {
				const tempBtn = document.getElementById(buttons[j]);
				tempBtn.focus();
			}
		};
	}
}
