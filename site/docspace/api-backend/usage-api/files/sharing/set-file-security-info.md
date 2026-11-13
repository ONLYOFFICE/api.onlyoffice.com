# setFileSecurityInfo

> FileShareArrayWrapper setFileSecurityInfo(id, SecurityInfoSimpleRequestDto)

`PUT /api/2.0/files/file/{id}/share`

Share a file

Changes the access of accounts and groups to a file. The access `None` deletes the rights. Requires the right to manage access to the file. Other callers get 403. The call changes data, and you can repeat it with the same body. It skips subjects the caller may not share with. It also skips deactivated accounts, deleted groups, and files outside My documents and rooms. If `notify` is true, the portal emails the accounts about the change. An account that got an email about the same access to this file recently gets no new one. A new `sharingMessage` does not change this. The call returns the new rights of the listed subjects. A repeat skips subjects that already have the listed access, so it sends no email. A repeated `None` changes nothing but returns the rights of the other listed subjects. An empty `share` or an unknown file changes nothing and returns an empty list. To change several entries in one call, use `PUT api/2.0/files/share`. The call returns 400 for an invalid or too long `email`, too many email invitations, or a too long `sharingMessage`. It also returns 403 if a subject cannot get the access.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The file whose sharing is being changed. A file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque string. | [required] [example: `10`] |
| **SecurityInfoSimpleRequestDto** | body | [**SecurityInfoSimpleRequestDto**](../../models/security-info-simple-request-dto.md) | The rights to apply to the file, and whether to announce them by mail. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The rights the listed subjects hold on the file after the change | [**FileShareArrayWrapper**](../../models/file-share-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, an `email` in `share` is malformed or longer than 255 characters, `share` invites more addresses by email than the portal allows at once, or `sharingMessage` is longer than 255 characters | - | - |
| **403** | The caller may not change the sharing of the file, or a listed subject cannot be given the requested access on it | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileShareArrayWrapper**](../../models/file-share-array-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **String** | The file whose sharing is being changed. A file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque string. | [required] [example: `sbox-42-L1JlcG9ydC5kb2N4`] |


## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
