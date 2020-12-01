const producoes = [];

function obterProducao() {
  let producoes = document.getElementById("producoes");
  producoes = producoes.value.split("\n");
}

function adicionarProducao() {
  let pEsquerda = document.getElementById("p-esquerda").value;
  let pDireita = document.getElementById("p-direita").value;
  producoes[pEsquerda] = pDireita;
  console.log(producoes);
}
