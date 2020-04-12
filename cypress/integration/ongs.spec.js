/// <reference types="cypress" />

describe('Ongs', () => {
    it('devem poder realizar um cadastro', () => {
        cy.visit('http://localhost:3000/register');
        // cy.get - busca um elemento
        // .type - insere um texto
        cy.get('[data-cy=name]').type('Dogs queridos');
        cy.get('[data-cy=email]').type('dogs@mail.com');
        cy.get('[data-cy=whatsapp]').type('51999999999');
        cy.get('[data-cy=city]').type('Porto Alegre');
        cy.get('[data-cy=uf]').type('RS');

        // routing
        // start server com cy.server()
        // criar uma rota com cy.route()
        // atribuir rota a um alias
        // esperar com cy.wait e fazer uma validação

        cy.route('POST', '**/ongs').as('postOng');

        cy.get('[data-cy=submit]').click();

        cy.wait('@postOng').then((xhr) => {
            expect(xhr.status).be.eq(200);
            expect(xhr.response.body).has.property('id');
            expect(xhr.response.body.id).is.not.null;
        });

    });

    it('deve poder realizar um login no sistema', () => {
        cy.visit('http://localhost:3000/');
        cy.get('[data-cy=id]').type(Cypress.env('createdOngId'));
        cy.get('[data-cy=submit]').click();
    });

    // video 2
    it('deve poder realizar logout no sistema', () => {
        // cy.visit('http://localhost:3000/');
        // cy.get('input').type(Cypress.env('createdOngId'));
        // cy.get('.button').click();

        // cy.visit('http://localhost:3000/profile', {
        //     onBeforeLoad: (win) => {
        //         win.localStorage.clear();
        //         win.localStorage.setItem('ongId', Cypress.env('createdOngId'));
        //         win.localStorage.setItem('ongName', 'Gatos queridos');
        //     }
        // });

        cy.login();
        cy.get('button').click();
    });

    it('deve poder cadastrar novos casos', () => {
        cy.login()

        cy.get('.button').click();

        cy.get('[data-cy=title]').type('Animal abandonado');
        cy.get('[data-cy=description]').type('Animal abando precisa de ajuda para alimentação');
        cy.get('[data-cy=value]').type(50);

        cy.route('POST', '**/incidents').as('newIncident');

        cy.get('[data-cy=submit]').click();

        cy.wait('@newIncident').then((xhr) => {
            expect(xhr.status).to.eq(200);
            expect(xhr.response.body).has.property('id');
            expect(xhr.response.body.id).is.not.null;
        });

    });

    it('deve poder excluir um caso', () => {
        cy.createNewIncident();
        cy.login();

        cy.route('DELETE', '**/incidents/*').as('deleteIncident');

        cy.get('[data-cy=delete]').click();

        cy.wait('@deleteIncident').then((xhr) => {
            expect(xhr.status).to.eq(204);
            expect(xhr.response.body).to.be.empty;
        });
    });
    
});