function check(textA, textB) {		
	let intA = parseInt(textA.value);
	let isNegative = Boolean(intA < 0);
	if(intA == 0) {
		textB.value = 0;
	} else {
		textB.value = isNegative;
	}
}
