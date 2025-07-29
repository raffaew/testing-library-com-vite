<img width="1137" height="403" alt="image" src="https://github.com/user-attachments/assets/1a20a995-eadd-48d9-ac1d-7e18a71c3f1d" />


# 📝 To-Do List com Testes Automatizados

Este projeto é uma aplicação simples de lista de tarefas (**To-Do List**) construída em React com funcionalidades de **adicionar**, **editar**, **concluir** e **excluir** tarefas. Os testes automatizados foram desenvolvidos para garantir a confiabilidade da interface e do comportamento dos componentes.

---

## 🧪 Testes da Aplicação To-Do List

Este conjunto de testes cobre o comportamento de uma aplicação de lista de tarefas (To-Do List), composta por um formulário de criação de tarefas, uma lista dinâmica, e botões para edição, conclusão e exclusão das tarefas.

📁 Acesse os testes diretamente em:  
[`page-to-do-list/src/components/tests`](./src/components/tests)

---

## 🔍 Sobre os testes

Os testes verificam:

- A renderização correta dos componentes principais
- A captura e envio dos dados via formulário
- O funcionamento das ações de **adicionar**, **editar**, **concluir** e **excluir** tarefas

---

## 🧪 Testes principais

### 🔹 1. Renderização inicial

- Renderiza o componente `App` com seus filhos
- Verifica se o **formulário** e os **botões** estão visíveis na tela
- Garante que a lista de tarefas inicia vazia

---

### 🔹 2. Adição de tarefas

- Digita uma nova tarefa no input do formulário
- Clica no botão "Adicionar"
  - ✅ A nova tarefa deve **aparecer na lista**
  - ✅ O input deve ser **limpado automaticamente**

---

### 🔹 3. Conclusão de tarefas

- Marca o checkbox da tarefa adicionada
  - ✅ O estado de conclusão deve ser **alterado**
  - ✅ A interface deve refletir visualmente essa mudança

---

### 🔹 4. Edição de tarefas

- Clica no botão "Editar"
- Modifica o texto da tarefa
- Salva a edição
  - ✅ O novo texto deve **aparecer na lista**
  - ✅ O campo de edição deve ser **fechado**

---

### 🔹 5. Exclusão de tarefas

- Clica no botão "Excluir"
  - ✅ A tarefa correspondente deve ser **removida da lista**

---

## 🧩 Componentes envolvidos

### 🧷 Item

- Recebe os dados da tarefa (`id`, `texto`, `concluída`)
- Renderiza o conteúdo com ações de **editar**, **concluir** e **excluir**

### 🧷 Lista

- Agrupa os itens em um array
- Renderiza dinamicamente os componentes `Item`
- Comunica com o componente pai (`App`) para atualizar o estado global das tarefas

---

## 🧰 Tecnologias utilizadas

- `@testing-library/react`  
- `@testing-library/user-event`  
- `Jest` / `Vitest`

---

## ▶️ Como rodar os testes

```bash
# Com npm
npm test

# Ou se estiver usando Vitest
npx vitest run
