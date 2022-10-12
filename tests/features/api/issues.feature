# ------------------------------
# Jira Api Feature Issues
# ------------------------------

@issues
Feature: Issues

    Test Scenarios for Issues Feature

    @001 @captureIssue @deleteIssues @acceptance @smoke
    Scenario: A user can create a new Issue
        Given the user sets the request body with:
        | fields.project.key    | AUT                           |
        | fields.summary        | title: issue 001 by Api       |
        | fields.description    | description: issue 001 by Api |
        | fields.issuetype.name | Bug                           |
        When the user sends a "POST" to create a Bug to "/rest/api/2/issue/"
        Then the status code should be 201
        And the response body should be:
        | id                    | (issueId)                     |
        | key                   | (issueKey)                    |
        | self                  | (issueSelf)                   |   
        And the user sends "GET" to "/rest/api/2/issue/" to retrieve previous issue
        And the status code should be 200
        And the response body should be:
        | id                    | (issueId)                     |
        | key                   | (issueKey)                    |
        | self                  | (issueSelf)                   |   
