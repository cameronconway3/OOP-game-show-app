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
}