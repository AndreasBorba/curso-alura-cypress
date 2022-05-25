
describe('Login e registro de usuario Alurapic', () => {
    
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
       
    })
    it('verifica mensagens validação', () => {
        // cy.get('p > a').click();
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it('verifica mensagem de e-mail inválido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('Andreas');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('verifica mensagem de senha com menos de 8 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })
    // it.only diz que é para executar somente este caso de teste
    it('verifica mensagem de nome com caractere minúsculo', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('T');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
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
    // Base de dados através de um arquivo de JSON
    var usuario = require('../../fixtures/alurapic.json');
    usuario.forEach(usuarios => {
        it.only(`cadastrar um novo usuario ${usuarios.userName}`, () => {
            console.log(usuarios);
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email"]').type(usuarios.email);
            cy.get('input[formcontrolname="fullName"]').type(usuarios.fullName);
            cy.get('input[formcontrolname="userName"').type(usuarios.userName);
            cy.get('input[formcontrolname="password"]').type(usuarios.password);
            cy.contains('button', 'Register').click();
        })
    })
})