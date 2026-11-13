# GroupPayload
The group a group.* webhook is about.  The payload describes the group at the time of the event, without the list of its members. A `group.updated` delivery follows a change made through the group API - a rename, a new manager, or members added, removed, replaced or moved to another group - but does not say which of these happened: compare the payload with the previous one, and read the current members with `GET api/2.0/group/{id}` when they are needed.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** (uuid) | The ID of the group the event is about; `GET api/2.0/group/{id}` returns the group with its members by it. | [optional] [example: `c652dd0b-fa6e-4bb7-a3b2-9a2e4e6b7d1c`] |
| **name** | **String** | The name of the group as it is shown in the portal, after a rename the new one. | [optional] [example: `Marketing Team`] |
| **parent** | **UUID** (uuid) | The parent group ID; absent for a top-level group. | [optional] [example: `3f5c2a1e-8b7d-4e6f-9a0b-1c2d3e4f5a6b`] |
| **category** | **UUID** (uuid) | The ID of the group category: the empty GUID for the groups members create, and one fixed category ID for the built-in system groups. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **isLDAP** | **Boolean** | Whether the group is synchronized from an LDAP directory, where its name and members are managed; `false` for a group created in the portal. | [optional] [example: `false`] |
| **isSystem** | **Boolean** | `true` for a built-in system group, whose members follow from the user types rather than from membership changes. Absent for every other group, never `false`. | [optional] [example: `true`] |
| **manager** | [**UserSummaryPayload**](user-summary-payload.md) |  | [optional] |
| **membersCount** | **Integer** (int32) | How many users belong to the group at the time of the event, disabled accounts not counted; 0 for a group without members. | [optional] [example: `12`] |
