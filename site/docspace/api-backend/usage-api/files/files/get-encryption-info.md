# getEncryptionInfo

> FileEncryptionInfoWrapper getEncryptionInfo(fileId)

`GET /api/2.0/files/{fileId}/access`

Get file encryption information

Returns the keys that the caller needs to decrypt a file of an end-to-end encrypted private room. The field `userKeys` holds the key pairs of the caller, and `fileKeys` the file keys issued to the caller. The call never returns the keys of other users. Requires read access to the file. Other callers get 403. If the file does not exist, the call also returns 403. The call is read-only. Without a key pair, `userKeys` is null. An empty `fileKeys` means that no key was issued to the caller, whether or not the file is encrypted. A file in a third-party storage also returns an empty `fileKeys`. If `fileId` is neither a number nor the id of a third-party file, the call returns 404. To issue keys, use `PUT api/2.0/files/{fileId}/access`. To manage your own key pairs, use `api/2.0/privacyroom/keys`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file whose encryption keys are read. Only a file in an end-to-end encrypted             private room has any. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The key pairs of the caller and the file keys issued to them | [**FileEncryptionInfoWrapper**](../../models/file-encryption-info-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The file does not exist, or the caller has no read access to it | - | - |
| **404** | The file id is neither a number nor the id of a file in a known third-party storage | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileEncryptionInfoWrapper**](../../models/file-encryption-info-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **String** | The file whose encryption keys are read. Only a file in an end-to-end encrypted             private room has any. | [required] [example: `sbox-42-L1JlcG9ydC5kb2N4`] |


## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
