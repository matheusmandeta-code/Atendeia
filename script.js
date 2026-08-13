const formulario = document.querySelector("#formulario");
const entrada = document.querySelector("#entrada");
const mensagens = document.querySelector("#mensagens");

const API_URL = "https://atendeia-production.up.railway.app";

function adicionarMensagem(texto, tipo) {
  const novaMensagem = document.createElement("div");

  novaMensagem.className = tipo;
  novaMensagem.textContent = texto;

  mensagens.appendChild(novaMensagem);
  mensagens.scrollTop = mensagens.scrollHeight;
}

formulario.addEventListener("submit", async function (evento) {
  evento.preventDefault();

  const texto = entrada.value.trim();

  if (!texto) {
    return;
  }

  adicionarMensagem(texto, "usuario");

  entrada.value = "";
  entrada.focus();

  adicionarMensagem("Pensando...", "ia");

  const mensagemPensando = mensagens.lastElementChild;

  try {
    const resposta = await fetch(`${API_URL}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        mensagem: texto
      })
    });

    const dados = await resposta.json();

    mensagemPensando.remove();

    if (!resposta.ok) {
      adicionarMensagem("Não consegui responder agora. Tente novamente.", "ia");
      console.error(dados);
      return;
    }

    adicionarMensagem(dados.resposta, "ia");

  } catch (erro) {
    mensagemPensando.remove();

    adicionarMensagem(
      "Não consegui me conectar ao servidor. Tente novamente.",
      "ia"
    );

    console.error(erro);
  }
});
