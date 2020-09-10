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

        // Create an empty array ('phraseLetterArr') to push each individual letter from 'this.phrase' using a for loop.
        let phraseLetterArr = [];
        let phraseLength = this.phrase.length;
        for(let i = 0; i < phraseLength; i++) {
            phraseLetterArr.push(this.phrase[i]);
        };

        // Create an empty array ('htmlLetterListItem') to push a list element containing a letter or space. 
        // Change the list element classes on the condition of 'phraseChar' being a letter or an empty string.
        let htmlLetterListItem = [];
        phraseLetterArr.forEach( phraseChar => {
            if(phraseChar !== " ") {
                htmlLetterListItem.push(`<li class="hide letter ${phraseChar}">${phraseChar}</li>`);
            } else {
                htmlLetterListItem.push(`<li class="space"> </li>`);
            }
        });

        // Build the html element containing each list element in 'htmlLetterListItem'.
        let htmlListItems = ``;
        htmlLetterListItem.forEach( htmlList => htmlListItems += `${htmlList}`);

        // Insert 'htmlListItems' into phrase ID div UL.
        document.querySelector("#phrase").children[0].insertAdjacentHTML('beforeend', htmlListItems);

        // return htmlListItems;
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