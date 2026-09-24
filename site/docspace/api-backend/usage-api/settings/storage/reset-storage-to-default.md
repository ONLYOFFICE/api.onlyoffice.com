# resetStorageToDefault

> resetStorageToDefault()

`DELETE /api/2.0/settings/storage`

Reset the storage settings

Drops the third-party storage configuration of the current portal, module and saved credentials alike, and starts an asynchronous migration of the portal data back into the built-in local storage. The portal moves into the migrating state and stays unavailable until the transfer ends, so follow it with `GET api/2.0/settings/storage/progress`; the call itself returns as soon as the migration has been handed to the storage service and gives back no body. The caller needs the permission to edit portal settings, which in practice means the portal owner or a DocSpace admin, on a server installation with an unrestricted access space. This is a mutating and slow operation rather than a destructive one: documents are copied back rather than deleted, but the credentials of the previous storage are gone from the settings and have to be sent again with `PUT api/2.0/settings/storage` to switch back. Repeating the call while a migration is running starts another one, so poll instead. Resetting the storage is also the step that makes `POST api/2.0/settings/encryption/start` possible, since encryption only covers the local storage.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The storage configuration has been cleared and migration back to the local storage has started | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
