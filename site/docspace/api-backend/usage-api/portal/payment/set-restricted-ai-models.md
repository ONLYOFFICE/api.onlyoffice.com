# setRestrictedAiModels

> RestrictedAiModelsWrapper setRestrictedAiModels(SetRestrictedAiModelsRequestDto)

`PUT /api/2.0/portal/payment/ai-model/restrictions`

Set restricted AI models

Replaces the whole set of AI chat models that are barred on the portal. To bar one more model, send it together with the models already barred. To lift a restriction, leave the model out. An empty set lifts all restrictions. First, read the current set from `GET api/2.0/portal/payment/ai-model/restrictions`. Take the model IDs from `GET api/2.0/portal/payment/ai-prices`. If the portal has no billing customer, the call returns 404. AI tools must be on, and you turn it on with `POST api/2.0/portal/payment/servicestate`. While AI tools is off, the call returns 403. Requires a DocSpace admin. Other callers get 403. It also returns 403 if the installation has no billing service or no AI gateway. The call changes data, and you can repeat it with the same body. The set applies from the next AI request. The AI gateway applies the new set from the next AI request, also in open conversations. The call returns the stored set. If `models` is missing or has a null entry, the call returns 400.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **SetRestrictedAiModelsRequestDto** | body | [**SetRestrictedAiModelsRequestDto**](../../models/set-restricted-ai-models-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The set of barred AI chat models as it was stored | [**RestrictedAiModelsWrapper**](../../models/restricted-ai-models-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, or `models` is missing, `null` or holds a `null` entry | - | - |
| **403** | The caller has no portal-settings right or is not a DocSpace administrator, the installation has no billing service or no AI gateway configured, or the AI tools wallet service is off for the portal | - | - |
| **404** | This portal has no billing customer yet | - | - |
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

- **Content-Type**: application/json
- **Accept**: application/json
