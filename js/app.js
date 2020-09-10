/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);


let game;

// // Assign the Start Game button to 'startGame' variable
const startGame = document.querySelector("#btn__reset");
// Listen out for a click event on 'startGame'
startGame.addEventListener('click', () => {
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
    }
});

// For each li element in 'keyElements' listen out for a click event
keyElements.forEach( element => {
    element.addEventListener("click", e => {
        // console.log(e.target.textContent);
        game.handleInteraction(e.target)
    });

});






// document.querySelector("#overlay").style.display = "none";

// Test checkLetter and showMatchedLetter
// const phrase = new Phrase("hello u");
// phrase.addPhraseToDisplay();
// console.log(phrase.showMatchedLetter("l"));

// Test removeLife
// const game = new Game();
// game.activePhrase.checkLetter('a');