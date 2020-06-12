const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
let missed = 0;

// Phrases Array
let phrases = [
    'When we All Get to Heaven',
    'Amazing Grace', 
    'Farther Along', 
    'It is Well With my Soul', 
    'Sweet Beaulah Land',
    'Call me Gone'];

// Hide overlay by pressing start game

startButton.addEventListener('click', (e) => {
    if (e.target.textContent === 'Start Game'){
        overlay.style.display = 'none';
        reset();
    } else if (e.target.textContent === "Reset Game") {
        reset();
    }
});

// Get a Random Phrase from phrases array
const getRandomPhraseAsArray = (arr) => {
    let i = Math.floor(Math.random() * arr.length);
    return arr[i];
};
getRandomPhraseAsArray(phrases);


// Add Phrase to display
const addPhraseToDisplay = (arr) => {
    for (i = 0; i < arr.length; i += 1){
        const ul = document.querySelector('#phrase ul');
        const listElement = document.createElement('li');
        const listItem = document.createTextNode(arr[i]);
        ul.appendChild(listElement);
        listElement.appendChild(listItem);
        if (arr[i] === ' ') {
            listElement.className = 'space';
        } else {
            listElement.className = 'letter';
        }
    }
};
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

//Check the Letter
const checkLetter = (button) => {
    let match = null;
    const letter = document.querySelectorAll('.letter');
    for (let i = 0; i < letter.length; i += 1) {
        const chosenLetter = letter[i];
        if (button === chosenLetter.textContent.toLowerCase()) {
            chosenLetter.classList.add('show');
            match = true;
        } 
    }
    return match;
};

// Event listener for letter selection
qwerty.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON'){
        e.target.classList.add('chosen');
        e.target.setAttribute('disabled', true);
    }
    const letterFound = checkLetter(e.target.textContent);
    if (letterFound === null && e.target.tagName === 'BUTTON') {
              let heartLives = document.querySelectorAll('img');
              heartLives[missed].setAttribute("src", "./wheelofsuccess/images/lostHeart.png");
              missed += 1;
            }
            checkWin(checkLetter);
});

// checkWin Function
const checkWin = () => {
    const letter = document.querySelectorAll('.letter');
    const show = document.querySelectorAll('.show');
    const title = document.querySelector('.title');
    if (letter.length === show.length) {
        setTimeout (() => {
            overlay.classList.remove('lose');
            overlay.classList.add('win');
            title.textContent = 'YOU WIN!';
            overlay.style.display = 'flex';
            startButton.textContent = 'Reset Game';
        }, 1000);
    }
    if (missed >= 5) {
        setTimeout(() => {
          overlay.classList.add('lose');
          title.textContent = 'You Lose. Try again?';
          overlay.style.display = 'flex';
          startButton.textContent = 'Reset Game';
        }, 300);
      }
}


// Reset Game
const reset = () => {
    let buttons = document.querySelectorAll('BUTTON');
    for ( let i = 0; i < buttons.length; i++) {
        buttons[i].removeAttribute('disabled');
        buttons[i].setAttribute('class', ' ');
    }

    let heartLives = document.querySelectorAll('img');
    for ( let i = 0; i < heartLives.length; i++) {
        heartLives[i].setAttribute("src", "./wheelofsuccess/images/liveHeart.png");
    }
    overlay.style.display = "none";
    
    const ul = document.querySelector('#phrase ul');
    const currentPhrase = ul.querySelectorAll('li');
    currentPhrase.forEach((char) => ul.removeChild(char));

    const phraseArray = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phraseArray);

    missed = 0;
};