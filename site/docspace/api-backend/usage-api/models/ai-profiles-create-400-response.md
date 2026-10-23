# aiProfilesCreate 400 response

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **success** | **Boolean** | True when the profile was persisted. | [required] |
| **profile** | [**AiProfile**](ai-profile.md) | The persisted profile. Present on success. | [optional] |
| **error** | **String** | The error message, ready to be shown to the caller. | [required] |
