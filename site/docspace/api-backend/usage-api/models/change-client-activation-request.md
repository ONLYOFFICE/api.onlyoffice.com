# ChangeClientActivationRequest
Client activation change request

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **status** | **Boolean** | Whether the client may obtain tokens from now on. Sending false leaves the registration and the already issued tokens in place but refuses new authorization requests; sending true allows them again. | [required] [example: `true`] |
