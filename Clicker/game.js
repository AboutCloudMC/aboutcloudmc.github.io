function clickCookie(multiply) {
    // Get the counter element
    const counterElement = document.getElementById('counter');

    // Get the current count
    let count = parseInt(counterElement.innerText);

    // Increment the count by 1
    count += 1*parseInt(multiply);

    // Update the counter element with the new count
    counterElement.innerText = count.toString();
}

function buy(elem) {

    console.log(elem.id);
    // Get the counter element
    let counterElement = document.getElementById('counter');

    // Get the current count
    let count = parseInt(counterElement.innerText);

    // Get the cost of the gadget
    let costElement = document.getElementById(elem.id + '_cost')
    let cost = parseInt(costElement.innerText);

    // Check if the player has enough cookies
    if (count >= cost) {
        // Deduct the cost from the count
        count -= cost;

        // Update the counter element with the new count
        counterElement.innerText = count.toString();

        // Increment the cost of the gadget
        cost *= 2;
        costElement.innerHTML = cost.toString();

        // Increment the value of the gadget
        let levelElement = document.getElementById(elem.id + '_level');
        let level = parseInt(levelElement.innerText);
        level += 1;
        levelElement.innerHTML = level.toString();

        activateGadget(elem.id);
    } else {
        alert('You do not have enough cookies to buy this gadget!');
    }
}

function activateGadget(gadget) {
    let level = parseInt(document.getElementById(gadget + '_level').innerHTML);
    switch (gadget) {
        case 'cursor':
            setInterval(clickCookie(parseInt(document.getElementById(gadget + '_level').innerHTML)), 1000);
            break;
        case 'grandma':
            setInterval(clickCookie, 2000);
            break;
        case 'factory':
            setInterval(clickCookie, 5000);
            break;
        case 'cookie_farm':
            setInterval(clickCookie, 10000);
            break;
        case 'cookie_factory':
            setInterval(clickCookie, 20000);
            break;
        case 'cookie_mine':
            setInterval(clickCookie, 50000);
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
