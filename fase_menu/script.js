
let menu = document.querySelector('.abrirMenu');

menu.addEventListener('click',function(){
  let abrirMenu = document.querySelector('.menu');
  if(abrirMenu.classList.contains('menuOpen')){

    abrirMenu.classList.remove('menuOpen');
  }else{
    abrirMenu.classList.add('menuOpen');
  }

    

});