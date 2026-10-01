# UI Policy — High Impact Control

## Configuration

| Property | Value |
|---|---|
| Name | High Impact Control |
| Table | Incident |
| Active | true |
| Condition | Impact is 1 - High |
| Reverse if false | true |

## UI Policy Action specified by the project source

- Field: **Assignment group**
- Mandatory: **true**

## Purpose

The policy is triggered when Incident Impact is High. With Reverse if false enabled, the policy's controlled field behavior is reversed when the condition is no longer true.

## ServiceNow navigation

`System UI → UI Policies → New`

Then create the UI Policy and configure the condition above.
