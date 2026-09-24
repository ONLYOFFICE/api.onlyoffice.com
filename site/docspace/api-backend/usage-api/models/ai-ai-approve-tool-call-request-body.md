# aiAiApproveToolCall request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **result** | **oas_any_type_not_mapped** |  | [required] [nullable] |
| **allowAlways** | **Boolean** | Persist auto-approve for this tool's name. | [optional] |
| **threadId** | **String** | Thread the assistant message belongs to. | [required] |
| **messageId** | **String** | Storage id of the assistant message holding the tool call. | [required] |
| **idx** | **BigDecimal** | Index of the tool-call content part inside `message.content`. | [required] |
| **message** | [**AiThreadMessageLike**](ai-thread-message-like.md) | Snapshot of the assistant message at the time the tool call surfaced. | [required] |
| **actionArgs** | [**AiAiActionArgs**](ai-ai-action-args.md) | Per-request engine options: extra tools, reasoning, prompt override. | [optional] |
| **entityId** | **String** | Optional entity (room) scope for profile resolution. | [optional] |
| **profileId** | **String** | Session-level profile override for this request only. | [optional] |
