# OperationTokenUsageDto
Tokens an AI operation consumed, as recorded in the operation metadata. A kind the provider did not report is `0`.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **totalTokens** | **Long** (int64) | All tokens of the request: prompt plus completion. | [optional] [example: `20747`] |
| **promptTokens** | **Long** (int64) | Tokens sent to the model, cached ones included. | [optional] [example: `19332`] |
| **completionTokens** | **Long** (int64) | Tokens the model generated, reasoning ones included. | [optional] [example: `1415`] |
| **cachedTokens** | **Long** (int64) | Part of the prompt tokens read from the provider cache. | [optional] [example: `19226`] |
| **cacheWriteTokens** | **Long** (int64) | Part of the prompt tokens written to the provider cache. | [optional] [example: `104`] |
| **reasoningTokens** | **Long** (int64) | Part of the completion tokens the model spent on reasoning. | [optional] [example: `68`] |
| **imageTokens** | **Long** (int64) | Tokens spent on images. | [optional] [example: `0`] |
