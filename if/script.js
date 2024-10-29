function check(textA, textB) {		
	let intA = parseInt(textA.value);
	let isNegative = Boolean(intA < 0);
	textB.value = isNegative;
	if(intA < 0) {
		//bla
	} else {
		//else bla
	}
}
