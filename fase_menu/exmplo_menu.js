let box = document.querySelector('.box');

// setTimeout(function(){
//   box.classList.add('animEsquerda');
// },1000);
box.addEventListener('click', ()=>{
    let el = document.querySelector('box');
    
    if(el.classList.contains('animEsquerda')){
        el.classList.remove('animEsquerda');
    }else{
        el.classList.add('animEsquesda');
    }
    
});

let span = document.querySelector('.conteudo span');
 span.addEventListener('click',function(){
  let conteudo = document.querySelector('.conteudo p');

   if(conteudo.classList.contains('mostrar')){
    span.innerHTML = 'Ver mais!';
    conteudo.classList.remove('mostrar');
   }else{
    span.innerHTML = 'Ver menos!';
    conteudo.classList.add('mostrar');
   }
});