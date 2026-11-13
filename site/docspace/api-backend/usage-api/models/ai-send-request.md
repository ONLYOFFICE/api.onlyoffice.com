# AiSendRequest

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **actionType** | [**AiActionType**](ai-action-type.md) | Which AI action to run — selects the assignment slot and action. | [required] [enum: `Default`, `Chat`, `Code`, `Summarization`, `Translation`, `TextAnalyze`, `ImageGeneration`, `OCR`, `Vision`, `FormAnalysis`, `GenerateMeta`] |
| **userMessage** | [**AiThreadMessageLike**](ai-thread-message-like.md) | The user turn to send. | [required] |
| **actionArgs** | [**AiActionArgs**](ai-action-args.md) | Per-request options of the round: extra tools, reasoning, a prompt override and the connected context. | [optional] |
| **entityId** | **String** | Optional entity (room) scope for profile resolution. | [optional] |
| **contextEntityId** | **String** | The folder or room the user is in. Tools run against it and the model is told it is the user's location; falls back to `entityId` when omitted. | [optional] |
