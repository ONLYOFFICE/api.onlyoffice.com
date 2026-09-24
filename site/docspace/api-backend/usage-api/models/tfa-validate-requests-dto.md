# TfaValidateRequestsDto
The one-time code that completes a pending two-factor step, and how long the resulting sign-in lasts.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **code** | **String** | The code to check - either one from the authenticator application or one of the account's unused backup codes, which is spent by the check. A wrong code is refused with 400 and counts against the portal login attempt limit. | [required] [example: `123456`] [nullable] |
| **session** | **Boolean** | Whether the sign-in that follows is tied to the browser session. When it is, the session ends with the browser rather than lasting for the portal session lifetime. | [optional] [example: `true`] |
