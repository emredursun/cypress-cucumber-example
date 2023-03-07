import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("user is on the google page", () => {
  cy.visit("https://www.google.com/");
  cy.get("#L2AGLb > .QS5gu").click();
});

When("user search for {string}", (capitals) => {
  cy.get(".RNNXgb").type(capitals);
  cy.get(".FPdoLc > center > .gNO89b").click({ force: true });
});

Then("verify the result has {string}", (capitals) => {
  //Verifying if page title includes capitals
  cy.title().should("include", capitals);
});
