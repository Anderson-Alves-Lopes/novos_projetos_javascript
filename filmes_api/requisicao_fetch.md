//Requisição Fetch


fetch('https://jsonplaceholder.typicode.com/todos/1').then(response=> response.json()).then(json=>console.log(json));


/// Cadastro Fetch

fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    body: JSON.stringify({
        title:'Alguma coisa',
        body:'Mais alguma coisa',
        userId: 10
    }),
    headers:{
        'Content-Type':'application/json;charset=UTF-8'
    }
})
.then(response=> response.json())
.then(json=>console.log(json));