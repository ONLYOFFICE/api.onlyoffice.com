# SecurityDto
How access to one portal module is configured: whether it is restricted, and who is let in.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **webItemId** | **String** | The module this entry is about, echoed from the identifier that was asked about. When several identifiers are asked about at once, entries come back one per identifier and in the order they were sent, so they can also be matched by position. | [optional] [example: `00000000-0000-0000-0000-000000000000`] [nullable] |
| **users** | [**List**](employee-dto.md) | The individual members the rule was stored for. Members the caller is not allowed to see are left out, so the same module can come back with different lists for different callers and an empty list does not prove that nobody was granted access. | [optional] [example: `[{displayName=John Doe}]`] [nullable] |
| **groups** | [**List**](group-summary-dto.md) | The groups the rule was stored for, listed in full - unlike `users`, nothing is filtered out of it. | [optional] [example: `[{id=00000000-0000-0000-0000-000000000000, name=Administrators}]`] [nullable] |
| **enabled** | **Boolean** | Whether access to the module is restricted to the subjects listed here. It is `false` for a module nobody has ever configured, in which case the two lists say nothing about who may open it. | [optional] [example: `true`] |
| **isSubItem** | **Boolean** | Whether the module hangs under another one rather than standing on its own. A sub-module is never returned by `GET api/2.0/settings/security/modules`, which lists top-level modules only. | [optional] [example: `true`] |
