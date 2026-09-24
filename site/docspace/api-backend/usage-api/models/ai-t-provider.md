# AiTProvider
Minimal provider connection configuration. Used to connect to a provider API.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **type** | [**AiProviderType**](ai-provider-type.md) | Provider type identifier. | [required] [example: `openai`] |
| **name** | **String** | User-defined display name for this provider connection. | [required] [example: `OpenAI GPT-4o`] |
| **key** | **String** | API key or token. Optional for local providers (Ollama, LM Studio). | [optional] [example: `sk-your-provider-api-key`] |
| **baseUrl** | **String** | Base URL of the provider API. | [required] [example: `https://api.openai.com/v1`] |
