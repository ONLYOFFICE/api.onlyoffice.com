# ApiKeyResponseDto
The response data for the API key operations.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** (uuid) | The ID of the key. This is the value to pass to `PUT api/2.0/keys/{keyId}` and `DELETE api/2.0/keys/{keyId}`. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **name** | **String** | The label given to the key when it was created or last updated. | [required] [example: `My API Key`] [nullable] |
| **key** | **String** | The secret to send in the `Authorization` header as `Bearer sk-...`. It is filled in only by the answer of `POST api/2.0/keys` and cannot be read again afterwards, so it has to be stored at that moment. | [required] [example: `sk-0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef`] [nullable] |
| **keyPostfix** | **String** | The last four characters of the secret. It is the only part of the secret that later reads expose, and it is meant for telling keys apart in a list. | [optional] [example: `cdef`] [nullable] |
| **permissions** | **List** | The scopes the key may use, as accepted by `GET api/2.0/keys/permissions`. An empty list means the key has no scope restrictions. | [required] [example: `[rooms:read, files:write]`] [nullable] |
| **lastUsed** | [**ApiDateTime**](api-date-time.md) | The UTC moment the key was last used to authenticate a request. It is empty for a key that has never been used. | [optional] |
| **createOn** | [**ApiDateTime**](api-date-time.md) | The UTC moment the key was created. | [optional] |
| **createBy** | [**EmployeeDto**](employee-dto.md) | The portal member who created the key, and whose access the key acts with. | [optional] |
| **expiresAt** | [**ApiDateTime**](api-date-time.md) | The UTC moment the key stops working. It is empty for a key created without `expiresInDays`, which never expires. | [optional] |
| **isActive** | **Boolean** | Whether the key may authenticate requests. A key deactivated through `PUT api/2.0/keys/{keyId}` stays in the list with this field set to false. | [required] [example: `true`] |
