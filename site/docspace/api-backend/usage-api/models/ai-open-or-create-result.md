# AiOpenOrCreateResult
The thread that was opened or created, with its stored messages.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **threadId** | **String** | The thread that was opened, or the one just created. | [required] |
| **title** | **String** | The title generated for a thread this call created; an empty string when it opened an existing thread. | [required] |
| **priorMessages** | [**List**](ai-thread-message-like.md) | The messages already in the thread - empty for a thread that was just created. | [required] |
