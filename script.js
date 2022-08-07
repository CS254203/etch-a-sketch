
const container = document.querySelector('.container');
const initialColor = "red";

createGrid();

var randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
const containerFlex = document.querySelector('.container-flex');
const elementsArray = Array.from(document.querySelectorAll('.element'));
const elements = document.querySelectorAll('.element');
var pressedColorButton = 0;
var pressedGridButton = 0;

/*createGrid(squareSize);

// Create Squared Divs
function createDiv(size) {
  const div = document.createElement('div');
  div.classList.add('box');
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;

  return div;
}

// Creat The Grid and append it to grid
function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      grid.appendChild(createDiv(grid.clientWidth / gridSize));
    }
  }
}

*/

function createGrid(){
    for(let i = 0 ; i<256; i++){
        container.innerHTML+=`<div class = "element" onmouseover="mouseOverEvent('${initialColor}')"></div>\n`;
    }
}

function mouseOverEvent(color){
    document.addEventListener('mouseover', (e) => {
       if(e.target.classList.contains('element')){
          elements[elementsArray.indexOf(e.target)].style.background=String(color); 
        }
    });
}

function clearButtonMouseClickEvent(){
    for(let i = 0; i<elementsArray.length;i++){
    elements[i].style.background ="white";
    }
}

function colorButtonMouseClickEvent(){
    if(pressedColorButton ===0){
        pressedColorButton =1;
        for(let i = 0; i<elementsArray.length;i++){
            randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
            elements[i].setAttribute("onmouseover", `mouseOverEvent('${randomColor}')`);
        } 
    }
    else{
        pressedColorButton=0;
        for(let i = 0; i<elementsArray.length;i++){
            elements[i].setAttribute("onmouseover", `mouseOverEvent('${initialColor}')`);
        }
    }

}

function gridButtonMouseClickEvent(){
    if(pressedGridButton === 0){
        for(let i = 0; i<elementsArray.length;i++){
        elements[i].style.outline ="0";
        }
        pressedGridButton=1;
    }
    else{
        for(let i = 0; i<elementsArray.length;i++){
        elements[i].style.outline ="0.5px solid lightslategray";
        }
        pressedGridButton=0;
    }
}

/*****************
 * HTML ELEMENTS *
 ****************/

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

//creates random color button
const selectGridButtonContainer = document.querySelector('#grid-button-container');
const colorButtonContainer = document.createElement('div');
colorButtonContainer.setAttribute('id', 'color-button-container');
const colorButton = document.createElement('button');
colorButton.setAttribute('id', 'color-button');
colorButton.setAttribute('onclick', 'colorButtonMouseClickEvent()');
colorButton.innerHTML="Random Color";
colorButtonContainer.append(colorButton)
selectGridButtonContainer.insertAdjacentElement('afterend', colorButtonContainer);

//creates slider and it's values
var slider = document.getElementById("slider");
var numberOfCells = document.getElementById("valueOfSlider");
numberOfCells.innerHTML = slider.value + " x " + slider.value;

slider.oninput = function() {
    numberOfCells.innerHTML = this.value + " x " + this.value;
}