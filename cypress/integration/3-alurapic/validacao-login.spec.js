
describe('Login e registro de usuario Alurapic', () => {
    
    beforeEach(() => {
        cy.visit('/');
        /* Criando um stub para LOGIN inválido
        cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', {
            statusCode: 400,
        }).as('stubPost')
        */
       
    })

    it('fazer login de um usuário válido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        // Aplicando o stub através da função wait
        // cy.wait('@stubPost')
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('realizar login de um usuário inválido', () => {
        cy.login('flavio', '1234');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        /*
        Validação do Modal
        cy.on('window:alert', (str) => {
        expect(str).to.equal('Invalid user name or password');
        })
        */
    })
    
})