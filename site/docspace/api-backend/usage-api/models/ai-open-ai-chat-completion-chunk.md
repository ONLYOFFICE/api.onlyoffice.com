# AiOpenAIChatCompletionChunk
One `chat.completion.chunk` of an OpenAI-compatible streaming response. Only the fields this service can populate are emitted - an OpenAI client tolerates the rest as absent.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | The completion identifier, stable across every chunk of one response. | [required] |
| **object** | **String** | Always `chat.completion.chunk`. | [required] [enum: `chat.completion.chunk`] |
| **created** | **BigDecimal** | When the completion started, in Unix seconds. | [required] |
| **model** | **String** | The model that produced the completion - the resolved profile's model. | [required] |
| **choices** | [**List**](ai-open-ai-chunk-choice.md) | The choices carried by this chunk. This service emits exactly one. | [required] |
