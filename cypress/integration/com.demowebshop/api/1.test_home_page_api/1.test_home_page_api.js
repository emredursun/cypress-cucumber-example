const { Given, Then } = require("cypress-cucumber-preprocessor/steps");

Given("I send a GET request to the home page", () => {
  cy.request("GET", "/");
});

Then("the response status code should be 200", () => {
  cy.get("@response").its("status").should("equal", 200);
});

Then('the response body should contain the title "{string}"', (title) => {
  cy.get("@response").its("body").should("include", title);
});

Then("the response header should include the expected content type", () => {
  cy.get("@response")
    .its("headers")
    .should("include", "content-type")
    .and("include", "text/html");
});
