const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");

Given("I am on the Demo Web Shop home page", () => {
  cy.visit("https://demowebshop.tricentis.com/");
});

When("click on the login link", () => {
    cy.get("a[href='/login']").click();
  });

When("enter valid credentials", (dataTable) => {
    cy.get("#Email")
      .type(dataTable.rawTable[1][0], {force: true});
    cy.get("#Password")
      .type(dataTable.rawTable[1][1], {force: true});
    cy.get("input[value='Log in']").click();
});

When('click to {string} category', (category) => {
    cy.get('.header-menu').get('a').contains(category).click();
  });

  When('add the {string} book to the cart', (bookName) => {
    cy.get("h2.product-title a").contains(bookName).click();
    cy.get('.add-to-cart-button').click();
  });

When("go to the cart, agree with the terms of service and proceed to checkout", () => {
    cy.get('.ico-cart > .cart-label').click();
    cy.get(':nth-child(1) > .qty > .qty-input').clear().type('1');
    cy.get(':nth-child(2) > .qty > .qty-input').clear().type('1');
    cy.get('.update-cart-button').click();
    cy.get('#termsofservice').click();
    cy.get('#checkout').click();
});


And("enter valid shipping and billing information", () => {
  cy
  .get('#billing-address-select') //location the dropdown element
  .select('New Address')//selecting "New Address"
  cy.get("#BillingNewAddress_FirstName").clear().type("John");
  cy.get("#BillingNewAddress_LastName").clear().type("Doe");
  cy.get("#BillingNewAddress_Email").clear().type("johndoe@example.com");
  cy.get("#BillingNewAddress_CountryId").select("United States");
  cy.get("#BillingNewAddress_StateProvinceId").select("California");
  cy.get("#BillingNewAddress_City").clear().type("Los Angeles");
  cy.get("#BillingNewAddress_Address1").clear().type("123 Main St");
  cy.get("#BillingNewAddress_ZipPostalCode").clear().type("90001");
  cy.get("#BillingNewAddress_PhoneNumber").clear().type("555-555-5555");
  cy.get('#billing-buttons-container > .button-1').click();
  cy.get('#shipping-buttons-container > .button-1').click();
});


And("choose the shipping method -Ground-", () => {
    cy.get('#shippingoption_0').click();
    cy.get('#shipping-method-buttons-container > .button-1').click();
});

And("choose Payment method -Purchase Order-", () => {
    cy.get('#paymentmethod_3').click();
    cy.get('#payment-method-buttons-container > .button-1').click();
});


And("enter the PO number: {string}", (PONumber) => {
    cy.get('#PurchaseOrderNumber').type(PONumber);
    cy.get('#payment-info-buttons-container > .button-1').click();
    cy.get('#confirm-order-buttons-container > .button-1').click()
});


Then("verify that the order is successful and a confirmation message is displayed", () => {
  cy.get('.page').should("contain", "Thank you");
  cy.url().should("include", "/checkout/completed/");
  cy.get(".section.order-completed").should("contain", "Your order has been successfully processed!");
  
});
