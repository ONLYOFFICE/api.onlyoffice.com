# getEnabledModules

> EnabledModuleArrayWrapper getEnabledModules()

`GET /api/2.0/settings/security/modules`

Get enabled modules

Lists the portal modules the calling user can currently open, each as an `id` holding the module's product class name and a `title` holding its display name, both HTML-encoded. Any signed-in member may call this; anonymous callers are not admitted. The operation is read-only and takes no parameters, and the list is specific to the caller: modules hidden for this portal, and modules whose access rules exclude the caller, are left out, and sub-modules nested under another module are never listed. Entries follow the portal's own module order rather than an alphabetical one. An empty list means the installation registers no such modules at all - the case on DocSpace, where the classic modules do not exist - and is not a failure. The identifiers here are display-oriented class names, not the GUIDs the access-settings operations work with, so do not feed them to `GET api/2.0/settings/security/{id}`, which expects a module GUID.

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
