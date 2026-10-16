# ChangePasswordRequest
The request parameters for updating a user password.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **password** | **String** | The new password in plain text. It is checked against the portal password policy and rejected with 400 when it is too weak, then hashed by the portal. Send it only over a secure connection, and prefer `passwordHash` when the client can compute it. | [optional] [example: `P@ssw0rd`] [nullable] |
| **passwordHash** | **String** | The new password already hashed by the client, which is what the portal stores. It is a PBKDF2-HMACSHA256 hash of the plain password, computed with the salt, the iteration count and the key size the portal settings publish, and written as lowercase hexadecimal. When it is sent, `password` is ignored and the password policy is not applied. | [optional] [example: `c1ba1a0bcbe0f0f42b6c86e1b41a1b4a4a9b4b0e3f2b7d2c1a0e9f8d7c6b5a49`] [nullable] |
