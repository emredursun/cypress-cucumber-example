import { Given,And,Then } from "cypress-cucumber-preprocessor/steps";

Given('user in on the application page', () => {
    cy.visit('https://qa-environment.resortsline.com/Account/Logon')
    
  })


  And('user login with below data', (dataTable) => {
      //manager is on the 2nd row 1st column [1][0] 
      cy
      .get('#UserName')
      .type(dataTable.rawTable[1][0], {force: true})
       //manager is on the 2nd row 2st column [1][1]
      cy.get('#Password')
      .type(dataTable.rawTable[1][1], {force: true})
      cy.wait(3000)
  })

  And('clicks on login button', () => {
    cy.get('#btnSubmit')
    .click()
  })

  Then('verify that the username is displayed as {string}', (username) => {
    // Verifying that the default page is displayed the user name
    cy.get('.username')
    .should('contain.text', username)
  })