# AiApproveToolCallRequest

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **result** | **oas_any_type_not_mapped** |  | [required] [nullable] |
| **allowAlways** | **Boolean** | Persist auto-approve for this tool's name. | [optional] |
| **threadId** | **String** | Thread the assistant message belongs to. | [required] |
| **messageId** | **String** | Storage id of the assistant message holding the tool call. | [required] |
| **idx** | **BigDecimal** | Index of the tool-call content part inside `message.content`. | [required] |
| **message** | [**AiThreadMessageLike**](ai-thread-message-like.md) | A copy of the assistant message as it was when the tool call surfaced. Optional and ignored: the round resumes from the stored message. Leave it out - a long conversation's copy can push the body past the size limit. | [optional] |
| **actionArgs** | [**AiActionArgs**](ai-action-args.md) | Per-request options of the round: extra tools, reasoning, a prompt override and the connected context. | [optional] |
| **entityId** | **String** | Optional entity (room) scope for profile resolution. | [optional] |
| **contextEntityId** | **String** | The folder or room the user is in. Tools run against it and the model is told it is the user's location; falls back to `entityId` when omitted. | [optional] |
| **profileId** | **String** | Session-level profile override for this request only. | [optional] |
