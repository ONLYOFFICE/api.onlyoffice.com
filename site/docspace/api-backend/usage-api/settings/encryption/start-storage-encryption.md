# startStorageEncryption

> BooleanWrapper startStorageEncryption(StorageEncryptionRequestDto)

`POST /api/2.0/settings/encryption/start`

Start the storage encryption

Starts encryption of the local storage of the installation, or decryption if the data is already encrypted. The saved encryption state sets the direction. The run covers all portals of the installation. First, reset a third-party storage with `DELETE api/2.0/settings/storage` and a CDN with `DELETE api/2.0/settings/storage/cdn`. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call also returns 403 if the installation is not self-hosted or limits the access space. The call queues work and deletes the backup schedules of all portals. Every portal stays unavailable until the run ends. Repeat `GET api/2.0/settings/encryption/progress` until it returns 100. During a run, a repeated call returns 403. After the run, a repeated call starts the opposite run. The server generates the password and never returns it. To email every user before the portals go down, set `notifyUsers` to true. The call returns `true` when the run is queued. In a custom build, it returns `false` and starts nothing. The call returns 415 if the installation does not offer encryption. It also returns 415 if the current portal uses a third-party storage or CDN. Start it only when no portal runs a backup. If the portal is not paid, the call returns 402.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **StorageEncryptionRequestDto** | body | [**StorageEncryptionRequestDto**](../../models/storage-encryption-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | True when the encryption job has been queued; false in a build where storage encryption is switched off | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The portal pricing plan does not include storage encryption | - | - |
| **403** | The caller may not edit portal settings, or this installation does not allow storage encryption | - | - |
| **415** | Storage encryption is not available on this installation, or the storage or the CDN of the current portal is a third-party provider | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../../models/boolean-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
