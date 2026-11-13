# updateStorage

> StorageSettingsWrapper updateStorage(StorageRequestDto)

`PUT /api/2.0/settings/storage`

Switch the portal storage

Switches the portal to another storage and starts moving the portal data to it. Set `module` to an entry of `GET api/2.0/settings/storage` and `props` to the keys of that provider. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call also returns 403 if the installation is not self-hosted or limits the access space. The call queues work. The portal stays unavailable until the move ends. Repeat `GET api/2.0/settings/storage/progress` until it returns 100. Do not send another switch during a move. If `module` is already the current storage, the call changes nothing and returns the current settings. Otherwise, it returns the requested settings, not the state of the move. If the provider of `module` is not set on the server (`isSet` is false), the call returns 400. To return to the local storage, use `DELETE api/2.0/settings/storage`. To select a CDN, use `PUT api/2.0/settings/storage/cdn`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **StorageRequestDto** | body | [**StorageRequestDto**](../../models/storage-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The saved storage configuration; migration of the portal data to it has been started | [**StorageSettingsWrapper**](../../models/storage-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `module`, or the requested storage module is unknown or not configured on this installation | - | - |
| **403** | The caller may not edit portal settings, or this installation does not allow changing the storage | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StorageSettingsWrapper**](../../models/storage-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
