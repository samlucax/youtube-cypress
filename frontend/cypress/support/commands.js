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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

const BACKEND_HOST = "http://localhost:3333";

// comando para criar uma ong antes dos testes
Cypress.Commands.add("createOng", () => {
    // let ongId = 'piça';

    cy.request({
        method: 'POST',
        url: `${BACKEND_HOST}/ongs`,
        headers: { Accept: 'application/json' },
        body: {
            name: 'Dogs Queridos',
            email: 'dogs@mail.com',
            whatsapp: '51999999999',
            city: 'Porto Alegre',
            uf: 'RS'
        }
    }).then(response => {
        // return "c2a5929d";
        Cypress.env('createdOngId', response.body.id);
        // ongId = response.body.id;
    });

    // return ongId;
})
