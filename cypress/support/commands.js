// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('Login', () => {
    const email = 'emailForTestingv10@protonmail.com';
    const password = 'PasswordAutomationPractice.001.';

    cy.visit('/index.php?controller=authentication&back=my-account')
    cy.title().should('eq', 'Login - My Store')
    cy.location('protocol').should('eq', 'http:')
    cy.get('form[id=login_form]').within(($form) => {
        cy.get('input[id=email]').type(email)
        cy.get('input[id=passwd]').type(password)
        cy.get('button[id=SubmitLogin]').click()
    })
})