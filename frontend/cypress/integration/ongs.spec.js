/// <reference types="cypress" />

import * as Start from '../support/tasks/Start'
import * as DoRegister from '../support/tasks/DoRegister'
import * as DoLogIn from '../support/tasks/DoLogIn'
import * as TheOng from '../support/questions/TheOng'

describe('Ongs', () => {
    it('Devem poder realizar um cadastro', () => {
        Start.atRegisterPage();
        DoRegister.asOngNamed("Dogs Queridos");
        TheOng.receivedAnAccessIdWhenDone();
    });

    it('Deve poder realizar login no sistema', () => {
        Start.withARegisteredOng();
        Start.atLogonPage();
        DoLogIn.withTheRegisteredOng();
    });

    it.only('Devem poder visualizar casos cadastrados', () => {
        Start.atProfilePageLogged();
    });

    it('Devem poder cadastrar novos casos', () => {
        
    });
});