# AiPromptMutationResult
Outcome of `create` / `update` / `move` on a prompt — either the persisted prompt or a field-scoped error.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **success** | **Boolean** | True when the prompt was persisted. | [required] [example: `true`] |
| **prompt** | [**AiPrompt**](ai-prompt.md) | The persisted prompt. Present on success. | [optional] |
| **error** | [**AiTErrorData**](ai-t-error-data.md) | Why the prompt was rejected. Present on failure. | [optional] |
