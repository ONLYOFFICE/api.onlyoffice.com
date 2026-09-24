# aiProfilesListProviderModels request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **providerType** | [**AiProviderType**](ai-provider-type.md) | Provider whose catalog to list. | [required] |
| **baseUrl** | **String** | Provider API base URL. | [required] [example: `https://api.openai.com/v1`] |
| **apiKey** | **String** | Provider API key. Omit it for a provider that needs none; the request is then made without one. | [optional] |
