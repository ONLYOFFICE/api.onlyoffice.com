# ErrorApiResponse.error
What went wrong.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **message** | **String** | The human-readable error message. | [optional] |
| **type** | **String** | The .NET type of the underlying exception. Only sent when stack traces are enabled. | [optional] |
| **stack** | **String** | The stack trace of the underlying exception. Only sent when stack traces are enabled. | [optional] |
| **hresult** | **Integer** (int32) | The HRESULT of the underlying exception. Only sent when stack traces are enabled. | [optional] |
