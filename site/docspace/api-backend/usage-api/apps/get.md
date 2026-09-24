# get

> AppWrapper get(id)

`GET /api/2.0/apps/{id}`

Get an app

Returns one portal application by its identifier - one of the feature modules the portal can turn on, such as `ai-rooms` or `docs-cloud` - with the enabled state and the settings document stored for the current portal. The identifier must be an application declared in the installation configuration: take it from `GET api/2.0/apps`, because an unknown identifier is rejected instead of creating anything. Any authenticated portal member may read it. The call is read-only and idempotent. The result carries the identifier, the enabled flag of the current portal and the settings JSON document, which is empty while the portal has never saved settings for this application. An application that is not configured on this installation fails with 404, so this is also the way to find out whether an application exists here at all. Use `GET api/2.0/apps` to read all applications in one call, or `GET api/2.0/apps/{id}/settings` when only the settings document is needed.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **String** | The application to read, by the identifier `GET api/2.0/apps` reports - one of the feature modules the portal can turn on, such as `ai-room` or `docs-cloud`. An identifier not declared in the installation configuration answers 404, which is also how a caller learns that an application does not exist here. | [required] [example: `ai-room`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The application with the enabled state and the settings of the current portal | [**AppWrapper**](../models/app-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **404** | No application with this identifier is configured on this installation | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**AppWrapper**](../models/app-wrapper.md)

## Authorization

[Basic](apps.md#basic), [OAuth2](apps.md#oauth2) (scopes: read, write), [ApiKeyBearer](apps.md#apikeybearer), [asc_auth_key](apps.md#asc_auth_key), [Bearer](apps.md#bearer), [OpenId](apps.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
