function toggleDisplay(element) {
	var elem = document.getElementById(element);
	if (elem.style.display === "none") {
	elem.style.display = "block";
	changeButton(true, "abatbtn");
	} else {
	elem.style.display = "none";
	changeButton(false, "abatbtn");
	}
}

function changeButton(isPressed, element) {
	var elem = document.getElementById(element);
	let color = "#00FF00";
	if (isPressed) {
		elem.style.backgroundColor = color;
		elem.style.color = "black";
		log(elem);
	} else {
		elem.style.backgroundColor = "black";
		elem.style.color = color;
	}
}

function click() {
	var elem = document.getElementById("cookies");
	let cookies = elem.innerHTML;
	log("run");
}

function log(msg) {
	console.log(msg);
}