# getEnabledModules

> EnabledModuleArrayWrapper getEnabledModules()

`GET /api/2.0/settings/security/modules`

Get enabled modules

Returns the portal modules that the calling user can open now. Each entry has the product class name in `id` and the display name in `title`. Both values are HTML-encoded. Any signed-in user can call it. The call is read-only and takes no parameters. The list depends on the caller. It leaves out hidden modules, modules whose access rules exclude the caller, and nested sub-modules. Entries follow the portal's own module order, not the alphabet. An empty list means the installation registers no such modules. This is the normal case on DocSpace, not an error. The `id` values are class names, not module GUIDs. Do not pass them to `GET api/2.0/settings/security/{id}`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The portal modules the calling user can open, each with its product class name and its display name, in the portal's own module order | [**EnabledModuleArrayWrapper**](../../models/enabled-module-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EnabledModuleArrayWrapper**](../../models/enabled-module-array-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
