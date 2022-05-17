var name = lety;require('cypress-plugin-tab')
var comments='Hello people have a nice day'
describe('Mi primer test en cypress',()=>{
    beforeEach(function(){
        cy.clearCookies()
        //cy.visit('file:///C:/TODO/todo-app-main/todo-app-main/index.html')
        cy.visit('https://w3-ocp-sit.fra-release-builder-kit.nonprod.intranet.ibm.com/deals/opp/price/bestAndFinalOffer?cbeDNA=G200407Fweb&oppDNA=21012209nR8qIVP')
    })
})