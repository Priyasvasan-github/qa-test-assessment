Feature: Search for a Star Wars Planets from the Star Wars Search Engine
    
    @smoke
    Scenario Outline: Search for a planet name with exact match to the search string
        Given the user is on the Star Wars Search site
        When the user searches for planet "<planet1>" details
        Then the user is able to view only "<planet1>" planet details
        Examples:
        | planet1   |
        | Tatooine  |

    @smoke
    Scenario: Search for a planet name with partial match to the search string
        Given the user is on the Star Wars Search site
        When the user searches for planet "IV" details
        Then the user is able to view multiple "IV" planet details

    Scenario: Search for a planet name that does not exist in the Star Wars saga
        Given the user is on the Star Wars Search site
        When the user searches for planet "Vulcan" details
        Then no details are found

    Scenario Outline: Initiate a new search after a successful search
        Given the user is on the Star Wars Search site
        When the user searches for planet "<planet1>" details
        Then the user is able to view only "<planet1>" planet details 
        When the user clears the search box and searches again for planet "<planet2>"
        Then the user is able to view only "<planet2>" planet details 
        Examples:
        | planet1   | planet2   |
        | Tatooine  | Naboo     |
        
    Scenario Outline: Clear the search form
        Given the user is on the Star Wars Search site
        When the user searches for planet "<planet1>" details
        Then the user is able to view only "<planet1>" planet details 
        When the user clears the search box and searches again
        Then the previous search results are removed
        Examples:
        | planet1   |
        | Tatooine  |

    Scenario Outline: Check if the user is able to navigate the site using keyboard strokes
        Given the user is on the Star Wars Search site
        When the user searches for planet "<planet1>" using keyboard strokes
        Then the user is able to view only "<planet1>" planet details 
        Examples:
        | planet1   |
        | Tatooine  |

#end