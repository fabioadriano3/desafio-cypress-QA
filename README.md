
# README - Projeto de Testes E2E com Cypress

## ⚡ Descrição

Este projeto automatiza testes E2E para o site **lojaebac.ebaconline.art.br** utilizando o framework **Cypress**. O projeto está estruturado com **Page Object Pattern** e **Comandos Customizados** para garantir testes mais limpos, reutilizáveis e escaláveis. Ele é dividido em funcionalidades específicas como **Login**, **Cadastro** e **Compra de Produtos**.

---

## 📦 Como Instalar

### 1. **Clone o repositório**

Se você ainda não clonou o repositório, execute o comando:

```bash
git clone https://github.com/fabioadriano3/desafio-cypress-QA
```

### 2. **Instale as dependências**

Dentro da pasta do projeto, execute:

```bash
npm install
```

Isso vai instalar todas as dependências necessárias para o projeto, incluindo o Cypress.

---

## 🖥️ Como Rodar os Testes

### 1. **Executar todos os testes**

Para rodar todos os testes em modo **gráfico (GUI)**, execute o seguinte comando:

```bash
npx cypress open
```

Isso abrirá a interface gráfica do Cypress, onde você poderá ver e executar os testes.

### 2. **Executar todos os testes em **modo headless**

Se você preferir executar os testes sem a interface gráfica (modo headless), basta usar o comando:

```bash
npx cypress run
```

Isso irá rodar todos os testes sem abrir o navegador, e você verá os resultados no terminal.

---


## 🧪 Como Rodar Testes de uma Pasta Específica

Você pode rodar os testes de **uma pasta específica** usando o comando `npx cypress run` e passando o caminho da pasta de testes.

### 1. **Executar testes da pasta `login`**

Para rodar todos os testes da pasta `login`, execute:

```bash
npx cypress run --spec "cypress/e2e/login/*.cy.js"
```

### 2. **Executar testes da pasta `cadastro`**

Para rodar todos os testes da pasta `cadastro`, execute:

```bash
npx cypress run --spec "cypress/e2e/cadastro/*.cy.js"
```

### 3. **Executar testes da pasta `produtos`**

Para rodar todos os testes da pasta `produtos`, execute:

```bash
npx cypress run --spec "cypress/e2e/produtos/*.cy.js"
```

### 4. **Executar testes de uma pasta específica em modo gráfico (GUI)**

Você também pode abrir o Cypress em modo gráfico para rodar testes de uma pasta específica. Para isso, use:

```bash
npx cypress open --spec "cypress/e2e/login/*.cy.js"
```

Isso abrirá o Cypress em modo gráfico e permitirá que você escolha os testes da pasta `login`.

---

## 💡 Estrutura do Projeto

Abaixo, a explicação de como o projeto está estruturado:

```
cypress/
├── fixtures/             # Dados de teste e seletores
│   ├── elementos.json    # Seletores de elementos do site
│   ├── massaLogin.json   # Dados para login
│   ├── massaCadastro.json # Dados para cadastro
│   └── massaProdutos.json # Dados de produtos
│
├── support/              # Configurações globais, comandos e Page Objects
│   ├── commands.js       # Comandos customizados (ex: cy.login())
│   └── pages/            # Page Objects para diferentes páginas do site
│       ├── LoginPage.js  # Página de Login
│       ├── CadastroPage.js  # Página de Cadastro
│       └── ProdutoPage.js  # Página de Produto
│
├── e2e/                  # Diretório com os testes E2E
│   ├── login/            # Testes relacionados ao login
│   │   └── login.cy.js   # Teste de login
│   ├── cadastro/         # Testes relacionados ao cadastro
│   │   └── cadastro.cy.js  # Teste de cadastro
│   └── produtos/         # Testes relacionados a produtos
│       └── compra.cy.js  # Teste de compra de produto
│
cypress.config.js         # Arquivo de configuração do Cypress
```

---

## ⚙️ Configuração

1. **Configuração do Cypress**: O arquivo `cypress.config.js` contém a configuração básica para o projeto, incluindo a **baseUrl** do site, que é utilizado para encurtar os links nos testes (por exemplo, `cy.visit('/minha-conta')`).

2. **Comandos Customizados**: O arquivo `commands.js` contém os comandos reutilizáveis como `cy.login()`, `cy.cadastrar()`, e `cy.comprarProduto()`.

3. **Page Objects**: As classes `LoginPage.js`, `CadastroPage.js`, e `ProdutoPage.js` organizam os elementos e ações nas páginas, facilitando a manutenção e reutilização.

---

## 🔄 Exemplos de Testes

### Teste de Login

O teste de login utiliza a massa de dados de `massaLogin.json` e a página `LoginPage.js` para preencher os campos de email e senha e submeter o formulário.

### Teste de Cadastro

O teste de cadastro é feito na página de cadastro, onde os dados de `massaCadastro.json` são usados para preencher o formulário de registro.

### Teste de Compra de Produto

No teste de compra de produto, o Cypress visita a página de produtos, escolhe o produto, configura o tamanho e cor, adiciona ao carrinho e finaliza a compra.

---

## 🛠️ Problemas Comuns

### 1. **Erro ao não encontrar o arquivo `elementos.json`**
Se o Cypress não conseguir encontrar o arquivo `elementos.json`, verifique se o arquivo está na pasta `cypress/fixtures/` e se a extensão é `.json`.

---

## 📄 Conclusão

Agora você tem um projeto organizado e pronto para rodar testes E2E no **lojaebac.ebaconline.art.br**! Os testes podem ser executados tanto de forma interativa, na interface gráfica do Cypress (GUI), quanto de forma automática no modo headless, o que é ideal para integração contínua (CI).

Se precisar de mais alguma coisa, é só avisar!
