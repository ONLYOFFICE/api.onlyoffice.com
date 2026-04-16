---
sidebar_position: 4
---

# AI plugin settings

These parameters define the AI plugin properties.

## aiSettings.version

`Type: integer`   `Default: 3`

Defines the version of the AI SDK.

## aiSettings.timeout

`Type: string`   `Default: "5m"`

Defines an AI proxy timeout (measured in minutes).

## aiSettings.proxy

`Type: string`   `Default: ""`

Supports routing AI requests via proxy.

## aiSettings.allowedCorsOrigins

`Type: array of strings`   `Default: ["https://onlyoffice.github.io","https://onlyoffice-plugins.github.io"]`

Defines which external websites are permitted to make cross-origin requests to the server.

## aiSettings.actions

`Type: object`

Defines actions performed by AI, e.g., Chat, Summarization, Translation, TextAnalyze, ImageGeneration, OCR, Vision.

## aiSettings.providers

`Type: object`

Defines AI providers, e.g., OpenAI, Google Gemini, Anthropic, etc.

## aiSettings.customProviders

`Type: object`

Custom AI service providers configuration

## aiSettings.models

`Type: array of objects`   `Default: []`

Defines AI models, e.g., gemini-1.5-pro-latest, llama3.2:latest, etc.

## Example

```json
{
  "aiSettings": {
    "actions": {},
    "models": [],
    "providers": {},
    "version": 3,
    "timeout": "5m",
    "allowedCorsOrigins": [
      "https://onlyoffice.github.io",
      "https://onlyoffice-plugins.github.io"
    ],
    "proxy": ""
  }
}
```

