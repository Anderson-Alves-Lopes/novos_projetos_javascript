

let elementos = document.querySelectorAll('[type=radio]');

   for(let i =0; i < elementos.length; i++){
      
    elementos[i].addEventListener('change',function(b){
        let marcado = b.target.value;
        
        if(marcado === 'correta'){
          let parentNode = b.target.parentNode;
           parentNode.style.backgroundColor = '#00ff00';

           let bels = parentNode.parentNode.querySelectorAll('[type=radio]');

           for(let n = 0; n < bels.length; n++ ){
            bels[n].disabled = true;
           }
        }else if(marcado === 'incorreta'){
            let parentNode = b.target.parentNode;
            parentNode.style.backgroundColor = '#ff0000';
            let bels = parentNode.parentNode.querySelectorAll('[type=radio]');
            for(let n = 0; n < bels.length; n++ ){
                bels[n].disabled = true;
                
               }
               let correta = parentNode.parentNode.querySelector('[value=correta]');
                 correta.parentNode.style.backgroundColor = '#00ff00';
        }
    });

   }