const buttons = document.getElementsByClassName("btn");
var display = "";

for (let button of buttons) {
    button.onclick = function() {
        console.log(button.innerText); // Debugging
        switch(button.innerText) {
            case "C":
                display = "";
                break;
            case "=":
                display = eval(display);
                break;
            case "DEL":
                display = display.slice(0, -1);
                break;
            default:
                display += button.innerText;
        }
        document.getElementById("display").innerHTML = display;
    };
}