Feature: Simple cause search


  Scenario: Search for third cause
    Given I open the Easy Fundraising website
    When I click on the Find A Cause link
    When I enter 'can' in the search field
    When I select the cause number 3 in the results
    Then I should see 'Marie Curie Cancer Care' in the search results
