# getRestrictedAiModels

Referenced types are defined in the [full reference](../api.md).

> RestrictedModelsResponseWrapper getRestrictedAiModels()

`GET /api/2.0/portal/payment/ai-model/restrictions`

Get restricted AI models

Returns the AI chat models that are barred on this portal - the ones no user of it may pick for a conversation, whatever the price list offers. Only a DocSpace administrator may read it, and the call is read-only. When the installation has no billing service or AI is not enabled for the portal, the answer is an empty set instead of an error, which is indistinguishable from a portal that restricts nothing. An empty `models` therefore means every model in `GET api/2.0/portal/payment/ai-prices` may be used. The set names the barred models and not the allowed ones; replace it with `PUT api/2.0/portal/payment/ai-model/restrictions`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The identifiers of the AI chat models barred on this portal, empty when none is | [**RestrictedModelsResponseWrapper**](../api.md#model-restrictedmodelsresponsewrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**RestrictedModelsResponseWrapper**](../api.md#model-restrictedmodelsresponsewrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
