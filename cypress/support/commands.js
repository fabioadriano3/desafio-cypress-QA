// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import LoginPage from './pages/LoginPage';
import CadastroPage from './pages/CadastroPage';
import ProdutoPage from './pages/ProdutoPage';

Cypress.Commands.add('login', (email, senha) => {
  LoginPage.visitar();
  LoginPage.preencherLogin(email, senha);
  LoginPage.submeter();
});

Cypress.Commands.add('validarMensagemErroLogin', (mensagemEsperada) => {
    cy.get('.woocommerce-error > li')
      .should('be.visible')
      .and('contain', mensagemEsperada);
  });
  

Cypress.Commands.add('cadastrar', (email, senha) => {
    CadastroPage.visitar();
    CadastroPage.preencherCadastro(email, senha);
    CadastroPage.submeter();
  });

  Cypress.Commands.add('validarMensagemErroCadastro', (mensagemEsperada) => {
    cy.get('.woocommerce-error > li')
      .should('be.visible')
      .and('contain', mensagemEsperada);
  });
  Cypress.Commands.add('emailJaExistente', () => {
    cy.get('body').then(($body) => {
      const mensagem = 'Uma conta já está registrada com seu endereço de e-mail. Faça login';
      const erroExiste = $body.find(`.woocommerce-error > li:contains("${mensagem}")`).length > 0;
  
      if (erroExiste) {
        throw new Error('Cadastro falhou: e-mail já existente!');
      }
    });
  });
  
  
  Cypress.Commands.add('comprarProduto', (nomeProduto) => {
    cy.visit('/produtos');
    ProdutoPage.selecionar(nomeProduto);
    ProdutoPage.configurarProduto();
    ProdutoPage.adicionarAoCarrinho();
    ProdutoPage.irParaCheckout();
    ProdutoPage.finalizarCompra();
  });