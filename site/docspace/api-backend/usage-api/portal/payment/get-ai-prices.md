# getAiPrices

> AiPricesWrapper getAiPrices()

`GET /api/2.0/portal/payment/ai-prices`

Get AI model prices

Returns the prices of the AI features that the portal pays for from its wallet. The list covers chat models, embedding models, image models, and web search providers. Requires a DocSpace admin. Other callers get 403. It also returns 403 if the installation has no billing service or no AI gateway. The call is read-only. Token prices are per million tokens, and all prices are in the `currency` of the answer. Each entry has the model ID that the AI operations take. The list does not show what the portal spent. To read the spending, use `GET api/2.0/portal/payment/customer/usage`. To read the models that the portal bars, use `GET api/2.0/portal/payment/ai-model/restrictions`.

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
