Cypress.Commands.add('login', (nome, senha) => { 
    cy.get('input[formcontrolname="userName"]').type(nome);
    cy.get('input[formcontrolname="password"]').type(senha, {log: false}); // Não mostrar a senha no LOG
    cy.get('button[type="submit"]').click();
})