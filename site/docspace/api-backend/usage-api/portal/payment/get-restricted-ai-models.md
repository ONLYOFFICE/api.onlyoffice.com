# getRestrictedAiModels

> RestrictedAiModelsWrapper getRestrictedAiModels()

`GET /api/2.0/portal/payment/ai-model/restrictions`

Get restricted AI models

Returns the AI chat models that no user of the portal can pick. Requires a DocSpace admin. Other callers get 403. The call is read-only. If the installation has no billing service or AI tools is off, the call returns an empty set. That answer looks the same as a portal without restrictions. An empty `models` means that every model of `GET api/2.0/portal/payment/ai-prices` is allowed. The call returns 402 if AI tools is on but the billing service has no customer or fails. To replace the set, use `PUT api/2.0/portal/payment/ai-model/restrictions`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The identifiers of the AI chat models barred on this portal, empty when none is | [**RestrictedAiModelsWrapper**](../../models/restricted-ai-models-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | AI tools is on for the portal, but the billing service reports no customer for it or fails to answer | - | - |
| **403** | The caller is not a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**RestrictedAiModelsWrapper**](../../models/restricted-ai-models-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
