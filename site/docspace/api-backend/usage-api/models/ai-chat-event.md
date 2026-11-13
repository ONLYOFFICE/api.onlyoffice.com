# AiChatEvent
One event of a chat stream, told apart by `type`: `message-start`, `message-delta` and `message-end` frame the assistant reply, `message-incomplete` reports a provider error or an unfinished answer, `thread-title` carries a generated title, and `tool-call-pending` pauses the round until the call is approved (`POST api/2.0/ai/ai/approve-tool-call`) or denied (`POST api/2.0/ai/ai/deny-tool-call`).

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **type** | **String** | Emitted once per `sendWithStream` call, immediately after the user message has been persisted by storage and before the assistant stream starts. Carries the storage-assigned `id` and `createdAt`. The UI uses it to render the user bubble — no client-side optimistic placeholder is needed, which keeps the runtime tree free of phantom nodes from index-fallback ids. | [required] [example: `message-delta`] [enum: `user-message-stored`, `message-start`, `message-delta`, `message-end`, `message-incomplete`, `tool-call-pending`, `thread-title`, `context-compacted`] |
| **message** | [**AiThreadMessageLike**](ai-thread-message-like.md) | The message the event is about, in the state it has reached. | [optional] |
| **messageId** | **String** | The storage identifier of that message. | [optional] [example: `22222222-2222-2222-2222-222222222222`] |
| **idx** | **BigDecimal** | The zero-based position of the pending tool call within the message. | [optional] |
| **threadId** | **String** | The thread the event belongs to. | [optional] [example: `11111111-1111-1111-1111-111111111111`] |
| **autoAllow** | **Boolean** | The tool runs without asking the user, as the user's tool permission mode decides: under `ask` never - the always-allow list, `requireApproval` and the annotations are all ignored; under `auto` a tool on the always-allow list, one with `requireApproval: false`, or one annotated `readOnlyHint: true` or `destructiveHint: false`; under `allow` every tool. | [optional] |
| **serverExecuted** | **Boolean** | The tool is run by the service itself: the client must not run it, only ask for approval (unless `autoAllow`) and approve or deny the call - an approval needs no `result`. | [optional] |
| **title** | **String** | The generated thread title. | [optional] |
| **profileId** | **String** | The profile that generated the title, when one was used. | [optional] |
