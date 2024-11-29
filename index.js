let jogador, tipoAtk;

class heroi{
  constructor(nome, idade, tipo){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  classe(){
    let classIMG = document.querySelector('.hero-img-img');

    switch (this.tipo) {
      case 'Guerreiro':
        tipoAtk = "espada";
        classIMG.src = "Imagens/guerreiro.png";
        break;

      case 'Mago':
        tipoAtk = "magia";
        classIMG.src = "Imagens/mago.png";
        break;
      
      case 'Monge':
        tipoAtk = "artes marciais";
        classIMG.src = "Imagens/monge.png";
        break;

      case 'Ninja':
        tipoAtk = "shuriken";
        classIMG.src = "Imagens/ninja.png";
        break;
    
      default:
        break;
    }
  }

  atacar(){
    window.alert(`o ${this.tipo} atacou usando ${tipoAtk}`);
  }

}

// receber nome e escrever em cima do boneco 
let entradaNome = document.querySelector("#hero-name");
let saidaNome = document.querySelector(".hero-nametag");

entradaNome.addEventListener("input", () => {
    saidaNome.innerText = entradaNome.value;
});
//////////////////////////////////////////////

// não permitir uma idade maior que 100:
const idade = document.querySelector(".idade");
function limitar(limitador) {
  if (this.value > limitador) {
    this.value = limitador;
  }
  // Permite apenas números
  this.value = this.value.replace(/[^0-9]/g, '');
}

idade.addEventListener('input', function () {
  limitar.call(idade, 100);
});
///////////////////////////////////////////

//receber classe  
let classeSelect = document.querySelector("#classes");
/////////////////

//gerar objeto dinamicamente
function criarHeroi() {
  classe = classeSelect.value;
  jogador = new heroi(entradaNome.value, idade.value, classe);
  console.log(jogador);
  jogador.classe();
}

entradaNome.addEventListener("input", () => {
  criarHeroi();
});

idade.addEventListener("input", () => {
  criarHeroi();
});

classeSelect.addEventListener("input", () => {
  criarHeroi();
});
///////////////////////////////


function ataque() {
  jogador.atacar();
}