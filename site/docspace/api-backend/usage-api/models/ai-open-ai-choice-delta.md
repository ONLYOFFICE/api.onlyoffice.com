# AiOpenAIChoiceDelta
The incremental part of one choice - what this chunk adds to the assistant message.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **role** | **String** | Sent on the first chunk only, always `assistant`. | [optional] [enum: `assistant`] |
| **content** | **String** | The text this chunk appends. Null when the chunk carries no text. | [optional] [nullable] |
| **tool\_calls** | [**List**](ai-open-ai-tool-call-delta.md) | The tool calls the model requested, emitted in place of text. | [optional] |
