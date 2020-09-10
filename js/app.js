/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// I would like my project to be rejected if I do not meet the Exceeds Expectations Requirements

let game;

// // Assign the Start Game button to 'startGame' variable
const startGame = document.querySelector("#btn__reset");
// Listen out for a click event on 'startGame'
startGame.addEventListener('click', () => {
    // Remove all li elements from the Phrase 'ul' element.
    document.querySelector("#phrase").children[0].innerHTML = "";

    // Reset the overlay classes
    const overlay = document.querySelector("#overlay");
    overlay.classList.add("start");
    overlay.classList.remove("win");
    overlay.classList.remove("lose");
    

    // Enable all of the onscreen keyboard buttons and update each to use the 'key' class
    const keys = document.querySelectorAll(".key");
    for(let i = 0; i < keys.length; i++) {
        keys[i].classList.remove('chosen');
        keys[i].classList.remove('wrong');
    };

    // Reset the heard images 
    const lives = document.querySelector("#scoreboard").children[0].children;
    for(let i = 0; i < lives.length; i++) {
        // Check if lives[i] contains tries, as if not this will be a life lost element
        if(!lives[i].classList.contains('tries')) {
            lives[i].classList.add('tries');
            lives[i].children[0].src = "images/liveHeart.png";
        };
    };

    game = new Game();
    game.startGame();
});

// Get all elements with keyrow class
const keyrows = document.querySelectorAll(".keyrow");
let keyElements = [];
// Create a nexted loop to loop over the individual letter li elements in each keyrow element.
// Push each individual li element into empty array - 'keyElements'
keyrows.forEach( keyrow => {
    for (let i = 0; i < keyrow.children.length; i++) {
        keyElements.push(keyrow.children[i]);
    };
});

// For each li element in 'keyElements' listen out for a click event
keyElements.forEach( element => {
    element.addEventListener("click", e => {
        // console.log(e.target.textContent);
        game.handleInteraction(e.target);
    });
});
