@smoke @demowebshop
Feature: Test the search functionality

  @2.test_search_functionality
  Scenario: I test search functionality
    Given I am on the Demo Web Shop home page
    And search "Elite Desktop PC" term in the search field and click on the search button
    And  verify that the search results page displays products related to the search term: "Elite Desktop PC" and click in it
    Then  verify that the page url includes "desktop-pc"