/// <reference types="cypress" />

describe('Smoke test buy a product', () => {

    const user = 'Testing Purpose'
    const product = 'Faded Short Sleeve T-shirts'

    before(('Sign in'), function(){
        cy.Login();
    });
    beforeEach(() => {
        cy.getCookie('PrestaShop-a30a9934ef476d11b6cc3c983616e364')
        .should('exist')
        .then((c) => {
            return c
        }).as('token')
        Cypress.Cookies.preserveOnce('PrestaShop-a30a9934ef476d11b6cc3c983616e364', '@token' )
    })

    it('Verify login', function(){
        cy.get('.header_user_info').find('span').should('have.text',user)
    }); 

    it('Add to cart', function() {
        cy.get('.menu-content').children().last().contains("T-shirts").click()
        cy.get('.product_list').first().contains("Add to cart").click()
        cy.get('.clearfix').contains('Proceed to checkout').click()
        cy.get('#cart_summary').contains(product).should('have.text',product)
    })

    it('Checkout', function() {
        Cypress._.times(2, () => cy.get('.cart_navigation').contains('Proceed to checkout').click())
        cy.get('input[type=checkbox]').check()
        cy.get('.cart_navigation').contains('Proceed to checkout').click() 
        cy.get('.bankwire').click()
        cy.get('#cart_navigation').contains('I confirm my order').click()
        cy.get('.cheque-indent').should('contain','Your order on My Store is complete.')
    })
});