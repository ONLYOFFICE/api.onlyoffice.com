# AiThreadMessageLike
A single chat message as it travels on the wire.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | Storage-assigned message id (absent on inbound drafts). | [optional] [example: `22222222-2222-2222-2222-222222222222`] |
| **role** | **String** | Message author role. | [required] [example: `user`] [enum: `user`, `assistant`, `system`] |
| **content** | [**AiThreadMessageLike_content**](ai-thread-message-like-content.md) |  | [required] |
| **createdAt** | **String** | Creation timestamp, ISO-8601 on the wire. | [optional] [example: `2026-01-01T00:00:00.000Z`] |
| **status** | [**AiThreadMessageLike_status**](ai-thread-message-like-status.md) |  | [optional] |
| **metadata** | **Object** | Per-message metadata. The chat library writes `custom` (with the round's `contextEntityId`) and `steps` (token usage per provider request); `unstable_state`, `unstable_annotations`, `unstable_data` and `submittedFeedback` may appear as well. Read it as an open map. | [optional] [example: `{}`] |
| **attachments** | **List** | Attachments linked to the message (`id`, `type`, `name`, `contentType`, `status`, `content`). Read them as open objects. | [optional] [example: `[55555555-5555-5555-5555-555555555555]`] |
