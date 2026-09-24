# AiThread
Chat conversation metadata. Represents a single chat session (thread).

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **threadId** | **String** | Unique thread identifier (UUID). | [required] [example: `11111111-1111-1111-1111-111111111111`] |
| **title** | **String** | Optional thread title. Auto-generated from the first message if not set. | [optional] [example: `Contract review`] |
| **lastEditDate** | **BigDecimal** | Timestamp (ms since epoch) of the last message in this thread. Used for sorting. | [optional] [example: `1767225600000`] |
| **provider** | [**AiTProvider**](ai-t-provider.md) | Provider configuration at the time of last message. Used for thread-level provider display. | [optional] |
| **model** | [**AiModel**](ai-model.md) | Model info at the time of last message. | [optional] |
| **profileId** | **String** | ID of the profile used for this thread. Links to `Profile.id`. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
