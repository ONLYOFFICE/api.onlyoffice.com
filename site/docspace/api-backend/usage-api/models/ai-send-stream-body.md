# AiSendStreamBody
Shared body of the two streaming send endpoints (`sendWithStream` and its OpenAI-framed twin) — the `Chat` action is implied, so there is no `actionType`.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **threadId** | **String** | Target thread; a new one is created (with an auto title) when omitted. | [optional] [example: `11111111-1111-1111-1111-111111111111`] |
| **userMessage** | [**AiThreadMessageLike**](ai-thread-message-like.md) | The user turn to send. | [required] [example: `{role=user, content=Summarise the attached contract.}`] |
| **actionArgs** | [**AiActionArgs**](ai-action-args.md) | Per-request options of the round: extra tools, reasoning, a prompt override and the connected context. | [optional] [example: `{isReasoning=false}`] |
| **entityId** | **String** | Optional entity (room) scope for profile resolution. | [optional] [example: `1234`] |
| **contextEntityId** | **String** | The folder or room the user is in. Tools run against it and the model is told it is the user's location; falls back to `entityId` when omitted. | [optional] |
| **profileId** | **String** | Session-level profile override for this request only. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
