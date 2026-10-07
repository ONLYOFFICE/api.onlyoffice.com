# PasswordHashSettingsDto
The parameters a client hashes a password with before sending it.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **size** | **Integer** (int32) | The length of the hash, in bytes. | [optional] [example: `32`] |
| **iterations** | **Integer** (int32) | The number of PBKDF2 iterations. | [optional] [example: `100000`] |
| **salt** | **String** | The salt the installation hashes passwords with. | [optional] [example: `random_salt_value`] [nullable] |
