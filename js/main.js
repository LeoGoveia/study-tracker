import { salvarSessao } from "./storage.js";

const form = document.querySelector("#form-sessao");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const novaSessao = {
    id: Date.now(),
    tecnologia: document.querySelector("#tecnologia").value,
    data: document.querySelector("#data").value,
    horas: Number(document.querySelector("#horas").value),
    descricao: document.querySelector("#descricao").value,
  };

  salvarSessao(novaSessao);

  form.reset();
});
