# AiSendRequest

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **actionType** | [**AiActionType**](ai-action-type.md) | Which AI action to run — selects the assignment slot and action. | [required] [enum: `Default`, `Chat`, `Code`, `Summarization`, `Translation`, `TextAnalyze`, `ImageGeneration`, `OCR`, `Vision`, `FormAnalysis`] |
| **userMessage** | [**AiThreadMessageLike**](ai-thread-message-like.md) | The user turn to send. | [required] |
| **actionArgs** | [**AiActionArgs**](ai-action-args.md) | Per-request engine options: extra tools, reasoning, prompt override. | [optional] |
| **entityId** | **String** | Optional entity (room) scope for profile resolution. | [optional] |
