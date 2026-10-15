# AccessRequestKeyDto
The file key issued to one account.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **userId** | **UUID** (uuid) | The account that is to open the file with this key; it has to have read access to the file. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **publicKeyId** | **UUID** (uuid) | The public key the file key was encrypted with, as reported for that account by `GET api/2.0/files/file/{fileId}/publickeys`. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **privateKeyEnc** | **String** | The key of the file itself, encrypted by the client with that public key, so that the plain key never reaches the portal. | [optional] [example: `encrypted_key_string`] [nullable] |
