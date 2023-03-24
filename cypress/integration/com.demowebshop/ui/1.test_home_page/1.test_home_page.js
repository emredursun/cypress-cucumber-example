import { Given,And,Then } from "cypress-cucumber-preprocessor/steps";

  Given('I am on the Demo Web Shop home page', () => {
    cy.visit('https://demowebshop.tricentis.com/')
    
  })

  And('check that the logo is visible', () => {
    //should('be.visible') : checking if the element is visible 
    cy.get('.header-logo > a > img').should('be.visible')
  })
  
  And('click on the logo', () => {
    cy.get('.header-logo > a > img').click()
  })


  And('verify that the navigation menu has the correct Title and Url', () => {
    cy.title().should('eq','Demo Web Shop')
    cy.url().should('include','demowebshop.tricentis')
  })