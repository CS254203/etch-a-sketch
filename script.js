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
