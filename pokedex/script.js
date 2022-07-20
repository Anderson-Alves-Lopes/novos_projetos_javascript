
let quantidade = document.getElementById('quantidade');
  quantidade.addEventListener('keyup',() =>{
     pegaPokemon(quantidade.value);
  })
pegaPokemon(1);
function pegaPokemon(quantidade){


    
fetch('https://pokeapi.co/api/v2/pokemon?limit='+quantidade)
.then(response => response.json())
.then(allpokemon => {
    let pokemons = [];
    allpokemon.results.map((val) =>{
        
         
          
          fetch(val.url)
         .then(response => response.json())
         .then(pokemonSingle => {
            pokemons.push({nome:val.name, imagem:pokemonSingle.sprites.front_default});
            if(pokemons.length == quantidade){
              
                let pokemonBoxes = document.querySelector('.pokemon-boxes');
                pokemonBoxes.innerHTML = '';
                pokemons.map(function(val){
                    pokemonBoxes.innerHTML += `
                    
                    <div class="pokemon-box">
                    <img src="${val.imagem}"/>
                    <p>${val.nome}</p>
                  </div>
                    
                    `;
                })
                
               //   
    
            
            }

    });
    });
   
})
}