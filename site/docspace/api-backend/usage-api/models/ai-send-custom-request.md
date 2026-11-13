# AiSendCustomRequest

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **isStream** | **Boolean** | Stream the reply (ndjson) when true, else return a single message. | [required] |
| **systemPrompt** | **String** | Caller-supplied system prompt for this one-turn call. | [required] |
| **userMessage** | [**AiThreadMessageLike**](ai-thread-message-like.md) |  | [required] |
| **actionArgs** | [**AiActionArgs**](ai-action-args.md) | Per-request options of the round: extra tools, reasoning, a prompt override and the connected context. | [optional] |
| **profileId** | **String** | Profile to run this call on. When omitted, or when no profile has this id, the `Default` assignment is used. | [optional] |
