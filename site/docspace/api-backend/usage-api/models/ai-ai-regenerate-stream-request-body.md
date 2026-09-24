# aiAiRegenerateStream request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **threadId** | **String** | Target thread (must already exist). | [required] |
| **actionArgs** | [**AiAiActionArgs**](ai-ai-action-args.md) | Per-request engine options: extra tools, reasoning, prompt override. | [optional] |
| **entityId** | **String** | Optional entity (room) scope for profile resolution. | [optional] |
| **profileId** | **String** | Session-level profile override for this request only. | [optional] |
