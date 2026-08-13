# 📊 Study Tracker

Aplicação simples para registrar e acompanhar sessões de estudo — tecnologia estudada, data, horas dedicadas e o que foi visto em cada sessão. Feita para acompanhar minha própria trajetória voltando para desenvolvimento frontend.

🔗 **[Ver projeto ao vivo](https://studytrackerv1.netlify.app/)**

---

## O que o projeto faz

- Cadastra sessões de estudo (tecnologia, data, horas, descrição)
- Lista todas as sessões registradas
- Calcula e exibe o total de horas estudadas por tecnologia
- Persiste os dados no navegador, sem backend

---

## Tecnologias

- HTML5 semântico
- CSS3 (variáveis, Flexbox, Grid, mobile-first)
- JavaScript (ES Modules, sem frameworks nem bibliotecas)
  Feito propositalmente sem framework — o objetivo era dominar manipulação de DOM, eventos e persistência local antes de introduzir qualquer camada de abstração por cima.

---

## Decisões técnicas

### Por que HTML semântico em vez de `<div>` genérica

A página é dividida em três `<section>` (cadastro, resumo, histórico) em vez de `<div>` empilhadas, porque cada bloco representa uma função independente da aplicação, com heading próprio. `id`s foram definidos na estrutura HTML **antes** de qualquer linha de JavaScript, já pensando em quais elementos o script precisaria selecionar depois.

### Por que Grid para o layout geral e Flexbox dentro dos componentes

O layout da página (organização das três seções na tela) usa CSS Grid, porque envolve controle em duas dimensões simultâneas (colunas e linhas). Dentro de cada componente — como o formulário, onde os campos só precisam se organizar em uma coluna — o layout usa Flexbox, porque é um problema de uma dimensão só. Usar Grid ali seria complexidade desnecessária.

### Por que variáveis CSS

Cores, espaçamentos e raio de borda estão centralizados em `:root` (`variables.css`). Isso evita repetição de valores espalhados pelo CSS e torna trivial ajustar a identidade visual do projeto inteiro a partir de um único lugar.

### Por que `rem` em vez de `px` para espaçamento e tipografia

`rem` é relativo ao `font-size` do elemento raiz, então respeita configurações de acessibilidade do usuário (aumento de fonte no navegador). `px` foi mantido apenas onde não faz sentido escalar, como bordas de 1px.

### Por que os três arquivos JS são separados

- `storage.js` — única camada que sabe ler e escrever no `localStorage`
- `render.js` — única camada que sabe transformar dados em HTML na tela
- `main.js` — orquestra: escuta eventos e chama as outras duas
  Essa separação significa que, se um dia o projeto trocar `localStorage` por uma API real, só `storage.js` precisa mudar — `render.js` e `main.js` continuam funcionando sem alteração, porque não sabem _de onde_ o dado vem, só que ele existe.

### Sobre a persistência com `localStorage`

Os dados ficam salvos apenas no navegador em que o app foi usado, isolados por origem (protocolo + domínio + porta). Isso significa que o histórico **não sincroniza** entre dispositivos nem entre navegadores diferentes — é uma limitação consciente da v1, documentada abaixo como próximo passo.

---

## Rodando localmente

O projeto usa ES Modules (`import`/`export`), então **não pode ser aberto direto como arquivo local** (`file:///...`) — o navegador bloqueia módulos nesse contexto por política de segurança. É necessário servir por um servidor local:

```bash
# com Python já instalado
python -m http.server 8000
```

Depois acesse `http://localhost:8000` no navegador.

Alternativa: extensão **Live Server** no VS Code, clicando com o botão direito em `index.html` → "Open with Live Server".

---

## Estrutura do projeto

```text
study-tracker/
├── index.html
├── css/
│   ├── variables.css   → paleta de cores, espaçamentos, tipografia
│   └── style.css       → reset, layout e componentes
├── js/
│   ├── storage.js       → persistência (localStorage)
│   ├── render.js         → renderização (dados → HTML)
│   └── main.js             → orquestração (eventos)
└── README.md
```


## Autor

Feito por **Leonan** — [GitHub](https://github.com/LeoGoveia) · [LinkedIn](https://www.linkedin.com/in/leonanmatheus/)

Projeto feito estudando frontend do zero, documentando decisões técnicas conforme aprendidas.
