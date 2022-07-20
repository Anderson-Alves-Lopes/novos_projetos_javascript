class Animal {
    constructor(nome){
        this.nome = nome;
    }
    printNome(){
       return this.nome;
    }
}
class Cachorro extends Animal{
    constructor(nome){
        super(nome);
        this.raca = 'vira lata';
        this.peso = '15kg';
        this.idade = '10 anos'
    }
    listaNome(){
        document.querySelector('body').innerHTML = 
        `<ul class="box">
          <li>${this.raca}</li>
          <li>${this.peso}</li>
          <li>${this.idade}</li>
        
        </ul>`;
    }
    printRaca(){
        return this.raca;
    }

}

cachorro = new Cachorro();
cachorro.listaNome();
alert(cachorro.printRaca());



//==//==//==//==//==//
let date = new Date('11/08/2020');

let date_2 = new Date('12/10/2020');
let calcularTempo = (1000 * 3600 * 24 );
let newDate = (date_2.getTime() - date.getTime()) / calcularTempo;
console.log(newDate);

//==//==//==//==//==//==//

let p = document.getElementsByTagName('p');



for(let i = 0; i < 10; i++){
    p[0].innerHTML = p[0].innerHTML +i;
}