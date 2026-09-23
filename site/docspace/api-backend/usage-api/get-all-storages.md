# getAllStorages

Referenced types are defined in the [full reference](../api.md).

> StorageArrayWrapper getAllStorages()

`GET /api/2.0/settings/storage`

Get the portal storages

Returns the third-party storages the installation can keep portal data in, the providers the build ships with, such as Amazon S3, Google Cloud Storage or Rackspace. The built-in local storage is not among them: when none of the entries is `current`, the portal data sits in the local storage. Each entry carries the storage identifier and title, the authentication keys the provider expects, `isSet` telling whether those keys are already filled in on the server, and `current` marking the one the portal uses right now. Keys of the current storage are read from the saved settings, keys of the others from the provider configuration, so a value that was never configured comes back empty. The caller needs the permission to edit portal settings, which in practice means the portal owner or a DocSpace admin, and the installation has to be a server one whose access space is not restricted; otherwise the call is refused with 403. Nothing is written and the call is safe to repeat. Use `PUT api/2.0/settings/storage` to switch the storage, `DELETE api/2.0/settings/storage` to go back to the local one, and `GET api/2.0/settings/storage/cdn` or `GET api/2.0/settings/storage/backup` for the CDN and backup targets.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The storages available to the portal, each marked as configured and as currently in use | [**StorageArrayWrapper**](../api.md#model-storagearraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not edit portal settings, or this installation does not allow changing the storage | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StorageArrayWrapper**](../api.md#model-storagearraywrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
