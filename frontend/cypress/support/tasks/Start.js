/// <reference types="cypress" />

const HOST = "http://localhost:3000";
const BACKEND_HOST = "http://localhost:3333";
// const fs = require('fs') 

import * as utils from '../utils';

export function atRegisterPage(){
    cy.visit(`${HOST}/register`);
}

export function atLogonPage(){
    cy.visit(`${HOST}/`);
}

export function atProfilePageLogged() {
    cy.clearLocalStorage();
    // const ongId = utils.registerOngAndSaveDataAsFixture('ongRegistered');
    const createdOngId = Cypress.env('createdOngId');
    cy.log(createdOngId);
    // const ongInfo = require('../../fixtures/ongRegistered')

    cy.pause();

    cy.visit(`${HOST}/profile`, {
        onBeforeLoad: (win) => {
            win.localStorage.setItem('ongId', createdOngId);
            win.localStorage.setItem('ongName', createdOngId);
        }
    });
}

export function withARegisteredOng(){

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
    }).then((res) => {
        cy.log(res.body.id);
        cy.writeFile('cypress/fixtures/ongId.json', 
        { 
            id: res.body.id,
            name: res.body.name 
        });
    });
}