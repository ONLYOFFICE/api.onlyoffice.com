# UpdateMembersRequestDto
The request parameters for updating the user information.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **userIds** | **List** (uuid) | The accounts the operation applies to. System accounts are dropped from the list without an error, and the remaining ones are processed in the order they are given. | [optional] [example: `[00000000-0000-0000-0000-000000000000, 11111111-1111-1111-1111-111111111111]`] [nullable] |
| **resendAll** | **Boolean** | Reaches every pending account of the portal instead of the ones in `userIds`. It is read only by `PUT api/2.0/people/invite` and is ignored by every other operation that binds this body. | [optional] [example: `false`] |
