# AiActionArgs
Per-request options of an AI round: extra tools, the depth of reasoning, a system prompt override and the rooms and folder connected as context.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **tools** | [**List**](ai-mcp-item.md) | Extra tools offered to the model for this request. | [optional] [example: `[]`] |
| **isReasoning** | **Boolean** | Legacy extended-thinking switch; stands for `medium`. `reasoningLevel` wins when both are set. | [optional] [example: `false`] |
| **reasoningLevel** | [**AiReasoningLevel**](ai-reasoning-level.md) | Depth of extended thinking for the round; providers clamp it to what the model accepts. | [optional] [enum: `off`, `low`, `medium`, `high`, `max`] |
| **prompt** | [**AiActionArgs_prompt**](ai-action-args-prompt.md) |  | [optional] |
| **toolInstructions** | **Map** | Usage notes of the MCP servers the caller holds the connection to, keyed by server type; folded into the system prompt as advisory text. | [optional] |
| **contextRooms** | [**List**](ai-context-room-ref.md) | Instructions rooms connected to the chat as context, each with the skills the round may use. | [optional] |
| **knowledgeRooms** | [**List**](ai-knowledge-room-ref.md) | Knowledge rooms connected to the chat; the knowledge search tool of the round is limited to them. Each `id` has to be a DocSpace room id. | [optional] |
| **knowledgeRoom** | [**AiKnowledgeRoomRef**](ai-knowledge-room-ref.md) | A single knowledge room, as an older client sends it. Read only when `knowledgeRooms` is absent; send `knowledgeRooms` instead. | [optional] |
| **folderContext** | [**AiFolderContextRef**](ai-folder-context-ref.md) | The folder connected to the chat as the round's context. It becomes the location the model is told the user works in, and the entry the round is attributed to. | [optional] |
| **entityId** | **String** | The entry the round is attributed to. A hint, resolved against the caller's own access. | [optional] |
