require('cypress-plugin-tab')
var comments='Hello people have a nice day'
describe('Mi primer test en cypress',()=>{
    beforeEach(function(){
        cy.clearCookies()
        //cy.visit('file:///C:/TODO/todo-app-main/todo-app-main/index.html')
        cy.visit('https://w3-ocp-sit.fra-release-builder-kit.nonprod.intranet.ibm.com/deals/opp/price/bestAndFinalOffer?cbeDNA=G200407Fweb&oppDNA=21012209nR8qIVP')
    })
    it('credentiales IBM',()=>{
        cy.get('#credentialSignin').click()
        cy.contains('Sign in with your w3id credentials')
        cy.get('#user-name-input').should('be.visible').should('be.enabled').type('leticia.martinez.romero@ibm.com').tab().type('Luisalberto_2023')
        cy.get('#login-button').click({force: true})
        cy.get('.bx--modal-close__icon').click()
        cy.title('IBM Release Builder Kit')
    })
    it.only('Best & Final Offer',()=>{
        cy.get('#credentialSignin').click()
        cy.contains('Sign in with your w3id credentials')
        cy.get('#user-name-input').should('be.visible').should('be.enabled').type('leticia.martinez.romero@ibm.com').tab().type('Luisalberto_2023')
        cy.get('#login-button').click({force: true})
        cy.get('.bx--modal-close__icon').click()
        cy.title('IBM Release Builder Kit')
        cy.get('[data-testid="applet-Best & Final Offer (BAFO) Workbench"] > [data-testid="createNewScenarioButton"]').click()
        cy.wait(2000)
        cy.get('[data-testid="scenario-name"]').should('be.enabled').should('be.visible').type('Test-1')   
        //cy.get('.bx--list-box__menu-icon > svg').click().should('be.visible').select('Internal Review')
        cy.get('.bx--list-box__menu-icon > svg').click({ force: true })
        cy.get('#downshift-0-item-1').should('be.not.enabled').click({force: true})
        //cy.get('select').select('Internal Review').should('have.value', '456')

     
        cy.wait(2000)
        cy.get('.bx--toggle__text--on').click({force: true})
        cy.get('[data-testid="comments"]').type(comments)
        cy.get('.bx--modal-footer > .bx--btn--primary').click()
        //cy.get('.bx--toggle__text--off').click({force: true})
    })
   
   
})