# FileKeys
The encrypted file key issued to one user.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **userId** | **UUID** (uuid) | The identifier of the user the file key was issued to. | [optional] [example: `9924256B-447C-4F19-9dbd-8ad8c39e8ff5`] |
| **publicKeyId** | **UUID** (uuid) | The identifier of the key pair the file key is encrypted for. | [optional] [example: `9924256B-447C-4F19-9dbd-8ad8c39e8ff5`] |
| **privateKeyEnc** | **String** | The file key, encrypted with the public key of the pair. | [optional] [example: `U2FsdGVkX1+Lm3s...`] [nullable] |
| **tenantId** | **Integer** (int32) | The identifier of the portal the file belongs to. | [optional] [example: `1`] |
| **fileId** | **Integer** (int32) | The identifier of the file the key unlocks. | [optional] [example: `9846`] |
| **createOn** | **Date** (date-time) | The date and time when the file key was issued. | [optional] [example: `2025-01-01T00:00:00`] |
