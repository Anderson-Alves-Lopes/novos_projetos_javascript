Receita de bolo para requisição Ajax


//onload = carregando
//parse = analizar
//send = mandar

setTimeout(function(){
    let request = new XMLHttpRequest();
    request.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
    
    request.onload = function(){
        if(this.status >= 200 && this.status < 400){
    
          let data = JSON.parse(this.response);
          console.log(data);
        }else{;
            
        }
    }
    
    request.onerror = function(){
    
    
    }
    request.send();
},2000);
