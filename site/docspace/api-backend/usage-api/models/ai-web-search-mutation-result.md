# AiWebSearchMutationResult
Outcome of `WebSearchEngine.configure` — either the persisted config or a field-scoped error suitable for the settings form.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **success** | **Boolean** | True when the configuration was persisted. | [required] [example: `true`] |
| **config** | [**AiWebSearchConfig**](ai-web-search-config.md) | The persisted web-search configuration. Present on success. | [optional] |
| **error** | [**AiTErrorData**](ai-t-error-data.md) | Why the configuration was rejected. Present on failure. | [optional] |
