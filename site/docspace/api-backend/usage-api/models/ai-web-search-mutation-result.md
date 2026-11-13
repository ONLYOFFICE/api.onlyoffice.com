# AiWebSearchMutationResult
The outcome of storing a web-search configuration: the stored configuration, or an error naming the field that was refused.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **success** | **Boolean** | True when the configuration was persisted. | [required] [example: `true`] |
| **config** | [**AiWebSearchConfig**](ai-web-search-config.md) | The persisted web-search configuration. Present on success. | [optional] |
| **error** | [**AiErrorData**](ai-error-data.md) | Why the configuration was rejected. Present on failure. | [optional] |
