# getRestrictedAiModels

> RestrictedAiModelsWrapper getRestrictedAiModels()

`GET /api/2.0/portal/payment/ai-model/restrictions`

Get restricted AI models

Returns the AI chat models that are barred on this portal - the ones no user of it may pick for a conversation, whatever the price list offers. Only a DocSpace administrator may read it, and the call is read-only. When the installation has no billing service or AI is not enabled for the portal, the answer is an empty set instead of an error, which is indistinguishable from a portal that restricts nothing. An empty `models` therefore means every model in `GET api/2.0/portal/payment/ai-prices` may be used. The set names the barred models and not the allowed ones; replace it with `PUT api/2.0/portal/payment/ai-model/restrictions`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The identifiers of the AI chat models barred on this portal, empty when none is | [**RestrictedAiModelsWrapper**](../../models/restricted-ai-models-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | AI tools is on for the portal, but the billing service reports no customer for it or fails to answer | - | - |
| **403** | The caller is not a DocSpace administrator | - | - |
| **500** | The AI gateway answers with an error or cannot be reached | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**RestrictedAiModelsWrapper**](../../models/restricted-ai-models-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
