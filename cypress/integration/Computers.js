require('cypress-plugin-tab')
describe('Mi primer test en cypress',()=>{
    beforeEach(function(){
        cy.clearCookies()
        cy.visit('https://computer-database.gatling.io/computers')
        cy.title().should('eq','Computers database')
       /// cy.visit('https://w3-ocp-sit.fra-release-builder-kit.nonprod.intranet.ibm.com/deals/opp/price/bestAndFinalOffer?cbeDNA=G200407Fweb&oppDNA=21012209nR8qIVP')
    })
    it('credentiales IBM',()=>{
      cy.log('hola')
      cy.get('#add').click().wait(2000)
      cy.contains('Add a computer')
      cy.get('#name').type('Mac#1').tab().type('2017-08-10').tab().type('2020-08-10')
      //cy.get('#company').click()
      //cy.get('select').select(2)
     // cy.get("#company").select('Apple Inc.')
      cy.get("#company").should('be.visible').select(1).contains('Apple Inc.')
      cy.get('.primary').click()
      cy.get('.alert-message').contains('Done')
      //cy.get('strong').should('be.visible').contains('Done')




      


    })
})