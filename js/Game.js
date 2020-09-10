/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
    // Constructor method
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    };

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        // Hide the start screen overlay
        document.querySelector("#overlay").style.display = "none";
 
        // Get a random phrase and assign to 'randomPhrase'
        const randomPhrase = this.getRandomPhrase();
 
        // Create a new phrase using 'randomPhrase' and assign it to the property 'activePhrase', add this to the display.
        this.activePhrase = new Phrase(randomPhrase.phrase);
        this.activePhrase.addPhraseToDisplay();
    };

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        // Create an array of phrases
        let phraseArr = [
            "Life is like a box of chocolates", 
            "There is not trying", 
            "May the force be with you", 
            "You have to see the matrix for yourself", 
            "You talking to me"
        ];

        // Create an empty array ('phraseObjArr') and push 5 objects containing each phrase from 'phraseArr' into it. Return phraseObjArr.
        let phraseObjArr = [];
        for(let i = 0; i < 5; i++) {
            phraseObjArr.push({
                phrase: phraseArr[i]
            });
        }
        return phraseObjArr;
    };

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        // Assigns a random number in the range of 0 - (this.phrases.length) to 'randomPhraseIndex'.
        let randomPhraseIndex = Math.floor(Math.random() * this.phrases.length);
        // A random phrase object is selected from the phrases property using 'randomPhraseIndex' and returned
        return this.phrases[randomPhraseIndex];
    };

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        // Check if the button is disabled or not
        if(!button.disabled) {
            // If letter is in the active phrase...
            if(this.activePhrase.checkLetter(button.textContent)) {
                // Disables the button
                // Add class chosen to the button and call 'showMatchedLetter'.
                // Check for a win, and if true call 'gameOver().
                button.disabled = true;
                button.classList.add("chosen");
                this.activePhrase.showMatchedLetter(button.textContent);
                if(this.checkForWin()) {
                    this.gameOver(true);
                }
            // If letter is not in active phrase, remove a life, disable the button add class 'wrong' to button
            } else {
                this.removeLife();
                button.disabled = true;
                button.classList.add("wrong");
            };
        };
    };

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin() {
        // Store all hidden list elements in 'hiddenElements'
        let hiddenElements = [];
        // Loop through all list elements with a class of 'letter' and push to 'hiddenElements'
        const letterTiles = document.querySelectorAll(".letter");
        for(let i = 0; i < letterTiles.length; i++) {
            if(letterTiles[i].classList.contains("hide")) {
                hiddenElements.push(letterTiles[i]);
            };
        };

        // If hiddenElements has a length of 0 then all tiles are showing, so player has won - return true;
        if(hiddenElements.length == 0) {
            return true;
        };
        return false;
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        // Set the list elements to 'lives'
        const lives = document.querySelectorAll(".tries");
        // If the amount of lives is more than 0. 
        if(lives.length > 1) {
            // Each time the function is called carry out the following logic.
            // Replace the image of the img element within the li element (children[0]) and remove the class 'tires' from the first element in 'lives'.
            // Add 1 to 'this.missed'.
            lives[0].children[0].src = "images/lostHeart.png";
            lives[0].classList.remove("tries");
            this.missed++;
        } else {
            this.gameOver(false);
        };
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        // Assign variables to the overlay element and the overlay message element and 
        const gameOutcome = document.querySelector("#game-over-message");
        const overlay = document.querySelector("#overlay");

        // Depending on the outcome of 'gameWon' update 'gameOutcome' text content and update the classes
        if(gameWon) {
            gameOutcome.textContent = "You Won!";
            overlay.classList.remove("start");
            overlay.classList.add("win");
        } else {
            gameOutcome.textContent = "You lost. Better luck next time.";
            overlay.classList.remove("start");
            overlay.classList.add("lose");
        };

        // Show the start screen overlay
        document.querySelector("#overlay").style.display = "block";
    };
};