# getEncryptionAccess

> EncryptionKeyArrayWrapper getEncryptionAccess(fileId)

`GET /api/2.0/files/file/{fileId}/publickeys`

Get file encryption keys

Answers with the encryption keys that open one file kept in a private room: one entry per member who holds rights on the file and has published keys, each carrying that member's public key, and the caller's own entry carrying the encrypted private half as well. The private half of another member is never handed out. A member who has not published keys yet is left out of the answer altogether, which is how a client tells that this member cannot open the file until keys are published through `POST api/2.0/privacyroom/keys`; a member who holds the file only through a group is not reported either, because group entries are skipped. The file has to lie in a private room or in the encrypted section - a file kept anywhere else carries no keys and is rejected as an unsupported request. The caller needs read access to the file and is answered with 403 otherwise, and a file that does not exist is answered as missing. The call is read-only, and the answer changes as soon as a member publishes or rotates keys, so read it again rather than caching it for a later session.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque string. | [required] [example: `10`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The keys of the members who can open the file, the private half only for the caller | [**EncryptionKeyArrayWrapper**](../../models/encryption-key-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not read the file | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EncryptionKeyArrayWrapper**](../../models/encryption-key-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
