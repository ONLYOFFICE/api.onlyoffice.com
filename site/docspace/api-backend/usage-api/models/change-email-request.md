# ChangeEmailRequest
The request parameters for updating a user email.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **email** | **String** (email) | The new address in plain text, up to 255 characters. It is stored in lowercase, and one of this field and `encEmail` is required. | [optional] [example: `john.doe@example.com`] [minLength: 0] [maxLength: 255] [nullable] |
| **encEmail** | **String** | The new address in the encrypted form the confirmation link carries. Pass the value from the link unchanged; it is used only when `email` is empty. | [optional] [example: `encrypted_email_string`] [nullable] |
