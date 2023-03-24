@smoke @demowebshop
Feature: Checkout process test

  @5.test_checkout_process
  Scenario: Verify user can successfully place an order
    Given I am on the Demo Web Shop home page
    When click on the login link
    And enter valid credentials
      | username              | pasword  |
      | henkjanson@gmail.com  | 13579Odd |
    And click to "Books" category
    And add the "Computing and Internet" book to the cart
    And add the "Fiction" book to the cart
    When go to the cart, agree with the terms of service and proceed to checkout
    And enter valid shipping and billing information
    And choose the shipping method -Ground-
    And choose Payment method -Purchase Order-
    And enter the PO number: "Free Order"
    Then verify that the order is successful and a confirmation message is displayed