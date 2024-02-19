// function play(){
//     // kono section hide kora
//    const homeStay = document.getElementById('home');
//    homeStay.classList.add('hidden');

// //  hidden k remove korar jonno
// const playSection = document.getElementById('playGround');
// playSection.classList.remove('hidden')

// }

function continewGame() {
    const alphabate = rendomAlphabate();
    console.log('your rendom alphabate :', alphabate);

    // curent alphabate 
    const currentElementAlphabate = document.getElementById('currentAlphabate');
    currentElementAlphabate.innerText = alphabate; 

}

function play() {
    hideElement('home');
    showElement('playGround');
    continewGame();
}
