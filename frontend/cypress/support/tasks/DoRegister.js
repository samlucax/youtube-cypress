/// <reference types="cypress" />

import * as registerPage from '../pages/Register.page'

export function asOngNamed(name){
    cy.get(registerPage.INPUT_NAME).type(name)
    cy.get(registerPage.INPUT_EMAIL).type("dogs@mail.com")
    cy.get(registerPage.INPUT_WHATSAPP).type("5551999999999")
    cy.get(registerPage.INPUT_CITY).type("Porto Alegre")
    cy.get(registerPage.INPUT_UF).type("RS")

    cy.route('POST', '**/ongs').as('postOng');

    cy.get(registerPage.BUTTON_SUBMIT).click();

}