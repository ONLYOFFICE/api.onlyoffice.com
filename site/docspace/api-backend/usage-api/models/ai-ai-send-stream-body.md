# AiAiSendStreamBody
Shared body of the two streaming send endpoints (`sendWithStream` and its OpenAI-framed twin) — the `Chat` action is implied, so there is no `actionType`.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **threadId** | **String** | Target thread; a new one is created (with an auto title) when omitted. | [optional] [example: `11111111-1111-1111-1111-111111111111`] |
| **userMessage** | [**AiThreadMessageLike**](ai-thread-message-like.md) | The user turn to send. | [required] [example: `{role=user, content=Summarise the attached contract.}`] |
| **actionArgs** | [**AiAiActionArgs**](ai-ai-action-args.md) | Per-request engine options: extra tools, reasoning, prompt override. | [optional] [example: `{isReasoning=false}`] |
| **entityId** | **String** | Optional entity (room) scope for profile resolution. | [optional] [example: `1234`] |
| **profileId** | **String** | Session-level profile override for this request only. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
