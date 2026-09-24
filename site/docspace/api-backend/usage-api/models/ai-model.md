# AiModel
AI model metadata. Describes a single model available from a provider.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | Model identifier as used by the provider API (e.g. `gpt-4o`, `claude-sonnet-4-20250514`). | [required] [example: `gpt-4o`] |
| **name** | **String** | Human-readable model name for display in the UI. | [required] [example: `GPT-4o`] |
| **provider** | [**AiProviderType**](ai-provider-type.md) | Provider that offers this model. | [required] [example: `openai`] |
| **reasoning** | **Boolean** | Whether this model supports extended thinking / chain-of-thought reasoning. | [optional] [example: `false`] |
| **reasoningSupport** | [**AiReasoningSupport**](ai-reasoning-support.md) | What the model can do with extended thinking, when the provider's catalogue says so (OpenRouter and the ONLYOFFICE route report a per-model `reasoning` object). Copied onto the profile at save time; absent, the widget falls back to the provider's id-based table. | [optional] |
| **capabilities** | **BigDecimal** | Bitmask of model capabilities (Chat, Image, Vision, Tools, etc.). Used to filter models per `ActionType`. | [optional] [example: `7`] |
