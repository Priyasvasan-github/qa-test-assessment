Feature: Search for a Star Wars characters from the Star Wars Search Engine
    
    @smoke
    Scenario Outline: Search for a character name with exact match to the search string
        Given the user is on the Star Wars Search site
        When the user searches for character "<character1>" details
        Then the user is able to view only "<character1>" character details
        Examples:
        | character1    |
        | Han Solo      |

    @smoke
    Scenario: Search for a character name with partial match to the search string
        Given the user is on the Star Wars Search site
        When the user searches for character "Skywalker" details
        Then the user is able to view multiple "Skywalker" character details

    Scenario: Search for a character name that does not exist in the Star Wars saga
        Given the user is on the Star Wars Search site
        When the user searches for character "James T. Kirk" details
        Then no details are found

    Scenario Outline: Initiate a new search after a successful search
        Given the user is on the Star Wars Search site
        When the user searches for character "<character1>" details
        Then the user is able to view only "<character1>" character details
        When the user clears the search box and searches again for character "<character2>"
        Then the user is able to view only "<character2>" character details
        Examples:
        | character1    | character2    |
        | Han Solo      | R2-D2         |
        
    Scenario Outline: Clear the search form
        Given the user is on the Star Wars Search site
        When the user searches for character "<character1>" details
        Then the user is able to view only "<character1>" character details
        When the user clears the search box and searches again
        Then the previous search results are removed
        Examples:
        | character1    |
        | Han Solo      |

    Scenario Outline: Check if the user is able to navigate the site using keyboard strokes
        Given the user is on the Star Wars Search site
        When the user searches for character "<character1>" using keyboard strokes
        Then the user is able to view only "<character1>" character details
        Examples:
        | character1    |
        | Han Solo      |

#end