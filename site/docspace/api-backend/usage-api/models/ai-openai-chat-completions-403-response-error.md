# aiOpenaiChatCompletions 403 response.error

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **message** | **String** | Human-readable description of the failure. | [required] |
| **type** | **String** | OpenAI error class, for example `invalid_request_error`. | [required] [example: `invalid_request_error`] |
| **code** | **String** | Machine-readable code, when the provider supplies one. | [optional] [nullable] |
| **param** | **String** | The request parameter at fault, when the failure names one. | [optional] [nullable] |
