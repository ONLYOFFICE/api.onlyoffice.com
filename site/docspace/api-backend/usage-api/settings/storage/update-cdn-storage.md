# updateCdnStorage

> StorageSettingsWrapper updateCdnStorage(StorageRequestDto)

`PUT /api/2.0/settings/storage/cdn`

Update the CDN storage

Selects the CDN that serves the static content of the portal and starts copying the content to it. Set `module` to an entry of `GET api/2.0/settings/storage/cdn` and `props` to the keys of that provider. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call also returns 403 if the installation is not self-hosted or limits the access space. The call queues work. No call shows its progress. The content appears on the CDN after the server copies it. You can repeat it. If `module` is already the current CDN, the call changes nothing and returns the current settings. Otherwise, it returns the requested CDN settings. If the provider of `module` is not set on the server (`isSet` is false), the call returns 400. The call does not move documents. To move them, use `PUT api/2.0/settings/storage`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **StorageRequestDto** | body | [**StorageRequestDto**](../../models/storage-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The saved CDN configuration; the upload of the static content has been handed to the storage service | [**StorageSettingsWrapper**](../../models/storage-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `module`, or the requested CDN module is unknown or not configured on this installation | - | - |
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
