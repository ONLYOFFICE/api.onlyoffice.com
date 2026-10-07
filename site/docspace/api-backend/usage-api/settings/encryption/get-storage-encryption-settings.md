# getStorageEncryptionSettings

> EncryptionSettingsWrapper getStorageEncryptionSettings()

`GET /api/2.0/settings/encryption/settings`

Get the storage encryption settings

Returns the encryption state of the installation storage: the status, which is one of decrypted, encryption started, encrypted or decryption started, and the flag saying whether users are mailed when an encryption run begins. The encryption password is never returned. The caller is expected to have the permission to edit portal settings, which in practice means the portal owner or a DocSpace admin, on a server installation with an unrestricted access space; on any other installation, and whenever the check fails, the operation answers with an empty body instead of an error. An empty answer is therefore not proof that encryption is off, only that the settings cannot be read in this context. Nothing is written and the call is safe to repeat. Use `GET api/2.0/settings/encryption/progress` to follow a run that is in flight, and `POST api/2.0/settings/encryption/start` to encrypt or decrypt the storage.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The encryption status and the notify-users flag; empty on a custom-mode installation, or when the caller has no portal-settings right, the installation hides storage encryption or does not grant unrestricted space access, or the settings cannot be read | [**EncryptionSettingsWrapper**](../../models/encryption-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EncryptionSettingsWrapper**](../../models/encryption-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
