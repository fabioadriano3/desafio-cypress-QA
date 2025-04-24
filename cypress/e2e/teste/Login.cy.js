describe('Login de usuário com massa de dados', () => {
    beforeEach(() => {
      cy.fixture('massaLogin').as('usuarios'); // carrega as massas
    });
  
    it('Deve logar com sucesso com usuário válido', function () {
      const { email, senha } = this.usuarios.usuarioValido;
      cy.login(email, senha);
      cy.contains('Minha conta').should('exist');
    });
  
    it('Não deve logar com usuário inválido', function () {
      const { email, senha } = this.usuarios.usuarioInvalido;
      cy.login(email, senha);
      cy.validarMensagemErroLogin('Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.');
    });
  });
  