# setRestrictedAiModels

Referenced types are defined in the [full reference](../api.md).

> RestrictedModelsResponseWrapper setRestrictedAiModels(SetRestrictedAiModelsRequestDto)

`PUT /api/2.0/portal/payment/ai-model/restrictions`

Set restricted AI models

Replaces the whole set of AI chat models barred on this portal: the body is the complete set that is to hold, so adding one restriction means sending the new model together with the ones already restricted, lifting one means leaving it out, and an empty set lifts them all. Read the current set from `GET api/2.0/portal/payment/ai-model/restrictions` and the model identifiers from `GET api/2.0/portal/payment/ai-prices` before calling. The installation needs a billing service and the AI gateway configured, the portal needs a billing customer, and the caller needs the permission to edit the portal settings as well as DocSpace administrator rights. The call is mutating and idempotent - sending the same set twice leaves the same state - and it is written to the portal audit trail. It takes effect on the next AI request, so a conversation already open on a model that has just been barred cannot go on with it. The stored set comes back in the answer.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **SetRestrictedAiModelsRequestDto** | body | [**SetRestrictedAiModelsRequestDto**](../api.md#model-setrestrictedaimodelsrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The set of barred AI chat models as it was stored | [**RestrictedModelsResponseWrapper**](../api.md#model-restrictedmodelsresponsewrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not edit the portal settings or is not a DocSpace administrator, or the installation has no billing service or no AI gateway configured | - | - |
| **404** | This portal has no billing customer yet | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**RestrictedModelsResponseWrapper**](../api.md#model-restrictedmodelsresponsewrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
