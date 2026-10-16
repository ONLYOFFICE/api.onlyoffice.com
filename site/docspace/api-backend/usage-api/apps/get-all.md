# getAll

> AppArrayWrapper getAll()

`GET /api/2.0/apps`

Get all apps

Returns every portal application available on this installation, each with the state it has for the current portal: the feature modules the portal can turn on and configure, such as `ai-rooms` or `docs-cloud`. The set of applications and their initial enabled state come from the installation configuration and cannot be changed through the API; only the enabled flag and the settings document are stored per portal, by `PUT api/2.0/apps/{id}/enabled` and `PUT api/2.0/apps/{id}/settings`. Any authenticated portal member may read the list. The call is read-only and idempotent. The list follows the order of the configuration, and every item carries the application identifier, whether the application is enabled for the current portal, and the settings JSON document saved for it, which is empty while the portal has never saved one. An empty list means that no applications are configured on this installation, not that they are all disabled. There is neither paging nor filtering here: to read a single application use `GET api/2.0/apps/{id}`.

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
