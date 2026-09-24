# getProtectedFileUsers

> MentionWrapperArrayWrapper getProtectedFileUsers(fileId)

`GET /api/2.0/files/file/{fileId}/protectusers`

Get users for document protection

Lists the users the file is shared with, which is what a client offers when the author protects a document and picks who may still edit it. The list is built from the whole access list of the file: every entry that is not an explicit denial, with groups expanded into their members, the caller themselves and deleted accounts left out, ordered by display name. Access inherited from the room counts, so a member who never received a share on the file itself is listed too. A file kept in the legacy project storage always answers with an empty list rather than with its team. The call only reads. A guest is refused, an anonymous caller is answered with nothing, and a file id that resolves to nothing is refused as well instead of being reported as missing. For the readers to offer as mentions inside the editor use `GET api/2.0/files/file/{fileId}/sharedusers`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque string. | [required] [example: `10`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The users the file is shared with, ordered by display name | [**MentionWrapperArrayWrapper**](../../models/mention-wrapper-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**MentionWrapperArrayWrapper**](../../models/mention-wrapper-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
