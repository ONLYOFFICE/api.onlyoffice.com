# GroupRequestDto
The group request parameters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **members** | **List** (uuid) | The accounts to put into the new group. Every one of them has to be an active member that is not a guest, otherwise the whole call is rejected. Omit it to create an empty group. | [optional] [example: `[00000000-0000-0000-0000-000000000000, 11111111-1111-1111-1111-111111111111]`] [nullable] |
| **groupManager** | **UUID** (uuid) | The account to make the manager of the new group. It is added to the group as well, so it does not have to be repeated in `members`. Omit it to create a group without a manager. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **groupName** | **String** | The name of the group, from 1 to 128 characters. It is required, it may not be blank, and it does not have to be unique. | [required] [example: `Marketing Team`] [minLength: 1] [maxLength: 128] [nullable] |
