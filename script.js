const botao = document.querySelector("button");

botao.addEventListener("click", function () {
  const nome = prompt("Qual é o nome da sua empresa?");

  if (!nome) {
    alert("Tudo bem. Você pode testar depois.");
    return;
  }

  alert(
    `Olá! Eu sou a AtendeIA da empresa ${nome}. Como posso ajudar você hoje?`
  );
});
