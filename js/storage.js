const Chave_Storage = "study-sessions";

export function obterSessoes() {
  const dados = localStorage.getItem(Chave_Storage);
  return dados ? JSON.parse(dados) : [];
}

export function salvarSessao(sessao) {
  const sessoes = obterSessoes();
  sessoes.push(sessao);
  localStorage.setItem(Chave_Storage, JSON.stringify(sessoes));
}
