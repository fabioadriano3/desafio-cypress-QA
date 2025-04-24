class CadastroPage {
    visitar() {
      cy.visit('/minha-conta');
    }
  
    preencherCadastro(email, senha) {
      cy.fixture('elementos').then((el) => {
        cy.get(el.cadastro.email).type(email);
        cy.get(el.cadastro.senha).type(senha);
      });
    }
  
    submeter() {
      cy.fixture('elementos').then((el) => {
        cy.get(el.cadastro.botaoRegistrar).click();
      });
    }
  }
  
  export default new CadastroPage();
  