# ------------------------------
# Jira Api Feature Example
# ------------------------------

@api
Feature: Issues

    Defines Test Scenarios for API Feature example

    Scenario: A user can verify an existing Issue
        Given An issue previously created
        When the user send a "GET" to "/rest/api/3/issue/"
        Then the status code should be 200