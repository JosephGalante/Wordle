function test(e) {
	
	const temp1 = document.getElementById('try1').getElementsByClassName('letter')[0].value;
	const temp2 = document.getElementById('try1').getElementsByClassName('letter')[1].value;
	const temp3 = document.getElementById('try1').getElementsByClassName('letter')[2].value;
	const temp4 = document.getElementById('try1').getElementsByClassName('letter')[3].value;
	const temp5 = document.getElementById('try1').getElementsByClassName('letter')[4].value;
	const temp6 = e;
	let word = "";
	word = word.concat(temp1, temp2, temp3, temp4, temp5);
	word = word.toLowerCase();
	console.log(word);
	console.log(temp6);

}






function input(e) {
	let tbInput = document.getElementById('tbInput');
	tbInput.value = tbInput.value + e.value;
}

function del() {
	var tbInput = document.getElementById('tbInput');
	tbInput.value = tbInput.value.substr(0, tbInput.value.length - 1);
}

function load() {
	var array = new Array();

	while (array.length < 10) {
		var temp = Math.round(Math.random() * 9);
		if (!contain(array, temp)) {
			array.push(temp);
		}
	}
	for (i = 0; i < 10; i++) {
		var btn = document.getElementById('btn' + i);
		btn.value = array[i];
	}
}
