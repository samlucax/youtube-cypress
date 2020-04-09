ScreenPlay - Análise pré-implementação

Atores
- Ong

Habilidades / Ações
- preencher o formulário de autenticação
- clicar no botão de entrar
- clicar no botão de realizar novo cadastro
- preencher o formulário de registro
- clicar no botão de registrar-se
- clicar no botão de cadastrar novo caso
- preencher o formulário de cadastro de casos
- clicar no botão para apagar um caso
- clicar no botão de logout

Tarefas
- Autenticar com sua id
- Registrar-se
- Cadastrar novo caso
- Apagar um caso
- Visualizar os casos na tela

Questões
- recebi um id para autenticação?
- estou na homepage?
- o caso cadastrado foi listado?
- o caso apagado aparece na listagem?


---


https://docs.cypress.io/api/commands/visit.html#Options

cy.visit('http://localhost:3000/#dashboard', {
  onBeforeLoad: (contentWindow) => {
    // contentWindow is the remote page's window object
  }
})

usar fixture como request body
https://github.com/cypress-io/cypress/issues/3387

cypress para component unit testing - react
https://github.com/bahmutov/cypress-react-unit-test