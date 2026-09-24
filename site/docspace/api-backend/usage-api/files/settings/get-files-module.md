# getFilesModule

> ModuleWrapper getFilesModule()

`GET /api/2.0/files/info`

Get the Documents module information

Returns the descriptor of the Documents module of this portal: its identifier, display title and description, the address of its start page, the icon and image addresses, the address of its help section, and whether it is the portal's primary module. It is meant for building navigation to the module, not for working with documents: nothing about files, rooms or permissions comes back, and nothing is changed by the call. The values follow the portal's own configuration and branding, so the title and the description arrive already translated for the caller. Any authenticated role down to a guest may read it; an unauthenticated caller is refused. The content is the same for everyone in the portal and changes only when the portal is reconfigured, so it can be fetched once and cached rather than requested per screen. Only the Documents module is described here; this document carries no listing of the other modules of the portal. The file-related configuration a client needs alongside it - the format tables, the editor addresses and the upload limits - comes from `GET api/2.0/files/settings`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The descriptor of the Documents module: identifier, title, description, icon and start addresses | [**ModuleWrapper**](../../models/module-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ModuleWrapper**](../../models/module-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
