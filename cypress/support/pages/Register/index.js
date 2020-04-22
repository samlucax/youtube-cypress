const el = require('./elements').ELEMENTS;

class Register {
  acessarCadastro(){
    cy.visit('http://localhost:3000/register');
  }

  preencherCadastro(){
    cy.get(el.name).type('Dogs queridos');
    cy.get(el.email).type('dogs@mail.com');
    cy.get(el.whatsapp).type('51999999999');
    cy.get(el.city).type('Porto Alegre');
    cy.get(el.uf).type('RS');

    // routing
    // start server com cy.server()
    // criar uma rota com cy.route()
    // atribuir rota a um alias
    // esperar com cy.wait e fazer uma validação

    cy.route('POST', '**/ongs').as('postOng');

    cy.get(el.submit).click();
  }

  validarCadastroDeOngComSucesso(){
    cy.wait('@postOng').then((xhr) => {
      expect(xhr.status).be.eq(200);
      expect(xhr.response.body).has.property('id');
      expect(xhr.response.body.id).is.not.null;
  });
  }
}

export default new Register();