describe('Visual testing', function () {

    const user = 'Testing Purpose'
    beforeEach(() => {
        cy.eyesOpen({
            appName: 'automationpractice',
            batchName: 'Ultrafast Batch'
        })
    });

    afterEach(() => {
        cy.eyesClose();
    });

    it('Verify Login layout', function(){
        cy.visit('/index.php?controller=authentication&back=my-account')
        cy.eyesCheckWindow('Normal Login layout')
        cy.Login()
    })

    it('Verify Home layout', function () {

        cy.get('.header_user_info').find('span').should('have.text',user)
        cy.eyesCheckWindow('Normal Home layout')

    })
})