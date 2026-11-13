# GroupSummaryPayload
A group referenced from another webhook payload.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** (uuid) | The ID of the group; `GET api/2.0/group/{id}` returns the group with its members by it. | [optional] [example: `c652dd0b-fa6e-4bb7-a3b2-9a2e4e6b7d1c`] |
| **name** | **String** | The name of the group as it is shown in the portal. | [optional] [example: `Marketing Team`] |
| **manager** | **String** | The user name of the user who manages the group, not an ID. Absent when the group has no manager. | [optional] [example: `Mike.Zanyatski`] |
| **isSystem** | **Boolean** | `true` for a built-in system group, whose members follow from the user types rather than from membership changes. Absent for every other group, never `false`. | [optional] [example: `true`] |
