# setEncryptionInfo

> FileKeysWrittenWrapper setEncryptionInfo(fileId, AccessRequestKeyDto)

`PUT /api/2.0/files/{fileId}/access`

Set file encryption information

Stores the file keys that let the named users open a file of an end-to-end encrypted private room. Each entry names the account, the public key, and the key encrypted with it. So the portal never gets the plain key. Before the call, encrypt the key for each recipient with the public key from `GET api/2.0/files/file/{fileId}/publickeys`. The call replaces the keys of the named accounts and keeps all other keys. Requires read access to the file and the right to create content in the room. Other callers get 403. The call changes data. You can repeat it with the same body. If the file does not exist or is not in a private room, the call also returns 403. If `fileId` is neither a number nor the id of a third-party file, the call returns 404. The call skips recipients without read access to the file. It returns them in `skippedUserIds`. To read the keys, use `GET api/2.0/files/{fileId}/access`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file the keys are issued for; it has to lie in a private room. | [required] [example: `12345`] |
| **AccessRequestKeyDto** | body | [**List**](../../models/access-request-key-dto.md) | One key per account that is to open the file. The keys of the accounts named here are replaced and the keys of everybody else are left as they are, so sending no entry for a person does not revoke that person's key. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The file keys of the recipients who can read the file were stored; the others are listed in `skippedUserIds` | [**FileKeysWrittenWrapper**](../../models/file-keys-written-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The file does not exist, the caller may not issue keys for it, or the file is not in a private room | - | - |
| **404** | The file id is neither a number nor the id of a file in a known third-party storage | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileKeysWrittenWrapper**](../../models/file-keys-written-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **String** | The file the keys are issued for; it has to lie in a private room. | [required] [example: `sbox-42-L1JlcG9ydC5kb2N4`] |


## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
