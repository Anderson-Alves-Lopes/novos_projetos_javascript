//Requisição Fetch


   fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=1', {
            method: 'GET'
})
.then(response => response.json())
.then(function(json){
  let container = document.querySelector('.container');
  
  json.results.map(function(val){
      
      container.innerHTML+=`
      <div class="box-filmes">
      <h2 class="title">${val.title}</h2>
      <p class="description">${val.overview}</P>
      </div>
      <hr>

      `;
  })
  let titulos = document.querySelectorAll('.title');
     for(let i = 0; i< titulos.length; i++){
        titulos[i].addEventListener('click',function(){
          let films = document.querySelectorAll('.description')[i];
          if(films.style.opacity === '1',films.style.height === 'auto'){ 
          films.style.opacity= '0';
          films.style.height = '0';
          console.log('chegou');
          }else if(films.style.height = '0', films.style.opacity= '0'){
            films.style.opacity= '1';
            films.style.height = 'auto';
          }    
            
        });
     }
})


