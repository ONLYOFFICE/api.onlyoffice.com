# UpdateGroupRequest
The request for updating a group.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **membersToAdd** | **List** (uuid) | The accounts to add to the group. An account that is a guest, is disabled or does not exist is skipped without an error, so the answer has to be read to see what was applied. | [optional] [example: `[00000000-0000-0000-0000-000000000000]`] [nullable] |
| **membersToRemove** | **List** (uuid) | The accounts to remove from the group. Removals are applied after the additions, so an account named in both lists ends up removed, and an ID that is not a member is skipped without an error. | [optional] [example: `[11111111-1111-1111-1111-111111111111]`] [nullable] |
| **groupManager** | **UUID** (uuid) | The account to make the manager of the group, which also adds it to the group. Omit it to keep the current manager - it cannot be cleared through this operation. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **groupName** | **String** | The new name of the group, up to 128 characters. Omit it to keep the current name. | [optional] [example: `Sales Team`] [minLength: 0] [maxLength: 128] [nullable] |
