function hideElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}
function showElement(elementId) {
    const element1 = document.getElementById(elementId);
    element1.classList.remove('hidden')
}
function addBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}
function removeBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}

function getTextelementById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}
 function  getelementByValueId(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;

}

// rendom number get
function rendomAlphabate() {
    // get a rendom alphabate 
    const alphabateString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabates = alphabateString.split('');

    // get a rendom index between
    // rendom pabo vogna onsho soho
    const rendomNumber = Math.random() * 25;
    // purno number e r index pabo
    const rendomIndex = Math.round(rendomNumber);
    // console.log(rendomIndex);

    const alphabate = alphabates[rendomIndex];
    return alphabate;
}