# getSettings

> JsonValueWrapper getSettings(id)

`GET /api/2.0/apps/{id}/settings`

Get app settings

Returns only the settings of one portal application on the current portal. The answer is the saved JSON value itself, not an application object. Take the identifier from `GET api/2.0/apps`. It is case-sensitive. Any signed-in user can call it. The call is read-only. The portal returns the value as it was saved and never checks its shape. An empty result means that the portal has no saved settings for the application. Then the application uses its own defaults. To read the enabled state, use `GET api/2.0/apps/{id}`. If the installation has no application with this identifier, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **String** | The application to read, by the identifier `GET api/2.0/apps` reports - one of the feature modules the portal can turn on, such as `ai-room` or `docs-cloud`. An identifier not declared in the installation configuration answers 404, which is also how a caller learns that an application does not exist here. | [required] [example: `ai-room`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The settings document saved for the application, or an empty result if the portal has never saved one | [**JsonValueWrapper**](../models/json-value-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **404** | No application with this identifier is configured on this installation | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**JsonValueWrapper**](../models/json-value-wrapper.md)

## Authorization

[Basic](apps.md#basic), [OAuth2](apps.md#oauth2) (scopes: read, write), [ApiKeyBearer](apps.md#apikeybearer), [asc_auth_key](apps.md#asc_auth_key), [Bearer](apps.md#bearer), [OpenId](apps.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
