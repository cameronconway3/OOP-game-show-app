/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);


// let game;

// // Assign the Start Game button to 'startGame' variable
const startGame = document.querySelector("#btn__reset");
// Listen out for a click event on 'startGame'
startGame.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});




// document.querySelector("#overlay").style.display = "none";

// Test checkLetter and showMatchedLetter
// const phrase = new Phrase("hello u");
// phrase.addPhraseToDisplay();
// console.log(phrase.showMatchedLetter("l"));

// Test removeLife
// const game = new Game();
// game.activePhrase.checkLetter('a');





