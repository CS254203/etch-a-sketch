function mouseOverEvent(){
    const myall = Array.from(document.querySelectorAll('.element'));
    const elements = document.querySelectorAll('.element');
    document.addEventListener('mouseover', (e) => {
       if(e.target.classList.contains('element')){
          elements[myall.indexOf(e.target)].style.background="red"; 
        }
    });
}

function mouseClickEvent(){
    const elementsArray = Array.from(document.querySelectorAll('.element'));
    const elements = document.querySelectorAll('.element');
    console.log(elementsArray.length);
    for(let i = 0; i<elementsArray.length;i++){
    elements[i].style.background ="white";
    }
}

//creates grid
const container = document.querySelector('.container');
for(let i = 0 ; i<256; i++){
    container.innerHTML+='<div class = "element" onmouseover="mouseOverEvent()"></div>\n';
}

const buttonContainer = document.createElement('div');
buttonContainer.setAttribute('id', 'button-container');
const button = document.createElement('button');
button.setAttribute('id', 'clear-button');
button.setAttribute('onclick', 'mouseClickEvent()');
button.innerHTML="Clear!";
buttonContainer.append(button)
container.insertAdjacentElement('afterend', buttonContainer);

//beforebegin

//investigar a situaçao de inserir uma variavel no css 