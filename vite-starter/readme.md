## 🧪 Sobre os testes

Os testes verificam o comportamento do botão e do checkbox no componente, além de um helper para transformar strings no formato kebab-case para Title Case.

### 🔍 Testes principais:

- **Fluxo de clique no botão**
  - Renderiza o componente `App`.
  - Verifica a cor inicial do botão.
  - Simula um clique no botão.
  - Verifica a mudança do texto e da cor do botão.

- **Fluxo do checkbox**
  - Renderiza o componente.
  - Verifica condições iniciais do botão e checkbox.
  - Simula clique no checkbox para desabilitar o botão.
  - Verifica se o botão ficou desabilitado e mudou a cor para cinza.
  - Reabilita o botão ao desmarcar o checkbox.

- **Fluxo do checkbox após clique no botão**
  - Clica no botão para mudar sua cor.
  - Desabilita o botão via checkbox.
  - Reabilita o botão e verifica se mantém a cor correta.

- **Testes da função `kebabCaseToTitleCase`**
  - Verifica a conversão correta de strings sem hífen.
  - Verifica a conversão de strings com hífen simples e múltiplos.

[**Veja o arquivo de teste completo**](https://github.com/raffaew/testing-library-com-vite/blob/main/vite-starter/src/App.test.jsx)
