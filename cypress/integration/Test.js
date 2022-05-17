
require('cypress-plugin-tab')

/*describe('My first test', () => {
    // Grupo de aserciones que debe de cumplirse
    // para que el test sea considerado exitoso
    before(function(){
        cy.clearCookies()
        cy.visit('https://w3-ocp-sit.fra-release-builder-kit.nonprod.intranet.ibm.com/home')
        cy.get('#credentialSignin').click()
        cy.contains('Sign in with your w3id credentials')
        cy.get('#user-name-input').type('leticia.martinez.romero@ibm.com')
        cy.get('#password-input').type('Luisalberto_2022')
        cy.get('#login-button').click()
    })
    beforeEach(function(){

    cy.log('hola')
     })
  
    it('Puedo visitar el sitio 1', () => {
       cy.log('hola')
    })
    it('Puedo visitar el sitio 2', () => {
        cy.log('bienvenido')
    })
     it('Puedo visitar el sitio 3', () => {
        cy.log('acypress')
    })
  })*/





  
describe('Mi primer test en cypress',()=>{
    it('Login',()=>{
    expect(40).to.equal(40)

    
    })
    it('validating title 1',()=>{
      cy.log('hola')
     
    
    })

     it.only('validating title',()=>{
        cy.visit('https://w3-ocp-sit.fra-release-builder-kit.nonprod.intranet.ibm.com/deals/opp/price/bestAndFinalOffer?cbeDNA=G200407Fweb&oppDNA=21012209nR8qIVP')
        cy.get('#credentialSignin').click()
        cy.contains('Sign in with your w3id credentials')
        cy.get('#user-name-input').should('be.visible').should('be.enabled').type('leticia.martinez.romero@ibm.com').tab().type('Luisalberto_2022')
    

       // cy.get('#password-input').type('Luisalberto_2022')
        cy.get('#login-button').click({force: true})
        cy.get('.bx--modal-close__icon').click()
        cy.title('IBM Release Builder Kit')

    
    })
    it('validating title 3',()=>{
        cy.log('hola')
       
      
      })

    
})
