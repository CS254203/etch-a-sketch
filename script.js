//criar div 2x2 
//criar div 16x16 
//pintar as borders das divs 
// your JavaScript file

const container = document.querySelector('.container');
for(let i = 1 ; i<=256; i++){
    container.innerHTML+='<div class = "element">'+ i +'</div>\n';
}



