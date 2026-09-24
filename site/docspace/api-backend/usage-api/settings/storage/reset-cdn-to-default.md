# resetCdnToDefault

> resetCdnToDefault()

`DELETE /api/2.0/settings/storage/cdn`

Reset the CDN storage settings

Drops the CDN configuration of the current portal, module and saved credentials alike, so that the static content is served by the portal itself again. Nothing is uploaded or migrated, no state change is queued and the call gives back no body: only the settings are cleared, and files already copied to the content delivery network are left where they are, to be removed in the provider's own console if that is wanted. The change takes effect for links built after it, so a page that is already open may keep pointing at the CDN until it is reloaded. Repeating the call is harmless, because clearing an empty configuration does nothing. The caller needs the permission to edit portal settings, which in practice means the portal owner or a DocSpace admin, on a server installation with an unrestricted access space. Use `GET api/2.0/settings/storage/cdn` to see what is configured now and `PUT api/2.0/settings/storage/cdn` to select a CDN again; the portal storage of the documents is untouched by this operation and is reset with `DELETE api/2.0/settings/storage` instead.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The CDN configuration has been cleared and static content is served by the portal again | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not edit portal settings, or this installation does not allow changing the storage | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
