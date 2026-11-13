# AiToolCallData
Identifies a pending tool call to resume — mirrors the library `ToolCallData` (its serializable fields).

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **threadId** | **String** | Thread the assistant message belongs to. | [required] [example: `11111111-1111-1111-1111-111111111111`] |
| **messageId** | **String** | Storage id of the assistant message holding the tool call. | [required] [example: `22222222-2222-2222-2222-222222222222`] |
| **idx** | **BigDecimal** | Index of the tool-call content part inside `message.content`. | [required] [example: `0`] |
| **message** | [**AiThreadMessageLike**](ai-thread-message-like.md) | A copy of the assistant message as it was when the tool call surfaced. Optional and ignored: the round resumes from the stored message. Leave it out - a long conversation's copy can push the body past the size limit. | [optional] [example: `{role=assistant, content=}`] |
| **actionArgs** | [**AiActionArgs**](ai-action-args.md) | Per-request options of the round: extra tools, reasoning, a prompt override and the connected context. | [optional] [example: `{isReasoning=false}`] |
| **entityId** | **String** | Optional entity (room) scope for profile resolution. | [optional] [example: `1234`] |
| **contextEntityId** | **String** | The folder or room the user is in. Tools run against it and the model is told it is the user's location; falls back to `entityId` when omitted. | [optional] |
| **profileId** | **String** | Session-level profile override for this request only. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
