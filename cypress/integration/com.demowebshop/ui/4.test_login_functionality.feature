@smoke @demowebshop
Feature: Login functionality test

  @4.test_login_functionality
  Scenario: Verify user can login with valid credentials
    Given I am on the Demo Web Shop home page
    When click on the login link
    And enter valid credentials
      | username              | pasword  |
      | henkjanson@gmail.com  | 13579Odd |
    Then verify that the user is logged in
    And verify that the user's name: "henkjanson@gmail.com" is displayed in the header
