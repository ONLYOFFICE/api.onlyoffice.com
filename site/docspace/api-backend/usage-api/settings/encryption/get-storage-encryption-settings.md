# getStorageEncryptionSettings

> EncryptionSettingsWrapper getStorageEncryptionSettings()

`GET /api/2.0/settings/encryption/settings`

Get the storage encryption settings

Returns the encryption state of the installation storage and whether users get an email when a run starts. The response never includes the encryption password. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get an empty body, not an error. The call also returns an empty body if the installation is not self-hosted. The same happens if it has no encryption or limits the access space. It returns an empty body on any other error too. So an empty body does not mean that encryption is off. The call is read-only. To follow a run, use `GET api/2.0/settings/encryption/progress`. To start one, use `POST api/2.0/settings/encryption/start`.

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
