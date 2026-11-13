# createFolderPrimaryExternalLink

> FileShareWrapper createFolderPrimaryExternalLink(id, FolderLinkRequest)

`POST /api/2.0/files/folder/{id}/link`

Create the folder primary external link

Returns the primary external link of a folder or a room, and creates it if it does not exist. The call uses the body only when it creates the link. If the link exists, the call returns it unchanged. Requires the right to manage the links of the folder. Other callers get 403. The room manager has this right, but a content creator does not. The call changes data only when it creates the link. You can repeat it, and later calls return the same link. To change a link, use `PUT api/2.0/files/folder/{id}/links`. If `access` grants nothing, the call creates no link and returns an empty response. Read the address from `sharedTo.shareLink`. The call returns 400 if the title or password is too long, or the password breaks the portal policy. It also returns 400 if `expirationDate` is more than 10 years ahead. It also returns 403 if folder links cannot have this access level. The link limit and a ban on external links outside public rooms also return 403. If the folder does not exist, the call returns 404. If the primary link was revoked, the call creates a new one with a new ID. Until then, `GET api/2.0/files/folder/{id}/link` returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The folder or room the link belongs to. | [required] [example: `1`] |
| **FolderLinkRequest** | body | [**FolderLinkRequest**](../../models/folder-link-request.md) | The link and the way it is to be shaped. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The primary external link of the folder | [**FileShareWrapper**](../../models/file-share-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The title or password is longer than 255 characters, the password does not meet the portal password policy, or `expirationDate` lies more than 10 years ahead | - | - |
| **403** | The caller may not manage the links of this folder, the access level is not available for links to this folder, the link limit is reached, or the admin restricts external links to public rooms | - | - |
| **404** | The folder does not exist | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileShareWrapper**](../../models/file-share-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **String** | The folder or room the link belongs to. | [required] [example: `sbox-42`] |


## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
