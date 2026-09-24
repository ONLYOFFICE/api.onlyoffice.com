# EmailInvitationDto
The email invitation parameters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **email** | **String** (email) | The address of somebody who has no portal account yet. An invitation is sent to it and an account is created once it is accepted, so this is the field to use instead of an account identifier when the person is new to the portal. | [optional] [example: `jane.doe@example.com`] [maxLength: 255] [nullable] |
