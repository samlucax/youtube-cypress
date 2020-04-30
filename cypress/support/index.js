// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import '@shelex/cypress-allure-plugin';
// you can use require:
require('@shelex/cypress-allure-plugin');

// Alternatively you can use CommonJS syntax:
// require('./commands')

before(() => {

});

beforeEach(() => {
    // cy.server nao mantem estado entre os testes.
    // https://docs.cypress.io/api/commands/server.html#State-between-tests

    // cy.server - para route e request
    cy.server();
    cy.createOng();
});

