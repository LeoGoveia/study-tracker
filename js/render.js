import { obterSessoes } from "./storage.js";

export function renderizarSessoes() {
  const sessoes = obterSessoes();
  const lista = document.querySelector("#lista-sessoes");

  lista.innerHTML = "";

  sessoes.forEach((sessao) => {
    const item = document.createElement("li");
    item.className = "session-card";

    item.innerHTML = `
            <div class="session-card__header">
            <span>${sessao.tecnologia}</span>
            <span>${sessao.horas}h</span>
            </div>
            <p class="session-card__desc">${sessao.data} - ${sessao.descricao}</p>
            `;

    lista.appendChild(item);
  });
}

export function renderizarTotais() {
  const sessoes = obterSessoes();
  const totais = {};

  sessoes.forEach((sessao) => {
    if (!totais[sessao.tecnologia]) {
      totais[sessao.tecnologia] = 0;
    }
    totais[sessao.tecnologia] += sessao.horas;
  });

  const lista = document.querySelector("#lista-totais");
  lista.innerHTML = "";

  Object.entries(totais).forEach(([tecnologia, horas]) => {
    const item = document.createElement("li");
    item.textContent = `${tecnologia}: ${horas}h`;
    lista.appendChild(item);
  });
}
