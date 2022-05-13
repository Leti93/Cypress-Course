require('cypress-plugin-tab')
var link='https://stevefaulkner.github.io/html-mapping-tests/browser-tests/checkbox-states.html'
describe('Mi primer test en cypress',()=>{
    beforeEach(function(){
       // cy.clearCookies()
       // cy.visit('https://stevefaulkner.github.io/html-mapping-tests/browser-tests/checkbox-states.html')
       /// cy.visit('https://w3-ocp-sit.fra-release-builder-kit.nonprod.intranet.ibm.com/deals/opp/price/bestAndFinalOffer?cbeDNA=G200407Fweb&oppDNA=21012209nR8qIVP')
    })
    it('Main Page Checkbox',()=>{
    cy.visit(link)
    cy.title().should('eq','checkbox - states test')
    cy.get('body > :nth-child(3)').check().should('be.checked').wait(2000)
    cy.get('body > :nth-child(3)').uncheck().should('not.be.checked').wait(2000)
    cy.get('[checked=""]').should('be.checked').wait(2000)
    cy.get('[checked=""]').uncheck().should('not.be.checked').wait(2000)
      
})
it('Main Page Radios Buttons',()=>{
    cy.visit('http://test.rubywatir.com/radios.php')
    cy.title().should('eq','Radio button test Page')
    cy.get('.radioclass').check().should('be.checked').wait(2000)
})
it('Main Page selects',()=>{
    cy.visit('http://test.rubywatir.com/radios.php')
    cy.title().should('eq','Radio button test Page')
    cy.get('.radioclass').check().should('be.checked').wait(2000)
})
})
