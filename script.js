const button = document.getElementById('criar-carta');
const imput = document.getElementById('carta-texto');
const father = document.getElementById('carta-gerada');
const contador = document.getElementById('carta-contador');

const grupoEstilo = ['newspaper', 'magazine1', 'magazine2'];
const grupoTamanho = ['medium', 'big', 'reallybig'];
const grupoRotacao = ['rotateleft', 'rotateright'];
const grupoInclinacao = ['skewleft', 'skewright'];

let classesEscolhidas = [];
let classesMisturadas = [];
let palavras = [];
let palavra;

let dadosEstilo;
let dadosTamanho;
let dadosRotacao;
let dadosInclinacao;
let dadosOrdenClasse; // valor entre 0 e 3
let dadosQuantidadeClasse;


function embaralharClassesEscolhidas(){
   


}

function putClass() {
  classesEscolhidas = [];
  classesEscolhidas.push(grupoEstilo[dadosEstilo]);
  classesEscolhidas.push(grupoTamanho[dadosTamanho]);
  classesEscolhidas.push(grupoRotacao[dadosRotacao]);
  classesEscolhidas.push(grupoInclinacao[dadosInclinacao]);

  embaralharClassesEscolhidas();

  console.log(classesEscolhidas);

  for (i = 0; i <= dadosQuantidadeClasse; i += 1) { // dadosQuantidadeClasse entre 0 e 3
    palavra.classList.add(classesEscolhidas[i]);
  }
  father.appendChild(palavra);
  console.log(palavra.className);
}

function jogarDados() {
  for (let i = 0; i < palavras.length; i += 1) {
    dadosEstilo = Math.trunc(Math.random() * 3);
    dadosTamanho = Math.trunc(Math.random() * 3);
    dadosRotacao = Math.trunc(Math.random() * 2);
    dadosInclinacao = Math.trunc(Math.random() * 2);
    dadosQuantidadeClasse = Math.trunc(Math.random() * 4);
    dadosOrdenClasse = Math.trunc(Math.random() * 4);

    palavra = document.createElement('span');
    palavra.innerText = palavras[i];

    putClass();
  }
}

function inputRead() {
  palavras = imput.value.split(' ');

  const stringVazia = imput.value.replace(/\s/g, '');

  if (imput.value.length === 0 || stringVazia.length === 0) {
    const alerta = document.createElement('span');
    alerta.innerText = 'Por favor, digite o conteúdo da carta.';
    alerta.id = 'carta-gerada';
    father.appendChild(alerta);
  } else {
    contador.innerText = palavras.length
    jogarDados();
  }
}

button.addEventListener('click', inputRead);
