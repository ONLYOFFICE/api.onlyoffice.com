# AiRegenerateStreamRequest

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **threadId** | **String** | Target thread (must already exist). | [required] |
| **messageId** | **String** | The user message to re-roll from: everything stored after it is deleted. When omitted, or no longer in the thread, the last user message is used. | [optional] |
| **keepCount** | **Integer** | How many messages from the start of the thread to keep, used when `messageId` does not resolve. The message at `keepCount - 1` has to be a user message; otherwise the value is ignored. | [optional] |
| **expectedLength** | **Integer** | The thread length the caller saw when it computed `keepCount`. When it differs from the stored length, `keepCount` is discarded and the last user message is used instead. | [optional] |
| **actionArgs** | [**AiActionArgs**](ai-action-args.md) | Per-request options of the round: extra tools, reasoning, a prompt override and the connected context. | [optional] |
| **entityId** | **String** | Optional entity (room) scope for profile resolution. | [optional] |
| **contextEntityId** | **String** | The folder or room the user is in. Tools run against it and the model is told it is the user's location; falls back to `entityId` when omitted. | [optional] |
| **profileId** | **String** | Session-level profile override for this request only. | [optional] |
