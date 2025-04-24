class ProdutoPage {
    selecionar(nomeProduto) {
      cy.contains(nomeProduto).click();
    }
  
    configurarProduto() {
      cy.fixture('elementos').then((el) => {
        cy.get(el.produto.tamanhoM).click();
        cy.get(el.produto.corAzul).click();
      });
    }
  
    adicionarAoCarrinho() {
      cy.fixture('elementos').then((el) => {
        cy.get(el.produto.botaoAdicionar).click();
      });
    }
  
    irParaCheckout() {
      cy.fixture('elementos').then((el) => {
        cy.get(el.produto.linkFinalizar).click();
      });
    }
  
    finalizarCompra() {
      cy.fixture('elementos').then((el) => {
        cy.get(el.checkout.botaoFinalizar).click();
        cy.get(el.checkout.mensagemSucesso).should('exist');
      });
    }
  }
  
  export default new ProdutoPage();
  