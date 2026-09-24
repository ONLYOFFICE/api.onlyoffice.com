# AiFolderMutationResult
Outcome of `createFolder` / `renameFolder` — either the persisted folder or a field-scoped error.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **success** | **Boolean** | True when the folder was persisted. | [required] [example: `true`] |
| **folder** | [**AiPromptFolder**](ai-prompt-folder.md) | The persisted folder. Present on success. | [optional] |
| **error** | [**AiTErrorData**](ai-t-error-data.md) | Why the folder was rejected. Present on failure. | [optional] |
