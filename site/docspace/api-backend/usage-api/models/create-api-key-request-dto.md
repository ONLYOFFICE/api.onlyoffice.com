# CreateApiKeyRequestDto
The request parameters for creating a new API key.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | The label that tells this key apart in the key list. It is required, may be up to 30 characters long, and does not have to be unique. | [required] [example: `My API Key`] [minLength: 0] [maxLength: 30] |
| **permissions** | **List** | The scopes the key may use. Every value has to come from `GET api/2.0/keys/permissions`, an unknown value or an empty array is rejected, and passing `*` or omitting the field records a key without scope restrictions. | [optional] [example: `[rooms:read, files:write]`] [nullable] |
| **expiresInDays** | **Integer** (int32) | The lifetime of the key in days, counted from the moment it is created, from 1 to 365. Omit it to create a key that never expires. | [optional] [example: `30`] [min: 1] [max: 365] [nullable] |
