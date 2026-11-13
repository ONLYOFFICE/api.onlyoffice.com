# AiThreadMessageLike.status
Delivery/generation status of the message.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **type** | **String** | `running`, `requires-action`, `complete` or `incomplete`. | [required] |
| **reason** | **String** | Why the message is in that state: `tool-calls` or `interrupt` for `requires-action`; `stop` or `unknown` for `complete`; `cancelled`, `tool-calls`, `length`, `content-filter`, `other` or `error` for `incomplete`. An `incomplete` message the chat stored carries `cancelled` (the round was stopped) or `error`. | [optional] |
| **error** | [**AiChatErrorPayload**](ai-chat-error-payload.md) | What failed, on an `incomplete` message whose `reason` is `error`. | [optional] |
