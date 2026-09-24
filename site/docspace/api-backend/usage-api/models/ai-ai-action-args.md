# AiAiActionArgs

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **tools** | [**List**](ai-tmcp-item.md) | Extra tools offered to the model for this request. | [optional] [example: `[]`] |
| **isReasoning** | **Boolean** | Legacy extended-thinking switch; stands for `medium`. `reasoningLevel` wins when both are set. | [optional] [example: `false`] |
| **reasoningLevel** | [**AiAiReasoningLevel**](ai-ai-reasoning-level.md) | Depth of extended thinking for the round; providers clamp it to what the model accepts. | [optional] [enum: `off`, `low`, `medium`, `high`, `max`] |
| **prompt** | [**AiAiActionArgs_prompt**](ai-ai-action-args-prompt.md) |  | [optional] |
