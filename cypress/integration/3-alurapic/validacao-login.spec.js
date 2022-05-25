
describe('Login e registro de usuario Alurapic', () => {
    
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
       
    })

    it('fazer login de um usuário válido', () => {
        cy.login('flavio', '123');
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