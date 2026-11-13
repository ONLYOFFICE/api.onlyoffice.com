# getAll

> AppArrayWrapper getAll()

`GET /api/2.0/apps`

Get all apps

Returns all portal applications of the installation, each with its state on the current portal. An application is a feature module that the portal can turn on and configure, such as `ai-rooms` or `docs-cloud`. The installation configuration sets the list and the default state of each application. The API cannot add or remove applications. Any signed-in user can call it. The call is read-only. The list follows the order of the configuration, without paging or a total. The `settings` field is empty until the portal saves settings for the application. An empty list means that the installation has no applications, not that all are turned off. To read one application, use `GET api/2.0/apps/{id}`. To change the state or the settings, use `PUT api/2.0/apps/{id}/enabled` or `PUT api/2.0/apps/{id}/settings`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The portal applications configured on this installation, each with the enabled state and the settings of the current portal | [**AppArrayWrapper**](../models/app-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**AppArrayWrapper**](../models/app-array-wrapper.md)

## Authorization

[Basic](apps.md#basic), [OAuth2](apps.md#oauth2) (scopes: read, write), [ApiKeyBearer](apps.md#apikeybearer), [asc_auth_key](apps.md#asc_auth_key), [Bearer](apps.md#bearer), [OpenId](apps.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
