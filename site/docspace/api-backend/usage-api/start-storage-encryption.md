# startStorageEncryption

Referenced types are defined in the [full reference](../api.md).

> BooleanWrapper startStorageEncryption(StorageEncryptionRequestsDto)

`POST /api/2.0/settings/encryption/start`

Start the storage encryption

Queues encryption of everything the installation keeps in its local storage, or decryption of it when the data is already encrypted: the saved encryption state decides the direction, so the same call encrypts a decrypted installation and decrypts an encrypted one. It covers the whole server, not one portal, and only a server installation with the feature switched on can run it, with neither the portal storage nor the CDN pointing at a third-party provider: reset those first with `DELETE api/2.0/settings/storage` and `DELETE api/2.0/settings/storage/cdn`. No backup may be running, and the backup schedules of all portals are dropped as part of starting. The caller needs the permission to edit portal settings, that is the portal owner or a DocSpace admin, and an unrestricted access space. This is a long, disruptive operation: every portal is put into the encryption state and stays unavailable until it ends, so do not repeat the call while it runs, and follow it with `GET api/2.0/settings/encryption/progress` instead. The password is generated on the server and never returned by the API. Pass `notifyUsers=true` to mail every user before the portals go down. The response is true once the job is queued, and false where encryption is switched off, nothing being started then.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **StorageEncryptionRequestsDto** | body | [**StorageEncryptionRequestsDto**](../api.md#model-storageencryptionrequestsdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | True when the encryption job has been queued; false in a build where storage encryption is switched off | [**BooleanWrapper**](../api.md#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The portal pricing plan does not include storage encryption | - | - |
| **403** | The caller may not edit portal settings, or this installation does not allow storage encryption | - | - |
| **405** | Storage encryption is not available on this installation | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../api.md#model-booleanwrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## SettingsGreetingSettingsApi
