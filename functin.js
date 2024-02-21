// function play(){
//     // kono section hide kora
//    const homeStay = document.getElementById('home');
//    homeStay.classList.add('hidden');

// //  hidden k remove korar jonno
// const playSection = document.getElementById('playGround');
// playSection.classList.remove('hidden')

// }

function keybordUpEvent(event) {
    const playerPress = event.key;

    // get expected alpha
    const curentAlphabate = document.getElementById('currentAlphabate');
    const storCureentAlpha = curentAlphabate.innerText;
    const expactetAlpha = storCureentAlpha.toLowerCase();


    // chake match
    if (playerPress === expactetAlpha) {
        console.log('you win');
        removeBackgroundColor(expactetAlpha);

        // update score
        // get the currwent score
        const currentElementScore = document.getElementById('current-score');
        const currentText = currentElementScore.innerText;
        const currentScore = parseInt(currentText);
        console.log(currentScore);
        // increment score'
        const newScore = currentScore + 1;
        // show score update
        currentElementScore.innerText = newScore;

        continewGame();
    }
    else {
        console.log('you losse')
    }
}
document.addEventListener('keyup', keybordUpEvent);


function continewGame() {
    const alphabate = rendomAlphabate();
    // console.log('your rendom alphabate :', alphabate);

    // curent alphabate 
    const currentElementAlphabate = document.getElementById('currentAlphabate');
    currentElementAlphabate.innerText = alphabate;
    // bg color set
    addBackgroundColor(alphabate);
}

function play() {
    hideElement('home');
    showElement('playGround');
    continewGame();
}
