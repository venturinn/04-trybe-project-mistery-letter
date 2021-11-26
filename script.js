const button = document.getElementById('criar-carta');
const imput = document.getElementById('carta-texto');
const father = document.getElementById('carta-gerada');
const contador = document.getElementById('carta-contador');
const listaSpans = document.getElementsByTagName('span');

const grupoEstilo = ['newspaper', 'magazine1', 'magazine2'];
const grupoTamanho = ['medium', 'big', 'reallybig'];
const grupoRotacao = ['rotateleft', 'rotateright'];
const grupoInclinacao = ['skewleft', 'skewright'];

let classesEscolhidas = [];
let classesMisturadas = [];
let palavras = [];
let palavra;
let elementoClicado;

let dadosEstilo;
let dadosTamanho;
let dadosRotacao;
let dadosInclinacao;
let dadosOrdenClasse;
// let dadosQuantidadeClasse;

function embaralharClassesEscolhidas() {
  classesMisturadas = [];

  for (let i = 0; i <= 3; i += 1) {
    dadosOrdenClasse = Math.trunc(Math.random() * (4 - i));
    const classeRetirada = classesEscolhidas.splice(dadosOrdenClasse, 1);

    classesMisturadas.push(classeRetirada[0]);
  }
}

function putClass() {
  classesEscolhidas = [];
  classesEscolhidas.push(grupoEstilo[dadosEstilo]);
  classesEscolhidas.push(grupoTamanho[dadosTamanho]);
  classesEscolhidas.push(grupoRotacao[dadosRotacao]);
  classesEscolhidas.push(grupoInclinacao[dadosInclinacao]);

  embaralharClassesEscolhidas();

  for (let i = 0; i <= 3; i += 1) { // dadosQuantidadeClasse entre 0 e 3
    palavra.classList.add(classesMisturadas[i]);
  }
  father.appendChild(palavra);
}

function jogarDados() {
  for (let i = 0; i < palavras.length; i += 1) {
    dadosEstilo = Math.trunc(Math.random() * 3);
    dadosTamanho = Math.trunc(Math.random() * 3);
    dadosRotacao = Math.trunc(Math.random() * 2);
    dadosInclinacao = Math.trunc(Math.random() * 2);
    // dadosQuantidadeClasse = Math.trunc(Math.random() * 4);
    dadosOrdenClasse = Math.trunc(Math.random() * 4);

    palavra = document.createElement('span');
    palavra.innerText = palavras[i];

    putClass();
  }
}

function inputRead() {
  for (;listaSpans.length > 0;) {
    father.removeChild(listaSpans[0]);
  }
  const tirarEpaco = imput.value.trim();
  palavras = tirarEpaco.split(' ');
  const stringVazia = imput.value.replace(/\s/g, '');

  if (imput.value.length === 0 || stringVazia.length === 0) {
    const alerta = document.createElement('span');
    alerta.innerText = 'Por favor, digite o conteúdo da carta.';
    alerta.id = 'carta-gerada';
    father.appendChild(alerta);
    contador.innerText = 0;
  } else {
    contador.innerText = palavras.length;
    jogarDados();
  }
}

button.addEventListener('click', inputRead);

function gerarNovasClasses() {
  dadosEstilo = Math.trunc(Math.random() * 3);
  dadosTamanho = Math.trunc(Math.random() * 3);
  dadosRotacao = Math.trunc(Math.random() * 2);
  dadosInclinacao = Math.trunc(Math.random() * 2);
  // dadosQuantidadeClasse = Math.trunc(Math.random() * 4);
  dadosOrdenClasse = Math.trunc(Math.random() * 4);

  classesEscolhidas = [];
  classesEscolhidas.push(grupoEstilo[dadosEstilo]);
  classesEscolhidas.push(grupoTamanho[dadosTamanho]);
  classesEscolhidas.push(grupoRotacao[dadosRotacao]);
  classesEscolhidas.push(grupoInclinacao[dadosInclinacao]);

  embaralharClassesEscolhidas();

  for (let i = 0; i <= 3; i += 1) {
    elementoClicado.classList.add(classesMisturadas[i]);
  }
}

function mudarPalavra(event) {
  elementoClicado = event.target;

  console.log(elementoClicado);

  if (elementoClicado.tagName === 'SPAN') {
    elementoClicado.className = '';
    gerarNovasClasses();
  }
}

father.addEventListener('click', mudarPalavra);
