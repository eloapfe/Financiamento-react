# Financiamento-react

# 💰 Simulador de Investimento com Juros Compostos

Aplicativo desenvolvido em **React Native + Expo** para simular investimentos mensais, mostrando o valor da parcela e o montante final com base nos juros compostos.

---
## 📌 Funcionalidade

O app permite simular o crescimento de um investimento com base em:

- Valor investido por mês
- Número de meses
- Taxa de juros mensal
- Taxas adicionais

---

## 🧠 Fórmula usada

**Montante com aportes mensais e juros compostos:**

```ts
let montante = aporteMensal * tempo;
for (let j = 1; j <= tempo; j++) {
  montante = montante + montante * (juros / 100) + aporteMensal + taxas;
}
▶️ Como executar
Clone o projeto:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/simulador-investimento.git
cd simulador-investimento
Instale as dependências:

bash
Copiar
Editar
npm install
Inicie com Expo:

bash
Copiar
Editar
npx expo start
🛠️ Tecnologias
React Native

Expo

TypeScript

Componentes nativos

