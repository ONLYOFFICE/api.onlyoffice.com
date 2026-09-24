# getSharedUsers

> MentionWrapperArrayWrapper getSharedUsers(fileId)

`GET /api/2.0/files/file/{fileId}/sharedusers`

Get users to mention in a file

Lists the portal members who can read the file, which is what an editor client offers when somebody types a mention. The set holds the readers of the file plus everyone who reads it by role rather than by share - the portal owner, the DocSpace administrators and the author of the file - while the caller themselves, the subjects standing behind external links and deactivated accounts are left out. It is ordered by display name as the portal renders it. A guest receives a single entry, the owner of the file, because a guest is not a portal member and may not learn who else works on the document. The caller needs read access to the file, and an unknown file id is reported as missing. The call only reads. A caller who reached the file through an external link instead of an account is answered with nothing at all. For the users to offer when protecting a document use `GET api/2.0/files/file/{fileId}/protectusers`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque string. | [required] [example: `10`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The portal members who can read the file, ordered by display name | [**MentionWrapperArrayWrapper**](../../models/mention-wrapper-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
