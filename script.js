const grid = document.querySelector('.grid');
const initialColor = "gray";
var randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
const containerFlex = document.querySelector('.container-flex');
let pressedColorButton = 0;
let pressedGridButton = 0;

createGrid(32);

function createGrid(gridSize){
    let divSize = grid.clientWidth / gridSize;
    for (let i = 0; i < gridSize*gridSize; i++) {
            grid.innerHTML+=`<div class = "element" onmouseover="mouseOverEvent('${initialColor}')"></div>\n`;
            createDiv(divSize);
    }
    grid.setAttribute('style', `grid-template-rows: repeat(${gridSize}, 1fr);grid-template-columns: repeat(${gridSize}, 1fr);`);
}

const elementsArray = Array.from(document.querySelectorAll('.element'));
const elements = document.querySelectorAll('.element');
function createDiv(size) {
    const elementsArray = Array.from(document.querySelectorAll('.element'));
    const elements = document.querySelectorAll('.element');
    for(let i = 0; i<elementsArray.length;i++){
        elements[i].style.width = `${size}px`;
        elements[i].style.height = `${size}px`;
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

//creates random color button
const selectGridButton = document.querySelector('#grid-button');//selects the gridButton container
console.log(selectGridButton);
const colorButton = document.createElement('button');
colorButton.setAttribute('id', 'color-button');
colorButton.setAttribute('onclick', 'colorButtonMouseClickEvent()');
colorButton.innerHTML="Random Color";
selectGridButton.insertAdjacentElement('afterend', colorButton);


//creates slider and it's values
var slider = document.getElementById("slider");
var numberOfCells = document.getElementById("valueOfSlider");
sliderValue();
function sliderValue(){
    if(slider.value === "1"){
        numberOfCells.innerHTML = "Small";
        clearButtonMouseClickEvent();
        grid.setAttribute('style', `grid-template-rows: repeat(4, 1fr);grid-template-columns: repeat(4, 1fr);`);
        for(let i = 0; i<elementsArray.length;i++){
            elements[i].style.width = `100px`;
            elements[i].style.height = `100px`;
        }
    }
    else if (slider.value === "2"){
        numberOfCells.innerHTML = "Medium";
        clearButtonMouseClickEvent();
        grid.setAttribute('style', `grid-template-rows: repeat(16, 1fr);grid-template-columns: repeat(16, 1fr);`);
        for(let i = 0; i<elementsArray.length;i++){
            elements[i].style.width = `50px`;
            elements[i].style.height = `50px`;
        }
    }
    else{
        clearButtonMouseClickEvent();
        numberOfCells.innerHTML = "Big";
        grid.setAttribute('style', `grid-template-rows: repeat(32, 1fr);grid-template-columns: repeat(32, 1fr);`);
        for(let i = 0; i<elementsArray.length;i++){
            elements[i].style.width = `25px`;
            elements[i].style.height = `25px`;
        }
        }

    return slider.value;
}

slider.oninput = function() {
    sliderValue();
}

