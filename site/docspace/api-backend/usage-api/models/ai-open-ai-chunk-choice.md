# AiOpenAIChunkChoice
One choice of a streaming completion, carrying the part this chunk adds.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **index** | **BigDecimal** | The zero-based position of the choice. This service emits a single choice, so always 0. | [required] |
| **delta** | [**AiOpenAIChoiceDelta**](ai-open-ai-choice-delta.md) | What this chunk adds to the choice. | [required] |
| **finish\_reason** | [**AiOpenAIFinishReason**](ai-open-ai-finish-reason.md) | Why the completion stopped, or null while it is still streaming. | [required] [enum: `stop`, `length`, `tool_calls`, `content_filter`, `null`] [nullable] |
