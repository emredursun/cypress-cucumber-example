@smoke @demowebshop
Feature: Shopping Cart functionality test

  @3.test_shopping_cart
  Scenario: Add and Remove products from the cart and verify that the cart is updated correctly
    Given I am on the Demo Web Shop home page
    And click to "Books" category
    And add the "Computing and Internet" book to the cart
    And add the "Health Book" book to the cart
    And add the "Fiction" book to the cart
    Then verify that the cart includes all books
    And remove the -Health Book- book from the cart
    Then verify that the cart does not include the -Health Book-