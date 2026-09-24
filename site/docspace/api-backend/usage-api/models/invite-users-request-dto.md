# InviteUsersRequestDto
The request parameters for inviting users.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **invitations** | [**List**](user-invitation-request-dto.md) | The list of user invitations. | [required] [example: `[{email=user@example.com, type=1}]`] |
| **culture** | **String** | The culture code of invitations. | [optional] [example: `en-US`] [nullable] |
