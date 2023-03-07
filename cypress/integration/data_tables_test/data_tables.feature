@smoke
Feature: login_with_manager_creds
    #  create ff
    #  generate step defs
    #  write the java code
    #  London, Paris, Vienna, Berlin, Madrid
    @managerid
    Scenario: login with first manager creds
        Given user in on the application page
        And user login with below data
            | username | pasword   |
            | manager  | Manager1! |
        And clicks on login button
        Then verify that the username is displayed as "manager"
    @manager2id
    Scenario: login with second manager creds
        Given user in on the application page
        And user login with below data
            | username | pasword   |
            | manager2 | Manager2! |
        And clicks on login button
        Then verify that the username is displayed as "manager2"