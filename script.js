const formulario = document.querySelector("#formulario");
const entrada = document.querySelector("#entrada");
const mensagens = document.querySelector("#mensagens");

function adicionarMensagem(texto, tipo) {
  const mensagem = document.createElement("div");

  mensagem.classList.add("mensagem", tipo);
  mensagem.textContent = texto;

  mensagens.appendChild(mensagem);
  mensagens.scrollTop = mensagens.scrollHeight;
}

function criarResposta(texto) {
  const mensagem = texto.toLowerCase();

  if (
    mensagem.includes("oi") ||
    mensagem.includes("olá") ||
    mensagem.includes("ola")
  ) {
    return "Olá! Como posso ajudar você hoje?";
  }

  if (
    mensagem.includes("preço") ||
    mensagem.includes("preco") ||
    mensagem.includes("valor")
  ) {
    return "Posso informar os preços. Qual serviço você procura?";
  }

  if (
    mensagem.includes("horário") ||
    mensagem.includes("horario") ||
    mensagem.includes("funciona")
  ) {
    return "O atendimento funciona de segunda a sábado, das 8h às 18h.";
  }

  if (
    mensagem.includes("agendar") ||
    mensagem.includes("marcar") ||
    mensagem.includes("agenda")
  ) {
    return "Claro! Qual dia e horário você prefere?";
  }

  if (
    mensagem.includes("endereço") ||
    mensagem.includes("endereco") ||
    mensagem.includes("localização") ||
    mensagem.includes("localizacao")
  ) {
    return "Posso enviar a localização. Qual unidade você deseja visitar?";
  }

  return "Entendi. Pode me explicar um pouco melhor o que você precisa?";
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const texto = entrada.value.trim();

  if (!texto) {
    return;
  }

  adicionarMensagem(texto, "cliente");
  entrada.value = "";
  entrada.focus();

  setTimeout(function () {
    const resposta = criarResposta(texto);
    adicionarMensagem(resposta, "ia");
  }, 700);
});
