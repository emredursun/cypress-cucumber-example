import { Given,And,Then, When } from "cypress-cucumber-preprocessor/steps";
  var subTotal = 44;
  var newSubTotal = 34;


  Given('I am on the Demo Web Shop home page', () => {
    cy.visit('https://demowebshop.tricentis.com/')
    
  })

  When('click to {string} category', (category) => {
    cy.get('.header-menu').get('a').contains(category).click();
  });

  When('add the {string} book to the cart', (bookName) => {
    cy.get("h2.product-title a").contains(bookName).click();
    cy.get('.add-to-cart-button').click();
  });
  

  And('verify that the cart includes all books', () => {
    // go to cart
    cy.get('.ico-cart > .cart-label').click()
    // "Computing and Internet"
    cy.get(':nth-child(1) > .product > .product-name').should('be.visible')
    // "Health Book"
    cy.get(':nth-child(2) > .product > .product-name').should('be.visible')
    // "Fiction"
    cy.get(':nth-child(3) > .product > .product-name').should('be.visible')
  })

  // When('remove the {string} book from the cart', (removeBook) => {
  //   cy.get(".cart-item-row").contains(removeBook).and('have.class', 'remove-from-cart').get("//input[@type='checkbox']").click();
  //   cy.get('.update-cart-button').click()
  // });

  And('remove the -Health Book- book from the cart', () => {
    cy.get(':nth-child(2) > .remove-from-cart > input').click()
    cy.get('.update-cart-button').click()
  })

  And('verify that the cart does not include the -Health Book-', () => {
    cy.get(':nth-child(3) > .product > .product-name').should('not.exist')
  })

  And('verify new Sub-Total price of the cart updated correctly', () => {
    cy.get('.ico-cart > .cart-label').click()
    cy.get(':nth-child(1) > .cart-total-right').should('equal', newSubTotal)
    
  })