const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
     specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
  },
});
