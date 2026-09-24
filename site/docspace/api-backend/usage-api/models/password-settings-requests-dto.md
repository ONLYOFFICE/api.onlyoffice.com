# PasswordSettingsRequestsDto
The four values that make up the portal password policy, replaced together.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **minLength** | **Integer** (int32) | The shortest password the portal will accept. It has to sit between the floor the installation is configured with, 8 characters unless it was changed, and the ceiling of 30; a value outside that is refused with 400. | [required] [example: `8`] |
| **upperCase** | **Boolean** | Whether a password must contain at least one uppercase letter. There is no partial update on this body, so leaving the flag out stores it as `false` and drops the requirement. | [optional] [example: `true`] |
| **digits** | **Boolean** | Whether a password must contain at least one digit. Leaving the flag out stores it as `false` and drops the requirement. | [optional] [example: `true`] |
| **specSymbols** | **Boolean** | Whether a password must contain at least one special symbol. Leaving the flag out stores it as `false` and drops the requirement. | [optional] [example: `true`] |
