## 🧪 Testes do Componente SummaryForm

Este teste cobre o comportamento de um formulário de resumo (`SummaryForm`) com um botão de confirmação, um checkbox de aceitação de termos e um popover de ajuda.

---

## 🔍 Sobre os testes

Os testes verificam:

- O comportamento do **botão** e do **checkbox**
- A exibição do **popover** ao interagir com o texto "terms and conditions"

---

## 🧪 Testes principais

### 🔹 1. Estado inicial

- Renderiza o componente `SummaryForm`
- Verifica que o **checkbox** está **desmarcado**
- Verifica que o **botão** "Confirm Order" está **desabilitado**

---

### 🔹 2. Fluxo do checkbox

- Marca o checkbox
  - ✅ O botão deve ser **habilitado**
- Desmarca o checkbox
  - ✅ O botão deve voltar a ser **desabilitado**

---

### 🔹 3. Comportamento do popover

- Garante que o **popover** com a mensagem "No ice cream will actually be delivered" está **escondido inicialmente**
- Simula o **hover** sobre o texto "terms and conditions"
  - ✅ O popover deve **aparecer**
- Simula o **unhover**
  - ✅ O popover deve **desaparecer**

---

## 🧰 Tecnologias utilizadas

- `@testing-library/react`
- `@testing-library/user-event`
- `Jest` ou `Vitest`

---

## ▶️ Como rodar os testes

```bash
# Com npm
npm test

# Ou se estiver usando Vitest
npx vitest run
