class LoginPage {
    visitar() {
      cy.visit('/minha-conta');
    }
  
    preencherLogin(email, senha) {
      cy.fixture('elementos').then((el) => {
        cy.get(el.login.email).type(email);
        cy.get(el.login.senha).type(senha);
      });
    }
  
    submeter() {
      cy.fixture('elementos').then((el) => {
        cy.get(el.login.botaoLogin).click();
      });
    }
  }
  
  export default new LoginPage();
  