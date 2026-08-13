const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor da AtendeIA funcionando!");
});

app.post("/chat", async (req, res) => {
  try {
    const { mensagem } = req.body;

    if (!mensagem) {
      return res.status(400).json({
        erro: "Digite uma mensagem."
      });
    }

    const resposta = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-5-mini",

        instructions: `
Você é a AtendeIA, uma recepcionista virtual inteligente.

Sua função é atender clientes de empresas de forma educada,
natural, rápida e profissional.

REGRAS:
- Responda sempre em português do Brasil.
- Seja simpática e objetiva.
- Não diga que é ChatGPT.
- Apresente-se como AtendeIA quando perguntarem quem você é.
- Ajude clientes com dúvidas, serviços, preços, horários e agendamentos.
- Nunca invente informações sobre uma empresa.
- Se não souber uma informação, diga que precisa confirmar.
- Faça uma pergunta por vez quando precisar de mais informações.
- Evite respostas muito longas.

Seu objetivo é fazer o cliente sentir que está conversando
com uma excelente recepcionista.
        `,

        input: mensagem
      })
    });

    const dados = await resposta.json();

    if (!resposta.ok) {
      console.error(dados);

      return res.status(resposta.status).json({
        erro: "Erro ao consultar a IA."
      });
    }

    res.json({
      resposta: dados.output_text
    });

  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      erro: "Erro interno do servidor."
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
