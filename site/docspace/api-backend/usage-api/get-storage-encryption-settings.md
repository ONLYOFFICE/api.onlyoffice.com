# getStorageEncryptionSettings

Referenced types are defined in the [full reference](../api.md).

> EncryptionSettingsWrapper getStorageEncryptionSettings()

`GET /api/2.0/settings/encryption/settings`

Get the storage encryption settings

Returns the encryption state of the installation storage: the status, which is one of decrypted, encryption started, encrypted or decryption started, and the flag saying whether users are mailed when an encryption run begins. The password is deliberately blanked out, so the field always comes back empty even on an encrypted installation. The caller is expected to have the permission to edit portal settings, which in practice means the portal owner or a DocSpace admin, on a server installation with an unrestricted access space; on any other installation, and whenever the check fails, the operation answers with an empty body instead of an error. An empty answer is therefore not proof that encryption is off, only that the settings cannot be read in this context. Nothing is written and the call is safe to repeat. Use `GET api/2.0/settings/encryption/progress` to follow a run that is in flight, and `POST api/2.0/settings/encryption/start` to encrypt or decrypt the storage.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The encryption status and the notify-users flag, with the password blanked out; empty where encryption settings cannot be read | [**EncryptionSettingsWrapper**](../api.md#model-encryptionsettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not edit portal settings | - | - |
| **405** | Storage encryption is not available on this installation | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EncryptionSettingsWrapper**](../api.md#model-encryptionsettingswrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
