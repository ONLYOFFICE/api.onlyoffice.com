# AiOpenOrCreateResult
Resolved thread state returned by `ThreadsEngine.openOrCreate`.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **threadId** | **String** | The thread that was opened, or the one just created. | [required] |
| **title** | **String** | Empty string for existing threads — the engine doesn't re-fetch. | [required] |
| **priorMessages** | [**List**](ai-thread-message-like.md) | The messages already in the thread - empty for a thread that was just created. | [required] |
