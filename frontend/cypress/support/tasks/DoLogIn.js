import * as logonEl from '../pages/Logon.page'

export function withTheRegisteredOng() {
    cy.readFile('cypress/fixtures/ongId.json').as('data');
    cy.get('@data').then((data) => {
        cy.get(logonEl.INPUT_USER).type(data.id);
    })

    cy.get(logonEl.BUTTON_LOGIN).click();
}