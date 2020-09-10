/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {

    // Constructor method that initializes the 'phrase' property
    constructor(phrase) {
        // convert the 'phrase' parameter to lowercase
        this.phrase = phrase.toLowerCase();
    }

    

    /**
     * Adds letter placeholders to the display when the game starts.
     */
    addPhraseToDisplay() {

        let phraseArr = [];
        let phraseLength = this.phrase.length;
        for(let i = 0; i < phraseLength; i++) {
            phraseArr.push(this.phrase[i]);
        }

        let htmlLetterListItem = [];
        phraseArr.forEach( letter => {
            if(letter !== " ") {
                htmlLetterListItem.push(`<li class="hide letter ${letter}">${letter}</li>`);
            } else {
                htmlLetterListItem.push(`<li class="space"> </li>`);
            }
        });

        let html = ``;
        htmlLetterListItem.forEach( htmlList => html += `${htmlList}`);

        document.querySelector("#phrase").children[0].insertAdjacentHTML('beforeend', html);

        // return html;
    }

    /**
     * Checks to see if the letter selected by the player matches a letter in the phrase
     */
    checkLetter() {

    }

    /**
     * Reveals the letter(s) on the board that matches the player's selection.
     */
    showMatchedLetter() {

    }

}