# Bebidas Web 🍻

Este projeto é a interface web de um sistema de cardápio de bebidas. Usuários podem visualizar bebidas, adicionar ao carrinho, cadastrar-se, fazer login, gerenciar perfil, endereços, métodos de pagamento e realizar pedidos.

## 🧱 Tecnologias Utilizadas

- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- Backend em Node.js com Sequelize (em outro repositório)

---

## ⚙️ Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/bebidas-web.git
cd bebidas-web
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure a URL da API

No arquivo `src/services/api.js`, verifique se o endereço da API backend está correto:

```js
const api = axios.create({
  baseURL: 'http://localhost:3000', // ajuste se necessário
});
```

### 4. Rode o projeto

```bash
npm start
```

Acesse no navegador: [http://localhost:3001](http://localhost:3001)

---

## 📁 Estrutura de Pastas

```
src/
├── components/        # Componentes reutilizáveis (ex: MenuInferior)
├── pages/             # Páginas do sistema (Login, Cadastro, Cardápio, etc.)
├── services/          # Serviços de conexão com a API (axios)
├── App.js             # Rotas principais
├── index.js           # Entrada do app React
```

---

## ✅ Funcionalidades

- Cadastro e login de usuários
- Visualização de cardápio
- Carrinho de compras
- Finalização de pedidos
- Tela de pedidos realizados
- Gestão de perfil, endereços e pagamentos

---

## 🔐 Autenticação

O login armazena um `token JWT` no `localStorage`, que pode ser utilizado para autenticação nas requisições protegidas ao backend.

---

## 🛠️ Scripts Disponíveis

- `npm start` – Inicia o app em modo desenvolvimento (`http://localhost:3001`)
- `npm run build` – Gera a build de produção
- `npm test` – Inicia os testes

---

## 📦 Requisitos

- Node.js
- npm
- Backend disponível na porta `3000`

---

## 📌 Observações

Este projeto é apenas a **parte frontend**. Para funcionamento completo, clone e execute também o repositório do backend (`bebidas-api`).

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).