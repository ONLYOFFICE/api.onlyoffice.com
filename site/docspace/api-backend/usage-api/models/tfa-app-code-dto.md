# TfaAppCodeDto
One backup code of the caller's authenticator credential.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **isUsed** | **Boolean** | Whether the code has already been spent. A spent code is kept in the list but is no longer accepted, so count the entries where this is `false` to know how many fallbacks remain. | [optional] [example: `true`] |
| **code** | **String** | The code itself, in the form it is typed at sign-in - six characters with the default configuration. It is stored encrypted and decrypted for this answer, so this is the one place a caller can read it. | [optional] [example: `123456`] [nullable] |
