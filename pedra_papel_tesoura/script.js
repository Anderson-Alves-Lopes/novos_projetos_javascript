let elementos = document.querySelectorAll('.player-options div > img');
let playerOpt = '';
let enemyOpt = '';
const enemyOptions = document.querySelectorAll('.enemy-options img');

function validarVitoria(){
   let vencedor = document.querySelector('.vencedor');
   if(playerOpt === 'paper'){
       
    if(enemyOpt === 'paper'){
      vencedor.innerHTML = 'Empate!';

    }else if(enemyOpt === 'scissor'){
       vencedor.innerHTML = 'Você perdeu!';
    }else if(enemyOpt === 'rock'){
      vencedor.innerHTML = 'Você ganhou!';
    }
   }
   if(playerOpt === 'scissor'){
       
    if(enemyOpt === 'scissor'){
      vencedor.innerHTML = 'Empate!';

    }else if(enemyOpt === 'rock'){
       vencedor.innerHTML = 'Você perdeu!';
    }else if(enemyOpt === 'paper'){
      vencedor.innerHTML = 'Você ganhou!';
    }
   }
   if(playerOpt === 'rock'){
       
    if(enemyOpt === 'rock'){
      vencedor.innerHTML = 'Empate!';

    }else if(enemyOpt === 'paper'){
       vencedor.innerHTML = 'Você perdeu!';
    }else if(enemyOpt === 'scissor'){
      vencedor.innerHTML = 'Você ganhou!';
    }
   }

}
function resetEnemy(){
  
  for(let i = 0; i < enemyOptions.length; i++){
      enemyOptions[i].style.opacity = '0.3';
    
  }

}

function enemyPlay(){
  let rand = Math.floor(Math.random()* 3);
 
  
  resetEnemy();
  for(let i = 0; i < enemyOptions.length; i++){
    if( i == rand){
      enemyOptions[i].style.opacity = '1';
      enemyOpt = enemyOptions[i].getAttribute('opt');
    }
  }

  validarVitoria();
  // alert(playerOpt);
  // alert(enemyOpt);
}
function resetOpacityPlayer(){
   for(let i = 0; i < elementos.length; i++){
    elementos[i].style.opacity = '0.3';
   }
}
for(let i = 0; i < elementos.length; i++){
  elementos[i].addEventListener('click',function(tar){
    resetOpacityPlayer();
    tar.target.style.opacity = '1';
    playerOpt = tar.target.getAttribute('opt');

    enemyPlay();    
  });
}