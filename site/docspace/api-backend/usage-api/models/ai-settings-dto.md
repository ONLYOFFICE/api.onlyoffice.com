# AiSettingsDto
The AI module settings.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **vectorizationEnabled** | **Boolean** | Indicates whether document vectorization is enabled. | [optional] [example: `true`] |
| **vectorizationNeedReset** | **Boolean** | Indicates whether the embedding provider API key needs to be reconfigured. | [optional] [example: `false`] |
| **aiReady** | **Boolean** | Indicates whether the AI subsystem is fully configured and operational. | [optional] [example: `true`] |
| **embeddingModel** | **String** | The name of the embedding model used for document vectorization. | [required] [example: `text-embedding-3-small`] [nullable] |
| **systemAiEnabled** | **Boolean** | Indicates whether the system-level AI provider is enabled. | [optional] [example: `true`] |
| **recommendedModelForForms** | **String** | The identifier of the model recommended for form generation. | [optional] [example: `gpt-5.4`] [nullable] |
| **toolPermissionMode** | [**AiToolPermissionMode**](ai-tool-permission-mode.md) | How tool calls made by the model are approved for the current user. The default applies while the user has stored nothing. | [optional] [enum: `0`, `1`, `2`] |
