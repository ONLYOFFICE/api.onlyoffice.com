# AiImportError
Per-entry error reported by `PromptsEngine.importBundle`.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **kind** | **String** | `folder` or `prompt`, plus the offending name or id. | [required] [example: `prompt`] [enum: `folder`, `prompt`] |
| **ref** | **String** | The offending entry - its name or its id. | [required] [example: `33333333-3333-3333-3333-333333333333`] |
| **error** | [**AiTErrorData**](ai-t-error-data.md) | Why the entry was rejected. | [required] [example: `a prompt of that name already exists`] |
