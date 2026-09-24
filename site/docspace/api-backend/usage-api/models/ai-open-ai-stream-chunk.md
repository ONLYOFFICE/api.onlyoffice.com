# AiOpenAIStreamChunk
A chunk or the terminal error envelope emitted on a failed stream.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | The completion identifier, stable across every chunk of one response. | [required] |
| **object** | **String** | Always `chat.completion.chunk`. | [required] [enum: `chat.completion.chunk`] |
| **created** | **BigDecimal** | When the completion started, in Unix seconds. | [required] |
| **model** | **String** | The model that produced the completion - the resolved profile's model. | [required] |
| **choices** | [**List**](ai-open-ai-chunk-choice.md) | The choices carried by this chunk. This service emits exactly one. | [required] |
| **error** | [**AiOpenAIStreamError_error**](ai-open-ai-stream-error-error.md) |  | [required] |
