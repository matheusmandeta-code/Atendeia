const formulario = document.querySelector("#formulario");
const entrada = document.querySelector("#entrada");
const mensagens = document.querySelector("#mensagens");

function adicionarMensagem(texto, tipo) {
  const novaMensagem = document.createElement("div");

  novaMensagem.className = tipo;
  novaMensagem.textContent = texto;

  mensagens.appendChild(novaMensagem);
  mensagens.scrollTop = mensagens.scrollHeight;
}

function criarResposta(texto) {
  const mensagem = texto.toLowerCase();

  if (
    mensagem.includes("oi") ||
    mensagem.includes("olá") ||
    mensagem.includes("ola")
  ) {
    return "Olá! Eu sou a AtendeIA. Como posso ajudar você hoje?";
  }

  if (
    mensagem.includes("seu nome") ||
    mensagem.includes("quem é você") ||
    mensagem.includes("quem e voce")
  ) {
    return "Meu nome é AtendeIA. Sou uma recepcionista virtual.";
  }

  if (
    mensagem.includes("preço") ||
    mensagem.includes("preco") ||
    mensagem.includes("valor")
  ) {
    return "Claro! Qual serviço você gostaria de consultar?";
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
    mensagem.includes("consulta")
  ) {
    return "Claro! Qual dia e horário você prefere?";
  }

  if (
    mensagem.includes("endereço") ||
    mensagem.includes("endereco") ||
    mensagem.includes("localização") ||
    mensagem.includes("localizacao") ||
    mensagem.includes("onde vocês ficam") ||
    mensagem.includes("onde voces ficam")
  ) {
    return "Posso enviar a localização. Qual unidade você deseja visitar?";
  }

  if (
    mensagem.includes("obrigado") ||
    mensagem.includes("obrigada")
  ) {
    return "Por nada! Estou aqui para ajudar.";
  }

  return "Entendi. Pode me explicar um pouco melhor o que você precisa?";
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const texto = entrada.value.trim();

  if (!texto) {
    return;
  }

  adicionarMensagem(texto, "usuario");

  entrada.value = "";
  entrada.focus();

  setTimeout(function () {
    const resposta = criarResposta(texto);
    adicionarMensagem(resposta, "ia");
  }, 700);
});
