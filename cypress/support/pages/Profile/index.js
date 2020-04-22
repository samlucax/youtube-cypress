const el = require('./elements').ELEMENTS;

class Profile {
  clicarNoBotaoLogout(){
    cy.get(el.button).click(); 
  }

  clicarNoBotaoCadastrarNovosCasos(){
    cy.get(el.newIncident).click();
  }

  clicarNoBotaoExcluirUmCaso(){
    cy.route('DELETE', '**/incidents/*').as('deleteIncident');

    cy.get(el.delete).click();
  }

  validarExclusaoDeCasoComSucesso(){
    cy.wait('@deleteIncident').then((xhr) => {
      expect(xhr.status).to.eq(204);
      expect(xhr.response.body).to.be.empty;
    });
  }
}

export default new Profile();