# ConfirmData
The confirmation link a sign-in is authorised with, in place of a password.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **email** | **String** (email) | The address the confirmation link was issued for. It has to be the same address the key was signed with, and a value that is not an email address fails the request with 400. | [optional] [example: `user@example.com`] [nullable] |
| **first** | **Boolean** | Whether the link is being followed for the first time, taken from the `first` parameter of the confirmation URL. It is part of what the key was signed over, so passing a different value invalidates the key rather than changing behaviour. | [optional] [example: `true`] [nullable] |
| **key** | **String** | The `key` parameter of the confirmation URL, copied verbatim. It is bound to the address and to the moment it was issued, so it stops being accepted once the portal email key lifetime has passed. | [optional] [example: `abc123def456`] [nullable] |
