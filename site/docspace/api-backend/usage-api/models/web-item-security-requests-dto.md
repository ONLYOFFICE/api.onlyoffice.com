# WebItemSecurityRequestsDto
The access rule stored for one portal module: whether it may be opened, and by whom.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | The module the rule applies to, given as a GUID. A value that is not a GUID fails the request as invalid. | [required] [example: `00000000-0000-0000-0000-000000000000`] [nullable] |
| **enabled** | **Boolean** | Whether the module may be opened. It decides the outcome only while `subjects` names somebody: an empty `subjects` array is stored as access for everyone whatever this flag says. | [optional] [example: `true`] |
| **subjects** | **List** (uuid) | The users and groups the rule is stored for, given by their IDs. This is the whole allow-list that is to hold afterwards and not a list of additions - what was stored before is dropped. Leaving it out applies `enabled` to everyone and skips the audit trail entry, while sending it empty stores access for everyone. | [optional] [example: `[00000000-0000-0000-0000-000000000000]`] [nullable] |
