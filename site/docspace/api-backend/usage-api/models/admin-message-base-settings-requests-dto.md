# AdminMessageBaseSettingsRequestsDto
Who is invited to join the portal, and in which language the invitation is written.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **email** | **String** (email) | The address the join link is sent to. It has to be a well-formed ASCII address rather than an internationalized one, must not already belong to a member of the portal, and, where the portal trusts named domains only, has to end with one of them; any of these faults is refused with 400. | [required] [example: `admin@example.com`] [minLength: 0] [maxLength: 255] [nullable] |
| **culture** | **String** | The language the letter is written in, as a culture name such as `en-US`. A culture the installation does not have falls back to the portal language rather than failing the call. | [optional] [example: `en-US`] [nullable] |
