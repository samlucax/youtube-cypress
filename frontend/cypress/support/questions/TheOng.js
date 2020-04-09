/// <reference types="cypress" />

export function receivedAnAccessIdWhenDone() {
    cy.wait('@postOng').then((xhr) => {
        expect(xhr.status).be.eq(200);
        expect(xhr.response.body).has.property('id');
        expect(xhr.response.body.id).is.not.null;
    });
    // cy.readFile('cypress/fixtures/data.json').as('data');
    // cy.get('@data').then((data) => {
    //     cy.log(`Data: ${data.id}`);
    // })
}