/// <reference types="Cypress" />



describe('example to-do app', () => {
  beforeEach(() => {
    
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('[name="username"]')
    .should('be.visible')
    .type('Admin');
    cy.get('[name="password"]')
    .should('be.visible')
    .type('admin123');
    cy.contains('button', 'Login').click();
    
  })

  it('incluir candidato', () => {
    cy.get(':nth-child(5) > .oxd-main-menu-item').click();
    cy.get('.orangehrm-header-container > .oxd-button').click();
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Adriano Testes');
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Ricooo');
    cy.get('.oxd-select-text-input').click()
    cy.get(':nth-child(5) > span').click()
    cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input') .type('Adriano@Testes.com');
    cy.get('.oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('11965657665');
    cy.get('.oxd-button--secondary').click()
    cy.get('.oxd-button--success').click()
    cy.get('.--visited > .oxd-topbar-body-nav-tab-item').click()

  })

  it('Validar Inclusão', () => {
   
  cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').click()
  cy.wait (2000)
  cy.get('.oxd-autocomplete-text-input > input').type('Adriano Testes')
  .wait(2000)
  .type('{downarrow}') // Pressiona a seta para baixo para selecionar a primeira opção
  .wait(2000)
  .type('{enter}'); // Pressiona Enter para clicar na opção selecionada
  cy.get('.oxd-form-actions > .oxd-button--secondary').click()
  cy.get('.oxd-table-card > .oxd-table-row > :nth-child(3) > div')
  .should('include.text', 'Adriano Testes');
  
  })
 
 it('Exlusão', () => {


  cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').click()
  cy.wait (2000)
  cy.get('.oxd-autocomplete-text-input > input').type('Adriano Testes')
  .wait(2000)
  .type('{downarrow}') // Pressiona a seta para baixo para selecionar a primeira opção
  .wait(2000)
  .type('{enter}'); // Pressiona Enter para clicar na opção selecionada
  cy.get('.oxd-form-actions > .oxd-button--secondary').click()
  cy.get('.oxd-table-card > .oxd-table-row > :nth-child(3) > div')
  .should('include.text', 'Adriano Testes');
  cy.get('.oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click()
  cy.get('.oxd-button--label-danger').click()

cy.get('.oxd-text--toast-message')
.should('have.text', 'Successfully Deleted')

})
})
