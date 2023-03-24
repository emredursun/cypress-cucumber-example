@api @demowebshop @smoke 
Feature: Home Page API test

  @1.test_home_page_api
  Scenario: Verify home page API
    Given I send a GET request to the home page
    Then the response status code should be 200
    And the response body should contain the title "Demo Web Shop"
    And the response header should include the expected content type
