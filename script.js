const button = document.getElementById('criar-carta');
const imput = document.getElementById('carta-texto');
const father = document.getElementById('carta-gerada');

const grupoEstilo = ['newspaper', 'magazine1', 'magazine2'];
const grupoTamanho = ['medium', 'big', 'reallybig'];
const grupoRotacao = ['rotateleft', 'rotateright'];
const grupoInclinacao = ['skewleft', 'skewright'];

let palavras = [];

function creatCarta() {
  for (let i = 0; i < palavras.length; i += 1) {
    const dadosEstilo = Math.trunc(Math.random() * 4);
    const dadosTamanho = Math.trunc(Math.random() * 4);
    const dadosRotacao = Math.trunc(Math.random() * 2);
    const dadosInclinacao = Math.trunc(Math.random() * 2);

    const palavra = document.createElement('span');
    palavra.innerText = palavras[i];

    palavra.classList.add(grupoEstilo[dadosEstilo]);
    palavra.classList.add(grupoTamanho[dadosTamanho]);
    palavra.classList.add(grupoRotacao[dadosRotacao]);
    palavra.classList.add(grupoInclinacao[dadosInclinacao]);
    father.appendChild(palavra);
  }
}

function inputRead() {
  palavras = imput.value.split(' ');

  let stringVazia = imput.value.replace(/\s/g, '');

  if (imput.value.length === 0 || stringVazia.length === 0) {
    alert('Por favor, digite o conteúdo da carta.');
  } else {
    creatCarta();
  }
}

button.addEventListener('click', inputRead);


