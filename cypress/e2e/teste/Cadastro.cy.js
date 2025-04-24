describe('Cadastro', () => {
    beforeEach(() => {
      cy.fixture('massaCadastro').as('dados');
    });
  
    it('Deve cadastrar um novo usuário', function () {
      const { email, senha } = this.dados.novoUsuario;
      cy.cadastrar(email, senha);
      cy.validarMensagemErroCadastro(' Uma conta já está registrada com seu endereço de e-mail. Faça login');
      cy.contains('Minha conta').should('exist');

    });
    it('Deve falhar ao cadastrar um novo usuário', function () {
        const { email, senha } = this.dados.UsuarioCadastrado;
        cy.cadastrar(email, senha);
        cy.validarMensagemErroCadastro(' Uma conta já está registrada com seu endereço de e-mail. Faça login');
         cy.emailJaExistente(); //se habilitar esse comando o testes falha pois ja foi cadastrado
        cy.contains('Minha conta').should('exist');
  
      });
  });
  