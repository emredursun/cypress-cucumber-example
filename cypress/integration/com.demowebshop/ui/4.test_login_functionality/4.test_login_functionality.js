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

Then("verify that the user is logged in", () => {
  cy.get(".header-links").should("contain", "Log out");
});

Then("verify that the user's name: {string} is displayed in the header", (userName) => {
  cy.get(".header-links")
    .find(".account")
    .should("contain", userName);
});
