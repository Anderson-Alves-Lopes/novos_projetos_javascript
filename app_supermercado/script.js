let items = [];


document.querySelector('input[type=submit]').addEventListener('click',() =>{
    let nomeProduto = document.querySelector('input[name=nome_produto');
    let precoProduto = document.querySelector('input[name=price');

    items.push({
        nome: nomeProduto.value,
        valor:precoProduto.value
    });
  
    /*
    <div class="lista-produto-single">
            <h3>RedBull</h3>
            <span>R$20,00</span>
         </div><!--lista-produto-single-->
    */
   let listaProdutos =document.querySelector('.lista-produto');
   let soma = 0;
   listaProdutos.innerHTML = '';
       items.map(function(val){
        soma += parseFloat(val.valor);
        
          listaProdutos.innerHTML +=`
          
          <div class="lista-produto-single">
            <h3>${val.nome}</h3>
            <span>R$${val.valor}</span>
         </div>
          
          `;
       });
       soma = soma.toFixed(2);
       nomeProduto.value = '';
       precoProduto.value = '';

       let elementoSoma = document.querySelector('.soma-produtos h1');
       elementoSoma.innerHTML = `Total : R$${soma}`;
});
document.querySelector('button[name=limparUm]').addEventListener('click', ()=>{
   
    for(let i = 0;i < items; i++){
        if(i === items[i]){
            
    items.splice(-1,1);
    document.querySelector('.lista-produto-single').innerHTML = '';
    }
}

});

document.querySelector('button[name=limpar]').addEventListener('click', ()=>{
    items = [];

    document.querySelector('.lista-produto').innerHTML = '';
    document.querySelector('.soma-produtos h1').innerHTML = 'R$0';
});