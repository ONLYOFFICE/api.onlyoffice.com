# aiProfilesGetById 200 response

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | Unique profile identifier (UUID). | [required] |
| **name** | **String** | User-defined profile display name. | [required] |
| **providerType** | [**AiProviderType**](ai-provider-type.md) | Provider type for this profile. Use `external` to delegate all HTTP transport to `PlatformAdapter.externalFetch` while reusing an existing provider's response parser — see `Profile.basedOn` for the format selector. | [required] |
| **basedOn** | [**AiBuiltinProviderType**](ai-builtin-provider-type.md) | Selects the response-format parser used by the `external` provider. Ignored for any other `providerType`.  Supported values are `openai`, `anthropic`, `mistral` and `openrouter`. Remaining values (`genai`, `stabilityai`, …) are accepted by the type but not yet implemented; passing one raises an error at request time. | [optional] [enum: `anthropic`, `ollama`, `openai`, `openaicompatible`, `together`, `openrouter`, `genai`, `deepseek`, `xai`, `lm-studio`, `mistral`, `groq`, `zhipu`, `stabilityai`, `gpt4all`, `onlyoffice`, `external`] |
| **baseUrl** | **String** | Base URL of the provider API. | [required] |
| **modelId** | **String** | Selected model ID within this provider. | [required] |
| **reasoning** | **Boolean** | Whether extended thinking is enabled for this profile's model. | [optional] |
| **reasoningSupport** | [**AiReasoningSupport**](ai-reasoning-support.md) | Extended-thinking capabilities of the selected model as reported by the provider's catalogue at save time (see `Model.reasoningSupport`). When present the composer's Effort row follows it exactly; when absent the provider's id-based table answers. Hosts persist it with the rest of the profile. | [optional] |
| **capabilities** | **BigDecimal** | Bitmask of capabilities supported by the selected model. | [optional] |
| **canUseTool** | **Boolean** | Result of the live tool-capability probe performed at create time and on changes to `modelId` / `providerType` / `baseUrl`. `undefined` means the probe has never run for this profile (legacy record). | [optional] |
| **useResponsesApi** | **Boolean** | Result of the live Responses-API probe (parallel to `canUseTool`). `true` means the model speaks `/v1/responses` and the OpenAI provider must route through `client.responses.create` — required for gpt-5+ reasoning models that reject `reasoning_effort` together with `tools` on `/v1/chat/completions`. Probed at create time and whenever `modelId` / `providerType` / `baseUrl` change. `undefined` means the probe never ran (legacy record) — readers treat that as `false`. | [optional] |
| **isCloudProvider** | **Boolean** | Whether this profile uses a cloud-hosted provider (e.g. ONLYOFFICE DocSpace). | [optional] |
| **useProxy** | **Boolean** | Route every provider request through the host's `fetchProxy` instead of the global `fetch`. Useful when the host runs the widget in a sandbox without direct network access (CORS, custom auth, etc.). Has no effect when the `PlatformAdapter.fetchProxy` is not configured. | [optional] |
| **createdAt** | **BigDecimal** | Creation timestamp (ms since epoch). Used to sort the AI models list newest-first. | [optional] |
