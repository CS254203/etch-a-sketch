//creates grid
const container = document.querySelector('.container');
let initialColor = "red";
for(let i = 0 ; i<256; i++){
    container.innerHTML+=`<div class = "element" onmouseover="mouseOverEvent('${initialColor}')"></div>\n`;
}

function mouseOverEvent(color){
    const myall = Array.from(document.querySelectorAll('.element'));
    const elements = document.querySelectorAll('.element');
    document.addEventListener('mouseover', (e) => {
       if(e.target.classList.contains('element')){
          elements[myall.indexOf(e.target)].style.background=String(color); 
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
var toggle = 0;
function colorButtonMouseClickEvent(){
    if(toggle ===0){
        toggle =1;
        var randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
        const elementsArray = Array.from(document.querySelectorAll('.element'));
        const elements = document.querySelectorAll('.element');
        for(let i = 0; i<elementsArray.length;i++){
            randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
            elements[i].setAttribute("onmouseover", `mouseOverEvent('${randomColor}')`);
        } 
    }
    else{
        toggle=0;
        const elementsArray = Array.from(document.querySelectorAll('.element'));
        const elements = document.querySelectorAll('.element');
        for(let i = 0; i<elementsArray.length;i++){
            elements[i].setAttribute("onmouseover", `mouseOverEvent('${initialColor}')`);
        }
    }

}

var pressed = 0;
function gridButtonMouseClickEvent(){
    if(pressed === 0){
        const elementsArray = Array.from(document.querySelectorAll('.element'));
        const elements = document.querySelectorAll('.element');
        for(let i = 0; i<elementsArray.length;i++){
        elements[i].style.outline ="0";
        }
        pressed=1;
    }
    else{
        const elementsArray = Array.from(document.querySelectorAll('.element'));
        const elements = document.querySelectorAll('.element');
        for(let i = 0; i<elementsArray.length;i++){
        elements[i].style.outline ="0.5px solid lightslategray";
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
const selectClearButtonContainer = document.querySelector('#clear-button-container');//selects the clearbutton container
const gridButtonContainer = document.createElement('div');
gridButtonContainer.setAttribute('id', 'grid-button-container');
const gridButton = document.createElement('button');
gridButton.setAttribute('id', 'grid-button');
gridButton.setAttribute('onclick', 'gridButtonMouseClickEvent()');
gridButton.innerHTML="Toggle Grid";
gridButtonContainer.append(gridButton)
selectClearButtonContainer.insertAdjacentElement('afterend', gridButtonContainer);

//random color button

const selectGridButtonContainer = document.querySelector('#grid-button-container');
const colorButtonContainer = document.createElement('div');
colorButtonContainer.setAttribute('id', 'color-button-container');
const colorButton = document.createElement('button');
colorButton.setAttribute('id', 'color-button');
colorButton.setAttribute('onclick', 'colorButtonMouseClickEvent()');
colorButton.innerHTML="Random Color";
colorButtonContainer.append(colorButton)
selectGridButtonContainer.insertAdjacentElement('afterend', colorButtonContainer);

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