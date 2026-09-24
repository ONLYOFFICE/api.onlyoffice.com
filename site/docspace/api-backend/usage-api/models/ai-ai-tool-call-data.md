# AiAiToolCallData
Identifies a pending tool call to resume — mirrors the library `ToolCallData` (its serializable fields).

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **threadId** | **String** | Thread the assistant message belongs to. | [required] [example: `11111111-1111-1111-1111-111111111111`] |
| **messageId** | **String** | Storage id of the assistant message holding the tool call. | [required] [example: `22222222-2222-2222-2222-222222222222`] |
| **idx** | **BigDecimal** | Index of the tool-call content part inside `message.content`. | [required] [example: `0`] |
| **message** | [**AiThreadMessageLike**](ai-thread-message-like.md) | Snapshot of the assistant message at the time the tool call surfaced. | [required] [example: `{role=assistant, content=}`] |
| **actionArgs** | [**AiAiActionArgs**](ai-ai-action-args.md) | Per-request engine options: extra tools, reasoning, prompt override. | [optional] [example: `{isReasoning=false}`] |
| **entityId** | **String** | Optional entity (room) scope for profile resolution. | [optional] [example: `1234`] |
| **profileId** | **String** | Session-level profile override for this request only. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
