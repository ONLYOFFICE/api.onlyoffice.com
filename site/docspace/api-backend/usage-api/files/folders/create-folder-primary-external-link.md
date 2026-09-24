# createFolderPrimaryExternalLink

> FileShareWrapper createFolderPrimaryExternalLink(id, FolderLinkRequest)

`POST /api/2.0/files/folder/{id}/link`

Create the folder primary external link

Answers with the primary external link of a folder or a room, creating it on the first call and returning the one that already exists afterwards, so the operation is idempotent in effect: a second call with other parameters does not reconfigure the existing link, and changing one is the business of `PUT api/2.0/files/folder/{id}/links`. The parameters therefore only shape the link at the moment it is born - `access` its rights, `title` its name, `expirationDate` its lifetime, which is unlimited here unless one is given, `internal` whether only signed-in members may follow it, `denyDownload` whether the contents may only be viewed, and `password` a secret to be asked for. Sending `access` with the value that grants nothing creates no link and answers with nothing. The caller needs the right to manage the links of the room the folder belongs to, which its manager and a portal administrator acting as room manager have, and a member with content-creator or read access is refused with 403; an unknown folder is answered with 404. Read the address from `sharedTo.shareLink`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The folder or room the link belongs to. | [required] [example: `1`] |
| **FolderLinkRequest** | body | [**FolderLinkRequest**](../../models/folder-link-request.md) | The link and the way it is to be shaped. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The primary external link of the folder | [**FileShareWrapper**](../../models/file-share-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not manage the links of this folder | - | - |
| **404** | The folder does not exist | - | - |
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
