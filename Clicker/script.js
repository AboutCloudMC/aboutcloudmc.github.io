var saveSeconds = 10;

function clickCookie() {
    // Get the counter element
    const counterElement = document.getElementById('counter');

    // Get the current count
    let count = parseInt(counterElement.innerText);

    // Increment the count by 1
    count += 1;

    // Update the counter element with the new count
    counterElement.innerText = count.toString();
}

function resetGame() {
    // Reset the counter
    const counterElement = document.getElementById('counter');
    counterElement.innerText = '0';
}

function saveGame() {
    // Get the current count
    const counterElement = document.getElementById('counter');
    const count = parseInt(counterElement.innerText);

    // Save the count to local storage
    localStorage.setItem('count', count.toString());

    console.log('Game saved successfully!');
}

function loadGame() {
    // Check for the count variable in local storage
    if (localStorage.getItem('count')) {
        // Get the saved count from local storage
        const savedCount = parseInt(localStorage.getItem('count'));

        // Update the counter with the saved count
        const counterElement = document.getElementById('counter');
        counterElement.innerText = savedCount.toString();

        console.log('Game loaded successfully!');
    }
}

// Load the game when the website is loaded
window.addEventListener('load', loadGame);

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 's') {
        saveGame();
        event.preventDefault();
    }
});

// Save the game when a set amount of seconds have passed
setInterval(saveGame, saveSeconds * 1000);