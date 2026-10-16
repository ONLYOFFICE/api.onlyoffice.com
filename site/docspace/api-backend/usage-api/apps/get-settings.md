# getSettings

> JsonValueWrapper getSettings(id)

`GET /api/2.0/apps/{id}/settings`

Get app settings

Returns only the settings document of one portal application, such as `ai-rooms` or `docs-cloud`: the JSON that the current portal has saved for it through `PUT api/2.0/apps/{id}/settings`, with no wrapper around it. The identifier must be an application declared in the installation configuration, as listed by `GET api/2.0/apps`. Any authenticated portal member may read it. The call is read-only and idempotent. The document comes back exactly as it was saved: its shape is defined by the application itself and is not validated by the portal, and an empty result means that the portal has never saved settings for this application, so the application uses its own defaults. The enabled state is not part of the answer: read it from `GET api/2.0/apps/{id}`.

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
