var clicklevel = 1;

function clickCookie(multiply) {
    // Get the counter element
    const counterElement = document.getElementById('counter');

    // Get the current count
    let count = parseInt(counterElement.innerText);

    // Increment the count by 1*multiplier
    count += 1*parseInt(multiply);

    // Update the counter element with the new count
    counterElement.innerText = count.toString();
}

function manualClick() {
    clickCookie(clicklevel);
}

function autoClick(multiply) {
    clickCookie(multiply);
    document.getElementById('animationElement').style.animation = 'clickAnimation 0.1s';
}

function buy(elem) {

    console.log(elem.id);

    let count = getCount();
    let cost = getCost(elem.id);

    // Check if the player has enough cookies
    if (count >= cost) {

        count -= cost;
        setCount(count);

        cost *= 2;
        setCost(elem.id, cost);

        setLevel(elem.id, getLevel(elem.id) + 1);

        activateGadget(elem.id);
    } else {
        alert('You do not have enough cookies to buy this gadget!');
    }
}

function activateGadget(gadget) {
    let level = parseInt(document.getElementById(gadget + '_level').innerHTML);
    console.log(level);
    switch (gadget) {
        case 'cursor':
            clicklevel = level;
            break;
        case 'autoclicker':
            setInterval(() => autoClick(level), 1000);
            break;
        case 'factory':
            setInterval(() => clickCookie(level), 1000);
            break;
        case 'cookie_farm':
            setInterval(() => clickCookie(level), 1000);
            break;
        case 'cookie_factory':
            setInterval(() => clickCookie(level), 1000);
            break;
        case 'cookie_mine':
            setInterval(() => clickCookie(level), 1000);
            break;
    }
}

function getLevel(gadget) {
    return parseInt(document.getElementById(gadget + '_level').innerHTML);
}
function setLevel(gadget, level) {
    document.getElementById(gadget + '_level').innerHTML = level.toString();
}

function getCost(gadget) {
    return parseInt(document.getElementById(gadget + '_cost').innerHTML);
}

function setCost(gadget, cost) {
    document.getElementById(gadget + '_cost').innerHTML = cost.toString();
}

function getCount() {
    return parseInt(document.getElementById('counter').innerHTML);
}

function setCount(count) {
    document.getElementById('counter').innerHTML = count.toString();
}
