// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input");
const replaceInput = document.querySelector(".replace-input");
const replaceAllButton = document.querySelector(".replace-all-button");
const rowElements = document.querySelectorAll(".row");

function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}

replaceAllButton.addEventListener('click', function(){
    let search = findInput.value;
    let replacement = replaceInput.value;
    let replacementCounter = 0;
    for (let outElement = 0; outElement < rowElements.length; outElement++){
        let cellElementArray = getCellElements(rowElements[outElement]);
         for (let currentElement = 0; currentElement < cellElementArray.length; currentElement++){
             if (cellElementArray[currentElement].innerHTML.includes(search)){
                 cellElementArray[currentElement].innerHTML = 
                 cellElementArray[currentElement].innerHTML.replace(search, replacement);
                 replacementCounter++;
             }
         }
    }
    if (document.querySelector('fieldset').querySelector('div') === null){
        document.querySelector("fieldset").innerHTML += '<div>Number of Items replaced: '
         + replacementCounter + '</div>';
    } //else {
       // document.querySelector('fieldset').querySelector('div').innerHTML = 'Number of Items replaced: '
       // + replacementCounter;
    //}
})
