Feature: Dashboard
        
    Scenario: Dashboard tab loads
        Given the current view is the landing page
        When the dashboard button is pressed 
        Then the dashboard tab loads

    Scenario: Dashboard view loads coins
        Given the current view is landing page
        When the coins are selected
        Then the correct coins are displayed