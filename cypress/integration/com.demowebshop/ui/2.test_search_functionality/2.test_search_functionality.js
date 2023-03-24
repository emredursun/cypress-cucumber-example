import { Given,And,Then } from "cypress-cucumber-preprocessor/steps";

  Given('I am on the Demo Web Shop home page', () => {
    cy.visit('https://demowebshop.tricentis.com/')
    
  })

  And('search {string} term in the search field and click on the search button', (searchTerm) => {
    cy.get('#small-searchterms').type(searchTerm, { force: true })
    cy.get('form > .button-1').click()
  })
  
  And('verify that the search results page displays products related to the search term: {string} and click in it', (searchTerm) => {
    cy.get('.product-grid').should('contain.text', searchTerm)
    cy.get('.product-item').click()
  })


  And('verify that the page url includes {string}', (searchCategory) => {
    cy.url().should('include', searchCategory)
  })