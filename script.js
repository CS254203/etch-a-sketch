//creates grid
const container = document.querySelector('.container');
for(let i = 0 ; i<256; i++){
    container.innerHTML+='<div class = "element" onmouseover="mouseOverEvent()"></div>\n';
}

function mouseOverEvent(){
    const myall = Array.from(document.querySelectorAll('.element'));
    const elements = document.querySelectorAll('.element');
    document.addEventListener('mouseover', (e) => {
       if(e.target.classList.contains('element')){
          elements[myall.indexOf(e.target)].style.background="red"; 
        }
    });
}

function clearButtonMouseClickEvent(){
    const elementsArray = Array.from(document.querySelectorAll('.element'));
    const elements = document.querySelectorAll('.element');
    console.log(elementsArray.length);
    for(let i = 0; i<elementsArray.length;i++){
    elements[i].style.background ="white";
    }
}


var pressed = 0;
function gridBUttonMouseClickEvent(){
    if(pressed === 0){
        const elementsArray = Array.from(document.querySelectorAll('.element'));
        const elements = document.querySelectorAll('.element');
        console.log(elementsArray.length);
        for(let i = 0; i<elementsArray.length;i++){
        elements[i].style.border ="0";
        }
        pressed=1;
    }
    else{
        const elementsArray = Array.from(document.querySelectorAll('.element'));
        const elements = document.querySelectorAll('.element');
        console.log(elementsArray.length);
        for(let i = 0; i<elementsArray.length;i++){
        elements[i].style.border ="0.5px solid lightslategray";
        }
        pressed=0;
    }
}

//creates clear button
const clearButtonContainer = document.createElement('div');
clearButtonContainer.setAttribute('id', 'clear-button-container');
const clearButton = document.createElement('button');
clearButton.setAttribute('id', 'clear-button');
clearButton.setAttribute('onclick', 'clearButtonMouseClickEvent()');
clearButton.innerHTML="Clear!";
clearButtonContainer.append(clearButton)
container.insertAdjacentElement('afterend', clearButtonContainer);


//creates toggle grid button
const selectClearButtonContainer = document.querySelector('#clear-button-container');
const gridButtonContainer = document.createElement('div');
gridButtonContainer.setAttribute('id', 'grid-button-container');
const gridButton = document.createElement('button');
gridButton.setAttribute('id', 'grid-button');
gridButton.setAttribute('onclick', 'gridBUttonMouseClickEvent()');
gridButton.innerHTML="Toggle Grid";
gridButtonContainer.append(gridButton)
selectClearButtonContainer.insertAdjacentElement('afterend', gridButtonContainer);

//random color button

//slider and it's values
var slider = document.getElementById("slider");
var numberOfCells = document.getElementById("valueOfSlider");
numberOfCells.innerHTML = slider.value + " x " + slider.value;

slider.oninput = function() {
    numberOfCells.innerHTML = this.value + " x " + this.value;
}

//to do : 
//mudar a grid conforme o number of cells value 
//random color button