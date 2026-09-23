# getEncryptionInfo

Referenced types are defined in the [full reference](../files.md).

> FileEncryptionInfoWrapper getEncryptionInfo(fileId)

`GET /api/2.0/files/{fileId}/access`

Get file encryption information

Returns what the caller needs in order to decrypt one file of an end-to-end encrypted private room: `userKeys` holds the key pairs of the calling account, the private half of each of them encrypted with that person's own password, and `fileKeys` holds the file keys that were issued to this account for this file, each naming the public key it was encrypted for. Only the keys of the calling account are ever returned, never those of the other people in the room. An account that holds no key pair yet, and a file no key was issued for, answer with empty lists rather than with an error, so an empty `fileKeys` means the caller cannot open that file rather than that the file is unencrypted. The caller needs read access to the file; a caller without it, and a file that does not exist, are both refused with 403. The operation is read-only. Keys are issued by `PUT api/2.0/files/{fileId}/access`, and the personal key pairs are managed under `api/2.0/privacyroom/keys`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file whose encryption keys are read. Only a file in an end-to-end encrypted             private room has any. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The key pairs of the caller and the file keys issued to them | [**FileEncryptionInfoWrapper**](../files.md#model-fileencryptioninfowrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The file cannot carry encryption keys | - | - |
| **403** | The caller has no read access to the file | - | - |
| **404** | The file does not exist | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileEncryptionInfoWrapper**](../files.md#model-fileencryptioninfowrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
