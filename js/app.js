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
const keys = document.querySelectorAll(".key");
let keyElements = [];
// Push all buttons with class of 'key' to 'keyElements' array
keys.forEach( key => {
    keyElements.push(key);
});

// For each li element in 'keyElements' listen out for a click event
keyElements.forEach( element => {
    element.addEventListener("click", e => {
        game.handleInteraction(e.target);
    });
});


/**
 * Extra Credit
 * 
 * The handleInteraction() function takes a button element as an argument.
 * The logic below creates an object of each element textContent (a-z) and pairs it with the relative button element.
 * When the keydown event is triggered, each keyboard character (a-z) calls the handleInteraction() function.
 * The relative element is passed as an arguement and accessed in 'keyElementPair' using dot notation. 
 */
let keyElementPair = {}
keyElements.forEach( element => {
    keyElementPair[element.textContent] = element;
});

document.addEventListener('keydown', e => {
    switch(e.key) {
        case "a":
            game.handleInteraction(keyElementPair.a);
            break;
        case "b":
            game.handleInteraction(keyElementPair.b);
            break;
        case "c":
            game.handleInteraction(keyElementPair.c);
            break;
        case "d":
            game.handleInteraction(keyElementPair.d);
            break;
        case "e":
            game.handleInteraction(keyElementPair.e);
            break;
        case "f":
            game.handleInteraction(keyElementPair.f);
            break;
        case "g":
            game.handleInteraction(keyElementPair.g);
            break;
        case "h":
            game.handleInteraction(keyElementPair.h);
            break;
        case "i":
            game.handleInteraction(keyElementPair.i);
            break;
        case "j":
            game.handleInteraction(keyElementPair.j);
            break;
        case "k":
            game.handleInteraction(keyElementPair.k);
            break;
        case "l":
            game.handleInteraction(keyElementPair.l);
            break;
        case "m":
            game.handleInteraction(keyElementPair.m);
            break;
        case "n":
            game.handleInteraction(keyElementPair.n);
            break;
        case "o":
            game.handleInteraction(keyElementPair.o);
            break;
        case "p":
            game.handleInteraction(keyElementPair.p);
            break;
        case "q":
            game.handleInteraction(keyElementPair.q);
            break;
        case "r":
            game.handleInteraction(keyElementPair.r);
            break;
        case "s":
            game.handleInteraction(keyElementPair.s);
            break;
        case "t":
            game.handleInteraction(keyElementPair.t);
            break;
        case "u":
            game.handleInteraction(keyElementPair.u);
            break;
        case "v":
            game.handleInteraction(keyElementPair.v);
            break;
        case "w":
            game.handleInteraction(keyElementPair.w);
            break;
        case "x":
            game.handleInteraction(keyElementPair.x);
            break;
        case "y":
            game.handleInteraction(keyElementPair.y);
            break;
        case "z":
            game.handleInteraction(keyElementPair.z);
            break;
    };
});