/// <reference types="cypress" />

import Logon from '../support/pages/Logon';
import Register from '../support/pages/Register';
import Profile from '../support/pages/Profile';
import NewIncident from '../support/pages/NewIncident';

describe('Ongs', () => {
    it('devem poder realizar um cadastro', () => {
        Register.acessarCadastro();
        Register.preencherCadastro();
        Register.validarCadastroDeOngComSucesso();
    });

    it('deve poder realizar um login no sistema', () => {
        Logon.acessarLogin();
        Logon.preencherLogin();
    });

    // video 2
    it('deve poder realizar logout no sistema', () => {
        cy.login();

        Profile.clicarNoBotaoLogout();
    });

    it('deve poder cadastrar novos casos', () => {
        cy.login()

        Profile.clicarNoBotaoCadastrarNovosCasos();
        NewIncident.preencherCadastroDeCaso();
        NewIncident.validarCadastroDeCasoComSucesso();
    });

    it.only('deve poder excluir um caso', () => {
        cy.createNewIncident();
        cy.login();

        Profile.clicarNoBotaoExcluirUmCaso();
        Profile.validarExclusaoDeCasoComSucesso();
    });
    
});