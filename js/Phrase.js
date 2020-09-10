/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    // Constructor method that initializes the 'phrase' property
    constructor(phrase) {
        // convert the 'phrase' parameter to lowercase
        this.phrase = phrase.toLowerCase();
    };

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
    };

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        // Remove any whitespace in the phrase, check if letter is included in this phrase, return true if so.
        if(this.phrase.replace(/ /g, '').includes(letter)) {
            return true;
        } 
        return false;
    };

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        let numMatched = document.querySelectorAll("." + letter);
        // Loop through all elements with class == letter, add class 'show' and remove class 'hide'
        for(let i = 0; i < numMatched.length; i++) {
            numMatched[i].classList.add("show");
            numMatched[i].classList.remove("hide");
        };
    };
};