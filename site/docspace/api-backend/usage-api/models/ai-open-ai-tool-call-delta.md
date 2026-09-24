# AiOpenAIToolCallDelta
The incremental part of one tool call the model requested.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **index** | **BigDecimal** | The zero-based position of the tool call within the message. | [required] |
| **id** | **String** | The tool call identifier, quoted back when its result is submitted. | [optional] |
| **type** | **String** | Always `function` - the only tool kind the API defines. | [optional] [enum: `function`] |
| **function** | [**AiOpenAIToolCallDelta_function**](ai-open-ai-tool-call-delta-function.md) |  | [optional] |
