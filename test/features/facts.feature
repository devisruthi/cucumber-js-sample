Feature: Verify the cat facts API

  Scenario: Get the cat facts from the API
    Given I make a GET request to the API
    Then the response status code should be 200
    And the response content type should be "application/json; charset=utf-8"
    And the type of the facts should be "cat"
    And the size of the facts array should be 5
