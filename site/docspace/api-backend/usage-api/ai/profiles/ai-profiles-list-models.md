# aiProfilesListModels

> List aiProfilesListModels(profileId)

`GET /api/2.0/ai/profiles/list-models`

List models

Lists the models a stored profile's provider currently offers, asking the provider itself rather than reading a cached list. `profileId` is required and is read from the query. A failure is reported with the provider's own verdict: an unusable key comes back as 400 and a provider that is unreachable or broken as 502, while a missing profile or a caller without access keeps the status the portal gave it. Use `POST api/2.0/ai/profiles/list-provider-models` to probe an endpoint that has no profile yet.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **profileId** | query | **String** | The AI provider profile identifier. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The models the profile's provider currently offers. | [**List**](../../models/ai-model.md) | - |
| **400** | `profileId` is missing, or the provider rejected the profile's API key. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **502** | The AI provider could not be reached, or answered with a failure of its own. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**List**](../../models/ai-model.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
