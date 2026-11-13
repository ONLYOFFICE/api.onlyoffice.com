# aiProfilesGetById 200 response

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | Unique profile identifier (UUID). | [required] |
| **name** | **String** | User-defined profile display name. | [required] |
| **providerType** | [**AiProviderType**](ai-provider-type.md) | The provider type of the profile. `external` sends every request through a transport the embedding application supplies while parsing the answers with the provider named in `basedOn`. | [required] |
| **basedOn** | [**AiBuiltinProviderType**](ai-builtin-provider-type.md) | Selects the response-format parser used by the `external` provider. Ignored for any other `providerType`.  Supported values are `openai`, `anthropic`, `mistral` and `openrouter`. Remaining values (`genai`, `stabilityai`, …) are accepted by the type but not yet implemented; passing one raises an error at request time. | [optional] [enum: `anthropic`, `ollama`, `openai`, `openaicompatible`, `together`, `openrouter`, `genai`, `deepseek`, `xai`, `lm-studio`, `mistral`, `groq`, `zhipu`, `stabilityai`, `gpt4all`, `onlyoffice`, `external`] |
| **baseUrl** | **String** | Base URL of the provider API. | [required] |
| **modelId** | **String** | Selected model ID within this provider. | [required] |
| **reasoning** | **Boolean** | Whether extended thinking is enabled for this profile's model. | [optional] |
| **reasoningSupport** | [**AiReasoningSupport**](ai-reasoning-support.md) | What the model can do with extended thinking, as the provider's catalogue reported it when the profile was saved; the effort choices in the chat follow it. When absent, the abilities are taken from the model ID. | [optional] |
| **contextWindow** | **BigDecimal** | Size of the selected model's context window in tokens, as the provider's catalogue reported it at save time (see `Model.contextWindow`). The engine's history compaction measures the thread against it; when absent the id-based table answers, and when that has no row either, `CompactionOptions.defaultContextWindow`. Hosts persist it with the rest of the profile. | [optional] |
| **capabilities** | **BigDecimal** | Bitmask of capabilities supported by the selected model. | [optional] |
| **canUseTool** | **Boolean** | Result of the live tool-capability probe performed at create time and on changes to `modelId` / `providerType` / `baseUrl`. `undefined` means the probe has never run for this profile (legacy record). | [optional] |
| **useResponsesApi** | **Boolean** | Result of the live Responses-API probe (parallel to `canUseTool`). `true` means the model speaks `/v1/responses` and the OpenAI provider must route through `client.responses.create` — required for gpt-5+ reasoning models that reject `reasoning_effort` together with `tools` on `/v1/chat/completions`. Probed at create time and whenever `modelId` / `providerType` / `baseUrl` change. `undefined` means the probe never ran (legacy record) — readers treat that as `false`. | [optional] |
| **isCloudProvider** | **Boolean** | Whether this profile uses a cloud-hosted provider (e.g. ONLYOFFICE DocSpace). | [optional] |
| **useProxy** | **Boolean** | Whether the chat client sends this profile's provider requests through the portal's proxy instead of directly. Has no effect when no proxy is configured. | [optional] |
| **createdAt** | **BigDecimal** | Creation timestamp (ms since epoch). Used to sort the AI models list newest-first. | [optional] |
