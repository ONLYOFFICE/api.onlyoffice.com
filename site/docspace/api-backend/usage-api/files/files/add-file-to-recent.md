# addFileToRecent

> FileWrapper addFileToRecent(fileId)

`POST /api/2.0/files/file/{fileId}/recent`

Add a file to Recent

Adds a file to the top of the Recent section of the calling account and returns the file. Other users do not see the change, and the file itself stays unchanged. Requires read access to the file, including access through an external link. Other callers get 403. The call changes data. You can repeat it, and the file keeps one entry. The section keeps the 1000 newest entries of the account and deletes older ones. The call returns an encrypted file of a private room but does not add it. To read the section, use `GET api/2.0/files/recent`. To delete entries, use `DELETE api/2.0/files/recent`. To hide the section, use `PUT api/2.0/files/displayrecent`. The call returns 404 for an unknown file or for a string id with an unknown storage type. If a string id points to a storage account that is not connected, the call returns 400.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque string. | [required] [example: `10`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The file as it stands after the entry was recorded | [**FileWrapper**](../../models/file-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | A third-party file identifier refers to a storage account that is not connected | - | - |
| **403** | The calling account cannot read this file | - | - |
| **404** | No file answers to this identifier | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileWrapper**](../../models/file-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **String** | The file the operation addresses. Take the identifier from a listing such as &#x60;GET api/2.0/files/\{folderId\}&#x60;: a file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque string. | [required] [example: `sbox-42-L1JlcG9ydC5kb2N4`] |

Return type: [**ThirdPartyFileWrapper**](../../models/third-party-file-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
