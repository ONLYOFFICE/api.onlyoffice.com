# resetStorageToDefault

> resetStorageToDefault()

`DELETE /api/2.0/settings/storage`

Reset the storage settings

Clears the third-party storage of the portal and starts moving the portal data back to the local storage. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call also returns 403 if the installation is not self-hosted or limits the access space. The call queues work and returns no body. The portal stays unavailable until the move ends. Repeat `GET api/2.0/settings/storage/progress` until it returns 100. You can repeat the call. During a move, a repeated call starts no second move. The move copies the documents and does not delete them. The call deletes the saved keys of the previous storage. To switch back, send them again with `PUT api/2.0/settings/storage`. Before `POST api/2.0/settings/encryption/start`, reset the storage with this call.

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
