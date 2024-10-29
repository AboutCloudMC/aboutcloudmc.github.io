let saveSeconds = 10;

function resetGame() {
    // Reset the counter
    setCount(0);
    localStorage.clear();
}

function localSave(key, value) {
    localStorage.setItem(key, value);
}

function saveGame() {

    // Save the count to local storage
    localSave('count', getCount().toString());

    Array.prototype.forEach.call(document.getElementsByClassName('gadget'), gadget => {
        let id = gadget.id;
        localSave(id + '_level', getLevel(id).toString());
        localSave(id + '_cost', getCost(id).toString());
    });

    console.log('Game saved successfully!');
}

function loadGame() {
    // Check for the count variable in local storage
    if (localStorage.getItem('count')) {
        let savedCount = parseInt(localStorage.getItem('count'));
        setCount(savedCount);
    } else {setCount(0);}


    Array.prototype.forEach.call(document.getElementsByClassName('gadget'), gadget => {
         let id = gadget.id;
         let level = localStorage.getItem(id + '_level');
         if(level !== null) {
            setLevel(id, parseInt(level));
        }

        let cost = localStorage.getItem(id + '_cost');

        if(cost !== null) {
            setCost(id, parseInt(cost));
        }

        activateGadget(id);
    });

    console.log('Game loaded successfully!');
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