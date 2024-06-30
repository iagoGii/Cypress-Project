
/// <reference types="Cypress" />

Cypress.Commands.add('accessRegisterPage', () => {

    cy.visit('/')
        .get('.header-logo')

    cy.get('.fa-lock').click()
        .get('#user')
        .should('be.visible')
})