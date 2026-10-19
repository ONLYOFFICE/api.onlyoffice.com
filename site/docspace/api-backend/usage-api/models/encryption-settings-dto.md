# EncryptionSettingsDto
The state of the portal's storage encryption.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **password** | **String** | Always an empty string: the encryption password is never returned. | [optional] [nullable] |
| **status** | [**EncryptionStatus**](encryption-status.md) | Whether the storage is encrypted, decrypted, or on its way to either. | [optional] [enum: `0`, `1`, `2`, `3`] |
| **notifyUsers** | **Boolean** | Whether the users are notified when the operation starts and ends. | [optional] [example: `true`] |
