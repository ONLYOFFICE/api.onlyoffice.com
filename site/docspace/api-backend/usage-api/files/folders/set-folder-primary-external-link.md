# setFolderPrimaryExternalLink

> FileShareWrapper setFolderPrimaryExternalLink(id, FolderLinkRequest)

`PUT /api/2.0/files/folder/{id}/links`

Set the folder external link

Creates an external link to a folder or a room, or changes or revokes an existing one, and answers with the link as it now stands. `linkId` decides which: an identifier that is not yet in use, the empty one included, creates a link, while the identifier of an existing link rewrites it, so the whole set of parameters is applied every time and a field left out is reset rather than kept. `access` carries the rights the link grants, and `access` set to the value that denies everything revokes the link instead - the answer is then empty, and a revoked primary link is not recreated by a later read. `title` names the link for the people who manage it, `expirationDate` limits its lifetime and is ignored when it lies in the past, `password` asks visitors for a secret, `denyDownload` leaves them with viewing only, `internal` admits signed-in members alone, and `primary=true` makes it the primary link of the folder. The caller needs the right to manage the links of the room, which its manager and a portal administrator acting as room manager have; anyone else is refused and an unknown folder is answered as not found. The call is mutating.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The folder or room the link belongs to. | [required] [example: `1`] |
| **FolderLinkRequest** | body | [**FolderLinkRequest**](../../models/folder-link-request.md) | The link and the way it is to be shaped. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The link as it now stands, or nothing when it was revoked | [**FileShareWrapper**](../../models/file-share-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileShareWrapper**](../../models/file-share-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
