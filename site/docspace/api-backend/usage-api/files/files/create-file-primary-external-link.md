# createFilePrimaryExternalLink

> FileShareWrapper createFilePrimaryExternalLink(id, FileLinkRequest)

`POST /api/2.0/files/file/{id}/link`

Create the file primary external link

Returns the primary external link of a file, and creates it if the file has none. The body sets only a new link: its rights, lifetime, password, download restriction, and sign-in requirement. In a personal section, a link without `expirationDate` never expires. A new link to a PDF allows filling, except in a public room, where it is read-only. For a form in a form-filling room, the call returns the link of the room. Requires the right to share the file. Other callers get 403. The call changes data only when it creates the link. You can repeat it. Later calls return the existing link and ignore the body. If the primary link was revoked, the call creates a new one with a new ID. Until then, `GET api/2.0/files/file/{id}/link` returns 404. The call returns 403 if links to this file cannot have this access level, or the link limit is reached. It also returns 403 if the portal allows external links only in public rooms. It returns 400 if the password does not meet the password policy or `expirationDate` is over 10 years ahead. If no file has this id, the call returns 404. The address is in `sharedTo.shareLink`. To change the link, use `PUT api/2.0/files/file/{id}/links`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The file the link points at. | [required] [example: `1`] |
| **FileLinkRequest** | body | [**FileLinkRequest**](../../models/file-link-request.md) | The settings of the link. They are applied in full, so a field left out is reset rather than kept. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The primary external link of the file | [**FileShareWrapper**](../../models/file-share-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The title or password is longer than 255 characters, the password does not meet the portal password policy, or `expirationDate` lies more than 10 years ahead | - | - |
| **403** | The caller may not share the file, the access level is not available for links to this file, the link limit is reached, or the admin restricts external links to public rooms | - | - |
| **404** | The file does not exist | - | - |
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
| **id** | path | **String** | The file the link points at. | [required] [example: `sbox-42-L1JlcG9ydC5kb2N4`] |


## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
