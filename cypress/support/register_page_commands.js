/// <reference types="Cypress" />


//Elementos
const elements = {

    buttons: {

        register: '#btnRegister'
    },

    fields: {

        name: '#user',
        email: '#email',
        password: '#password',
    },

    messages: {

        error: '.errorLabel',
        successTitle: '#swal2-title',
        successSubtitle: '#swal2-html-container'
    }
}



//Ações/Métodos/Funções

Cypress.Commands.add('SaveRegister', () => {
    cy.get(elements.buttons.register).click()

})


Cypress.Commands.add('fillName', (name) => {
    cy.get(elements.fields.name).type(name)

})


Cypress.Commands.add('fillEmail', (email) => {
    cy.get(elements.fields.email).should('be.visible').type(email)

})


Cypress.Commands.add('fillPassword', (password) => {
    cy.get(elements.fields.password).should('be.visible').type(password)

})

Cypress.Commands.add('checkRegisterSucess', (name) => {

    cy.get(elements.messages.successTitle).should('have.text', 'Cadastro realizado!')
    cy.get(elements.messages.successSubtitle).should('have.text', `Bem-vindo ${name}`)

})

Cypress.Commands.add('messageError', (message) =>{
    cy.get(elements.messages.error).should('have.text', message)
})