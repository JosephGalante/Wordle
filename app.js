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
