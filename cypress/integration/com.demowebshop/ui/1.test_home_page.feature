@smoke @demowebshop
Feature: Test the home page

  @1.test_home_page
  Scenario: I verify that the navigation menu has the correct Title and Url
    Given I am on the Demo Web Shop home page
    And check that the logo is visible 
    And click on the logo
    Then verify that the navigation menu has the correct Title and Url