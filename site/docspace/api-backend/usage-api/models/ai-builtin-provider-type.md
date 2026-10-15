# AiBuiltinProviderType
Union of all 17 built-in AI provider type identifiers.  The `external` provider has no built-in transport — it delegates every HTTP request to `PlatformAdapter.externalFetch` and parses the response with the inner provider selected by `Profile.basedOn`.

Possible values:

- `anthropic`
- `ollama`
- `openai`
- `openaicompatible`
- `together`
- `openrouter`
- `genai`
- `deepseek`
- `xai`
- `lm-studio`
- `mistral`
- `groq`
- `zhipu`
- `stabilityai`
- `gpt4all`
- `onlyoffice`
- `external`
