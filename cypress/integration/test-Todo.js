require('cypress-plugin-tab')
var comments='Hello people have a nice day'
describe('Mi primer test en cypress',()=>{
    beforeEach(function(){
        cy.clearCookies()
        cy.visit('http://127.0.0.1:5500/todo-app-main/todo-app-main/')
       /// cy.visit('https://w3-ocp-sit.fra-release-builder-kit.nonprod.intranet.ibm.com/deals/opp/price/bestAndFinalOffer?cbeDNA=G200407Fweb&oppDNA=21012209nR8qIVP')
    })
    it('credentiales IBM',()=>{
      cy.log('hola')
      cy.get('.theme-block > label').click({force: true})
      get
      cy.wait(4000)
      cy.get('.theme-block > label').click({force: true})
      cy.get(':nth-child(2) > .list-item > .text').click()
      cy.get(':nth-child(3) > .list-item > .text').click()
      cy.wait(2000)
      cy.get('.clear').click()
      cy.get('.filter > :nth-child(1) > span').click()
      cy.wait(2000)
      cy.get('#addItem').type('test 1').type('{enter}')
      cy.get('#addItem').type('test 2').type('{enter}')
      cy.get('#addItem').type('test 3').type('{enter}')
      cy.wait(3000)
      cy.get(':nth-child(1) > .list-item > .text').trigger('mouseover').click({force: true})
      cy.get('body > main > section > ul > li:nth-child(1) > span').click({force: true})
      cy.get(':nth-child(2) > .list-item > .text').trigger('mouseover').click({force: true})
      cy.get('body > main > section > ul > li:nth-child(1) > span').click({force: true})
      cy.get('ul > .flex-row').trigger('mouseover').click({force: true})
      cy.get('body > main > section > ul > li:nth-child(1) > span').click({force: true})
      cy.wait(2000)
      cy.get('#addItem').type('Menu 1').type('{enter}')
      cy.get('#addItem').type('Menu 2').type('{enter}')
      cy.get('#addItem').type('Menu 3').type('{enter}')
      cy.wait(2000)
      cy.get('.filter > :nth-child(2) > span').click()
      cy.get('.filter > :nth-child(3) > span').click()
      cy.get('.clear').click()
      //para regresar a ll y marcar 1
      cy.get('.filter > :nth-child(1) > span').click()
      cy.get('.filter > :nth-child(2) > span').click()
      cy.get(':nth-child(1) > .list-item > .text').click()
      cy.get(':nth-child(2) > .list-item > .text').click()
      cy.wait(4000)
      cy.get('.filter > :nth-child(2) > span').click() //actives 1
      cy.wait(4000)
      cy.get('.filter > :nth-child(3) > span').click()// completed 2
      cy.wait(4000)
      cy.get('.clear').click()// elimina 2
      cy.wait(4000)
      cy.get('.filter > :nth-child(1) > span').click() //vuekge a todos y marca 1 #3




      
      //cy.get('').should('be.not.visible').click({force: true}).trigger('mouseover')
      
})
})