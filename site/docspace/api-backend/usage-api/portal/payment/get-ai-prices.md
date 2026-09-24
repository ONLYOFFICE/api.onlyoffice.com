# getAiPrices

> AiPricesWrapper getAiPrices()

`GET /api/2.0/portal/payment/ai-prices`

Get AI model prices

Returns the price list of the AI features the portal pays for out of its wallet: the chat models with the price of their prompt and completion tokens, the embedding models, the image models with their per-image price, and the web search providers with the price of one search. The installation needs both a billing service and the AI gateway configured, otherwise the answer is 403, and only a DocSpace administrator may read it; the call is read-only. Token prices are normalised per million tokens, and every price is in the single `currency` the answer names. Each entry carries the model identifier to use when talking to the AI operations, its display alias, its provider with the provider icon, and a link to the model's own page. It is a list of what the models cost and not of what the portal spent - that is `GET api/2.0/portal/payment/customer/usage` - and it says nothing about which of them are allowed here, which is `GET api/2.0/portal/payment/ai-model/restrictions`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The prices of the chat, embedding and image models and of the web search providers, with the currency they are in | [**AiPricesWrapper**](../../models/ai-prices-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator, or the installation has no billing service or no AI gateway configured | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**AiPricesWrapper**](../../models/ai-prices-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
