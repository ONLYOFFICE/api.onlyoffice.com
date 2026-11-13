# setFileExternalLink

> FileShareWrapper setFileExternalLink(id, FileLinkRequest)

`PUT /api/2.0/files/file/{id}/links`

Set a file external link

Creates an external link of a file, or changes or revokes one, and returns the link. The value of `linkId` decides the action. An unused id, including the empty one, creates a link. The id of an existing link changes that link. The call applies every field each time, so a field that you leave out goes back to its default. An `access` of `None` revokes the link, and the call returns an empty body. A later read does not create a revoked primary link again. With `primary=true`, the link becomes the primary link of the file. For a PDF form in a form-filling room, `FillForms` and `None` change the link of the room. Requires the right to share the file. Other callers get 403. The call changes data. Do not repeat a call with an empty `linkId`. Each such call creates another link. With any other `linkId`, you can repeat it with the same body. The call returns 403 if links to this file cannot have this access level, or the link limit is reached. It also returns 403 if the portal settings for external links forbid the change. It returns 400 if the password does not meet the password policy or `expirationDate` is over 10 years ahead. If no file has this id, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The file the link points at. | [required] [example: `1`] |
| **FileLinkRequest** | body | [**FileLinkRequest**](../../models/file-link-request.md) | The settings of the link. They are applied in full, so a field left out is reset rather than kept. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The link as it now stands, or nothing when it was revoked | [**FileShareWrapper**](../../models/file-share-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The title or password is longer than 255 characters, the password does not meet the portal password policy, or `expirationDate` lies more than 10 years ahead | - | - |
| **403** | The caller may not share the file, the access level is not available for links to this file, the link limit is reached, or the admin's restriction on external links forbids the change | - | - |
| **404** | The file id resolves to nothing | - | - |
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
