// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input");
const replaceInput = document.querySelector(".replace-input");
const replaceAllButton = document.querySelector(".replace-all-button");
const replaceOneButton = document.querySelector(".replace-one-button");
const rowElements = document.querySelectorAll(".row");
const box = document.querySelector('#case');
let divBool = false;
let searchStorage = window.localStorage;
let searchCounter = 1;

console.log(JSON.stringify(searchStorage));

function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}
function rCounterText(counter){
    let div = document.createElement("div");
    let text = document.createTextNode(
      "Number of Items replaced: " + counter
    );
    div.appendChild(text);
    document.querySelector("fieldset").appendChild(div);
    divBool = true;
}

function textCheck (counter){
    if (divBool === false){
        rCounterText(counter);
    } else {
        document.querySelector("fieldset").querySelector("div").innerHTML = "Number of Items replaced: " + counter;

    }
}

replaceAllButton.addEventListener('click', function(){
    let search = findInput.value;
    searchStorage.setItem('searchTerm' + searchCounter, search);
    searchCounter++
    let searchL
     if (box.checked == true){
         searchL = RegExp(search, 'i');
     }
    let replacement = replaceInput.value;
    let replacementCounter = 0;
    for (let outElement = 0; outElement < rowElements.length; outElement++){
        let cellElementArray = getCellElements(rowElements[outElement]);
         for (let currentElement = 0; currentElement < cellElementArray.length; currentElement++){
             if (box.checked === true){
                 if (searchL.test(cellElementArray[currentElement].innerHTML)){
                     cellElementArray[currentElement].innerHTML = 
                     cellElementArray[currentElement].innerHTML.replace(searchL, replacement);
                     replacementCounter++;
                }
            } else {
                    if (cellElementArray[currentElement].innerHTML.includes(search)){
                    cellElementArray[currentElement].innerHTML = 
                    cellElementArray[currentElement].innerHTML.replace(search, replacement);
                    replacementCounter++;
                    }
            }
            
        } 
    }
    textCheck(replacementCounter);
    
})

replaceOneButton.addEventListener('click', function(){
    let search = findInput.value;
    searchStorage.setItem('searchTerm' + searchCounter, search);
    searchCounter++
    let searchL
     if (box.checked == true){
         searchL = RegExp(search, 'i');
     }
    let replacement = replaceInput.value;
    let replacementCounter = 0;
    for (let outElement = 0; outElement < rowElements.length; outElement++){
        let cellElementArray = getCellElements(rowElements[outElement]);
        for (let currentElement = 0; currentElement < cellElementArray.length; currentElement++){
            if (box.checked === true){
                if (searchL.test(cellElementArray[currentElement].innerHTML)){
                    cellElementArray[currentElement].innerHTML = 
                    cellElementArray[currentElement].innerHTML.replace(searchL, replacement);
                    replacementCounter++;
                    textCheck(replacementCounter);
                    return null;
               }
           } else {
                   if (cellElementArray[currentElement].innerHTML.includes(search)){
                   cellElementArray[currentElement].innerHTML = 
                   cellElementArray[currentElement].innerHTML.replace(search, replacement);
                   replacementCounter++;
                   textCheck(replacementCounter);
                   return null;
                   }
           }
           
       } 
    }
    
})
