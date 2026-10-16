# AiEntryPricingDtoAiEmbeddingPriceDto
One AI model or service on the price list: how to name it, who provides it, and what it costs.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | The model identifier to send to the AI operations. It is the value to branch on, while `alias` is for display only. | [required] [example: `gpt-4o`] [nullable] |
| **alias** | **String** | The model name as the vendor writes it, meant to be shown to a person rather than matched on. | [required] [example: `GPT-4o`] [nullable] |
| **provider** | **String** | Who runs the model. Two entries can share a provider, and one provider's models can be priced quite differently, so the price always belongs to the entry and never to the provider. | [required] [example: `openai`] [nullable] |
| **image** | **String** | The absolute URL of the provider's icon, for rendering next to the entry. | [required] [example: `https://cdn.example.com/providers/openai.png`] [nullable] |
| **price** | [**AiEmbeddingPriceDto**](ai-embedding-price-dto.md) | What the entry costs, in the currency the answer names. Amounts per token are normalised per million tokens, so they are not the price of a single call. | [required] |
| **link** | **String** | The provider's own page for the model, for a person to read the model's terms. It is empty when the provider publishes none. | [required] [example: `https://openai.com/pricing`] [nullable] |
