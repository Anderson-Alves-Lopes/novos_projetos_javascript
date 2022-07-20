Manipulando o DOM


let element = document.getElementsByClassName('box');

for(let i =0; i < element.length; i++){
let el = element[i];

el.style.width = '100px';
el.style.height = '100px';
el.style.backgroundColor = '#ff0000';
el.style.margin = '20px auto';
el.style.border = '5px solid #000'
}